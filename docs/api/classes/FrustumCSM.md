[**@orillusion/core**](../README.md)

***

# Class: FrustumCSM

Defined in: [src/core/csm/FrustumCSM.ts:98](https://github.com/orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L98)

Splits a camera frustum into cascaded sub-frustums for Cascaded Shadow Maps,
each with its own bounding volume and shadow camera.

## Constructors

### Constructor

> **new FrustumCSM**(`blockCount`): `FrustumCSM`

Defined in: [src/core/csm/FrustumCSM.ts:103](https://github.com/orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L103)

#### Parameters

##### blockCount

`number`

#### Returns

`FrustumCSM`

## Properties

### sections

> **sections**: `FrustumSection`[]

Defined in: [src/core/csm/FrustumCSM.ts:99](https://github.com/orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L99)

***

### children

> **children**: `FrustumChild`[]

Defined in: [src/core/csm/FrustumCSM.ts:100](https://github.com/orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L100)

***

### name

> **name**: `string`

Defined in: [src/core/csm/FrustumCSM.ts:101](https://github.com/orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L101)

## Methods

### update()

> **update**(`p`, `pvInv`, `near`, `far`, `shadowSetting`, `splitFunction?`): `this`

Defined in: [src/core/csm/FrustumCSM.ts:116](https://github.com/orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L116)

#### Parameters

##### p

[`Matrix4`](Matrix4.md)

##### pvInv

[`Matrix4`](Matrix4.md)

##### near

`number`

##### far

`number`

##### shadowSetting

[`ShadowSetting`](../type-aliases/ShadowSetting.md)

##### splitFunction?

(`near`, `far`, `index`, `max`) => `number`

#### Returns

`this`

***

### squareSplit()

> `static` **squareSplit**(`near`, `far`, `index`, `max`): `number`

Defined in: [src/core/csm/FrustumCSM.ts:154](https://github.com/orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L154)

#### Parameters

##### near

`number`

##### far

`number`

##### index

`number`

##### max

`number`

#### Returns

`number`

***

### uniformSplit()

> `static` **uniformSplit**(`near`, `far`, `index`, `max`): `number`

Defined in: [src/core/csm/FrustumCSM.ts:159](https://github.com/orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L159)

#### Parameters

##### near

`number`

##### far

`number`

##### index

`number`

##### max

`number`

#### Returns

`number`

***

### logSplit()

> `static` **logSplit**(`near`, `far`, `index`, `max`): `number`

Defined in: [src/core/csm/FrustumCSM.ts:164](https://github.com/orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L164)

#### Parameters

##### near

`number`

##### far

`number`

##### index

`number`

##### max

`number`

#### Returns

`number`
