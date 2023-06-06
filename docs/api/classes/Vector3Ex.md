# Class: Vector3Ex

extra function of vector3

### Constructors

- [constructor](Vector3Ex.md#constructor)

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

## Constructors

### constructor

• **new Vector3Ex**()

## Methods

### add

▸ `Static` **add**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

vector3 add

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/util/Vector3Ex.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L15)

___

### sub

▸ `Static` **sub**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

vector3 sub

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/util/Vector3Ex.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L32)

___

### mul

▸ `Static` **mul**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

vector3 mul

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/util/Vector3Ex.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L49)

___

### mulScale

▸ `Static` **mulScale**(`v1`, `v`, `target?`): [`Vector3`](Vector3.md)

vector3 mul

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v` | `number` |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/util/Vector3Ex.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L66)

___

### div

▸ `Static` **div**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

vector3 div

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/util/Vector3Ex.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L83)

___

### normalize

▸ `Static` **normalize**(`v1`): [`Vector3`](Vector3.md)

normalize

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) | source vector |

#### Returns

[`Vector3`](Vector3.md)

result vector

#### Defined in

[src/util/Vector3Ex.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L98)

___

### dot

▸ `Static` **dot**(`v1`, `v2`): `number`

dot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) | first vector |
| `v2` | [`Vector3`](Vector3.md) | second vector |

#### Returns

`number`

result

#### Defined in

[src/util/Vector3Ex.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L109)

___

### calculateVectorAngle\_xz

▸ `Static` **calculateVectorAngle_xz**(`v1`, `v2`): `number`

Calculate the angle between two vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) | first vector |
| `v2` | [`Vector3`](Vector3.md) | second vector |

#### Returns

`number`

Angle result in radians

#### Defined in

[src/util/Vector3Ex.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L121)

___

### distance

▸ `Static` **distance**(`v1`, `v2`): `number`

Calculate the distance between two points

**`Static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) | first vector |
| `v2` | [`Vector3`](Vector3.md) | second vector |

#### Returns

`number`

distance

#### Defined in

[src/util/Vector3Ex.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L135)

___

### getRandomXYZ

▸ `Static` **getRandomXYZ**(`min?`, `max?`): [`Vector3`](Vector3.md)

make a Random 3D Vector

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `min` | `number` | `-100` | The min random value of vector components |
| `max` | `number` | `100` | The max random value of vector components |

#### Returns

[`Vector3`](Vector3.md)

random vector

#### Defined in

[src/util/Vector3Ex.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L145)

___

### getRandomV3

▸ `Static` **getRandomV3**(`min?`, `max?`, `yMin`, `yMax`): [`Vector3`](Vector3.md)

make a Random 3D Vector

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `min` | `number` | `-100` | The min random value of vector component-x |
| `max` | `number` | `100` | The max random value of vector component-x |
| `yMin` | `number` | `undefined` | The min random value of vector component-y |
| `yMax` | `number` | `undefined` | The max random value of vector component-y |

#### Returns

[`Vector3`](Vector3.md)

random vector

#### Defined in

[src/util/Vector3Ex.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L157)
