---
aside: false
---
# GodRay
`GodRay` is a visual effect of light passing through an object or cloud as one or more bright beams of light, usually in natural scenes where light passes through clouds, leaves, or otherwise
Because light is scattered or refracted by these objects, creating a visual glow effect,
```ts
// Init Engine
await Engine3D.init();

// Add a post-processing component
let postProcessing = this.scene.addComponent(PostProcessingComponent);

// Add GodRay
postProcessing.addPost(GodRayPost);

// Start render
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.godray](../../api/types/GodraySetting.md) config parameters。
| Attribute       | Type    | Description |
| --- | --- | --- |
| scatteringExponent | number | Color diffusion index, default is 5 |
| rayMarchCount | number | Track the number of samples. The default is 16 |
| blendColor | boolean | true: will be mixed with the mainColor of GBuffer |
| intensity | number | The intensity of the color is added. The default is 0.5 |

<Demo src="/demos/advanced/Sample_godRay.ts"></Demo>

<<< @/public/demos/advanced/Sample_godRay.ts