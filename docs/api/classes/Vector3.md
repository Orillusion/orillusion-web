[**@orillusion/core**](../README.md)

***

# Class: Vector3

Defined in: [src/math/Vector3.ts:6](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L6)

Vector 3D

## Constructors

### Constructor

> **new Vector3**(`x?`, `y?`, `z?`, `w?`): `Vector3`

Defined in: [src/math/Vector3.ts:191](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L191)

Creates an instance of a Vector3 object. If you do not specify a.
parameter for the constructor, a Vector3 object is created with
the elements (0,0,0,0).

#### Parameters

##### x?

`number` = `0`

The first element, such as the x coordinate.

##### y?

`number` = `0`

The second element, such as the y coordinate.

##### z?

`number` = `0`

The third element, such as the z coordinate.

##### w?

`number` = `0`

An optional element for additional data such as the angle
         of rotation.

#### Returns

`Vector3`

## Properties

### MAX

> `readonly` `static` **MAX**: `Vector3`

Defined in: [src/math/Vector3.ts:11](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L11)

Vector maximum

***

### MIN

> `readonly` `static` **MIN**: `Vector3`

Defined in: [src/math/Vector3.ts:16](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L16)

Vector minimum

***

### SAFE\_MAX

> `readonly` `static` **SAFE\_MAX**: `Vector3`

Defined in: [src/math/Vector3.ts:21](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L21)

Vector maximum integer value

***

### SAFE\_MIN

> `readonly` `static` **SAFE\_MIN**: `Vector3`

Defined in: [src/math/Vector3.ts:26](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L26)

Vector minimum integer value

***

### X\_AXIS

> `readonly` `static` **X\_AXIS**: `Vector3`

Defined in: [src/math/Vector3.ts:31](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L31)

X axis positive axis coordinate (1, 0, 0).

***

### neg\_X\_AXIS

> `readonly` `static` **neg\_X\_AXIS**: `Vector3`

Defined in: [src/math/Vector3.ts:36](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L36)

The X-axis is negative (-1, 0, 0).

***

### Y\_AXIS

> `readonly` `static` **Y\_AXIS**: `Vector3`

Defined in: [src/math/Vector3.ts:41](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L41)

The y axis defined as a Vector3 object with coordinates (0,1,0).

***

### Z\_AXIS

> `readonly` `static` **Z\_AXIS**: `Vector3`

Defined in: [src/math/Vector3.ts:46](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L46)

The z axis defined as a Vector3 object with coordinates (0,0,1).

***

### x

> **x**: `number` = `0`

Defined in: [src/math/Vector3.ts:148](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L148)

The first element of a Vector3 object, such as the x coordinate of
a point in the three-dimensional space. The default value is 0.

***

### y

> **y**: `number` = `0`

Defined in: [src/math/Vector3.ts:154](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L154)

The second element of a Vector3 object, such as the y coordinate of
a point in the three-dimensional space. The default value is 0.

***

### z

> **z**: `number` = `0`

Defined in: [src/math/Vector3.ts:160](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L160)

The third element of a Vector3 object, such as the y coordinate of
a point in the three-dimensional space. The default value is 0.

***

### w

> **w**: `number` = `1`

Defined in: [src/math/Vector3.ts:167](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L167)

The z component of the vector,
A three-dimensional position or projection that can be used as a perspective projection
We can also do w in the quaternion

## Accessors

### ZERO

#### Get Signature

> **get** `static` **ZERO**(): `Vector3`

Defined in: [src/math/Vector3.ts:91](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L91)

Returns a new vector with zero x, y, and z components

##### Returns

`Vector3`

***

### ONE

#### Get Signature

> **get** `static` **ONE**(): `Vector3`

Defined in: [src/math/Vector3.ts:98](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L98)

Returns a new vector whose x, y, and z components are all 1

##### Returns

`Vector3`

***

### LEFT

#### Get Signature

> **get** `static` **LEFT**(): `Vector3`

Defined in: [src/math/Vector3.ts:105](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L105)

Returns a new vector pointing to the left, x is -1, y is 0, and z is 0

##### Returns

`Vector3`

***

### RIGHT

#### Get Signature

