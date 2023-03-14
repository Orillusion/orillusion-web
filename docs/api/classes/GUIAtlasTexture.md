# Class: GUIAtlasTexture


### Constructors

- [constructor](GUIAtlasTexture.md#constructor)

### Properties

- [textureSize](GUIAtlasTexture.md#texturesize)
- [name](GUIAtlasTexture.md#name)

### Methods

- [setTexture](GUIAtlasTexture.md#settexture)
- [getTexture](GUIAtlasTexture.md#gettexture)
- [randomTex](GUIAtlasTexture.md#randomtex)

### Accessors

- [texList](GUIAtlasTexture.md#texlist)

## Constructors

### constructor

• **new GUIAtlasTexture**()

## Properties

### textureSize

• **textureSize**: [`Vector2`](Vector2.md)

#### Defined in

[src/engine/gui/core/GUIAtlasTexture.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIAtlasTexture.ts#L9)

___

### name

• **name**: `string`

#### Defined in

[src/engine/gui/core/GUIAtlasTexture.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIAtlasTexture.ts#L10)

## Methods

### setTexture

▸ **setTexture**(`source`, `id`, `info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`GUITextureSource`](GUITextureSource.md) |
| `id` | `string` |
| `info` | `any` |

#### Returns

`void`

#### Defined in

[src/engine/gui/core/GUIAtlasTexture.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIAtlasTexture.ts#L12)

___

### getTexture

▸ **getTexture**(`id`): [`GUISubTexture`](GUISubTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`GUISubTexture`](GUISubTexture.md)

#### Defined in

[src/engine/gui/core/GUIAtlasTexture.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIAtlasTexture.ts#L18)

___

### randomTex

▸ **randomTex**(): [`GUISubTexture`](GUISubTexture.md)

#### Returns

[`GUISubTexture`](GUISubTexture.md)

#### Defined in

[src/engine/gui/core/GUIAtlasTexture.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIAtlasTexture.ts#L26)

## Accessors

### texList

• `get` **texList**(): [`GUISubTexture`](GUISubTexture.md)[]

#### Returns

[`GUISubTexture`](GUISubTexture.md)[]

#### Defined in

[src/engine/gui/core/GUIAtlasTexture.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIAtlasTexture.ts#L22)
