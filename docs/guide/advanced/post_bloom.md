---
aside: false
---
# HDR Screen Bloom - BloomPost
A screen post-processing effect, also known as highlight overflow, that creates an optical effect; parts of the screen with brightness higher than a threshold value will diffuse into surrounding pixels and gradually decrease with distance, creating a glowing and hazy effect.
```ts
//Initialize the engine
let engine = await Engine3D.init();

engine.setting.render.postProcessing.bloom.downSampleStep = 5;
engine.setting.render.postProcessing.bloom.downSampleBlurSize = 5;
engine.setting.render.postProcessing.bloom.downSampleBlurSigma = 1.0;
engine.setting.render.postProcessing.bloom.upSampleBlurSize = 5;
engine.setting.render.postProcessing.bloom.upSampleBlurSigma = 1.0;
engine.setting.render.postProcessing.bloom.luminanceThreshole = 1.0;
engine.setting.render.postProcessing.bloom.bloomIntensity = 1.0;

// Add a BloomPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(BloomPost);

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
engine.startRenderView(view);
```

Configuration parameters for [engine.setting.render.postProcessing.bloom](../../api/types/BloomSetting.md).

| Parameter | Type | Description |
| --- | --- | --- |
| `enable` | `boolean` | enable |
| `downSampleStep` | `number` | Number of downsampling passes |
| `downSampleBlurSize` | `number` | Downsampling blur range |
| `downSampleBlurSigma` | `number` | Downsampling blur computation exponent |
| `upSampleBlurSize` | `number` | Number of upsampling passes |
| `upSampleBlurSigma` | `number` | Upsampling blur range |
| `luminanceThreshole` | `number` | Threshold for the Bloom highlight region |
| `bloomIntensity` | `boolean` | Final bloom brightness boost factor |

Generally, we can control the object's bloom effect by adding an emissive texture and color to its material:
```ts
let mat = new LitMaterial();
mat.emissiveMap = engine.res.whiteTexture;
mat.emissiveColor = new Color(1.0, 0.0, 0.0);
mat.emissiveIntensity = 3;
```
<Demo src="/demos/advanced/Sample_bloom.ts"></Demo>

<<< @/public/demos/advanced/Sample_bloom.ts