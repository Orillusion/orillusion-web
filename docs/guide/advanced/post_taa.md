---
aside: false
---
# 反走样 - TAAPost
一种3D渲染 `抗锯齿` 实现方案。3D渲染栅格化过程将显示对象按二位数组点阵的形式存储起来，得到的原始图像中物体边缘难免会有锯齿样。`TAA` 采用的方法为按照一定策略轻微的给相机设置一些偏移值，让物体在栅格化时会因不同的相机偏移值得到略微不同的结果。特别是在边缘的地方更为明显。最终输出到屏幕的颜色采用插值历史帧和当前帧的作为结果，且该结果用于下一次的插值。
```ts
// 引擎全局配置设置
Engine3D.setting.render.postProcessing.taa.jitterSeedCount = 8;
Engine3D.setting.render.postProcessing.taa.blendFactor = 0.1;
Engine3D.setting.render.postProcessing.taa.sharpFactor = 0.6;
Engine3D.setting.render.postProcessing.taa.sharpPreBlurFactor = 0.5;
Engine3D.setting.render.postProcessing.taa.temporalJitterScale = 0.6;

//初始化引擎
await Engine3D.init();

// 添加后处理组件
let postProcessing = this.scene.addComponent(PostProcessingComponent);

// 添加TAAPost
let taaPost = postProcessing.addPost(TAAPost);

// 通过 taaPost 对象设置（引擎全局配置和此处基于 taaPost 对象设置，结果是等价的）
taaPost.jitterSeedCount = 8;
taaPost.blendFactor = 0.1;
taaPost.sharpFactor = 0.6;
taaPost.sharpPreBlurFactor = 0.5;
taaPost.temporalJitterScale = 0.6;

// 开始渲染视图
let view = new View3D();
view.scene = this.scene;
view.camera = mainCamera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.taa](../../api/types/TAASetting.md) 配置参数。
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| jitterSeedCount | number | 抖动相机随机种子采用个数，默认8个。（降低个数可以解决一些抖动太明显的问题，但是锯齿会变得更明显） |
| blendFactor | number | 合并历史帧与当前帧的系数，参数越小，当前帧占比越小。|
| sharpFactor | number | 图像锐化系数[0.1,1.9]：系数越小锐化效果越弱抗锯齿效果好，反之锐化越强抗锯齿效果越弱。|
| sharpPreBlurFactor | number | 消图像锐化采样系数缩放系数：锐化时候采样的偏移量缩放。|
| temporalJitterScale | number | 抖动相机随机偏移值的缩放系数[0,1]：系数越小抗锯齿效果变弱，像素抖动也会变弱。|

<Demo src="/demos/advanced/Sample_taa.ts"></Demo>

<<< @/public/demos/advanced/Sample_taa.ts