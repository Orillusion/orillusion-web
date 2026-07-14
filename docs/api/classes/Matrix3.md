[**@orillusion/core**](../README.md)

***

# Class: Matrix3

Defined in: [src/math/Matrix3.ts:26](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L26)

3*3 Matrix

## Constructors

### Constructor

> **new Matrix3**(`a?`, `b?`, `c?`, `d?`, `tx?`, `ty?`): `Matrix3`

Defined in: [src/math/Matrix3.ts:67](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L67)

Create a Matrix3

#### Parameters

##### a?

`number` = `1`

The width of x

##### b?

`number` = `0`

The slope of y

##### c?

`number` = `0`

The slope of x

##### d?

`number` = `1`

The height of y

##### tx?

`number` = `0`

The position of the x coordinate

##### ty?

`number` = `0`

The position of the y coordinate

#### Returns

`Matrix3`

## Properties

### a

> **a**: `number`

Defined in: [src/math/Matrix3.ts:31](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L31)

The width of x

***

### b

> **b**: `number`

Defined in: [src/math/Matrix3.ts:36](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L36)

The slope of y

***

### c

> **c**: `number`

Defined in: [src/math/Matrix3.ts:41](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L41)

The slope of x

***

### d

> **d**: `number`

Defined in: [src/math/Matrix3.ts:46](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L46)

The height of y

***

### tx

> **tx**: `number`

Defined in: [src/math/Matrix3.ts:51](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L51)

The position of the x coordinate

***

### ty

> **ty**: `number`

Defined in: [src/math/Matrix3.ts:56](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L56)

The position of the y coordinate

## Methods

### clone()

> **clone**(): `Matrix3`

Defined in: [src/math/Matrix3.ts:80](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L80)

Clone an Matrix3 object

#### Returns

`Matrix3`

New Matrix3 object

***

### concat()

> **concat**(`matrix`): `this`

Defined in: [src/math/Matrix3.ts:88](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L88)

Merges the current matrix with the target matrix

#### Parameters

##### matrix

`Matrix3`

target matrix

#### Returns

`this`

***

### copy()

> **copy**(`other`): `Matrix3`

Defined in: [src/math/Matrix3.ts:106](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L106)

The current matrix value is overwritten by the target matrix value

#### Parameters

##### other

`Matrix3`

target matrix value

#### Returns

`Matrix3`

current matrix

***

### identity()

> **identity**(): `this`

Defined in: [src/math/Matrix3.ts:119](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L119)

Reset to the identity matrix

#### Returns

`this`

***

### invert()

> **invert**(): `this`

Defined in: [src/math/Matrix3.ts:128](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L128)

Invert this matrix

#### Returns

`this`

***

### rotate()

> **rotate**(`angle`): `this`

Defined in: [src/math/Matrix3.ts:137](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L137)

Rotate according to Angle

#### Parameters

##### angle

`number`

rotation angle

#### Returns

`this`

***

### scale()

> **scale**(`sx`, `sy`): `this`

Defined in: [src/math/Matrix3.ts:164](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L164)

Scale by offset

#### Parameters

##### sx

`number`

x axis scaling

##### sy

`number`

y axis scaling

#### Returns

`this`

***

### setTo()

> **setTo**(`a`, `b`, `c`, `d`, `tx`, `ty`): `Matrix3`

Defined in: [src/math/Matrix3.ts:188](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L188)

Reset the matrix value

#### Parameters

##### a

`number`

Matrix element a

##### b

`number`

Matrix element b

##### c

`number`

Matrix element c

##### d

`number`

Matrix element d

##### tx

`number`

Matrix element tx

##### ty

`number`

Matrix element ty

#### Returns

`Matrix3`

The modified matrix

***

### transformPoint()

