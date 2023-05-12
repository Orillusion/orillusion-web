# Class: B3DMParser

## Hierarchy

- `ParserBase`

  ↳ **`B3DMParser`**


### Properties

- [format](B3DMParser.md#format)
- [baseUrl](B3DMParser.md#baseurl)
- [initUrl](B3DMParser.md#initurl)
- [loaderFunctions](B3DMParser.md#loaderfunctions)
- [userData](B3DMParser.md#userdata)
- [data](B3DMParser.md#data)

### Constructors

- [constructor](B3DMParser.md#constructor)

### Methods

- [parseBuffer](B3DMParser.md#parsebuffer)
- [verification](B3DMParser.md#verification)
- [parserString](B3DMParser.md#parserstring)
- [parserJson](B3DMParser.md#parserjson)
- [parserTexture](B3DMParser.md#parsertexture)
- [parse](B3DMParser.md#parse)

## Properties

### format

▪ `Static` **format**: `string` = `'bin'`

#### Overrides

ParserBase.format

#### Defined in

[src/loader/parser/B3DMParser.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L5)

___

### baseUrl

• **baseUrl**: `string`

#### Inherited from

ParserBase.baseUrl

#### Defined in

[src/loader/parser/ParserBase.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L10)

___

### initUrl

• **initUrl**: `string`

#### Inherited from

ParserBase.initUrl

#### Defined in

[src/loader/parser/ParserBase.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L11)

___

### loaderFunctions

• `Optional` **loaderFunctions**: [`LoaderFunctions`](../types/LoaderFunctions.md)

#### Inherited from

ParserBase.loaderFunctions

#### Defined in

[src/loader/parser/ParserBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L12)

___

### userData

• `Optional` **userData**: `any`

#### Inherited from

ParserBase.userData

#### Defined in

[src/loader/parser/ParserBase.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L13)

___

### data

• **data**: `any`

#### Inherited from

ParserBase.data

#### Defined in

[src/loader/parser/ParserBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L14)

## Constructors

### constructor

• **new B3DMParser**()

#### Inherited from

ParserBase.constructor

## Methods

### parseBuffer

▸ **parseBuffer**(`buffer`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`<`void`\>

#### Overrides

ParserBase.parseBuffer

#### Defined in

[src/loader/parser/B3DMParser.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L7)

___

### verification

▸ **verification**(): `boolean`

Verify parsing validity

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/loader/parser/B3DMParser.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L18)

___

### parserString

▸ **parserString**(`str`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`void`

#### Inherited from

ParserBase.parserString

#### Defined in

[src/loader/parser/ParserBase.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L16)

___

### parserJson

▸ **parserJson**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

`void`

#### Inherited from

ParserBase.parserJson

#### Defined in

[src/loader/parser/ParserBase.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L18)

___

### parserTexture

▸ **parserTexture**(`buffer`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

ParserBase.parserTexture

#### Defined in

[src/loader/parser/ParserBase.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L22)

___

### parse

▸ **parse**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

ParserBase.parse

#### Defined in

[src/loader/parser/ParserBase.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L26)
