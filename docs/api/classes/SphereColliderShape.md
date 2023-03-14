# Class: SphereColliderShape

球形碰撞体

## Hierarchy

- [`ColliderShape`](ColliderShape.md)

  ↳ **`SphereColliderShape`**


### Methods

- [setFromCenterAndSize](SphereColliderShape.md#setfromcenterandsize)
- [serialization](SphereColliderShape.md#serialization)
- [rayPick](SphereColliderShape.md#raypick)

### Accessors

- [center](SphereColliderShape.md#center)
- [size](SphereColliderShape.md#size)
- [halfSize](SphereColliderShape.md#halfsize)

### Properties

- [radius](SphereColliderShape.md#radius)

### Constructors

- [constructor](SphereColliderShape.md#constructor)

## Methods

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`ct?`, `sz?`): [`SphereColliderShape`](SphereColliderShape.md)

设置碰撞体的位置和大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ct?` | [`Vector3`](Vector3.md) | 碰撞体在对象局部空间中的位置。 |
| `sz?` | [`Vector3`](Vector3.md) | 碰撞体在 X、Y、Z 方向上的大小。 |

#### Returns

[`SphereColliderShape`](SphereColliderShape.md)

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

#### Overrides

[ColliderShape](ColliderShape.md).[rayPick](ColliderShape.md#raypick)

#### Defined in

[src/engine/components/colliders/shape/SphereColliderShape.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/SphereColliderShape.ts#L36)

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

## Properties

### radius

• **radius**: `number` = `0.5`

碰撞体的大小。

#### Defined in

[src/engine/components/colliders/shape/SphereColliderShape.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/SphereColliderShape.ts#L23)

## Constructors

### constructor

• **new SphereColliderShape**(`radius`)

创建一个球形碰撞体对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | 碰撞体的大小。 |

#### Overrides

[ColliderShape](ColliderShape.md).[constructor](ColliderShape.md#constructor)

#### Defined in

[src/engine/components/colliders/shape/SphereColliderShape.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/colliders/shape/SphereColliderShape.ts#L29)
