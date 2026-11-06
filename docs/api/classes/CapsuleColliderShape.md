[**@orillusion/core**](../README.md)

***

# Class: CapsuleColliderShape

Defined in: [src/components/shape/CapsuleColliderShape.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/CapsuleColliderShape.ts#L7)

Capsule collision body.
Composed of two hemispheres connected to a cylinder.

## Extends

- [`ColliderShape`](ColliderShape.md)

## Constructors

### Constructor

> **new CapsuleColliderShape**(): `CapsuleColliderShape`

Defined in: [src/components/shape/CapsuleColliderShape.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/CapsuleColliderShape.ts#L17)

#### Returns

`CapsuleColliderShape`

#### Overrides

[`ColliderShape`](ColliderShape.md).[`constructor`](ColliderShape.md#constructor)

## Properties

### radius

> **radius**: `number` = `2.5`

Defined in: [src/components/shape/CapsuleColliderShape.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/CapsuleColliderShape.ts#L11)

The radius of the local width of the collision body.

***

### height

> **height**: `number` = `10`

Defined in: [src/components/shape/CapsuleColliderShape.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/CapsuleColliderShape.ts#L15)

The total height of the collision body.

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

### rayPick()

> **rayPick**(`ray`, `fromMatrix`): [`HitInfo`](../type-aliases/HitInfo.md)

Defined in: [src/components/shape/ColliderShape.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L129)

Ray pickup.Emit a ray from a designated location to detect objects colliding with the ray.

#### Parameters

##### ray

[`Ray`](Ray.md)

emit ray

##### fromMatrix

[`Matrix4`](Matrix4.md)

matrix

#### Returns

[`HitInfo`](../type-aliases/HitInfo.md)

Pick result intersect: whether to collide;
 IntersectPoint: collision point;
 Distance: The distance from the origin of the ray to the collision point.

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`rayPick`](ColliderShape.md#raypick)

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
