# Atlas and Batch Rendering

When multiple sprites share the same texture (an atlas / sprite sheet), or when you need to draw thousands of sprites, you can use **UV sub-regions**, **`Sprite` resources**, and **`SpriteBatch` batch rendering** to organize resources and improve performance.

## UV Sub-Region (Atlas)

An atlas (atlas / spritesheet) arranges multiple small images on a single texture. By specifying the sub-region `(x, y, w, h)` to sample through `SpriteRenderer.uvRect` (all normalized coordinates from 0 to 1), you can display only a single cell from the atlas:

```ts
import { Vector4 } from '@orillusion/core';

// Sample the top-left 1/4 region of the atlas
sprite.texture = atlasTexture;
sprite.uvRect = new Vector4(0, 0, 0.5, 0.5);
```

## Sprite Resource

`Sprite` is a reusable sprite resource object that packages "texture + sub-region + pivot" together, making it convenient to share among multiple `SpriteRenderer`s:

```ts
import { Sprite, Vector4, Vector2 } from '@orillusion/core';

// Approach 1: quickly create from a texture
const sprite1 = Sprite.fromTexture(atlasTexture, 'icon');

// Approach 2: specify the atlas sub-region and pivot during construction
const sprite2 = new Sprite({
    texture: atlasTexture,
    region: new Vector4(0.5, 0, 0.5, 0.5), // The sub-region in the atlas
    pivot: new Vector2(0.5, 0.5),
    name: 'coin',
});

// Assign it to the renderer
spriteRenderer.sprite = sprite2;
```

| Member | Type | Description |
| --- | --- | --- |
| `texture` | `Texture` | The texture |
| `region` | `Vector4` | The atlas sub-region `(x, y, w, h)`, in normalized coordinates |
| `pivot` | `Vector2` | The pivot (0~1) |
| `Sprite.fromTexture(tex, name?)` | Static | Quickly creates a `Sprite` from an entire texture |

## Example

<Demo src="/demos/sprite/Sample_atlas.ts"></Demo>

<<< @/public/demos/sprite/Sample_atlas.ts

## Batch Rendering (SpriteBatch)

When you need to draw a large number of sprites that share the same texture (such as particle patches, massive numbers of icons, or bullet-hell projectiles), using a `SpriteRenderer` for each one would produce a large number of draw calls. `SpriteBatch` merges them into a single draw call, significantly improving performance.

```ts
import { Object3D, SpriteBatch, Color, Vector2, Vector3, Vector4 } from '@orillusion/core';

const batchObj = new Object3D();
const batch = batchObj.addComponent(SpriteBatch);
batch.texture = tex;                 // The whole batch shares a single texture
batch.color = new Color(1, 1, 1, 1); // The overlay color for the whole batch
scene.addChild(batchObj);

// Add entries one by one; add() returns a handle that can be updated later
const entry = batch.add({
    position: new Vector3(x, y, z),
    size: new Vector2(1, 1),
    pivot: new Vector2(0.5, 0.5),
    uvRect: new Vector4(0, 0, 1, 1),  // The atlas sub-region
});
```

Common `SpriteBatch` methods:

| Method | Description |
| --- | --- |
| `add(spec)` | Adds a sprite entry and returns a `SpriteBatchEntry` handle |
| `update(entry, patch)` | Updates an entry's `position` / `size` / `pivot` / `uvRect`, etc. |
| `remove(entry)` | Removes an entry |
| `clear()` | Clears all entries |
| `entries` | Read-only, all current entries |

Update entries at runtime (for example, making each sprite float):

```ts
batch.update(entry, { position: new Vector3(x, newY, z) });
```

## Example

<Demo src="/demos/sprite/Sample_batch.ts"></Demo>

<<< @/public/demos/sprite/Sample_batch.ts

> `SpriteBatch` is suitable for scenarios with "the same texture, massive numbers, and the need for unified management"; if each sprite requires independent component behavior (such as its own [billboard](/guide/sprite/billboard.md)), you should still use independent `SpriteRenderer`s.
