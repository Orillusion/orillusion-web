[**@orillusion/core**](../README.md)

***

# Class: HaltonSeq

Defined in: [src/math/HaltonSeq.ts:7](https://github.com/orillusion/orillusion/blob/main/src/math/HaltonSeq.ts#L7)

https://en.wikipedia.org/wiki/Halton_sequence
https://baike.baidu.com/item/Halton%20sequence/16697800
Class for generating the Halton low-discrepancy series for Quasi Monte Carlo integration.

## Constructors

### Constructor

> **new HaltonSeq**(): `HaltonSeq`

#### Returns

`HaltonSeq`

## Methods

### get()

> `static` **get**(`index`, `radix`): `number`

Defined in: [src/math/HaltonSeq.ts:12](https://github.com/orillusion/orillusion/blob/main/src/math/HaltonSeq.ts#L12)

Computes the Halton sequence value at the given index for the given radix (base).

#### Parameters

##### index

`number`

##### radix

`number`

#### Returns

`number`

***

### getBase()

> **getBase**(`index`, `base`): `void`

Defined in: [src/math/HaltonSeq.ts:27](https://github.com/orillusion/orillusion/blob/main/src/math/HaltonSeq.ts#L27)

Computes the Halton value at the given index for the given base and stores it as the current value.

#### Parameters

##### index

`number`

##### base

`number`

#### Returns

`void`

***

### next()

> **next**(): `void`

Defined in: [src/math/HaltonSeq.ts:38](https://github.com/orillusion/orillusion/blob/main/src/math/HaltonSeq.ts#L38)

Advances the sequence to the next value incrementally.

#### Returns

`void`

***

### get()

> **get**(): `number`

Defined in: [src/math/HaltonSeq.ts:53](https://github.com/orillusion/orillusion/blob/main/src/math/HaltonSeq.ts#L53)

Returns the current value of the sequence.

#### Returns

`number`
