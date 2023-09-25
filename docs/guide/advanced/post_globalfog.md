---
aside: false
---
# 后期雾效 - GlobalFog
雾效是一种非常常见的效果，模拟现实环境中人眼观察物体，会被一层具有特定颜色、浓度、体积的半透明的雾覆盖后朦胧的感觉。引擎内模拟实现的过程采用了相机位置、物体位置、物体的高度等参数，提供多种不同的衰减函数来达到不同雾效。
```ts
//初始化引擎
await Engine3D.init();

Engine3D.setting.render.postProcessing.globalFog.fogType = 0; //Liner:0, Exp:1, Exp2:2
Engine3D.setting.render.postProcessing.globalFog.start = 400;
Engine3D.setting.render.postProcessing.globalFog.end = 0;
Engine3D.setting.render.postProcessing.globalFog.fogHeightScale = 1;
Engine3D.setting.render.postProcessing.globalFog.density = 0.02;
Engine3D.setting.render.postProcessing.globalFog.ins = 1;
Engine3D.setting.render.postProcessing.globalFog.fogColor = new Color(84,90,239,255);
Engine3D.setting.render.postProcessing.globalFog.skyFactor = 0.5;
Engine3D.setting.render.postProcessing.globalFog.skyRoughness = 0.4;
Engine3D.setting.render.postProcessing.globalFog.overrideSkyFactor = 0.8;

// 添加 GlobalFog
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(GlobalFog);

//开始渲染
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.globalFog](../../api/types/GlobalFogSetting.md) 配置参数。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开启/关闭。|
| fogColor | Color | 雾的颜色 |
| fogType | number | 雾的类型, 线性: 0, 指数: 1, 指数平方: 2 |
| start | number |  雾的浓度衰减的起始距离，从 start 到 end 根据类型插值减小到0 |
| end | number |  雾的浓度衰减的结束距离，从 start 到 end 根据类型插值减小0 |
| density | number | 雾的浓度衰减系数，在指数/指数平方雾类型下，系数会额外加成 |
| fogHeightScale | number |  雾的高度影响参数 |
| ins | number | 高度影响系数 |
| skyFactor | number | 雾的颜色和天空颜色混合系数 |
| skyRoughness | number | 天空采样 mipmap 层级  |
| overrideSkyFactor | number | 雾覆盖天空系数 |

<Demo src="/demos/advanced/Sample_fog.ts"></Demo>

<<< @/public/demos/advanced/Sample_fog.ts