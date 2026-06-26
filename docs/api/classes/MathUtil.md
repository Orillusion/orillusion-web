[**@orillusion/core**](../README.md)

***

# Class: MathUtil

Defined in: [src/math/MathUtil.ts:44](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L44)

Built-in mathematical basic calculation factory function

## Constructors

### Constructor

> **new MathUtil**(): `MathUtil`

#### Returns

`MathUtil`

## Methods

### clampf()

> `static` **clampf**(`value`, `min_inclusive`, `max_inclusive`): `number`

Defined in: [src/math/MathUtil.ts:107](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L107)

Limit the value to a certain range

#### Parameters

##### value

`number`

Original value

##### min\_inclusive

`number`

minimum value

##### max\_inclusive

`number`

maximum value

#### Returns

`number`

Return the calculation result

***

### normalizeAngle()

> `static` **normalizeAngle**(`a`): `number`

Defined in: [src/math/MathUtil.ts:121](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L121)

Normalize the Angle so that it is limited to the range [-180, 180]

#### Parameters

##### a

`number`

Angle of input

#### Returns

`number`

Return the processing result

***

### fract()

> `static` **fract**(`v`): `number`

Defined in: [src/math/MathUtil.ts:136](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L136)

Returns the fractional part of a number

#### Parameters

##### v

`number`

input value

#### Returns

`number`

Return the result

***

### getRandDirXZ()

> `static` **getRandDirXZ**(`r`): `object`

Defined in: [src/math/MathUtil.ts:145](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L145)

Generate a random pair of x and z coordinates that fall within the radius of the circle

#### Parameters

##### r

`number`

radius

#### Returns

`object`

The generated x, z results

##### x

> **x**: `number`

##### z

> **z**: `number`

***

### getRandDirXYZ()

> `static` **getRandDirXYZ**(`r`): [`Vector3`](Vector3.md)

Defined in: [src/math/MathUtil.ts:158](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L158)

Generate a random pair of x, y, and z coordinates that fall within the radius of the sphere

#### Parameters

##### r

`number`

radius

#### Returns

[`Vector3`](Vector3.md)

The Vector3 vector formed by the generated x, y, and z coordinate values

***

### getCycleXYZ()

> `static` **getCycleXYZ**(`r`): [`Vector3`](Vector3.md)

Defined in: [src/math/MathUtil.ts:172](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L172)

According to the radius, generate a random pair of x, y, z coordinates that fall within the sphere and the y value is between [-r/2, r/2]

#### Parameters

##### r

`number`

radius

#### Returns

[`Vector3`](Vector3.md)

The Vector3 vector formed by the generated x, y, and z coordinate values

***

### angle()

> `static` **angle**(`p1`, `p2`): `number`

Defined in: [src/math/MathUtil.ts:187](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L187)

Calculate the Angle between two vectors

#### Parameters

##### p1

[`Vector3`](Vector3.md)

Vector 1

##### p2

[`Vector3`](Vector3.md)

Vector 2

#### Returns

`number`

Return the calculation result

***

### angle\_360()

> `static` **angle\_360**(`from`, `to`): `number`

Defined in: [src/math/MathUtil.ts:203](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L203)

Calculate the Angle between two vectors

#### Parameters

##### from

[`Vector3`](Vector3.md)

Vector 1

##### to

[`Vector3`](Vector3.md)

Vector 2

#### Returns

`number`

The Angle between two vectors

***

### fromToRotation()

> `static` **fromToRotation**(`fromDirection`, `toDirection`, `target?`): [`Quaternion`](Quaternion.md)

Defined in: [src/math/MathUtil.ts:231](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L231)

Calculate the quaternion from one direction to the other

#### Parameters

##### fromDirection

[`Vector3`](Vector3.md)

Initial direction

##### toDirection

[`Vector3`](Vector3.md)

The transformed direction

##### target?

[`Quaternion`](Quaternion.md) = `null`

The calculated quaternion is null by default and the result is returned

#### Returns

[`Quaternion`](Quaternion.md)

Quaternion The calculated quaternion returns a new instance created if target is null

***

### getEularDir\_yUp()

> `static` **getEularDir\_yUp**(`v`): [`Vector3`](Vector3.md)

Defined in: [src/math/MathUtil.ts:244](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L244)

Get the Eular direction

#### Parameters

##### v

`number`

input value

#### Returns

[`Vector3`](Vector3.md)

Return the calculation result

***

### transformVector()

> `static` **transformVector**(`matrix`, `vector`, `result?`): [`Vector3`](Vector3.md)

Defined in: [src/math/MathUtil.ts:258](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L258)

Compute the vector transformation and assign the results to the input variables

#### Parameters

##### matrix

[`Matrix4`](Matrix4.md)

transformation matrix

##### vector

[`Vector3`](Vector3.md)

Original vector

##### result?

[`Vector3`](Vector3.md) = `null`

output vector

#### Returns

[`Vector3`](Vector3.md)

Returns the output vector

***

### getRotationY()

> **getRotationY**(`v`): `number`

Defined in: [src/math/MathUtil.ts:219](https://github.com/orillusion/orillusion/blob/main/src/math/MathUtil.ts#L219)

The rotation Angle around the Y-axis is obtained from the input vector

#### Parameters

##### v

[`Vector3`](Vector3.md)

input vector

#### Returns

`number`

Return the calculation result
