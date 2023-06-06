# Class: Matrix4

math 4*4 matrix

### Constructors

- [constructor](Matrix4.md#constructor)

### Properties

- [blockBytes](Matrix4.md#blockbytes)
- [allocCount](Matrix4.md#alloccount)
- [maxCount](Matrix4.md#maxcount)
- [useCount](Matrix4.md#usecount)
- [matrixBytes](Matrix4.md#matrixbytes)
- [globalMatrixRef](Matrix4.md#globalmatrixref)
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

• **new Matrix4**(`doMatrix?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `doMatrix` | `boolean` | `false` |

#### Defined in

[src/math/Matrix4.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L320)

## Properties

### blockBytes

▪ `Static` **blockBytes**: `number`

matrix44 bytes block size

#### Defined in

[src/math/Matrix4.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L17)

___

### allocCount

▪ `Static` **allocCount**: `number` = `0`

matrix do total count

#### Defined in

[src/math/Matrix4.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L27)

___

### maxCount

▪ `Static` **maxCount**: `number` = `200000`

matrix has max limit count

#### Defined in

[src/math/Matrix4.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L32)

___

### useCount

▪ `Static` **useCount**: `number` = `0`

current matrix use count

#### Defined in

[src/math/Matrix4.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L37)

___

### matrixBytes

▪ `Static` **matrixBytes**: `Float32Array`

matrix do use share bytesArray

#### Defined in

[src/math/Matrix4.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L53)

___

### globalMatrixRef

▪ `Static` **globalMatrixRef**: [`Matrix4`](Matrix4.md)[]

cache all use do matrix

#### Defined in

[src/math/Matrix4.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L58)

___

### help\_matrix\_0

▪ `Static` **help\_matrix\_0**: [`Matrix4`](Matrix4.md)

help fix global matrix 0

#### Defined in

[src/math/Matrix4.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L68)

___

### help\_matrix\_1

▪ `Static` **help\_matrix\_1**: [`Matrix4`](Matrix4.md)

help fix global matrix 1

#### Defined in

[src/math/Matrix4.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L73)

___

### help\_matrix\_2

▪ `Static` **help\_matrix\_2**: [`Matrix4`](Matrix4.md)

help fix global matrix 2

#### Defined in

[src/math/Matrix4.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L78)

___

### helpMatrix

▪ `Static` **helpMatrix**: [`Matrix4`](Matrix4.md)

help fix global matrix 3

#### Defined in

[src/math/Matrix4.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L83)

___

### helpMatrix2

▪ `Static` **helpMatrix2**: [`Matrix4`](Matrix4.md)

help fix global matrix 4

#### Defined in

[src/math/Matrix4.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L88)

___

### index

• **index**: `number` = `0`

matrix index at global matrix list

#### Defined in

[src/math/Matrix4.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L99)

___

### rawData

• **rawData**: `Float32Array`

matrix raw data format Float32Array

**`See`**

Float32Array

**`Version`**

Orillusion3D  0.5.1

#### Defined in

[src/math/Matrix4.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L111)

## Accessors

### determinant

• `get` **determinant**(): `number`

Returns the matrix determinant

**`Version`**

Orillusion3D  0.5.1

#### Returns

`number`

number determinant

#### Defined in

[src/math/Matrix4.ts:1865](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1865)

___

### position

• `get` **position**(): [`Vector3`](Vector3.md)

Return translation

**`Version`**

Orillusion3D  0.5.1

#### Returns

[`Vector3`](Vector3.md)

Vector3 Position of translation

#### Defined in

[src/math/Matrix4.ts:1896](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1896)

• `set` **position**(`value`): `void`

Set Position of translation

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Vector3`](Vector3.md) | Position of translation |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1906](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1906)

___

### scale

• `get` **scale**(): [`Vector3`](Vector3.md)

get Component of scale

**`Version`**

Orillusion3D  0.5.1

#### Returns

[`Vector3`](Vector3.md)

Vector3 scale

#### Defined in

[src/math/Matrix4.ts:1919](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1919)

• `set` **scale**(`value`): `void`

Set component of scale

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1927](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1927)

## Methods

### allocMatrix

▸ `Static` **allocMatrix**(`allocCount`): `void`

alloc web runtime cpu memory totalCount * 4(float) * 4
init matrix memory by totalCount * 4(float) * 4

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `allocCount` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L122)

___

### fromToRotation

▸ `Static` **fromToRotation**(`fromDirection`, `toDirection`, `target?`): [`Matrix4`](Matrix4.md)

create matrix from two direction

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromDirection` | [`Vector3`](Vector3.md) | first direction |
| `toDirection` | [`Vector3`](Vector3.md) | second direction |
| `target?` | [`Matrix4`](Matrix4.md) | ref matrix |

#### Returns

[`Matrix4`](Matrix4.md)

return new one matrix

#### Defined in

[src/math/Matrix4.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L155)

___

### getAxisRotation

▸ `Static` **getAxisRotation**(`x`, `y`, `z`, `degrees`): [`Matrix4`](Matrix4.md)

Generate a matrix (rotate degrees with x,y,z as the center axis)

**`Version`**

Orillusion3D  0.5.1

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

#### Defined in

[src/math/Matrix4.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L170)

___

### sanitizeEuler

▸ `Static` **sanitizeEuler**(`euler`): `void`

Arrange the Euler values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `euler` | [`Vector3`](Vector3.md) | Euler values |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L204)

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

[src/math/Matrix4.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L212)

___

### matrixToEuler

▸ `Static` **matrixToEuler**(`matrix`, `v`): `boolean`

Convert the matrix to Euler angles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | Matrix to be transformed |
| `v` | [`Vector3`](Vector3.md) | euler angle |

#### Returns

`boolean`

#### Defined in

[src/math/Matrix4.ts:244](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L244)

___

### matrixMultiply

▸ `Static` **matrixMultiply**(`aMat`, `bMat`, `target_Mat`): `void`

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

[src/math/Matrix4.ts:281](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L281)

___

### matrixAppend

▸ `Static` **matrixAppend**(`aMat`, `bMat`, `target_Mat`): `void`

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

[src/math/Matrix4.ts:291](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L291)

___

### matrixRotateY

▸ `Static` **matrixRotateY**(`rad`, `target_Mat`): `void`

The Y-axis is rotated between the world matrix, and the parameters and results are specified according to the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | - |
| `target_Mat` | [`Matrix4`](Matrix4.md) | Result matrix (get results based on index) |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:301](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L301)

___

### matrixRotate

▸ `Static` **matrixRotate**(`rad`, `axis`, `target_Mat`): `void`

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

[src/math/Matrix4.ts:311](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L311)

___

### lookAt

▸ **lookAt**(`eye`, `at`, `up?`): `void`

current matrix move position and rotation to target

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eye` | [`Vector3`](Vector3.md) | `undefined` | eye position |
| `at` | [`Vector3`](Vector3.md) | `undefined` | target position |
| `up` | [`Vector3`](Vector3.md) | `Vector3.Y_AXIS` | normalize axis way |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L349)

___

### multiply

▸ **multiply**(`mat4`): `void`

matrix multiply

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat4` | [`Matrix4`](Matrix4.md) | multiply target |

#### Returns

`void`

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

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | convert target |
| `target?` | [`Vector3`](Vector3.md) | ref one vector3 |

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Defined in

[src/math/Matrix4.ts:540](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L540)

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

[src/math/Matrix4.ts:564](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L564)

___

### perspective

▸ **perspective**(`fov`, `aspect`, `zn`, `zf`): `void`

set matrix perspective

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | perspective angle 0 ~ 90 |
| `aspect` | `number` | aspect ratio |
| `zn` | `number` | near plane |
| `zf` | `number` | far plane |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:594](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L594)

___

### ortho

▸ **ortho**(`w`, `h`, `zn`, `zf`): [`Matrix4`](Matrix4.md)

**`Version`**

Orillusion3D  0.5.1
set matrix orthogonal projection

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

#### Defined in

[src/math/Matrix4.ts:634](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L634)

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

[src/math/Matrix4.ts:670](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L670)

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

[src/math/Matrix4.ts:697](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L697)

___

### transformDir

▸ **transformDir**(`fromDirection`, `toDirection`): `void`

set matrix from two direction

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromDirection` | [`Vector3`](Vector3.md) | first direction |
| `toDirection` | [`Vector3`](Vector3.md) | second direction |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:727](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L727)

___

### append

▸ **append**(`lhs`): `void`

multiply matrix a b

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | [`Matrix4`](Matrix4.md) | target matrix |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:847](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L847)

___

### add

▸ **add**(`lhs`): [`Matrix4`](Matrix4.md)

matrix a add matrix b

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | [`Matrix4`](Matrix4.md) | target matrix. |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 result.

#### Defined in

[src/math/Matrix4.ts:893](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L893)

___

### sub

▸ **sub**(`lhs`): [`Matrix4`](Matrix4.md)

matrix a sub matrix b

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | [`Matrix4`](Matrix4.md) | target matrix b. |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 .

#### Defined in

[src/math/Matrix4.ts:956](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L956)

___

### mult

▸ **mult**(`v`): [`Matrix4`](Matrix4.md)

Matrix times components.

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | This matrix is going to be multiplied by this value |

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 Returns a multiplicative result matrix.

#### Defined in

[src/math/Matrix4.ts:1020](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1020)

___

### appendRotation

▸ **appendRotation**(`degrees`, `axis`): `void`

Add a direction Angle rotation to the current matrix (the matrix created by rotating degrees according to axis)

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees` | `number` | Angle of rotation. |
| `axis` | [`Vector3`](Vector3.md) | Angle of rotation around axis axis |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1067](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1067)

___

### createByRotation

▸ **createByRotation**(`degrees`, `axis`): `void`

Create a matrix based on the axis and rotation Angle (the matrix created by rotating the degrees according to the axis)

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees` | `number` | Angle of rotation. |
| `axis` | [`Vector3`](Vector3.md) | Rotation Angle around axis axis. Axis needs to be specified as the orientation of an axis between x/y/z |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1078](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1078)

