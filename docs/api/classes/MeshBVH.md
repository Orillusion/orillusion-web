[**@orillusion/core**](../README.md)

***

# Class: MeshBVH

Defined in: [src/core/tree/bvh/MeshBVH.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L156)

Bounding-volume hierarchy over the triangles of a `GeometryBase`, for fast
CPU ray queries (picking, placement, line-of-sight). Built once per
geometry and cached in a `WeakMap`; brute-force scanning every triangle
is O(n) per ray, the BVH is O(log n).

Nodes are stored flat in typed arrays (6 floats of bounds + 2 uints per
node) so traversal allocates nothing until a hit is reported. Leaves hold
up to `maxLeafTris` triangles; interior nodes split on the longest
centroid axis at the midpoint of the centroid bounds, falling back to a
median split when one side would be empty.

Only triangles drawn at LOD 0 of each `SubGeometry` are indexed (the
whole index buffer when the geometry has no sub-geometries). Positions
are read from the `position` attribute, or from the interleaved `all`
buffer of `compose_bin` (prefab) geometry. Skinning and morph targets are
not applied: the tree describes the bind pose.

The cache follows `GeometryBase.version`: when positions are re-uploaded
in place the tree is refit, when the vertex/index arrays are replaced it
is rebuilt. After editing positions in place without an upload, call
`refit()` (or `MeshBVH.invalidate`).

```ts
const bvh = MeshBVH.get(meshRenderer.geometry);
const hit = bvh.raycast(localOrigin, localDirection, { cull: 'back', far: 100 });
```

The static `raycastGeometry` / `raycastGeometryAll` run the same queries
without building a tree, for one-off rays or tiny meshes.

## Properties

### triCount

> `readonly` **triCount**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:287](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L287)

Number of triangles indexed.

***

### nodeCount

> **nodeCount**: `number` = `0`

Defined in: [src/core/tree/bvh/MeshBVH.ts:289](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L289)

Number of BVH nodes (interior + leaf).

***

### depth

> **depth**: `number` = `0`

Defined in: [src/core/tree/bvh/MeshBVH.ts:291](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L291)

Deepest leaf level (root = 0).

***

### geometry

> `readonly` **geometry**: [`GeometryBase`](GeometryBase.md)

Defined in: [src/core/tree/bvh/MeshBVH.ts:293](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L293)

The geometry this tree was built for.

## Methods

### get()

> `static` **get**(`geometry`, `maxLeafTris?`): `MeshBVH`

Defined in: [src/core/tree/bvh/MeshBVH.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L166)

Fetch the cached BVH for a geometry, building it on first use. A cached
tree whose geometry changed since (see `GeometryBase.version`) is
refit or rebuilt first.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

##### maxLeafTris?

`number` = `8`

only used when a tree has to be built; use
`build` to force a different leaf size.

#### Returns

`MeshBVH`

***

### build()

> `static` **build**(`geometry`, `maxLeafTris?`): `MeshBVH`

Defined in: [src/core/tree/bvh/MeshBVH.ts:183](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L183)

Build (or rebuild) the BVH for a geometry and cache it, replacing any cached tree.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

##### maxLeafTris?

`number` = `8`

#### Returns

`MeshBVH`

***

### invalidate()

> `static` **invalidate**(`geometry`): `void`

Defined in: [src/core/tree/bvh/MeshBVH.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L190)

Drop the cached BVH (the next `get` rebuilds it).

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

#### Returns

`void`

***

### has()

> `static` **has**(`geometry`): `boolean`

Defined in: [src/core/tree/bvh/MeshBVH.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L195)

Whether a BVH has been built (and not invalidated) for this geometry.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

#### Returns

`boolean`

***

### getAttributeView()

> `static` **getAttributeView**(`geometry`, `name`): [`MeshAttributeView`](../interfaces/MeshAttributeView.md)

Defined in: [src/core/tree/bvh/MeshBVH.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L204)

Strided view of a vertex attribute (`position`, `normal`, `uv`,
`TEXCOORD_1`, …), whether the geometry stores it as its own array or
interleaved in a `compose_bin` buffer. null when absent.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

##### name

`string`

#### Returns

[`MeshAttributeView`](../interfaces/MeshAttributeView.md)

***

### raycastGeometry()

> `static` **raycastGeometry**(`geometry`, `origin`, `direction`, `options?`, `target?`): [`MeshBVHHit`](../interfaces/MeshBVHHit.md)

Defined in: [src/core/tree/bvh/MeshBVH.ts:247](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L247)

Closest hit without a tree: tests every triangle (O(n)). Same options
and result as `raycast`.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

##### origin

[`Vector3`](Vector3.md)

##### direction

[`Vector3`](Vector3.md)

##### options?

[`MeshBVHRayOptions`](../interfaces/MeshBVHRayOptions.md)

