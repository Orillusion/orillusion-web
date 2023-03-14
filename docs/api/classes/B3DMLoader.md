# Class: B3DMLoader

## Hierarchy

- [`B3DMLoaderBase`](B3DMLoaderBase.md)

  ↳ **`B3DMLoader`**


### Properties

- [adjustmentTransform](B3DMLoader.md#adjustmenttransform)

### Constructors

- [constructor](B3DMLoader.md#constructor)

### Methods

- [parse](B3DMLoader.md#parse)
- [decodeText](B3DMLoader.md#decodetext)

## Properties

### adjustmentTransform

• **adjustmentTransform**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/loader/parser/b3dm/B3DMLoader.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/b3dm/B3DMLoader.ts#L7)

## Constructors

### constructor

• **new B3DMLoader**()

#### Overrides

[B3DMLoaderBase](B3DMLoaderBase.md).[constructor](B3DMLoaderBase.md#constructor)

#### Defined in

[src/engine/loader/parser/b3dm/B3DMLoader.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/b3dm/B3DMLoader.ts#L11)

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

[src/engine/loader/parser/b3dm/B3DMLoader.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/b3dm/B3DMLoader.ts#L17)

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

[src/engine/loader/parser/b3dm/B3DMLoader.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/b3dm/B3DMLoader.ts#L61)
