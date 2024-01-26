# Class: GeoJsonParser

## Hierarchy

- `ParserBase`

  ↳ **`GeoJsonParser`**

### Constructors

- [constructor](GeoJsonParser.md#constructor)

### Properties

- [format](GeoJsonParser.md#format)
- [baseUrl](GeoJsonParser.md#baseurl)
- [initUrl](GeoJsonParser.md#initurl)
- [loaderFunctions](GeoJsonParser.md#loaderfunctions)
- [userData](GeoJsonParser.md#userdata)
- [data](GeoJsonParser.md#data)
- [json](GeoJsonParser.md#json)

### Methods

- [parseJson](GeoJsonParser.md#parsejson)
- [parseBuffer](GeoJsonParser.md#parsebuffer)
- [parseTexture](GeoJsonParser.md#parsetexture)
- [parse](GeoJsonParser.md#parse)
- [verification](GeoJsonParser.md#verification)
- [parseString](GeoJsonParser.md#parsestring)

## Constructors

### constructor

• **new GeoJsonParser**(): [`GeoJsonParser`](GeoJsonParser.md)

#### Returns

[`GeoJsonParser`](GeoJsonParser.md)

#### Inherited from

ParserBase.constructor

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.JSON`

#### Overrides

ParserBase.format

#### Defined in

[src/loader/parser/gis/GeoJsonParser.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/gis/GeoJsonParser.ts#L33)

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

___

### json

• **json**: `string`

#### Defined in

[src/loader/parser/gis/GeoJsonParser.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/gis/GeoJsonParser.ts#L34)

## Methods

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

___

### verification

▸ **verification**(`ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ret` | `void` |

#### Returns

`boolean`

#### Inherited from

ParserBase.verification

#### Defined in

[src/loader/parser/ParserBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L29)

___

### parseString

▸ **parseString**(`data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`\<`void`\>

#### Overrides

ParserBase.parseString

#### Defined in

[src/loader/parser/gis/GeoJsonParser.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/gis/GeoJsonParser.ts#L35)
