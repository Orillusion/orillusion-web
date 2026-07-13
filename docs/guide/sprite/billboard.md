# 公告板与距离恒定

精灵常用于标签、地标、血条等"始终面向相机、始终清晰可读"的场景。引擎通过 **公告板组件 `BillboardComponent`** 和 **距离恒定尺寸 `distanceInvariantSize`** 两项能力来实现。

## 公告板（BillboardComponent）

公告板让物体始终朝向相机。它是一个**独立组件**，添加到精灵所在的 `Object3D` 上即可，与 `SpriteRenderer` 组合使用：

```ts
import { Object3D, SpriteRenderer, BillboardComponent, BillboardType, Vector2 } from '@orillusion/core';

const obj = new Object3D();
const sprite = obj.addComponent(SpriteRenderer);
sprite.texture = tex;
scene.addChild(obj);
sprite.size = new Vector2(1.6, 1.6);

// 添加公告板，使其始终朝向相机
const billboard = obj.addComponent(BillboardComponent);
billboard.type = BillboardType.BillboardY;
```

`BillboardType` 取值：

| 类型 | 说明 |
| --- | --- |
| `BillboardType.None` | 不旋转，朝向由自身 `Transform` 决定 |
| `BillboardType.BillboardY` | 仅绕 Y 轴朝向相机（保持竖直，适合地标、树木、人物标签） |
| `BillboardType.BillboardXYZ` | 完全朝向相机（任意角度都正对屏幕，适合图标、粒子贴片） |

## 距离恒定尺寸

默认情况下精灵是世界空间面片，离相机越远在屏幕上越小。开启 `distanceInvariantSize` 后，精灵会**保持恒定的屏幕尺寸**，无论相机远近都一样大——非常适合地标图标（POI）、UI 提示等：

```ts
sprite.distanceInvariantSize = true;
```

## 典型示例：地标（POI）

把"公告板 + 距离恒定 + 底边锚点"组合起来，就是一个经典的地标标记：始终正对相机、远近一样大、底部对齐到目标点。

```ts
import { Object3D, SpriteRenderer, BillboardComponent, BillboardType, Color, Vector2 } from '@orillusion/core';

const poi = new Object3D();
poi.localPosition.set(10, 0, 5); // 标记的世界位置

const sprite = poi.addComponent(SpriteRenderer);
sprite.texture = iconTexture;
scene.addChild(poi);

sprite.size = new Vector2(1.6, 1.6);
sprite.pivot = new Vector2(0.5, 0);          // 底边中点对齐到位置
sprite.distanceInvariantSize = true;          // 远近一样大
sprite.color = new Color(1, 0.85, 0.4, 1);

poi.addComponent(BillboardComponent).type = BillboardType.BillboardY; // 始终朝向相机
```

## 示例

<Demo src="/demos/sprite/Sample_poi.ts"></Demo>

<<< @/public/demos/sprite/Sample_poi.ts
