[**@orillusion/core**](../README.md)

***

# Class: Vector2

Defined in: [src/math/Vector2.ts:6](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L6)

Vector 2D

## Constructors

### Constructor

> **new Vector2**(`x?`, `y?`): `Vector2`

Defined in: [src/math/Vector2.ts:47](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L47)

Create a new Vector2.

#### Parameters

##### x?

`number` = `0`

The x component of the vector, which defaults to 0.

##### y?

`number` = `0`

The y component of the vector, which defaults to 0.

#### Returns

`Vector2`

## Properties

### ZERO

> `readonly` `static` **ZERO**: `Vector2`

Defined in: [src/math/Vector2.ts:24](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L24)

A zero vector (0, 0).

***

### SAFE\_MAX

> `readonly` `static` **SAFE\_MAX**: `Vector2`

Defined in: [src/math/Vector2.ts:27](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L27)

A vector whose components are the maximum safe integer.

***

### SAFE\_MIN

> `readonly` `static` **SAFE\_MIN**: `Vector2`

Defined in: [src/math/Vector2.ts:30](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L30)

A vector whose components are the minimum safe integer.

***

### x

> **x**: `number` = `0.0`

Defined in: [src/math/Vector2.ts:35](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L35)

The x component of the vector, the default value is 0.

***

### y

> **y**: `number` = `0.0`

Defined in: [src/math/Vector2.ts:40](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L40)

The y component of the vector, the default value is 0.

## Methods

### getAngle()

> `static` **getAngle**(`a`, `b`): `number`

Defined in: [src/math/Vector2.ts:58](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L58)

Returns the Angle, in radians, between two vectors.

#### Parameters

##### a

`Vector2`

Vector a

##### b

`Vector2`

Vector b

#### Returns

`number`

result

***

### slerp()

> `static` **slerp**(`from`, `to`, `t`): `Vector2`

Defined in: [src/math/Vector2.ts:68](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L68)

Computes linear interpolation between two vectors.

#### Parameters

##### from

`Vector2`

starting vector

##### to

`Vector2`

The vector in which you interpolate

##### t

`number`

#### Returns

`Vector2`

***

### lerp()

> `static` **lerp**(`from`, `to`, `t`): `Vector2`

Defined in: [src/math/Vector2.ts:97](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L97)

Linear interpolation between two vectors.

#### Parameters

##### from

`Vector2`

starting vector

##### to

`Vector2`

The vector in which you interpolate

##### t

`number`

#### Returns

`Vector2`

***

### add()

> `static` **add**(`a`, `b`, `result?`): `Vector2`

Defined in: [src/math/Vector2.ts:108](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L108)

Add two vectors

#### Parameters

##### a

`Vector2`

##### b

`Vector2`

##### result?

`Vector2`

#### Returns

`Vector2`

***

### sub()

> `static` **sub**(`a`, `b`, `result?`): `Vector2`

Defined in: [src/math/Vector2.ts:118](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L118)

Subtract two vectors

#### Parameters

##### a

`Vector2`

##### b

`Vector2`

##### result?

`Vector2`

#### Returns

`Vector2`

***

### multiply()

> `static` **multiply**(`a`, `b`, `result?`): `Vector2`

Defined in: [src/math/Vector2.ts:128](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L128)

Component-wise multiply two vectors

#### Parameters

##### a

`Vector2`

##### b

`Vector2`

##### result?

`Vector2`

#### Returns

`Vector2`

***

### divide()

> `static` **divide**(`a`, `b`, `result?`): `Vector2`

Defined in: [src/math/Vector2.ts:138](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L138)

Component-wise divide two vectors

#### Parameters

##### a

`Vector2`

##### b

`Vector2`

##### result?

`Vector2`

#### Returns

`Vector2`

***

### multiplyScalar()

> `static` **multiplyScalar**(`a`, `s`, `result?`): `Vector2`

Defined in: [src/math/Vector2.ts:148](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L148)

Multiply a vector by a scalar

#### Parameters

##### a

`Vector2`

##### s

`number`

##### result?

`Vector2`

#### Returns

`Vector2`

***

### negate()

> `static` **negate**(`a`, `result?`): `Vector2`

Defined in: [src/math/Vector2.ts:158](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L158)

Negate a vector

#### Parameters

##### a

`Vector2`

##### result?

`Vector2`

#### Returns

`Vector2`

***

### set()

> **set**(`x?`, `y?`): `this`

Defined in: [src/math/Vector2.ts:170](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L170)

Sets the x and y components of this vector.

#### Parameters

##### x?

`number` = `0`

The x component of the vector, which defaults to 0.

##### y?

`number` = `0`

The y component of the vector, which defaults to 0.

#### Returns

`this`

***

### distance()

> **distance**(`a`): `number`

Defined in: [src/math/Vector2.ts:181](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L181)

