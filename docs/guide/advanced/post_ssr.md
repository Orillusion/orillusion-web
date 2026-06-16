---
aside: false
---
# Screen Space Reflection - SSR
A reflection effect implementation based on screen space, which simulates the visual effect where a smooth object surface can reflect the images of surrounding objects in real time. The advantage of this reflection effect is real-time rendering: when an object moves, the object in the reflected image also moves; it can reflect accurately from each pixel. The disadvantage is that it cannot reflect the back of an object, and objects outside the screen range cannot be reflected onto other objects either.

```ts
//Initialize the engine
let engine = await Engine3D.init();

engine.setting.render.postProcessing.ssr.fadeEdgeRatio = 0.2;
engine.setting.render.postProcessing.ssr.rayMarchRatio = 0.5;
engine.setting.render.postProcessing.ssr.fadeDistanceMin = 600;
engine.setting.render.postProcessing.ssr.fadeDistanceMax = 2000;
engine.setting.render.postProcessing.ssr.roughnessThreshold = 0.5;
engine.setting.render.postProcessing.ssr.powDotRN = 0.2;

// Add SSRPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(SSRPost);

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
engine.startRenderView(view);
```

[engine.setting.render.postProcessing.ssr](../../api/types/SSRSetting.md) configuration parameters.

| Parameter | Type | Description |
| --- | --- | --- |
| fadeEdgeRatio | number | Gradient rate |
| rayMarchRatio | number | Ray marching rate |
| fadeDistanceMin | number | Minimum fade distance |
| fadeDistanceMax | number | Maximum fade distance |
| roughnessThreshold | number | Roughness threshold |
| powDotRN | number | The `pow` parameter of the dot product of `normal` and `reflection` |

<Demo src="/demos/advanced/Sample_ssr.ts"></Demo>

<<< @/public/demos/advanced/Sample_ssr.ts
