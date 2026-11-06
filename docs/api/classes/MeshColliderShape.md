[**@orillusion/core**](../README.md)

***

# Class: MeshColliderShape

Defined in: [src/components/shape/MeshColliderShape.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L15)

Mesh collision body

## Extends

- [`ColliderShape`](ColliderShape.md)

## Constructors

### Constructor

> **new MeshColliderShape**(): `MeshColliderShape`

Defined in: [src/components/shape/MeshColliderShape.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L49)

#### Returns

`MeshColliderShape`

#### Overrides

[`ColliderShape`](ColliderShape.md).[`constructor`](ColliderShape.md#constructor)

## Properties

### mesh

> **mesh**: [`GeometryBase`](GeometryBase.md)

Defined in: [src/components/shape/MeshColliderShape.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L20)

Geometry to pick against. When left unset, `ColliderComponent` uses the
geometry of the `MeshRenderer` on the same object.

***

### backfaceCulling

> **backfaceCulling**: `boolean` = `false`

Defined in: [src/components/shape/MeshColliderShape.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L23)

Skip triangles whose front face points away from the ray.

***

### useBVH

> **useBVH**: [`RaycastBVHMode`](../type-aliases/RaycastBVHMode.md) = `'always'`

Defined in: [src/components/shape/MeshColliderShape.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L31)

When to use the geometry's `MeshBVH`. Default `'always'`: the tree is
built on the first pick and cached per geometry. Use `'auto'` to only
use a tree built elsewhere (`MeshBVH.build`), `'never'` to always test
every triangle.

***

### maxDistance

> **maxDistance**: `number` = `Infinity`

Defined in: [src/components/shape/MeshColliderShape.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L34)

Ignore hits farther than this (world units).

***

### renderer

> **renderer**: [`MeshRenderer`](MeshRenderer.md) = `null`

Defined in: [src/components/shape/MeshColliderShape.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L41)

Renderer drawing `mesh`, set automatically by `ColliderComponent` from
the same object. When it skins or morphs the mesh, picks follow the
deformed surface (see `deformation`).

***

### deformation

> **deformation**: [`RaycastDeformation`](../type-aliases/RaycastDeformation.md) = `'cpu'`

Defined in: [src/components/shape/MeshColliderShape.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L44)

How a skinned / morphed `renderer` is picked. Default `'cpu'`: as drawn.

## Accessors

### shapeType

#### Get Signature

> **get** **shapeType**(): [`ColliderShapeType`](../enumerations/ColliderShapeType.md)

Defined in: [src/components/shape/ColliderShape.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L73)

##### Returns

[`ColliderShapeType`](../enumerations/ColliderShapeType.md)

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`shapeType`](ColliderShape.md#shapetype)

***

### center

#### Get Signature

> **get** **center**(): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L92)

The position of the collision object in the local space of the object.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **center**(`value`): `void`

Defined in: [src/components/shape/ColliderShape.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L96)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`center`](ColliderShape.md#center)

***

### size

#### Get Signature

> **get** **size**(): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L105)

The size of the collision body in the X, Y, and Z directions.

##### Returns

[`Vector3`](Vector3.md)

Vector3

#### Set Signature

> **set** **size**(`value`): `void`

Defined in: [src/components/shape/ColliderShape.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L109)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`size`](ColliderShape.md#size)

***

### halfSize

#### Get Signature

> **get** **halfSize**(): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L117)

Half the size of the collision body.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`halfSize`](ColliderShape.md#halfsize)

## Methods

### setFromCenterAndSize()

> **setFromCenterAndSize**(`ct?`, `sz?`): `this`

Defined in: [src/components/shape/ColliderShape.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L83)

Set the position and size of collision objects

#### Parameters

##### ct?

[`Vector3`](Vector3.md)

The position of the collision object in the local space of the object.

##### sz?

[`Vector3`](Vector3.md)

The size of the collision body in the X, Y, and Z directions.

#### Returns

`this`

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`setFromCenterAndSize`](ColliderShape.md#setfromcenterandsize)

***

### transformNormal()

> `static` **transformNormal**(`invMatrix`, `n`, `out`): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L158)

Transform a local-space normal to world space with the inverse
transpose of the local → world matrix. See `MeshRaycast.transformNormal`.

#### Parameters

##### invMatrix

[`Matrix4`](Matrix4.md)

##### n

[`Vector3`](Vector3.md)

##### out

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`transformNormal`](ColliderShape.md#transformnormal)

***

### rayPick()

> **rayPick**(`ray`, `fromMatrix`): [`HitInfo`](../type-aliases/HitInfo.md)

Defined in: [src/components/shape/MeshColliderShape.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/MeshColliderShape.ts#L62)

Closest triangle hit along `ray` (world space), or null. With the
default `useBVH` the cost is O(log n) triangles. `distance`,
`intersectPoint`, `normal` (interpolated vertex normal, face normal
when the geometry has none) and `faceNormal` are world space; the
result also carries `localPoint`, `faceIndex`, `barycentric`, `uv`,
`uv1`, `subGeometryIndex` and `frontFace`.

#### Parameters

##### ray

[`Ray`](Ray.md)

##### fromMatrix

[`Matrix4`](Matrix4.md)

#### Returns

[`HitInfo`](../type-aliases/HitInfo.md)

#### Overrides

[`ColliderShape`](ColliderShape.md).[`rayPick`](ColliderShape.md#raypick)
