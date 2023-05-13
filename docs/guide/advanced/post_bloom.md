---
aside: false
---
# HDRBloom
HDRBloom, also known as highlight overflow, is a post-processing effect that creates an optical illusion. Parts of the screen with brightness higher than a threshold value will diffuse into surrounding pixels and gradually decrease with distance, which creates a glowing and hazy effect.
```ts
//Initialize the engine
await Engine3D.init();

Engine3D.setting.render.postProcessing.bloom.blurX = 4;
Engine3D.setting.render.postProcessing.bloom.blurY = 4;
Engine3D.setting.render.postProcessing.bloom.strength = 0.25;
Engine3D.setting.render.postProcessing.bloom.radius = 0.25;

// Add a HDRBloomPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(HDRBloomPost);

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.bloom](../../api/types/BloomSetting.md) 配置参数。

| Parameter | Type | Description |
| --- | --- | --- |
| blurX | number | The horizontal blur radius of the screen.|
| blurY | number |  The vertical blur radius of the screen.|
| strength | number |  Bloom intensity.|
| radius | number |  Bloom radius.|
| luminosityThreshold | number | Bloom intensity filtering threshold.|

Generally, we can control the object's bloom effect by adding an emissive texture and color to its material:
```ts
let mat = new LitMaterial();
mat.emissiveMap = Engine3D.res.whiteTexture;
mat.emissiveColor = new Color(1.0, 0.0, 0.0);
mat.emissiveIntensity = 3;
```
<Demo src="/demos/advanced/Sample_bloom.ts"></Demo>

<<< @/public/demos/advanced/Sample_bloom.ts