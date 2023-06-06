---
aside: false
---
# UIPanel


前文说过，引擎内部提供了 `ViewPanel` 和 `WorldPanel` 两种模式的 GUI 面板容器:
1. ViewPanel：
    > 对应 `GUISpace.View`，这种容器内部的UI组件将会在屏幕空间直接渲染，不会与`Scene3D` 中其他的3D显示对象排序和产生遮挡关系；

2. WorldPanel：
    > 对应 `GUISpace.World`，在这个容器下面的 GUI 组件，将会在3D场景中渲染，参与排序和产生遮挡关系.

如果同一场景中出现多个 GUI 面板同时渲染，我们可以通过 `panelOrder` 以及 `needSortOnCameraZ` 来设置组件之间的空间关系:

```ts
let panel1 = new Object3D().addComponent(WorldPanel);
let panel2 = new Object3D().addComponent(WorldPanel);

// 根据和摄像机的空间关系自动遮挡
panel1.needSortOnCameraZ = true;
panel2.needSortOnCameraZ = true;

// 或者手动直接设置 panelOrder
panel1.panelOrder = 1
panel2.panelOrder = 2 // panel2 会遮挡 panel1
```

## UIPanel之间的遮挡规则
在同一个`UICanvas`下，可以允许有多个 `ViewPanel` 或者 `WorldPanel` 共存，他们的显示层级关系：

> `ViewPanel` 总是会显示在 `WorldPanel` 之上。

> `ViewPanel`与`ViewPanel`之间通过属性`panelOrder`控制绘制优先级。相同的`panelOrder`下，根据他们在场景中的目录树获得优先级。参照`Object3D.getComponent()`获取组件列表的结果。

> `WorldPanel`与`WorldPanel`之间通过属性`panelOrder`控制绘制优先级。相同的`panelOrder`下，你还可以通过`needSortOnCameraZ`来让`UIPanel`根据相机远近距离自动排序。

## WorldPanel更多详细内容
`WorldPanel`组件相较于`ViewPanel`拥有更多的属性和功能：

> 设置公告板类型：`billboard`

```ts
let panel = new Object3D().addComponent(WorldPanel);
panel.billboard = BillboardType.None;           //取消公告板类型（保留当前的旋转角度）
panel.billboard = BillboardType.BillboardY;     //锁定Y轴，只允许在XZ轴旋转，并朝向相机
panel.billboard = BillboardType.None;           //一直朝向相机

```

> 设置面板在3D场景中的遮挡规则：
原理同设置材质球的属性`cullMode`获得遮挡规则，参照`GPUCullMode`。

```ts
let panel = new Object3D().addComponent(WorldPanel);
panel.depthTest = true;      //参与深度排序，获得遮挡关系
panel.depthTest = false;     //悬浮于3D物体的表面
```

或者你也可以直接控制材质球的属性：

```ts
let panel = new Object3D().addComponent(WorldPanel);
let material = panel.guiMesh.uiRenderer.material;
material.cullMode = GPUCullMode.back;//背面剔除
```

`UIPanel`设计为继承自`UIImage`，但是默认该`visible`设置为`false`。
如果需要将面板放置一个默认的背景图，你可以设置`visible`为`true`，然后当做`UIImage`来使用。
> 关于`UIImage`的详细内容，请查看`图片`。

下面这个例子展示了 `ViewPanel`与`WorldPanel`的切换，以及效果对比：
<Demo :height="500" src="/demos/gui/panel.ts"></Demo>

<<< @/public/demos/gui/panel.ts

## 层级关系
通过下面这个例子，展示了两个`WorldPanel`之间的层级数据调整后，面板间的遮挡关系变化：

> 使用滑块调整各面板的渲染优先级；

> 使用勾选框控制面板是否参与到相机深度排序中。

需要特别留意当两个面板order相同时：

> 参与相机深度排序的优先级更高；

> 他们都参与相机深度排序时，距离相机更近的层级更高。

<Demo :height="500" src="/demos/gui/panelOrder.ts"></Demo>
<<< @/public/demos/gui/panelOrder.ts
