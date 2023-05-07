---
aside: false
---
# HDR 屏幕泛光 - HDRBloom
一种屏幕后期效果，也叫高光溢出，是一种光学效果；屏幕颜色内亮度高于阈值的部分会表现出扩散到周围像素中，并且随距离的增加而递减，形成一种发光朦胧的效果。
```ts
//初始化引擎
await Engine3D.init();

Engine3D.setting.render.postProcessing.bloom.blurX = 4;
Engine3D.setting.render.postProcessing.bloom.blurY = 4;
Engine3D.setting.render.postProcessing.bloom.strength = 0.25;
Engine3D.setting.render.postProcessing.bloom.radius = 0.25;

// 添加 HDRBloomPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(HDRBloomPost);

//开始渲染
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.bloom](../../api/types/BloomSetting.md) 配置参数。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| blurX | number | 屏幕横向模糊半径。|
| blurY | number |  屏幕纵向模糊半径。|
| strength | number |  泛光强度。|
| radius | number |  泛光半径。|
| luminosityThreshold | number | 泛光强度过滤阈值。|

一般我们可以通过对物体材质添加发光贴图和颜色来控制物体的发光效果：
```ts
let mat = new LitMaterial();
mat.emissiveMap = Engine3D.res.whiteTexture;
mat.emissiveColor = new Color(1.0, 0.0, 0.0);
mat.emissiveIntensity = 3;
```
<Demo src="/demos/advanced/Sample_bloom.ts"></Demo>

<<< @/public/demos/advanced/Sample_bloom.ts