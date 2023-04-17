---
aside: false
---
# SSR
SSR is a screen-space reflection effect that simulates the visual effect of smooth surfaces reflecting the surrounding objects' images in real-time. The reflection effect has the advantages of real-time rendering, where when an object moves, the reflected objects in the image also move, and it can reflect precisely from each pixel. The disadvantage is that it cannot reflect the backside of an object, and objects outside the screen cannot reflect onto other objects.

```ts
//Engine initialization
await Engine3D.init();

// Setting SSR parameters
Engine3D.setting.render.postProcessing.ssr.fadeEdgeRatio = 0.2;
Engine3D.setting.render.postProcessing.ssr.rayMarchRatio = 0.5;
Engine3D.setting.render.postProcessing.ssr.fadeDistanceMin = 600;
Engine3D.setting.render.postProcessing.ssr.fadeDistanceMax = 2000;
Engine3D.setting.render.postProcessing.ssr.roughnessThreshold = 0.5;
Engine3D.setting.render.postProcessing.ssr.powDotRN = 0.2;

// Creating the renderer
let renderJob = new ForwardRenderJob(this.scene);
renderJob.addPost(new SSRPost());
Engine3D.startRender(renderJob);
```

[Engine3D.setting.render.postProcessing.ssr](../../api/types/SSRSetting.md) Configuration parameters.

| Parameter | Type	 | Description |
| --- | --- | --- |
| fadeEdgeRatio | number | Gradient speed.|
| rayMarchRatio | number | 	Light step speed.|
| fadeDistanceMin | number | Minimum fading distance.|
| fadeDistanceMax | number | 	Maximum fading distance.|
| roughnessThreshold | number | Roughness threshold.|
| powDotRN | number | pow parameter of normal and reflection dot product.|

<Demo src="/demos/advanced/Sample_ssr.ts"></Demo>

<<< @/public/demos/advanced/Sample_ssr.ts