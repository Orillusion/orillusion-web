# Raycasting and MeshBVH

Raycasting computes, on the CPU, where a ray meets the triangles of a mesh: mouse picking, placing objects on a model's surface, line-of-sight checks, snapping to the ground and so on. The engine offers two entry points that share the same intersection code, accelerated by a triangle bounding volume hierarchy, `MeshBVH`:

| Entry point | Use it for |
| --- | --- |
| [Raycaster](#raycaster) | Any ray (not only from the camera) against any `MeshRenderer`, no collider needed; can return every hit along the ray |
| [Pick events](/guide/interaction/pickfire) in `bound` mode + `MeshColliderShape` | Event-driven interaction such as hover and click |

Compared with [frame buffer picking](/guide/interaction/pickfire#frame-buffer-picking), raycasting does not depend on the rendered image: rays can start anywhere and point in any direction, every hit along the ray is available, and each hit carries the triangle index, barycentric coordinates, UVs and more.

## Raycaster

### Basic Usage

```ts
import { Raycaster } from '@orillusion/core';

const raycaster = new Raycaster();

// A ray from the camera through a pixel of the canvas
raycaster.setFromCamera(view.camera, input.mouseX, input.mouseY);

// Intersect every mesh in the scene (children included by default); hits are sorted nearest first
const hits = raycaster.intersectObject(view.scene);
if (hits.length > 0) {
    const hit = hits[0];
    console.log(hit.object3D.name, hit.point, hit.normal, hit.uv);
}
```

`Raycaster` walks every enabled `MeshRenderer` under the given objects and intersects them one by one; no `ColliderComponent` is needed. Sky spheres (`SkyRenderer`, `AtmosphericComponent`, `EarthSkyRenderer`) are skipped by default, so intersecting the whole `scene` does not hit the sky far away; turn on `includeSky` if you need them.

### Building the Ray

| Method | Description |
| --- | --- |
| `setFromCamera(camera, x, y)` | Ray from the camera through canvas pixel `(x, y)`, in CSS pixels relative to the canvas' top-left corner, as in `InputSystem.mouseX/Y` and `PointerEvent3D.mouseX/Y` |
| `setFromCameraNDC(camera, x, y)` | Ray from the camera through normalized device coordinates `(x, y)`, each in `-1 ~ 1`, `y` up |
| `set(origin, direction)` | World-space origin and direction (the direction is normalized); can also be passed to the constructor |

```ts
// Cast down from above a character to find the ground under it
const down = new Raycaster(new Vector3(x, 100, z), new Vector3(0, -1, 0));
const ground = down.intersectFirst(terrain);
if (ground) role.y = ground.point.y;
```

### Intersection Methods

| Method | Description |
| --- | --- |
| `intersectObject(object, recursive = true, out = [])` | Intersect an object (and its children); returns every hit, sorted by distance |
| `intersectObjects(objects, recursive = true, out = [])` | Same, for several root objects |
| `intersectFirst(objects, recursive = true)` | Only the closest hit, or `null`. Each mesh is only searched up to the closest distance found so far, so it is faster than `intersectObjects(...)[0]` |

### Options

| Property | Default | Description |
| --- | --- | --- |
| `near` / `far` | `0` / `Infinity` | Only keep hits within this distance range (world units) |
| `layerMask` | `VisibleLayer.All` | Only test renderers whose `visibleLayer` shares a bit with it |
| `filter` | `null` | Per-renderer filter; return `false` to skip a renderer |
| `includeSky` | `false` | Whether to test sky spheres (`SkyRenderer`, `AtmosphericComponent`, `EarthSkyRenderer`) |
| `side` | `'material'` | Faces that can be hit: `'material'` follows each sub-mesh material's `cullMode` (the faces you see on screen), `'front'` / `'back'` only front / back faces, `'double'` both |
| `firstHitOnly` | `false` | Report only the closest hit per mesh instead of every crossing |
| `useBVH` | `'auto'` | When to use `MeshBVH`, see [MeshBVH acceleration](#meshbvh-acceleration) |
| `deformation` | `'cpu'` | How skinned and morph-target meshes are handled, see [Skinned and morph-target meshes](#skinned-and-morph-target-meshes) |

```ts
// Ignore the marker object and only hit front faces
raycaster.filter = (renderer) => renderer.object3D !== marker;
raycaster.side = 'front';
```

Disabled objects, renderers and materials are skipped, as are sub-meshes with a topology other than `triangle-list` (lines, points). Renderers batched by an `InstanceDrawComponent` are disabled individually but still tested.

### Hit Results

Every hit is a new `RaycastHit` object that you can keep:

| Field | Description |
| --- | --- |
| `distance` | World-space distance from the ray origin to the hit |
| `point` / `localPoint` | Hit point in world space / in the mesh's local space |
| `normal` | World-space normal: the vertex normals interpolated with the barycentric coordinates, or `faceNormal` when the geometry has no normals. Not flipped for back-face hits |
| `faceNormal` | Geometric normal of the hit triangle (world space, from the triangle winding) |
| `faceIndex` | Triangle index into the index buffer; its vertices are `indices[faceIndex * 3 .. + 2]` |
| `barycentric` | Barycentric weights `(w0, w1, w2)` of the triangle's three vertices |
| `frontFace` | Whether the ray hit the front (counter-clockwise, as rendered) side of the triangle |
| `uv` / `uv1` | Interpolated `TEXCOORD_0` / `TEXCOORD_1`, or `null` when the geometry has none |
| `subGeometryIndex` | Sub-geometry of the triangle; drawn with `renderer.materials[subGeometryIndex]` |
| `object3D` / `renderer` | The object and renderer that were hit |

## MeshBVH Acceleration

Without an acceleration structure, every ray has to test every triangle of the mesh, so the cost grows with the triangle count. `MeshBVH` builds a bounding volume hierarchy over the triangles of a geometry; a query only visits the few nodes along the ray, which is roughly logarithmic. For a mesh of about 320,000 triangles, building the tree takes about 140 ms; after that a ray costs about 13 µs, against about 4.4 ms when testing every triangle, roughly 300 times faster.

### When to Use the BVH

`Raycaster.useBVH` and `MeshColliderShape.useBVH` decide whether the BVH is used:

| Value | Description |
| --- | --- |
| `'auto'` | Use the BVH when one has been built for the geometry, otherwise test every triangle. **Default for `Raycaster`** |
| `'always'` | Build and cache a tree on the first query. **Default for `MeshColliderShape`** |
| `'never'` | Always test every triangle |

For high-poly models that are tested often, build the tree ahead of time to avoid a hitch on the first test:

```ts
import { MeshBVH } from '@orillusion/core';

// Build and cache the tree; an 'auto' Raycaster then uses it
const bvh = MeshBVH.build(meshRenderer.geometry);
console.log(bvh.triCount, bvh.nodeCount, bvh.depth);
```

### Caching and Updates

The BVH is cached per geometry; renderers sharing a geometry share its tree:

| Method | Description |
| --- | --- |
| `MeshBVH.build(geometry, maxLeafTris = 8)` | Build (or rebuild) and cache the tree; `maxLeafTris` is the largest number of triangles per leaf |
| `MeshBVH.get(geometry)` | The cached tree, building it if needed |
| `MeshBVH.has(geometry)` | Whether a tree is cached |
| `MeshBVH.invalidate(geometry)` | Drop the cached tree; the next `get` rebuilds it |
| `bvh.refit()` | Keep the tree structure and recompute the node bounds from the current vertex positions |

When the geometry's vertices change, the cached tree is updated on the next query: it is refit when positions are modified in place and re-uploaded (for example by calling `geometry.setAttribute` again), and rebuilt when the vertex or index arrays are replaced. If you only edited the positions in place without re-uploading them, call `bvh.refit()` or `MeshBVH.invalidate()` yourself.

::: tip
`refit()` is cheap (linear in the triangle count) but only updates the bounds, not the tree structure. After large deformations queries stay correct but get slower; rebuild with `MeshBVH.build()` then.
:::

The BVH contains the LOD 0 triangles of every sub-geometry, supports indexed and non-indexed geometry as well as the interleaved vertex format of prefabs (`compose_bin`). It describes the geometry's own vertices, without skinning or morph targets.

### Querying MeshBVH Directly

For custom work in a geometry's local space you can also query `MeshBVH` directly. Note that its inputs and results are in **the geometry's local space**, and the distance `t` is in local units too:

```ts
import { MeshBVH, MeshRenderer, Vector3 } from '@orillusion/core';

const renderer = obj.getComponent(MeshRenderer);
const bvh = MeshBVH.get(renderer.geometry);

// Transform the world-space ray into the mesh's local space
const inv = renderer.transform.worldMatrix.clone().invert();
const origin = inv.transformPoint(worldOrigin.clone());
const direction = inv.transformVector(worldDirection.clone()).normalize();

// Closest hit, front faces only, at most 100 local units away
const hit = bvh.raycast(origin, direction, { cull: 'back', far: 100 });
if (hit) console.log(hit.t, hit.triIndex, hit.point, hit.faceNormal);
```

| Method | Description |
| --- | --- |
| `raycast(origin, direction, options?, target?)` | Closest hit, or `null`; pass `target` to reuse a result object |
| `raycastAll(origin, direction, options?, out?)` | Every hit, sorted by distance; a crossing through a shared edge or vertex is reported once |
| `intersectsRay(origin, direction, options?)` | Whether the ray hits any triangle; returns at the first one found, for line-of-sight checks |
| `MeshBVH.raycastGeometry(geometry, ...)` | Closest hit without building a tree, testing every triangle; for one-off queries or tiny meshes |
| `MeshBVH.raycastGeometryAll(geometry, ...)` | Every hit without building a tree |

Query `options`:

| Field | Default | Description |
| --- | --- | --- |
| `cull` | `'none'` | Faces to ignore: `'none'`, `'back'` (skip back faces, as a `cullMode: 'back'` material shows them) or `'front'`; `true` means `'back'` |
| `near` / `far` | `0` / `Infinity` | Only keep hits within this distance range |

The result `MeshBVHHit` holds `t` (distance along the ray), `triIndex`, barycentric coordinates `u` / `v` (`v0` gets `1 - u - v`), `point`, `faceNormal`, `frontFace` and `subGeometryIndex`.

## Skinned and Morph-target Meshes

Skeletal animation and morph targets are applied by the GPU in the vertex shader; the geometry still holds the bind pose, so intersecting it directly hits the wrong place. `Raycaster.deformation` decides how such meshes are handled:

| Value | Description |
| --- | --- |
| `'cpu'` | Default. Deform the vertices on the CPU the same way the vertex shader does, then intersect the result, so hits match the image |
| `'bindPose'` | Intersect the undeformed bind pose |
| `'skip'` | Ignore such meshes |

CPU deformation is done by `MeshDeformer`: morph targets first, then skinning. It supports glTF's `SkinnedMeshRenderer2` + `AnimatorComponent` and prefabs' `SkinnedMeshRenderer` + `SkeletonAnimationComponent`. The deformed result is cached per renderer and only recomputed when the bone matrices or morph weights change, with its BVH updated through `refit()`.

`MeshColliderShape` has a `deformation` property of its own, and `ColliderComponent` links it to the renderer on the same object, so `bound`-mode pick events follow the animation as well.

The example below casts a ray from the mouse position every frame: the red dot is the hit on the animated surface, the yellow dot points along the normal, and the blue dot is where the same ray hits the bind pose. Use the panel to switch animations, adjust the lion's blend shapes, or change `deformation` to compare.

<Demo src="/examples/pick/SkinnedMesh.ts"></Demo>

<<< @/public/examples/pick/SkinnedMesh.ts

## Working with Pick Events

In `bound` mode of the [pick events](/guide/interaction/pickfire), `MeshColliderShape` uses the same intersection code and builds a BVH on the first pick by default, so even models with hundreds of thousands of triangles can be picked accurately every frame:

```ts
import { ColliderComponent, MeshColliderShape } from '@orillusion/core';

// Without shape.mesh, the geometry of the MeshRenderer on the same object is used
const collider = obj.addComponent(ColliderComponent);
collider.shape = new MeshColliderShape();
```

| `MeshColliderShape` property | Default | Description |
| --- | --- | --- |
| `mesh` | automatic | Geometry to pick against; when unset, the geometry of the `MeshRenderer` on the same object |
| `useBVH` | `'always'` | When to use the BVH |
| `backfaceCulling` | `false` | Whether to skip back faces |
| `maxDistance` | `Infinity` | Ignore hits farther than this (world units) |
| `deformation` | `'cpu'` | How skinned and morph-target meshes are handled |

In `bound` mode the pick event data `e.data` contains the following fields; all positions and normals are in world space:

| Field | Description |
| --- | --- |
| `worldPos` / `localPos` | Hit point in world space / in the collider's local space |
| `worldNormal` | Normal at the hit point |
| `distance` | Distance from the ray origin to the hit |
| `faceNormal`, `faceIndex`, `barycentric`, `uv`, `uv1`, `subGeometryIndex`, `frontFace` | `MeshColliderShape` only; same meaning as in [Hit Results](#hit-results) |
| `hits` | Hits on every collider the ray crosses, nearest first |

```ts
view.pickFire.addEventListener(PointerEvent3D.PICK_MOVE, (e: PointerEvent3D) => {
    const d = e.data;
    marker.localPosition = d.worldPos;
    console.log(e.target.name, d.faceIndex, d.uv, d.hits.length);
}, this);
```

`view.pickFire.layerMask` and `view.pickFire.filter` exclude colliders from picking, the same way as on `Raycaster`.

In the example below, a sphere of about 320,000 triangles, a torus of 40,000 triangles and a few scaled boxes all use `MeshColliderShape`. Moving the mouse picks the exact triangles every frame and places a marker at the hit; clicking runs a `Raycaster` over the whole scene and lists every hit along the ray; the `Benchmark` panel compares the BVH with testing every triangle.

<Demo src="/examples/pick/MeshBVH.ts"></Demo>

<<< @/public/examples/pick/MeshBVH.ts
