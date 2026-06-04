# 渲染层

渲染层（Visible Layer）是一套基于 **32 位位掩码** 的可见性分类机制：给场景中的对象打上"层"标记，再让相机或渲染通道按层筛选，从而精确控制 **哪些对象被哪个相机 / 哪个 Pass 绘制**。常用于分屏渲染、小地图、镜面/反射排除、UI 层、调试层等场景。

::: tip 版本说明
渲染层系统在 `@orillusion/core` **0.9.0** 引入。在此版本中，原 `RenderNode.renderLayer` 字段已**重命名为 `visibleLayer`**，并上移到所有组件的基类 `ComponentBase` 上；同时相机新增了 `cullingMask`。
:::

## 核心概念

可见性由三个掩码共同决定，三者按位与（AND）后只要有任意一个公共置位，对象就会被该相机通过该 Pass 绘制：

```text
(node.visibleLayer & pass.layerMask & camera.cullingMask) !== 0
```

| 掩码 | 所在位置 | 含义 |
| --- | --- | --- |
| `visibleLayer` | 组件（`ComponentBase`，如 `MeshRenderer`） | 该对象**属于**哪些层 |
| `cullingMask` | 相机（`Camera3D`） | 该相机**能看到**哪些层 |
| `layerMask` | 渲染通道（`RenderGraphPass`） | 该 Pass **绘制**哪些层（详见 [RenderGraph](/guide/advanced/rendergraph.md#控制-pass-执行顺序)） |

引擎不给具体的位赋予任何语义，**由项目自行定义**。只有三个保留值：

| 值 | 含义 |
| --- | --- |
| `VisibleLayer.None`（`0`） | 不属于任何层。特殊渲染器（天空、反射、Graphic3D）与"临时隐藏"的对象使用 |
| `VisibleLayer.Default`（`1 << 0`，即位 0） | 默认层。任何新建对象的隐式层，保证未做任何设置的对象照常渲染。**约定：应用层不要占用位 0** |
| `VisibleLayer.All`（`0xFFFFFFFF`） | 全部 32 位。`camera.cullingMask` 与 `pass.layerMask` 的默认值 |

> 应用层请使用位 1~31（如 `1 << 1`、`1 << 2`…），把位 0 留给"未分配 / 旧对象"，这样未迁移的旧代码仍能被默认管线绘制。

## 给对象设置可见层

`visibleLayer` 定义在组件基类 `ComponentBase` 上，因此 `MeshRenderer` 等所有组件都可直接设置：

```ts
import { Object3D, MeshRenderer, BoxGeometry, LitMaterial, VisibleLayer } from '@orillusion/core';

// 项目自定义的层（位 0 已被 Default 占用，从位 1 起用）
const UI_LAYER = 1 << 1;
const MINIMAP_LAYER = 1 << 2;

const obj = new Object3D();
const mr = obj.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(1, 1, 1);
mr.material = new LitMaterial();

// 让该对象同时属于 默认层 和 小地图层
mr.visibleLayer = VisibleLayer.Default | MINIMAP_LAYER;
```

## 相机按层筛选（cullingMask）

`Camera3D.cullingMask` 决定该相机能看到哪些层，默认 `VisibleLayer.All`（看到全部）：

```ts
import { Camera3D, VisibleLayer } from '@orillusion/core';

const camera = cameraObj.addComponent(Camera3D);
camera.perspective(60, Engine3D.aspect, 0.1, 5000);

// 让主相机看到“除小地图层之外”的所有层
camera.cullingMask = VisibleLayer.remove(VisibleLayer.All, MINIMAP_LAYER);

// 小地图相机：只看小地图层
minimapCamera.cullingMask = MINIMAP_LAYER;
```

## VisibleLayer 工具函数

`VisibleLayer` 提供了一组纯函数用于位掩码运算（不修改入参，返回新值）：

| 函数 | 说明 |
| --- | --- |
| `VisibleLayer.add(src, m)` | 在 `src` 中置位 `m`（加入层），返回新掩码 |
| `VisibleLayer.remove(src, m)` | 在 `src` 中清除 `m`（移除层），返回新掩码 |
| `VisibleLayer.has(src, m)` | `src` 与 `m` 是否有公共置位（是否包含某层） |

```ts
let mask = VisibleLayer.Default;
mask = VisibleLayer.add(mask, UI_LAYER);        // 加入 UI 层
mask = VisibleLayer.remove(mask, VisibleLayer.Default); // 移除默认层
const visible = VisibleLayer.has(mask, UI_LAYER);      // true
```

## 与 RenderGraph 配合

在 RenderGraph 中，每个 Pass 都有 `layerMask`，可以把某些层从内置 Pass 中剔除、交给自定义 Pass 单独绘制。这是实现"特定层用特殊管线渲染"的关键，详见 [RenderGraph —— 控制 Pass 执行顺序](/guide/advanced/rendergraph.md#控制-pass-执行顺序)。

```ts
import { VisibleLayer, ColorPass } from '@orillusion/core';

const OVERLAY_LAYER = 1 << 3;
const graph = view.renderGraph!;

// 让内置 ColorPass 不再绘制 OVERLAY_LAYER
graph.getPass<ColorPass>('ColorPass')!.layerMask =
    VisibleLayer.remove(VisibleLayer.All, OVERLAY_LAYER);
```

## 从旧版本迁移

| 旧 API（0.8.x） | 新 API（0.9.0+） |
| --- | --- |
| `renderNode.renderLayer` | `component.visibleLayer` |
| （无） | `camera.cullingMask` |
| （无） | `VisibleLayer.None / Default / All` |
| （无） | `VisibleLayer.add / remove / has` |

## 相关 API

- [Camera3D](/api/classes/Camera3D) —— `cullingMask`
- [MeshRenderer](/api/classes/MeshRenderer) —— 继承自 `ComponentBase` 的 `visibleLayer`
