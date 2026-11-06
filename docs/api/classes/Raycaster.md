[**@orillusion/core**](../README.md)

***

# Class: Raycaster

Defined in: [src/io/raycast/Raycaster.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L51)

CPU ray picking against mesh triangles, build a ray (from the camera or by hand), 
then intersect objects and get sorted hits with point, distance, 
normals, face index, barycentric coordinates and UVs. Unlike `PickFire`, 
no `ColliderComponent` is needed: any `MeshRenderer` in the given hierarchy is tested,
except sky spheres (`SkyRenderer`, `AtmosphericComponent`, `EarthSkyRenderer`)
unless `includeSky` is set.

Geometry with a `MeshBVH` (see `MeshBVH.build`) is tested through the
tree; other geometry is scanned triangle by triangle unless `useBVH` is
`'always'`.

```ts
const raycaster = new Raycaster();
raycaster.setFromCamera(view.camera, input.mouseX, input.mouseY);
const hits = raycaster.intersectObject(view.scene);
if (hits.length) console.log(hits[0].object3D.name, hits[0].point, hits[0].uv);
```

Skinned and morph-target meshes are deformed on the CPU as the vertex
shader does (see `deformation` and `MeshDeformer`). Renderers
batched by an `InstanceDrawComponent` are tested even though the batch
disables them individually.

## Constructors

### Constructor

> **new Raycaster**(`origin?`, `direction?`): `Raycaster`

Defined in: [src/io/raycast/Raycaster.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L88)

#### Parameters

##### origin?

[`Vector3`](Vector3.md)

optional world-space ray origin

##### direction?

[`Vector3`](Vector3.md)

optional world-space ray direction (normalized here)

#### Returns

`Raycaster`

## Properties

### ray

> **ray**: [`Ray`](Ray.md)

Defined in: [src/io/raycast/Raycaster.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L53)

The world-space ray (direction normalized).

***

### near

> **near**: `number` = `0`

Defined in: [src/io/raycast/Raycaster.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L55)

Hits closer than this are ignored.

***

### far

> **far**: `number` = `Infinity`

Defined in: [src/io/raycast/Raycaster.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L57)

Hits farther than this are ignored.

***

### layerMask

> **layerMask**: `number` = `VisibleLayer.All`

Defined in: [src/io/raycast/Raycaster.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L59)

Only renderers whose `visibleLayer` shares a bit with this mask are tested.

***

### side

> **side**: [`RaycastSide`](../type-aliases/RaycastSide.md) = `'material'`

Defined in: [src/io/raycast/Raycaster.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L61)

Which faces can be hit. Default `'material'`.

***

### firstHitOnly

> **firstHitOnly**: `boolean` = `false`

Defined in: [src/io/raycast/Raycaster.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L63)

Report only the closest hit per mesh instead of every crossing.

***

### useBVH

> **useBVH**: [`RaycastBVHMode`](../type-aliases/RaycastBVHMode.md) = `'auto'`

Defined in: [src/io/raycast/Raycaster.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L65)

When to use a geometry's `MeshBVH`. Default `'auto'`.

***

### deformation

> **deformation**: [`RaycastDeformation`](../type-aliases/RaycastDeformation.md) = `'cpu'`

Defined in: [src/io/raycast/Raycaster.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L71)

Skinned / morph-target meshes: `'cpu'` (default) deforms them on the
CPU like the vertex shader so hits match what is drawn; `'bindPose'`
tests the undeformed geometry; `'skip'` ignores them.

***

### includeSky

> **includeSky**: `boolean` = `false`

Defined in: [src/io/raycast/Raycaster.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L77)

Also test sky spheres (`SkyRenderer`, `AtmosphericComponent`,
`EarthSkyRenderer`). Off by default:
the sky sphere is huge and would be hit from inside on every miss.

***

### filter

> **filter**: (`renderer`) => `boolean` = `null`

Defined in: [src/io/raycast/Raycaster.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L79)

Optional per-renderer filter; return false to skip a renderer.

#### Parameters

##### renderer

[`MeshRenderer`](MeshRenderer.md)

#### Returns

`boolean`

## Methods

### set()

> **set**(`origin`, `direction`): `this`

Defined in: [src/io/raycast/Raycaster.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L93)

Set the ray from an origin and a direction (normalized here).

#### Parameters

##### origin

[`Vector3`](Vector3.md)

##### direction

[`Vector3`](Vector3.md)

#### Returns

`this`

***

### setFromCamera()

> **setFromCamera**(`camera`, `screenX`, `screenY`): `this`

Defined in: [src/io/raycast/Raycaster.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L103)

Set the ray through a canvas pixel (CSS pixels relative to the canvas'
top-left, as in `InputSystem.mouseX/Y` and `PointerEvent3D.mouseX/Y`).

#### Parameters

##### camera

[`Camera3D`](Camera3D.md)

##### screenX

`number`

##### screenY

`number`

#### Returns

`this`

***

### setFromCameraNDC()

> **setFromCameraNDC**(`camera`, `ndcX`, `ndcY`): `this`

Defined in: [src/io/raycast/Raycaster.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L111)

Set the ray through a point in normalized device coordinates (x, y in [-1, 1], y up).

#### Parameters

##### camera

[`Camera3D`](Camera3D.md)

##### ndcX

`number`

##### ndcY

`number`

#### Returns

`this`

***

### intersectObject()

> **intersectObject**(`object`, `recursive?`, `out?`): [`RaycastHit`](../interfaces/RaycastHit.md)[]

Defined in: [src/io/raycast/Raycaster.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L123)

Intersect an object (and, if `recursive`, its descendants). Hits are
appended to `out`, which is then sorted by distance.

#### Parameters

##### object

[`Object3D`](Object3D.md)

##### recursive?

`boolean` = `true`

##### out?

[`RaycastHit`](../interfaces/RaycastHit.md)[] = `[]`

#### Returns

[`RaycastHit`](../interfaces/RaycastHit.md)[]

***

### intersectObjects()

> **intersectObjects**(`objects`, `recursive?`, `out?`): [`RaycastHit`](../interfaces/RaycastHit.md)[]

Defined in: [src/io/raycast/Raycaster.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L130)

`intersectObject` over several roots; `out` is sorted by distance.

#### Parameters

##### objects

[`Object3D`](Object3D.md)[]

##### recursive?

`boolean` = `true`

##### out?

[`RaycastHit`](../interfaces/RaycastHit.md)[] = `[]`

#### Returns

[`RaycastHit`](../interfaces/RaycastHit.md)[]

***

### intersectFirst()

> **intersectFirst**(`objects`, `recursive?`): [`RaycastHit`](../interfaces/RaycastHit.md)

Defined in: [src/io/raycast/Raycaster.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L143)

Closest hit over one or more roots, or null. Cheaper than
`intersectObjects(...)[0]`: each mesh is only searched up to the best
distance found so far.

#### Parameters

##### objects

[`Object3D`](Object3D.md) \| [`Object3D`](Object3D.md)[]

##### recursive?

`boolean` = `true`

#### Returns

[`RaycastHit`](../interfaces/RaycastHit.md)
