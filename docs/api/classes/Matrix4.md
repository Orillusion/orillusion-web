[**@orillusion/core**](../README.md)

***

# Class: Matrix4

Defined in: [src/math/Matrix4.ts:12](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L12)

math 4*4 matrix

## Constructors

### Constructor

> **new Matrix4**(`doMatrix?`): `Matrix4`

Defined in: [src/math/Matrix4.ts:342](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L342)

Create a Matrix4.

#### Parameters

##### doMatrix?

`boolean` = `false`

reserved flag; when set, requests an explicit matrix allocation

#### Returns

`Matrix4`

## Properties

### blockBytes

> `static` **blockBytes**: `number`

Defined in: [src/math/Matrix4.ts:17](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L17)

matrix44 bytes block size

***

### allocCount

> `static` **allocCount**: `number` = `1000`

Defined in: [src/math/Matrix4.ts:27](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L27)

matrix do total count

***

### allocOnceCount

> `static` **allocOnceCount**: `number` = `1000`

Defined in: [src/math/Matrix4.ts:32](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L32)

quantity allocated for each capacity expansion

***

### maxCount

> `static` **maxCount**: `number`

Defined in: [src/math/Matrix4.ts:37](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L37)

matrix has max limit count

***

### useCount

> `static` **useCount**: `number` = `0`

Defined in: [src/math/Matrix4.ts:42](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L42)

current matrix use count

***

### dynamicMatrixBytes

> `static` **dynamicMatrixBytes**: [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [src/math/Matrix4.ts:58](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L58)

matrix do use share bytesArray

***

### dynamicMatrixBytes\_32bit

> `static` **dynamicMatrixBytes\_32bit**: `Float32Array`

Defined in: [src/math/Matrix4.ts:60](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L60)

32-bit float view of the shared matrix byte array.

***

### matrixWorldPositionHLDatas

> `static` **matrixWorldPositionHLDatas**: `Float32Array`

Defined in: [src/math/Matrix4.ts:63](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L63)

Shared buffer holding high-precision (split-float) world position data.

***

### dynamicGlobalMatrixRef

> `static` **dynamicGlobalMatrixRef**: `Matrix4`[]

Defined in: [src/math/Matrix4.ts:68](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L68)

cache all use do matrix

***

### help\_matrix\_0

> `static` **help\_matrix\_0**: `Matrix4`

Defined in: [src/math/Matrix4.ts:78](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L78)

help fix global matrix 0

***

### help\_matrix\_1

> `static` **help\_matrix\_1**: `Matrix4`

Defined in: [src/math/Matrix4.ts:83](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L83)

help fix global matrix 1

***

### help\_matrix\_2

> `static` **help\_matrix\_2**: `Matrix4`

Defined in: [src/math/Matrix4.ts:88](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L88)

help fix global matrix 2

***

### helpMatrix

> `static` **helpMatrix**: `Matrix4`

Defined in: [src/math/Matrix4.ts:93](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L93)

help fix global matrix 3

***

### helpMatrix2

> `static` **helpMatrix2**: `Matrix4`

Defined in: [src/math/Matrix4.ts:98](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L98)

help fix global matrix 4

***

### index

> **index**: `number` = `0`

Defined in: [src/math/Matrix4.ts:110](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L110)

matrix index at global matrix list

***

### rawData

> **rawData**: [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [src/math/Matrix4.ts:121](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L121)

matrix raw data format FloatArray

#### See

[FloatArray](../type-aliases/FloatArray.md)

## Accessors

### determinant

#### Get Signature

> **get** **determinant**(): `number`

Defined in: [src/math/Matrix4.ts:1927](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1927)

Returns the matrix determinant

##### Returns

`number`

number determinant

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:1957](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1957)

Return translation

##### Returns

[`Vector3`](Vector3.md)

Vector3 Position of translation

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [src/math/Matrix4.ts:1966](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1966)

Set Position of translation

##### Parameters

###### value

[`Vector3`](Vector3.md)

Position of translation

##### Returns

`void`

***

### scale

#### Get Signature

> **get** **scale**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:1978](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1978)

get Component of scale

##### Returns

[`Vector3`](Vector3.md)

Vector3 scale

#### Set Signature