> **get** `static` **RIGHT**(): `Vector3`

Defined in: [src/math/Vector3.ts:112](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L112)

Returns a new vector pointing in the right direction, where x is 1, y is 0, and z is 0

##### Returns

`Vector3`

***

### UP

#### Get Signature

> **get** `static` **UP**(): `Vector3`

Defined in: [src/math/Vector3.ts:119](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L119)

Returns a new vector pointing upwards, that is, x equals 0, y equals 1, and z equals 0

##### Returns

`Vector3`

***

### DOWN

#### Get Signature

> **get** `static` **DOWN**(): `Vector3`

Defined in: [src/math/Vector3.ts:126](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L126)

Returns a new vector pointing down, where x is 0, y is -1, and z is 0

##### Returns

`Vector3`

***

### BACK

#### Get Signature

> **get** `static` **BACK**(): `Vector3`

Defined in: [src/math/Vector3.ts:133](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L133)

Returns a new backward vector, x equals 0, y equals 0, and z equals negative 1

##### Returns

`Vector3`

***

### FORWARD

#### Get Signature

> **get** `static` **FORWARD**(): `Vector3`

Defined in: [src/math/Vector3.ts:140](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L140)

Returns a new forward-pointing vector, that is, x is 0, y is 0, and z is 1

##### Returns

`Vector3`

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

***

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [src/math/Vector3.ts:264](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L264)

The length of the vector, the distance from the origin (0, 0, 0) to (x, y, z)

##### Returns

`number`

***

### lengthSquared

#### Get Signature

> **get** **lengthSquared**(): `number`

Defined in: [src/math/Vector3.ts:272](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L272)

You get the square of the length of the vector

##### Returns

`number`

***

### position

#### Get Signature

> **get** **position**(): `this`

Defined in: [src/math/Vector3.ts:279](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L279)

Get the current vector

##### Returns

`this`

## Methods

### getTowPointbyDir()

> `static` **getTowPointbyDir**(`dir`, `tp1`, `tp2`, `width`, `aix`): `void`

Defined in: [src/math/Vector3.ts:290](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L290)

Obtain a vertical line segment with width through an orientation

#### Parameters

##### dir

`Vector3`

##### tp1

`Vector3`

##### tp2

`Vector3`

##### width

`number`

##### aix

`Vector3`

#### Returns

`void`

***

### pointToLine()

> `static` **pointToLine**(`point1`, `point2`, `position`): `number`

Defined in: [src/math/Vector3.ts:319](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L319)

Calculate the distance from the point to the line

#### Parameters

##### point1

`Vector3`

Starting point of line segment

##### point2

`Vector3`

End point of line segment

##### position

`Vector3`

Point position

#### Returns

`number`

Distance from a point to a line segment

***

### dot()

> `static` **dot**(`a`, `b`): `number`

Defined in: [src/math/Vector3.ts:353](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L353)

Take the dot product of two vectors.

#### Parameters

##### a

`Vector3`

Vector a

##### b

`Vector3`

Vector b

#### Returns

`number`

***

### getPoints()

> `static` **getPoints**(`total`, `randSeed`): `any`[]

Defined in: [src/math/Vector3.ts:358](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L358)

Generate `total` random Vector3 points within a cube of side `randSeed` centered at origin.

#### Parameters

##### total

`number`

##### randSeed

`number`

#### Returns

`any`[]

***

### getPointNumbers()

> `static` **getPointNumbers**(`total`, `randSeed`): `any`[]

Defined in: [src/math/Vector3.ts:368](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L368)

Generate `total` random points as a flat number array (x, y, z, ...) within a cube of side `randSeed`.

#### Parameters

##### total

`number`

##### randSeed

`number`

#### Returns

`any`[]

***

### getAngle()

> `static` **getAngle**(`from`, `to`): `number`

Defined in: [src/math/Vector3.ts:382](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L382)

Returns the Angle, in degrees, between the source vector and the target vector.

#### Parameters

##### from

`Vector3`

source vector.

##### to

`Vector3`

target vector.

#### Returns

`number`

***

### sqrMagnitude()

> `static` **sqrMagnitude**(`arg0`): `number`

