# UIPanel
引擎内部提供了`ViewPanel`和`WorldPanel`两种模式的GUI面板容器:
1. ViewPanel：
    > 对应`GUISpace.View`，这种容器内部的UI组件将会在屏幕空间内投影，被渲染，不参与到`Scene3D`中排序和产生遮挡关系；

2. WorldPanel：
    > 对应`GUISpace.World`，在这个容器下面的UI组件，将会在3D场景中渲染，参与排序和产生遮挡关系；
    > 相比ViewPanel，需要关注`panelOrder`以及`needSortOnCameraZ`的设置。

<Demo :height="500" src="/demos/gui/panel.ts"></Demo>

<<< @/public/demos/gui/panel.ts
