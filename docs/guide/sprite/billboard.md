# Billboard and Distance Invariance

Sprites are commonly used for scenarios that should "always face the camera and always be clearly readable," such as labels, landmarks, and health bars. The engine achieves this through two capabilities: the **billboard component `BillboardComponent`** and the **distance-invariant size `distanceInvariantSize`**.

## Billboard (BillboardComponent)

The billboard makes an object always face the camera. It is an **independent component**; simply add it to the `Object3D` that the sprite belongs to, and use it together with `SpriteRenderer`:

```ts
import { Object3D, SpriteRenderer, BillboardComponent, BillboardType, Vector2 } from '@orillusion/core';

const obj = new Object3D();
const sprite = obj.addComponent(SpriteRenderer);
sprite.texture = tex;
scene.addChild(obj);
sprite.size = new Vector2(1.6, 1.6);

// Add a billboard so it always faces the camera
const billboard = obj.addComponent(BillboardComponent);
billboard.type = BillboardType.BillboardY;
```

`BillboardType` values:

| Type | Description |
| --- | --- |
| `BillboardType.None` | No rotation; the orientation is determined by its own `Transform` |
| `BillboardType.BillboardY` | Faces the camera only around the Y axis (stays upright, suitable for landmarks, trees, and character labels) |
| `BillboardType.BillboardXYZ` | Fully faces the camera (directly facing the screen at any angle, suitable for icons and particle patches) |

## Distance Invariant Size

By default, a sprite is a world-space quad, so the farther it is from the camera, the smaller it appears on screen. After enabling `distanceInvariantSize`, the sprite will **maintain a constant screen size**, appearing the same size regardless of the camera distance—which is very suitable for landmark icons (POI), UI hints, and so on:

```ts
sprite.distanceInvariantSize = true;
```

## Typical Example: Landmark (POI)

Combining "billboard + distance invariance + bottom-edge pivot" gives you a classic landmark marker: always directly facing the camera, the same size regardless of distance, and aligned at the bottom to the target point.

```ts
import { Object3D, SpriteRenderer, BillboardComponent, BillboardType, Color, Vector2 } from '@orillusion/core';

const poi = new Object3D();
poi.localPosition.set(10, 0, 5); // The world position of the marker

const sprite = poi.addComponent(SpriteRenderer);
sprite.texture = iconTexture;
scene.addChild(poi);

sprite.size = new Vector2(1.6, 1.6);
sprite.pivot = new Vector2(0.5, 0);          // Align the bottom-edge midpoint to the position
sprite.distanceInvariantSize = true;          // Same size regardless of distance
sprite.color = new Color(1, 0.85, 0.4, 1);

poi.addComponent(BillboardComponent).type = BillboardType.BillboardY; // Always face the camera
```
