---
aside: false
---
# BloomPost
BloomPost, also known as highlight overflow, is a post-processing effect that creates an optical illusion. Parts of the screen with brightness higher than a threshold value will diffuse into surrounding pixels and gradually decrease with distance, which creates a glowing and hazy effect.
```ts
//Initialize the engine
await Engine3D.init();

Engine3D.setting.render.postProcessing.bloom.downSampleStep = 5;
Engine3D.setting.render.postProcessing.bloom.downSampleBlurSize = 5;
Engine3D.setting.render.postProcessing.bloom.downSampleBlurSigma = 1.0;
Engine3D.setting.render.postProcessing.bloom.upSampleBlurSize = 5;
Engine3D.setting.render.postProcessing.bloom.upSampleBlurSigma = 1.0;
Engine3D.setting.render.postProcessing.bloom.luminanceThreshole = 1.0;
Engine3D.setting.render.postProcessing.bloom.bloomIntensity = 1.0;

// Add a BloomPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(BloomPost);

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.bloom](../../api/types/BloomSetting.md) configuration parameters:

| Parameter | Type | Description |
| --- | --- | --- |
| `enable?` | `boolean` | enable |
| `downSampleStep` | `number` | down sample step |
| `downSampleBlurSize` | `number` | down sample blur size |
| `downSampleBlurSigma` | `number` | down sample blur sigma |
| `upSampleBlurSize` | `number` | up sample blur size |
| `upSampleBlurSigma` | `number` | up sample blur sigma |
| `luminanceThreshole` | `number` | luminance threshold |
| `bloomIntensity` | `number` | bloom intensity |

Generally, we can control the object's bloom effect by adding an emissive texture and color to its material:
```ts
let mat = new LitMaterial();
mat.emissiveMap = Engine3D.res.whiteTexture;
mat.emissiveColor = new Color(1.0, 0.0, 0.0);
mat.emissiveIntensity = 3;
```
<Demo src="/demos/advanced/Sample_bloom.ts"></Demo>

<<< @/public/demos/advanced/Sample_bloom.ts