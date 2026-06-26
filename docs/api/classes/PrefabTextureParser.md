[**@orillusion/core**](../README.md)

***

# Class: PrefabTextureParser

Defined in: [src/loader/parser/prefab/PrefabTextureParser.ts:16](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabTextureParser.ts#L16)

Parses the texture section of an Orillusion prefab binary stream. It resolves
each texture URL (optionally rewriting to the `webp` variant), loads the
bitmap textures, and registers them with the engine resource host.

## Constructors

### Constructor

> **new PrefabTextureParser**(): `PrefabTextureParser`

#### Returns

`PrefabTextureParser`

#### Inherited from

`ParserBase.constructor`

## Properties

### format

> `static` **format**: [`ParserFormat`](../enumerations/ParserFormat.md) = `ParserFormat.TEXT`

Defined in: [src/loader/parser/prefab/PrefabTextureParser.ts:17](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabTextureParser.ts#L17)

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

### parserTexture()

> `static` **parserTexture**(`bytesStream`, `prefabParser`, `loaderFunctions`): `Promise`\<`void`\>

Defined in: [src/loader/parser/prefab/PrefabTextureParser.ts:26](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabTextureParser.ts#L26)

Read every texture reference from the stream, load the bitmap textures,
and register them on the resource host keyed by texture name.

#### Parameters

##### bytesStream

`BytesArray`

the prefab binary stream positioned at the texture section.

##### prefabParser

[`PrefabParser`](PrefabParser.md)

the owning prefab parser, used for base URL and context.

##### loaderFunctions

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

optional loader hooks (progress, URL transform, etc.).

#### Returns

`Promise`\<`void`\>

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

### parseBuffer()

> **parseBuffer**(`buffer`): `void`

Defined in: [src/loader/parser/ParserBase.ts:26](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L26)

#### Parameters

##### buffer

`ArrayBuffer`

#### Returns

`void`

#### Inherited from

`ParserBase.parseBuffer`

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

### verification()

> **verification**(): `boolean`

Defined in: [src/loader/parser/prefab/PrefabTextureParser.ts:53](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabTextureParser.ts#L53)

Verify that parsing produced valid data.

#### Returns

`boolean`

true when data is present; throws otherwise.

#### Overrides

`ParserBase.verification`