Calculate the distance between this vector and the incoming vector.

#### Parameters

##### a

`Vector2`

Target vector

#### Returns

`number`

***

### add()

> **add**(`a`): `this`

Defined in: [src/math/Vector2.ts:188](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L188)

Adds vector `a` to this vector. Mutates and returns this.

#### Parameters

##### a

`Vector2`

#### Returns

`this`

***

### sub()

> **sub**(`a`): `this`

Defined in: [src/math/Vector2.ts:195](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L195)

Subtracts vector `a` from this vector. Mutates and returns this.

#### Parameters

##### a

`Vector2`

#### Returns

`this`

***

### multiplyScalar()

> **multiplyScalar**(`s`): `this`

Defined in: [src/math/Vector2.ts:202](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L202)

Multiplies x/y of this vector by scalar s. Mutates and returns this.

#### Parameters

##### s

`number`

#### Returns

`this`

***

### multiply()

> **multiply**(`a`): `this`

Defined in: [src/math/Vector2.ts:210](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L210)

Multiplies x/y of this vector by scalar a. Mutates and returns this.
Kept as an alternative name for the scalar `multiplyScalar`.

#### Parameters

##### a

`number`

#### Returns

`this`

***

### divide()

> **divide**(`v`): `this`

Defined in: [src/math/Vector2.ts:217](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L217)

Divides x/y of this vector by scalar v. Mutates and returns this.

#### Parameters

##### v

`number`

#### Returns

`this`

***

### neg()

> **neg**(): `this`

Defined in: [src/math/Vector2.ts:224](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L224)

Negates this vector. Mutates and returns this.

#### Returns

`this`

***

### abs()

> **abs**(): `number`

Defined in: [src/math/Vector2.ts:229](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L229)

Returns the Euclidean length of this vector.

#### Returns

`number`

***

### length()

> **length**(): `number`

Defined in: [src/math/Vector2.ts:237](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L237)

Length of vector

#### Returns

`number`

***

### getAngle()

> **getAngle**(`target`): `number`

Defined in: [src/math/Vector2.ts:246](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L246)

Returns the Angle, in radians, between the current vector and the target vector.

#### Parameters

##### target

`Vector2`

Target vector

#### Returns

`number`

***

### unt()

> **unt**(): `this`

Defined in: [src/math/Vector2.ts:253](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L253)

Normalizes this vector to unit length. Mutates and returns this.

#### Returns

`this`

***

### angleTo()

> **angleTo**(`v`): `number`

Defined in: [src/math/Vector2.ts:261](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L261)

Returns the angle, in radians, from this vector to v.

#### Parameters

##### v

`Vector2`

#### Returns

`number`

***

### equals()

> **equals**(`a`): `boolean`

Defined in: [src/math/Vector2.ts:272](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L272)

Whether two vectors are equal

#### Parameters

##### a

`Vector2`

Vector of comparison

#### Returns

`boolean`

***

### pal()

> **pal**(`a`): `number`

Defined in: [src/math/Vector2.ts:278](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L278)

Tests parallelism with a: 1 if same direction, -1 if opposite, 0 otherwise.

#### Parameters

##### a

`Vector2`

#### Returns

`number`

***

### clone()

> **clone**(): `Vector2`

Defined in: [src/math/Vector2.ts:290](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L290)

Returns a new vector that has the same x and y as the current vector.

#### Returns

`Vector2`

***

### copy()

> **copy**(`v`): `this`

Defined in: [src/math/Vector2.ts:299](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L299)

Copy the x and y properties of the source vector to this vector

#### Parameters

##### v

`Vector2`

Source vector

#### Returns

`this`

***

### addScaledVector()

> **addScaledVector**(`v`, `size`): `Vector2`

Defined in: [src/math/Vector2.ts:311](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L311)

Add scaling vector

#### Parameters

##### v

`Vector2`

Source vector

##### size

`number`

Scale size

#### Returns

`Vector2`

***

### dot()

> **dot**(`value`): `number`

Defined in: [src/math/Vector2.ts:322](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L322)

Take the dot product of two vectors.

#### Parameters

##### value

`Vector2`

Target vector

#### Returns

`number`

***

### normalize()

> **normalize**(): `this`

Defined in: [src/math/Vector2.ts:329](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L329)

Convert this vector to a unit vector.

#### Returns

`this`

***

### addScalar()

> **addScalar**(`s`): `this`

Defined in: [src/math/Vector2.ts:341](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L341)

Add the scalar to the x and y of this vector.

#### Parameters

##### s

`number`

Additive scalar

#### Returns

`this`

***

### clampScalar()

> **clampScalar**(`minVal`, `maxVal`): `Vector2`

Defined in: [src/math/Vector2.ts:354](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L354)

#### Parameters

##### minVal

`number`

Component will be limited to the minimum value of

