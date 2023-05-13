---
aside: false
---
# Outline
The engine implements the function of drawing the unobstructed parts of a specified object. You can set different styles for the outlined contour line, such as solid line and faded part width.
```ts
import {Engine3D, View3D, OutlinePost } from '@orillusion/core';
// Initialize the engine
await Engine3D.init();

// Set the width of the hard edge and the width of the faded edge
Engine3D.setting.render.postProcessing.outline.outlinePixel = 2;
Engine3D.setting.render.postProcessing.outline.fadeOutlinePixel = 4;

// Add OutlinePost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(OutlinePost);
//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```
[Engine3D.setting.render.postProcessing.outline](/api/types/OutlineSetting.md) configuration parameters:

| Parameter | Type | Description |
| --- | --- | --- |
| outlinePixel | number | The pixel width of the hard edge.|
| fadeOutlinePixel | number | The pixel width of the faded edge.|


Use the [outlinePostManager](/api/classes/OutlinePostManager) to specify the outline list. Currently, `outline` can specify up to eight lists, and each list can set a different outline color. Multiple objects can be set within a single group. The order of the groups determines the priority of the outlined contours.

```ts
let obj1 = new Object3D()
let obj2 = new Object3D()

// Set the outline target, divide into two groups and two colors
outlinePostManager.setOutlineList([[obj1], [obj2]], [new Color(1, 0.2, 0, 1), new Color(0.2, 1, 0)]);
```

<Demo src="/demos/advanced/Sample_outline.ts"></Demo>

<<< @/public/demos/advanced/Sample_outline.ts