> **set** **scale**(`value`): `void`

Defined in: [src/math/Matrix4.ts:1986](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1986)

Set component of scale

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

## Methods

### allocMatrix()

> `static` **allocMatrix**(`allocCount`): `void`

Defined in: [src/math/Matrix4.ts:130](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L130)

alloc web runtime cpu memory totalCount * 4(float) * 4
init matrix memory by totalCount * 4(float) * 4

#### Parameters

##### allocCount

`number`

#### Returns

`void`

***

### fromToRotation()

> `static` **fromToRotation**(`fromDirection`, `toDirection`, `target?`, `epsilon?`): `Matrix4`

Defined in: [src/math/Matrix4.ts:162](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L162)

create matrix from two direction

#### Parameters

##### fromDirection

[`Vector3`](Vector3.md)

first direction

##### toDirection

[`Vector3`](Vector3.md)

second direction

##### target?

`Matrix4`

ref matrix

##### epsilon?

`number`

tiny number

#### Returns

`Matrix4`

return new one matrix

***

### getAxisRotation()

> `static` **getAxisRotation**(`x`, `y`, `z`, `degrees`): `Matrix4`

Defined in: [src/math/Matrix4.ts:176](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L176)

Generate a matrix (rotate degrees with x,y,z as the center axis)

#### Parameters

##### x

`number`

x on the central axis

##### y

`number`

y on the central axis

##### z

`number`

z on the central axis

##### degrees

`number`

rotation angle

#### Returns

`Matrix4`

Matrix4 result

***

### sanitizeEuler()

> `static` **sanitizeEuler**(`euler`): `void`

Defined in: [src/math/Matrix4.ts:210](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L210)

Arrange the Euler values

#### Parameters

##### euler

[`Vector3`](Vector3.md)

Euler values

#### Returns

`void`

***

### makePositive()

> `static` **makePositive**(`euler`): `void`

Defined in: [src/math/Matrix4.ts:218](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L218)

#### Parameters

##### euler

[`Vector3`](Vector3.md)

#### Returns

`void`

***

### matrixToEuler()

> `static` **matrixToEuler**(`matrix`, `v`): `boolean`

Defined in: [src/math/Matrix4.ts:250](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L250)

Convert the matrix to Euler angles

#### Parameters

##### matrix

`Matrix4`

Matrix to be transformed

##### v

[`Vector3`](Vector3.md)

euler angle

#### Returns

`boolean`

***

### matrixMultiply()

> `static` **matrixMultiply**(`aMat`, `bMat`, `target_Mat`): `void`

Defined in: [src/math/Matrix4.ts:287](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L287)

Multiply the world matrix, specifying parameters and results according to the index

#### Parameters

##### aMat

`Matrix4`

Matrix to be multiplied (please specify index)

##### bMat

`Matrix4`

Matrix to be multiplied (please specify index)

##### target\_Mat

`Matrix4`

Result matrix (get results based on index)

#### Returns

`void`

***

### matrixAppend()

> `static` **matrixAppend**(`aMat`, `bMat`, `target_Mat`): `void`

Defined in: [src/math/Matrix4.ts:297](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L297)

World matrix extension, according to the index to specify parameters and results

#### Parameters

##### aMat

`Matrix4`

Matrix to be multiplied (please specify index)

##### bMat

`Matrix4`

Matrix to be multiplied (please specify index)

##### target\_Mat

`Matrix4`

Result matrix (get results based on index)

#### Returns

`void`

***

### matrixRotateY()

> `static` **matrixRotateY**(`rad`, `target_Mat`): `void`

Defined in: [src/math/Matrix4.ts:306](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L306)

Rotate a matrix around the Y axis by the given angle, writing the result into the target matrix.

#### Parameters

##### rad

`number`

rotation angle, in radians

##### target\_Mat

`Matrix4`

result matrix (referenced by index)

#### Returns

`void`

***

### matrixRotate()

> `static` **matrixRotate**(`rad`, `axis`, `target_Mat`): `void`

Defined in: [src/math/Matrix4.ts:316](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L316)

Rotate a matrix around an arbitrary axis by the given angle, writing the result into the target matrix.

#### Parameters

##### rad

`number`

rotation angle, in radians

##### axis

