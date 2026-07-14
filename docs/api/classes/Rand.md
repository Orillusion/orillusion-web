[**@orillusion/core**](../README.md)

***

# Class: Rand

Defined in: [src/math/Rand.ts:8](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L8)

'Rand' is a random number generator based on an improved xorshift algorithm, 
which is a modification of the Linear Congruential Generator (LCG) method.

## Constructors

### Constructor

> **new Rand**(`seed?`): `Rand`

Defined in: [src/math/Rand.ts:18](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L18)

Create a random number generator object with a specified seed.

#### Parameters

##### seed?

`number` = `0`

Random seed

#### Returns

`Rand`

## Accessors

### seed

#### Get Signature

> **get** **seed**(): `number`

Defined in: [src/math/Rand.ts:25](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L25)

Random seed

##### Returns

`number`

#### Set Signature

> **set** **seed**(`value`): `void`

Defined in: [src/math/Rand.ts:32](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L32)

Set the random seed and reinitialize the generator state

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### getFloatFromInt()

> `static` **getFloatFromInt**(`value`): `number`

Defined in: [src/math/Rand.ts:44](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L44)

Convert an integer to a floating-point number

#### Parameters

##### value

`any`

integer

#### Returns

`number`

***

### getByteFromInt()

> `static` **getByteFromInt**(`value`): `number`

Defined in: [src/math/Rand.ts:54](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L54)

Converts an integer to a single-byte integer

#### Parameters

##### value

`any`

integer

#### Returns

`number`

***

### clone()

> **clone**(): `Rand`

Defined in: [src/math/Rand.ts:64](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L64)

Returns a new random number generator object with the same seed state as 
the current random number generator object

#### Returns

`Rand`

***

### get()

> **get**(): `number`

Defined in: [src/math/Rand.ts:77](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L77)

Generate a random number

#### Returns

`number`

***

### getFloat()

> **getFloat**(): `number`

Defined in: [src/math/Rand.ts:89](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L89)

Randomly generate a floating-point number 0.0 to 1.0

#### Returns

`number`

***

### getSignedFloat()

> **getSignedFloat**(): `number`

Defined in: [src/math/Rand.ts:97](https://github.com/orillusion/orillusion/blob/main/src/math/Rand.ts#L97)

Randomly generates signed floating-point numbers -1.0 to 1.0

#### Returns

`number`
