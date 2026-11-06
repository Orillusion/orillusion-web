[**@orillusion/core**](../README.md)

***

# Class: ColliderShape

Defined in: [src/components/shape/ColliderShape.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L52)

Shape of collider body, Base class of collider shape

## Extended by

- [`BoxColliderShape`](BoxColliderShape.md)
- [`CapsuleColliderShape`](CapsuleColliderShape.md)
- [`MeshColliderShape`](MeshColliderShape.md)
- [`SphereColliderShape`](SphereColliderShape.md)

## Constructors

### Constructor

> **new ColliderShape**(): `ColliderShape`

Defined in: [src/components/shape/ColliderShape.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L63)

#### Returns

`ColliderShape`

## Accessors

### shapeType

#### Get Signature

> **get** **shapeType**(): [`ColliderShapeType`](../enumerations/ColliderShapeType.md)

Defined in: [src/components/shape/ColliderShape.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L73)

##### Returns

[`ColliderShapeType`](../enumerations/ColliderShapeType.md)

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

***

### halfSize

#### Get Signature

> **get** **halfSize**(): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L117)

Half the size of the collision body.

##### Returns

[`Vector3`](Vector3.md)

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
