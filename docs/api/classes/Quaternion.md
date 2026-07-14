[**@orillusion/core**](../README.md)

***

# Class: Quaternion

Defined in: [src/math/Quaternion.ts:10](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L10)

Quaternions are used to represent rotations.

## Constructors

### Constructor

> **new Quaternion**(`x?`, `y?`, `z?`, `w?`): `Quaternion`

Defined in: [src/math/Quaternion.ts:46](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L46)

Create a new quaternion object

#### Parameters

##### x?

`number` = `0`

The X component of a quaternion.

##### y?

`number` = `0`

The Y component of a quaternion.

##### z?

`number` = `0`

The Z component of a quaternion.

##### w?

`number` = `1`

The W component of a quaternion.

#### Returns

`Quaternion`

## Properties

### HELP\_0

> `static` **HELP\_0**: `Quaternion`

Defined in: [src/math/Quaternion.ts:13](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L13)

Shared scratch quaternion for intermediate calculations.

***

### HELP\_1

> `static` **HELP\_1**: `Quaternion`

Defined in: [src/math/Quaternion.ts:15](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L15)

Shared scratch quaternion for intermediate calculations.

***

### HELP\_2

> `static` **HELP\_2**: `Quaternion`

Defined in: [src/math/Quaternion.ts:17](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L17)

Shared scratch quaternion for intermediate calculations.

***

### \_zero

> `static` **\_zero**: `Quaternion`

Defined in: [src/math/Quaternion.ts:19](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L19)

Shared identity quaternion (0, 0, 0, 1).

***

### CALCULATION\_QUATERNION

> `static` **CALCULATION\_QUATERNION**: `Quaternion`

Defined in: [src/math/Quaternion.ts:21](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L21)

Shared scratch quaternion used for rotation calculations.

## Accessors

### magnitude

#### Get Signature

> **get** **magnitude**(): `number`

Defined in: [src/math/Quaternion.ts:109](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L109)

The magnitude (norm) of this quaternion.

##### Returns

`number`

## Methods

### identity()

> `static` **identity**(): `Quaternion`

Defined in: [src/math/Quaternion.ts:57](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L57)

Identity quaternion

#### Returns

`Quaternion`

***

### quaternionToMatrix()

> `static` **quaternionToMatrix**(`q`, `m`): `void`

Defined in: [src/math/Quaternion.ts:66](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L66)

Converts quaternions to matrices

#### Parameters

##### q

`Quaternion`

Quaternion

##### m

`any`

Matrix

#### Returns

`void`

***

### set()

> **set**(`x?`, `y?`, `z?`, `w?`): `Quaternion`

Defined in: [src/math/Quaternion.ts:120](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L120)

Set the x, y, z, and w components of the existing quaternions.

#### Parameters

##### x?

`number` = `0`

The X component of a quaternion.

##### y?

`number` = `0`

The Y component of a quaternion.

##### z?

`number` = `0`

The Z component of a quaternion.

##### w?

`number` = `1`

The W component of a quaternion.

#### Returns

`Quaternion`

***

### divide()

> **divide**(`v`): `Quaternion`

Defined in: [src/math/Quaternion.ts:129](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L129)

Divide this quaternion by another quaternion (component-wise, new instance) or by a scalar (in place).

#### Parameters

##### v

`any`

#### Returns

`Quaternion`

***

### multiply()

> **multiply**(`qa`, `qb`): `this`

Defined in: [src/math/Quaternion.ts:157](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L157)

Multiply two quaternions

#### Parameters

##### qa

`Quaternion`

Quaternion 1

##### qb

`Quaternion`

Quaternion 2

#### Returns

`this`

***

### multiplyVector()

> **multiplyVector**(`vector`): `Quaternion`

Defined in: [src/math/Quaternion.ts:177](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L177)

Multiply this quaternion by a vector. Returns a new Quaternion.

#### Parameters

##### vector

[`Vector3`](Vector3.md)

#### Returns

`Quaternion`

***

### setFromAxisAngle()

> **setFromAxisAngle**(`axis`, `angle`): `this`

Defined in: [src/math/Quaternion.ts:194](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L194)

