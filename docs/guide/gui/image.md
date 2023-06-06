# UIImage

[UIImage](/api/classes/UIImage) 组件提供图片的显示功能, 你可以通过加载单个图片或通过 `loadAtlas` 加载精灵图集 `GUISprite` 的列表到引擎中，然后指定 `GUISprite` 赋予图片组件供渲染。
> 制作 `Atlas` 精灵图集依赖外部第三方工具，请自行搜索制作方法。默认 `UIImage` 组件未设置精灵图，将以白色方块形式呈现

```ts
import { Engine3D } from '@orillusion/core';

// 创建用于显示UI的面板
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// 激活UICanvas
let canvas = this.scene.view.enableUICanvas();
// 面板加入到系统canvas中
canvas.addChild(panelRoot);
// 创建图片节点
let imageQuad = new Object3D();
panelRoot.addChild(imageQuad);
this.image = imageQuad.addComponent(UIImage);
this.image.uiTransform.resize(400, 60);
this.image.uiTransform.y = 100;

// 加载 Atlas 图集素材
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
this.image.sprite = Engine3D.res.getGUISprite('logo');
```

## 加载图集

`Atlas` 封装了一组位图图片对象，我们可以通过 `Engine3D.res.loadAtlas` 加载全部图集，然后通过 `Engine3D.res.getGUISprite` 获取其中某一个元素图片，赋予组件进行渲染。

```ts
// 加载 Atlas 图集素材
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// 在 UI_atlas.json 定义了 logo 素材
image.sprite = Engine3D.res.getGUISprite('logo');
```

## 加载单个图片
我们也可以通过已经创建好的 `Texture2D` 对象来主动生成一个 `GUISprite`，然后赋予 `UIImage` 组件供显示：
```ts
let bitmapTexture2D = new BitmapTexture2D();
//设置y轴翻转
bitmapTexture2D.flipY = true;
//加载贴图
await bitmapTexture2D.load('images/webgpu.png');
//创建GUISprite
let mySprite = makeAloneSprite('webgpu', bitmapTexture2D);
//将GUISprite赋予UIImage组件
this.image.sprite = mySprite;
```


## 修改图片颜色

通过设置 `color` 属性更改图片颜色，如果组件有设置贴图，会乘法叠加贴图像素颜色

```ts
image.color = new Color(1.0, 0.0, 0.0, 1.0); //red
```

## 修改图片大小
通过调用 `uiTransform.resize()` 来进行图片大小的调节

```ts
image.uiTransform.resize(150, 150)
```

## 组件visible（可见/隐藏）

```ts
image.visible = false;//true
```

## 销毁图片
```ts
image.destroy();
```

## 拉伸/平铺类型

精灵图类型：参考 [ImageType](/api/enums/ImageType.md)，设置精灵的渲染类型；

- Simple：默认类型，精灵图被拉伸平铺到指定区域
- Sliced：按照九宫格的方式进行拉伸渲染
- Tiled：未支持
- Filled：未支持

```ts
image.imageType = ImageType.Simple;
```

<Demo :height="500" src="/demos/gui/image.ts"></Demo>

<<< @/public/demos/gui/image.ts