##### maxVal

`number`

The component will be limited to the maximum value of

#### Returns

`Vector2`

***

### addVectors()

> **addVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector2.ts:364](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L364)

Set this = a + b.

#### Parameters

##### a

`Vector2`

##### b

`Vector2`

#### Returns

`this`

***

### subVectors()

> **subVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector2.ts:369](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L369)

Set this = a - b.

#### Parameters

##### a

`Vector2`

##### b

`Vector2`

#### Returns

`this`

***

### multiplyVectors()

> **multiplyVectors**(`a`, `b`): `this`

Defined in: [src/math/Vector2.ts:374](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L374)

Set this = a * b component-wise.

#### Parameters

##### a

`Vector2`

##### b

`Vector2`

#### Returns

`this`

***

### negate()

> **negate**(): `this`

Defined in: [src/math/Vector2.ts:379](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L379)

Negate this vector. Canonical alias of [neg](#neg).

#### Returns

`this`

***

### lengthSq()

> **lengthSq**(): `number`

Defined in: [src/math/Vector2.ts:384](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L384)

Squared length.

#### Returns

`number`

***

### distanceTo()

> **distanceTo**(`v`): `number`

Defined in: [src/math/Vector2.ts:389](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L389)

Euclidean distance to v. Canonical alias of [distance](#distance).

#### Parameters

##### v

`Vector2`

#### Returns

`number`

***

### distanceToSquared()

> **distanceToSquared**(`v`): `number`

Defined in: [src/math/Vector2.ts:394](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L394)

Squared distance to v.

#### Parameters

##### v

`Vector2`

#### Returns

`number`

***

### lerp()

> **lerp**(`v`, `alpha`): `this`

Defined in: [src/math/Vector2.ts:401](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L401)

Linearly interpolate this towards v by alpha.

#### Parameters

##### v

`Vector2`

##### alpha

`number`

#### Returns

`this`

***

### lerpVectors()

> **lerpVectors**(`v1`, `v2`, `alpha`): `this`

Defined in: [src/math/Vector2.ts:408](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L408)

Set this = v1 + (v2 - v1) * alpha.

#### Parameters

##### v1

`Vector2`

##### v2

`Vector2`

##### alpha

`number`

#### Returns

`this`

***

### min()

> **min**(`v`): `this`

Defined in: [src/math/Vector2.ts:415](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L415)

Component-wise min/max/clamp.

#### Parameters

##### v

`Vector2`

#### Returns

`this`

***

### max()

> **max**(`v`): `this`

Defined in: [src/math/Vector2.ts:422](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L422)

Component-wise maximum with v. Mutates and returns this.

#### Parameters

##### v

`Vector2`

#### Returns

`this`

***

### clamp()

> **clamp**(`min`, `max`): `this`

Defined in: [src/math/Vector2.ts:429](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L429)

Component-wise clamp into [min, max]. Mutates and returns this.

#### Parameters

##### min

`Vector2`

##### max

`Vector2`

#### Returns

`this`

***

### floor()

> **floor**(): `this`

Defined in: [src/math/Vector2.ts:436](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L436)

Floors each component. Mutates and returns this.

#### Returns

`this`

***

### ceil()

> **ceil**(): `this`

Defined in: [src/math/Vector2.ts:443](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L443)

Ceils each component. Mutates and returns this.

#### Returns

`this`

***

### round()

> **round**(): `this`

Defined in: [src/math/Vector2.ts:450](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L450)

Rounds each component to the nearest integer. Mutates and returns this.

#### Returns

`this`

***

### roundToZero()

> **roundToZero**(): `this`

Defined in: [src/math/Vector2.ts:457](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L457)

Rounds each component toward zero. Mutates and returns this.

#### Returns

`this`

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [src/math/Vector2.ts:464](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L464)

Set x/y from array starting at offset. Mutates and returns this.

#### Parameters

##### array

`ArrayLike`\<`number`\>

##### offset?

`number` = `0`

#### Returns

`this`

***

### toArray()

> **toArray**(`array?`, `offset?`): `number`[]

Defined in: [src/math/Vector2.ts:471](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L471)

Write x/y into array starting at offset and return the array.

#### Parameters

##### array?

`number`[] = `[]`

##### offset?

`number` = `0`

#### Returns

`number`[]

***

### rotateAround()

> **rotateAround**(`center`, `angle`): `this`

Defined in: [src/math/Vector2.ts:478](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L478)

Rotate this around `center` by angle (radians).

#### Parameters

##### center

`Vector2`

##### angle

`number`

#### Returns

`this`

***

### random()

> **random**(): `this`

Defined in: [src/math/Vector2.ts:488](https://github.com/orillusion/orillusion/blob/main/src/math/Vector2.ts#L488)

Fill this with components in [0, 1). Mutates and returns this.

#### Returns

`this`
