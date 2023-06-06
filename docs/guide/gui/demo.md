---
aside: false
---
# 多面板示例

下面这个例子，使用两个 `WorldPanel` 演示在实际3D场景中两种经典的面板使用场景：
1. 其中一个面板，固定在3D场景中，面板内置有一个文本组件，文本信息可以动态实时更新内容
2. 另一个面板，它被绑定在另一个3D节点上，可以随着父节点实时更新位置；且可以通过设置 `billboard` 类型来锁定其旋转角度，让面板始终朝向相机视角；配合 `depthTest` 可以实现不会被遮挡的标注效果

<Demo :height="500" src="/demos/gui/poi.ts"></Demo>

<<< @/public/demos/gui/poi.ts

下面这个例子，集中展示了多种 `GUI` 组件组合以及多 `UIPanel` 混合渲染：

<Demo :height="500" src="/demos/gui/demo.ts"></Demo>

<<< @/public/demos/gui/demo.ts
