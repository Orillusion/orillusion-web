# Class: I3DMParser

## Hierarchy

- `ParserBase`

  ↳ **`I3DMParser`**


### Properties

- [format](I3DMParser.md#format)
- [baseUrl](I3DMParser.md#baseurl)
- [initUrl](I3DMParser.md#initurl)
- [loaderFunctions](I3DMParser.md#loaderfunctions)
- [userData](I3DMParser.md#userdata)
- [data](I3DMParser.md#data)

### Constructors

- [constructor](I3DMParser.md#constructor)

### Methods

- [parseBuffer](I3DMParser.md#parsebuffer)
- [verification](I3DMParser.md#verification)
- [parserString](I3DMParser.md#parserstring)
- [parserJson](I3DMParser.md#parserjson)
- [parserTexture](I3DMParser.md#parsertexture)
- [parse](I3DMParser.md#parse)

## Properties

### format

▪ `Static` **format**: `string` = `'bin'`

#### Overrides

ParserBase.format

#### Defined in

[src/engine/loader/parser/I3DMParser.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/I3DMParser.ts#L5)

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

• **new I3DMParser**()

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

[src/engine/loader/parser/I3DMParser.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/I3DMParser.ts#L7)

___

### verification

▸ **verification**(): `boolean`

验证解析有效性

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/engine/loader/parser/I3DMParser.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/I3DMParser.ts#L18)

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
