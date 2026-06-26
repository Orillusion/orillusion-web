[**@orillusion/core**](../README.md)

***

# Class: SpriteBatchEntry

Defined in: [src/components/renderer/SpriteBatch.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteBatch.ts#L24)

A single entry in a `SpriteBatch`. Treat as opaque — mutate only via
`batch.update(entry, patch)`, which marks the batch dirty so the next
frame re-uploads the CPU vertex arrays.

## Constructors

### Constructor

> **new SpriteBatchEntry**(`id`): `SpriteBatchEntry`

Defined in: [src/components/renderer/SpriteBatch.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteBatch.ts#L35)

#### Parameters

##### id

`number`

#### Returns

`SpriteBatchEntry`

## Properties

### id

> `readonly` **id**: `number`

Defined in: [src/components/renderer/SpriteBatch.ts:25](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteBatch.ts#L25)

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [src/components/renderer/SpriteBatch.ts:27](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteBatch.ts#L27)

World-space position of the entry's pivot anchor (local to the batch's Object3D).

***

### size

> **size**: [`Vector2`](Vector2.md)

Defined in: [src/components/renderer/SpriteBatch.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteBatch.ts#L29)

Quad size in world units (meters).

***

### pivot

> **pivot**: [`Vector2`](Vector2.md)

Defined in: [src/components/renderer/SpriteBatch.ts:31](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteBatch.ts#L31)

Anchor point in [0,1]². (0.5, 0.5) = centered.

***

### uvRect

> **uvRect**: `Vector4`

Defined in: [src/components/renderer/SpriteBatch.ts:33](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteBatch.ts#L33)

UV sub-region as (offsetX, offsetY, scaleX, scaleY) — atlas-friendly.
