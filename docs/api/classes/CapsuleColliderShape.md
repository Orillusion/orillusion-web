# Class: CapsuleColliderShape

胶囊碰撞体。
由两个半球体与一个圆柱体相连接而构成。

## Hierarchy

- [`ColliderShape`](ColliderShape.md)

  ↳ **`CapsuleColliderShape`**


### Properties

- [radius](CapsuleColliderShape.md#radius)
- [height](CapsuleColliderShape.md#height)

### Constructors

- [constructor](CapsuleColliderShape.md#constructor)

### Methods

- [setFromCenterAndSize](CapsuleColliderShape.md#setfromcenterandsize)
- [rayPick](CapsuleColliderShape.md#raypick)
- [serialization](CapsuleColliderShape.md#serialization)

### Accessors

- [center](CapsuleColliderShape.md#center)
- [size](CapsuleColliderShape.md#size)
- [halfSize](CapsuleColliderShape.md#halfsize)

## Properties

### radius

• **radius**: `number` = `2.5`

碰撞体的局部宽度的半径。

#### Defined in

[src/engine/components/colliders/shape/CapsuleColliderShape.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/CapsuleColliderShape.ts#L11)

___

### height

• **height**: `number` = `10`

碰撞体的总高度。

#### Defined in

[src/engine/components/colliders/shape/CapsuleColliderShape.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/CapsuleColliderShape.ts#L15)

## Constructors

### constructor

• **new CapsuleColliderShape**()

#### Overrides

[ColliderShape](ColliderShape.md).[constructor](ColliderShape.md#constructor)

#### Defined in

[src/engine/components/colliders/shape/CapsuleColliderShape.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/CapsuleColliderShape.ts#L17)

## Methods

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`ct?`, `sz?`): [`CapsuleColliderShape`](CapsuleColliderShape.md)

设置碰撞体的位置和大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ct?` | [`Vector3`](Vector3.md) | 碰撞体在对象局部空间中的位置。 |
| `sz?` | [`Vector3`](Vector3.md) | 碰撞体在 X、Y、Z 方向上的大小。 |

#### Returns

[`CapsuleColliderShape`](CapsuleColliderShape.md)

#### Inherited from

[ColliderShape](ColliderShape.md).[setFromCenterAndSize](ColliderShape.md#setfromcenterandsize)

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

#### Inherited from

[ColliderShape](ColliderShape.md).[rayPick](ColliderShape.md#raypick)

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L81)

___

### serialization

▸ **serialization**(): `any`

#### Returns

`any`

#### Inherited from

[ColliderShape](ColliderShape.md).[serialization](ColliderShape.md#serialization)

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L85)

## Accessors

### center

• `get` **center**(): [`Vector3`](Vector3.md)

碰撞体在对象局部空间中的位置。

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.center

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L45)

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

[src/engine/components/colliders/shape/ColliderShape.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L49)

___

### size

• `get` **size**(): [`Vector3`](Vector3.md)

碰撞体在 X、Y、Z 方向上的大小。

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Inherited from

ColliderShape.size

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L58)

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

[src/engine/components/colliders/shape/ColliderShape.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L62)

___

### halfSize

• `get` **halfSize**(): [`Vector3`](Vector3.md)

碰撞体大小的1/2。

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.halfSize

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L70)
