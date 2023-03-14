# Class: Vector3Ex

3维向量数学扩展


### Methods

- [add](Vector3Ex.md#add)
- [sub](Vector3Ex.md#sub)
- [mul](Vector3Ex.md#mul)
- [mulScale](Vector3Ex.md#mulscale)
- [div](Vector3Ex.md#div)
- [normalize](Vector3Ex.md#normalize)
- [dot](Vector3Ex.md#dot)
- [calculateVectorAngle\_xz](Vector3Ex.md#calculatevectorangle_xz)
- [distance](Vector3Ex.md#distance)
- [getRandomXYZ](Vector3Ex.md#getrandomxyz)
- [getRandomV3](Vector3Ex.md#getrandomv3)

### Constructors

- [constructor](Vector3Ex.md#constructor)

## Methods

### add

▸ `Static` **add**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

vector3 相加

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/util/Vector3Ex.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L15)

___

### sub

▸ `Static` **sub**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

vector3 相减

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/util/Vector3Ex.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L32)

___

### mul

▸ `Static` **mul**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

vector3 相乘

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/util/Vector3Ex.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L49)

___

### mulScale

▸ `Static` **mulScale**(`v1`, `v`, `target?`): [`Vector3`](Vector3.md)

vector3 相乘

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v` | `number` |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/util/Vector3Ex.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L66)

___

### div

▸ `Static` **div**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

vector3 相除

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/util/Vector3Ex.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L83)

___

### normalize

▸ `Static` **normalize**(`v1`): [`Vector3`](Vector3.md)

归一化

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) | 需要归一化的向量 |

#### Returns

[`Vector3`](Vector3.md)

归一化结果

#### Defined in

[src/engine/util/Vector3Ex.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L98)

___

### dot

▸ `Static` **dot**(`v1`, `v2`): `number`

点积计算

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) | 需要计算点积的第一个向量 |
| `v2` | [`Vector3`](Vector3.md) | 需要计算点积的第二个向量 |

#### Returns

`number`

点积结果

#### Defined in

[src/engine/util/Vector3Ex.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L109)

___

### calculateVectorAngle\_xz

▸ `Static` **calculateVectorAngle_xz**(`v1`, `v2`): `number`

计算向量夹角

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) | 需要计算夹角的第一个向量 |
| `v2` | [`Vector3`](Vector3.md) | 需要计算夹角的第二个向量 |

#### Returns

`number`

以弧度为单位的夹角结果

#### Defined in

[src/engine/util/Vector3Ex.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L121)

___

### distance

▸ `Static` **distance**(`v1`, `v2`): `number`

扩展 两同空间下的坐标距离

**`Static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) | 需要计算距离的第一个向量 |
| `v2` | [`Vector3`](Vector3.md) | 需要计算距离的第二个向量 |

#### Returns

`number`

距离结果

#### Defined in

[src/engine/util/Vector3Ex.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L135)

___

### getRandomXYZ

▸ `Static` **getRandomXYZ**(`min?`, `max?`): [`Vector3`](Vector3.md)

获取随机3维向量

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `min` | `number` | `-100` | 向量分量的最小随机值 |
| `max` | `number` | `100` | 向量分量的最大随机值 |

#### Returns

[`Vector3`](Vector3.md)

随机三维向量结果

#### Defined in

[src/engine/util/Vector3Ex.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L145)

___

### getRandomV3

▸ `Static` **getRandomV3**(`min?`, `max?`, `yMin`, `yMax`): [`Vector3`](Vector3.md)

获取随机3维向量

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `min` | `number` | `-100` | x向量分量的最小随机值 |
| `max` | `number` | `100` | x向量分量的最大随机值 |
| `yMin` | `number` | `undefined` | y向量分量的最小随机值 |
| `yMax` | `number` | `undefined` | y向量分量的最大随机值 |

#### Returns

[`Vector3`](Vector3.md)

随机三维向量结果

#### Defined in

[src/engine/util/Vector3Ex.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/Vector3Ex.ts#L157)

## Constructors

### constructor

• **new Vector3Ex**()