[`Vector3`](Vector3.md)

rotation axis

##### target\_Mat

`Matrix4`

result matrix (referenced by index)

#### Returns

`void`

***

### allocIndex()

> `static` **allocIndex**(): `number`

Defined in: [src/math/Matrix4.ts:325](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L325)

Allocate a matrix index, reusing a freed index when available.

#### Returns

`number`

***

### freeIndex()

> `static` **freeIndex**(`matrix`): `void`

Defined in: [src/math/Matrix4.ts:329](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L329)

Return a matrix's index to the free list for later reuse.

#### Parameters

##### matrix

`Matrix4`

#### Returns

`void`

***

### lookAt()

> **lookAt**(`eye`, `at`, `up?`): `void`

Defined in: [src/math/Matrix4.ts:373](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L373)

current matrix move position and rotation to target

#### Parameters

##### eye

[`Vector3`](Vector3.md)

eye position

##### at

[`Vector3`](Vector3.md)

target position

##### up?

[`Vector3`](Vector3.md) = `Vector3.Y_AXIS`

normalize axis way

#### Returns

`void`

***

### multiply()

> **multiply**(`mat4`): `this`

Defined in: [src/math/Matrix4.ts:421](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L421)

matrix multiply

#### Parameters

##### mat4

`Matrix4`

multiply target

#### Returns

`this`

***

### premultiply()

> **premultiply**(`m`): `this`

Defined in: [src/math/Matrix4.ts:466](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L466)

Set this = m * this.

#### Parameters

##### m

`Matrix4`

#### Returns

`this`

***

### multiply()

> `static` **multiply**(`a`, `b`, `result?`): `Matrix4`

Defined in: [src/math/Matrix4.ts:471](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L471)

Multiply two matrices: result = a * b. Allocates a new Matrix4 if result is omitted.

#### Parameters

##### a

`Matrix4`

##### b

`Matrix4`

##### result?

`Matrix4`

#### Returns

`Matrix4`

***

### invert()

> `static` **invert**(`src`, `result?`): `Matrix4`

Defined in: [src/math/Matrix4.ts:482](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L482)

Invert a matrix into result. Returns null when src is singular.

#### Parameters

##### src

`Matrix4`

source matrix

##### result?

`Matrix4`

optional output matrix

#### Returns

`Matrix4`

***

### multiplyMatrices()

> **multiplyMatrices**(`a`, `b`): `Matrix4`

Defined in: [src/math/Matrix4.ts:498](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L498)

#### Parameters

##### a

`Matrix4`

##### b

`Matrix4`

#### Returns

`Matrix4`

***

### multiplyPoint3()

> **multiplyPoint3**(`v`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:542](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L542)

Convert a point (w=1) to this matrix space. Mutates and returns `v`.

#### Parameters

##### v

[`Vector3`](Vector3.md)

target point — mutated in place

#### Returns

[`Vector3`](Vector3.md)

***

### multiplyPoint3()

> `static` **multiplyPoint3**(`m`, `v`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:547](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L547)

Transform point v (w=1) by matrix m into result. Allocates a new Vector3 if result is omitted.

#### Parameters

##### m

`Matrix4`

##### v

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### multiplyVector4()

> **multiplyVector4**(`a`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:561](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L561)

Transform a homogeneous vector (w computed from matrix) and divide by w.
Mutates and returns `a`.

#### Parameters

##### a

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### multiplyVector4()

> `static` **multiplyVector4**(`m`, `a`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:566](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L566)

Transform homogeneous vector a by matrix m (w computed and divided out) into result.

#### Parameters

##### m

`Matrix4`

##### a

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### transformVector4()

> **transformVector4**(`v`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:582](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L582)

Transform a 4D vector (v.w used directly) by this matrix. Mutates and returns `v`.

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### transformVector4()

> `static` **transformVector4**(`m`, `v`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:587](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L587)

Transform 4D vector v (v.w used directly) by matrix m into result.

#### Parameters

##### m

`Matrix4`

##### v

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### perspectiveMultiplyPoint3()

> **perspectiveMultiplyPoint3**(`v`, `output`): `boolean`

Defined in: [src/math/Matrix4.ts:604](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L604)

Convert projection coordinates to 3D coordinates

