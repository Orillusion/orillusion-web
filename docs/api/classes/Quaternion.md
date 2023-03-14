# Class: Quaternion

四元数用于表示旋转。


### Properties

- [HELP\_0](Quaternion.md#help_0)
- [HELP\_1](Quaternion.md#help_1)
- [HELP\_2](Quaternion.md#help_2)
- [\_zero](Quaternion.md#_zero)
- [CALCULATION\_QUATERNION](Quaternion.md#calculation_quaternion)

### Constructors

- [constructor](Quaternion.md#constructor)

### Methods

- [identity](Quaternion.md#identity)
- [set](Quaternion.md#set)
- [divide](Quaternion.md#divide)
- [multiply](Quaternion.md#multiply)
- [multiplyVector](Quaternion.md#multiplyvector)
- [fromAxisAngle](Quaternion.md#fromaxisangle)
- [toAxisAngle](Quaternion.md#toaxisangle)
- [slerp](Quaternion.md#slerp)
- [lerp](Quaternion.md#lerp)
- [fromEulerAngles](Quaternion.md#fromeulerangles)
- [toEulerAngles](Quaternion.md#toeulerangles)
- [setFromRotationMatrix](Quaternion.md#setfromrotationmatrix)
- [getEulerAngles](Quaternion.md#geteulerangles)
- [normalize](Quaternion.md#normalize)
- [toString](Quaternion.md#tostring)
- [fromMatrix](Quaternion.md#frommatrix)
- [inverse](Quaternion.md#inverse)
- [clone](Quaternion.md#clone)
- [transformVector](Quaternion.md#transformvector)
- [copyFrom](Quaternion.md#copyfrom)
- [mul](Quaternion.md#mul)
- [quaternionToMatrix](Quaternion.md#quaterniontomatrix)

### Accessors

- [magnitude](Quaternion.md#magnitude)

## Properties

### HELP\_0

▪ `Static` **HELP\_0**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L9)

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L10)

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L11)

___

### \_zero

▪ `Static` **\_zero**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L12)

___

### CALCULATION\_QUATERNION

▪ `Static` **CALCULATION\_QUATERNION**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L13)

## Constructors

### constructor

• **new Quaternion**(`x?`, `y?`, `z?`, `w?`)

创建一个新的四元素对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 四元数的 X 分量。请勿直接修改四元数。 |
| `y` | `number` | `0` | 四元数的 y 分量。请勿直接修改四元数。 |
| `z` | `number` | `0` | 四元数的 z 分量。请勿直接修改四元数。 |
| `w` | `number` | `1` | 四元数的 w 分量。请勿直接修改四元数。 |

#### Defined in

[src/engine/math/Quaternion.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L38)

## Methods

### identity

▸ `Static` **identity**(): [`Quaternion`](Quaternion.md)

单位旋转。

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L49)

___

### set

▸ **set**(`x?`, `y?`, `z?`, `w?`): `void`

设置现有四元数的 x、y、z 和 w 分量。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 四元数的 X 分量。请勿直接修改四元数。 |
| `y` | `number` | `0` | 四元数的 y 分量。请勿直接修改四元数。 |
| `z` | `number` | `0` | 四元数的 z 分量。请勿直接修改四元数。 |
| `w` | `number` | `1` | 四元数的 w 分量。请勿直接修改四元数。 |

#### Returns

`void`

#### Defined in

[src/engine/math/Quaternion.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L64)

___

### divide

▸ **divide**(`v`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L71)

___

### multiply

▸ **multiply**(`qa`, `qb`): `void`

两个四元素相乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qa` | [`Quaternion`](Quaternion.md) | 四元数1 |
| `qb` | [`Quaternion`](Quaternion.md) | 四元数2 |

#### Returns

`void`

#### Defined in

[src/engine/math/Quaternion.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L97)

___

### multiplyVector

▸ **multiplyVector**(`vector`, `target?`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vector` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Quaternion`](Quaternion.md) | `null` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L113)

___

### fromAxisAngle

▸ **fromAxisAngle**(`axis`, `angle`): `void`

从由轴和角度所给定的旋转来设置该四元数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) | 轴 |
| `angle` | `number` | 弧度 |

#### Returns

`void`

#### Defined in

[src/engine/math/Quaternion.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L135)

___

### toAxisAngle

▸ **toAxisAngle**(`axis`): `number`

把四元数转成角度返回

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) | 指定轴 |

#### Returns

`number`

#### Defined in

[src/engine/math/Quaternion.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L153)

___

### slerp

▸ **slerp**(`qa`, `qb`, `t`): `void`

两个四元数之间球形插值，插值之间提供旋转恒定角变化率。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qa` | [`Quaternion`](Quaternion.md) | 四元数1 |
| `qb` | [`Quaternion`](Quaternion.md) | 四元数2 |
| `t` | `number` | 插值时刻 |

#### Returns

`void`

#### Defined in

[src/engine/math/Quaternion.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L187)

___

### lerp

▸ **lerp**(`qa`, `qb`, `t`): `void`

两个四元数之间的线性插值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qa` | [`Quaternion`](Quaternion.md) | 四元数1 |
| `qb` | [`Quaternion`](Quaternion.md) | 四元数2 |
| `t` | `number` | 插值时刻 |

#### Returns

`void`

#### Defined in

[src/engine/math/Quaternion.ts:247](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L247)

___

### fromEulerAngles

▸ **fromEulerAngles**(`ax`, `ay`, `az`): [`Quaternion`](Quaternion.md)

用数值表示给定的欧拉旋转填充四元数对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ax` | `number` | x轴旋转角度 |
| `ay` | `number` | y轴旋转角度 |
| `az` | `number` | z轴旋转角度 |

#### Returns

[`Quaternion`](Quaternion.md)

Quaternion 四元数对象

#### Defined in

[src/engine/math/Quaternion.ts:296](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L296)

___

### toEulerAngles

▸ **toEulerAngles**(`target?`): [`Vector3`](Vector3.md)

把四元数转成欧拉角返回

**`Retruns`**

Vector3D 转成的欧拉返回值

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | [`Vector3`](Vector3.md) | `null` | 默认参数为null，转成的欧拉返回值，如果为null就新建一个对象返回 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Quaternion.ts:333](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L333)

___

### setFromRotationMatrix

▸ **setFromRotationMatrix**(`m`): [`Quaternion`](Quaternion.md)

创建一个旋转

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `any` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:365](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L365)

___

### getEulerAngles

▸ **getEulerAngles**(`eulers?`): [`Vector3`](Vector3.md)

返回一个旋转

#### Parameters

| Name | Type |
| :------ | :------ |
| `eulers?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Quaternion.ts:416](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L416)

___

### normalize

▸ **normalize**(`val?`): `void`

单位化四元数。将此四元数转换为单位系数。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `val` | `number` | `1` | 单位系数，默认为1 |

#### Returns

`void`

#### Defined in

[src/engine/math/Quaternion.ts:448](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L448)

___

### toString

▸ **toString**(): `string`

以字符串形式返回四元数的值

#### Returns

`string`

#### Defined in

[src/engine/math/Quaternion.ts:461](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L461)

___

### fromMatrix

▸ **fromMatrix**(`matrix`): `void`

用一个旋转矩阵生成四元数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `any` | 旋转矩阵 |

#### Returns

`void`

#### Defined in

[src/engine/math/Quaternion.ts:524](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L524)

___

### inverse

▸ **inverse**(`target?`): [`Quaternion`](Quaternion.md)

返回一个把当前四元数取逆后的四元数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | [`Quaternion`](Quaternion.md) | `null` | 默认参数为null,如果当前参数为null那么就会new一个新的四元数对象返回 |

#### Returns

[`Quaternion`](Quaternion.md)

Quaternion 四元数

#### Defined in

[src/engine/math/Quaternion.ts:539](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L539)

___

### clone

▸ **clone**(): [`Quaternion`](Quaternion.md)

克隆一个四元数

#### Returns

[`Quaternion`](Quaternion.md)

Quaternion 当前四元数复制后返回新对象.

#### Defined in

[src/engine/math/Quaternion.ts:568](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L568)

___

### transformVector

▸ **transformVector**(`vector`, `target?`): [`Vector3`](Vector3.md)

旋转一个3量坐标点

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vector` | [`Vector3`](Vector3.md) | `undefined` | 被旋转的对象 |
| `target` | [`Vector3`](Vector3.md) | `null` | 默认参数为null，旋转后的坐标对象。如果为null，将创建一个新的对象 |

#### Returns

[`Vector3`](Vector3.md)

Vector3D 返回旋转后的坐标对象

#### Defined in

[src/engine/math/Quaternion.ts:587](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L587)

___

### copyFrom

▸ **copyFrom**(`q`): `void`

将数据从四元数复制到该实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Vector3`](Vector3.md) \| [`Quaternion`](Quaternion.md) | 被复制的四元数对象 |

#### Returns

`void`

#### Defined in

[src/engine/math/Quaternion.ts:620](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L620)

___

### mul

▸ **mul**(`lhs`, `rhs`, `target?`): [`Quaternion`](Quaternion.md)

from untiy API
op

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Quaternion`](Quaternion.md) |
| `rhs` | [`Quaternion`](Quaternion.md) |
| `target?` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/math/Quaternion.ts:632](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L632)

___

### quaternionToMatrix

▸ `Static` **quaternionToMatrix**(`q`, `m`): `void`

将四元素转换为矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) | 四元素对象 |
| `m` | `any` | 矩阵 |

#### Returns

`void`

#### Defined in

[src/engine/math/Quaternion.ts:646](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L646)

## Accessors

### magnitude

• `get` **magnitude**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/math/Quaternion.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Quaternion.ts#L53)
