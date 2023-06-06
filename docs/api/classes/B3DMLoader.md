# Class: B3DMLoader

## Hierarchy

- [`B3DMLoaderBase`](B3DMLoaderBase.md)

  ↳ **`B3DMLoader`**

### Constructors

- [constructor](B3DMLoader.md#constructor)

### Properties

- [adjustmentTransform](B3DMLoader.md#adjustmenttransform)

### Methods

- [parse](B3DMLoader.md#parse)
- [decodeText](B3DMLoader.md#decodetext)

## Constructors

### constructor

• **new B3DMLoader**()

#### Overrides

[B3DMLoaderBase](B3DMLoaderBase.md).[constructor](B3DMLoaderBase.md#constructor)

#### Defined in

[src/loader/parser/b3dm/B3DMLoader.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoader.ts#L14)

## Properties

### adjustmentTransform

• **adjustmentTransform**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/loader/parser/b3dm/B3DMLoader.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoader.ts#L10)

## Methods

### parse

▸ **parse**(`buffer`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`<`any`\>

#### Overrides

[B3DMLoaderBase](B3DMLoaderBase.md).[parse](B3DMLoaderBase.md#parse)

#### Defined in

[src/loader/parser/b3dm/B3DMLoader.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoader.ts#L20)

___

### decodeText

▸ `Static` **decodeText**(`array`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any` |

#### Returns

`string`

#### Defined in

[src/loader/parser/b3dm/B3DMLoader.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoader.ts#L64)
