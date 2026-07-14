[**@orillusion/core**](../README.md)

***

# Class: PrefabParser

Defined in: [src/loader/parser/prefab/PrefabParser.ts:33](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L33)

Top-level parser for the Orillusion prefab (`.prefab`) binary format. It
drives the sub-parsers in order (textures, avatars, meshes, materials, node
tree) and reconstructs the prefab as a hierarchy of [Object3D](Object3D.md) nodes
with their attached components.

## Constructors

### Constructor

> **new PrefabParser**(): `PrefabParser`

#### Returns

`PrefabParser`

#### Inherited from

`ParserBase.constructor`

## Properties

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

### useWebp

> `static` **useWebp**: `boolean` = `true`

Defined in: [src/loader/parser/prefab/PrefabParser.ts:37](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L37)

When true, texture URLs are rewritten to the `webp` variant before loading.

***

### format

> `static` **format**: [`ParserFormat`](../enumerations/ParserFormat.md) = `ParserFormat.BIN`

Defined in: [src/loader/parser/prefab/PrefabParser.ts:38](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L38)

#### Overrides

`ParserBase.format`

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

***

### avatarDic

> **avatarDic**: `object`

Defined in: [src/loader/parser/prefab/PrefabParser.ts:42](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L42)

Map of decoded avatar (skeleton) data keyed by avatar name.

#### Index Signature

\[`name`: `string`\]: `PrefabAvatarData`

***

### nodeData

> **nodeData**: `PrefabNode`

Defined in: [src/loader/parser/prefab/PrefabParser.ts:46](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L46)

Root node of the decoded prefab hierarchy.

## Methods

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

Defined in: [src/loader/parser/prefab/PrefabParser.ts:52](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L52)

Decode the prefab buffer: parse textures, avatars, meshes, materials and
the node tree, then build the resulting [Object3D](Object3D.md) hierarchy into `data`.

#### Parameters

##### buffer

`ArrayBuffer`

the raw prefab binary buffer.

#### Returns

`Promise`\<`void`\>

#### Overrides

`ParserBase.parseBuffer`

***

### verification()

> **verification**(): `boolean`

Defined in: [src/loader/parser/prefab/PrefabParser.ts:121](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L121)

Verify that parsing produced valid data.

#### Returns

`boolean`

true when data is present; throws otherwise.

#### Overrides

`ParserBase.verification`
