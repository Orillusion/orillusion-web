[**@orillusion/core**](../README.md)

***

# Class: Navi3DPoint

Defined in: [src/math/navigation/Navi3DPoint.ts:4](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L4)

Vector 3D

## Extends

- [`Vector3`](Vector3.md)

## Extended by

- [`Navi3DPointFat`](Navi3DPointFat.md)

## Constructors

### Constructor

> **new Navi3DPoint**(`id`, `X`, `Y`, `Z`): `Navi3DPoint`

Defined in: [src/math/navigation/Navi3DPoint.ts:18](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L18)

#### Parameters

##### id

`number`

##### X

`number`

##### Y

`number`

##### Z

`number`

#### Returns

`Navi3DPoint`

#### Overrides

[`Vector3`](Vector3.md).[`constructor`](Vector3.md#constructor)

## Properties

### MAX

> `readonly` `static` **MAX**: [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:11](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L11)

Vector maximum

#### Inherited from

[`Vector3`](Vector3.md).[`MAX`](Vector3.md#max)

***

### MIN

> `readonly` `static` **MIN**: [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:16](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L16)

Vector minimum

#### Inherited from

[`Vector3`](Vector3.md).[`MIN`](Vector3.md#min)

***

### SAFE\_MAX

> `readonly` `static` **SAFE\_MAX**: [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:21](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L21)

Vector maximum integer value

#### Inherited from

[`Vector3`](Vector3.md).[`SAFE_MAX`](Vector3.md#safe_max)

***

### SAFE\_MIN

> `readonly` `static` **SAFE\_MIN**: [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:26](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L26)

Vector minimum integer value

#### Inherited from

[`Vector3`](Vector3.md).[`SAFE_MIN`](Vector3.md#safe_min)

***

### X\_AXIS

> `readonly` `static` **X\_AXIS**: [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:31](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L31)

X axis positive axis coordinate (1, 0, 0).

#### Inherited from

[`Vector3`](Vector3.md).[`X_AXIS`](Vector3.md#x_axis)

***

### neg\_X\_AXIS

> `readonly` `static` **neg\_X\_AXIS**: [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:36](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L36)

The X-axis is negative (-1, 0, 0).

#### Inherited from

[`Vector3`](Vector3.md).[`neg_X_AXIS`](Vector3.md#neg_x_axis)

***

### Y\_AXIS

> `readonly` `static` **Y\_AXIS**: [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:41](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L41)

The y axis defined as a Vector3 object with coordinates (0,1,0).

#### Inherited from

[`Vector3`](Vector3.md).[`Y_AXIS`](Vector3.md#y_axis)

***

### Z\_AXIS

> `readonly` `static` **Z\_AXIS**: [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:46](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L46)

The z axis defined as a Vector3 object with coordinates (0,0,1).

#### Inherited from

[`Vector3`](Vector3.md).[`Z_AXIS`](Vector3.md#z_axis)

***

### x

> **x**: `number` = `0`

Defined in: [src/math/Vector3.ts:148](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L148)

The first element of a Vector3 object, such as the x coordinate of
a point in the three-dimensional space. The default value is 0.

#### Inherited from

[`Vector3`](Vector3.md).[`x`](Vector3.md#x)

***

### y

> **y**: `number` = `0`

Defined in: [src/math/Vector3.ts:154](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L154)

The second element of a Vector3 object, such as the y coordinate of
a point in the three-dimensional space. The default value is 0.

#### Inherited from

[`Vector3`](Vector3.md).[`y`](Vector3.md#y)

***

### z

> **z**: `number` = `0`

Defined in: [src/math/Vector3.ts:160](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L160)

The third element of a Vector3 object, such as the y coordinate of
a point in the three-dimensional space. The default value is 0.

#### Inherited from

[`Vector3`](Vector3.md).[`z`](Vector3.md#z)

***

### w

> **w**: `number` = `1`

Defined in: [src/math/Vector3.ts:167](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L167)

The z component of the vector,
A three-dimensional position or projection that can be used as a perspective projection
We can also do w in the quaternion

#### Inherited from

[`Vector3`](Vector3.md).[`w`](Vector3.md#w)

***

### CALC\_VECTOR3D1

> `static` **CALC\_VECTOR3D1**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DPoint.ts:6](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L6)

***

### CALC\_VECTOR3D2

> `static` **CALC\_VECTOR3D2**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DPoint.ts:8](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L8)

***

### CALC\_VECTOR3D3

> `static` **CALC\_VECTOR3D3**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DPoint.ts:10](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L10)

***

### CALC\_VECTOR3D4

> `static` **CALC\_VECTOR3D4**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DPoint.ts:12](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L12)

***

### CALC\_VECTOR3D5

> `static` **CALC\_VECTOR3D5**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DPoint.ts:14](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L14)

## Accessors

### ZERO

#### Get Signature

> **get** `static` **ZERO**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:91](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L91)

Returns a new vector with zero x, y, and z components

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`ZERO`](Vector3.md#zero)

***

### ONE

#### Get Signature

> **get** `static` **ONE**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:98](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L98)

Returns a new vector whose x, y, and z components are all 1

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`ONE`](Vector3.md#one)

***

### LEFT

#### Get Signature

> **get** `static` **LEFT**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:105](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L105)

Returns a new vector pointing to the left, x is -1, y is 0, and z is 0

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`LEFT`](Vector3.md#left)

***

### RIGHT

#### Get Signature

> **get** `static` **RIGHT**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:112](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L112)

Returns a new vector pointing in the right direction, where x is 1, y is 0, and z is 0

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`RIGHT`](Vector3.md#right)

***

### UP

#### Get Signature

> **get** `static` **UP**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:119](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L119)

Returns a new vector pointing upwards, that is, x equals 0, y equals 1, and z equals 0

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`UP`](Vector3.md#up)

***

### DOWN

#### Get Signature

> **get** `static` **DOWN**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:126](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L126)

Returns a new vector pointing down, where x is 0, y is -1, and z is 0

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`DOWN`](Vector3.md#down)

***

### BACK

#### Get Signature

> **get** `static` **BACK**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:133](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L133)

Returns a new backward vector, x equals 0, y equals 0, and z equals negative 1

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`BACK`](Vector3.md#back)

***

### FORWARD

#### Get Signature

> **get** `static` **FORWARD**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:140](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L140)

