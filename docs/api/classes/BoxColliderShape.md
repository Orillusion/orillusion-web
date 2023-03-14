# Class: BoxColliderShape

盒型碰撞体。
是一种基本的长方体形状原始碰撞体。

## Hierarchy

- [`ColliderShape`](ColliderShape.md)

  ↳ **`BoxColliderShape`**


### Constructors

- [constructor](BoxColliderShape.md#constructor)

### Methods

- [setFromCenterAndSize](BoxColliderShape.md#setfromcenterandsize)
- [serialization](BoxColliderShape.md#serialization)

### Accessors

- [center](BoxColliderShape.md#center)
- [size](BoxColliderShape.md#size)
- [halfSize](BoxColliderShape.md#halfsize)

## Constructors

### constructor

• **new BoxColliderShape**()

创建一个盒型碰撞体对象。

#### Overrides

[ColliderShape](ColliderShape.md).[constructor](ColliderShape.md#constructor)

#### Defined in

[src/engine/components/colliders/shape/BoxColliderShape.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/BoxColliderShape.ts#L23)

## Methods

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`ct?`, `sz?`): [`BoxColliderShape`](BoxColliderShape.md)

设置碰撞体的位置和大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ct?` | [`Vector3`](Vector3.md) | 碰撞体在对象局部空间中的位置。 |
| `sz?` | [`Vector3`](Vector3.md) | 碰撞体在 X、Y、Z 方向上的大小。 |

#### Returns

[`BoxColliderShape`](BoxColliderShape.md)

#### Inherited from

[ColliderShape](ColliderShape.md).[setFromCenterAndSize](ColliderShape.md#setfromcenterandsize)

#### Defined in

[src/engine/components/colliders/shape/ColliderShape.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/ColliderShape.ts#L36)

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
