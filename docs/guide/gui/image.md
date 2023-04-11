# UIImage

[UIImage](/api/classes/UIImage) component provides image display functionality. Like the font component, the image component relies on the `Atlas` atlas. You need to first load the sprite atlas into the engine, and then assign the sprite to the image component for rendering.

> The default `UIImage` component has no sprite set and will be presented in white squares

```ts
import { Engine3D } from '@orillusion/core';

// Create a panel for displaying the UI
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// Adding panels to system canvas
renderJob.guiCanvas.addGUIChild(panelRoot);
// Create Image Node
let imageQuad = new Object3D();
panelRoot.addChild(imageQuad);
this.image = imageQuad.addComponent(UIImage);
this.image.uiTransform.resize(400, 60);
this.image.uiTransform.y = 100;

// Loading Atlas Materials
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
this.image.texture = Engine3D.res.getSubTexture('logo');
```

## Set component mapping

`Atlas` encapsulates a set of bitmap image objects. We can load all the atlases through `Engine3D.res.loadAtlas` , and then obtain one of the element images through `Engine3D.res.getSubTexture` , assign them to the component for rendering.

```ts
// Loading Atlas Materials
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// Define logo materials in the UI_atlas.json
image.texture = Engine3D.res.getSubTexture('logo');
```

## Modify Image Color

Change the color of the image by setting the `color` attribute. If the component has a map set, it will multiply and overlay the pixel color of the map

```ts
image.color = new Color(1.0, 0.0, 0.0, 1.0); //red
```

## Rendering Type

Sprite Image Type: Refer to [ImageType](/api/enums/ImageType.md) to set the rendering type of the sprite;

- Simple：The default type, where the sprite image is stretched and tiled to the specified area
- Sliced：Stretch rendering according to the Nine Palace Grid method
- Tiled：Not supported
- Filled：Not supported

<Demo :height="500" src="/demos/gui/image.ts"></Demo>

<<< @/public/demos/gui/image.ts