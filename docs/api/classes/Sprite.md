[**@orillusion/core**](../README.md)

***

# Class: Sprite

Defined in: [src/assets/Sprite.ts:35](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L35)

Sprite — 2D image **asset**. Describes what to render: a region of a
texture and a default anchor pivot.

A Sprite is data, not a component. One Sprite can be shared by many
`SpriteRenderer` components — renderers subscribe to change
notifications via `onChange` so updating the shared sprite propagates
to every instance that binds it. Pair with `TextureAtlas.get(name)` to
get sprites directly from a packed atlas.

Per-instance tweaks (size, pivot override, color, flips) live on the
`SpriteRenderer` component; the Sprite asset only describes the
underlying image data.

## Constructors

### Constructor

> **new Sprite**(`opts?`): `Sprite`

Defined in: [src/assets/Sprite.ts:47](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L47)

#### Parameters

##### opts?

###### texture?

[`Texture`](Texture.md)

###### region?

`Vector4`

###### pivot?

[`Vector2`](Vector2.md)

###### name?

`string`

#### Returns

`Sprite`

## Properties

### name

> **name**: `string` = `''`

Defined in: [src/assets/Sprite.ts:37](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L37)

Optional name, typically the atlas region id this sprite came from.

## Accessors

### texture

#### Get Signature

> **get** **texture**(): [`Texture`](Texture.md)

Defined in: [src/assets/Sprite.ts:62](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L62)

Source texture for this sprite.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **texture**(`value`): `void`

Defined in: [src/assets/Sprite.ts:64](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L64)

Set the source texture, notifying listeners on change.

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### region

#### Get Signature

> **get** **region**(): `Vector4`

Defined in: [src/assets/Sprite.ts:72](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L72)

Normalized sub-rect of the texture in UV space — (offsetX, offsetY, scaleX, scaleY).

##### Returns

`Vector4`

#### Set Signature

> **set** **region**(`v`): `void`

Defined in: [src/assets/Sprite.ts:74](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L74)

Set the UV region (copied), notifying listeners.

##### Parameters

###### v

`Vector4`

##### Returns

`void`

***

### pivot

#### Get Signature

> **get** **pivot**(): [`Vector2`](Vector2.md)

Defined in: [src/assets/Sprite.ts:80](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L80)

Default anchor point in [0,1]² — (0.5, 0.5) = centered.

##### Returns

[`Vector2`](Vector2.md)

#### Set Signature

> **set** **pivot**(`v`): `void`

Defined in: [src/assets/Sprite.ts:82](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L82)

Set the pivot (copied), notifying listeners.

##### Parameters

###### v

[`Vector2`](Vector2.md)

##### Returns

`void`

## Methods

### onChange()

> **onChange**(`fn`): `void`

Defined in: [src/assets/Sprite.ts:88](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L88)

Subscribe to sprite field changes. Renderers use this to invalidate their cached UV data.

#### Parameters

##### fn

[`SpriteChangeListener`](../type-aliases/SpriteChangeListener.md)

#### Returns

`void`

***

### offChange()

> **offChange**(`fn`): `void`

Defined in: [src/assets/Sprite.ts:93](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L93)

Unsubscribe a previously registered change listener.

#### Parameters

##### fn

[`SpriteChangeListener`](../type-aliases/SpriteChangeListener.md)

#### Returns

`void`

***

### clone()

> **clone**(): `Sprite`

Defined in: [src/assets/Sprite.ts:104](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L104)

Shallow clone — texture is shared (not duplicated), all vector fields are copied.

#### Returns

`Sprite`

***

### fromTexture()

> `static` **fromTexture**(`texture`, `name?`): `Sprite`

Defined in: [src/assets/Sprite.ts:114](https://github.com/orillusion/orillusion/blob/main/src/assets/Sprite.ts#L114)

Convenience: build a Sprite from a bare texture, full region, centered pivot.

#### Parameters

##### texture

[`Texture`](Texture.md)

##### name?

`string`

#### Returns

`Sprite`
