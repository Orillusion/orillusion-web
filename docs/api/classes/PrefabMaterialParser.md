[**@orillusion/core**](../README.md)

***

# Class: PrefabMaterialParser

Defined in: [src/loader/parser/prefab/PrefabMaterialParser.ts:20](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMaterialParser.ts#L20)

Parses material blocks from an Orillusion prefab binary stream. For each
material it resolves the shader, applies textures and uniform properties,
and registers the resulting [Material](Material.md) with the engine resource host.

## Constructors

### Constructor

> **new PrefabMaterialParser**(): `PrefabMaterialParser`

#### Returns

`PrefabMaterialParser`

#### Inherited from

`ParserBase.constructor`

## Properties

### format

> `static` **format**: [`ParserFormat`](../enumerations/ParserFormat.md) = `ParserFormat.TEXT`

Defined in: [src/loader/parser/prefab/PrefabMaterialParser.ts:21](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMaterialParser.ts#L21)

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

### parserMaterial()

> `static` **parserMaterial**(`bytesStream`, `prefabParser`): `void`

Defined in: [src/loader/parser/prefab/PrefabMaterialParser.ts:29](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMaterialParser.ts#L29)

Read every material block from the stream, build the corresponding
materials, and register them on the resource host keyed by id.

#### Parameters

##### bytesStream

`BytesArray`

the prefab binary stream positioned at the material section.

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

Defined in: [src/loader/parser/prefab/PrefabMaterialParser.ts:104](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabMaterialParser.ts#L104)

Verify that parsing produced valid data.

#### Returns

`boolean`

true when data is present; throws otherwise.

#### Overrides

`ParserBase.verification`
