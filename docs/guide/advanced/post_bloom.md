---
aside: false
---
# HDR 屏幕泛光 - BloomPost
一种屏幕后期效果，也叫高光溢出，是一种光学效果；屏幕颜色内亮度高于阈值的部分会表现出扩散到周围像素中，并且随距离的增加而递减，形成一种发光朦胧的效果。
```ts
//初始化引擎
await Engine3D.init();

Engine3D.setting.render.postProcessing.bloom.downSampleStep = 5;
Engine3D.setting.render.postProcessing.bloom.downSampleBlurSize = 5;
Engine3D.setting.render.postProcessing.bloom.downSampleBlurSigma = 1.0;
Engine3D.setting.render.postProcessing.bloom.upSampleBlurSize = 5;
Engine3D.setting.render.postProcessing.bloom.upSampleBlurSigma = 1.0;
Engine3D.setting.render.postProcessing.bloom.luminanceThreshole = 1.0;
Engine3D.setting.render.postProcessing.bloom.bloomIntensity = 1.0;

// 添加 BloomPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(BloomPost);

//开始渲染
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.bloom](../../api/types/BloomSetting.md) 配置参数。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `enable` | `boolean` | enable |
| `downSampleStep` | `number` | 下采样次数 |
| `downSampleBlurSize` | `number` | 下采样模糊范围 |
| `downSampleBlurSigma` | `number` | 下采样模糊计算指数 |
| `upSampleBlurSize` | `number` | 上采样次数 |
| `upSampleBlurSigma` | `number` | 上采样模糊范围 |
| `luminanceThreshole` | `number` | Bloom高亮区域阈值 |
| `bloomIntensity` | `boolean` | Bloom最终亮度加成系数 |

一般我们可以通过对物体材质添加发光贴图和颜色来控制物体的发光效果：
```ts
let mat = new LitMaterial();
mat.emissiveMap = Engine3D.res.whiteTexture;
mat.emissiveColor = new Color(1.0, 0.0, 0.0);
mat.emissiveIntensity = 3;
```
<Demo src="/demos/advanced/Sample_bloom.ts"></Demo>

<<< @/public/demos/advanced/Sample_bloom.ts