##### target?

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)

#### Returns

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)

***

### raycastGeometryAll()

> `static` **raycastGeometryAll**(`geometry`, `origin`, `direction`, `options?`, `out?`): [`MeshBVHHit`](../interfaces/MeshBVHHit.md)[]

Defined in: [src/core/tree/bvh/MeshBVH.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L267)

Every hit without a tree, sorted by distance. Same options as `raycastAll`.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

##### origin

[`Vector3`](Vector3.md)

##### direction

[`Vector3`](Vector3.md)

##### options?

[`MeshBVHRayOptions`](../interfaces/MeshBVHRayOptions.md)

##### out?

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)[] = `[]`

#### Returns

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)[]

***

### refit()

> **refit**(): `void`

Defined in: [src/core/tree/bvh/MeshBVH.ts:494](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L494)

Recompute node bounds from the current vertex positions, keeping the
tree topology. Cheap (O(n)); use after moving vertices in place. Large
deformations make the tree slower but never wrong; rebuild with
`MeshBVH.build` if queries degrade.

#### Returns

`void`

***

### raycast()

> **raycast**(`origin`, `direction`, `options?`, `target?`): [`MeshBVHHit`](../interfaces/MeshBVHHit.md)

Defined in: [src/core/tree/bvh/MeshBVH.ts:532](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L532)

Closest hit along a ray (local space). `null` on miss.

#### Parameters

##### origin

[`Vector3`](Vector3.md)

ray origin

##### direction

[`Vector3`](Vector3.md)

ray direction (normalized for `t` to be a distance)

##### options?

[`MeshBVHRayOptions`](../interfaces/MeshBVHRayOptions.md)

culling and near/far limits

##### target?

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)

object to write the result into (a new one by default)

#### Returns

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)

***

### raycastAll()

> **raycastAll**(`origin`, `direction`, `options?`, `out?`): [`MeshBVHHit`](../interfaces/MeshBVHHit.md)[]

Defined in: [src/core/tree/bvh/MeshBVH.ts:588](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L588)

Every hit along a ray (local space), sorted by distance. Each result is
a new object appended to `out`. A crossing through an edge or vertex
shared by several triangles is reported once.

#### Parameters

##### origin

[`Vector3`](Vector3.md)

##### direction

[`Vector3`](Vector3.md)

##### options?

[`MeshBVHRayOptions`](../interfaces/MeshBVHRayOptions.md)

##### out?

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)[] = `[]`

#### Returns

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)[]

***

### intersectsRay()

> **intersectsRay**(`origin`, `direction`, `options?`): `boolean`

Defined in: [src/core/tree/bvh/MeshBVH.ts:606](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L606)

Whether the ray hits any triangle; stops at the first one found.

#### Parameters

##### origin

[`Vector3`](Vector3.md)

##### direction

[`Vector3`](Vector3.md)

##### options?

[`MeshBVHRayOptions`](../interfaces/MeshBVHRayOptions.md)

#### Returns

`boolean`

***

### raycastBruteForce()

> **raycastBruteForce**(`origin`, `direction`, `options?`, `target?`): [`MeshBVHHit`](../interfaces/MeshBVHHit.md)

Defined in: [src/core/tree/bvh/MeshBVH.ts:623](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L623)

Brute-force closest hit over this tree's triangles. O(n); exists to
validate the tree in tests and benchmarks.

#### Parameters

##### origin

[`Vector3`](Vector3.md)

##### direction

[`Vector3`](Vector3.md)

##### options?

[`MeshBVHRayOptions`](../interfaces/MeshBVHRayOptions.md)

##### target?

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)

#### Returns

[`MeshBVHHit`](../interfaces/MeshBVHHit.md)

***

### getRootBounds()

> **getRootBounds**(`outMin`, `outMax`): `void`

Defined in: [src/core/tree/bvh/MeshBVH.ts:628](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L628)

Local-space AABB of the whole mesh (root node bounds).

#### Parameters

##### outMin

[`Vector3`](Vector3.md)

##### outMax

[`Vector3`](Vector3.md)

#### Returns

`void`

***

### getTriangle()

> **getTriangle**(`triIndex`, `out?`): \[`number`, `number`, `number`\]

Defined in: [src/core/tree/bvh/MeshBVH.ts:636](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L636)

Vertex indices of a triangle.

#### Parameters

##### triIndex

`number`

##### out?

\[`number`, `number`, `number`\] = `...`

#### Returns

\[`number`, `number`, `number`\]

***

### getSubGeometryIndex()

> **getSubGeometryIndex**(`triIndex`): `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:644](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L644)

Sub-geometry index of a triangle (0 when the geometry has a single range).

#### Parameters

##### triIndex

`number`

#### Returns

`number`
