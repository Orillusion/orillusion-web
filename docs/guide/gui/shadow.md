# UIShadow

[UIShadow](/api/classes/UIShadow) 组件可以赋予具有渲染能力组件 `GUIRenderer`（或者继承于它）获得投影效果。

> 同一个Object3D可以注册多个具有渲染能力的组件 `GUIRenderer`，比如可以同时拥有 `UITextField`和`UIImage`；

> 一个UIShadow仅仅只会对一个`GUIRenderer`起作用。

```ts
import { Engine3D } from '@orillusion/core';

// 创建用于显示UI的面板
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// 激活UICanvas
let canvas = this.scene.view.enableUICanvas();
// 面板加入到系统canvas中
canvas.addGUIChild(panelRoot);
// 创建图片节点
let imageQuad = new Object3D();
panelRoot.addChild(imageQuad);
this.image = imageQuad.addComponent(UIImage);
this.image.uiTransform.resize(400, 60);
this.image.uiTransform.y = 100;
// 注册投影组件
let shadow = panelRoot.addComponent(UIShadow);
shadow.quality = 1;//[0-4] 0：取消投影，1，单投影，2/3/4多投影
```

## shadowQuality
通过设置 `shadowQuality` 可以调节投影品质, 品质越高，越消耗系统性能

| 0 | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: |
| 无阴影 | 单投影 | 双投影 | 三重投影 | 四重投影 |

```ts
let shadow: UIShadow;
shadow.shadowQuality = 1;
```


## shadowOffset
通过设置 `shadowOffset` 可以调节阴影相对原渲染单位偏移量

```ts
let shadow: UIShadow;
shadow.shadowOffset = new Vector2(4.0, -4.0); // +x: right, +y: up
```

## shadowRadius
通过设置 `shadowRadius` 可以调节各个投影的扩散距离

```ts
let shadow: UIShadow;
shadow.shadowRadius = 2;
```

## shadowColor
通过设置 `shadowRadius` 可以调节投影的颜色，透明度
```ts
let shadow: UIShadow;
shadow.shadowColor = new Color(0.1, 0.5, 0.0, 0.8);
```

## isShadowless
通过设置 `isShadowless` 可以设置组件是否产生投影
```ts
let image: UIImage;
shadow.isShadowless = true; //设置为屏蔽投影
```
当有多个 `GUI` 组件挂载在同一个 `Object3D`上时，会产生多个投影造成干扰，我们可以设置 `isShadowless` 屏蔽某个组件投影
```ts
// 创建ui节点
let root = new Object3D();
// 挂载 UIImage
let image = root.addComponent(UIImage);
//image 将不产生投影
image.isShadowless = true;
//挂载 TextField
let textField = root.addComponent(UITextField);

// 挂载投影组件 UIShadow
let shadow = root.addComponent(UIShadow);
// 设置投影属性
shadow.shadowQuality = 1;
shadow.shadowColor = new Color(0.1, 0.5, 0.0, 0.8);
shadow.shadowOffset = new Vector2(4.0, -4.0);
shadow.shadowRadius = 4.0;
```
由于 `image` 屏蔽了投影能力，`UIShadow` 将只会作用于 `textField` 上

<Demo :height="500" src="/demos/gui/shadow.ts"></Demo>

<<< @/public/demos/gui/shadow.ts