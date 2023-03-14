# UIImage

UIImage组件提供图片的显示功能；

> 图片组件依赖于图集，你需要先加载精灵图集到引擎中，然后指定精灵赋予图片组件供渲染。

> 默认UIImage组件未设置精灵，将以白色方块形式呈现

```ts
import { Engine3D } from '@orillusion/core';
// 加载精灵图集素材
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// 创建用于显示UI的面板
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// 面板加入到系统canvas中
renderJob.guiCanvas.addGUIChild(panelRoot);
// 创建图片节点
let imageQuad = new Object3D();
panelRoot.addChild(imageQuad);
this.image = imageQuad.addComponent(UIImage);
this.image.uiTransform.resize(400, 60);
this.image.uiTransform.y = 100;

this.image.texture = Engine3D.res.getSubTexture('logo');
```

# texture

设置精灵：根据精灵的name匹配获取到对应的图片，赋予该组件进行渲染。

```ts
image.texture = Engine3D.res.getSubTexture('logo');
```

# color

颜色：修改图片的颜色(Color)，使用乘法叠加计算。

```ts
image.color = new Color(1.0, 0.0, 0.0, 1.0);//red
```

# imageType

精灵图类型：参考`ImageType`，设置精灵的渲染类型；

1.Simple：默认类型，精灵图被拉伸平铺到指定区域；
2.Sliced：按照九宫格的方式进行拉伸渲染；
3.Tiled：未支持；
4.Filled：未支持。

<Demo :height="500" src="/demos/gui/image.ts"></Demo>

<<< @/public/demos/gui/image.ts`