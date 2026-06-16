---
aside: false
---
# Outline
The engine implements the function of drawing the non-occluded part of the outline for a specified object. You can individually set the width of the solid line and the fade-out part of the outline to achieve different styles.
```ts
import {Engine3D, View3D, OutlinePost } from '@orillusion/core';
// Initialize the engine
let engine = await Engine3D.init();
engine.setting.render.postProcessing.outline.outlinePixel = 2;
engine.setting.render.postProcessing.outline.fadeOutlinePixel = 4;

// Add OutlinePost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(OutlinePost);

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
engine.startRenderView(view);
```
[engine.setting.render.postProcessing.outline](/api/types/OutlineSetting.md) configuration parameters.

| Parameter | Type | Description |
| --- | --- | --- |
| outlinePixel | number | The pixel width of the hard edge of the outline |
| fadeOutlinePixel | number | The pixel width of the outline fade-out |


Specify the outline list through [outlinePostManager](/api/classes/OutlinePostManager). Currently, `outline` can specify up to 8 groups of lists, and each group can be set to a different outline color; multiple objects can be set within a single group. The order of the groups determines the priority of the outline coverage.

```ts
let obj1 = new Object3D()
let obj2 = new Object3D()

// Set Outline targets, divided into 2 groups with 2 colors
outlinePostManager.setOutlineList([[obj1], [obj2]], [new Color(1, 0.2, 0, 1), new Color(0.2, 1, 0)]);
```

<Demo src="/demos/advanced/Sample_outline.ts"></Demo>

<<< @/public/demos/advanced/Sample_outline.ts