Defined in: [src/math/Vector3.ts:388](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L388)

Returns the squared magnitude (x^2 + y^2 + z^2) of the given vector.

#### Parameters

##### arg0

`Vector3`

#### Returns

`number`

***

### getZYAngle()

> `static` **getZYAngle**(`zd`, `yd`): `number`

Defined in: [src/math/Vector3.ts:393](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L393)

Returns the angle, in degrees, between two vectors projected onto the ZY plane.

#### Parameters

##### zd

`Vector3`

##### yd

`Vector3`

#### Returns

`number`

***

### sub()

> `static` **sub**(`a`, `b`, `target?`): `Vector3`

Defined in: [src/math/Vector3.ts:403](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L403)

Subtract two vectors

#### Parameters

##### a

`Vector3`

Vector a

##### b

`Vector3`

Vector b

##### target?

`Vector3` = `null`

output vector

#### Returns

`Vector3`

***

### add()

> `static` **add**(`a`, `b`, `target?`): `Vector3`

Defined in: [src/math/Vector3.ts:419](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L419)

Add two vectors

#### Parameters

##### a

`Vector3`

Vector a

##### b

`Vector3`

Vector b

##### target?

`Vector3` = `null`

output vector

#### Returns

`Vector3`

***

### multiply()

> `static` **multiply**(`a`, `b`, `result?`): `Vector3`

Defined in: [src/math/Vector3.ts:430](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L430)

Component-wise multiply two vectors

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

##### result?

`Vector3`

#### Returns

`Vector3`

***

### divide()

> `static` **divide**(`a`, `b`, `result?`): `Vector3`

Defined in: [src/math/Vector3.ts:441](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L441)

Component-wise divide two vectors

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

##### result?

`Vector3`

#### Returns

`Vector3`

***

### multiplyScalar()

> `static` **multiplyScalar**(`a`, `s`, `result?`): `Vector3`

Defined in: [src/math/Vector3.ts:452](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L452)

Multiply a vector by a scalar

#### Parameters

##### a

`Vector3`

##### s

`number`

##### result?

`Vector3`

#### Returns

`Vector3`

***

### addScaledVector()

> `static` **addScaledVector**(`a`, `b`, `s`, `result?`): `Vector3`

Defined in: [src/math/Vector3.ts:463](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L463)

result = a + b * s

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

##### s

`number`

##### result?

`Vector3`

#### Returns

`Vector3`

***

### cross()

> `static` **cross**(`a`, `b`, `result?`): `Vector3`

Defined in: [src/math/Vector3.ts:474](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L474)

Cross product of two vectors

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

##### result?

`Vector3`

#### Returns

`Vector3`

***

### negate()

> `static` **negate**(`a`, `result?`): `Vector3`

Defined in: [src/math/Vector3.ts:488](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L488)

Negate a vector

#### Parameters

##### a

`Vector3`

##### result?

`Vector3`

#### Returns

`Vector3`

***

### min()

> `static` **min**(`a`, `b`, `result?`): `Vector3`

Defined in: [src/math/Vector3.ts:499](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L499)

Component-wise minimum of two vectors

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

##### result?

`Vector3`

#### Returns

`Vector3`

***

### max()

> `static` **max**(`a`, `b`, `result?`): `Vector3`

Defined in: [src/math/Vector3.ts:510](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L510)

Component-wise maximum of two vectors

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

##### result?

`Vector3`

#### Returns

`Vector3`

***

### distance()

> `static` **distance**(`pt1`, `pt2`): `number`

Defined in: [src/math/Vector3.ts:553](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L553)

Calculate the distance between two vectors

#### Parameters

##### pt1

`Vector3`

Vector 1

##### pt2

`Vector3`

Vector 2

#### Returns

`number`

number The distance between two vectors

***

### squareDistance()

> `static` **squareDistance**(`pt1`, `pt2`): `number`

Defined in: [src/math/Vector3.ts:566](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L566)

Calculate the square distance between two vectors

#### Parameters

##### pt1

`Vector3`

Vector 1

##### pt2

`Vector3`

Vector 2

#### Returns

`number`

number The square distance between two vectors

***

### distanceXZ()

