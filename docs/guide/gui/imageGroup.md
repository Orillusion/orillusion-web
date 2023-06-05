# UIImageGroup

[UIImageGroup](/api/classes/UIImageGroup) 组件提供多图片的显示，该组件允许你在一个组件下，同时控制多个`Quad`的渲染。相较于`UIImage`组件他们的区别如下：
> `UIImageGroup`多个`Quad`只绑定在一个`Object3D`对象，在有批量渲染同类型`Sprite`类型需求的时候，应用该组件可以获得更加高效的渲染性能；

> 反过来`UIImageGroup`是由多个`Quad`被注册到一个组件里面，它们在被独立控制的时候会有一定的不方便；

> `UIImageGroup`中每个`Quad`使用自身的尺寸数据，节点所对应的`UITransform`的缩放不会对每个`Quad`产生影响；

> API大不相同，`UIImageGroup`中往往需要指定下标`index`找到对应的`Quad`才能控制，其格式一般为`setProperptyAt`的形式。

下面的例子展示了使用`ImageGroup`的一般步骤：

```ts
import { Engine3D } from '@orillusion/core';

// 创建用于显示UI的面板
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// 激活UICanvas
let canvas = this.scene.view.enableUICanvas();
// 面板加入到系统canvas中
canvas.addChild(panelRoot);
// 创建图片组节点
let groupObj = new Object3D();
panelRoot.addChild(groupObj);
// ImageGroup组件需要明文提示初始化多少个Quad，否则将默认只有一个Quad被内置
this.imageGroup = groupObj.addComponent(UIImageGroup, (count: 2));

// 加载 Atlas 图集素材
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
let upSprite = Engine3D.res.getGUISprite('button-up');
let downSprite = Engine3D.res.getGUISprite('button-down');

// 设置下标为0的位置Quad的精灵为upSprite
this.imageGroup.setSprite(0, upSprite);
// 设置下标为1的位置Quad的精灵为downSprite
this.imageGroup.setSprite(1, downSprite);
// 设置下标为0位置的Quad坐标（x，y）为（-100，-100）
this.imageGroup.setXY(0, -100, -100);
// 设置下标为1位置的Quad颜色为红色
this.imageGroup.setXY(1, new Color(1.0, 0, 0, 1.0));
```

## 设置指定下标精灵的贴图

`Atlas` 封装了一组位图图片对象，我们可以通过 `Engine3D.res.loadAtlas` 加载全部图集，然后通过 `Engine3D.res.getGUISprite` 获取其中某一个元素图片，赋予组件进行渲染。

```ts
// 加载 Atlas 图集素材
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// 在 UI_atlas.json 定义了 logo 素材
imageGroup.setSprite(0, Engine3D.res.getGUISprite('logo'));
```


## 修改指定下标精灵的颜色

通过设置 `color` 属性更改图片颜色，如果组件有设置贴图，会乘法叠加贴图像素颜色。

```ts
let color = new Color(1.0, 0.0, 0.0, 1.0); //red
imageGroup.setColor(0, color);
```

## 设置组件visible（可见/隐藏）
该组件下全量的Quad的visible都将被设置为目标值。

```ts
imageGroup.visible = false;//or true

```

## 销毁图片组
```ts
imageGroup.destroy();
```

## 修改指定下标精灵的拉伸/平铺类型

精灵图类型：参考 [ImageType](/api/enums/ImageType.md)，设置精灵的渲染类型；

- Simple：默认类型，精灵图被拉伸平铺到指定区域
- Sliced：按照九宫格的方式进行拉伸渲染
- Tiled：未支持
- Filled：未支持

```ts
imageGroup.setImageType(0, ImageType.Simple);
```

下面的示例，通过滑块调整同一个`UIImageGroup`组件中，单个`Quad`的位置。

<Demo :height="500" src="/demos/gui/imageGroup.ts"></Demo>

<<< @/public/demos/gui/imageGroup.ts


<!-- ## 性能测试
下面的示例，展示了`UIImageGroup`在批量渲染`Sprite`时优越的性能。

<Demo :height="500" src="/demos/gui/imageGroup2.ts"></Demo>

<<< @/public/demos/gui/imageGroup2.ts -->
