# UIImageGroup

[UIImageGroup](/api/classes/UIImageGroup) 组件提供多图片的显示，该组件允许你在一个组件下，同时控制多个 `Quad` 渲染。相较于 `UIImage` 组件，其主要区别如下：
1. `UIImageGroup` 多个 `Quad` 绑定在一个 `Object3D` 对象，在批量渲染同类型 `Sprite` 类型时，`UIImageGroup` 可以获得更加高效的渲染性能；
2. `UIImageGroup` 中每个 `Quad` 使用自身的尺寸数据，节点所对应的`UITransform` 的缩放不会对每个 `Quad` 产生影响；
3. `UIImageGroup` 需要指定下标 `index` 才能找到对应的 `Quad` 对象，设置 `Quad` 属性需要通过调用对应的 `set` API 进行设置。

## 初始化图片组：

```ts
...
// 创建图片组节点
let groupObj = new Object3D();
panelRoot.addChild(groupObj);

// ImageGroup 组件需要设置内置多少个 Quad，默认为 1 个 Quad 节点
this.imageGroup = groupObj.addComponent(UIImageGroup, (count: 2));
```

## 设置贴图

和单个 `UIImage`一样，我们首先需要通过 `Engine3D.res.loadAtlas` 来加载精灵图集，然后通过 `setSprite` 赋予图片组中指定 `index` 的 `quad` 贴图内容：

```ts
// 加载 Atlas 图集素材
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// 设置 0 位精灵贴图 
imageGroup.setSprite(0, Engine3D.res.getGUISprite('logo'));
```

## 修改图片颜色
同样，通过 `setColor` 更改对应 `index` 的 `quad` 颜色，如果组件有设置贴图，会乘法叠加贴图像素颜色：

```ts
imageGroup.setColor(0, new Color(1.0, 0.0, 0.0, 1.0));
```

## 修改图片大小
通过 `setSize` 更改对应 `index` 的 `quad` 大小：

```ts
imageGroup.setSize(0, 100, 100);
```

## 组件 visible（可见/隐藏）
图片组中，可以设置 `visible` 属性统一修改所有 `quad` 显示或隐藏:

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

下面示例展示如何在 `UIImageGroup` 中设置单个 `Quad` 的位置和大小：

<Demo :height="500" src="/demos/gui/imageGroup.ts"></Demo>

<<< @/public/demos/gui/imageGroup.ts


<!-- ## 性能测试
下面的示例，展示了`UIImageGroup`在批量渲染`Sprite`时优越的性能。

<Demo :height="500" src="/demos/gui/imageGroup2.ts"></Demo>

<<< @/public/demos/gui/imageGroup2.ts -->