Set the quaternion with a given rotation of the axis and Angle.

#### Parameters

##### axis

[`Vector3`](Vector3.md)

axis

##### angle

`number`

angle

#### Returns

`this`

***

### toAxisAngle()

> **toAxisAngle**(`axis`): `number`

Defined in: [src/math/Quaternion.ts:213](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L213)

Turn quaternions into angles

#### Parameters

##### axis

[`Vector3`](Vector3.md)

axis

#### Returns

`number`

***

### slerp()

> **slerp**(`qa`, `qb`, `t`): `void`

Defined in: [src/math/Quaternion.ts:238](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L238)

Spherically interpolates between two quaternions, providing an interpolation between rotations with constant angle change rate.

#### Parameters

##### qa

`Quaternion`

The first quaternion to interpolate.

##### qb

`Quaternion`

The second quaternion to interpolate.

##### t

`number`

The interpolation weight, a value between 0 and 1.

#### Returns

`void`

***

### lerp()

> **lerp**(`qa`, `qb`, `t`): `void`

Defined in: [src/math/Quaternion.ts:288](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L288)

Linearly interpolates between two quaternions.

#### Parameters

##### qa

`Quaternion`

The first quaternion to interpolate.

##### qb

`Quaternion`

The second quaternion to interpolate.

##### t

`number`

The interpolation weight, a value between 0 and 1.

#### Returns

`void`

***

### setFromEuler()

> **setFromEuler**(`ax`, `ay`, `az`): `Quaternion`

Defined in: [src/math/Quaternion.ts:325](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L325)

Fills the quaternion object with values representing the given euler rotation.

#### Parameters

##### ax

`number`

The angle in radians of the rotation around the ax axis.

##### ay

`number`

The angle in radians of the rotation around the ay axis.

##### az

`number`

The angle in radians of the rotation around the az axis.

#### Returns

`Quaternion`

***

### setFromRotationMatrix()

> **setFromRotationMatrix**(`m`): `Quaternion`

Defined in: [src/math/Quaternion.ts:353](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L353)

Sets the current quaternion from the rotation matrix

#### Parameters

##### m

###### rawData

[`FloatArray`](../type-aliases/FloatArray.md)

#### Returns

`Quaternion`

***

### getEulerAngles()

