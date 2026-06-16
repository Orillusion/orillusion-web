---
aside: false
---
# Ambient Occlusion - GTAO
`AO` is used to depict the effect of objects occluding the surrounding diffuse light when they intersect or come close to each other. It can solve or improve problems such as light leakage, floating, and unrealistic shadows, and can solve or improve the unclear representation of gaps, folds, wall corners, edge lines, and small objects in the scene. It comprehensively improves details, especially shadows in dark areas, enhances the sense of depth and realism of space, and at the same time strengthens and improves the contrast between light and dark, enhancing the artistry of the image. Internally, the engine samples the pixels within a specified screen range and within a specified distance range, and computes an integral to assign the current pixel's `AO` coefficient.
```ts
//Initialize the engine
let engine = await Engine3D.init();

engine.setting.render.postProcessing.gtao.maxDistance = 5;
engine.setting.render.postProcessing.gtao.maxPixel = 50;
engine.setting.render.postProcessing.gtao.darkFactor = 1;
engine.setting.render.postProcessing.gtao.rayMarchSegment = 6;
engine.setting.render.postProcessing.gtao.multiBounce = true;
engine.setting.render.postProcessing.gtao.blendColor = true;

// Add GTAOPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(GTAOPost);

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
engine.startRenderView(view);
```

[engine.setting.render.postProcessing.gtao](../../api/types/GTAOSetting.md) configuration parameters.
| Parameter | Type | Description |
| --- | --- | --- |
| maxDistance | number | Sets the maximum distance when searching the surrounding 3D space during AO sampling.|
| maxPixel | number | Sets the maximum distance when searching the surrounding pixels during AO sampling.|
| darkFactor | number | Sets the coefficient of the AO value when output to the screen, 1: full output, 0: no output.|
| rayMarchSegment | number | Sets the number of marching steps during AO sampling. The larger the value, the better the quality of the AO effect, but the more performance it consumes.|
| multiBounce | boolean | Whether to simulate color bouncing.|
| blendColor | boolean | true: blend with the mainColor of the GBuffer; false: output only the AO color.|

<Demo src="/demos/advanced/Sample_gtao.ts"></Demo>

<<< @/public/demos/advanced/Sample_gtao.ts
