# Class: SphereColliderShape

Spherical collision body

## Hierarchy

- [`ColliderShape`](ColliderShape.md)

  ↳ **`SphereColliderShape`**

### Constructors

- [constructor](SphereColliderShape.md#constructor)

### Properties

- [radius](SphereColliderShape.md#radius)

### Accessors

- [shapeType](SphereColliderShape.md#shapetype)
- [center](SphereColliderShape.md#center)
- [size](SphereColliderShape.md#size)
- [halfSize](SphereColliderShape.md#halfsize)

### Methods

- [setFromCenterAndSize](SphereColliderShape.md#setfromcenterandsize)
- [rayPick](SphereColliderShape.md#raypick)

## Constructors

### constructor

• **new SphereColliderShape**(`radius`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | radius of this collider |

#### Overrides

[ColliderShape](ColliderShape.md).[constructor](ColliderShape.md#constructor)

#### Defined in

[src/components/shape/SphereColliderShape.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/SphereColliderShape.ts#L30)

## Properties

### radius

• **radius**: `number` = `0.5`

radius of this collider

#### Defined in

[src/components/shape/SphereColliderShape.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/SphereColliderShape.ts#L24)

## Accessors

### shapeType

• `get` **shapeType**(): [`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Returns

[`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Inherited from

ColliderShape.shapeType

#### Defined in

[src/components/shape/ColliderShape.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L30)

___

### center

• `get` **center**(): [`Vector3`](Vector3.md)

The position of the collision object in the local space of the object.

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.center

#### Defined in

[src/components/shape/ColliderShape.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L49)

• `set` **center**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

ColliderShape.center

#### Defined in

[src/components/shape/ColliderShape.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L53)

___

### size

• `get` **size**(): [`Vector3`](Vector3.md)

The size of the collision body in the X, Y, and Z directions.

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Inherited from

ColliderShape.size

#### Defined in

[src/components/shape/ColliderShape.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L62)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

ColliderShape.size

#### Defined in

[src/components/shape/ColliderShape.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L66)

___

### halfSize

• `get` **halfSize**(): [`Vector3`](Vector3.md)

Half the size of the collision body.

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.halfSize

#### Defined in

[src/components/shape/ColliderShape.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L74)

## Methods

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`ct?`, `sz?`): [`SphereColliderShape`](SphereColliderShape.md)

Set the position and size of collision objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ct?` | [`Vector3`](Vector3.md) | The position of the collision object in the local space of the object. |
| `sz?` | [`Vector3`](Vector3.md) | The size of the collision body in the X, Y, and Z directions. |

#### Returns

[`SphereColliderShape`](SphereColliderShape.md)

#### Inherited from

[ColliderShape](ColliderShape.md).[setFromCenterAndSize](ColliderShape.md#setfromcenterandsize)

#### Defined in

[src/components/shape/ColliderShape.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L40)

___

### rayPick

▸ **rayPick**(`ray`, `fromMatrix`): `Object`

Ray pickup.Emit a ray from a designated location to detect objects colliding with the ray.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ray` | [`Ray`](Ray.md) | emit ray |
| `fromMatrix` | [`Matrix4`](Matrix4.md) | matrix |

#### Returns

`Object`

Pick result intersect: whether to collide;
 IntersectPoint: collision point;
 Distance: The distance from the origin of the ray to the collision point.

| Name | Type |
| :------ | :------ |
| `intersect` | `boolean` |
| `intersectPoint?` | [`Vector3`](Vector3.md) |
| `distance` | `number` |

#### Overrides

[ColliderShape](ColliderShape.md).[rayPick](ColliderShape.md#raypick)

#### Defined in

[src/components/shape/SphereColliderShape.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/SphereColliderShape.ts#L37)
