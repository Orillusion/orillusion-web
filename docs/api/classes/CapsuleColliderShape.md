[**@orillusion/core**](../README.md)

***

# Class: CapsuleColliderShape

Defined in: [src/components/shape/CapsuleColliderShape.ts:7](https://github.com/orillusion/orillusion/blob/main/src/components/shape/CapsuleColliderShape.ts#L7)

Capsule collision body.
Composed of two hemispheres connected to a cylinder.

## Extends

- [`ColliderShape`](ColliderShape.md)

## Constructors

### Constructor

> **new CapsuleColliderShape**(): `CapsuleColliderShape`

Defined in: [src/components/shape/CapsuleColliderShape.ts:17](https://github.com/orillusion/orillusion/blob/main/src/components/shape/CapsuleColliderShape.ts#L17)

#### Returns

`CapsuleColliderShape`

#### Overrides

[`ColliderShape`](ColliderShape.md).[`constructor`](ColliderShape.md#constructor)

## Properties

### radius

> **radius**: `number` = `2.5`

Defined in: [src/components/shape/CapsuleColliderShape.ts:11](https://github.com/orillusion/orillusion/blob/main/src/components/shape/CapsuleColliderShape.ts#L11)

The radius of the local width of the collision body.

***

### height

> **height**: `number` = `10`

Defined in: [src/components/shape/CapsuleColliderShape.ts:15](https://github.com/orillusion/orillusion/blob/main/src/components/shape/CapsuleColliderShape.ts#L15)

The total height of the collision body.

## Accessors

### shapeType

#### Get Signature

> **get** **shapeType**(): [`ColliderShapeType`](../enumerations/ColliderShapeType.md)

Defined in: [src/components/shape/ColliderShape.ts:41](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L41)

##### Returns

[`ColliderShapeType`](../enumerations/ColliderShapeType.md)

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`shapeType`](ColliderShape.md#shapetype)

***

### center

#### Get Signature

> **get** **center**(): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:60](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L60)

The position of the collision object in the local space of the object.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **center**(`value`): `void`

Defined in: [src/components/shape/ColliderShape.ts:64](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L64)

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

Defined in: [src/components/shape/ColliderShape.ts:73](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L73)

The size of the collision body in the X, Y, and Z directions.

##### Returns

[`Vector3`](Vector3.md)

Vector3

#### Set Signature

> **set** **size**(`value`): `void`

Defined in: [src/components/shape/ColliderShape.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L77)

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

Defined in: [src/components/shape/ColliderShape.ts:85](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L85)

Half the size of the collision body.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`halfSize`](ColliderShape.md#halfsize)

## Methods

### setFromCenterAndSize()

> **setFromCenterAndSize**(`ct?`, `sz?`): `this`

Defined in: [src/components/shape/ColliderShape.ts:51](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L51)

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

Defined in: [src/components/shape/ColliderShape.ts:97](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L97)

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
