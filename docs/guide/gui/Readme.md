# 用户界面（GUI）

Orillusion提供了高性能的用户界面（GUI）组件供开发者使用。在使用该过模块之前，需要加载一些相关的素材资源供用户界面组件渲染。
根据美术设计图稿的排版和布局，合理搭配使用GUI组件，即可在项目中展示2D/3D的GUI内容。

> 用户界面往往会依赖一些外部字体数据、精灵图集等素材。制作这些图集请参考文档制作文本图集、制作精灵图集。

## UI的两种呈现模式`GUISpace`，ViewSpace/WorldSpace：

1.ViewSpace模式：在这种模式下，UI在屏幕空间中，不随3D相机的更改而变动；
2.WorldSpace模式：在这种模式下，UI可看做三维空间的一块画布，拥有3D属性（旋转、缩放、平移），能够参与深度检测等，实现与其他对象遮挡和被遮挡关系。

> 引擎内置有Canvas`guiCanvas`节点作为GUI的根节点，用户的每一个面板`UIPanel`都将放入到Canvas节点中被搜集用于UI绘制；
> 每个UIPanel可以视为面板根节点，在Panel下可以组织各种UI组件，用于展示UI细节。

```ts
import { Engine3D } from '@orillusion/core';
// 加载支持 Morph 状态模型
await Engine3D.res.loadFont('fnt/0.fnt');
// 创建用于显示UI的面板
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// 面板加入到系统canvas中
renderJob.guiCanvas.addGUIChild(panelRoot);
// 创建文本节点
let textQuad = new Object3D();
panelRoot.addChild(textQuad);
this.text = textQuad.addComponent(UITextField);
this.text.uiTransform.resize(400, 60);
this.text.uiTransform.y = 100;

this.text.text = 'Hello，Orillusion！';
this.text.fontSize = 32;
this.text.alignment = TextAnchor.MiddleCenter;

```