# Class: Matrix4

4*4 的矩阵


### Properties

- [blockBytes](Matrix4.md#blockbytes)
- [count](Matrix4.md#count)
- [EPSILON](Matrix4.md#epsilon)
- [index](Matrix4.md#index)
- [help\_matrix\_0](Matrix4.md#help_matrix_0)
- [help\_matrix\_1](Matrix4.md#help_matrix_1)
- [help\_matrix\_2](Matrix4.md#help_matrix_2)
- [rawData](Matrix4.md#rawdata)

### Methods

- [init](Matrix4.md#init)
- [lookAt](Matrix4.md#lookat)
- [multiply](Matrix4.md#multiply)
- [multiplyMatrices](Matrix4.md#multiplymatrices)
- [multiplyPoint3](Matrix4.md#multiplypoint3)
- [multiplyVector4](Matrix4.md#multiplyvector4)
- [transformVector4](Matrix4.md#transformvector4)
- [perspectiveMultiplyPoint3](Matrix4.md#perspectivemultiplypoint3)
- [perspective](Matrix4.md#perspective)
- [ortho](Matrix4.md#ortho)
- [orthoZO](Matrix4.md#orthozo)
- [orthoOffCenter](Matrix4.md#orthooffcenter)
- [transformDir](Matrix4.md#transformdir)
- [fromToRotation](Matrix4.md#fromtorotation)
- [append](Matrix4.md#append)
- [add](Matrix4.md#add)
- [sub](Matrix4.md#sub)
- [mult](Matrix4.md#mult)
- [appendRotation](Matrix4.md#appendrotation)
- [createByRotation](Matrix4.md#createbyrotation)
- [appendScale](Matrix4.md#appendscale)
- [createByScale](Matrix4.md#createbyscale)
- [appendTranslation](Matrix4.md#appendtranslation)
- [clone](Matrix4.md#clone)
- [copyRowFrom](Matrix4.md#copyrowfrom)
- [copyRowTo](Matrix4.md#copyrowto)
- [copyFrom](Matrix4.md#copyfrom)
- [copyRawDataTo](Matrix4.md#copyrawdatato)
- [copyColFrom](Matrix4.md#copycolfrom)
- [copyColTo](Matrix4.md#copycolto)
- [copyToMatrix3D](Matrix4.md#copytomatrix3d)
- [makeRotationFromQuaternion](Matrix4.md#makerotationfromquaternion)
- [decompose](Matrix4.md#decompose)
- [getEuler](Matrix4.md#geteuler)
- [compose](Matrix4.md#compose)
- [deltaTransformVector](Matrix4.md#deltatransformvector)
- [identity](Matrix4.md#identity)
- [fill](Matrix4.md#fill)
- [invers33](Matrix4.md#invers33)
- [invert](Matrix4.md#invert)
- [transformPoint](Matrix4.md#transformpoint)
- [transformVector](Matrix4.md#transformvector)
- [transpose](Matrix4.md#transpose)
- [getAxisRotation](Matrix4.md#getaxisrotation)
- [getPosition](Matrix4.md#getposition)
- [toString](Matrix4.md#tostring)
- [lerp](Matrix4.md#lerp)
- [get](Matrix4.md#get)
- [set](Matrix4.md#set)
- [getMaxScaleOnAxis](Matrix4.md#getmaxscaleonaxis)
- [sanitizeEuler](Matrix4.md#sanitizeeuler)
- [makePositive](Matrix4.md#makepositive)
- [matrixToEuler](Matrix4.md#matrixtoeuler)
- [translate](Matrix4.md#translate)
- [setTRInverse](Matrix4.md#settrinverse)
- [setScale](Matrix4.md#setscale)
- [matrix\_Multiply](Matrix4.md#matrix_multiply)
- [matrix\_Append](Matrix4.md#matrix_append)
- [matrix\_RotateY](Matrix4.md#matrix_rotatey)
- [matrix\_Rotate](Matrix4.md#matrix_rotate)
- [makeBasis](Matrix4.md#makebasis)
- [setElements](Matrix4.md#setelements)
- [makeRotationAxis](Matrix4.md#makerotationaxis)

### Constructors

- [constructor](Matrix4.md#constructor)

### Accessors

- [determinant](Matrix4.md#determinant)
- [position](Matrix4.md#position)
- [scale](Matrix4.md#scale)

## Properties

### blockBytes

▪ `Static` **blockBytes**: `number`

区块大小

#### Defined in

[src/engine/math/Matrix4.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L15)

___

### count

▪ `Static` **count**: `number` = `31000`

初始化的区块数量

#### Defined in

[src/engine/math/Matrix4.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L25)

___

### EPSILON

▪ `Static` **EPSILON**: `number` = `0.000001`

保留的最小精度

#### Defined in

[src/engine/math/Matrix4.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L30)

___

### index

• **index**: `number` = `0`

矩阵索引值

#### Defined in

[src/engine/math/Matrix4.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L35)

___

### help\_matrix\_0

▪ `Static` **help\_matrix\_0**: [`Matrix4`](Matrix4.md)

临时缓存矩阵

#### Defined in

[src/engine/math/Matrix4.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L57)

___

### help\_matrix\_1

▪ `Static` **help\_matrix\_1**: [`Matrix4`](Matrix4.md)

临时缓存矩阵

#### Defined in

[src/engine/math/Matrix4.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L62)

___

### help\_matrix\_2

▪ `Static` **help\_matrix\_2**: [`Matrix4`](Matrix4.md)

临时缓存矩阵

#### Defined in

[src/engine/math/Matrix4.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L67)

___

### rawData

• **rawData**: `Float32Array`

**`Language`**

zh_CN
一个由 16 个数字组成的矢量，其中，每四个元素可以是 4x4 矩阵的一行或一列

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Defined in

[src/engine/math/Matrix4.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L133)

## Methods

### init

▸ `Static` **init**(`count`): `Promise`<`void`\>

初始化矩阵，分配wasm内存

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | 分配的区块数量 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/engine/math/Matrix4.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L86)

___

### lookAt

▸ **lookAt**(`eye`, `at`, `up?`): `void`

**`Language`**

zh_CN
生成一个注视目标的矩阵.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eye` | [`Vector3`](Vector3.md) | `undefined` | 眼睛的位置. |
| `at` | [`Vector3`](Vector3.md) | `undefined` | 目标的位置. |
| `up` | [`Vector3`](Vector3.md) | `Vector3.Y_AXIS` | 向上的方向. |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L169)

___

### multiply

▸ **multiply**(`mat4`): `void`

**`Language`**

zh_CN
矩阵相乘.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat4` | [`Matrix4`](Matrix4.md) | 相乘的矩阵 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L223)

___

### multiplyMatrices

▸ **multiplyMatrices**(`a`, `b`): [`Matrix4`](Matrix4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Matrix4`](Matrix4.md) |
| `b` | [`Matrix4`](Matrix4.md) |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/math/Matrix4.ts:266](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L266)

___

### multiplyPoint3

▸ **multiplyPoint3**(`v`, `output?`): [`Vector3`](Vector3.md)

当前矩阵与3维相乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | 相剩的3维向量 |
| `output?` | [`Vector3`](Vector3.md) | 结果向量 |

#### Returns

[`Vector3`](Vector3.md)

结果向量

#### Defined in

[src/engine/math/Matrix4.ts:312](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L312)

___

### multiplyVector4

▸ **multiplyVector4**(`a`, `out?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |
| `out?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Matrix4.ts:323](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L323)

___

### transformVector4

▸ **transformVector4**(`v`, `target?`): [`Vector3`](Vector3.md)

**`Language`**

zh_CN
用当前矩阵变换一个3D向量

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | 变换的向量 w 会进行计算 |
| `target?` | [`Vector3`](Vector3.md) | 如果当前参数为null那么就会new一个新的Vector3返回 |

#### Returns

[`Vector3`](Vector3.md)

Vector3 变换后的向量

#### Defined in

[src/engine/math/Matrix4.ts:359](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L359)

___

### perspectiveMultiplyPoint3

▸ **perspectiveMultiplyPoint3**(`v`, `output`): `boolean`

将投影坐标转换为3D坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | 投影坐标点 |
| `output` | [`Vector3`](Vector3.md) | 3D坐标点 |

#### Returns

`boolean`

#### Defined in

[src/engine/math/Matrix4.ts:385](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L385)

___

### perspective

▸ **perspective**(`fov`, `aspect`, `zn`, `zf`): `void`

**`Language`**

zh_CN
生成一个透视投影矩阵.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | 观察时y 轴方向的角度，就是观察范围夹角。 |
| `aspect` | `number` | 横纵比，在视空间宽度除以高度. |
| `zn` | `number` | 近裁剪面位置Z值. |
| `zf` | `number` | 远裁剪面位置Z值. |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:468](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L468)

___

### ortho

▸ **ortho**(`w`, `h`, `zn`, `zf`): `void`

**`Language`**

zh_CN
生成一个透视投影矩阵.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `w` | `number` | 屏幕的宽度。 |
| `h` | `number` | 屏幕的高度. |
| `zn` | `number` | 近裁剪面位置Z值. |
| `zf` | `number` | 远裁剪面位置Z值. |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:506](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L506)

___

### orthoZO

▸ **orthoZO**(`left`, `right`, `bottom`, `top`, `near`, `far`): [`Matrix4`](Matrix4.md)

计算一个正交投影矩阵。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | 视图的左边界 |
| `right` | `number` | 视图的右边界 |
| `bottom` | `number` | 视图的下边界 |
| `top` | `number` | 视图的左上界 |
| `near` | `number` | 近截面 |
| `far` | `number` | 远截面 |

#### Returns

[`Matrix4`](Matrix4.md)

结果矩阵

#### Defined in

[src/engine/math/Matrix4.ts:540](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L540)

___

### orthoOffCenter

▸ **orthoOffCenter**(`l`, `r`, `b`, `t`, `zn`, `zf`): `void`

**`Language`**

zh_CN
生成一个透视投影矩阵.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `l` | `number` | 观察时X轴最小值. |
| `r` | `number` | 观察时X轴最大值. |
| `b` | `number` | 观察时Y轴最小值。 |
| `t` | `number` | 观察时Y轴最大值. |
| `zn` | `number` | 近裁剪面位置Z值. |
| `zf` | `number` | 远裁剪面位置Z值. |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:576](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L576)

___

### transformDir

▸ **transformDir**(`fromDirection`, `toDirection`): `void`

**`Language`**

zh_CN
计算出一个方向变换到另一个方向的旋转矩阵

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromDirection` | [`Vector3`](Vector3.md) | 初始方向 |
| `toDirection` | [`Vector3`](Vector3.md) | 变换后的方向 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:608](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L608)

___

### fromToRotation

▸ `Static` **fromToRotation**(`fromDirection`, `toDirection`, `target?`): [`Matrix4`](Matrix4.md)

**`Language`**

zh_CN
计算出一个方向变换到另一个方向的旋转矩阵

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromDirection` | [`Vector3`](Vector3.md) | 初始方向 |
| `toDirection` | [`Vector3`](Vector3.md) | 变换后的方向 |
| `target?` | [`Matrix4`](Matrix4.md) | 计算出的旋转矩阵 默认为null 结果会返回 |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 计算出的旋转矩阵 如果 target为null 就会创建新实例返回

#### Defined in

[src/engine/math/Matrix4.ts:713](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L713)

___

### append

▸ **append**(`lhs`): `void`

**`Language`**

zh_CN
通过将当前 Matrix4 对象与另一个 Matrix4 对象相乘来前置一个矩阵

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | [`Matrix4`](Matrix4.md) | 目标矩阵. |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:729](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L729)

___

### add

▸ **add**(`lhs`): [`Matrix4`](Matrix4.md)

**`Language`**

zh_CN
矩阵相加.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | [`Matrix4`](Matrix4.md) | 目标矩阵. |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 相加后的结果.

#### Defined in

[src/engine/math/Matrix4.ts:777](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L777)

___

### sub

▸ **sub**(`lhs`): [`Matrix4`](Matrix4.md)

**`Language`**

zh_CN
矩阵相减.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | [`Matrix4`](Matrix4.md) | 目标矩阵. |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 相加减的结果.

#### Defined in

[src/engine/math/Matrix4.ts:842](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L842)

___

### mult

▸ **mult**(`v`): [`Matrix4`](Matrix4.md)

**`Language`**

zh_CN
矩阵乘分量.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 该矩阵会乘以这个值 |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 返回一个相乘后的结果 矩阵.

#### Defined in

[src/engine/math/Matrix4.ts:908](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L908)

___

### appendRotation

▸ **appendRotation**(`degrees`, `axis`): `void`

**`Language`**

zh_CN
给当前矩阵追加一个方向角旋转 (按axis轴旋转degrees角度创建出来的矩阵)

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees` | `number` | 旋转角度. |
| `axis` | [`Vector3`](Vector3.md) | 绕axis轴旋转角度 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:958](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L958)

___

### createByRotation

▸ **createByRotation**(`degrees`, `axis`): `void`

**`Language`**

zh_CN
根据坐标轴和旋转角，创建矩阵 (按axis轴旋转degrees角度创建出来的矩阵)

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees` | `number` | 旋转角度. |
| `axis` | [`Vector3`](Vector3.md) | 绕axis轴旋转角度.axis需要指定为x/y/z之间的一个轴的朝向 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:971](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L971)

___

### appendScale

▸ **appendScale**(`xScale`, `yScale`, `zScale`): `void`

**`Language`**

zh_CN
追加三轴缩放值

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xScale` | `number` | x轴缩放 |
| `yScale` | `number` | y轴缩放 |
| `zScale` | `number` | z轴缩放 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1048](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1048)

___

### createByScale

▸ **createByScale**(`xScale`, `yScale`, `zScale`): `void`

**`Language`**

zh_CN
生成一个缩放矩阵，其他的属性会被重置

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xScale` | `number` | x轴缩放 |
| `yScale` | `number` | y轴缩放 |
| `zScale` | `number` | z轴缩放 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1062](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1062)

___

### appendTranslation

▸ **appendTranslation**(`x`, `y`, `z`): `void`

**`Language`**

zh_CN
加上一个平移矩阵

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x轴坐标 |
| `y` | `number` | y轴坐标 |
| `z` | `number` | z轴坐标 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1091](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1091)

___

### clone

▸ **clone**(): [`Matrix4`](Matrix4.md)

**`Language`**

zh_CN
返回一个当前矩阵的克隆矩阵

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 克隆后的矩阵

#### Defined in

[src/engine/math/Matrix4.ts:1105](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1105)

___

### copyRowFrom

▸ **copyRowFrom**(`row`, `Vector3`): `void`

**`Language`**

zh_CN
给当前矩阵其中一行赋值

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | 拷贝的行 |
| `Vector3` | [`Vector3`](Vector3.md) | 拷贝的值 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1119](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1119)

___

### copyRowTo

▸ **copyRowTo**(`row`, `Vector3`): `void`

**`Language`**

zh_CN
拷贝矩阵中的其中一行 把值存在Vector3.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | 拷贝的行 |
| `Vector3` | [`Vector3`](Vector3.md) | 拷贝存值目标 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1159](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1159)

___

### copyFrom

▸ **copyFrom**(`sourceMatrix3D`): [`Matrix4`](Matrix4.md)

**`Language`**

zh_CN
把一个矩阵的值赋给当前矩阵.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceMatrix3D` | [`Matrix4`](Matrix4.md) | 源矩阵. |

#### Returns

[`Matrix4`](Matrix4.md)

返回当前矩阵

#### Defined in

[src/engine/math/Matrix4.ts:1199](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1199)

___

### copyRawDataTo

▸ **copyRawDataTo**(`vector`, `index?`, `transpose?`): `void`

**`Language`**

zh_CN
把当前矩阵的值拷贝给一个 float 数组.

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vector` | `Float32Array` | `undefined` | 目标数组. |
| `index` | `number` | `0` | 从数组的index 开始copy. |
| `transpose` | `boolean` | `false` | 是否转置当前矩阵. |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1229](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1229)

___

### copyColFrom

▸ **copyColFrom**(`col`, `Vector3`): `void`

**`Language`**

zh_CN
给当前矩阵的某一列 赋值

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `col` | `number` | 列 |
| `Vector3` | [`Vector3`](Vector3.md) | 值来源 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1257](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1257)

___

### copyColTo

▸ **copyColTo**(`col`, `Vector3`): `void`

**`Language`**

zh_CN
拷贝当前矩阵的某一列

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `col` | `number` | 列 |
| `Vector3` | [`Vector3`](Vector3.md) | 拷贝目标 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1297](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1297)

___

### copyToMatrix3D

▸ **copyToMatrix3D**(`dest`): `void`

**`Language`**

zh_CN
拷贝当前矩阵

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | [`Matrix4`](Matrix4.md) | 拷贝目标 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1336](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1336)

___

### makeRotationFromQuaternion

▸ **makeRotationFromQuaternion**(`quaternion`): [`Matrix4`](Matrix4.md)

计算旋转矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quaternion` | [`Quaternion`](Quaternion.md) | 旋转 |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/math/Matrix4.ts:1348](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1348)

___

### decompose

▸ **decompose**(`orientationStyle?`, `target?`): [`Vector3`](Vector3.md)[]

**`Language`**

zh_CN
分解当前矩阵

**`See`**

 - fly.Orientation3D.AXIS_ANGLE
 - fly.Orientation3D.EULER_ANGLES
 - fly.Orientation3D.QUATERNION

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `orientationStyle` | `string` | `'eulerAngles'` | 分解类型 默认为 Orientation3D.EULER_ANGLES |
| `target?` | [`Vector3`](Vector3.md)[] | `undefined` | - |

#### Returns

[`Vector3`](Vector3.md)[]

Vector3[3] pos rot scale

#### Defined in

[src/engine/math/Matrix4.ts:1466](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1466)

___

### getEuler

▸ `Static` **getEuler**(`target`, `quaternion`, `isDegree?`, `order?`): [`Vector3`](Vector3.md)

获取欧拉向量

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | [`Vector3`](Vector3.md) | `undefined` | 结果向量 |
| `quaternion` | [`Quaternion`](Quaternion.md) | `undefined` | 旋转 |
| `isDegree` | `boolean` | `true` | 是否转换为角度 |
| `order?` | `string` | `undefined` | 转换顺序 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Matrix4.ts:1590](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1590)

___

### compose

▸ **compose**(`position`, `quaternion`, `scale`): [`Matrix4`](Matrix4.md)

计算位移、旋转、缩放组合矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Vector3`](Vector3.md) | 位移 |
| `quaternion` | [`Quaternion`](Quaternion.md) | 旋转 |
| `scale` | [`Vector3`](Vector3.md) | 缩放 |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/math/Matrix4.ts:1603](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1603)

___

### deltaTransformVector

▸ **deltaTransformVector**(`v`, `target?`): [`Vector3`](Vector3.md)

**`Language`**

zh_CN
当前矩阵变换一个向量

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | 要变换的向量 |
| `target?` | [`Vector3`](Vector3.md) | 默认为 null 如果当前参数为null那么就会new一个新的Vector3返回 |

#### Returns

[`Vector3`](Vector3.md)

Vector3 变换后的向量

#### Defined in

[src/engine/math/Matrix4.ts:1659](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1659)

___

### identity

▸ **identity**(): [`Matrix4`](Matrix4.md)

**`Language`**

zh_CN
单位化当前矩阵

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/math/Matrix4.ts:1681](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1681)

___

### fill

▸ **fill**(`value`): `void`

**`Language`**

zh_CN
填充当前矩阵

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 填充的值 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1710](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1710)

___

### invers33

▸ **invers33**(): `void`

**`Language`**

zh_CN
当前矩阵求逆

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:1736](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1736)

___

### invert

▸ **invert**(): `boolean`

**`Language`**

zh_CN
当前矩阵求逆

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Returns

`boolean`

boolean 是否能求逆

#### Defined in

[src/engine/math/Matrix4.ts:1834](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1834)

___

### transformPoint

▸ **transformPoint**(`v`, `target?`): [`Vector3`](Vector3.md)

将当前坐标转换为世界坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | 当前坐标 |
| `target?` | [`Vector3`](Vector3.md) | 世界坐标 |

#### Returns

[`Vector3`](Vector3.md)

世界坐标

#### Defined in

[src/engine/math/Matrix4.ts:1993](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L1993)

___

### transformVector

▸ **transformVector**(`v`, `target?`): [`Vector3`](Vector3.md)

**`Language`**

zh_CN
用当前矩阵变换一个3D向量 不处理位移

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | 变换的向量 |
| `target?` | [`Vector3`](Vector3.md) | 如果当前参数为null那么就会new一个新的Vector3返回 |

#### Returns

[`Vector3`](Vector3.md)

Vector3 变换后的向量

#### Defined in

[src/engine/math/Matrix4.ts:2020](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2020)

___

### transpose

▸ **transpose**(): `void`

**`Language`**

zh_CN
当前矩阵转置

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2044](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2044)

___

### getAxisRotation

▸ `Static` **getAxisRotation**(`x`, `y`, `z`, `degrees`): [`Matrix4`](Matrix4.md)

**`Language`**

zh_CN
生成一个(以x,y,z为中心轴旋转degrees角度)的矩阵

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 中心轴的x |
| `y` | `number` | 中心轴的y |
| `z` | `number` | 中心轴的z |
| `degrees` | `number` | 旋转角度 |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 矩阵

#### Defined in

[src/engine/math/Matrix4.ts:2076](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2076)

___

### getPosition

▸ **getPosition**(`out?`): [`Vector3`](Vector3.md)

返回矩阵位移

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out?` | [`Vector3`](Vector3.md) | 位移 |

#### Returns

[`Vector3`](Vector3.md)

位移

#### Defined in

[src/engine/math/Matrix4.ts:2129](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2129)

___

### toString

▸ **toString**(): `string`

**`Language`**

zh_CN
以字符串返回矩阵的值

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Returns

`string`

string 字符

#### Defined in

[src/engine/math/Matrix4.ts:2203](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2203)

___

### lerp

▸ **lerp**(`m0`, `m1`, `t`): `void`

**`Language`**

zh_CN
求两个矩阵之间的插值

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m0` | [`Matrix4`](Matrix4.md) | 矩阵0 |
| `m1` | [`Matrix4`](Matrix4.md) | 矩阵1 |
| `t` | `number` | 时间差 0.0 - 1.0 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2251](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2251)

___

### get

▸ **get**(`row`, `column`): `number`

读取矩阵元素值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | 行 |
| `column` | `number` | 列 |

#### Returns

`number`

#### Defined in

[src/engine/math/Matrix4.ts:2262](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2262)

___

### set

▸ **set**(`row`, `column`, `v`): `void`

设置矩阵元素值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | 行 |
| `column` | `number` | 列 |
| `v` | `number` | 值 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2272](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2272)

___

### getMaxScaleOnAxis

▸ **getMaxScaleOnAxis**(): `number`

**`Language`**

zh_CN
求矩阵在各个轴上缩放的最大值

**`Version`**

UU3D 4.0

**`Platform`**

Web,Native

#### Returns

`number`

#### Defined in

[src/engine/math/Matrix4.ts:2282](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2282)

___

### sanitizeEuler

▸ `Static` **sanitizeEuler**(`euler`): `void`

整理欧拉值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `euler` | [`Vector3`](Vector3.md) | 待整理区拉值 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2296](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2296)

___

### makePositive

▸ `Static` **makePositive**(`euler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `euler` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2304](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2304)

___

### matrixToEuler

▸ `Static` **matrixToEuler**(`matrix`, `v`): `boolean`

将矩阵转换为欧拉角

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | 待转换矩阵 |
| `v` | [`Vector3`](Vector3.md) | 欧拉角 |

#### Returns

`boolean`

#### Defined in

[src/engine/math/Matrix4.ts:2324](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2324)

___

### translate

▸ **translate**(`inTrans`): [`Matrix4`](Matrix4.md)

根据向量计算位移

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTrans` | [`Vector3`](Vector3.md) | 需要位移的向量 |

#### Returns

[`Matrix4`](Matrix4.md)

当前矩阵

#### Defined in

[src/engine/math/Matrix4.ts:2360](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2360)

___

### setTRInverse

▸ **setTRInverse**(`pos`, `q`): `void`

form unity API

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2378](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2378)

___

### setScale

▸ **setScale**(`inScale`): [`Matrix4`](Matrix4.md)

缩放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScale` | [`Vector3`](Vector3.md) | 缩放向量 |

#### Returns

[`Matrix4`](Matrix4.md)

当前矩阵

#### Defined in

[src/engine/math/Matrix4.ts:2389](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2389)

___

### matrix\_Multiply

▸ `Static` **matrix_Multiply**(`aMat`, `bMat`, `target_Mat`): `void`

世界矩阵间相乘，根据索引指定参数与结果

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aMat` | [`Matrix4`](Matrix4.md) | 待乘矩阵(请指定索引) |
| `bMat` | [`Matrix4`](Matrix4.md) | 待乘矩阵(请指定索引) |
| `target_Mat` | [`Matrix4`](Matrix4.md) | 结果矩阵(根据索引获取结果) |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2418](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2418)

___

### matrix\_Append

▸ `Static` **matrix_Append**(`aMat`, `bMat`, `target_Mat`): `void`

世界矩阵间伸展，根据索引指定参数与结果

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aMat` | [`Matrix4`](Matrix4.md) | 待乘矩阵(请指定索引) |
| `bMat` | [`Matrix4`](Matrix4.md) | 待乘矩阵(请指定索引) |
| `target_Mat` | [`Matrix4`](Matrix4.md) | 结果矩阵(根据索引获取结果) |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2428](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2428)

___

### matrix\_RotateY

▸ `Static` **matrix_RotateY**(`rad`, `target_Mat`): `void`

世界矩阵间延Y轴旋转，根据索引指定参数与结果

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | - |
| `target_Mat` | [`Matrix4`](Matrix4.md) | 结果矩阵(根据索引获取结果) |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2438](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2438)

___

### matrix\_Rotate

▸ `Static` **matrix_Rotate**(`rad`, `axis`, `target_Mat`): `void`

世界矩阵间旋转，根据索引指定参数与结果

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | - |
| `axis` | [`Vector3`](Vector3.md) | - |
| `target_Mat` | [`Matrix4`](Matrix4.md) | 结果矩阵(根据索引获取结果) |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2448](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2448)

___

### makeBasis

▸ **makeBasis**(`xAxis`, `yAxis`, `zAxis`): [`Matrix4`](Matrix4.md)

根据三轴生成矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `xAxis` | [`Vector3`](Vector3.md) |
| `yAxis` | [`Vector3`](Vector3.md) |
| `zAxis` | [`Vector3`](Vector3.md) |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/math/Matrix4.ts:2458](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2458)

___

### setElements

▸ **setElements**(`n11`, `n12`, `n13`, `n14`, `n21`, `n22`, `n23`, `n24`, `n31`, `n32`, `n33`, `n34`, `n41`, `n42`, `n43`, `n44`): [`Matrix4`](Matrix4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n11` | `any` |
| `n12` | `any` |
| `n13` | `any` |
| `n14` | `any` |
| `n21` | `any` |
| `n22` | `any` |
| `n23` | `any` |
| `n24` | `any` |
| `n31` | `any` |
| `n32` | `any` |
| `n33` | `any` |
| `n34` | `any` |
| `n41` | `any` |
| `n42` | `any` |
| `n43` | `any` |
| `n44` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/math/Matrix4.ts:2469](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2469)

___

### makeRotationAxis

▸ **makeRotationAxis**(`axis`, `angle`): [`Matrix4`](Matrix4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | `any` |
| `angle` | `any` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/math/Matrix4.ts:2482](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2482)

## Constructors

### constructor

• **new Matrix4**(`noWasm?`)

构造函数，创建一个矩阵实例

**`Language`**

zh_CN

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `noWasm` | `boolean` | `true` |

#### Defined in

[src/engine/math/Matrix4.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L142)

## Accessors

### determinant

• `get` **determinant**(): `number`

**`Language`**

zh_CN
返回矩阵行列式

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Returns

`number`

number 行列式值

#### Defined in

[src/engine/math/Matrix4.ts:2112](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2112)

___

### position

• `get` **position**(): [`Vector3`](Vector3.md)

**`Language`**

zh_CN
返回矩阵位移

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Returns

[`Vector3`](Vector3.md)

Vector3 位移

#### Defined in

[src/engine/math/Matrix4.ts:2148](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2148)

• `set` **position**(`value`): `void`

**`Language`**

zh_CN
设置矩阵位移

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Vector3`](Vector3.md) | 位移 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2161](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2161)

___

### scale

• `get` **scale**(): [`Vector3`](Vector3.md)

**`Language`**

zh_CN
返回矩阵缩放

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Returns

[`Vector3`](Vector3.md)

Vector3 缩放

#### Defined in

[src/engine/math/Matrix4.ts:2176](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2176)

• `set` **scale**(`value`): `void`

设置矩阵缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix4.ts:2184](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix4.ts#L2184)