#### Parameters

##### v

[`Vector3`](Vector3.md)

vector3 target

##### output

[`Vector3`](Vector3.md)

ref vector3d

#### Returns

`boolean`

***

### perspective()

> **perspective**(`fov`, `aspect`, `zn`, `zf`): `void`

Defined in: [src/math/Matrix4.ts:633](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L633)

set matrix perspective

#### Parameters

##### fov

`number`

perspective angle 0 ~ 90

##### aspect

`number`

aspect ratio

##### zn

`number`

near plane

##### zf

`number`

far plane

#### Returns

`void`

***

### perspective3()

> **perspective3**(`fov`, `aspect`, `near`, `far`): `void`

Defined in: [src/math/Matrix4.ts:667](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L667)

Set this matrix to a perspective projection defined by field of view.

#### Parameters

##### fov

`number`

vertical field of view, in degrees

##### aspect

`number`

aspect ratio (width / height)

##### near

`number`

near plane distance

##### far

`number`

far plane distance

#### Returns

`void`

***

### frustum()

> **frustum**(`l`, `r`, `b`, `t`, `n`, `f`): `void`

Defined in: [src/math/Matrix4.ts:682](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L682)

Set this matrix to a perspective projection defined by frustum bounds.

#### Parameters

##### l

`number`

left plane

##### r

`number`

right plane

##### b

`number`

bottom plane

##### t

`number`

top plane

##### n

`number`

near plane

##### f

`number`

far plane

#### Returns

`void`

***

### ortho()

> **ortho**(`w`, `h`, `zn`, `zf`): `Matrix4`

Defined in: [src/math/Matrix4.ts:714](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L714)

set matrix orthogonal projection

#### Parameters

##### w

`number`

screen width

##### h

`number`

screen height

##### zn

`number`

camera near plane

##### zf

`number`

camera far plane

#### Returns

`Matrix4`

this matrix

***

### orthoZO()

> **orthoZO**(`left`, `right`, `bottom`, `top`, `near`, `far`): `Matrix4`

Defined in: [src/math/Matrix4.ts:750](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L750)

set matrix orthogonal projection by view side

#### Parameters

##### left

`number`

orthogonal view left

##### right

`number`

orthogonal view right

##### bottom

`number`

orthogonal view bottom

##### top

`number`

orthogonal view top

##### near

`number`

camera near plane

##### far

`number`

camera far plane

#### Returns

`Matrix4`

this matrix

***

### orthoOffCenter()

> **orthoOffCenter**(`l`, `r`, `b`, `t`, `zn`, `zf`): `void`

Defined in: [src/math/Matrix4.ts:777](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L777)

set matrix orthogonal projection by view center

#### Parameters

##### l

`number`

##### r

`number`

##### b

`number`

##### t

`number`

##### zn

`number`

##### zf

`number`

#### Returns

`void`

***

### transformDir()

> **transformDir**(`fromDirection`, `toDirection`, `epsilon?`): `this`

Defined in: [src/math/Matrix4.ts:808](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L808)

set matrix from two direction

#### Parameters

##### fromDirection

[`Vector3`](Vector3.md)

first direction

##### toDirection

[`Vector3`](Vector3.md)

second direction

##### epsilon?

`number`

tiny number

#### Returns

`this`

***

### append()

> **append**(`lhs`): `this`

Defined in: [src/math/Matrix4.ts:930](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L930)

multiply matrix a b

#### Parameters

##### lhs

`Matrix4`

target matrix

#### Returns

`this`

***

### add()

> **add**(`lhs`): `Matrix4`

Defined in: [src/math/Matrix4.ts:976](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L976)

matrix a add matrix b

#### Parameters

##### lhs

`Matrix4`

target matrix.

#### Returns

`Matrix4`

Matrix4 result.

***

### sub()

> **sub**(`lhs`): `Matrix4`

Defined in: [src/math/Matrix4.ts:1038](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1038)

matrix a sub matrix b

#### Parameters

##### lhs

`Matrix4`

target matrix b.

#### Returns

`Matrix4`

Matrix4 .

***

### mult()

> **mult**(`v`): `Matrix4`

Defined in: [src/math/Matrix4.ts:1101](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1101)

Matrix times components.

