[**@orillusion/core**](../README.md)

***

# Class: SphereColliderShape

Defined in: [src/components/shape/SphereColliderShape.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/SphereColliderShape.ts#L12)

Spherical collision body

## Extends

- [`ColliderShape`](ColliderShape.md)

## Constructors

### Constructor

> **new SphereColliderShape**(`radius`): `SphereColliderShape`

Defined in: [src/components/shape/SphereColliderShape.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/SphereColliderShape.ts#L25)

#### Parameters

##### radius

`number`

radius of this collider

#### Returns

`SphereColliderShape`

#### Overrides

[`ColliderShape`](ColliderShape.md).[`constructor`](ColliderShape.md#constructor)

## Properties

### radius

> **radius**: `number` = `0.5`

Defined in: [src/components/shape/SphereColliderShape.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/SphereColliderShape.ts#L19)

radius of this collider

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

Defined in: [src/components/shape/SphereColliderShape.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/SphereColliderShape.ts#L39)

Entry point of `ray` on the sphere (exit point when the ray starts
inside). Point, normal and distance are world space; the local hit
point is in `localPoint`.

#### Parameters

##### ray

[`Ray`](Ray.md)

world-space ray

##### fromMatrix

[`Matrix4`](Matrix4.md)

local → world matrix

#### Returns

[`HitInfo`](../type-aliases/HitInfo.md)

#### Overrides

[`ColliderShape`](ColliderShape.md).[`rayPick`](ColliderShape.md#raypick)
