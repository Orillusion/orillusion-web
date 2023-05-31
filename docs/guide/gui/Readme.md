# 用户界面（GUI）

Orillusion提供了高性能的用户界面（GUI）组件供开发者使用。在使用该过模块之前，需要加载一些相关的素材资源供用户界面组件渲染。
根据美术设计图稿的排版和布局，合理搭配使用GUI组件，即可在项目中展示2D/3D的GUI内容。

> 用户界面往往会依赖一些外部字体数据、精灵图集等素材。制作这些图集请参考文档制作文本图集、制作精灵图集。

## GUI 空间模式

目前 `GUISpace` 支持两种模式 `ViewSpace` 和 `WorldSpace`：

- ViewSpace模式：在这种模式下，UI在屏幕空间中，不随3D相机的更改而变动；
- WorldSpace模式：在这种模式下，UI可看做三维空间的一块画布，拥有3D属性（旋转、缩放、平移），能够参与深度检测等，实现与其他对象遮挡和被遮挡关系。

引擎中，每个View3D中内置有Canvas的数组，用于激活`UICanvas`：
> 通过指定下标index来主动激活 `guiCanvas` :

```ts
let index = 0;
let canvas = exampleScene.view.enableUICanvas(index);
```

> 可以同时存在多个`UICanvas`，他们互相独立:

```ts
let canvas0 = exampleScene.view.enableUICanvas(0);
let canvas1 = exampleScene.view.enableUICanvas(1);
let canvas2 = exampleScene.view.enableUICanvas(2);
//...
```

> 用户的每一个面板`UIPanel`都需要放入到`UICanvas`节点中被搜集用于UI绘制；
```ts
let panel: UIPanel;
let canvas = exampleScene.view.enableUICanvas();//默认启用下标为0的UICanvas
canvas.addChild(panel.object3D);
```

> 每个UIPanel可以视为面板根节点，在Panel下可以组织各种UI组件，用于展示UI细节。

```ts
let panel: UIPanel;
let imageQuad = new Object3D();
panel.object3D.addChild(imageQuad);
let image = imageQuad.addComponent(UIImage);
```


```ts
import { Object3D, Engine3D, GUISpace, WorldPanel, ViewPanel, UITextField, TextAnchor, Object3DUtil, UIPanel, UIImage, UIShadow } from "@orillusion/core";

// 加载fnt数据
function initUI(){
    await Engine3D.res.loadFont('fnt/0.fnt');
    //激活UICanvas（index:0）
    let canvas = this.scene.view.enableUICanvas();
    //定义panel的空间类型
    let space: GUISpace = GUISpace.World; // View or World
    let panel: UIPanel;
    //创建Panel
    if (space == GUISpace.World) {
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.2;
        panel = panelRoot.addComponent(WorldPanel, { billboard: true });//激活billboard
    } else {
        panel = panelRoot.addComponent(ViewPanel);
    }
    //将panel放入到canvas中
    canvas.addChild(panel.object3D);
    //创建文本节点
    let textQuad = new Object3D();
    panelRoot.addChild(textQuad);
    //加入UIImage组件作为background
    let backGround = textQuad.addComponent(UIImage);
    backGround.color.a = 0.2;
    //创建文本组件
    this.text = textQuad.addComponent(UITextField);
    this.text.uiTransform.resize(400, 60);
    this.text.uiTransform.y = 100;
    this.text.text = 'Hello，Orillusion！';
    this.text.fontSize = 32;
    this.text.alignment = TextAnchor.MiddleCenter;
}

```