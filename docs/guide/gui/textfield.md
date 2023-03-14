# UITextField

UITextField组件提供文本的显示功能；


> 文本组件依赖于字体图集，你需要先加载字体图集到引擎中，文本才能被正常显示出来。


```ts
import { Engine3D } from '@orillusion/core';
// 加载font文件
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

# font

字体：匹配字体素材的字段`face="微软雅黑"`。

```ts
text.font = '微软雅黑';
```

# text

文本内容：get/set文本内容。

```ts
text.text = 'Hello，Orillusion！';
```

# fontSize

字体大小：基于字体素材字段`size=42`，对文本尺寸加以线性缩放。

```ts
text.fontSize = 32;
```

# alignment

对齐方式：参考`TextAnchor`，枚举有九种对齐方式。

```ts
text.alignment = TextAnchor.UpperLeft;
```

# color

颜色：修改文本的颜色(Color)，默认白色。

```ts
text.color = new Color(1.0, 0.0, 0.0, 1.0);//red
```

# lineSpacing

行距：设置文本的上下行距离，默认距离为字号的一倍。

```ts
text.lineSpacing = 1.5;//设置行距为字号尺寸的1.5倍。
```

# resize

重设文本块尺寸。

```ts
text.resize(200, 200);//设置文本块为（200,200）。
```

<Demo :height="500" src="/demos/gui/textfield.ts"></Demo>

<<< @/public/demos/gui/textfield.ts`