___

### appendScale

▸ **appendScale**(`xScale`, `yScale`, `zScale`): `void`

Append the triaxial scaling value

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xScale` | `number` | x axis scaling |
| `yScale` | `number` | y axis scaling |
| `zScale` | `number` | z axis scaling |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1154](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1154)

___

### createByScale

▸ **createByScale**(`xScale`, `yScale`, `zScale`): `void`

A scaling matrix is generated and other properties are reset

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xScale` | `number` | x axis scaling |
| `yScale` | `number` | y axis scaling |
| `zScale` | `number` | z axis scaling |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1166](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1166)

___

### appendTranslation

▸ **appendTranslation**(`x`, `y`, `z`): `void`

Plus a translation matrix

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x axis scaling |
| `y` | `number` | y axis scaling |
| `z` | `number` | z axis scaling |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1193](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1193)

___

### clone

▸ **clone**(): [`Matrix4`](Matrix4.md)

Returns a clone of the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Returns

[`Matrix4`](Matrix4.md)

Matrix4 The cloned matrix

#### Defined in

[src/math/Matrix4.ts:1205](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1205)

___

### copyRowFrom

▸ **copyRowFrom**(`row`, `Vector3`): `void`

Assigns a value to one row of the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | Row of copy |
| `Vector3` | [`Vector3`](Vector3.md) | Value of copy |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1217](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1217)

