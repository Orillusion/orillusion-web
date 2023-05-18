---
aside: false
---
# 环境光遮蔽 - GTAO
`AO` 是用来描绘物体和物体相交或靠近的时候遮挡周围漫反射光线的效果，可以解决或改善漏光、飘和阴影不实等问题，解决或改善场景中缝隙、褶皱与墙角、角线以及细小物体等的表现不清晰问题，综合改善细节尤其是暗部阴影，增强空间的层次感、真实感，同时加强和改善画面明暗对比，增强画面的艺术性。引擎内部通过采样指定屏幕范围内，指定距离范围内的像素点，求积分用于赋值当前像素 `AO` 系数。
```ts
//初始化引擎
await Engine3D.init();

Engine3D.setting.render.postProcessing.gtao.maxDistance = 5;
Engine3D.setting.render.postProcessing.gtao.maxPixel = 50;
Engine3D.setting.render.postProcessing.gtao.darkFactor = 1;
Engine3D.setting.render.postProcessing.gtao.rayMarchSegment = 6;
Engine3D.setting.render.postProcessing.gtao.multiBounce = true;
Engine3D.setting.render.postProcessing.gtao.blendColor = true;

// 添加 GTAOPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(GTAOPost);

//开始渲染
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.gtao](../../api/types/GTAOSetting.md) 配置参数。
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| maxDistance | number | 设定ao采样时搜索3D空间周边的最大距离。|
| maxPixel | number | 设定ao采样时搜索周边像素时的最大距离。|
| darkFactor | number | 设定ao数值参与输出到屏幕时的系数，1：全部输出，0：不输出。|
| rayMarchSegment | number | 设定ao采样时的步进的步数，值越大将会获得质量更好的ao效果，同时消耗更多的性能。|
| multiBounce | boolean | 是否模拟颜色反弹。|
| blendColor | boolean | true：将与GBuffer的mainColor混合；false：将只输出ao的颜色。|

<Demo src="/demos/advanced/Sample_gtao.ts"></Demo>

<<< @/public/demos/advanced/Sample_gtao.ts