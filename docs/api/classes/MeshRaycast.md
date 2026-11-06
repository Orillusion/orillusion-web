[**@orillusion/core**](../README.md)

***

# Class: MeshRaycast

Defined in: [src/io/raycast/MeshRaycast.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L54)

World-space ray queries against one geometry under a transform. Shared by
`Raycaster` and `MeshColliderShape`, so both report the same hit data.

## Constructors

### Constructor

> **new MeshRaycast**(): `MeshRaycast`

#### Returns

`MeshRaycast`

## Methods

### intersect()

> `static` **intersect**(`geometry`, `worldMatrix`, `ray`, `options`, `out`): `number`

Defined in: [src/io/raycast/MeshRaycast.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L67)

Intersect `ray` (world space) with `geometry` placed by `worldMatrix`
and append the hits to `out` (closest only unless `options.all`).
Hits are not sorted across calls; the ones added by one call are.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

##### worldMatrix

[`Matrix4`](Matrix4.md)

##### ray

[`Ray`](Ray.md)

##### options

[`MeshRaycastOptions`](../interfaces/MeshRaycastOptions.md)

##### out

[`RaycastHit`](../interfaces/RaycastHit.md)[]

#### Returns

`number`

number of hits appended

***

### intersectRenderer()

> `static` **intersectRenderer**(`renderer`, `ray`, `options`, `out`): `number`

Defined in: [src/io/raycast/MeshRaycast.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L123)

Intersect a renderer's mesh as it is drawn. Skinned and morph-target
meshes are deformed on the CPU first (see `MeshDeformer`) unless
`options.deformation` says otherwise; a deformed mesh is always
queried through a (refit) BVH unless `useBVH` is `'never'`. For
skinned meshes `localPoint` is the hit expressed in the renderer's
local space (the deformed surface, not the bind pose).

#### Parameters

##### renderer

[`MeshRenderer`](MeshRenderer.md)

##### ray

[`Ray`](Ray.md)

##### options

[`MeshRaycastOptions`](../interfaces/MeshRaycastOptions.md)

##### out

[`RaycastHit`](../interfaces/RaycastHit.md)[]

#### Returns

`number`

number of hits appended

***

### transformNormal()

> `static` **transformNormal**(`invMatrix`, `n`, `out`): [`Vector3`](Vector3.md)

Defined in: [src/io/raycast/MeshRaycast.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L203)

Transform a local-space normal to world space with the inverse
transpose of the local → world matrix (normals stay perpendicular
under non-uniform scale), then normalize.

#### Parameters

##### invMatrix

[`Matrix4`](Matrix4.md)

inverse of the local → world matrix

##### n

[`Vector3`](Vector3.md)

local-space normal

##### out

[`Vector3`](Vector3.md)

result (may alias `n`)

#### Returns

[`Vector3`](Vector3.md)
