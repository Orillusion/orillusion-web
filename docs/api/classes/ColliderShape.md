[**@orillusion/core**](../README.md)

***

# Class: ColliderShape

Defined in: [src/components/shape/ColliderShape.ts:20](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L20)

Shape of collider body, Base class of collider shape

## Extended by

- [`BoxColliderShape`](BoxColliderShape.md)
- [`CapsuleColliderShape`](CapsuleColliderShape.md)
- [`MeshColliderShape`](MeshColliderShape.md)
- [`SphereColliderShape`](SphereColliderShape.md)

## Constructors

### Constructor

> **new ColliderShape**(): `ColliderShape`

Defined in: [src/components/shape/ColliderShape.ts:31](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L31)

#### Returns

`ColliderShape`

## Accessors

### shapeType

#### Get Signature

> **get** **shapeType**(): [`ColliderShapeType`](../enumerations/ColliderShapeType.md)

Defined in: [src/components/shape/ColliderShape.ts:41](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L41)

##### Returns

[`ColliderShapeType`](../enumerations/ColliderShapeType.md)

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

***

### halfSize

#### Get Signature

> **get** **halfSize**(): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:85](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L85)

Half the size of the collision body.

##### Returns

[`Vector3`](Vector3.md)

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