Returns a new forward-pointing vector, that is, x is 0, y is 0, and z is 1

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`FORWARD`](Vector3.md#forward)

***

### a

#### Get Signature

> **get** **a**(): `number`

Defined in: [src/math/Vector3.ts:233](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L233)

get the w component

##### Returns

`number`

value of w

#### Set Signature

> **set** **a**(`value`): `void`

Defined in: [src/math/Vector3.ts:201](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L201)

Set w component

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Vector3`](Vector3.md).[`a`](Vector3.md#a)

***

### r

#### Get Signature

> **get** **r**(): `number`

Defined in: [src/math/Vector3.ts:241](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L241)

get the x component

##### Returns

`number`

value of x

#### Set Signature

> **set** **r**(`value`): `void`

Defined in: [src/math/Vector3.ts:209](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L209)

Set x component

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Vector3`](Vector3.md).[`r`](Vector3.md#r)

***

### g

#### Get Signature

> **get** **g**(): `number`

Defined in: [src/math/Vector3.ts:249](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L249)

get the y component

##### Returns

`number`

value of y

#### Set Signature

> **set** **g**(`value`): `void`

Defined in: [src/math/Vector3.ts:217](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L217)

Set the y component

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Vector3`](Vector3.md).[`g`](Vector3.md#g)

***

### b

#### Get Signature

> **get** **b**(): `number`

Defined in: [src/math/Vector3.ts:257](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L257)

get the z component

##### Returns

`number`

value of z

#### Set Signature

> **set** **b**(`value`): `void`

Defined in: [src/math/Vector3.ts:225](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L225)

Set z component

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Vector3`](Vector3.md).[`b`](Vector3.md#b)

***

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [src/math/Vector3.ts:264](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L264)

The length of the vector, the distance from the origin (0, 0, 0) to (x, y, z)

##### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`length`](Vector3.md#length)

***

### lengthSquared

#### Get Signature

> **get** **lengthSquared**(): `number`

Defined in: [src/math/Vector3.ts:272](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L272)

You get the square of the length of the vector

##### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`lengthSquared`](Vector3.md#lengthsquared)

***

### position

#### Get Signature

> **get** **position**(): `this`

Defined in: [src/math/Vector3.ts:279](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L279)

Get the current vector

##### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`position`](Vector3.md#position)

***

### id

#### Get Signature

> **get** **id**(): `number`

Defined in: [src/math/navigation/Navi3DPoint.ts:23](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L23)

##### Returns

`number`

## Methods

### getTowPointbyDir()

> `static` **getTowPointbyDir**(`dir`, `tp1`, `tp2`, `width`, `aix`): `void`

Defined in: [src/math/Vector3.ts:290](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L290)

Obtain a vertical line segment with width through an orientation

#### Parameters

##### dir

[`Vector3`](Vector3.md)

##### tp1

[`Vector3`](Vector3.md)

##### tp2

[`Vector3`](Vector3.md)

##### width

`number`

##### aix

[`Vector3`](Vector3.md)

#### Returns

`void`

#### Inherited from

[`Vector3`](Vector3.md).[`getTowPointbyDir`](Vector3.md#gettowpointbydir)

***

### pointToLine()

> `static` **pointToLine**(`point1`, `point2`, `position`): `number`

Defined in: [src/math/Vector3.ts:319](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L319)

Calculate the distance from the point to the line

#### Parameters

##### point1

[`Vector3`](Vector3.md)

Starting point of line segment

##### point2

[`Vector3`](Vector3.md)

End point of line segment

##### position

[`Vector3`](Vector3.md)

Point position

#### Returns

`number`

Distance from a point to a line segment

#### Inherited from

[`Vector3`](Vector3.md).[`pointToLine`](Vector3.md#pointtoline)

***

### dot()

> `static` **dot**(`a`, `b`): `number`

Defined in: [src/math/Vector3.ts:353](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L353)

Take the dot product of two vectors.

#### Parameters

##### a

[`Vector3`](Vector3.md)

Vector a

##### b

[`Vector3`](Vector3.md)

Vector b

#### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`dot`](Vector3.md#dot)

***

### getPoints()

> `static` **getPoints**(`total`, `randSeed`): `any`[]

Defined in: [src/math/Vector3.ts:357](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L357)

#### Parameters

##### total

`number`

##### randSeed

`number`

#### Returns

`any`[]

#### Inherited from

[`Vector3`](Vector3.md).[`getPoints`](Vector3.md#getpoints)

***

### getPointNumbers()

> `static` **getPointNumbers**(`total`, `randSeed`): `any`[]

Defined in: [src/math/Vector3.ts:366](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L366)

#### Parameters

##### total

`number`

##### randSeed

`number`

#### Returns

`any`[]

#### Inherited from

[`Vector3`](Vector3.md).[`getPointNumbers`](Vector3.md#getpointnumbers)

***

### getAngle()

> `static` **getAngle**(`from`, `to`): `number`

Defined in: [src/math/Vector3.ts:380](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L380)

Returns the Angle, in degrees, between the source vector and the target vector.

#### Parameters

##### from

[`Vector3`](Vector3.md)

source vector.

##### to

[`Vector3`](Vector3.md)

target vector.

#### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`getAngle`](Vector3.md#getangle)

***

### sqrMagnitude()

> `static` **sqrMagnitude**(`arg0`): `number`

Defined in: [src/math/Vector3.ts:385](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L385)

#### Parameters

##### arg0

[`Vector3`](Vector3.md)

#### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`sqrMagnitude`](Vector3.md#sqrmagnitude)

***

### getZYAngle()

> `static` **getZYAngle**(`zd`, `yd`): `number`

Defined in: [src/math/Vector3.ts:389](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L389)

#### Parameters

##### zd

[`Vector3`](Vector3.md)

##### yd

[`Vector3`](Vector3.md)

#### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`getZYAngle`](Vector3.md#getzyangle)

***

### sub()

> `static` **sub**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:399](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L399)

Subtract two vectors

#### Parameters

##### a

[`Vector3`](Vector3.md)

Vector a

##### b

[`Vector3`](Vector3.md)

Vector b

##### target?

[`Vector3`](Vector3.md) = `null`

output vector

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`sub`](Vector3.md#sub)

***

### add()

> `static` **add**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:415](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L415)

Add two vectors

#### Parameters

##### a

[`Vector3`](Vector3.md)

Vector a

##### b

[`Vector3`](Vector3.md)

Vector b

##### target?

[`Vector3`](Vector3.md) = `null`

output vector

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`add`](Vector3.md#add)

***

### multiply()

> `static` **multiply**(`a`, `b`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:426](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L426)

Component-wise multiply two vectors

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`multiply`](Vector3.md#multiply)

***

### divide()

> `static` **divide**(`a`, `b`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:437](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L437)

Component-wise divide two vectors

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`divide`](Vector3.md#divide)

***

### multiplyScalar()

> `static` **multiplyScalar**(`a`, `s`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:448](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L448)

Multiply a vector by a scalar

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### s

`number`

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`multiplyScalar`](Vector3.md#multiplyscalar)

***

### addScaledVector()

> `static` **addScaledVector**(`a`, `b`, `s`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:459](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L459)

result = a + b * s

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

##### s

`number`

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`addScaledVector`](Vector3.md#addscaledvector)

***

### cross()

> `static` **cross**(`a`, `b`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:470](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L470)

Cross product of two vectors

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`cross`](Vector3.md#cross)

***

### negate()

> `static` **negate**(`a`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:484](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L484)

Negate a vector

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`negate`](Vector3.md#negate)

***

### min()

> `static` **min**(`a`, `b`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:495](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L495)

Component-wise minimum of two vectors

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`min`](Vector3.md#min-1)

***

### max()

> `static` **max**(`a`, `b`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:506](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L506)

Component-wise maximum of two vectors

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`max`](Vector3.md#max-1)

***

### distance()

> `static` **distance**(`pt1`, `pt2`): `number`

Defined in: [src/math/Vector3.ts:549](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L549)

Calculate the distance between two vectors

#### Parameters

##### pt1

[`Vector3`](Vector3.md)

Vector 1

##### pt2

[`Vector3`](Vector3.md)

Vector 2

#### Returns

`number`

number The distance between two vectors

#### Inherited from

[`Vector3`](Vector3.md).[`distance`](Vector3.md#distance)

***

### squareDistance()

> `static` **squareDistance**(`pt1`, `pt2`): `number`

Defined in: [src/math/Vector3.ts:562](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L562)

Calculate the square distance between two vectors

#### Parameters

##### pt1

[`Vector3`](Vector3.md)

Vector 1

##### pt2

[`Vector3`](Vector3.md)

Vector 2

#### Returns

`number`

number The square distance between two vectors

#### Inherited from

[`Vector3`](Vector3.md).[`squareDistance`](Vector3.md#squaredistance)

***

### distanceXZ()

> `static` **distanceXZ**(`pt1`, `pt2`): `number`

Defined in: [src/math/Vector3.ts:574](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L574)

Calculate the distance between two vectors XZ axes

#### Parameters

##### pt1

[`Vector3`](Vector3.md)

Vector 1

##### pt2

[`Vector3`](Vector3.md)

Vector 2

#### Returns

`number`

number The distance between two vectors

#### Inherited from

[`Vector3`](Vector3.md).[`distanceXZ`](Vector3.md#distancexz)

***

### set()

> **set**(`x`, `y`, `z`, `w?`): `Navi3DPoint`

Defined in: [src/math/Vector3.ts:589](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L589)

Sets the current vector x, y, z, and w components

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

##### w?

`number` = `1`

#### Returns

`Navi3DPoint`

#### Inherited from

[`Vector3`](Vector3.md).[`set`](Vector3.md#set)

***

### add()

> **add**(`a`): `this`

Defined in: [src/math/Vector3.ts:600](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L600)

Adds vector `a` to this vector (component-wise on xyz). Mutates and returns this.

#### Parameters

##### a

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`add`](Vector3.md#add-1)

***

### addVectors()

> **addVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector3.ts:605](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L605)

Set this = a + b. Ternary mutator form.

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`addVectors`](Vector3.md#addvectors)

***

### subVectors()

> **subVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector3.ts:609](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L609)

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`subVectors`](Vector3.md#subvectors)

***

### multiplyVectors()

> **multiplyVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector3.ts:614](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L614)

Set this = a * b component-wise.

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`multiplyVectors`](Vector3.md#multiplyvectors)

***

### addScalar()

> **addScalar**(`scalar`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:618](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L618)

#### Parameters

##### scalar

`number`

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`addScalar`](Vector3.md#addscalar)

***

### subScalar()

> **subScalar**(`scalar`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:625](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L625)

#### Parameters

##### scalar

`number`

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`subScalar`](Vector3.md#subscalar)

***

### min()

> **min**(`v`): `this`

Defined in: [src/math/Vector3.ts:635](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L635)

Component-wise minimum with `v`. Mutates and returns this.

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`min`](Vector3.md#min-2)

***

### max()

> **max**(`v`): `this`

Defined in: [src/math/Vector3.ts:642](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L642)

Component-wise maximum with `v`. Mutates and returns this.

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`max`](Vector3.md#max-2)

***

### distanceToSquared()

> **distanceToSquared**(`v`): `number`

Defined in: [src/math/Vector3.ts:646](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L646)

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`distanceToSquared`](Vector3.md#distancetosquared)

***

### addXYZW()

> **addXYZW**(`x`, `y`, `z`, `w`): `this`

Defined in: [src/math/Vector3.ts:656](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L656)

Adds (x, y, z, w) to each component. Mutates and returns this.

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

##### w

`number`

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`addXYZW`](Vector3.md#addxyzw)

***

### clone()

> **clone**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:667](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L667)

Clone a vector with the same components as the current vector

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`clone`](Vector3.md#clone)

***

### decrementBy()

> **decrementBy**(`a`): `this`

Defined in: [src/math/Vector3.ts:681](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L681)

Subtract two vectors and assign the result to yourself

#### Parameters

##### a

[`Vector3`](Vector3.md)

Minus vector

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`decrementBy`](Vector3.md#decrementby)

***

### dotProduct()

> **dotProduct**(`a`): `number`

Defined in: [src/math/Vector3.ts:694](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L694)

Calculate the dot product of two vectors and return the Angle relationship between the two vectors

#### Parameters

##### a

[`Vector3`](Vector3.md)

The vector that you need to compute

#### Returns

`number`

number Returns the Angle relationship between two vectors

#### Inherited from

[`Vector3`](Vector3.md).[`dotProduct`](Vector3.md#dotproduct)

***

### equals()

> **equals**(`toCompare`, `allFour?`): `boolean`

Defined in: [src/math/Vector3.ts:716](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L716)

Find whether the values of two vectors are identical

#### Parameters

##### toCompare

[`Vector3`](Vector3.md)

The vector to compare

##### allFour?

`boolean` = `false`

The default parameter is 1, whether to compare the w component

#### Returns

`boolean`

A value of true if the specified Vector3 object is equal to the current Vector3 object; false if it is not equal.

#### Inherited from

[`Vector3`](Vector3.md).[`equals`](Vector3.md#equals)

***

### incrementBy()

> **incrementBy**(`a`): `this`

Defined in: [src/math/Vector3.ts:736](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L736)

The current vector plus is equal to the vector, plus just the x, y, and z components

#### Parameters

##### a

[`Vector3`](Vector3.md)

vector

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`incrementBy`](Vector3.md#incrementby)

***

### divide()

> **divide**(`v`): `this`

Defined in: [src/math/Vector3.ts:747](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L747)

Component-wise divides this vector by `v`. Mutates and returns this.

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`divide`](Vector3.md#divide-1)

***

### negate()

> **negate**(): `Navi3DPoint`

Defined in: [src/math/Vector3.ts:758](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L758)

Sets the current Vector3 object to its inverse. The inverse object
is also considered the opposite of the original object. The value of
the x, y, and z properties of the current Vector3 object is changed
to -x, -y, and -z.

#### Returns

`Navi3DPoint`

#### Inherited from

[`Vector3`](Vector3.md).[`negate`](Vector3.md#negate-1)

***

### normalize()

> **normalize**(`thickness?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:773](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L773)

Scales the line segment between(0,0) and the current point to a set
length.

#### Parameters

##### thickness?

`number` = `1`

The scaling value. For example, if the current
Vector3 object is (0,3,4), and you normalize it to
1, the point returned is at(0,0.6,0.8).

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`normalize`](Vector3.md#normalize)

***

### applyQuaternion()

> **applyQuaternion**(`q`): `Navi3DPoint`

Defined in: [src/math/Vector3.ts:790](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L790)

Apply the rotation quaternion

#### Parameters

##### q

`any`

quaternion

#### Returns

`Navi3DPoint`

#### Inherited from

[`Vector3`](Vector3.md).[`applyQuaternion`](Vector3.md#applyquaternion)

***

### applyMatrix4()

> **applyMatrix4**(`m`): `this`

Defined in: [src/math/Vector3.ts:815](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L815)

#### Parameters

##### m

`any`

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`applyMatrix4`](Vector3.md#applymatrix4)

***

### setTo()

> **setTo**(`xa`, `ya`, `za`, `wa?`): `void`

Defined in: [src/math/Vector3.ts:827](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L827)

#### Parameters

##### xa

`number`

The first element, such as the x coordinate.

##### ya

`number`

The second element, such as the y coordinate.

##### za

`number`

The third element, such as the z coordinate.

##### wa?

`number` = `1`

#### Returns

`void`

#### Language

en_US
Sets the members of Vector3 to the specified values

#### Inherited from

[`Vector3`](Vector3.md).[`setTo`](Vector3.md#setto)

***

### copy()

> **copy**(`src`): `this`

Defined in: [src/math/Vector3.ts:839](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L839)

Copy the components of the source vector to this vector

#### Parameters

##### src

[`Vector3`](Vector3.md)

Source vector

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`copy`](Vector3.md#copy)

***

### sub()

> **sub**(`a`): `this`

Defined in: [src/math/Vector3.ts:858](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L858)

#### Parameters

##### a

[`Vector3`](Vector3.md)

The Vector3 object to be subtracted from the current
         Vector3 object.

#### Returns

`this`

A new Vector3 object that is the difference between the
         current Vector3 and the specified Vector3 object.

#### Language

en_US
Subtracts the value of the x, y, and z elements of the current
Vector3 object from the values of the x, y, and z elements of
another Vector3 object. Returns a new Vector3.

#### Inherited from

[`Vector3`](Vector3.md).[`sub`](Vector3.md#sub-1)

***

### multiply()

> **multiply**(`other`): `this`

Defined in: [src/math/Vector3.ts:865](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L865)

Component-wise multiplies this vector by `other`. Mutates and returns this.

#### Parameters

##### other

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`multiply`](Vector3.md#multiply-1)

***

### lerp()

> **lerp**(`v0`, `v1`, `t`): `void`

Defined in: [src/math/Vector3.ts:875](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L875)

Computes the linear interpolation between two Vector3, and the result is the current object

#### Parameters

##### v0

[`Vector3`](Vector3.md)

Vector 1

##### v1

[`Vector3`](Vector3.md)

Vector 2

##### t

`number`

Interpolation factor

#### Returns

`void`

#### Inherited from

[`Vector3`](Vector3.md).[`lerp`](Vector3.md#lerp)

***

### clamp()

> **clamp**(`min`, `max`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:897](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L897)

The x, y, and z components of this vector are rounded upward to the nearest integers.

#### Parameters

##### min

[`Vector3`](Vector3.md)

minimum value

##### max

[`Vector3`](Vector3.md)

maximum value

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`clamp`](Vector3.md#clamp)

***

### toString()

> **toString**(): `string`

Defined in: [src/math/Vector3.ts:963](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L963)

Returns the string form of the current vector

#### Returns

`string`

#### Inherited from

[`Vector3`](Vector3.md).[`toString`](Vector3.md#tostring)

***

### normalizeToWay2D\_XY()

> **normalizeToWay2D\_XY**(): `void`

Defined in: [src/math/Vector3.ts:979](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L979)

#### Returns

`void`

#### Inherited from

[`Vector3`](Vector3.md).[`normalizeToWay2D_XY`](Vector3.md#normalizetoway2d_xy)

***

### toArray()

> **toArray**(): `number`[]

Defined in: [src/math/Vector3.ts:997](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L997)

#### Returns

`number`[]

#### Inherited from

[`Vector3`](Vector3.md).[`toArray`](Vector3.md#toarray)

***

### copyToBytes()

> **copyToBytes**(`byte`): `void`

Defined in: [src/math/Vector3.ts:1001](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1001)

#### Parameters

##### byte

`DataView`

#### Returns

`void`

#### Inherited from

[`Vector3`](Vector3.md).[`copyToBytes`](Vector3.md#copytobytes)

***

### cross()

> **cross**(`a`): `this`

Defined in: [src/math/Vector3.ts:1016](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1016)

Cross product with another vector. Returns a new Vector3.

#### Parameters

##### a

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`cross`](Vector3.md#cross-1)

***

### crossVectors()

> **crossVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector3.ts:1020](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1020)

#### Parameters

##### a

[`Vector3`](Vector3.md)

##### b

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`crossVectors`](Vector3.md#crossvectors)

***

### multiplyScalar()

> **multiplyScalar**(`scalar`): `Navi3DPoint`

Defined in: [src/math/Vector3.ts:1025](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1025)

#### Parameters

##### scalar

`number`

#### Returns

`Navi3DPoint`

#### Inherited from

[`Vector3`](Vector3.md).[`multiplyScalar`](Vector3.md#multiplyscalar-1)

***

### setFromArray()

> **setFromArray**(`array`, `firstElementPos?`): `void`

Defined in: [src/math/Vector3.ts:1033](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1033)

#### Parameters

##### array

`number`[]

##### firstElementPos?

`number` = `0`

#### Returns

`void`

#### Inherited from

[`Vector3`](Vector3.md).[`setFromArray`](Vector3.md#setfromarray)

***

### divideScalar()

> **divideScalar**(`scalar`): `this`

Defined in: [src/math/Vector3.ts:1042](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1042)

Divides this vector by scalar. Mutates and returns this.

#### Parameters

##### scalar

`number`

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`divideScalar`](Vector3.md#dividescalar)

***

### clampLength()

> **clampLength**(`min`, `max`): `this`

Defined in: [src/math/Vector3.ts:1049](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1049)

Clamps the length of this vector into [min, max]. Mutates and returns this.

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`clampLength`](Vector3.md#clamplength)

***

### setScalar()

> **setScalar**(`value`): `Navi3DPoint`

Defined in: [src/math/Vector3.ts:1054](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1054)

#### Parameters

##### value

`number`

#### Returns

`Navi3DPoint`

#### Inherited from

[`Vector3`](Vector3.md).[`setScalar`](Vector3.md#setscalar)

***

### addScaledVector()

> **addScaledVector**(`v`, `scale`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:1061](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1061)

#### Parameters

##### v

[`Vector3`](Vector3.md)

##### scale

`number`

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`addScaledVector`](Vector3.md#addscaledvector-1)

***

### dot()

> **dot**(`v`): `number`

Defined in: [src/math/Vector3.ts:1071](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1071)

Dot product. Canonical alias of [dotProduct](Vector3.md#dotproduct).

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`dot`](Vector3.md#dot-1)

***

### lengthSq()

> **lengthSq**(): `number`

Defined in: [src/math/Vector3.ts:1076](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1076)

Squared length of this vector.

#### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`lengthSq`](Vector3.md#lengthsq)

***

### distanceTo()

> **distanceTo**(`v`): `number`

Defined in: [src/math/Vector3.ts:1081](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1081)

Euclidean distance to v.

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`distanceTo`](Vector3.md#distanceto)

***

### angleTo()

> **angleTo**(`v`): `number`

Defined in: [src/math/Vector3.ts:1086](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1086)

Angle between this and v, in radians (range [0, π]).

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`number`

#### Inherited from

[`Vector3`](Vector3.md).[`angleTo`](Vector3.md#angleto)

***

### lerpVectors()

> **lerpVectors**(`v1`, `v2`, `alpha`): `this`

Defined in: [src/math/Vector3.ts:1094](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1094)

Set this to v1 + (v2 - v1) * alpha. Canonical alias of [lerp](Vector3.md#lerp).

#### Parameters

##### v1

[`Vector3`](Vector3.md)

##### v2

[`Vector3`](Vector3.md)

##### alpha

`number`

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`lerpVectors`](Vector3.md#lerpvectors)

***

### setFromMatrixPosition()

> **setFromMatrixPosition**(`m`): `this`

Defined in: [src/math/Vector3.ts:1100](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1100)

Set this = position column of Matrix4 m.

#### Parameters

##### m

###### rawData

`ArrayLike`\<`number`\>

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`setFromMatrixPosition`](Vector3.md#setfrommatrixposition)

***

### setFromMatrixScale()

> **setFromMatrixScale**(`m`): `this`

Defined in: [src/math/Vector3.ts:1109](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1109)

Set this = scale extracted from Matrix4 m (length of each column basis).

#### Parameters

##### m

###### rawData

`ArrayLike`\<`number`\>

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`setFromMatrixScale`](Vector3.md#setfrommatrixscale)

***

### setFromMatrixColumn()

> **setFromMatrixColumn**(`m`, `index`): `this`

Defined in: [src/math/Vector3.ts:1121](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1121)

Set this = column index of Matrix4 m (0, 1, 2, or 3).

#### Parameters

##### m

###### rawData

`ArrayLike`\<`number`\>

##### index

`number`

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`setFromMatrixColumn`](Vector3.md#setfrommatrixcolumn)

***

### projectOnVector()

> **projectOnVector**(`v`): `this`

Defined in: [src/math/Vector3.ts:1131](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1131)

Project this onto v. Mutates and returns this.

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`projectOnVector`](Vector3.md#projectonvector)

***

### projectOnPlane()

> **projectOnPlane**(`planeNormal`): `this`

Defined in: [src/math/Vector3.ts:1139](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1139)

Project this onto a plane defined by its normal (unit vector).

#### Parameters

##### planeNormal

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`projectOnPlane`](Vector3.md#projectonplane)

***

### reflect()

> **reflect**(`normal`): `this`

Defined in: [src/math/Vector3.ts:1145](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1145)

Reflect this off a surface with the given unit normal.

#### Parameters

##### normal

[`Vector3`](Vector3.md)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`reflect`](Vector3.md#reflect)

***

### applyMatrix3()

> **applyMatrix3**(`m`): `this`

Defined in: [src/math/Vector3.ts:1150](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1150)

Apply a 3x3 matrix to this vector.

#### Parameters

##### m

\{ `rawData`: `ArrayLike`\<`number`\>; \} \| \{ `a`: `number`; `b`: `number`; `c`: `number`; `d`: `number`; `tx`: `number`; `ty`: `number`; \}

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`applyMatrix3`](Vector3.md#applymatrix3)

***

### applyAxisAngle()

> **applyAxisAngle**(`axis`, `angle`): `this`

Defined in: [src/math/Vector3.ts:1168](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1168)

Apply axis-angle rotation (axis must be unit, angle in radians).

#### Parameters

##### axis

[`Vector3`](Vector3.md)

##### angle

`number`

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`applyAxisAngle`](Vector3.md#applyaxisangle)

***

### transformDirection()

> **transformDirection**(`m`): `this`

Defined in: [src/math/Vector3.ts:1178](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1178)

Transform this as a direction (no translation) by Matrix4 m, then normalize.

#### Parameters

##### m

###### rawData

`ArrayLike`\<`number`\>

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`transformDirection`](Vector3.md#transformdirection)

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [src/math/Vector3.ts:1188](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1188)

Canonical alias of [setFromArray](Vector3.md#setfromarray).

#### Parameters

##### array

`ArrayLike`\<`number`\>

##### offset?

`number` = `0`

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`fromArray`](Vector3.md#fromarray)

***

### floor()

> **floor**(): `this`

Defined in: [src/math/Vector3.ts:1195](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1195)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`floor`](Vector3.md#floor)

***

### ceil()

> **ceil**(): `this`

Defined in: [src/math/Vector3.ts:1202](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1202)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`ceil`](Vector3.md#ceil)

***

### round()

> **round**(): `this`

Defined in: [src/math/Vector3.ts:1209](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1209)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`round`](Vector3.md#round)

***

### roundToZero()

> **roundToZero**(): `this`

Defined in: [src/math/Vector3.ts:1216](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1216)

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`roundToZero`](Vector3.md#roundtozero)

***

### random()

> **random**(): `this`

Defined in: [src/math/Vector3.ts:1224](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1224)

Fill this with components in [0, 1).

#### Returns

`this`

#### Inherited from

[`Vector3`](Vector3.md).[`random`](Vector3.md#random)

***

### pointInsideTriangle()

> `static` **pointInsideTriangle**(`pt`, `pt0`, `pt1`, `pt2`): `boolean`

Defined in: [src/math/Vector3.ts:1255](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1255)

#### Parameters

##### pt

[`Vector3`](Vector3.md)

##### pt0

[`Vector3`](Vector3.md)

##### pt1

[`Vector3`](Vector3.md)

##### pt2

[`Vector3`](Vector3.md)

#### Returns

`boolean`

#### Inherited from

[`Vector3`](Vector3.md).[`pointInsideTriangle`](Vector3.md#pointinsidetriangle)

***

### serialize()

> `static` **serialize**(`position`): [`Vector3`](Vector3.md)

Defined in: [src/math/Vector3.ts:1284](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1284)

#### Parameters

##### position

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Vector3`](Vector3.md).[`serialize`](Vector3.md#serialize)

***

### equalPoint()

> `static` **equalPoint**(`p1`, `p2`): `boolean`

Defined in: [src/math/navigation/Navi3DPoint.ts:27](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L27)

#### Parameters

##### p1

[`Vector3`](Vector3.md)

##### p2

[`Vector3`](Vector3.md)

#### Returns

`boolean`

***

### calcDistance()

> `static` **calcDistance**(`pt1`, `pt2`): `number`

Defined in: [src/math/navigation/Navi3DPoint.ts:31](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L31)

#### Parameters

##### pt1

[`Vector3`](Vector3.md)

##### pt2

[`Vector3`](Vector3.md)

#### Returns

`number`