> `static` **distanceXZ**(`pt1`, `pt2`): `number`

Defined in: [src/math/Vector3.ts:578](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L578)

Calculate the distance between two vectors XZ axes

#### Parameters

##### pt1

`Vector3`

Vector 1

##### pt2

`Vector3`

Vector 2

#### Returns

`number`

number The distance between two vectors

***

### set()

> **set**(`x`, `y`, `z`, `w?`): `Vector3`

Defined in: [src/math/Vector3.ts:593](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L593)

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

`Vector3`

***

### add()

> **add**(`a`): `this`

Defined in: [src/math/Vector3.ts:604](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L604)

Adds vector `a` to this vector (component-wise on xyz). Mutates and returns this.

#### Parameters

##### a

`Vector3`

#### Returns

`this`

***

### addVectors()

> **addVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector3.ts:609](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L609)

Set this = a + b. Ternary mutator form.

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

#### Returns

`this`

***

### subVectors()

> **subVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector3.ts:614](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L614)

Set this = a - b. Mutates and returns this.

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

#### Returns

`this`

***

### multiplyVectors()

> **multiplyVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector3.ts:619](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L619)

Set this = a * b component-wise.

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

#### Returns

`this`

***

### addScalar()

> **addScalar**(`scalar`): `Vector3`

Defined in: [src/math/Vector3.ts:624](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L624)

Add scalar to x, y, and z. Mutates and returns this.

#### Parameters

##### scalar

`number`

#### Returns

`Vector3`

***

### subScalar()

> **subScalar**(`scalar`): `Vector3`

Defined in: [src/math/Vector3.ts:632](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L632)

Subtract scalar from x, y, and z. Mutates and returns this.

#### Parameters

##### scalar

`number`

#### Returns

`Vector3`

***

### min()

> **min**(`v`): `this`

Defined in: [src/math/Vector3.ts:642](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L642)

Component-wise minimum with `v`. Mutates and returns this.

#### Parameters

##### v

`Vector3`

#### Returns

`this`

***

### max()

> **max**(`v`): `this`

Defined in: [src/math/Vector3.ts:649](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L649)

Component-wise maximum with `v`. Mutates and returns this.

#### Parameters

##### v

`Vector3`

#### Returns

`this`

***

### distanceToSquared()

> **distanceToSquared**(`v`): `number`

Defined in: [src/math/Vector3.ts:654](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L654)

Squared Euclidean distance from this vector to v.

#### Parameters

##### v

`Vector3`

#### Returns

`number`

***

### addXYZW()

> **addXYZW**(`x`, `y`, `z`, `w`): `this`

Defined in: [src/math/Vector3.ts:664](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L664)

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

***

### clone()

> **clone**(): `Vector3`

Defined in: [src/math/Vector3.ts:675](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L675)

Clone a vector with the same components as the current vector

#### Returns

`Vector3`

***

### decrementBy()

> **decrementBy**(`a`): `this`

Defined in: [src/math/Vector3.ts:689](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L689)

Subtract two vectors and assign the result to yourself

#### Parameters

##### a

`Vector3`

Minus vector

#### Returns

`this`

***

### dotProduct()

> **dotProduct**(`a`): `number`

Defined in: [src/math/Vector3.ts:702](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L702)

Calculate the dot product of two vectors and return the Angle relationship between the two vectors

#### Parameters

##### a

`Vector3`

The vector that you need to compute

#### Returns

`number`

number Returns the Angle relationship between two vectors

***

### equals()

> **equals**(`toCompare`, `allFour?`): `boolean`

Defined in: [src/math/Vector3.ts:724](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L724)

Find whether the values of two vectors are identical

#### Parameters

##### toCompare

`Vector3`

The vector to compare

##### allFour?

`boolean` = `false`

The default parameter is 1, whether to compare the w component

#### Returns

`boolean`

A value of true if the specified Vector3 object is equal to the current Vector3 object; false if it is not equal.

***

### incrementBy()

> **incrementBy**(`a`): `this`

Defined in: [src/math/Vector3.ts:744](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L744)

The current vector plus is equal to the vector, plus just the x, y, and z components

#### Parameters

