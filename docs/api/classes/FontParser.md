# Class: FontParser

## Hierarchy

- `ParserBase`

  ↳ **`FontParser`**

### Constructors

- [constructor](FontParser.md#constructor)

### Properties

- [format](FontParser.md#format)
- [baseUrl](FontParser.md#baseurl)
- [initUrl](FontParser.md#initurl)
- [loaderFunctions](FontParser.md#loaderfunctions)
- [userData](FontParser.md#userdata)
- [data](FontParser.md#data)

### Methods

- [parseSprite](FontParser.md#parsesprite)
- [verification](FontParser.md#verification)
- [parseString](FontParser.md#parsestring)
- [parseJson](FontParser.md#parsejson)
- [parseBuffer](FontParser.md#parsebuffer)
- [parseTexture](FontParser.md#parsetexture)
- [parse](FontParser.md#parse)

## Constructors

### constructor

• **new FontParser**()

#### Inherited from

ParserBase.constructor

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.TEXT`

#### Overrides

ParserBase.format

#### Defined in

[src/loader/parser/FontParser.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/FontParser.ts#L53)

___

### baseUrl

• **baseUrl**: `string`

#### Inherited from

ParserBase.baseUrl

#### Defined in

[src/loader/parser/ParserBase.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L11)

___

### initUrl

• **initUrl**: `string`

#### Inherited from

ParserBase.initUrl

#### Defined in

[src/loader/parser/ParserBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L12)

___

### loaderFunctions

• `Optional` **loaderFunctions**: [`LoaderFunctions`](../types/LoaderFunctions.md)

#### Inherited from

ParserBase.loaderFunctions

#### Defined in

[src/loader/parser/ParserBase.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L13)

___

### userData

• `Optional` **userData**: `any`

#### Inherited from

ParserBase.userData

#### Defined in

[src/loader/parser/ParserBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L14)

___

### data

• **data**: `any`

#### Inherited from

ParserBase.data

#### Defined in

[src/loader/parser/ParserBase.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L15)

## Methods

### parseSprite

▸ `Static` **parseSprite**(`guiTexture`, `fontData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guiTexture` | `GUITexture`[] |
| `fontData` | [`FontInfo`](FontInfo.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/FontParser.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/FontParser.ts#L55)

___

### verification

▸ **verification**(): `boolean`

Verify parsing validity

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/loader/parser/FontParser.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/FontParser.ts#L80)

___

### parseString

▸ **parseString**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

ParserBase.parseString

#### Defined in

[src/loader/parser/FontParser.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/FontParser.ts#L87)

___

### parseJson

▸ **parseJson**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

`void`

#### Inherited from

ParserBase.parseJson

#### Defined in

[src/loader/parser/ParserBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L19)

___

### parseBuffer

▸ **parseBuffer**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`void`

#### Inherited from

ParserBase.parseBuffer

#### Defined in

[src/loader/parser/ParserBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L21)

___

### parseTexture

▸ **parseTexture**(`buffer`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

ParserBase.parseTexture

#### Defined in

[src/loader/parser/ParserBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L23)

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

[src/loader/parser/ParserBase.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L27)
