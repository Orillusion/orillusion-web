[**@orillusion/core**](../README.md)

***

# Class: Cylindrical

Defined in: [src/math/Cylindrical.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L8)

Cylindrical coordinates (radius from the Y axis, azimuth `theta` around +Y
measured from +Z toward +X, height `y`). Same convention as three.js.

## Constructors

### Constructor

> **new Cylindrical**(`radius?`, `theta?`, `y?`): `Cylindrical`

Defined in: [src/math/Cylindrical.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L16)

#### Parameters

##### radius?

`number` = `1`

##### theta?

`number` = `0`

##### y?

`number` = `0`

#### Returns

`Cylindrical`

## Properties

### radius

> **radius**: `number`

Defined in: [src/math/Cylindrical.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L10)

Distance from the Y axis.

***

### theta

> **theta**: `number`

Defined in: [src/math/Cylindrical.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L12)

Azimuth around +Y from +Z, radians.

***

### y

> **y**: `number`

Defined in: [src/math/Cylindrical.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L14)

Height along Y.

## Methods

### set()

> **set**(`radius`, `theta`, `y`): `this`

Defined in: [src/math/Cylindrical.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L22)

#### Parameters

##### radius

`number`

##### theta

`number`

##### y

`number`

#### Returns

`this`

***

### copy()

> **copy**(`other`): `this`

Defined in: [src/math/Cylindrical.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L29)

#### Parameters

##### other

`Cylindrical`

#### Returns

`this`

***

### clone()

> **clone**(): `Cylindrical`

Defined in: [src/math/Cylindrical.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L33)

#### Returns

`Cylindrical`

***

### setFromVector3()

> **setFromVector3**(`v`): `this`

Defined in: [src/math/Cylindrical.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L37)

#### Parameters

##### v

[`Vector3`](Vector3.md)

#### Returns

`this`

***

### setFromCartesianCoords()

> **setFromCartesianCoords**(`x`, `y`, `z`): `this`

Defined in: [src/math/Cylindrical.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L41)

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

### toVector3()

> **toVector3**(`out?`): [`Vector3`](Vector3.md)

Defined in: [src/math/Cylindrical.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/math/Cylindrical.ts#L48)

#### Parameters

##### out?

[`Vector3`](Vector3.md) = `...`

#### Returns

[`Vector3`](Vector3.md)
