# Class: Vector2

二维向量


### Properties

- [SAFE\_MAX](Vector2.md#safe_max)
- [SAFE\_MIN](Vector2.md#safe_min)
- [x](Vector2.md#x)
- [y](Vector2.md#y)
- [ZERO](Vector2.md#zero)

### Constructors

- [constructor](Vector2.md#constructor)

### Methods

- [set](Vector2.md#set)
- [distance](Vector2.md#distance)
- [add](Vector2.md#add)
- [sub](Vector2.md#sub)
- [scale](Vector2.md#scale)
- [multiply](Vector2.md#multiply)
- [divide](Vector2.md#divide)
- [neg](Vector2.md#neg)
- [abs](Vector2.md#abs)
- [length](Vector2.md#length)
- [getAngle](Vector2.md#getangle)
- [getAngle](Vector2.md#getangle-1)
- [unt](Vector2.md#unt)
- [angleTo](Vector2.md#angleto)
- [equals](Vector2.md#equals)
- [pal](Vector2.md#pal)
- [clone](Vector2.md#clone)
- [copyFrom](Vector2.md#copyfrom)
- [dot](Vector2.md#dot)
- [slerp](Vector2.md#slerp)
- [lerp](Vector2.md#lerp)
- [normalize](Vector2.md#normalize)
- [addInPlace](Vector2.md#addinplace)
- [addScalar](Vector2.md#addscalar)
- [clampScalar](Vector2.md#clampscalar)
- [copyToBytes](Vector2.md#copytobytes)

## Properties

### SAFE\_MAX

▪ `Static` **SAFE\_MAX**: [`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L7)

___

### SAFE\_MIN

▪ `Static` **SAFE\_MIN**: [`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L8)

___

### x

• **x**: `number` = `0.0`

向量的x分量，默认值是0。

#### Defined in

[src/engine/math/Vector2.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L14)

___

### y

• **y**: `number` = `0.0`

向量的y分量，默认值是0。

#### Defined in

[src/engine/math/Vector2.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L18)

___

### ZERO

▪ `Static` `Readonly` **ZERO**: [`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L30)

## Constructors

### constructor

• **new Vector2**(`x?`, `y?`)

创建一个新的Vector2。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 向量的x分量，默认为0。 |
| `y` | `number` | `0` | 向量的y分量，默认为0。 |

#### Defined in

[src/engine/math/Vector2.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L37)

## Methods

### set

▸ **set**(`x?`, `y?`): `void`

设置该向量的x、y分量。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 向量的x分量，默认为0。 |
| `y` | `number` | `0` | 向量的y分量，默认为0。 |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector2.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L47)

___

### distance

▸ **distance**(`a`): `number`

计算该向量到传入的向量之间的距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Vector2.md) | 目标向量 |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector2.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L57)

___

### add

▸ **add**(`a`, `target?`): [`Vector2`](Vector2.md)

向量相加。

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L67)

___

### sub

▸ **sub**(`a`, `target?`): [`Vector2`](Vector2.md)

向量相减

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L80)

___

### scale

▸ **scale**(`v`): `void`

将该向量的x、y值同时乘以v。

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector2.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L91)

___

### multiply

▸ **multiply**(`a`, `target?`): [`Vector2`](Vector2.md)

将该向量的x、y值同时乘以a。

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L101)

___

### divide

▸ **divide**(`v`, `target?`): [`Vector2`](Vector2.md)

将该向量的x、y值同时除以v。

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L114)

___

### neg

▸ **neg**(`target?`): [`Vector2`](Vector2.md)

向量取反

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L126)

___

### abs

▸ **abs**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/math/Vector2.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L133)

___

### length

▸ **length**(): `number`

向量的长度

#### Returns

`number`

#### Defined in

[src/engine/math/Vector2.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L141)

___

### getAngle

▸ **getAngle**(`target`): `number`

返回 当前向量 与 目标向量 之间的角度（以弧度为单位）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Vector2`](Vector2.md) | 目标向量 |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector2.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L150)

___

### getAngle

▸ `Static` **getAngle**(`a`, `b`): `number`

返回两个向量之间的角度（以弧度为单位）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Vector2.md) | 目标向量a |
| `b` | [`Vector2`](Vector2.md) | 目标向量b |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector2.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L159)

___

### unt

▸ **unt**(`target?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L167)

___

### angleTo

▸ **angleTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector2.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L175)

___

### equals

▸ **equals**(`a`): `boolean`

两个向量是否相等

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Vector2.md) | 比较的向量 |

#### Returns

`boolean`

#### Defined in

[src/engine/math/Vector2.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L186)

___

### pal

▸ **pal**(`a`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector2.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L191)

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

返回一个新的向量，其具有和当前这个向量相同的x和y。

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L203)

___

### copyFrom

▸ **copyFrom**(`v`): [`Vector2`](Vector2.md)

将源向量的x和y属性复制给此向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Vector2.md) | 源向量 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L212)

___

### dot

▸ **dot**(`value`): `number`

计算两个向量的点积（dot product）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Vector2`](Vector2.md) | 目标向量 |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector2.ts:222](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L222)

___

### slerp

▸ `Static` **slerp**(`from`, `to`, `t`): [`Vector2`](Vector2.md)

计算两个向量之间的线性插值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | [`Vector2`](Vector2.md) | 起始向量 |
| `to` | [`Vector2`](Vector2.md) | 朝着进行插值的向量 |
| `t` | `number` |  |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:235](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L235)

___

### lerp

▸ `Static` **lerp**(`from`, `to`, `t`): [`Vector2`](Vector2.md)

两个向量之间的线性插值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | [`Vector2`](Vector2.md) | 起始向量 |
| `to` | [`Vector2`](Vector2.md) | 朝着进行插值的向量 |
| `t` | `number` |  |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L264)

___

### normalize

▸ **normalize**(): `void`

将该向量转换为单位向量。

#### Returns

`void`

#### Defined in

[src/engine/math/Vector2.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L275)

___

### addInPlace

▸ **addInPlace**(`otherVector`): [`Vector2`](Vector2.md)

两个向量相加

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | [`Vector2`](Vector2.md) | 相加的向量 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:286](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L286)

___

### addScalar

▸ **addScalar**(`s`): [`Vector2`](Vector2.md)

从该向量的x和y中加上标量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | 相加的标量 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:297](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L297)

___

### clampScalar

▸ **clampScalar**(`minVal`, `maxVal`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minVal` | `number` | 分量将被限制为的最小值 |
| `maxVal` | `number` | 分量将被限制为的最大值 |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/engine/math/Vector2.ts:310](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L310)

___

### copyToBytes

▸ **copyToBytes**(`byte`): `void`

复制该向量的x和y 到目标对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `byte` | `DataView` | 目标对象 |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector2.ts:321](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector2.ts#L321)
