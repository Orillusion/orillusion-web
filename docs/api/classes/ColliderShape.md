# Class: ColliderShape

Shape of collider body, Base class of collider shape

## Hierarchy

- **`ColliderShape`**

  ↳ [`BoxColliderShape`](BoxColliderShape.md)

  ↳ [`CapsuleColliderShape`](CapsuleColliderShape.md)

  ↳ [`MeshColliderShape`](MeshColliderShape.md)

  ↳ [`SphereColliderShape`](SphereColliderShape.md)

### Constructors

- [constructor](ColliderShape.md#constructor)

### Accessors

- [shapeType](ColliderShape.md#shapetype)
- [center](ColliderShape.md#center)
- [size](ColliderShape.md#size)
- [halfSize](ColliderShape.md#halfsize)

### Methods

- [setFromCenterAndSize](ColliderShape.md#setfromcenterandsize)
- [rayPick](ColliderShape.md#raypick)

## Constructors

### constructor

• **new ColliderShape**()

#### Defined in

[src/components/shape/ColliderShape.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L30)

## Accessors

### shapeType

• `get` **shapeType**(): [`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Returns

[`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Defined in

[src/components/shape/ColliderShape.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L40)

___

### center

• `get` **center**(): [`Vector3`](Vector3.md)

The position of the collision object in the local space of the object.

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/shape/ColliderShape.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L59)

• `set` **center**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/shape/ColliderShape.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L63)

___

### size

• `get` **size**(): [`Vector3`](Vector3.md)

The size of the collision body in the X, Y, and Z directions.

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Defined in

[src/components/shape/ColliderShape.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L72)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/shape/ColliderShape.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L76)

___

### halfSize

• `get` **halfSize**(): [`Vector3`](Vector3.md)

Half the size of the collision body.

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/shape/ColliderShape.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L84)

## Methods

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`ct?`, `sz?`): [`ColliderShape`](ColliderShape.md)

Set the position and size of collision objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ct?` | [`Vector3`](Vector3.md) | The position of the collision object in the local space of the object. |
| `sz?` | [`Vector3`](Vector3.md) | The size of the collision body in the X, Y, and Z directions. |

#### Returns

[`ColliderShape`](ColliderShape.md)

#### Defined in

[src/components/shape/ColliderShape.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L50)

___

### rayPick

▸ **rayPick**(`ray`, `fromMatrix`): [`HitInfo`](../types/HitInfo.md)

Ray pickup.Emit a ray from a designated location to detect objects colliding with the ray.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ray` | [`Ray`](Ray.md) | emit ray |
| `fromMatrix` | [`Matrix4`](Matrix4.md) | matrix |

#### Returns

[`HitInfo`](../types/HitInfo.md)

Pick result intersect: whether to collide;
 IntersectPoint: collision point;
 Distance: The distance from the origin of the ray to the collision point.

#### Defined in

[src/components/shape/ColliderShape.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L96)
