# UITextField

[UITextField](/api/classes/UITextField.md) 组件可以加载基于 `BMFont` 的字体图集，在引擎中提供高性能的文本渲染能力。

```ts
import { Engine3D } from '@orillusion/core';
// 加载 BMFont 字体文件
await Engine3D.res.loadFont('fnt/0.fnt');
// 激活UICanvas
let canvas = this.scene.view.enableUICanvas();
// 创建用于显示UI的面板
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// 面板加入到系统canvas中
canvas.addChild(panelRoot);
// 创建文本节点
let textQuad = new Object3D();
panelRoot.addChild(textQuad);
this.text = textQuad.addComponent(UITextField);
// 设置Rect尺寸，该尺寸会影响文本框大小
this.text.uiTransform.resize(400, 60);
this.text.uiTransform.y = 100;

this.text.text = 'Hello，Orillusion！';
this.text.fontSize = 32;
this.text.alignment = TextAnchor.MiddleCenter;
```

## 设置字体
文本组件依赖于 `BMFont` 图集，你需要先加载 `fnt` 图集文件到引擎中，然后文本才能被正常显示出来
> 制作 `BMFont` 字体文件依赖外部第三方工具，用户可以自行搜索
```ts
// 加载支持微软雅黑的 BMFont 字体文件
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
```ts
text.uiTransform.resize(200, 200);//设置文本块为（200,200）。
```

## 设置组件visible（可见/隐藏）
```ts
text.visible = false;//true
```

## 销毁文本
```ts
text.destroy();
```

<Demo :height="500" src="/demos/gui/textfield.ts"></Demo>

<<< @/public/demos/gui/textfield.ts