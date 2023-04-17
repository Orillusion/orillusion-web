---
aside: false
---
# HDRBloom
HDRBloom, also known as highlight overflow, is a post-processing effect that creates an optical illusion. Parts of the screen with brightness higher than a threshold value will diffuse into surrounding pixels and gradually decrease with distance, creating a glowing and hazy effect.
```ts
//Initialize the engine
await Engine3D.init();

Engine3D.setting.render.postProcessing.bloom.blurX = 4;
Engine3D.setting.render.postProcessing.bloom.blurY = 4;
Engine3D.setting.render.postProcessing.bloom.intensity = 0.25;
Engine3D.setting.render.postProcessing.bloom.brightness = 0.25;


//Create a renderer
let renderJob = new ForwardRenderJob(this.scene);
renderJob.addPost(new HDRBloomPost());
Engine3D.startRender(renderJob);
```

[Engine3D.setting.render.postProcessing.bloom](../../api/types/BloomSetting.md) 配置参数。

| Parameter | Type | Description |
| --- | --- | --- |
| blurX | number | The horizontal blur radius of the screen.|
| blurY | number |  The vertical blur radius of the screen.|
| intensity | number |  	The intensity of the effect.|
| brightness | number |  The brightness of the effect.|

Generally, we can control the object's bloom effect by adding an emissive texture and color to its material:
```ts
let mat = new LitMaterial();
mat.emissiveMap = defaultTexture.whiteTexture;
mat.emissiveColor = new Color(1.0, 0.0, 0.0);
mat.emissiveIntensity = 3;
```
<Demo src="/demos/advanced/Sample_bloom.ts"></Demo>

<<< @/public/demos/advanced/Sample_bloom.ts