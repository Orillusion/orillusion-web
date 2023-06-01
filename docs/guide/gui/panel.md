---
aside: false
---
# 多面板

前文说过，引擎内部提供了 `ViewPanel` 和 `WorldPanel` 两种模式的 GUI 面板容器:
1. ViewPanel：
    > 对应 `GUISpace.View`，这种容器内部的UI组件将会在屏幕空间内投影，被渲染，不参与到`Scene3D` 中排序和产生遮挡关系；

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

下面这个例子，集中展示了多种 `GUI` 组件 以及多 `UIPanel` 混合渲染：

<Demo :height="500" src="/demos/gui/demo.ts"></Demo>

<<< @/public/demos/gui/demo.ts