> **transformPoint**(`pointX`, `pointY`, `resultPoint?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix3.ts:205](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L205)

transformation of coordinates

#### Parameters

##### pointX

`number`

x coordinate

##### pointY

`number`

y coordinate

##### resultPoint?

[`Vector3`](Vector3.md)

Vector of results

#### Returns

[`Vector3`](Vector3.md)

Vector of results

***

### setTranslate()

> **setTranslate**(`x`, `y`): `this`

Defined in: [src/math/Matrix3.ts:220](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L220)

translation

#### Parameters

##### x

`number`

x coordinate

##### y

`number`

y coordinate

#### Returns

`this`

***

### translate()

> **translate**(`dx`, `dy`): `this`

Defined in: [src/math/Matrix3.ts:231](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L231)

Translates the specified offset

#### Parameters

##### dx

`number`

The x-coordinate offset

##### dy

`number`

The y-coordinate offset

#### Returns

`this`

***

### mul()

> **mul**(`t`): `this`

Defined in: [src/math/Matrix3.ts:241](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L241)

multiply

#### Parameters

##### t

`Matrix3`

target matrix

#### Returns

`this`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [src/math/Matrix3.ts:280](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L280)

Is equal to the given matrix

#### Parameters

##### other

`Matrix3`

matrix

#### Returns

`boolean`

***

### prepend()

> **prepend**(`a`, `b`, `c`, `d`, `tx`, `ty`): `Matrix3`

Defined in: [src/math/Matrix3.ts:294](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L294)

get a front matrix by multiplication

#### Parameters

##### a

`number`

Multiply by a

##### b

`number`

Multiply by b

##### c

`number`

Multiply by c

##### d

`number`

Multiply by d

##### tx

`number`

Multiply by tx

##### ty

`number`

Multiply by ty

#### Returns

`Matrix3`

prematrix

***

### append()

> **append**(`mat`): `Matrix3`

Defined in: [src/math/Matrix3.ts:314](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L314)

Obtain a post-multiplication matrix by multiplication.

#### Parameters

##### mat

`Matrix3`

Matrix

#### Returns

`Matrix3`

result

***

### deltaTransformPoint()

> **deltaTransformPoint**(`point`): [`Vector3`](Vector3.md)

Defined in: [src/math/Matrix3.ts:336](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L336)

Use the given point for the transformation, ignoring the x, y coordinates

#### Parameters

##### point

[`Vector3`](Vector3.md)

A given point

#### Returns

[`Vector3`](Vector3.md)

***

### toString()

> **toString**(): `string`

Defined in: [src/math/Matrix3.ts:347](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L347)

Converts the current matrix to string form

#### Returns

`string`

***

### createBox()

> **createBox**(`scaleX`, `scaleY`, `rotation?`, `tx?`, `ty?`): `this`

Defined in: [src/math/Matrix3.ts:359](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L359)

Set the matrix scaling, rotation, and conversion parameters

#### Parameters

##### scaleX

`number`

x axis scaling

##### scaleY

`number`

y axis scaling

##### rotation?

`number` = `0`

rotation

##### tx?

`number` = `0`

x-coordinate

##### ty?

`number` = `0`

y-coordinate

#### Returns

`this`

***

### createGradientBox()

> **createGradientBox**(`width`, `height`, `rotation?`, `tx?`, `ty?`): `this`

Defined in: [src/math/Matrix3.ts:388](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L388)

Create a gradient box

#### Parameters

##### width

`number`

width

##### height

`number`

height

##### rotation?

`number` = `0`

rotation

##### tx?

`number` = `0`

x-coordinate

##### ty?

`number` = `0`

y-coordinate

#### Returns

`this`

***

### getScaleX()

> **getScaleX**(): `number`

Defined in: [src/math/Matrix3.ts:436](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L436)

Return the scale factor along the X axis derived from this matrix.

#### Returns

`number`

***

### getScaleY()

> **getScaleY**(): `number`

Defined in: [src/math/Matrix3.ts:448](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L448)

Return the scale factor along the Y axis derived from this matrix.

#### Returns

`number`

***

### getSkewX()

> **getSkewX**(): `number`

Defined in: [src/math/Matrix3.ts:460](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L460)

Return the skew angle along the X axis derived from this matrix.

#### Returns

`number`

***

### getSkewY()

> **getSkewY**(): `number`

Defined in: [src/math/Matrix3.ts:467](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L467)

Return the skew angle along the Y axis derived from this matrix.

#### Returns

`number`

***

### updateScaleAndRotation()

> **updateScaleAndRotation**(`scaleX`, `scaleY`, `skewX`, `skewY`): `this`

Defined in: [src/math/Matrix3.ts:478](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L478)

Update this matrix from the given scale and skew components.

#### Parameters

##### scaleX

`number`

scale factor along the X axis

##### scaleY

`number`

scale factor along the Y axis

##### skewX

`number`

skew angle along the X axis, in degrees

##### skewY

`number`

skew angle along the Y axis, in degrees

#### Returns

`this`

***

### multiply()

> `static` **multiply**(`a`, `b`, `result?`): `Matrix3`

Defined in: [src/math/Matrix3.ts:504](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L504)

Multiply two matrices: result = a * b. Allocates a new Matrix3 if result is omitted.

#### Parameters

##### a

`Matrix3`

##### b

`Matrix3`

##### result?

`Matrix3`

#### Returns

`Matrix3`

***

### preMultiply()

> `static` **preMultiply**(`a`, `b`, `result?`): `Matrix3`

Defined in: [src/math/Matrix3.ts:517](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L517)

Pre-multiply two matrices: result = a * b (where a is pre-multiplied).
Allocates a new Matrix3 if result is omitted.

#### Parameters

##### a

`Matrix3`

##### b

`Matrix3`

##### result?

`Matrix3`

#### Returns

`Matrix3`

***

### preMultiplyInto()

> **preMultiplyInto**(`other`, `target`): `void`

Defined in: [src/math/Matrix3.ts:528](https://github.com/orillusion/orillusion/blob/main/src/math/Matrix3.ts#L528)

Pre-multiply this matrix by another and store the result: target = other * this.

#### Parameters

##### other

`Matrix3`

the matrix to pre-multiply by

##### target

`Matrix3`

receives the resulting matrix

#### Returns

`void`
