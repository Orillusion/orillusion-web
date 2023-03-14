# Class: Vector3

三维向量


### Properties

- [MAX](Vector3.md#max)
- [MIN](Vector3.md#min)
- [SAFE\_MAX](Vector3.md#safe_max)
- [SAFE\_MIN](Vector3.md#safe_min)
- [X\_AXIS](Vector3.md#x_axis)
- [Y\_AXIS](Vector3.md#y_axis)
- [Z\_AXIS](Vector3.md#z_axis)
- [x](Vector3.md#x)
- [y](Vector3.md#y)
- [z](Vector3.md#z)
- [w](Vector3.md#w)

### Accessors

- [ZERO](Vector3.md#zero)
- [ONE](Vector3.md#one)
- [LEFT](Vector3.md#left)
- [RIGHT](Vector3.md#right)
- [UP](Vector3.md#up)
- [DOWN](Vector3.md#down)
- [BACK](Vector3.md#back)
- [FORWARD](Vector3.md#forward)
- [a](Vector3.md#a)
- [r](Vector3.md#r)
- [g](Vector3.md#g)
- [b](Vector3.md#b)
- [length](Vector3.md#length)
- [lengthSquared](Vector3.md#lengthsquared)
- [position](Vector3.md#position)

### Constructors

- [constructor](Vector3.md#constructor)

### Methods

- [set](Vector3.md#set)
- [add](Vector3.md#add)
- [addXYZW](Vector3.md#addxyzw)
- [clone](Vector3.md#clone)
- [copyFrom](Vector3.md#copyfrom)
- [crossProduct](Vector3.md#crossproduct)
- [decrementBy](Vector3.md#decrementby)
- [distance](Vector3.md#distance)
- [distanceXZ](Vector3.md#distancexz)
- [dotProduct](Vector3.md#dotproduct)
- [equals](Vector3.md#equals)
- [incrementBy](Vector3.md#incrementby)
- [divide](Vector3.md#divide)
- [negate](Vector3.md#negate)
- [normalize](Vector3.md#normalize)
- [applyQuaternion](Vector3.md#applyquaternion)
- [scaleBy](Vector3.md#scaleby)
- [mul](Vector3.md#mul)
- [scale](Vector3.md#scale)
- [scaleToRef](Vector3.md#scaletoref)
- [setTo](Vector3.md#setto)
- [copy](Vector3.md#copy)
- [subtract](Vector3.md#subtract)
- [multiply](Vector3.md#multiply)
- [divided](Vector3.md#divided)
- [div](Vector3.md#div)
- [lerp](Vector3.md#lerp)
- [clamp](Vector3.md#clamp)
- [toString](Vector3.md#tostring)
- [getTowPointbyDir](Vector3.md#gettowpointbydir)
- [pointToLine](Vector3.md#pointtoline)
- [normalizeToWay2D\_XY](Vector3.md#normalizetoway2d_xy)
- [toArray](Vector3.md#toarray)
- [copyToBytes](Vector3.md#copytobytes)
- [cross](Vector3.md#cross)
- [multiplyScalar](Vector3.md#multiplyscalar)
- [setFromArray](Vector3.md#setfromarray)
- [divideScalar](Vector3.md#dividescalar)
- [clampLength](Vector3.md#clamplength)
- [cross](Vector3.md#cross-1)
- [dot](Vector3.md#dot)
- [getPoints](Vector3.md#getpoints)
- [getPointNumbers](Vector3.md#getpointnumbers)
- [getAngle](Vector3.md#getangle)
- [sqrMagnitude](Vector3.md#sqrmagnitude)
- [getZYAngle](Vector3.md#getzyangle)
- [sub](Vector3.md#sub)
- [add](Vector3.md#add-1)
- [setScalar](Vector3.md#setscalar)

## Properties

### MAX

▪ `Static` **MAX**: [`Vector3`](Vector3.md)

向量最大值

#### Defined in

[src/engine/math/Vector3.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L9)

___

### MIN

▪ `Static` **MIN**: [`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L10)

___

### SAFE\_MAX

▪ `Static` **SAFE\_MAX**: [`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L12)

___

### SAFE\_MIN

▪ `Static` **SAFE\_MIN**: [`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L13)

___

### X\_AXIS

▪ `Static` **X\_AXIS**: [`Vector3`](Vector3.md)

X轴坐标 (1,0,0).

#### Defined in

[src/engine/math/Vector3.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L22)

___

### Y\_AXIS

▪ `Static` **Y\_AXIS**: [`Vector3`](Vector3.md)

Y轴坐标 (0,1,0).

#### Defined in

[src/engine/math/Vector3.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L36)

___

### Z\_AXIS

▪ `Static` **Z\_AXIS**: [`Vector3`](Vector3.md)

Z轴坐标 (0,0,1).

#### Defined in

[src/engine/math/Vector3.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L46)

___

### x

• **x**: `number` = `0`

向量的x分量，默认值是0

#### Defined in

[src/engine/math/Vector3.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L144)

___

### y

• **y**: `number` = `0`

向量的y分量，默认值是0

#### Defined in

[src/engine/math/Vector3.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L154)

___

### z

• **z**: `number` = `0`

向量的z分量，默认值是0

#### Defined in

[src/engine/math/Vector3.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L165)

___

### w

• **w**: `number` = `1`

向量的z分量，
可作为一种透视投影的三维位置或投影
也可以做四元数中的w

#### Defined in

[src/engine/math/Vector3.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L172)

## Accessors

### ZERO

• `Static` `get` **ZERO**(): [`Vector3`](Vector3.md)

返回一个新的x，y，z分量都为0的向量

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L87)

___

### ONE

• `Static` `get` **ONE**(): [`Vector3`](Vector3.md)

返回一个新的x，y，z分量都为1的向量

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L94)

___

### LEFT

• `Static` `get` **LEFT**(): [`Vector3`](Vector3.md)

返回一个新的指向左方向的向量，即x为-1，y为0，z为0

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L101)

___

### RIGHT

• `Static` `get` **RIGHT**(): [`Vector3`](Vector3.md)

返回一个新的指向右方向的向量，即x为1，y为0，z为0

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L107)

___

### UP

• `Static` `get` **UP**(): [`Vector3`](Vector3.md)

返回一个新的指向上方的向量，即x为0，y为1，z为0

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L113)

___

### DOWN

• `Static` `get` **DOWN**(): [`Vector3`](Vector3.md)

返回一个新的指向下方的向量，即x为0，y为-1，z为0

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L119)

___

### BACK

• `Static` `get` **BACK**(): [`Vector3`](Vector3.md)

返回一个新的指向后方的向量，即x为0，y为0，z为-1

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L125)

___

### FORWARD

• `Static` `get` **FORWARD**(): [`Vector3`](Vector3.md)

返回一个新的指向前方的向量，即x为0，y为0，z为1

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L131)

___

### a

• `get` **a**(): `number`

得到w分量

#### Returns

`number`

获得w的值

#### Defined in

[src/engine/math/Vector3.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L211)

• `set` **a**(`value`): `void`

设置w分量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置给w的值 |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L179)

___

### r

• `get` **r**(): `number`

得到x分量

#### Returns

`number`

获得x的值

#### Defined in

[src/engine/math/Vector3.ts:219](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L219)

• `set` **r**(`value`): `void`

设置x分量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置给x的值 |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L186)

___

### g

• `get` **g**(): `number`

得到y分量

#### Returns

`number`

获得y的值

#### Defined in

[src/engine/math/Vector3.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L227)

• `set` **g**(`value`): `void`

设置y分量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置给x的值 |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L194)

___

### b

• `get` **b**(): `number`

得到z分量

#### Returns

`number`

获得z的值

#### Defined in

[src/engine/math/Vector3.ts:235](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L235)

• `set` **b**(`value`): `void`

设置z分量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置给x的值 |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L203)

___

### length

• `get` **length**(): `number`

向量的长度，原点(0, 0, 0)到(x, y, z)的距离

#### Returns

`number`

#### Defined in

[src/engine/math/Vector3.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L250)

___

### lengthSquared

• `get` **lengthSquared**(): `number`

获得向量长度的平方

#### Returns

`number`

#### Defined in

[src/engine/math/Vector3.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L267)

___

### position

• `get` **position**(): `this`

获得当前向量

#### Returns

`this`

#### Defined in

[src/engine/math/Vector3.ts:310](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L310)

## Constructors

### constructor

• **new Vector3**(`x?`, `y?`, `z?`, `w?`)

创建一个对象实例，默认为(0, 0, 0, 0)

**`Platform`**

Native

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | x的值 |
| `y` | `number` | `0` | y的值 |
| `z` | `number` | `0` | z的值 |
| `w` | `number` | `0` | w的值 |

#### Defined in

[src/engine/math/Vector3.ts:301](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L301)

## Methods

### set

▸ **set**(`x`, `y`, `z`, `w?`): [`Vector3`](Vector3.md)

设置当前向量x，y，z，w分量

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `1` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:322](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L322)

___

### add

▸ **add**(`a`, `target?`): [`Vector3`](Vector3.md)

该向量与向量相加

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | 相加的向量 |
| `target` | [`Vector3`](Vector3.md) | `null` | 返回向量 |

#### Returns

[`Vector3`](Vector3.md)

Vector3 结果返回

#### Defined in

[src/engine/math/Vector3.ts:359](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L359)

___

### addXYZW

▸ **addXYZW**(`x`, `y`, `z`, `w`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:376](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L376)

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

/**
 * 克隆一个与当前向量分量相同的向量

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:405](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L405)

___

### copyFrom

▸ **copyFrom**(`src`): [`Vector3`](Vector3.md)

源向量的分量设置到当前向量中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`Vector3`](Vector3.md) | 原向量 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:421](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L421)

___

### crossProduct

▸ **crossProduct**(`a`, `target?`): [`Vector3`](Vector3.md)

两个向量进行叉乘，
叉乘后的结果是这两条向量的垂直向量

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | 求叉乘的另外一个向量 |
| `target` | [`Vector3`](Vector3.md) | `null` | - |

#### Returns

[`Vector3`](Vector3.md)

Vector3 返回叉乘结果向量

#### Defined in

[src/engine/math/Vector3.ts:455](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L455)

___

### decrementBy

▸ **decrementBy**(`a`): `void`

两个向量相减，结果赋值给自己

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | 减去的向量 |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:482](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L482)

___

### distance

▸ `Static` **distance**(`pt1`, `pt2`): `number`

计算两个向量之间的距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) | 向量1 |
| `pt2` | [`Vector3`](Vector3.md) | 向量2 |

#### Returns

`number`

number 两个向量之间的距离

#### Defined in

[src/engine/math/Vector3.ts:507](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L507)

___

### distanceXZ

▸ `Static` **distanceXZ**(`pt1`, `pt2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) |
| `pt2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector3.ts:514](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L514)

___

### dotProduct

▸ **dotProduct**(`a`): `number`

计算两个向量的点积,返回两个向量之间的夹角关系

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | 需要计算的向量 |

#### Returns

`number`

number 返回两个向量之间的夹角关系

#### Defined in

[src/engine/math/Vector3.ts:527](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L527)

___

### equals

▸ **equals**(`toCompare`, `allFour?`): `boolean`

求两个向量的值是否全等

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `toCompare` | [`Vector3`](Vector3.md) | `undefined` | 进行比较的向量 |
| `allFour` | `boolean` | `false` | 默认参数为1，是否比较w分量 |

#### Returns

`boolean`

boolean 全等返回true

#### Defined in

[src/engine/math/Vector3.ts:549](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L549)

___

### incrementBy

▸ **incrementBy**(`a`): `void`

当前向量加等于向量，只加x y z 3个分量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | 加等的向量 |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:569](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L569)

___

### divide

▸ **divide**(`v`): [`Vector3`](Vector3.md)

当前向量除以向量或者分量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | 要除的向量或者分量 |

#### Returns

[`Vector3`](Vector3.md)

Vector3 返回自己，计算之后的结果

#### Defined in

[src/engine/math/Vector3.ts:581](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L581)

___

### negate

▸ **negate**(): [`Vector3`](Vector3.md)

当前向量x，y，z分量取反

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:608](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L608)

___

### normalize

▸ **normalize**(`thickness?`): [`Vector3`](Vector3.md)

当前向量标准化

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `thickness` | `number` | `1` | 默认参数为1，使当前向量的长度为thickness 原点(0, 0, 0)到(x, y, z)的距离 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:631](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L631)

___

### applyQuaternion

▸ **applyQuaternion**(`q`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:646](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L646)

___

### scaleBy

▸ **scaleBy**(`s`): [`Vector3`](Vector3.md)

当前向量扩大s倍

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | 扩大的倍数 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:688](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L688)

___

### mul

▸ **mul**(`s`): [`Vector3`](Vector3.md)

当前向量乘以标量s

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | 标量s |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:700](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L700)

___

### scale

▸ **scale**(`s`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:708](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L708)

___

### scaleToRef

▸ **scaleToRef**(`s`, `ref`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |
| `ref` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:715](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L715)

___

### setTo

▸ **setTo**(`xa`, `ya`, `za`, `wa?`): `void`

填充当前向量的分量

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `xa` | `number` | `undefined` |
| `ya` | `number` | `undefined` |
| `za` | `number` | `undefined` |
| `wa` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:742](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L742)

___

### copy

▸ **copy**(`src`): [`Vector3`](Vector3.md)

复制源向量的分量到此向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`Vector3`](Vector3.md) | 源向量 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:754](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L754)

___

### subtract

▸ **subtract**(`a`, `target?`): [`Vector3`](Vector3.md)

将该向量减去向量。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | 相减的向量 |
| `target` | [`Vector3`](Vector3.md) | `null` | 返回的向量 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:782](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L782)

___

### multiply

▸ **multiply**(`other`, `target?`): [`Vector3`](Vector3.md)

将该向量乘以向量。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | [`Vector3`](Vector3.md) | `undefined` | 相乘的向量 |
| `target` | [`Vector3`](Vector3.md) | `null` | 返回的向量 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:796](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L796)

___

### divided

▸ **divided**(`other`, `target?`): [`Vector3`](Vector3.md)

将该向量除以向量。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | [`Vector3`](Vector3.md) | `undefined` | 相除的向量 |
| `target` | [`Vector3`](Vector3.md) | `null` | 返回的向量 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:819](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L819)

___

### div

▸ **div**(`v`, `target?`): [`Vector3`](Vector3.md)

将该向量除以标量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 相除的标量 |
| `target?` | [`Vector3`](Vector3.md) | 输出Vector3向量 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:841](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L841)

___

### lerp

▸ **lerp**(`v0`, `v1`, `t`): `void`

计算两个Vector3之间的线性插值，结果为当前对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v0` | [`Vector3`](Vector3.md) | 向量1 |
| `v1` | [`Vector3`](Vector3.md) | 向量2 |
| `t` | `number` | 时刻 |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:862](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L862)

___

### clamp

▸ **clamp**(`min`, `max`): [`Vector3`](Vector3.md)

将该向量x分量、 y分量以及z分量向上取整为最接近的整数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | [`Vector3`](Vector3.md) | x值、y值和z的最小值。 |
| `max` | [`Vector3`](Vector3.md) | x值、y值和z的最大值。 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:884](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L884)

___

### toString

▸ **toString**(): `string`

返回当前向量的字符串形式

#### Returns

`string`

#### Defined in

[src/engine/math/Vector3.ts:952](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L952)

___

### getTowPointbyDir

▸ `Static` **getTowPointbyDir**(`dir`, `tp1`, `tp2`, `width`, `aix`): `void`

通过一个朝向，获取一条垂直有宽度的垂直线段

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`Vector3`](Vector3.md) |
| `tp1` | [`Vector3`](Vector3.md) |
| `tp2` | [`Vector3`](Vector3.md) |
| `width` | `number` |
| `aix` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:976](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L976)

___

### pointToLine

▸ `Static` **pointToLine**(`point1`, `point2`, `position`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`Vector3`](Vector3.md) |
| `point2` | [`Vector3`](Vector3.md) |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector3.ts:998](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L998)

___

### normalizeToWay2D\_XY

▸ **normalizeToWay2D_XY**(): `void`

规整为正轴

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:1033](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1033)

___

### toArray

▸ **toArray**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/engine/math/Vector3.ts:1051](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1051)

___

### copyToBytes

▸ **copyToBytes**(`byte`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte` | `DataView` |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:1055](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1055)

___

### cross

▸ **cross**(`a`, `target?`): [`Vector3`](Vector3.md)

两个Vector3进行叉乘 this 叉乘 a
叉乘后的结果是这两条向量的垂直向量

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | 求叉乘的另外一个向量 |
| `target` | [`Vector3`](Vector3.md) | `null` | - |

#### Returns

[`Vector3`](Vector3.md)

Vector3 返回叉乘结果向量

#### Defined in

[src/engine/math/Vector3.ts:1068](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1068)

___

### multiplyScalar

▸ **multiplyScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:1077](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1077)

___

### setFromArray

▸ **setFromArray**(`array`, `firstElementPos?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | `number`[] | `undefined` |
| `firstElementPos` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/engine/math/Vector3.ts:1085](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1085)

___

### divideScalar

▸ **divideScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:1091](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1091)

___

### clampLength

▸ **clampLength**(`min`, `max`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:1095](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1095)

___

### cross

▸ `Static` **cross**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` |
| `b` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:1100](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1100)

___

### dot

▸ `Static` **dot**(`a`, `b`): `number`

计算两个向量的点积（dot product）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | 向量a |
| `b` | [`Vector3`](Vector3.md) | 向量b |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector3.ts:1114](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1114)

___

### getPoints

▸ `Static` **getPoints**(`total`, `randSeed`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |
| `randSeed` | `number` |

#### Returns

`any`[]

#### Defined in

[src/engine/math/Vector3.ts:1118](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1118)

___

### getPointNumbers

▸ `Static` **getPointNumbers**(`total`, `randSeed`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |
| `randSeed` | `number` |

#### Returns

`any`[]

#### Defined in

[src/engine/math/Vector3.ts:1127](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1127)

___

### getAngle

▸ `Static` **getAngle**(`from`, `to`): `number`

返回 源向量 与 目标向量 之间的角度（以度为单位）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | [`Vector3`](Vector3.md) | 源向量。 |
| `to` | [`Vector3`](Vector3.md) | 目标向量。 |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector3.ts:1149](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1149)

___

### sqrMagnitude

▸ `Static` **sqrMagnitude**(`arg0`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector3.ts:1154](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1154)

___

### getZYAngle

▸ `Static` **getZYAngle**(`zd`, `yd`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zd` | [`Vector3`](Vector3.md) |
| `yd` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

[src/engine/math/Vector3.ts:1158](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1158)

___

### sub

▸ `Static` **sub**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

两个向量相减

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | 向量a |
| `b` | [`Vector3`](Vector3.md) | `undefined` | 向量b |
| `target` | [`Vector3`](Vector3.md) | `null` | 输出向量 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:1168](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1168)

___

### add

▸ `Static` **add**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

两个向量相加

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | 向量a |
| `b` | [`Vector3`](Vector3.md) | `undefined` | 向量b |
| `target` | [`Vector3`](Vector3.md) | `null` | 输出向量 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:1184](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1184)

___

### setScalar

▸ **setScalar**(`value`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Vector3.ts:1243](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Vector3.ts#L1243)
