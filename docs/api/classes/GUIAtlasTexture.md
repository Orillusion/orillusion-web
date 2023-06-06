# Class: GUIAtlasTexture

Atlas data

### Constructors

- [constructor](GUIAtlasTexture.md#constructor)

### Properties

- [textureSize](GUIAtlasTexture.md#texturesize)
- [name](GUIAtlasTexture.md#name)

### Accessors

- [spriteList](GUIAtlasTexture.md#spritelist)

### Methods

- [setTexture](GUIAtlasTexture.md#settexture)
- [getSprite](GUIAtlasTexture.md#getsprite)

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

[src/components/gui/core/GUIAtlasTexture.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L19)

## Properties

### textureSize

• `Readonly` **textureSize**: [`Vector2`](Vector2.md)

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L15)

___

### name

• **name**: `string`

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L16)

## Accessors

### spriteList

• `get` **spriteList**(): [`GUISprite`](GUISprite.md)[]

Returns all sprite list

#### Returns

[`GUISprite`](GUISprite.md)[]

list of GUISprite

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L50)

## Methods

### setTexture

▸ **setTexture**(`srcTexture`, `id`, `detail`): [`GUISprite`](GUISprite.md)

create a sprite

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `srcTexture` | `GUITexture` | Usually it's an atlas diagram |
| `id` | `string` | key of sprite |
| `detail` | `any` | description of sprite |

#### Returns

[`GUISprite`](GUISprite.md)

GUISprite

#### Defined in

[src/components/gui/core/GUIAtlasTexture.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L30)

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

[src/components/gui/core/GUIAtlasTexture.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIAtlasTexture.ts#L42)
