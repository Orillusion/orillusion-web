[**@orillusion/core**](../README.md)

***

# Class: PrefabMeshParser

Defined in: [src/loader/parser/prefab/PrefabMeshParser.ts:20](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMeshParser.ts#L20)

Parses mesh blocks from an Orillusion prefab binary stream. It decodes the
vertex layout, index buffer, optional skeleton bindings and blend shapes,
builds a [GeometryBase](GeometryBase.md), and registers it with the engine resource host.

## Constructors

### Constructor

> **new PrefabMeshParser**(): `PrefabMeshParser`

#### Returns

`PrefabMeshParser`

#### Inherited from

`ParserBase.constructor`

## Properties

### format

> `static` **format**: [`ParserFormat`](../enumerations/ParserFormat.md) = `ParserFormat.BIN`

Defined in: [src/loader/parser/prefab/PrefabMeshParser.ts:21](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMeshParser.ts#L21)

#### Overrides

`ParserBase.format`

***

### baseUrl

> **baseUrl**: `string`

Defined in: [src/loader/parser/ParserBase.ts:12](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L12)

#### Inherited from

`ParserBase.baseUrl`

***

### initUrl

> **initUrl**: `string`

Defined in: [src/loader/parser/ParserBase.ts:13](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L13)

#### Inherited from

`ParserBase.initUrl`

***

### loaderFunctions?

> `optional` **loaderFunctions?**: [`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

Defined in: [src/loader/parser/ParserBase.ts:14](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L14)

#### Inherited from

`ParserBase.loaderFunctions`

***

### userData?

> `optional` **userData?**: `any`

Defined in: [src/loader/parser/ParserBase.ts:15](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L15)

#### Inherited from

`ParserBase.userData`

***

### data

> **data**: `any`

Defined in: [src/loader/parser/ParserBase.ts:16](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L16)

#### Inherited from

`ParserBase.data`

***

### ctx?

> `optional` **ctx?**: [`Context3D`](Context3D.md)

Defined in: [src/loader/parser/ParserBase.ts:20](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L20)

Context3D this parser is operating under. Populated by FileLoader
 so default-texture lookups (`Engine3D.resFor(this.ctx)`) resolve
 against the owning engine's device rather than the global shim.

#### Inherited from

`ParserBase.ctx`

## Methods

### parserMeshs()

> `static` **parserMeshs**(`bytesStream`, `prefabParser`): `void`

Defined in: [src/loader/parser/prefab/PrefabMeshParser.ts:37](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMeshParser.ts#L37)

Read every mesh block from the stream, build the corresponding
geometries, and register them on the resource host keyed by mesh id.

#### Parameters

##### bytesStream

`BytesArray`

the prefab binary stream positioned at the mesh section.

##### prefabParser

[`PrefabParser`](PrefabParser.md)

the owning prefab parser, used for context lookup.

#### Returns

`void`

***

### parseString()

> **parseString**(`str`): `void`

Defined in: [src/loader/parser/ParserBase.ts:22](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L22)

#### Parameters

##### str

`string`

#### Returns

`void`

#### Inherited from

`ParserBase.parseString`

***

### parseJson()

> **parseJson**(`obj`): `void`

Defined in: [src/loader/parser/ParserBase.ts:24](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L24)

#### Parameters

##### obj

`object`

#### Returns

`void`

#### Inherited from

`ParserBase.parseJson`

***

### parseTexture()

> **parseTexture**(`buffer`): [`Texture`](Texture.md)

Defined in: [src/loader/parser/ParserBase.ts:28](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L28)

#### Parameters

##### buffer

`ArrayBuffer`

#### Returns

[`Texture`](Texture.md)

#### Inherited from

`ParserBase.parseTexture`

***

### parse()

> **parse**(`data`): `void`

Defined in: [src/loader/parser/ParserBase.ts:32](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L32)

#### Parameters

##### data

`any`

#### Returns

`void`

#### Inherited from

`ParserBase.parse`

***

### parseBuffer()

> **parseBuffer**(`buffer`): `Promise`\<`void`\>

Defined in: [src/loader/parser/prefab/PrefabMeshParser.ts:28](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMeshParser.ts#L28)

Parse a raw mesh buffer. Reserved entry point; not used by the prefab
pipeline, which decodes meshes through [PrefabMeshParser.parserMeshs](#parsermeshs).

#### Parameters

##### buffer

`ArrayBuffer`

the raw mesh buffer.

#### Returns

`Promise`\<`void`\>

#### Overrides

`ParserBase.parseBuffer`

***

### verification()

> **verification**(): `boolean`

Defined in: [src/loader/parser/prefab/PrefabMeshParser.ts:191](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMeshParser.ts#L191)

Verify that parsing produced valid data.

#### Returns

`boolean`

true when data is present; throws otherwise.

#### Overrides

`ParserBase.verification`
