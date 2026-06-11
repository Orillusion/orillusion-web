# 图集与批量渲染

当多个精灵共用同一张贴图（图集 / 精灵表），或需要绘制成千上万个精灵时，可以用 **UV 子区域**、**`Sprite` 资源** 和 **`SpriteBatch` 批量渲染** 来组织资源、提升性能。

## UV 子区域（图集）

一张图集（atlas / spritesheet）上排布了多个小图。通过 `SpriteRenderer.uvRect` 指定要采样的子区域 `(x, y, w, h)`（均为 0~1 的归一化坐标），即可只显示图集中的某一格：

```ts
import { Vector4 } from '@orillusion/core';

// 采样图集左上角 1/4 区域
sprite.texture = atlasTexture;
sprite.uvRect = new Vector4(0, 0, 0.5, 0.5);
```

## Sprite 资源

`Sprite` 是一个可复用的精灵资源对象，把"贴图 + 子区域 + 锚点"打包在一起，方便在多个 `SpriteRenderer` 间共享：

```ts
import { Sprite, Vector4, Vector2 } from '@orillusion/core';

// 方式一：从贴图快速创建
const sprite1 = Sprite.fromTexture(atlasTexture, 'icon');

// 方式二：构造时指定图集子区域与锚点
const sprite2 = new Sprite({
    texture: atlasTexture,
    region: new Vector4(0.5, 0, 0.5, 0.5), // 图集中的子区域
    pivot: new Vector2(0.5, 0.5),
    name: 'coin',
});

// 赋给渲染器
spriteRenderer.sprite = sprite2;
```

| 成员 | 类型 | 说明 |
| --- | --- | --- |
| `texture` | `Texture` | 贴图 |
| `region` | `Vector4` | 图集子区域 `(x, y, w, h)`，归一化坐标 |
| `pivot` | `Vector2` | 锚点（0~1） |
| `Sprite.fromTexture(tex, name?)` | 静态 | 用整张贴图快速创建一个 `Sprite` |

## 批量渲染（SpriteBatch）

当需要绘制大量共享同一张贴图的精灵（如粒子贴片、海量图标、弹幕）时，逐个 `SpriteRenderer` 会产生大量 draw call。`SpriteBatch` 把它们合并到一次绘制中，显著提升性能。

```ts
import { Object3D, SpriteBatch, Color, Vector2, Vector3, Vector4 } from '@orillusion/core';

const batchObj = new Object3D();
const batch = batchObj.addComponent(SpriteBatch);
batch.texture = tex;                 // 整批共享一张贴图
batch.color = new Color(1, 1, 1, 1); // 整批叠加色
scene.addChild(batchObj);

// 逐个添加条目，add() 返回一个可后续更新的句柄
const entry = batch.add({
    position: new Vector3(x, y, z),
    size: new Vector2(1, 1),
    pivot: new Vector2(0.5, 0.5),
    uvRect: new Vector4(0, 0, 1, 1),  // 图集子区域
});
```

`SpriteBatch` 常用方法：

| 方法 | 说明 |
| --- | --- |
| `add(spec)` | 添加一个精灵条目，返回 `SpriteBatchEntry` 句柄 |
| `update(entry, patch)` | 更新某条目的 `position` / `size` / `pivot` / `uvRect` 等 |
| `remove(entry)` | 移除某条目 |
| `clear()` | 清空所有条目 |
| `entries` | 只读，当前所有条目 |

运行时更新条目（例如让每个精灵浮动）：

```ts
batch.update(entry, { position: new Vector3(x, newY, z) });
```

> `SpriteBatch` 适合"同贴图、海量、需整体管理"的场景；若每个精灵需要独立的组件行为（如各自的[公告板](/guide/sprite/billboard.md)），仍应使用独立的 `SpriteRenderer`。