##### a

`Vector3`

vector

#### Returns

`this`

***

### divide()

> **divide**(`v`): `this`

Defined in: [src/math/Vector3.ts:755](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L755)

Component-wise divides this vector by `v`. Mutates and returns this.

#### Parameters

##### v

`Vector3`

#### Returns

`this`

***

### negate()

> **negate**(): `Vector3`

Defined in: [src/math/Vector3.ts:766](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L766)

Sets the current Vector3 object to its inverse. The inverse object
is also considered the opposite of the original object. The value of
the x, y, and z properties of the current Vector3 object is changed
to -x, -y, and -z.

#### Returns

`Vector3`

***

### normalize()

> **normalize**(`thickness?`): `Vector3`

Defined in: [src/math/Vector3.ts:781](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L781)

Scales the line segment between(0,0) and the current point to a set
length.

#### Parameters

##### thickness?

`number` = `1`

The scaling value. For example, if the current
Vector3 object is (0,3,4), and you normalize it to
1, the point returned is at(0,0.6,0.8).

#### Returns

`Vector3`

***

### applyQuaternion()

> **applyQuaternion**(`q`): `Vector3`

Defined in: [src/math/Vector3.ts:798](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L798)

Apply the rotation quaternion

#### Parameters

##### q

`any`

quaternion

#### Returns

`Vector3`

***

### applyMatrix4()

> **applyMatrix4**(`m`): `this`

Defined in: [src/math/Vector3.ts:824](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L824)

Transform this vector as a point by Matrix4 m. Mutates and returns this.

#### Parameters

##### m

`any`

#### Returns

`this`

***

### setTo()

> **setTo**(`xa`, `ya`, `za`, `wa?`): `void`

Defined in: [src/math/Vector3.ts:836](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L836)

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

***

### copy()

> **copy**(`src`): `this`

Defined in: [src/math/Vector3.ts:848](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L848)

Copy the components of the source vector to this vector

#### Parameters

##### src

`Vector3`

Source vector

#### Returns

`this`

***

### sub()

> **sub**(`a`): `this`

Defined in: [src/math/Vector3.ts:867](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L867)

#### Parameters

##### a

`Vector3`

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

***

### multiply()

> **multiply**(`other`): `this`

Defined in: [src/math/Vector3.ts:874](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L874)

Component-wise multiplies this vector by `other`. Mutates and returns this.

#### Parameters

##### other

`Vector3`

#### Returns

`this`

***

### lerp()

> **lerp**(`v0`, `v1`, `t`): `void`

Defined in: [src/math/Vector3.ts:884](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L884)

Computes the linear interpolation between two Vector3, and the result is the current object

#### Parameters

##### v0

`Vector3`

Vector 1

##### v1

`Vector3`

Vector 2

##### t

`number`

Interpolation factor

#### Returns

`void`

***

### clamp()

> **clamp**(`min`, `max`): `Vector3`

Defined in: [src/math/Vector3.ts:906](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L906)

The x, y, and z components of this vector are rounded upward to the nearest integers.

#### Parameters

##### min

`Vector3`

minimum value

##### max

`Vector3`

maximum value

#### Returns

`Vector3`

***

### toString()

> **toString**(): `string`

Defined in: [src/math/Vector3.ts:972](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L972)

Returns the string form of the current vector

#### Returns

`string`

***

### normalizeToWay2D\_XY()

> **normalizeToWay2D\_XY**(): `void`

Defined in: [src/math/Vector3.ts:989](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L989)

Snap this vector to the nearest 2D axis direction (LEFT/RIGHT/UP/DOWN) based on x and y.

#### Returns

`void`

***

### toArray()

> **toArray**(): `number`[]

Defined in: [src/math/Vector3.ts:1008](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1008)

Returns the x, y, and z components as a new array.

#### Returns

`number`[]

***

### copyToBytes()

> **copyToBytes**(`byte`): `void`

Defined in: [src/math/Vector3.ts:1013](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1013)

Write x, y, and z as little-endian float32 values into the DataView.

#### Parameters

##### byte

`DataView`

#### Returns

`void`

***

### cross()

> **cross**(`a`): `this`

