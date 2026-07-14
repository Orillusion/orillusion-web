[**@orillusion/core**](../README.md)

***

# Class: UIUtil

Defined in: [src/util/UIUtil.ts:15](https://github.com/orillusion/orillusion/blob/main/src/util/UIUtil.ts#L15)

Utility helpers for building sprite textures from Canvas2D output —
primarily `textToTexture` for rendering labels (name tags, HP text,
damage numbers) that live in the 3D world via `SpriteRenderer`.

Designed for **static / low-frequency** updates (fewer than ~10 Hz,
fewer than ~50 simultaneous text elements). For high-frequency animated
text, build a dedicated atlas.

## Constructors

### Constructor

> **new UIUtil**(): `UIUtil`

#### Returns

`UIUtil`

## Properties

### DEFAULT\_TEXT\_OPTS

> `readonly` `static` **DEFAULT\_TEXT\_OPTS**: `Required`\<[`TextOptions`](../type-aliases/TextOptions.md)\>

Defined in: [src/util/UIUtil.ts:17](https://github.com/orillusion/orillusion/blob/main/src/util/UIUtil.ts#L17)

Text rendering options. Missing fields fall back to sensible defaults.

## Methods

### measureText()

> `static` **measureText**(`text`, `opts?`): `object`

Defined in: [src/util/UIUtil.ts:33](https://github.com/orillusion/orillusion/blob/main/src/util/UIUtil.ts#L33)

Measure the CSS-pixel size needed to render `text` with the given options.

#### Parameters

##### text

`string`

##### opts?

[`TextOptions`](../type-aliases/TextOptions.md)

#### Returns

`object`

##### width

> **width**: `number`

##### height

> **height**: `number`

***

### textToTexture()

> `static` **textToTexture**(`text`, `ctx`, `opts?`): `Promise`\<[`BitmapTexture2D`](BitmapTexture2D.md)\>

Defined in: [src/util/UIUtil.ts:55](https://github.com/orillusion/orillusion/blob/main/src/util/UIUtil.ts#L55)

Render `text` to a new GPU texture. Returns a BitmapTexture2D bound to
`ctx`. The texture format is `rgba8unorm` with premultiplied alpha —
suitable for `SpriteMaterial.baseMap`.

#### Parameters

##### text

`string`

##### ctx

[`Context3D`](Context3D.md)

##### opts?

[`TextOptions`](../type-aliases/TextOptions.md)

#### Returns

`Promise`\<[`BitmapTexture2D`](BitmapTexture2D.md)\>

***

### updateTextTexture()

> `static` **updateTextTexture**(`texture`, `text`, `opts?`): `Promise`\<`void`\>

Defined in: [src/util/UIUtil.ts:69](https://github.com/orillusion/orillusion/blob/main/src/util/UIUtil.ts#L69)

Re-render `text` into an existing texture's backing store. Requires the
texture's `width/height` to match the new size — if they differ, the
texture is recreated under the hood via the standard source setter.

#### Parameters

##### texture

[`BitmapTexture2D`](BitmapTexture2D.md)

##### text

`string`

##### opts?

[`TextOptions`](../type-aliases/TextOptions.md)

#### Returns

`Promise`\<`void`\>
