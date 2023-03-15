# UITextField

[UITextField](/api/classes/UITextField.md) 组件提供文本的显示功能；

> 文本组件依赖于 `BMFont` 图集，你需要先加载字体图集到引擎中，文本才能被正常显示出来。


```ts
import { Engine3D } from '@orillusion/core';
// 加载 BMFont 文件
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

## 设置字体
文本组件依赖于 `BMFont` 图集，你需要先加载 `fnt` 图集文件到引擎中，然后文本才能被正常显示出来
```ts
// 加载 BMFont字体
await Engine3D.res.loadFont('path/to/font.fnt');
text.font = '微软雅黑';
```

## 设置内容
```ts
// 修改组件text
text.text = 'Hello，Orillusion！';
```

## 字体大小
```ts
text.fontSize = 32;
```

## 对齐方式
参考 [TextAnchor](/api/enums/TextAnchor.md)，有九种对齐方式
```ts
text.alignment = TextAnchor.UpperLeft;
```

## 字体颜色
```ts
text.color = new Color(1.0, 0.0, 0.0, 1.0);// 默认为白色
```

## 行间距
```ts
text.lineSpacing = 1.5; //设置行距为字号尺寸的1.5倍。
```

## 文本框大小
可以通过 `resize` 调整大小
```ts
text.resize(200, 200);//设置文本块为（200,200）。
```

<Demo :height="500" src="/demos/gui/textfield.ts"></Demo>

<<< @/public/demos/gui/textfield.ts