Defined in: [src/math/Vector3.ts:1028](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1028)

Cross product with another vector. Returns a new Vector3.

#### Parameters

##### a

`Vector3`

#### Returns

`this`

***

### crossVectors()

> **crossVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector3.ts:1033](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1033)

Set this = cross product of a and b. Mutates and returns this.

#### Parameters

##### a

`Vector3`

##### b

`Vector3`

#### Returns

`this`

***

### multiplyScalar()

> **multiplyScalar**(`scalar`): `Vector3`

Defined in: [src/math/Vector3.ts:1039](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1039)

Multiply x, y, and z by scalar. Mutates and returns this.

#### Parameters

##### scalar

`number`

#### Returns

`Vector3`

***

### setFromArray()

> **setFromArray**(`array`, `firstElementPos?`): `void`

Defined in: [src/math/Vector3.ts:1048](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1048)

Set x/y/z from array starting at firstElementPos.

#### Parameters

##### array

`number`[]

##### firstElementPos?

`number` = `0`

#### Returns

`void`

***

### divideScalar()

> **divideScalar**(`scalar`): `this`

Defined in: [src/math/Vector3.ts:1057](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1057)

Divides this vector by scalar. Mutates and returns this.

#### Parameters

##### scalar

`number`

#### Returns

`this`

***

### clampLength()

> **clampLength**(`min`, `max`): `this`

Defined in: [src/math/Vector3.ts:1064](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1064)

Clamps the length of this vector into [min, max]. Mutates and returns this.

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`this`

***

### setScalar()

> **setScalar**(`value`): `Vector3`

Defined in: [src/math/Vector3.ts:1070](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1070)

Set x, y, and z all to value. Mutates and returns this.

#### Parameters

##### value

`number`

#### Returns

`Vector3`

***

### addScaledVector()

> **addScaledVector**(`v`, `scale`): `Vector3`

Defined in: [src/math/Vector3.ts:1078](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1078)

Add v * scale to this vector. Mutates and returns this.

#### Parameters

##### v

`Vector3`

##### scale

`number`

#### Returns

`Vector3`

***

### dot()

> **dot**(`v`): `number`

Defined in: [src/math/Vector3.ts:1088](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1088)