___

### copyRowTo

▸ **copyRowTo**(`row`, `Vector3`): `void`

One of the rows in the copy matrix stores the values in Vector3.

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | Row of copy |
| `Vector3` | [`Vector3`](Vector3.md) | Copy the storage target |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1255](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1255)

___

### copyFrom

▸ **copyFrom**(`sourceMatrix3D`): [`Matrix4`](Matrix4.md)

Assigns the value of a matrix to the current matrix.

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceMatrix3D` | [`Matrix4`](Matrix4.md) | source Matrix |

#### Returns

[`Matrix4`](Matrix4.md)

Returns the current matrix

#### Defined in

[src/math/Matrix4.ts:1293](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1293)

___

### copyRawDataTo

▸ **copyRawDataTo**(`vector`, `index?`, `transpose?`): `void`

CoMath.PIes the value of the current matrix to a float array.

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vector` | `Float32Array` | `undefined` | The target array. |
| `index` | `number` | `0` | copy from the index of the array. |
| `transpose` | `boolean` | `false` | Whether to transpose the current matrix. |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1321](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1321)

___

### copyColFrom

▸ **copyColFrom**(`col`, `Vector3`): `void`

Assigns a value to a column of the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `col` | `number` | column |
| `Vector3` | [`Vector3`](Vector3.md) | Source of value |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1347](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1347)

___

### copyColTo

▸ **copyColTo**(`col`, `Vector3`): `void`

Copy a column of the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `col` | `number` | column |
| `Vector3` | [`Vector3`](Vector3.md) | Target of copy |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1385](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1385)

___

### copyToMatrix3D

