# 精灵 Sprite

精灵（Sprite）是引擎中用于在 3D 场景里绘制 **2D 贴图四边形** 的渲染组件，常用于标签、图标、地标（POI）、血条、广告牌、特效贴片等。

::: tip 版本说明
精灵系统在 `@orillusion/core` **0.9.0** 引入，取代了早期版本的 GUI 组件体系。早期的 `UIPanel` / `UIImage` / `UITextField` / `UIButton` 等 GUI 组件已移除，相关需求统一通过 `SpriteRenderer`（配合 [公告板](/guide/sprite/billboard.md) 等）实现。
:::

## 基本用法

给一个 `Object3D` 添加 `SpriteRenderer` 组件，设置贴图即可在其所在位置绘制一张面片：

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

// 加载贴图
const tex = new BitmapTexture2D();
tex.flipY = true;
await tex.load('textures/logo.png');

// 创建精灵
const spriteObj = new Object3D();
const sprite = spriteObj.addComponent(SpriteRenderer);
sprite.texture = tex;
scene.addChild(spriteObj);

// 注意：部分属性需在 addChild 之后设置（addChild 会触发材质初始化）
sprite.size = new Vector2(2, 2);   // 面片世界尺寸（米）
```

## 常用属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `texture` | `Texture` | 精灵贴图，可用 `sprite.texture = tex` 或 `sprite.setTexture(tex)` 设置 |
| `size` | `Vector2` | 面片在世界空间的宽高（米） |
| `pivot` | `Vector2` | 锚点（0~1）。`(0.5, 0.5)` 居中，`(0.5, 0)` 底边中点（标签常用） |
| `color` | `Color` | 叠加颜色 / 透明度（与贴图相乘） |
| `cornerRadius` | `number` | 圆角半径（世界单位），基于 SDF 圆角，`0` 为直角 |
| `uvRect` | `Vector4` | 采样的 UV 子区域 `(x, y, w, h)`，用于[图集](/guide/sprite/atlas.md) |
| `renderOrder` | `number` | 透明排序顺序，数值大的后绘制（叠在上层） |
| `distanceInvariantSize` | `boolean` | 是否保持屏幕尺寸恒定，详见[距离恒定](/guide/sprite/billboard.md#距离恒定尺寸) |

```ts
import { Color, Vector2 } from '@orillusion/core';

sprite.size = new Vector2(2, 2);
sprite.pivot = new Vector2(0.5, 0.5);
sprite.color = new Color(1, 0.85, 0.4, 1);
sprite.cornerRadius = 0.2;
```

## 渲染顺序

多个精灵重叠时，可用 `renderOrder` 控制透明桶内的绘制先后（数值越大越靠上层）：

```ts
cardA.renderOrder = 3000;
cardB.renderOrder = 3001; // 叠在 A 之上
cardC.renderOrder = 3002; // 最上层
```

## 示例

<Demo src="/demos/sprite/Sample_basic.ts"></Demo>

<<< @/public/demos/sprite/Sample_basic.ts

## 下一步

- [公告板与距离恒定](/guide/sprite/billboard.md) —— 让精灵始终朝向相机、保持屏幕尺寸
- [图集与批量渲染](/guide/sprite/atlas.md) —— 精灵图集、`SpriteBatch` 海量精灵