Dot product. Canonical alias of [dotProduct](#dotproduct).

#### Parameters

##### v

`Vector3`

#### Returns

`number`

***

### lengthSq()

> **lengthSq**(): `number`

Defined in: [src/math/Vector3.ts:1093](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1093)

Squared length of this vector.

#### Returns

`number`

***

### distanceTo()

> **distanceTo**(`v`): `number`

Defined in: [src/math/Vector3.ts:1098](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1098)

Euclidean distance to v.

#### Parameters

##### v

`Vector3`

#### Returns

`number`

***

### angleTo()

> **angleTo**(`v`): `number`

Defined in: [src/math/Vector3.ts:1103](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1103)

Angle between this and v, in radians (range [0, π]).

#### Parameters

##### v

`Vector3`

#### Returns

`number`

***

### lerpVectors()

> **lerpVectors**(`v1`, `v2`, `alpha`): `this`

Defined in: [src/math/Vector3.ts:1111](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1111)

Set this to v1 + (v2 - v1) * alpha. Canonical alias of [lerp](#lerp).

#### Parameters

##### v1

`Vector3`

##### v2

`Vector3`

##### alpha

`number`

#### Returns

`this`

***

### setFromMatrixPosition()

> **setFromMatrixPosition**(`m`): `this`

Defined in: [src/math/Vector3.ts:1117](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1117)

Set this = position column of Matrix4 m.

#### Parameters

##### m

###### rawData

`ArrayLike`\<`number`\>

#### Returns

`this`

***

### setFromMatrixScale()

> **setFromMatrixScale**(`m`): `this`

Defined in: [src/math/Vector3.ts:1126](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1126)

Set this = scale extracted from Matrix4 m (length of each column basis).

#### Parameters

##### m

###### rawData

`ArrayLike`\<`number`\>

#### Returns

`this`

***

### setFromMatrixColumn()

> **setFromMatrixColumn**(`m`, `index`): `this`

Defined in: [src/math/Vector3.ts:1138](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1138)

Set this = column index of Matrix4 m (0, 1, 2, or 3).

#### Parameters

##### m

###### rawData

`ArrayLike`\<`number`\>

##### index

`number`

#### Returns

`this`

***

### projectOnVector()

> **projectOnVector**(`v`): `this`

Defined in: [src/math/Vector3.ts:1148](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1148)

Project this onto v. Mutates and returns this.

#### Parameters

##### v

`Vector3`

#### Returns

`this`

***

### projectOnPlane()

> **projectOnPlane**(`planeNormal`): `this`

Defined in: [src/math/Vector3.ts:1156](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1156)

Project this onto a plane defined by its normal (unit vector).

#### Parameters

##### planeNormal

`Vector3`

#### Returns

`this`

***

### reflect()

> **reflect**(`normal`): `this`

Defined in: [src/math/Vector3.ts:1162](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1162)

Reflect this off a surface with the given unit normal.

#### Parameters

##### normal

`Vector3`

#### Returns

`this`

***

### applyMatrix3()

> **applyMatrix3**(`m`): `this`

Defined in: [src/math/Vector3.ts:1167](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1167)

Apply a 3x3 matrix to this vector.

#### Parameters

##### m

\{ `rawData`: `ArrayLike`\<`number`\>; \} \| \{ `a`: `number`; `b`: `number`; `c`: `number`; `d`: `number`; `tx`: `number`; `ty`: `number`; \}

#### Returns

`this`

***

### applyAxisAngle()

> **applyAxisAngle**(`axis`, `angle`): `this`

Defined in: [src/math/Vector3.ts:1185](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1185)

Apply axis-angle rotation (axis must be unit, angle in radians).

#### Parameters

##### axis

`Vector3`

##### angle

`number`

#### Returns

`this`

***

### transformDirection()

> **transformDirection**(`m`): `this`

Defined in: [src/math/Vector3.ts:1195](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1195)

Transform this as a direction (no translation) by Matrix4 m, then normalize.

#### Parameters

##### m

###### rawData

`ArrayLike`\<`number`\>

#### Returns

`this`

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [src/math/Vector3.ts:1205](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1205)

Canonical alias of [setFromArray](#setfromarray).

#### Parameters

##### array

`ArrayLike`\<`number`\>

##### offset?

`number` = `0`

#### Returns

`this`

***

### floor()

> **floor**(): `this`

Defined in: [src/math/Vector3.ts:1213](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1213)

Floors each component. Mutates and returns this.

#### Returns

`this`

***

### ceil()

> **ceil**(): `this`

Defined in: [src/math/Vector3.ts:1221](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1221)

Ceils each component. Mutates and returns this.

#### Returns

`this`

***

### round()

> **round**(): `this`

Defined in: [src/math/Vector3.ts:1229](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1229)

Rounds each component to the nearest integer. Mutates and returns this.

#### Returns

`this`

***

### roundToZero()

> **roundToZero**(): `this`

Defined in: [src/math/Vector3.ts:1237](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1237)

Rounds each component toward zero. Mutates and returns this.

#### Returns

`this`

***

### random()

> **random**(): `this`

Defined in: [src/math/Vector3.ts:1245](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1245)

Fill this with components in [0, 1).

#### Returns

`this`

***

### pointInsideTriangle()

> `static` **pointInsideTriangle**(`pt`, `pt0`, `pt1`, `pt2`): `boolean`

Defined in: [src/math/Vector3.ts:1277](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1277)

Tests whether point `pt` lies inside the triangle (pt0, pt1, pt2), using their x/z coordinates.

#### Parameters

##### pt

`Vector3`

##### pt0

`Vector3`

##### pt1

`Vector3`

##### pt2

`Vector3`

#### Returns

`boolean`

***

### serialize()

> `static` **serialize**(`position`): `Vector3`

Defined in: [src/math/Vector3.ts:1307](https://github.com/orillusion/orillusion/blob/main/src/math/Vector3.ts#L1307)

Returns a new Vector3 copy of the given vector, used for serialization.

#### Parameters

##### position

`Vector3`

#### Returns

`Vector3`
