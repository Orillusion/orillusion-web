# Class: Matrix4

math 4*4 matrix

### Constructors

- [constructor](Matrix4.md#constructor)

### Properties

- [blockBytes](Matrix4.md#blockbytes)
- [allocCount](Matrix4.md#alloccount)
- [allocOnceCount](Matrix4.md#alloconcecount)
- [maxCount](Matrix4.md#maxcount)
- [useCount](Matrix4.md#usecount)
- [dynamicMatrixBytes](Matrix4.md#dynamicmatrixbytes)
- [dynamicGlobalMatrixRef](Matrix4.md#dynamicglobalmatrixref)
- [help\_matrix\_0](Matrix4.md#help_matrix_0)
- [help\_matrix\_1](Matrix4.md#help_matrix_1)
- [help\_matrix\_2](Matrix4.md#help_matrix_2)
- [helpMatrix](Matrix4.md#helpmatrix)
- [helpMatrix2](Matrix4.md#helpmatrix2)
- [index](Matrix4.md#index)
- [rawData](Matrix4.md#rawdata)

### Accessors

- [determinant](Matrix4.md#determinant)
- [position](Matrix4.md#position)
- [scale](Matrix4.md#scale)

### Methods

- [allocMatrix](Matrix4.md#allocmatrix)
- [fromToRotation](Matrix4.md#fromtorotation)
- [getAxisRotation](Matrix4.md#getaxisrotation)
- [sanitizeEuler](Matrix4.md#sanitizeeuler)
- [makePositive](Matrix4.md#makepositive)
- [matrixToEuler](Matrix4.md#matrixtoeuler)
- [matrixMultiply](Matrix4.md#matrixmultiply)
- [matrixAppend](Matrix4.md#matrixappend)
- [matrixRotateY](Matrix4.md#matrixrotatey)
- [matrixRotate](Matrix4.md#matrixrotate)
- [lookAt](Matrix4.md#lookat)
- [multiply](Matrix4.md#multiply)
- [multiplyMatrices](Matrix4.md#multiplymatrices)
- [multiplyPoint3](Matrix4.md#multiplypoint3)
- [multiplyVector4](Matrix4.md#multiplyvector4)
- [transformVector4](Matrix4.md#transformvector4)
- [perspectiveMultiplyPoint3](Matrix4.md#perspectivemultiplypoint3)
- [perspective](Matrix4.md#perspective)
- [perspective3](Matrix4.md#perspective3)
- [frustum](Matrix4.md#frustum)
- [ortho](Matrix4.md#ortho)
- [orthoZO](Matrix4.md#orthozo)
- [orthoOffCenter](Matrix4.md#orthooffcenter)
- [transformDir](Matrix4.md#transformdir)
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
- [getPosition](Matrix4.md#getposition)
- [toString](Matrix4.md#tostring)
- [lerp](Matrix4.md#lerp)
- [get](Matrix4.md#get)
- [set](Matrix4.md#set)
- [getMaxScaleOnAxis](Matrix4.md#getmaxscaleonaxis)
- [translate](Matrix4.md#translate)
- [setTRInverse](Matrix4.md#settrinverse)
- [setScale](Matrix4.md#setscale)
- [makeBasis](Matrix4.md#makebasis)
- [makeRotationAxis](Matrix4.md#makerotationaxis)

## Constructors

### constructor

• **new Matrix4**(`doMatrix?`): [`Matrix4`](Matrix4.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doMatrix` | `boolean` | `false` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:321](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L321)

## Properties

### blockBytes

▪ `Static` **blockBytes**: `number`

matrix44 bytes block size

#### Defined in

[src/math/Matrix4.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L17)

___

### allocCount

▪ `Static` **allocCount**: `number` = `1000`

matrix do total count

#### Defined in

[src/math/Matrix4.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L27)

___

### allocOnceCount

▪ `Static` **allocOnceCount**: `number` = `1000`

quantity allocated for each capacity expansion

#### Defined in

[src/math/Matrix4.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L32)

___

### maxCount

▪ `Static` **maxCount**: `number`

matrix has max limit count

#### Defined in

[src/math/Matrix4.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L37)

___

### useCount

▪ `Static` **useCount**: `number` = `0`

current matrix use count

#### Defined in

[src/math/Matrix4.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L42)

___

### dynamicMatrixBytes

▪ `Static` **dynamicMatrixBytes**: `Float32Array`

matrix do use share bytesArray

#### Defined in

[src/math/Matrix4.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L58)

___

### dynamicGlobalMatrixRef

▪ `Static` **dynamicGlobalMatrixRef**: [`Matrix4`](Matrix4.md)[]

cache all use do matrix

#### Defined in

[src/math/Matrix4.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L63)

___

### help\_matrix\_0

▪ `Static` **help\_matrix\_0**: [`Matrix4`](Matrix4.md)

help fix global matrix 0

#### Defined in

[src/math/Matrix4.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L73)

___

### help\_matrix\_1

▪ `Static` **help\_matrix\_1**: [`Matrix4`](Matrix4.md)

help fix global matrix 1

#### Defined in

[src/math/Matrix4.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L78)

___

### help\_matrix\_2

▪ `Static` **help\_matrix\_2**: [`Matrix4`](Matrix4.md)

help fix global matrix 2

#### Defined in

[src/math/Matrix4.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L83)

___

### helpMatrix

▪ `Static` **helpMatrix**: [`Matrix4`](Matrix4.md)

help fix global matrix 3

#### Defined in

[src/math/Matrix4.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L88)

___

### helpMatrix2

▪ `Static` **helpMatrix2**: [`Matrix4`](Matrix4.md)

help fix global matrix 4

#### Defined in

[src/math/Matrix4.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L93)

___

### index

• **index**: `number` = `0`

matrix index at global matrix list

#### Defined in

[src/math/Matrix4.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L104)

___

### rawData

• **rawData**: `Float32Array`

matrix raw data format Float32Array

**`See`**

Float32Array

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L116)

## Accessors

### determinant

• `get` **determinant**(): `number`

Returns the matrix determinant

#### Returns

`number`

number determinant

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1887](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1887)

___

### position

• `get` **position**(): [`Vector3`](Vector3.md)

Return translation

#### Returns

[`Vector3`](Vector3.md)

Vector3 Position of translation

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1918](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1918)

• `set` **position**(`value`): `void`

Set Position of translation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Vector3`](Vector3.md) | Position of translation |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1928](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1928)

___

### scale

• `get` **scale**(): [`Vector3`](Vector3.md)

get Component of scale

#### Returns

[`Vector3`](Vector3.md)

Vector3 scale

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1941](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1941)

• `set` **scale**(`value`): `void`

Set component of scale

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1949](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1949)

## Methods

### allocMatrix

▸ **allocMatrix**(`allocCount`): `void`

alloc web runtime cpu memory totalCount * 4(float) * 4
init matrix memory by totalCount * 4(float) * 4

#### Parameters

| Name | Type |
| :------ | :------ |
| `allocCount` | `number` |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L126)

___

### fromToRotation

▸ **fromToRotation**(`fromDirection`, `toDirection`, `target?`): [`Matrix4`](Matrix4.md)

create matrix from two direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromDirection` | [`Vector3`](Vector3.md) | first direction |
| `toDirection` | [`Vector3`](Vector3.md) | second direction |
| `target?` | [`Matrix4`](Matrix4.md) | ref matrix |

#### Returns

[`Matrix4`](Matrix4.md)

return new one matrix

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L156)

___

### getAxisRotation

▸ **getAxisRotation**(`x`, `y`, `z`, `degrees`): [`Matrix4`](Matrix4.md)

Generate a matrix (rotate degrees with x,y,z as the center axis)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x on the central axis |
| `y` | `number` | y on the central axis |
| `z` | `number` | z on the central axis |
| `degrees` | `number` | rotation angle |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 result

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L171)

___

### sanitizeEuler

▸ **sanitizeEuler**(`euler`): `void`

Arrange the Euler values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `euler` | [`Vector3`](Vector3.md) | Euler values |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L205)

___

### makePositive

▸ **makePositive**(`euler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `euler` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L213)

___

### matrixToEuler

▸ **matrixToEuler**(`matrix`, `v`): `boolean`

Convert the matrix to Euler angles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | Matrix to be transformed |
| `v` | [`Vector3`](Vector3.md) | euler angle |

#### Returns

`boolean`

#### Defined in

[src/math/Matrix4.ts:245](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L245)

___

### matrixMultiply

▸ **matrixMultiply**(`aMat`, `bMat`, `target_Mat`): `void`

Multiply the world matrix, specifying parameters and results according to the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aMat` | [`Matrix4`](Matrix4.md) | Matrix to be multiplied (please specify index) |
| `bMat` | [`Matrix4`](Matrix4.md) | Matrix to be multiplied (please specify index) |
| `target_Mat` | [`Matrix4`](Matrix4.md) | Result matrix (get results based on index) |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:282](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L282)

___

### matrixAppend

▸ **matrixAppend**(`aMat`, `bMat`, `target_Mat`): `void`

World matrix extension, according to the index to specify parameters and results

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aMat` | [`Matrix4`](Matrix4.md) | Matrix to be multiplied (please specify index) |
| `bMat` | [`Matrix4`](Matrix4.md) | Matrix to be multiplied (please specify index) |
| `target_Mat` | [`Matrix4`](Matrix4.md) | Result matrix (get results based on index) |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:292](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L292)

___

### matrixRotateY

▸ **matrixRotateY**(`rad`, `target_Mat`): `void`

The Y-axis is rotated between the world matrix, and the parameters and results are specified according to the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | - |
| `target_Mat` | [`Matrix4`](Matrix4.md) | Result matrix (get results based on index) |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:302](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L302)

___

### matrixRotate

▸ **matrixRotate**(`rad`, `axis`, `target_Mat`): `void`

Rotate the world matrix, specifying parameters and results according to the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | - |
| `axis` | [`Vector3`](Vector3.md) | - |
| `target_Mat` | [`Matrix4`](Matrix4.md) | Result matrix (get results based on index) |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:312](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L312)

___

### lookAt

▸ **lookAt**(`eye`, `at`, `up?`): `void`

current matrix move position and rotation to target

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eye` | [`Vector3`](Vector3.md) | `undefined` | eye position |
| `at` | [`Vector3`](Vector3.md) | `undefined` | target position |
| `up` | [`Vector3`](Vector3.md) | `Vector3.Y_AXIS` | normalize axis way |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L352)

___

### multiply

▸ **multiply**(`mat4`): `void`

matrix multiply

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat4` | [`Matrix4`](Matrix4.md) | multiply target |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:403](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L403)

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

[src/math/Matrix4.ts:452](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L452)

___

### multiplyPoint3

▸ **multiplyPoint3**(`v`, `output?`): [`Vector3`](Vector3.md)

convert a vector3 to this matrix space
if output not set , return a new one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | target vector3 |
| `output?` | [`Vector3`](Vector3.md) | save target |

#### Returns

[`Vector3`](Vector3.md)

save target

#### Defined in

[src/math/Matrix4.ts:499](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L499)

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

[src/math/Matrix4.ts:508](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L508)

___

### transformVector4

▸ **transformVector4**(`v`, `target?`): [`Vector3`](Vector3.md)

convert a vector3 to this matrix space
if output not set , return a new one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | convert target |
| `target?` | [`Vector3`](Vector3.md) | ref one vector3 |

#### Returns

[`Vector3`](Vector3.md)

Vector3

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:531](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L531)

___

### perspectiveMultiplyPoint3

▸ **perspectiveMultiplyPoint3**(`v`, `output`): `boolean`

Convert projection coordinates to 3D coordinates

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | vector3 target |
| `output` | [`Vector3`](Vector3.md) | ref vector3d |

#### Returns

`boolean`

#### Defined in

[src/math/Matrix4.ts:555](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L555)

___

### perspective

▸ **perspective**(`fov`, `aspect`, `zn`, `zf`): `void`

set matrix perspective

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | perspective angle 0 ~ 90 |
| `aspect` | `number` | aspect ratio |
| `zn` | `number` | near plane |
| `zf` | `number` | far plane |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:585](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L585)

___

### perspective3

▸ **perspective3**(`fov`, `aspect`, `near`, `far`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fov` | `number` |
| `aspect` | `number` |
| `near` | `number` |
| `far` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:612](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L612)

___

### frustum

▸ **frustum**(`l`, `r`, `b`, `t`, `n`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `number` |
| `r` | `number` |
| `b` | `number` |
| `t` | `number` |
| `n` | `number` |
| `f` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:618](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L618)

___

### ortho

▸ **ortho**(`w`, `h`, `zn`, `zf`): [`Matrix4`](Matrix4.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `w` | `number` | screen width |
| `h` | `number` | screen height |
| `zn` | `number` | camera near plane |
| `zf` | `number` | camera far plane |

#### Returns

[`Matrix4`](Matrix4.md)

this matrix

**`Version`**

Orillusion3D  0.5.1
set matrix orthogonal projection

#### Defined in

[src/math/Matrix4.ts:651](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L651)

___

### orthoZO

▸ **orthoZO**(`left`, `right`, `bottom`, `top`, `near`, `far`): [`Matrix4`](Matrix4.md)

set matrix orthogonal projection by view side

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | orthogonal view left |
| `right` | `number` | orthogonal view right |
| `bottom` | `number` | orthogonal view bottom |
| `top` | `number` | orthogonal view top |
| `near` | `number` | camera near plane |
| `far` | `number` | camera far plane |

#### Returns

[`Matrix4`](Matrix4.md)

this matrix

#### Defined in

[src/math/Matrix4.ts:687](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L687)

___

### orthoOffCenter

▸ **orthoOffCenter**(`l`, `r`, `b`, `t`, `zn`, `zf`): `void`

set matrix orthogonal projection by view center

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `number` |
| `r` | `number` |
| `b` | `number` |
| `t` | `number` |
| `zn` | `number` |
| `zf` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:714](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L714)

___

### transformDir

▸ **transformDir**(`fromDirection`, `toDirection`): `this`

set matrix from two direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromDirection` | [`Vector3`](Vector3.md) | first direction |
| `toDirection` | [`Vector3`](Vector3.md) | second direction |

#### Returns

`this`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:744](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L744)

___

### append

▸ **append**(`lhs`): `void`

multiply matrix a b

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | [`Matrix4`](Matrix4.md) | target matrix |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:867](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L867)

___

### add

▸ **add**(`lhs`): [`Matrix4`](Matrix4.md)

matrix a add matrix b

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | [`Matrix4`](Matrix4.md) | target matrix. |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 result.

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:913](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L913)

___

### sub

▸ **sub**(`lhs`): [`Matrix4`](Matrix4.md)

matrix a sub matrix b

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | [`Matrix4`](Matrix4.md) | target matrix b. |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 .

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:976](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L976)

___

### mult

▸ **mult**(`v`): [`Matrix4`](Matrix4.md)

Matrix times components.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | This matrix is going to be multiplied by this value |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 Returns a multiplicative result matrix.

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1040](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1040)

___

### appendRotation

▸ **appendRotation**(`degrees`, `axis`): `void`

Add a direction Angle rotation to the current matrix (the matrix created by rotating degrees according to axis)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees` | `number` | Angle of rotation. |
| `axis` | [`Vector3`](Vector3.md) | Angle of rotation around axis axis |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1087](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1087)

___

### createByRotation

▸ **createByRotation**(`degrees`, `axis`): `this`

Create a matrix based on the axis and rotation Angle (the matrix created by rotating the degrees according to the axis)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees` | `number` | Angle of rotation. |
| `axis` | [`Vector3`](Vector3.md) | Rotation Angle around axis axis. Axis needs to be specified as the orientation of an axis between x/y/z |

#### Returns

`this`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1098](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1098)

___

### appendScale

▸ **appendScale**(`xScale`, `yScale`, `zScale`): `void`

Append the triaxial scaling value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xScale` | `number` | x axis scaling |
| `yScale` | `number` | y axis scaling |
| `zScale` | `number` | z axis scaling |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1175](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1175)

___

### createByScale

▸ **createByScale**(`xScale`, `yScale`, `zScale`): `void`

A scaling matrix is generated and other properties are reset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xScale` | `number` | x axis scaling |
| `yScale` | `number` | y axis scaling |
| `zScale` | `number` | z axis scaling |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1187](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1187)

___

### appendTranslation

▸ **appendTranslation**(`x`, `y`, `z`): `void`

Plus a translation matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x axis scaling |
| `y` | `number` | y axis scaling |
| `z` | `number` | z axis scaling |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1214](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1214)

___

### clone

▸ **clone**(): [`Matrix4`](Matrix4.md)

Returns a clone of the current matrix

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 The cloned matrix

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1226](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1226)

___

### copyRowFrom

▸ **copyRowFrom**(`row`, `Vector3`): `void`

Assigns a value to one row of the current matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | Row of copy |
| `Vector3` | [`Vector3`](Vector3.md) | Value of copy |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1238](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1238)

___

### copyRowTo

▸ **copyRowTo**(`row`, `Vector3`): `void`

One of the rows in the copy matrix stores the values in Vector3.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | Row of copy |
| `Vector3` | [`Vector3`](Vector3.md) | Copy the storage target |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1276](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1276)

___

### copyFrom

▸ **copyFrom**(`sourceMatrix3D`): [`Matrix4`](Matrix4.md)

Assigns the value of a matrix to the current matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceMatrix3D` | [`Matrix4`](Matrix4.md) | source Matrix |

#### Returns

[`Matrix4`](Matrix4.md)

Returns the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1314](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1314)

___

### copyRawDataTo

▸ **copyRawDataTo**(`vector`, `index?`, `transpose?`): `void`

CoMath.PIes the value of the current matrix to a float array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vector` | `Float32Array` | `undefined` | The target array. |
| `index` | `number` | `0` | copy from the index of the array. |
| `transpose` | `boolean` | `false` | Whether to transpose the current matrix. |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1342](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1342)

___

### copyColFrom

▸ **copyColFrom**(`col`, `Vector3`): `void`

Assigns a value to a column of the current matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `col` | `number` | column |
| `Vector3` | [`Vector3`](Vector3.md) | Source of value |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1368](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1368)

___

### copyColTo

▸ **copyColTo**(`col`, `Vector3`): `void`

Copy a column of the current matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `col` | `number` | column |
| `Vector3` | [`Vector3`](Vector3.md) | Target of copy |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1406](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1406)

___

### copyToMatrix3D

▸ **copyToMatrix3D**(`dest`): `void`

Copy the current matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | [`Matrix4`](Matrix4.md) | Target of copy |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1443](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1443)

___

### makeRotationFromQuaternion

▸ **makeRotationFromQuaternion**(`quaternion`): [`Matrix4`](Matrix4.md)

Calculate rotation matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quaternion` | [`Quaternion`](Quaternion.md) | Rotate the quaternion |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:1452](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1452)

___

### decompose

▸ **decompose**(`orientationStyle?`, `target?`): [`Vector3`](Vector3.md)[]

Decompose the current matrix

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `orientationStyle` | `string` | `'eulerAngles'` | The default decomposition type is Orientation3D.EULER_ANGLES |
| `target?` | [`Vector3`](Vector3.md)[] | `undefined` | - |

#### Returns

[`Vector3`](Vector3.md)[]

Vector3[3] pos rot scale

**`See`**

 - Orientation3D.AXIS_ANGLE
 - Orientation3D.EULER_ANGLES
 - Orientation3D.QUATERNION

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1467](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1467)

___

### getEuler

▸ **getEuler**(`target`, `quaternion`, `isDegree?`, `order?`): [`Vector3`](Vector3.md)

Get the Euler vector

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | [`Vector3`](Vector3.md) | `undefined` | Vector of results |
| `quaternion` | [`Quaternion`](Quaternion.md) | `undefined` | Rotate the quaternion |
| `isDegree` | `boolean` | `true` | Whether to convert to Angle |
| `order?` | `string` | `undefined` | convert order |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Matrix4.ts:1595](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1595)

___

### compose

▸ **compose**(`position`, `quaternion`, `scale`): [`Matrix4`](Matrix4.md)

Calculate the combined matrix of displacement, rotation and scaling

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Vector3`](Vector3.md) | translation |
| `quaternion` | [`Quaternion`](Quaternion.md) | rotation |
| `scale` | [`Vector3`](Vector3.md) | scale |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:1608](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1608)

___

### deltaTransformVector

▸ **deltaTransformVector**(`v`, `target?`): [`Vector3`](Vector3.md)

The current matrix transforms a vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | Vector to transform |
| `target?` | [`Vector3`](Vector3.md) | The default is null and if the current argument is null then a new Vector3 will be returned |

#### Returns

[`Vector3`](Vector3.md)

Vector3 The transformed vector

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1662](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1662)

___

### identity

▸ **identity**(): [`Matrix4`](Matrix4.md)

Unifies the current matrix

#### Returns

[`Matrix4`](Matrix4.md)

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1681](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1681)

___

### fill

▸ **fill**(`value`): `void`

Fill the current matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The filled value |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1708](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1708)

___

### invers33

▸ **invers33**(): `void`

Invert the current matrix

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1732](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1732)

___

### invert

▸ **invert**(): `boolean`

Invert the current matrix

#### Returns

`boolean`

boolean Whether can invert it

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1769](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1769)

___

### transformPoint

▸ **transformPoint**(`v`, `target?`): [`Vector3`](Vector3.md)

Converts the current coordinates to the world coordinates

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | Current coordinates |
| `target?` | [`Vector3`](Vector3.md) | world coordinate |

#### Returns

[`Vector3`](Vector3.md)

world coordinate

#### Defined in

[src/math/Matrix4.ts:1819](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1819)

___

### transformVector

▸ **transformVector**(`v`, `target?`): [`Vector3`](Vector3.md)

Transforming a 3D vector with the current matrix does not deal with displacement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | Vector of transformation |
| `target?` | [`Vector3`](Vector3.md) | If the current argument is null then a new Vector3 will be returned |

#### Returns

[`Vector3`](Vector3.md)

Vector3 The transformed vector

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1841](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1841)

___

### transpose

▸ **transpose**(): `void`

The current matrix transpose

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1861](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1861)

___

### getPosition

▸ **getPosition**(`out?`): [`Vector3`](Vector3.md)

Return matrix displacement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out?` | [`Vector3`](Vector3.md) | Position of translation |

#### Returns

[`Vector3`](Vector3.md)

Position of translation

#### Defined in

[src/math/Matrix4.ts:1904](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1904)

___

### toString

▸ **toString**(): `string`

Returns the value of the matrix as a string

#### Returns

`string`

string

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:1966](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1966)

___

### lerp

▸ **lerp**(`m0`, `m1`, `t`): `void`

Interpolate between two matrices

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m0` | [`Matrix4`](Matrix4.md) | Matrix 0 |
| `m1` | [`Matrix4`](Matrix4.md) | Matrix 1 |
| `t` | `number` | Factor of interpolation 0.0 - 1.0 |

#### Returns

`void`

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:2012](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2012)

___

### get

▸ **get**(`row`, `column`): `number`

Read matrix element values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | row |
| `column` | `number` | column |

#### Returns

`number`

#### Defined in

[src/math/Matrix4.ts:2023](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2023)

___

### set

▸ **set**(`row`, `column`, `v`): `void`

Sets the matrix element values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | row |
| `column` | `number` | column |
| `v` | `number` | value |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:2033](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2033)

___

### getMaxScaleOnAxis

▸ **getMaxScaleOnAxis**(): `number`

Get the maximum value of the matrix scaled on each axis

#### Returns

`number`

**`Version`**

Orillusion3D  0.5.1 4.0

#### Defined in

[src/math/Matrix4.ts:2041](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2041)

___

### translate

▸ **translate**(`inTrans`): [`Matrix4`](Matrix4.md)

Calculate the displacement from the vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTrans` | [`Vector3`](Vector3.md) | Vector |

#### Returns

[`Matrix4`](Matrix4.md)

current matrix

#### Defined in

[src/math/Matrix4.ts:2056](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2056)

___

### setTRInverse

▸ **setTRInverse**(`pos`, `q`): `void`

from unity AMath.PI

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |
| `q` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:2073](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2073)

___

### setScale

▸ **setScale**(`inScale`): [`Matrix4`](Matrix4.md)

Set scale value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScale` | [`Vector3`](Vector3.md) | scale value |

#### Returns

[`Matrix4`](Matrix4.md)

this matrix

#### Defined in

[src/math/Matrix4.ts:2084](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2084)

___

### makeBasis

▸ **makeBasis**(`xAxis`, `yAxis`, `zAxis`): [`Matrix4`](Matrix4.md)

Generate the matrix according to the three axes

#### Parameters

| Name | Type |
| :------ | :------ |
| `xAxis` | [`Vector3`](Vector3.md) |
| `yAxis` | [`Vector3`](Vector3.md) |
| `zAxis` | [`Vector3`](Vector3.md) |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:2110](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2110)

___

### makeRotationAxis

▸ **makeRotationAxis**(`axis`, `angle`): [`Matrix4`](Matrix4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) |
| `angle` | `number` |

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:2120](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2120)
