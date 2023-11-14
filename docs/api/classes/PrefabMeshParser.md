# Class: PrefabMeshParser

## Hierarchy

- `ParserBase`

  ↳ **`PrefabMeshParser`**

### Constructors

- [constructor](PrefabMeshParser.md#constructor)

### Properties

- [format](PrefabMeshParser.md#format)
- [baseUrl](PrefabMeshParser.md#baseurl)
- [initUrl](PrefabMeshParser.md#initurl)
- [loaderFunctions](PrefabMeshParser.md#loaderfunctions)
- [userData](PrefabMeshParser.md#userdata)
- [data](PrefabMeshParser.md#data)

### Methods

- [parserMeshs](PrefabMeshParser.md#parsermeshs)
- [parseString](PrefabMeshParser.md#parsestring)
- [parseJson](PrefabMeshParser.md#parsejson)
- [parseTexture](PrefabMeshParser.md#parsetexture)
- [parse](PrefabMeshParser.md#parse)
- [parseBuffer](PrefabMeshParser.md#parsebuffer)
- [verification](PrefabMeshParser.md#verification)

## Constructors

### constructor

• **new PrefabMeshParser**()

#### Inherited from

ParserBase.constructor

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.BIN`

#### Overrides

ParserBase.format

#### Defined in

[src/loader/parser/prefab/PrefabMeshParser.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMeshParser.ts#L14)

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

### parserMeshs

▸ `Static` **parserMeshs**(`bytesStream`, `prefabParser`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesStream` | `BytesArray` |
| `prefabParser` | [`PrefabParser`](PrefabParser.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/PrefabMeshParser.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMeshParser.ts#L19)

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

[src/loader/parser/prefab/PrefabMeshParser.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMeshParser.ts#L16)

___

### verification

▸ **verification**(): `boolean`

Verify parsing validity

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/loader/parser/prefab/PrefabMeshParser.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMeshParser.ts#L154)
