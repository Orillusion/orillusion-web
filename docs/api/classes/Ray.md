[**@orillusion/core**](../README.md)

***

# Class: Ray

Defined in: [src/math/Ray.ts:11](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L11)

Ray

## Constructors

### Constructor

> **new Ray**(`origin?`, `dir?`): `Ray`

Defined in: [src/math/Ray.ts:34](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L34)

Build a new ray object

#### Parameters

##### origin?

[`Vector3`](Vector3.md)

Ray starting point

##### dir?

[`Vector3`](Vector3.md)

Ray direction

#### Returns

`Ray`

## Properties

### origin

> **origin**: [`Vector3`](Vector3.md)

Defined in: [src/math/Ray.ts:16](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L16)

Ray starting point

***

### length

> **length**: `number` = `Number.MAX_VALUE`

Defined in: [src/math/Ray.ts:21](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L21)

length

## Accessors

### direction

#### Get Signature

> **get** **direction**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Ray.ts:43](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L43)

Ray direction

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **direction**(`dir`): `void`

Defined in: [src/math/Ray.ts:50](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L50)

Set the ray direction (normalized internally)

##### Parameters

###### dir

[`Vector3`](Vector3.md)

##### Returns

`void`

## Methods

### clone()

> **clone**(): `Ray`

Defined in: [src/math/Ray.ts:59](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L59)

Clone a new Ray object

#### Returns

`Ray`

***

### intersectBox()

> **intersectBox**(`box`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Ray.ts:78](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L78)

Compute the intersection point of this ray with a bounding box

#### Parameters

##### box

`IBound`

bounding box

##### target?

[`Vector3`](Vector3.md)

optional output point

#### Returns

[`Vector3`](Vector3.md)

the intersection point, or null if there is none

***

### pointAt()

> **pointAt**(`t`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Ray.ts:129](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L129)

Calculate a point on the ray

#### Parameters

##### t

`number`

Length scalar

##### target?

[`Vector3`](Vector3.md)

output target

#### Returns

[`Vector3`](Vector3.md)

result

***

### copy()

> **copy**(`src`): `this`

Defined in: [src/math/Ray.ts:142](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L142)

Sets the ray to be a copy of the original ray

#### Parameters

##### src

`Ray`

Ray object source

#### Returns

`this`

New ray object

***

### setApproxDirection()

> **setApproxDirection**(`dir`): `void`

Defined in: [src/math/Ray.ts:154](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L154)

Fast to the approximate ray direction

#### Parameters

##### dir

[`Vector3`](Vector3.md)

direction

#### Returns

`void`

***

### setOrigin()

> **setOrigin**(`origin`): `void`

Defined in: [src/math/Ray.ts:162](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L162)

Set ray origin

#### Parameters

##### origin

[`Vector3`](Vector3.md)

ray origin

#### Returns

`void`

***

### getOrigin()

> **getOrigin**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Ray.ts:169](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L169)

Get ray origin

#### Returns

[`Vector3`](Vector3.md)

***

### getPoint()

> **getPoint**(`t`): [`Vector3`](Vector3.md)

Defined in: [src/math/Ray.ts:178](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L178)

Gets the point at the specified position on the ray

#### Parameters

##### t

`number`

Length position

#### Returns

[`Vector3`](Vector3.md)

Returns a point at the specified location

***

### sqrDistToPoint()

> **sqrDistToPoint**(`P`): `number`

Defined in: [src/math/Ray.ts:188](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L188)

Calculate the distance from a point

#### Parameters

##### P

[`Vector3`](Vector3.md)

Specify Point

#### Returns

`number`

result

***

### applyMatrix()

> **applyMatrix**(`mat4`): `void`

Defined in: [src/math/Ray.ts:204](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L204)

Applied matrix transformation

#### Parameters

##### mat4

[`Matrix4`](Matrix4.md)

matrix

#### Returns

`void`

***

### pointInTriangle()

> **pointInTriangle**(`P`, `A`, `B`, `C`): `boolean`

Defined in: [src/math/Ray.ts:221](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L221)

Calculates whether a specified point is inside a triangle

#### Parameters

##### P

[`Vector3`](Vector3.md)

point

##### A

[`Vector3`](Vector3.md)

Triangle vertex 1

##### B

[`Vector3`](Vector3.md)

Triangle vertex 2

##### C

[`Vector3`](Vector3.md)

Triangle vertex 3

#### Returns

`boolean`

whether it is inside a triangle

***

### intersectTriangle()

> **intersectTriangle**(`orig`, `dir`, `face`): [`Vector3`](Vector3.md)

Defined in: [src/math/Ray.ts:266](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L266)

Determine whether a ray intersects a triangle

#### Parameters

##### orig

[`Vector3`](Vector3.md)

Ray starting point

##### dir

[`Vector3`](Vector3.md)

Ray direction

##### face

`Triangle`

triangle

#### Returns

[`Vector3`](Vector3.md)

point of intersection

***

### intersectSphere()

> **intersectSphere**(`o`, `dir`, `center`, `radius`): [`Vector3`](Vector3.md)

Defined in: [src/math/Ray.ts:329](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L329)

Determine whether a ray intersects the sphere

#### Parameters

##### o

[`Vector3`](Vector3.md)

Ray starting point

##### dir

[`Vector3`](Vector3.md)

Ray direction

##### center

[`Vector3`](Vector3.md)

Sphere center

##### radius

`number`

radius of sphericity

#### Returns

[`Vector3`](Vector3.md)

point of intersection

***

### intersectionSegment()

> **intersectionSegment**(`sega`, `segb`, `threshold`): `object`

Defined in: [src/math/Ray.ts:361](https://github.com/orillusion/orillusion/blob/main/src/math/Ray.ts#L361)

A test of the intersection between a ray and 
a given line segment within a given tolerance (threshold)

#### Parameters

##### sega

[`Vector3`](Vector3.md)

The first point of a line segment used to test the intersection

##### segb

[`Vector3`](Vector3.md)

The second point of a line segment used to test the intersection

##### threshold

`number`

Margin, if the ray does not intersect the line segment but is close to the given threshold, the intersection is successful

#### Returns

`object`

If there is an intersection, then the distance from the ray origin to the intersection, if there is no intersection, is -1

##### out

> **out**: [`Vector3`](Vector3.md)

##### length

> **length**: `number`
