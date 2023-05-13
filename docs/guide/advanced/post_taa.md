---
aside: false
---
# TAAPost
TAAPost is a 3D rendering anti-aliasing implementation. In the process of rasterizing 3D rendering, the display objects are stored in the form of a two-dimensional array matrix, and the edges of objects in the original image inevitably have jagged edges. The method used by TAA is to slightly offset the camera according to a certain strategy, so that the objects will get slightly different results during rasterization due to different camera offset values. This is particularly evident at the edges. The color output to the screen is the result of interpolating the historical frame and the current frame, and this result is used for the next interpolation.
```ts
// Engine Global Configuration Settings
Engine3D.setting.render.postProcessing.taa.jitterSeedCount = 8;
Engine3D.setting.render.postProcessing.taa.blendFactor = 0.1;
Engine3D.setting.render.postProcessing.taa.sharpFactor = 0.6;
Engine3D.setting.render.postProcessing.taa.sharpPreBlurFactor = 0.5;
Engine3D.setting.render.postProcessing.taa.temporalJitterScale = 0.6;

//Initialize Engine
await Engine3D.init();
// Add post-processing components
let postProcessing = this.scene.addComponent(PostProcessingComponent);
// Add TAAPost
let taaPost = postProcessing.addPost(TAAPost);
// By setting up the taaPost object (the engine's global configuration and the taaPost object based settings here are equivalent)
taaPost.jitterSeedCount = 8;
taaPost.blendFactor = 0.1;
taaPost.sharpFactor = 0.6;
taaPost.sharpPreBlurFactor = 0.5;
taaPost.temporalJitterScale = 0.6;
// Start rendering the view
let view = new View3D();
view.scene = this.scene;
view.camera = mainCamera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.taa](../../api/types/TAASetting.md) Configuration Parameters:

| Parameter	 | Type | 	Description |
| --- | --- | --- |
| jitterSeedCount | number | The number of random seeds used for jittering the camera. Default is 8. (Reducing the number can solve some problems where the jitter is too obvious, but the jaggedness will become more obvious.) |
| blendFactor | number | 	The coefficient for blending the historical frame and the current frame. The smaller the parameter, the smaller the current frame ratio.|
| sharpFactor | number | The image sharpening coefficient [0.1,1.9]: the smaller the coefficient, the weaker the sharpening effect and the better the anti-aliasing effect. Conversely, the stronger the sharpening, the weaker the anti-aliasing effect.|
| sharpPreBlurFactor | number | The scaling factor of the sampling coefficient used when blurring the image.|
| temporalJitterScale | number | The scaling factor of the random offset value of the jittering camera [0,1]: the smaller the coefficient, the weaker the anti-aliasing effect, and the weaker the pixel jitter.|

<Demo src="/demos/advanced/Sample_taa.ts"></Demo>

<<< @/public/demos/advanced/Sample_taa.ts