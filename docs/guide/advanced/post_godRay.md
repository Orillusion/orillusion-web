---
aside: false
---
# God Ray - GodRay
`GodRay` is a visual effect produced when light passes through an object or cloud layer, appearing as one or more bright beams of light. This effect usually occurs in natural scenes when light passes through clouds, leaves, or other
occluders, because the light is scattered or refracted by these objects, producing a visual glow effect.
```ts
//Initialize the engine
let engine = await Engine3D.init();

// Add the post-processing component
let postProcessing = this.scene.addComponent(PostProcessingComponent);

// Add GodRay
postProcessing.addPost(GodRayPost);

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
engine.startRenderView(view);
```

Configuration parameters for [engine.setting.render.postProcessing.godray](../../api/types/GodraySetting.md).
| Parameter | Type | Description |
| --- | --- | --- |
| scatteringExponent | number | Color diffusion exponent, default is 5 |
| rayMarchCount | number | Number of ray marching samples, default is 16 |
| blendColor | boolean | true: will be blended with the mainColor of the GBuffer |
| intensity | number | Intensity of the added color, default is 0.5 |

<Demo src="/demos/advanced/Sample_godRay.ts"></Demo>

<<< @/public/demos/advanced/Sample_godRay.ts