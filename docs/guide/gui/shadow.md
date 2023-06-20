# UIShadow

[UIShadow](/api/classes/UIShadow) component can give the `GUIRenderer` component a shadow effect. If the same `Object3D`
is registered with multiple rendering components `GUIRenderer`, such as `UITextField` and `UIImage` at the same time,
each `GUIRenderer` needs to be added separately `UIShadow` component

```ts
import { Engine3D } from '@orillusion/core';

// Create a panel object for displaying UI
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// Activate UICanvas
let canvas = this.scene.view.enableUICanvas();
// Add panel to system canvas
canvas.addChild(panelRoot);
// Create image node
let imageQuad = new Object3D();
panelRoot.addChild(imageQuad);
this.image = imageQuad.addComponent(UIImage);
this.image.uiTransform.resize(400, 60);
this.image.uiTransform.y = 100;
// Register shadow component
let shadow = panelRoot.addComponent(UIShadow);
shadow.quality = 1;// [0-4] 0: Cancel shadow, 1, single shadow, 2/3/4 multi shadow
```

## shadowQuality

By setting `shadowQuality`, the projection quality can be adjusted. The higher the quality, the more system performance
is consumed

|     0     |       1       |       2       |       3       |        4         |
|:---------:|:-------------:|:-------------:|:-------------:|:----------------:|
| no shadow | single shadow | double shadow | triple shadow | quadruple shadow |

```ts
let shadow: UIShadow;
shadow.shadowQuality = 1;
```

## shadowOffset

By setting `shadowOffset`, the offset of the shadow relative to the original rendering unit can be adjusted

```ts
let shadow: UIShadow;
shadow.shadowOffset = new Vector2(4.0, -4.0); // +x: right, +y: up
```

## shadowRadius

By setting `shadowRadius`, the diffusion distance of each projection can be adjusted

```ts
let shadow: UIShadow;
shadow.shadowRadius = 2;
```

## shadowColor

By setting `shadowRadius`, the color and transparency of the projection can be adjusted

```ts
let shadow: UIShadow;
shadow.shadowColor = new Color(0.1, 0.5, 0.0, 0.8);
```

## isShadowless

When multiple `GUIRenderer` components are mounted on the same `Object3D`, you can manually shield the projection
ability of the specified component by setting the `isShadowless` property of the component, and only keep the component
you want to project:

```ts
// Create ui node
let root = new Object3D();
// Mount UIImage
let image = root.addComponent(UIImage);
// image will not produce shadows
image.isShadowless = true;
// Mount TextField
let textField = root.addComponent(UITextField);

// Mount projection component UIShadow
let shadow = root.addComponent(UIShadow);
// Set projection properties
shadow.shadowQuality = 1;
shadow.shadowColor = new Color(0.1, 0.5, 0.0, 0.8);
shadow.shadowOffset = new Vector2(4.0, -4.0);
shadow.shadowRadius = 4.0;
```

Because `image` shields the projection ability, `UIShadow` will only work on `textField`.

<Demo :height="500" src="/demos/gui/shadow.ts"></Demo>

<<< @/public/demos/gui/shadow.ts