#### Parameters

##### v

`number`

This matrix is going to be multiplied by this value

#### Returns

`Matrix4`

Matrix4 Returns a multiplicative result matrix.

***

### appendRotation()

> **appendRotation**(`degrees`, `axis`): `void`

Defined in: [src/math/Matrix4.ts:1147](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1147)

Add a direction Angle rotation to the current matrix (the matrix created by rotating degrees according to axis)

#### Parameters

##### degrees

`number`

Angle of rotation.

##### axis

[`Vector3`](Vector3.md)

Angle of rotation around axis axis

#### Returns

`void`

#### Version

Orillusion3D  0.5.1

***

### createByRotation()

> **createByRotation**(`degrees`, `axis`): `this`

Defined in: [src/math/Matrix4.ts:1157](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1157)

Create a matrix based on the axis and rotation Angle (the matrix created by rotating the degrees according to the axis)

#### Parameters

##### degrees

`number`

Angle of rotation.

##### axis

[`Vector3`](Vector3.md)

Rotation Angle around axis axis. Axis needs to be specified as the orientation of an axis between x/y/z

#### Returns

`this`

***

### appendScale()

> **appendScale**(`xScale`, `yScale`, `zScale`): `void`

Defined in: [src/math/Matrix4.ts:1233](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1233)

Append the triaxial scaling value

#### Parameters

##### xScale

`number`

x axis scaling

##### yScale

`number`

y axis scaling

##### zScale

`number`

z axis scaling

#### Returns

`void`

***

### createByScale()

> **createByScale**(`xScale`, `yScale`, `zScale`): `void`

Defined in: [src/math/Matrix4.ts:1244](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1244)

A scaling matrix is generated and other properties are reset

#### Parameters

##### xScale

`number`

x axis scaling

##### yScale

`number`

y axis scaling

##### zScale

`number`

z axis scaling

#### Returns

`void`

***

### appendTranslation()

> **appendTranslation**(`x`, `y`, `z`): `void`

Defined in: [src/math/Matrix4.ts:1270](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1270)

Plus a translation matrix

#### Parameters

##### x

`number`

x axis scaling

##### y

`number`

y axis scaling

##### z

`number`

z axis scaling

#### Returns

`void`

***

### clone()

> **clone**(): `Matrix4`

Defined in: [src/math/Matrix4.ts:1281](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1281)

Returns a clone of the current matrix

#### Returns

`Matrix4`

Matrix4 The cloned matrix

***

### copyRowFrom()

> **copyRowFrom**(`row`, `Vector3`): `void`

Defined in: [src/math/Matrix4.ts:1292](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1292)

Assigns a value to one row of the current matrix

#### Parameters

##### row

`number`

Row of copy

##### Vector3

[`Vector3`](Vector3.md)

Value of copy

#### Returns

`void`

***

### copyRowTo()

> **copyRowTo**(`row`, `Vector3`): `void`

Defined in: [src/math/Matrix4.ts:1329](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1329)

One of the rows in the copy matrix stores the values in Vector3.

#### Parameters

##### row

`number`

Row of copy

##### Vector3

[`Vector3`](Vector3.md)

Copy the storage target

#### Returns

`void`

***

### copy()

> **copy**(`sourceMatrix3D`): `Matrix4`

Defined in: [src/math/Matrix4.ts:1366](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1366)

Assigns the value of a matrix to the current matrix.

#### Parameters

##### sourceMatrix3D

`Matrix4`

source Matrix

#### Returns

`Matrix4`

Returns the current matrix

***

### copyRawDataTo()

> **copyRawDataTo**(`vector`, `index?`, `transpose?`): `void`

Defined in: [src/math/Matrix4.ts:1393](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1393)

CoMath.PIes the value of the current matrix to a float array.

#### Parameters

##### vector

[`FloatArray`](../type-aliases/FloatArray.md)

The target array.

##### index?

`number` = `0`

copy from the index of the array.

##### transpose?

`boolean` = `false`

Whether to transpose the current matrix.

#### Returns

`void`

***

### copyColFrom()

> **copyColFrom**(`col`, `Vector3`): `void`

Defined in: [src/math/Matrix4.ts:1418](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1418)

Assigns a value to a column of the current matrix

