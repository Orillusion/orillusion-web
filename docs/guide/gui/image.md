# UIImage

[UIImage](/api/classes/UIImage) provides the display function of the image. You can load a single image or load a list of sprite atlas `GUISprite` to the engine through `loadAtlas`, and then specify `GUISprite` to assign to the image component for rendering.

:::tip
Making `Atlas` sprite atlas depends on external third-party tools, please search for the production method by yourself. The default `UIImage` component does not set the sprite map, and it will be presented in the form of a white square
:::

```ts
import { Engine3D } from '@orillusion/core';

// Create a panel for displaying UI
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// Enable UICanvas
let canvas = this.scene.view.enableUICanvas();
// Add the panel to the system canvas
canvas.addChild(panelRoot);
// Create image node
let imageQuad = new Object3D();
panelRoot.addChild(imageQuad);
this.image = imageQuad.addComponent(UIImage);
this.image.uiTransform.resize(400, 60);
this.image.uiTransform.y = 100;

// Load Atlas atlas material
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
this.image.sprite = Engine3D.res.getGUISprite('logo');
```

## Loading Atlas

`Atlas` contains a set of bitmap image objects. We can load all the atlas through `Engine3D.res.loadAtlas`, and then get one of the element images through `Engine3D.res.getGUISprite` and assign it to the component for rendering.

```ts
// Load Atlas atlas material
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// The logo material is defined in UI_atlas.json
image.sprite = Engine3D.res.getGUISprite('logo');
```

## Loading Single Image
We can also use the already created `Texture2D` object to automatically generate a `GUISprite`, and then assign it to the `UIImage` component for display:
```ts
let bitmapTexture2D = new BitmapTexture2D();
// Set y-axis flip
bitmapTexture2D.flipY = true;
// Load texture
await bitmapTexture2D.load('images/webgpu.png');
// Create GUISprite
let mySprite = makeAloneSprite('webgpu', bitmapTexture2D);
// Assign GUISprite to UIImage component
this.image.sprite = mySprite;
```


## Change Image Color

The color of the image can be changed by setting the `color` property. If the component has a texture, the pixel color of the texture will be multiplied and added.

```ts
image.color = new Color(1.0, 0.0, 0.0, 1.0); //red
```

## Modify image size
通过调用 `uiTransform.resize()` 来进行图片大小的调节
By calling `uiTransform.resize()` to adjust the size of the image

```ts
image.uiTransform.resize(150, 150)
```

## Component visible (visible / hidden)

```ts
image.visible = false;//true
```

## Destroy image
```ts
image.destroy();
```

## Stretch / tiling type

Type of sprite map: refer to [ImageType](/api/enums/ImageType.md), set the rendering type of the sprite;

- Simple: Default type, the sprite map is stretched and tiled to the specified area
- Sliced: Stretched and rendered in a nine-grid manner
- Tiled: Not supported
- Filled: Not supported

```ts
image.imageType = ImageType.Simple;
```

<Demo :height="500" src="/demos/gui/image.ts"></Demo>

<<< @/public/demos/gui/image.ts