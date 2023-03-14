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

[src/engine/loader/parser/B3DMParser.ts:4](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/B3DMParser.ts#L4)

___

### baseUrl

• **baseUrl**: `string`

#### Inherited from

ParserBase.baseUrl

#### Defined in

[src/engine/loader/parser/ParserBase.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L9)

___

### initUrl

• **initUrl**: `string`

#### Inherited from

ParserBase.initUrl

#### Defined in

[src/engine/loader/parser/ParserBase.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L10)

___

### loaderFunctions

• `Optional` **loaderFunctions**: [`LoaderFunctions`](../types/LoaderFunctions.md)

#### Inherited from

ParserBase.loaderFunctions

#### Defined in

[src/engine/loader/parser/ParserBase.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L11)

___

### userData

• `Optional` **userData**: `any`

#### Inherited from

ParserBase.userData

#### Defined in

[src/engine/loader/parser/ParserBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L12)

___

### data

• **data**: `any`

#### Inherited from

ParserBase.data

#### Defined in

[src/engine/loader/parser/ParserBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L25)

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

[src/engine/loader/parser/B3DMParser.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/B3DMParser.ts#L6)

___

### verification

▸ **verification**(): `boolean`

验证解析有效性

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/engine/loader/parser/B3DMParser.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/B3DMParser.ts#L17)

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

[src/engine/loader/parser/ParserBase.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L13)

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

[src/engine/loader/parser/ParserBase.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L15)

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

[src/engine/loader/parser/ParserBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L19)

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

[src/engine/loader/parser/ParserBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L23)
