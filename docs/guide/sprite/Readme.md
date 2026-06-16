# Sprite

A Sprite is a rendering component in the engine used to draw **2D texture quads** within a 3D scene. It is commonly used for labels, icons, points of interest (POI), health bars, billboards, effect patches, and more.

::: tip Version Note
The sprite system was introduced in `@orillusion/core` **0.9.0**, replacing the GUI component system from earlier versions. The earlier GUI components such as `UIPanel` / `UIImage` / `UITextField` / `UIButton` have been removed, and the related needs are now uniformly implemented through `SpriteRenderer` (combined with [billboard](/guide/sprite/billboard.md), etc.).
:::

## Basic Usage

Add a `SpriteRenderer` component to an `Object3D` and set a texture to draw a quad at its location:

```ts
import { Engine3D, Scene3D, View3D, CameraUtil, HoverCameraController,
         Object3D, SpriteRenderer, BitmapTexture2D, Vector2 } from '@orillusion/core';

const engine = await Engine3D.init();
const scene = new Scene3D();

const camera = CameraUtil.createCamera3DObject(scene);
camera.perspective(60, engine.aspect, 0.1, 5000);
camera.object3D.addComponent(HoverCameraController).setCamera(0, -15, 10);

const view = new View3D();
view.scene = scene;
view.camera = camera;
engine.startRenderView(view);

// Load the texture
const tex = new BitmapTexture2D();
tex.flipY = true;
await tex.load('textures/logo.png');

// Create the sprite
const spriteObj = new Object3D();
const sprite = spriteObj.addComponent(SpriteRenderer);
sprite.texture = tex;
scene.addChild(spriteObj);

// Note: some properties need to be set after addChild (addChild triggers material initialization)
sprite.size = new Vector2(2, 2);   // The world size of the quad (meters)
```

## Common Properties

| Property | Type | Description |
| --- | --- | --- |
| `texture` | `Texture` | The sprite texture, which can be set via `sprite.texture = tex` or `sprite.setTexture(tex)` |
| `size` | `Vector2` | The width and height of the quad in world space (meters) |
| `pivot` | `Vector2` | The pivot (0~1). `(0.5, 0.5)` is centered, `(0.5, 0)` is the bottom-edge midpoint (commonly used for labels) |
| `color` | `Color` | The overlay color / opacity (multiplied with the texture) |
| `cornerRadius` | `number` | The corner radius (world units), based on SDF rounded corners; `0` means right angles |
| `uvRect` | `Vector4` | The sampled UV sub-region `(x, y, w, h)`, used for [atlases](/guide/sprite/atlas.md) |
| `renderOrder` | `number` | The transparency sorting order; higher values are drawn later (stacked on top) |
| `distanceInvariantSize` | `boolean` | Whether to keep a constant screen size; see [distance invariance](/guide/sprite/billboard.md#distance-invariant-size) |

```ts
import { Color, Vector2 } from '@orillusion/core';

sprite.size = new Vector2(2, 2);
sprite.pivot = new Vector2(0.5, 0.5);
sprite.color = new Color(1, 0.85, 0.4, 1);
sprite.cornerRadius = 0.2;
```

## Render Order

When multiple sprites overlap, you can use `renderOrder` to control the drawing order within the transparency bucket (the higher the value, the higher up it is stacked):

```ts
cardA.renderOrder = 3000;
cardB.renderOrder = 3001; // Stacked on top of A
cardC.renderOrder = 3002; // Topmost layer
```

## Next Steps

- [Billboard and Distance Invariance](/guide/sprite/billboard.md) —— Make sprites always face the camera and keep a constant screen size
- [Atlas and Batch Rendering](/guide/sprite/atlas.md) —— Sprite atlases and `SpriteBatch` for massive numbers of sprites
