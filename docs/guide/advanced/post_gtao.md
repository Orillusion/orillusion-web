---
aside: false
---
# GTAO
`AO` is used to describe the effect of objects obscuring the diffuse light around them when they intersect or come close to each other, and can solve or improve problems such as light leakage, floating, and unrealistic shadows. It improves the representation of gaps, folds, and edges.
Small objects in the scene are also better represented.It enhances details, especially in dark shadows.The sense of depth and realism of space is improved.The contrast between light and dark is strengthened and improved.The overall artistic effect of the image is enhanced.Within the engine, by sampling the pixels within a specified distance range in the screen range and integrating them, the current pixel `AO` coefficient is assigned.
```ts
//Engine initialization
await Engine3D.init();

Engine3D.setting.render.postProcessing.gtao.maxDistance = 5;
Engine3D.setting.render.postProcessing.gtao.maxPixel = 50;
Engine3D.setting.render.postProcessing.gtao.darkFactor = 1;
Engine3D.setting.render.postProcessing.gtao.rayMarchSegment = 6;
Engine3D.setting.render.postProcessing.gtao.multiBounce = true;
Engine3D.setting.render.postProcessing.gtao.blendColor = true;

//Renderer creation
let renderJob = new ForwardRenderJob(this.scene);
renderJob.addPost(new GTAOPost());
Engine3D.startRender(renderJob);
```

[Engine3D.setting.render.postProcessing.gtao](../../api/types/GTAOSetting.md) 配置参数。
| Parameter | Type | Description |
| --- | --- | --- |
| maxDistance | number | Sets the maximum distance when searching the 3D space around during AO sampling.|
| maxPixel | number | Sets the maximum distance when searching surrounding pixels during AO sampling.|
| darkFactor | number | Sets the coefficient of the AO value when outputting to the screen, 1: all output, 0: no output.|
| rayMarchSegment | number | Sets the number of steps for the AO sampling. The larger the value, the better the quality of the AO effect, but the more performance it consumes.|
| multiBounce | boolean | Whether to simulate color bouncing.|
| blendColor | boolean | True: blend with the mainColor of GBuffer; false: output only the color of AO.|

<Demo src="/demos/advanced/Sample_gtao.ts"></Demo>

<<< @/public/demos/advanced/Sample_gtao.ts