#### Parameters

##### col

`number`

column

##### Vector3

[`Vector3`](Vector3.md)

Source of value

#### Returns

`void`

***

### copyColTo()

> **copyColTo**(`col`, `Vector3`): `void`

Defined in: [src/math/Matrix4.ts:1460](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1460)

Copy a column of the current matrix into a Vector3.

#### Parameters

##### col

`number`

column index (0-3)

##### Vector3

[`Vector3`](Vector3.md)

target of copy

#### Returns

`void`

***

### copyToMatrix3D()

> **copyToMatrix3D**(`dest`): `void`

Defined in: [src/math/Matrix4.ts:1496](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1496)

Copy the current matrix

#### Parameters

##### dest

`Matrix4`

Target of copy

#### Returns

`void`

***

### makeRotationFromQuaternion()

> **makeRotationFromQuaternion**(`quaternion`): `Matrix4`

Defined in: [src/math/Matrix4.ts:1505](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1505)

Calculate rotation matrix

#### Parameters

##### quaternion

[`Quaternion`](Quaternion.md)

Rotate the quaternion

#### Returns

`Matrix4`

***

### decompose()

> **decompose**(`orientationStyle?`, `target?`): [`Vector3`](Vector3.md)[]

Defined in: [src/math/Matrix4.ts:1519](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1519)

Decompose the current matrix

#### Parameters

##### orientationStyle?

`string` = `'eulerAngles'`

The default decomposition type is Orientation3D.EULER_ANGLES

##### target?

[`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

Vector3[3] pos rot scale

#### See

 - Orientation3D.AXIS_ANGLE
 - Orientation3D.EULER_ANGLES
 - Orientation3D.QUATERNION

***

### getEuler()

> `static` **getEuler**(`target`, `quaternion`, `isDegree?`, `order?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:1647](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1647)

Get the Euler vector

#### Parameters

##### target

[`Vector3`](Vector3.md)

Vector of results

##### quaternion

[`Quaternion`](Quaternion.md)

Rotate the quaternion

##### isDegree?

`boolean` = `true`

Whether to convert to Angle

##### order?

`string`

convert order

#### Returns

[`Vector3`](Vector3.md)

***

### compose()

> **compose**(`position`, `quaternion`, `scale`): `Matrix4`

Defined in: [src/math/Matrix4.ts:1660](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1660)

Calculate the combined matrix of displacement, rotation and scaling

#### Parameters

##### position

[`Vector3`](Vector3.md)

translation

##### quaternion

[`Quaternion`](Quaternion.md)

rotation

##### scale

[`Vector3`](Vector3.md)

scale

#### Returns

`Matrix4`

***

### deltaTransformVector()

> **deltaTransformVector**(`v`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:1713](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1713)

The current matrix transforms a vector

#### Parameters

##### v

[`Vector3`](Vector3.md)

Vector to transform

##### target?

[`Vector3`](Vector3.md)

The default is null and if the current argument is null then a new Vector3 will be returned

#### Returns

[`Vector3`](Vector3.md)

Vector3 The transformed vector

***

### identity()

> **identity**(): `Matrix4`

Defined in: [src/math/Matrix4.ts:1731](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1731)

Unifies the current matrix

#### Returns

`Matrix4`

***

### fill()

> **fill**(`value`): `void`

Defined in: [src/math/Matrix4.ts:1757](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1757)

Fill the current matrix

#### Parameters

##### value

`number`

The filled value

#### Returns

`void`

***

### invers33()

> **invers33**(): `void`

Defined in: [src/math/Matrix4.ts:1780](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1780)

Invert the current matrix

#### Returns

`void`

***

### invert()

> **invert**(): `this`

Defined in: [src/math/Matrix4.ts:1817](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1817)

Invert the current matrix in place. No-ops silently when the matrix is
singular (matches Matrix3.invert). Use `Matrix4.invert(src, result?)`
for the safe variant that returns `null` on singular input.

#### Returns

`this`

***

### transformPoint()

> **transformPoint**(`v`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:1865](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1865)

Convert the given point from the current matrix coordinate system to world
coordinates. Mutates and returns `v`.

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### transformPoint()

> `static` **transformPoint**(`m`, `v`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:1870](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1870)

