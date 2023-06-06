# 用户界面（GPU GUI）

`Orillusion` 提供了高性能的用户界面（GUI）组件供开发者使用。
通过合理搭配使用 GUI 组件，即可在项目中灵活展示 2D/3D 的 GUI 内容。本章我们先了解几个 GUI 的基本概念：

## GUI 空间模式

目前 `GUI` 支持两种模式渲染 `ViewSpace` 和 `WorldSpace`：

- ViewSpace 模式：在这种模式下，GUI 组件被渲染在屏幕空间中，不随相机的视角更改而变动，也不会与其它物体产生 3D 空间遮挡关系；
- WorldSpace 模式：在这种模式下，GUI 组件可看做三维空间的一块画布，拥有3D属性（旋转、缩放、平移），能够参与深度检测等，实现与其他对象遮挡和被遮挡关系。

```ts
import { ViewPanel, WorldPanel } from '@orillusion/core'

// 创建一个面板对象
let panelRoot: Object3D = new Object3D()
// 添加 ViewPanel，设定为 ViewSpace 模式
panelRoot.addComponent(ViewPanel)
// 或 添加 WorldPanel，设定为 WorldSpace 模式
panelRoot.addComponent(WorldPanel)
```

下面这个例子展示了 `ViewPanel` 与 `WorldPanel` 的区别：
<Demo :height="500" src="/demos/gui/panel.ts"></Demo>

<<< @/public/demos/gui/panel.ts

## UICanvas

GUI 组件同样需要画布进行绘制，引擎中每个 `View3D` 中都内置有 `Canvas` 的数组，我们可以通过指定 `enableUICanvas` 来主动激活 `UICanvas` 对象：

```ts
let view = new View3D()
...
let canvas:UICanvas = view.enableUICanvas();
```

默认情况下，我们只需要一个 `UICanvas` 即可, 如果需要多个画布绘制，我们可以通过设置不同的 `index` 来激活多个 `UICanvas`，它们互相独立:

```ts
let canvas0:UICanvas = view.enableUICanvas(0);
let canvas1:UICanvas = view.enableUICanvas(1);
let canvas2:UICanvas = view.enableUICanvas(2);
//...
```

以下示例展示了多个 `UICanvas` 共存的表现：

<Demo :height="500" src="/demos/gui/canvas.ts"></Demo>

<<< @/public/demos/gui/canvas.ts

## UIPanel

面板 `UIPanel` 用于承载具体的 GUI 组件渲染，需要添加到 `UICanvas` 中；
```ts
let panelObj = new Object3D();
let panel:UIPanel = panelObj.addComponent(ViewPanel) // 创建一个屏幕空间面板组件
let canvas:UICanvas = view.enableUICanvas(); // 启用默认的 UICanvas
canvas.addChild(panel.object3D); // 添加面板
```

每个 `UIPanel` 可以视为 GUI 组件的根容器，在 `UIPanel` 内可以添加其它类型的 GUI 组件:

```ts
// 创建一个 UIImage 组件
let imageQuad = new Object3D();
let image:UIImage = imageQuad.addComponent(UIImage);
// 创建一个 UIPanel
let panel:UIPanel = new Object3D().addComponent(ViewPanel); // 创建一个屏幕空间面板组件
// 将 UIImage 的 Object3D 添加到 UIPanel 的 Object3D 中
panel.object3D.addChild(imageQuad);
```

### 渲染顺序
在同一个 `UICanvas` 下，可以允许有多个 `ViewPanel` 或者 `WorldPanel` 共存，它们的渲染层级满足以下规则：

1. `ViewPanel` 总是会显示在 `WorldPanel` 之上。
2. `ViewPanel` 之间通过属性 `panelOrder` 控制绘制优先级。相同 `panelOrder` 下，根据它们所挂载的 `Object3D` 在场景树中的顺序为准。
3. `WorldPanel` 之间通过属性 `panelOrder` 控制绘制优先级。相同 `panelOrder` 下，可以通过 `needSortOnCameraZ` 来让 `UIPanel` 根据相机远近距离自动排序。

```ts
let panel1 = new Object3D().addComponent(ViewPanel);
let panel2 = new Object3D().addComponent(ViewPanel);
let panel3 = new Object3D().addComponent(WorldPanel);
let panel4 = new Object3D().addComponent(WorldPanel);

// 手动设置 panelOrder, panel2 遮挡 panel1
panel1.panelOrder = 1
panel2.panelOrder = 2

// ViewPanel 的 panel1/2 永远遮挡 WorldPanel 的 panel3/4
panel3.panelOrder = 3
panel4.panelOrder = 4 // panel4 优先遮挡 panel3

// 若 panelOrder 相同，自动根据相机位置排序
panel3.panelOrder = panel4.panelOrder = 3
panel3.needSortOnCameraZ = true;
panel4.needSortOnCameraZ = true;
```

### WorldPanel
`WorldPanel` 组件相较于 `ViewPanel` 拥有更多的属性和功能：

#### 相机锁定
我们可以通过设置面板的 `billboard` 属性来控制面板的渲染角度：

```ts
let panel = new Object3D().addComponent(WorldPanel);
panel.billboard = BillboardType.None;           //默认视角，保持物体本身的渲染角度
panel.billboard = BillboardType.BillboardY;     //锁定Y轴，面板的XZ平面始终朝向相机方向
panel.billboard = BillboardType.BillboardXYZ;   //面板始终朝向相机

```

#### 深度测试
设置面板是否参与深度排序：

```ts
let panel = new Object3D().addComponent(WorldPanel);
panel.depthTest = true;      //参与深度排序，获得遮挡关系
panel.depthTest = false;     //不参与深度排序，始终悬浮于所有物体的表面
```

#### 剔除模式
跟 [材质剔除](guide/graphics/materials#切换剔除模式) 类似，我们也可以设置 `UIPanel` 渲染材质球的 `cullMode` 来切换剔除方式：

```ts
let panel = new Object3D().addComponent(WorldPanel);
panel.cullMode = GPUCullMode.none; // 双面显示
panel.cullMode = GPUCullMode.front; // 前面剔除，背面显示
panel.cullMode = GPUCullMode.back; // 默认背面剔除，前面显示

// 或者直接设置 guiMesh.uiRenderer.material.cullMode 
let material = panel.guiMesh.uiRenderer.material;
material.cullMode = GPUCullMode.back; //默认背面剔除
```

下面这个例子，集中展示了面板之间的空间关系和 `WorldPanel` 的渲染特性：

<Demo :height="500" src="/demos/gui/panelOrder.ts"></Demo>
<<< @/public/demos/gui/panelOrder.ts