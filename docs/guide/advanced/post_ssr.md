---
aside: false
---
# 屏幕空间反射 - SSR
一种基于屏幕空间的反射效果实现，模拟光滑物体表面可以实时反射其周边物体影像的视觉效果。该反射效果优点为实时渲染，某一个物体发生移动，反射画面中物体也会发生移动；能精确的从每个像素反射。缺点为不能够反射出物体的背面，且屏幕范围外的物体也不能够被反射到其他的物体上。

```ts
//初始化引擎
let engine = await Engine3D.init();

engine.setting.render.postProcessing.ssr.fadeEdgeRatio = 0.2;
engine.setting.render.postProcessing.ssr.rayMarchRatio = 0.5;
engine.setting.render.postProcessing.ssr.fadeDistanceMin = 600;
engine.setting.render.postProcessing.ssr.fadeDistanceMax = 2000;
engine.setting.render.postProcessing.ssr.roughnessThreshold = 0.5;
engine.setting.render.postProcessing.ssr.powDotRN = 0.2;

// 添加 SSRPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(SSRPost);

//开始渲染
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
engine.startRenderView(view);
```

[engine.setting.render.postProcessing.ssr](../../api/types/SSRSetting.md) 配置参数。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fadeEdgeRatio | number | 渐变速率 |
| rayMarchRatio | number | 光线步进速率 |
| fadeDistanceMin | number | 消退距离最小值 |
| fadeDistanceMax | number | 消退距离最大值 |
| roughnessThreshold | number | 粗糙度阈值 |
| powDotRN | number | `normal` 和 `reflection` 点积的 `pow` 参数 |

<Demo src="/demos/advanced/Sample_ssr.ts"></Demo>

<<< @/public/demos/advanced/Sample_ssr.ts