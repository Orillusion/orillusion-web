# Class: GUIAtlasTexture

### Properties

- [textureSize](GUIAtlasTexture.md#texturesize)
- [name](GUIAtlasTexture.md#name)

### Constructors

- [constructor](GUIAtlasTexture.md#constructor)

### Methods

- [setTexture](GUIAtlasTexture.md#settexture)
- [getSprite](GUIAtlasTexture.md#getsprite)

### Accessors

- [spriteList](GUIAtlasTexture.md#spritelist)

## Properties

### textureSize

• `Readonly` **textureSize**: [`Vector2`](Vector2.md)

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L11)

___

### name

• **name**: `string`

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L12)

## Constructors

### constructor

• **new GUIAtlasTexture**(`size`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `Object` |
| `size.x` | `number` |
| `size.y` | `number` |

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L15)

## Methods

### setTexture

▸ **setTexture**(`srcTexture`, `id`, `detail`): [`GUISprite`](GUISprite.md)

create a sprite

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `srcTexture` | [`GUITexture`](GUITexture.md) | Usually it's an atlas diagram |
| `id` | `string` | key of sprite |
| `detail` | `any` | description of sprite |

#### Returns

[`GUISprite`](GUISprite.md)

GUISprite

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L26)

___

### getSprite

▸ **getSprite**(`id`): [`GUISprite`](GUISprite.md)

get a sprite by key/id/name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | key of sprite |

#### Returns

[`GUISprite`](GUISprite.md)

GUISprite

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L38)

## Accessors

### spriteList

• `get` **spriteList**(): [`GUISprite`](GUISprite.md)[]

Returns all sprite list

#### Returns

[`GUISprite`](GUISprite.md)[]

list of GUISprite

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L46)