> **getEulerAngles**(`eulers?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Quaternion.ts:404](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L404)

Get the Euler Angle

#### Parameters

##### eulers?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### normalize()

> **normalize**(`val?`): `this`

Defined in: [src/math/Quaternion.ts:443](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L443)

The normalize of the quaternion. Convert this quaternion to a normalize coefficient.

#### Parameters

##### val?

`number` = `1`

normalize coefficient, which is 1 by default

#### Returns

`this`

***

### toString()

> **toString**(): `string`

Defined in: [src/math/Quaternion.ts:457](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L457)

Returns the value of a quaternion as a string

#### Returns

`string`

***

### invert()

> **invert**(): `this`

Defined in: [src/math/Quaternion.ts:464](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L464)

Inverts this quaternion in place. Mutates and returns this.

#### Returns

`this`

***

### clone()

> **clone**(): `Quaternion`

Defined in: [src/math/Quaternion.ts:472](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L472)

Clones the quaternion.

#### Returns

`Quaternion`

An exact duplicate of the current Quaternion.

***

### transformVector()

> **transformVector**(`vector`): [`Vector3`](Vector3.md)

Defined in: [src/math/Quaternion.ts:479](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L479)

Rotates `vector` by this quaternion. Mutates and returns `vector`.

#### Parameters

##### vector

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### copy()

> **copy**(`q`): `this`

Defined in: [src/math/Quaternion.ts:487](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L487)

Copies the data from a quaternion into this instance.

#### Parameters

##### q

[`Vector3`](Vector3.md) \| `Quaternion`

The quaternion to copy from.

#### Returns

`this`

***

### mul()

> `static` **mul**(`lhs`, `rhs`, `result?`): `Quaternion`

Defined in: [src/math/Quaternion.ts:500](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L500)

from untiy API
op

#### Parameters

##### lhs

`Quaternion`

##### rhs

`Quaternion`

##### result?

`Quaternion`

#### Returns

`Quaternion`

***

### multiply()

> `static` **multiply**(`a`, `b`, `result?`): `Quaternion`

Defined in: [src/math/Quaternion.ts:516](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L516)

Canonical static multiply — alias of Quaternion.mul.

#### Parameters

##### a

`Quaternion`

##### b

`Quaternion`

##### result?

`Quaternion`

#### Returns

`Quaternion`

***

### invert()

> `static` **invert**(`src`, `result?`): `Quaternion`

Defined in: [src/math/Quaternion.ts:523](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L523)

Invert a quaternion.

#### Parameters

##### src

`Quaternion`

##### result?

`Quaternion`

#### Returns

`Quaternion`

***

### transformVector()

> `static` **transformVector**(`q`, `v`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Quaternion.ts:542](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L542)

Rotate a Vector3 by a Quaternion.

#### Parameters

##### q

`Quaternion`

##### v

[`Vector3`](Vector3.md)

##### result?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### serialize()

> `static` **serialize**(`value`): `Quaternion`

Defined in: [src/math/Quaternion.ts:569](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L569)

Returns a new Quaternion copy of the given quaternion, used for serialization.

#### Parameters

##### value

`Quaternion`

#### Returns

`Quaternion`

***

### multiplyQuaternions()

> **multiplyQuaternions**(`a`, `b`): `this`

Defined in: [src/math/Quaternion.ts:577](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L577)

Set this = a * b. Canonical alias of [multiply](#multiply-1).

#### Parameters

##### a

`Quaternion`

##### b

`Quaternion`

#### Returns

`this`

***

### premultiply()

> **premultiply**(`q`): `this`

Defined in: [src/math/Quaternion.ts:582](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L582)

Set this = q * this.

#### Parameters

##### q

`Quaternion`

#### Returns

`this`

***

### conjugate()

> **conjugate**(): `this`

Defined in: [src/math/Quaternion.ts:587](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L587)

Conjugate: negate (x, y, z). For a unit quaternion this equals the inverse.

#### Returns

`this`

***

### dot()

> **dot**(`q`): `number`

Defined in: [src/math/Quaternion.ts:595](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L595)

Dot product of this quaternion and q.

#### Parameters

##### q

`Quaternion`

#### Returns

`number`

***

### lengthSq()

> **lengthSq**(): `number`

Defined in: [src/math/Quaternion.ts:600](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L600)

Squared length (norm) of this quaternion.

#### Returns

`number`

***

### length()

> **length**(): `number`

Defined in: [src/math/Quaternion.ts:605](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L605)

Length (norm) of this quaternion.

#### Returns

`number`

***

### equals()

> **equals**(`q`): `boolean`

Defined in: [src/math/Quaternion.ts:610](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L610)

Returns true if every component of q exactly equals this quaternion.

#### Parameters

##### q

`Quaternion`

#### Returns

`boolean`

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [src/math/Quaternion.ts:615](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L615)

Set x/y/z/w from array starting at offset. Mutates and returns this.

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

Defined in: [src/math/Quaternion.ts:624](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L624)

Write x/y/z/w into array starting at offset and return the array.

#### Parameters

##### array?

`number`[] = `[]`

##### offset?

`number` = `0`

#### Returns

`number`[]

***

### setFromUnitVectors()

> **setFromUnitVectors**(`vFrom`, `vTo`): `this`

Defined in: [src/math/Quaternion.ts:633](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L633)

Set this = the rotation that takes unit vector vFrom to unit vector vTo.

#### Parameters

##### vFrom

[`Vector3`](Vector3.md)

##### vTo

[`Vector3`](Vector3.md)

#### Returns

`this`

***

### slerpQuaternions()

> **slerpQuaternions**(`qa`, `qb`, `t`): `this`

Defined in: [src/math/Quaternion.ts:658](https://github.com/orillusion/orillusion/blob/main/src/math/Quaternion.ts#L658)

Canonical alias of [slerp](#slerp) (qa, qb, t form).

#### Parameters

##### qa

`Quaternion`

##### qb

`Quaternion`

##### t

`number`

#### Returns

`this`
