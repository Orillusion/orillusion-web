# Class: HaltonSeq

https://en.wikipedia.org/wiki/Halton_sequence
https://baike.baidu.com/item/Halton%20sequence/16697800
Class for generating the Halton low-discrepancy series for Quasi Monte Carlo integration.

### Constructors

- [constructor](HaltonSeq.md#constructor)

### Methods

- [get](HaltonSeq.md#get)
- [getBase](HaltonSeq.md#getbase)
- [next](HaltonSeq.md#next)
- [get](HaltonSeq.md#get-1)

## Constructors

### constructor

• **new HaltonSeq**()

## Methods

### get

▸ `Static` **get**(`index`, `radix`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `radix` | `number` |

#### Returns

`number`

#### Defined in

[src/math/HaltonSeq.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/math/HaltonSeq.ts#L10)

___

### getBase

▸ **getBase**(`index`, `base`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `base` | `number` |

#### Returns

`void`

#### Defined in

[src/math/HaltonSeq.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/math/HaltonSeq.ts#L24)

___

### next

▸ **next**(): `void`

#### Returns

`void`

#### Defined in

[src/math/HaltonSeq.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/math/HaltonSeq.ts#L34)

___

### get

▸ **get**(): `number`

#### Returns

`number`

#### Defined in

[src/math/HaltonSeq.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/math/HaltonSeq.ts#L48)
