# Class: PrefabAvatarParser

## Hierarchy

- `ParserBase`

  ↳ **`PrefabAvatarParser`**

### Constructors

- [constructor](PrefabAvatarParser.md#constructor)

### Properties

- [format](PrefabAvatarParser.md#format)
- [baseUrl](PrefabAvatarParser.md#baseurl)
- [initUrl](PrefabAvatarParser.md#initurl)
- [loaderFunctions](PrefabAvatarParser.md#loaderfunctions)
- [userData](PrefabAvatarParser.md#userdata)
- [data](PrefabAvatarParser.md#data)

### Methods

- [parser](PrefabAvatarParser.md#parser)
- [parseString](PrefabAvatarParser.md#parsestring)
- [parseJson](PrefabAvatarParser.md#parsejson)
- [parseBuffer](PrefabAvatarParser.md#parsebuffer)
- [parseTexture](PrefabAvatarParser.md#parsetexture)
- [parse](PrefabAvatarParser.md#parse)
- [verification](PrefabAvatarParser.md#verification)

## Constructors

### constructor

• **new PrefabAvatarParser**(): [`PrefabAvatarParser`](PrefabAvatarParser.md)

#### Returns

[`PrefabAvatarParser`](PrefabAvatarParser.md)

#### Inherited from

ParserBase.constructor

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.BIN`

#### Overrides

ParserBase.format

#### Defined in

[src/loader/parser/prefab/PrefabAvatarParser.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabAvatarParser.ts#L13)

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

### parser

▸ **parser**(`bytesStream`, `prefabParser`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesStream` | `BytesArray` |
| `prefabParser` | [`PrefabParser`](PrefabParser.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/PrefabAvatarParser.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabAvatarParser.ts#L14)

___

### parseString

▸ **parseString**(`str`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`void`

#### Inherited from

ParserBase.parseString

#### Defined in

[src/loader/parser/ParserBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L17)

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

___

### verification

▸ **verification**(): `boolean`

Verify parsing validity

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/loader/parser/prefab/PrefabAvatarParser.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabAvatarParser.ts#L28)
