# 用户界面（GPU GUI）

`Orillusion` 提供了高性能的用户界面（GUI）组件供开发者使用。在使用该过模块之前，需要加载一些相关的素材资源供用户界面组件渲染。
根据美术设计图稿的排版和布局，合理搭配使用GUI组件，即可在项目中展示2D/3D的GUI内容。

> 用户界面往往会依赖一些外部字体数据、精灵图集等素材。制作这些图集请参考文档制作文本图集、制作精灵图集。

## GUI 空间模式

目前 `GUI` 支持两种模式渲染 `ViewSpace` 和 `WorldSpace`：

- ViewSpace 模式：在这种模式下，GUI 在屏幕空间中，不随3D相机的更改而变动；
- WorldSpace 模式：在这种模式下，GUI 可看做三维空间的一块画布，拥有3D属性（旋转、缩放、平移），能够参与深度检测等，实现与其他对象遮挡和被遮挡关系。

```ts
import { ViewPanel, WorldPanel } from '@orillusion/core'

// 创建一个面板对象
let panelRoot: Object3D = new Object3D()
// 添加 ViewPanel，设定为 ViewSpace 模式
panelRoot.addComponent(ViewPanel)
// 或 添加 WorldPanel，设定为 WorldSpace 模式
panelRoot.addComponent(WorldPanel)
```

## UICanvas

GUI 组件同样需要画布进行绘制，引擎中每个 `View3D` 中都内置有 `Canvas` 的数组，我们可以通过指定 `index` 来主动激活对应的 `UICanvas` 对象：

```ts
let view = new View3D()
...
let index = 0;
let canvas = view.enableUICanvas(index);
```

> 可以同时存在多个`UICanvas`，他们互相独立:

```ts
let canvas0 = view.enableUICanvas(0);
let canvas1 = view.enableUICanvas(1);
let canvas2 = view.enableUICanvas(2);
//...
```

## UIPanel

面板 `UIPanel` 用于承载具体的 GUI 组件渲染，需要添加到 `UICanvas` 中；
```ts
let panelObj = new Object3D();
let panel: UIPanel = panelObj.addComponent(ViewPanel) // 创建一个屏幕空间面板组件
let canvas = view.enableUICanvas(); // 默认启用下标为 0 的 UICanvas
canvas.addChild(panel.object3D); // 添加面板
```

每个 `UIPanel` 可以视为 GUI 组件的根节点，在 `UIPanel` 内可以添加各种 GUI 组件，用于展示 GUI 细节:

```ts
// 创建一个 UIImage 组件
let imageQuad = new Object3D();
let image = imageQuad.addComponent(UIImage);
// 创建一个 UIPanel
let panel: UIPanel = new Object3D().addComponent(ViewPanel); // 创建一个屏幕空间面板组件
// 将 GUI 对象添加到 UIPanel 中
panel.object3D.addChild(imageQuad);
```

以下示例展示了多个`UICanvas`共存的表现：

<Demo :height="500" src="/demos/gui/canvas.ts"></Demo>

<<< @/public/demos/gui/canvas.ts