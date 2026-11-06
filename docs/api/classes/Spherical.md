[**@orillusion/core**](../README.md)

***

# Class: Spherical

Defined in: [src/math/Spherical.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L12)

Spherical coordinates (radius, polar angle `phi` from +Y, azimuth `theta`
around +Y measured from +Z). Same convention as three.js `Spherical`, and
what `OrbitController` uses to orbit a target.

## Constructors

### Constructor

> **new Spherical**(`radius?`, `phi?`, `theta?`): `Spherical`

Defined in: [src/math/Spherical.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L22)

#### Parameters

##### radius?

`number` = `1`

##### phi?

`number` = `0`

##### theta?

`number` = `0`

#### Returns

`Spherical`

## Properties

### radius

> **radius**: `number`

Defined in: [src/math/Spherical.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L14)

Distance from the origin.

***

### phi

> **phi**: `number`

Defined in: [src/math/Spherical.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L16)

Polar angle from the +Y axis, radians, 0..π.

***

### theta

> **theta**: `number`

Defined in: [src/math/Spherical.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L18)

Azimuth around +Y measured from +Z toward +X, radians.

***

### coords

> **coords**: [`Vector3`](Vector3.md)

Defined in: [src/math/Spherical.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L20)

Scratch vector returned by `getCoords()`.

## Methods

### set()

> **set**(`radius`, `phi`, `theta`): `this`

Defined in: [src/math/Spherical.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L29)

#### Parameters

##### radius

`number`

##### phi

`number`

##### theta

`number`

#### Returns

`this`

***

### copy()

> **copy**(`other`): `this`

Defined in: [src/math/Spherical.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L36)

#### Parameters

##### other

`Spherical`

#### Returns

`this`

***

### clone()

> **clone**(): `Spherical`

Defined in: [src/math/Spherical.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L40)

#### Returns

`Spherical`

***

### makeSafe()

> **makeSafe**(): `this`

Defined in: [src/math/Spherical.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L45)

Keep `phi` strictly inside (0, π) so the up vector never degenerates.

#### Returns

`this`

***

### setFromVector3()

> **setFromVector3**(`v`): `this`

Defined in: [src/math/Spherical.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L50)

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`this`

***

### setCoords()

> **setCoords**(`x`, `y`, `z`): `this`

Defined in: [src/math/Spherical.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L55)

Set from cartesian coordinates.

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`this`

***

### setFromCartesianCoords()

> **setFromCartesianCoords**(`x`, `y`, `z`): `this`

Defined in: [src/math/Spherical.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L68)

three.js-compatible alias of `setCoords`.

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`this`

***

### getCoords()

> **getCoords**(): [`Vector3`](Vector3.md)

Defined in: [src/math/Spherical.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L73)

Cartesian position, written into the shared `coords` scratch vector.

#### Returns

[`Vector3`](Vector3.md)

***

### toVector3()

> **toVector3**(`out?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Spherical.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/math/Spherical.ts#L78)

Cartesian position written into `out` (no shared state).

#### Parameters

##### out?

[`Vector3`](Vector3.md) = `...`

#### Returns

[`Vector3`](Vector3.md)
