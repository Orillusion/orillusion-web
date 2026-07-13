[**@orillusion/core**](../README.md)

***

# Class: Plane3D

Defined in: [src/math/Plane3D.ts:9](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L9)

Plane3D represents a plane in 3D space.
It is composed of four coefficients (a, b, c, d) defining the plane equation Ax + By + Cz + D = 0.

## Constructors

### Constructor

> **new Plane3D**(`a?`, `b?`, `c?`, `d?`): `Plane3D`

Defined in: [src/math/Plane3D.ts:68](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L68)

#### Parameters

##### a?

`number` = `0`

##### b?

`number` = `0`

##### c?

`number` = `0`

##### d?

`number` = `0`

#### Returns

`Plane3D`

#### Language

en_US
Create a Plane3D with ABCD coefficients

#### Platform

Web,Native

## Properties

### a

> **a**: `number`

Defined in: [src/math/Plane3D.ts:15](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L15)

#### Language

en_US
The A coefficient of this plane. (Also the x dimension of the plane normal)

#### Platform

Web,Native

***

### b

> **b**: `number`

Defined in: [src/math/Plane3D.ts:22](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L22)

#### Language

en_US
The B coefficient of this plane. (Also the y dimension of the plane normal)

#### Platform

Web,Native

***

### c

> **c**: `number`

Defined in: [src/math/Plane3D.ts:29](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L29)

#### Language

en_US
The C coefficient of this plane. (Also the z dimension of the plane normal)

#### Platform

Web,Native

***

### d

> **d**: `number`

Defined in: [src/math/Plane3D.ts:36](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L36)

#### Language

en_US
The D coefficient of this plane. (Also the inverse dot product between normal and point)

#### Platform

Web,Native

***

### ALIGN\_ANY

> `static` **ALIGN\_ANY**: `number` = `0`

Defined in: [src/math/Plane3D.ts:42](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L42)

Plane alignment: not aligned to any principal axis plane.

***

### ALIGN\_XY\_AXIS

> `static` **ALIGN\_XY\_AXIS**: `number` = `1`

Defined in: [src/math/Plane3D.ts:47](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L47)

Plane alignment: aligned to the XY axis plane.

***

### ALIGN\_YZ\_AXIS

> `static` **ALIGN\_YZ\_AXIS**: `number` = `2`

Defined in: [src/math/Plane3D.ts:52](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L52)

Plane alignment: aligned to the YZ axis plane.

***

### ALIGN\_XZ\_AXIS

> `static` **ALIGN\_XZ\_AXIS**: `number` = `3`

Defined in: [src/math/Plane3D.ts:57](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L57)

Plane alignment: aligned to the XZ axis plane.

## Methods

### setTo()

> **setTo**(`a?`, `b?`, `c?`, `d?`): `void`

Defined in: [src/math/Plane3D.ts:84](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L84)

#### Parameters

##### a?

`number` = `0`

##### b?

`number` = `0`

##### c?

`number` = `0`

##### d?

`number` = `0`

#### Returns

`void`

#### Language

en_US
Fill the plane coefficients with the provided values.

#### Platform

Web,Native

***

### fromPoints()

> **fromPoints**(`p0`, `p1`, `p2`): `void`

Defined in: [src/math/Plane3D.ts:99](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L99)

#### Parameters

##### p0

[`Vector3`](Vector3.md)

Vector3

##### p1

[`Vector3`](Vector3.md)

Vector3

##### p2

[`Vector3`](Vector3.md)

Vector3

#### Returns

`void`

#### Language

en_US
Fills this Plane3D with the coefficients from 3 points in 3d space.

#### Platform

Web,Native

***

### fromNormalAndPoint()

> **fromNormalAndPoint**(`normal`, `point`): `void`

Defined in: [src/math/Plane3D.ts:121](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L121)

#### Parameters

##### normal

[`Vector3`](Vector3.md)

Vector3

##### point

[`Vector3`](Vector3.md)

Vector3

#### Returns

`void`

#### Language

en_US
Fills this Plane3D with the coefficients from the plane's normal and a point in 3d space.

#### Platform

Web,Native

***

### normalize()

> **normalize**(): `number`

Defined in: [src/math/Plane3D.ts:134](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L134)

#### Returns

`number`

number the length of the plane normal before normalization

#### Language

en_US
Normalize this Plane3D

#### Platform

Web,Native

***

### distance()

> **distance**(`p`): `number`

Defined in: [src/math/Plane3D.ts:154](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L154)

#### Parameters

##### p

[`Vector3`](Vector3.md)

Vector3

#### Returns

`number`

number

#### Language

en_US
Returns the signed distance between this Plane3D and the point p.

#### Platform

Web,Native

***

### classifyPoint()

> **classifyPoint**(`p`, `epsilon?`): `number`

Defined in: [src/math/Plane3D.ts:168](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L168)

#### Parameters

##### p

[`Vector3`](Vector3.md)

Vector3

##### epsilon?

`number` = `0.01`

tolerance

#### Returns

`number`

Plane3D.FRONT — point is in front of the plane;
Plane3D.BACK — point is behind the plane;
Plane3D.INTERSECT — point lies on the plane.

#### Language

en_US
Classify a point against this Plane3D. (in front, back or intersecting)

#### Platform

Web,Native

***

### toString()

> **toString**(): `string`

Defined in: [src/math/Plane3D.ts:188](https://github.com/orillusion/orillusion/blob/main/src/math/Plane3D.ts#L188)

#### Returns

`string`

string

#### Language

en_US
Returns a string representation of this Plane3D

#### Platform

Web,Native
