# Class: ColliderShape

碰撞体形状

## Hierarchy

- **`ColliderShape`**

  ↳ [`BoxColliderShape`](BoxColliderShape.md)

  ↳ [`CapsuleColliderShape`](CapsuleColliderShape.md)

  ↳ [`MeshColliderShape`](MeshColliderShape.md)

  ↳ [`SphereColliderShape`](SphereColliderShape.md)


### Constructors

- [constructor](ColliderShape.md#constructor)

### Methods

- [setFromCenterAndSize](ColliderShape.md#setfromcenterandsize)
- [rayPick](ColliderShape.md#raypick)
- [serialization](ColliderShape.md#serialization)

### Accessors

- [center](ColliderShape.md#center)
- [size](ColliderShape.md#size)
- [halfSize](ColliderShape.md#halfsize)

## Constructors

### constructor

• **new ColliderShape**()

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L24)

## Methods

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`ct?`, `sz?`): [`ColliderShape`](ColliderShape.md)

设置碰撞体的位置和大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ct?` | [`Vector3`](Vector3.md) | 碰撞体在对象局部空间中的位置。 |
| `sz?` | [`Vector3`](Vector3.md) | 碰撞体在 X、Y、Z 方向上的大小。 |

#### Returns

[`ColliderShape`](ColliderShape.md)

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L36)

___

### rayPick

▸ **rayPick**(`ray`, `fromMatrix`): `Object`

射线拾取。
即是从指定位置发射一条射线，检测与射线碰撞的物体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ray` | [`Ray`](Ray.md) | 射线 |
| `fromMatrix` | [`Matrix4`](Matrix4.md) | 变换矩阵 |

#### Returns

`Object`

拾取结果 intersect：是否碰撞；intersectPoint：碰撞点； distance：射线原点到碰撞点的距离。

| Name | Type |
| :------ | :------ |
| `intersect` | `boolean` |
| `intersectPoint?` | [`Vector3`](Vector3.md) |
| `distance` | `number` |

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L81)

___

### serialization

▸ **serialization**(): `any`

#### Returns

`any`

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L85)

## Accessors

### center

• `get` **center**(): [`Vector3`](Vector3.md)

碰撞体在对象局部空间中的位置。

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L45)

• `set` **center**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L49)

___

### size

• `get` **size**(): [`Vector3`](Vector3.md)

碰撞体在 X、Y、Z 方向上的大小。

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L58)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L62)

___

### halfSize

• `get` **halfSize**(): [`Vector3`](Vector3.md)

碰撞体大小的1/2。

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L70)
