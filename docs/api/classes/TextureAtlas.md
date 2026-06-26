[**@orillusion/core**](../README.md)

***

# Class: TextureAtlas

Defined in: [src/assets/TextureAtlas.ts:16](https://github.com/orillusion/orillusion/blob/main/src/assets/TextureAtlas.ts#L16)

Texture atlas — a base texture plus a dictionary of named `Sprite`
assets. Returned by `Engine3D.resFor(ctx).loadAtlas(url)`.

Each region parsed from the atlas JSON becomes a `Sprite` that shares
the atlas's texture and carries its own UV region / pivot. Pair with
`SpriteRenderer.sprite = atlas.get('name')` to render.

## Constructors

### Constructor

> **new TextureAtlas**(`texture`): `TextureAtlas`

Defined in: [src/assets/TextureAtlas.ts:24](https://github.com/orillusion/orillusion/blob/main/src/assets/TextureAtlas.ts#L24)

#### Parameters

##### texture

[`Texture`](Texture.md)

#### Returns

`TextureAtlas`

## Properties

### texture

> **texture**: [`Texture`](Texture.md)

Defined in: [src/assets/TextureAtlas.ts:18](https://github.com/orillusion/orillusion/blob/main/src/assets/TextureAtlas.ts#L18)

The shared base texture that all sprites in this atlas reference.

***

### sprites

> `readonly` **sprites**: `Map`\<`string`, [`Sprite`](Sprite.md)\>

Defined in: [src/assets/TextureAtlas.ts:20](https://github.com/orillusion/orillusion/blob/main/src/assets/TextureAtlas.ts#L20)

Named sprites parsed from the atlas, keyed by region id.

***

### name

> **name**: `string` = `''`

Defined in: [src/assets/TextureAtlas.ts:22](https://github.com/orillusion/orillusion/blob/main/src/assets/TextureAtlas.ts#L22)

Optional atlas name.

## Methods

### get()

> **get**(`id`): [`Sprite`](Sprite.md)

Defined in: [src/assets/TextureAtlas.ts:30](https://github.com/orillusion/orillusion/blob/main/src/assets/TextureAtlas.ts#L30)

Look up a named sprite. Returns `undefined` if the atlas has no such region.

#### Parameters

##### id

`string`

#### Returns

[`Sprite`](Sprite.md)

***

### add()

> **add**(`id`, `region`): [`Sprite`](Sprite.md)

Defined in: [src/assets/TextureAtlas.ts:35](https://github.com/orillusion/orillusion/blob/main/src/assets/TextureAtlas.ts#L35)

Register a sprite. `region` is normalized UV.

#### Parameters

##### id

`string`

##### region

`Vector4`

#### Returns

[`Sprite`](Sprite.md)

***

### addPixelRect()

> **addPixelRect**(`id`, `pixelRect`, `atlasWidth`, `atlasHeight`): [`Sprite`](Sprite.md)

Defined in: [src/assets/TextureAtlas.ts:46](https://github.com/orillusion/orillusion/blob/main/src/assets/TextureAtlas.ts#L46)

Register a sprite from a pixel-space rect in the source texture.

#### Parameters

##### id

`string`

##### pixelRect

###### x

`number`

###### y

`number`

###### w

`number`

###### h

`number`

##### atlasWidth

`number`

##### atlasHeight

`number`

#### Returns

[`Sprite`](Sprite.md)
