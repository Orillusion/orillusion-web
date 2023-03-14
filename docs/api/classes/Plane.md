# Class: Plane

平面数学类


### Properties

- [point](Plane.md#point)
- [normal](Plane.md#normal)

### Constructors

- [constructor](Plane.md#constructor)

### Methods

- [clone](Plane.md#clone)
- [intersectsLine](Plane.md#intersectsline)
- [intersectsRay](Plane.md#intersectsray)

## Properties

### point

• **point**: [`Vector3`](Vector3.md)

平面中心位置

#### Defined in

[src/engine/math/Plane.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Plane.ts#L11)

___

### normal

• **normal**: [`Vector3`](Vector3.md) = `Vector3.UP`

平面法向量

#### Defined in

[src/engine/math/Plane.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Plane.ts#L15)

## Constructors

### constructor

• **new Plane**(`pos`, `normal`)

构造新的平面对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | 平面位置 |
| `normal` | [`Vector3`](Vector3.md) | 平面法线量 |

#### Defined in

[src/engine/math/Plane.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Plane.ts#L25)

## Methods

### clone

▸ **clone**(): [`Plane`](Plane.md)

复制平面

#### Returns

[`Plane`](Plane.md)

返回拷贝的新平面

#### Defined in

[src/engine/math/Plane.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Plane.ts#L34)

___

### intersectsLine

▸ **intersectsLine**(`start`, `end`, `point`): `boolean`

判断平面是否和某线段相交，并计算交点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `any` | 线段起始点 |
| `end` | `any` | 线段结束点 |
| `point` | `any` | 输出交点 |

#### Returns

`boolean`

返回是否相交

#### Defined in

[src/engine/math/Plane.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Plane.ts#L46)

___

### intersectsRay

▸ **intersectsRay**(`ray`, `targetPoint?`): `boolean`

判断平面是否和某射线相交，并计算交点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ray` | [`Ray`](Ray.md) | 输入射线 |
| `targetPoint?` | [`Vector3`](Vector3.md) | - |

#### Returns

`boolean`

返回是否相交

#### Defined in

[src/engine/math/Plane.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Plane.ts#L64)
