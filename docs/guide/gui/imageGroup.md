# UIImageGroup

[UIImageGroup](/api/classes/UIImageGroup) provides the display function of multiple images. This component allows you to control multiple `Quad` rendering under one component. Compared with the `UIImage` component, the main differences are as follows:
1. `UIImageGroup` multiple `Quad` is bound to an `Object3D` object. When rendering the same type of `Sprite` type in batches, `UIImageGroup` can get more efficient rendering performance;
2. Each `Quad` in `UIImageGroup` uses its own size data, and the scaling of the `UITransform` corresponding to the node will not affect each `Quad`;
3. `UIImageGroup` needs to specify the subscript `index` to find the corresponding `Quad` object, and the `Quad` attribute needs to be set by calling the corresponding `set` API.

## Initialize the image group:

```ts
...
// Create image group node
let groupObj = new Object3D();
panelRoot.addChild(groupObj);

// The ImageGroup component needs to set how many Quad nodes are built in, the default is 1
this.imageGroup = groupObj.addComponent(UIImageGroup, (count: 2));
```

## Set the texture

Same as a single `UIImage`, we first need to load the sprite atlas through `Engine3D.res.loadAtlas`, and then assign the texture content of the `quad` in the specified `index` in the image group through `setSprite`:

```ts
// Load Atlas atlas material
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// Set the 0th sprite texture
imageGroup.setSprite(0, Engine3D.res.getGUISprite('logo'));
```

## Modifying image color
同样，通过 `setColor` 更改对应 `index` 的 `quad` 颜色，如果组件有设置贴图，会乘法叠加贴图像素颜色：
Similarly, change the color of the corresponding `index` of `quad` through `setColor` in the same way. If the component has a texture, the pixel color of the texture will be multiplied and added:

```ts
imageGroup.setColor(0, new Color(1.0, 0.0, 0.0, 1.0));
```

## Modifying image size
通过 `setSize` 更改对应 `index` 的 `quad` 大小：
Change the size of the corresponding `index` of `quad` through `setSize`:

```ts
imageGroup.setSize(0, 100, 100);
```

## Component visible (visible / hidden)
图片组中，可以设置 `visible` 属性统一修改所有 `quad` 显示或隐藏:
In the image group, you can set the `visible` property to uniformly modify all `quad` display or hide:

```ts
imageGroup.visible = false;//or true
```

## Destroy image group
```ts
imageGroup.destroy();
```

## Modifying the stretching / tiling type of the specified subscript sprite

Type of sprite map: refer to [ImageType](/api/enums/ImageType.md), set the rendering type of the sprite;

- Simple: Default type, the sprite map is stretched and tiled to the specified area
- Sliced: Stretched and rendered in a nine-grid manner
- Tiled: Not supported
- Filled: Not supported

```ts
imageGroup.setImageType(0, ImageType.Simple);
```

Following example shows how to set the position and size of a single `Quad` in `UIImageGroup`:

<Demo :height="500" src="/demos/gui/imageGroup.ts"></Demo>

<<< @/public/demos/gui/imageGroup.ts


<!-- ## 性能测试
下面的示例，展示了`UIImageGroup`在批量渲染`Sprite`时优越的性能。

<Demo :height="500" src="/demos/gui/imageGroup2.ts"></Demo>

<<< @/public/demos/gui/imageGroup2.ts -->
