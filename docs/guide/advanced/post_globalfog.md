---
aside: false
---
# 后期雾效 - GlobalFog
雾效是一种非常常见的效果，模拟现实环境中人眼观察物体，会被一层具有特定颜色、浓度、体积的半透明的雾覆盖后朦胧的感觉。引擎内模拟实现的过程采用了相机位置、物体位置、物体的高度等参数，提供多种不同的衰减函数来达到不同雾效。
```ts
//初始化引擎
await Engine3D.init();

//Liner: 0,Exp: 1,Exp2: 2,
Engine3D.setting.render.postProcessing.globalFog.fogType = 0;
Engine3D.setting.render.postProcessing.globalFog.start = 400;
Engine3D.setting.render.postProcessing.globalFog.end = 0;
Engine3D.setting.render.postProcessing.globalFog.height = 100;
Engine3D.setting.render.postProcessing.globalFog.density = 0.02;
Engine3D.setting.render.postProcessing.globalFog.ins = 1;
Engine3D.setting.render.postProcessing.globalFog.fogColor = new Color(84,90,239,255);

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
| fogType | number | 雾的类型：线性:Liner 0 ,指数:Exp 1,指数平方: Exp2: 2|
| start | number |  设定物体距离相机为distance，则在start和end区间内，雾的浓度被线性插值 |
| end | number |  设定物体距离相机为distance，则在start和end区间内，雾的浓度被线性插值 |
| height | number |  设置高度对雾的影响 |
| density | number | 指数/指数平方雾类型下，雾浓度系数加成 |
| ins | number |设置高度对于雾的影响（与height共同作用） |
| fogColor | Color | 雾的颜色 |

<Demo src="/demos/advanced/Sample_fog.ts"></Demo>

<<< @/public/demos/advanced/Sample_fog.ts