▸ **copyToMatrix3D**(`dest`): `void`

Copy the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | [`Matrix4`](Matrix4.md) | Target of copy |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1422](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1422)

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

[src/math/Matrix4.ts:1431](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1431)

___

### decompose

▸ **decompose**(`orientationStyle?`, `target?`): [`Vector3`](Vector3.md)[]

Decompose the current matrix

**`See`**

 - Orientation3D.AXIS_ANGLE
 - Orientation3D.EULER_ANGLES
 - Orientation3D.QUATERNION

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `orientationStyle` | `string` | `'eulerAngles'` | The default decomposition type is Orientation3D.EULER_ANGLES |
| `target?` | [`Vector3`](Vector3.md)[] | `undefined` | - |

#### Returns

[`Vector3`](Vector3.md)[]

Vector3[3] pos rot scale

#### Defined in

[src/math/Matrix4.ts:1445](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1445)

___

### getEuler

▸ `Static` **getEuler**(`target`, `quaternion`, `isDegree?`, `order?`): [`Vector3`](Vector3.md)

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

[src/math/Matrix4.ts:1573](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1573)

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

[src/math/Matrix4.ts:1586](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1586)

___

### deltaTransformVector

▸ **deltaTransformVector**(`v`, `target?`): [`Vector3`](Vector3.md)

The current matrix transforms a vector

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | Vector to transform |
| `target?` | [`Vector3`](Vector3.md) | The default is null and if the current argument is null then a new Vector3 will be returned |

#### Returns

[`Vector3`](Vector3.md)

Vector3 The transformed vector

#### Defined in

[src/math/Matrix4.ts:1640](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1640)

___

### identity

▸ **identity**(): [`Matrix4`](Matrix4.md)

Unifies the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/math/Matrix4.ts:1659](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1659)

___

### fill

▸ **fill**(`value`): `void`

Fill the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The filled value |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1686](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1686)

___

### invers33

▸ **invers33**(): `void`

Invert the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1710](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1710)

___

### invert

▸ **invert**(): `boolean`

Invert the current matrix

**`Version`**

Orillusion3D  0.5.1

#### Returns

`boolean`

boolean Whether can invert it

#### Defined in

[src/math/Matrix4.ts:1747](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1747)

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

[src/math/Matrix4.ts:1797](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1797)

___

### transformVector

▸ **transformVector**(`v`, `target?`): [`Vector3`](Vector3.md)

Transforming a 3D vector with the current matrix does not deal with displacement

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | Vector of transformation |
| `target?` | [`Vector3`](Vector3.md) | If the current argument is null then a new Vector3 will be returned |

#### Returns

[`Vector3`](Vector3.md)

Vector3 The transformed vector

#### Defined in

[src/math/Matrix4.ts:1819](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1819)

___

### transpose

▸ **transpose**(): `void`

The current matrix transpose

**`Version`**

Orillusion3D  0.5.1

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1839](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1839)

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

[src/math/Matrix4.ts:1882](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1882)

___

### toString

▸ **toString**(): `string`

Returns the value of the matrix as a string

**`Version`**

Orillusion3D  0.5.1

#### Returns

`string`

string

#### Defined in

[src/math/Matrix4.ts:1944](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1944)

___

### lerp

▸ **lerp**(`m0`, `m1`, `t`): `void`

Interpolate between two matrices

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m0` | [`Matrix4`](Matrix4.md) | Matrix 0 |
| `m1` | [`Matrix4`](Matrix4.md) | Matrix 1 |
| `t` | `number` | Factor of interpolation 0.0 - 1.0 |

#### Returns

`void`

#### Defined in

[src/math/Matrix4.ts:1990](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1990)

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

[src/math/Matrix4.ts:2001](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2001)

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

[src/math/Matrix4.ts:2011](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2011)

___

### getMaxScaleOnAxis

▸ **getMaxScaleOnAxis**(): `number`

Get the maximum value of the matrix scaled on each axis

**`Version`**

Orillusion3D  0.5.1 4.0

#### Returns

`number`

#### Defined in

[src/math/Matrix4.ts:2019](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2019)

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

[src/math/Matrix4.ts:2034](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2034)

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

[src/math/Matrix4.ts:2051](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2051)

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

[src/math/Matrix4.ts:2062](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2062)

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

[src/math/Matrix4.ts:2088](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2088)

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

[src/math/Matrix4.ts:2098](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2098)
