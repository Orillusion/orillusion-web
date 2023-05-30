# Class: Rand

'Rand' is a random number generator based on an improved xorshift algorithm, 
which is a modification of the Linear Congruential Generator (LCG) method.

### Constructors

- [constructor](Rand.md#constructor)

### Accessors

- [seed](Rand.md#seed)

### Methods

- [getFloatFromInt](Rand.md#getfloatfromint)
- [getByteFromInt](Rand.md#getbytefromint)
- [clone](Rand.md#clone)
- [get](Rand.md#get)
- [getFloat](Rand.md#getfloat)
- [getSignedFloat](Rand.md#getsignedfloat)

## Constructors

### constructor

• **new Rand**(`seed?`)

Create a random number generator object with a specified seed.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `seed` | `number` | `0` | Random seed |

#### Defined in

[src/math/Rand.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/Rand.ts#L18)

## Accessors

### seed

• `get` **seed**(): `number`

Random seed

#### Returns

`number`

#### Defined in

[src/math/Rand.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/math/Rand.ts#L25)

• `set` **seed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Rand.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/math/Rand.ts#L29)

## Methods

### getFloatFromInt

▸ `Static` **getFloatFromInt**(`value`): `number`

Convert an integer to a floating-point number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | integer |

#### Returns

`number`

#### Defined in

[src/math/Rand.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/Rand.ts#L41)

___

### getByteFromInt

▸ `Static` **getByteFromInt**(`value`): `number`

Converts an integer to a single-byte integer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | integer |

#### Returns

`number`

#### Defined in

[src/math/Rand.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/math/Rand.ts#L51)

___

### clone

▸ **clone**(): [`Rand`](Rand.md)

Returns a new random number generator object with the same seed state as 
the current random number generator object

#### Returns

[`Rand`](Rand.md)

#### Defined in

[src/math/Rand.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/math/Rand.ts#L61)

___

### get

▸ **get**(): `number`

Generate a random number

#### Returns

`number`

#### Defined in

[src/math/Rand.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/math/Rand.ts#L74)

___

### getFloat

▸ **getFloat**(): `number`

Randomly generate a floating-point number 0.0 to 1.0

#### Returns

`number`

#### Defined in

[src/math/Rand.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/math/Rand.ts#L86)

___

### getSignedFloat

▸ **getSignedFloat**(): `number`

Randomly generates signed floating-point numbers -1.0 to 1.0

#### Returns

`number`

#### Defined in

[src/math/Rand.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/math/Rand.ts#L94)