Transform point v (with translation) by matrix m into result. Allocates a new Vector3 if result is omitted.

#### Parameters

##### m

`Matrix4`

##### v

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### transformVector()

> **transformVector**(`v`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:1884](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1884)

Transform a 3D direction vector (no translation) by this matrix.
Mutates and returns `v`.

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### transformVector()

> `static` **transformVector**(`m`, `v`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:1889](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1889)

Transform direction v (no translation) by matrix m into result. Allocates a new Vector3 if result is omitted.

#### Parameters

##### m

`Matrix4`

##### v

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### transpose()

> **transpose**(): `void`

Defined in: [src/math/Matrix4.ts:1902](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1902)

The current matrix transpose

#### Returns

`void`

***

### getPosition()

> **getPosition**(`out?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix4.ts:1944](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L1944)

Return matrix displacement

#### Parameters

##### out?

[`Vector3`](Vector3.md)

Position of translation

#### Returns

[`Vector3`](Vector3.md)

Position of translation

***

### toString()

> **toString**(): `string`

Defined in: [src/math/Matrix4.ts:2002](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2002)

Returns the value of the matrix as a string

#### Returns

`string`

string

***

### lerp()

> **lerp**(`m0`, `m1`, `t`): `void`

Defined in: [src/math/Matrix4.ts:2047](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2047)

Interpolate between two matrices

#### Parameters

##### m0

`Matrix4`

Matrix 0

##### m1

`Matrix4`

Matrix 1

##### t

`number`

Factor of interpolation 0.0 - 1.0

#### Returns

`void`

***

### get()

> **get**(`row`, `column`): `number`

Defined in: [src/math/Matrix4.ts:2058](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2058)

Read matrix element values

#### Parameters

##### row

`number`

row

##### column

`number`

column

#### Returns

`number`

***

### set()

> **set**(`row`, `column`, `v`): `void`

Defined in: [src/math/Matrix4.ts:2068](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2068)

Sets the matrix element values

#### Parameters

##### row

`number`

row

##### column

`number`

column

##### v

`number`

value

#### Returns

`void`

***

### getMaxScaleOnAxis()

> **getMaxScaleOnAxis**(): `number`

Defined in: [src/math/Matrix4.ts:2075](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2075)

Get the maximum value of the matrix scaled on each axis

#### Returns

`number`

***

### translate()

> **translate**(`inTrans`): `Matrix4`

Defined in: [src/math/Matrix4.ts:2090](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2090)

Calculate the displacement from the vector

#### Parameters

##### inTrans

[`Vector3`](Vector3.md)

Vector

#### Returns

`Matrix4`

current matrix

***

### setTRInverse()

> **setTRInverse**(`pos`, `q`): `void`

Defined in: [src/math/Matrix4.ts:2109](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2109)

Set this matrix to the inverse of the translation-rotation transform built from pos and q.

#### Parameters

##### pos

[`Vector3`](Vector3.md)

translation

##### q

[`Quaternion`](Quaternion.md)

rotation quaternion

#### Returns

`void`

***

### setScale()

> **setScale**(`inScale`): `Matrix4`

Defined in: [src/math/Matrix4.ts:2120](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2120)

Set scale value

#### Parameters

##### inScale

[`Vector3`](Vector3.md)

scale value

#### Returns

`Matrix4`

this matrix

***

### makeBasis()

> **makeBasis**(`xAxis`, `yAxis`, `zAxis`): `Matrix4`

Defined in: [src/math/Matrix4.ts:2146](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2146)

Generate the matrix according to the three axes

#### Parameters

##### xAxis

[`Vector3`](Vector3.md)

##### yAxis

[`Vector3`](Vector3.md)

##### zAxis

[`Vector3`](Vector3.md)

#### Returns

`Matrix4`

***

### makeRotationAxis()

> **makeRotationAxis**(`axis`, `angle`): `Matrix4`

Defined in: [src/math/Matrix4.ts:2161](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix4.ts#L2161)

Set this matrix to a rotation about the given axis by the given angle (in radians).

#### Parameters

##### axis

[`Vector3`](Vector3.md)

rotation axis (should be unit length)

##### angle

`number`

rotation angle, in radians

#### Returns

`Matrix4`
