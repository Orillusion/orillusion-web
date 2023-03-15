# UIImage

[UIImage](/api/classes/UIImage) 组件提供图片的显示功能, 跟字体组件一样，图片组件依赖于 `Atlas` 图集，你需要先加载精灵图集到引擎中，然后指定精灵赋予图片组件供渲染。

> 默认 `UIImage` 组件未设置精灵，将以白色方块形式呈现

```ts
import { Engine3D } from '@orillusion/core';

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

// 加载 Atlas 图集素材
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
this.image.texture = Engine3D.res.getSubTexture('logo');
```

## 设置组件贴图

`Atlas` 封装了一组位图图片对象，我们可以通过 `Engine3D.res.loadAtlas` 加载全部图集，然后通过 `Engine3D.res.getSubTexture` 获取其中某一个元素图片，赋予组件进行渲染。

```ts
// 加载 Atlas 图集素材
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// 在 UI_atlas.json 定义了 logo 素材
image.texture = Engine3D.res.getSubTexture('logo');
```

## 修改图片颜色

通过设置 `color` 属性更改图片颜色，如果组件有设置贴图，会乘法叠加贴图像素颜色

```ts
image.color = new Color(1.0, 0.0, 0.0, 1.0); //red
```

## 渲染类型

精灵图类型：参考 [ImageType](/api/enums/ImageType.md)，设置精灵的渲染类型；

- Simple：默认类型，精灵图被拉伸平铺到指定区域
- Sliced：按照九宫格的方式进行拉伸渲染
- Tiled：未支持
- Filled：未支持

<Demo :height="500" src="/demos/gui/image.ts"></Demo>

<<< @/public/demos/gui/image.ts