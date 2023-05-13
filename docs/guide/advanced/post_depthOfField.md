---
aside: false
---
# DepthOfField
The engine implements a depth of field effect that defines the nearest and farthest thresholds from the camera, within which objects are in focus. Once beyond the nearest threshold, objects become increasingly blurred with distance until the farthest threshold is reached and the maximum blur amount is applied.
```ts
//Initialize the engine.
await Engine3D.init();

//Set the near and far thresholds, and pixel offset of the depth of field effect.
Engine3D.setting.render.postProcessing.depthOfView.near = 150;
Engine3D.setting.render.postProcessing.depthOfView.far = 300;
Engine3D.setting.render.postProcessing.depthOfView.pixelOffset = 1;

// Add DepthOfFieldPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(DepthOfFieldPost); //Depth of field effect.

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.depthOfView](../../api/types/DepthOfViewSetting.md) configuration parameters

| Parameter | Type | Description |
| --- | --- | --- |
| near | number | Objects closer to the camera than this distance are not blurred.|
| far | number | Objects farther from the camera than this distance are blurred at maximum amount. Objects within the range[near,far]are blurred with a linear interpolation factor between 0 and 1.|
| pixelOffset | number | Pixel offset of the blur effect.|

<Demo src="/demos/advanced/Sample_depth.ts"></Demo>

<<< @/public/demos/advanced/Sample_depth.ts