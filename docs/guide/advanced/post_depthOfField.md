---
aside: false
---
# 景深效果 - DepthOfField
引擎实现的景深效果规定了距离相机最近、最远阈值，在相机和最近距离范围内的物体都为清晰的；而一旦超出了最近距离，物体随距离增加会呈现越来越模糊的效果。直到最远达到最大模糊程度。
```ts
//初始化引擎
await Engine3D.init();

Engine3D.setting.render.postProcessing.depthOfView.near = 150;
Engine3D.setting.render.postProcessing.depthOfView.far = 300;
Engine3D.setting.render.postProcessing.depthOfView.pixelOffset = 1;

// 添加 DepthOfFieldPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(DepthOfFieldPost); //景深效果。

//开始渲染
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.depthOfView](../../api/types/DepthOfViewSetting.md) 配置参数。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| near | number | 设定低于该距离的物体将不会被模糊处理。|
| far | number | 设定高于该距离的物体将会得到最大程度的模糊，[near,far]之间的对象将会使用[0,1]之间线性插值过的系数做模糊处理。|
| pixelOffset | number | 模糊效果像素扩散距离。|

<Demo src="/demos/advanced/Sample_depth.ts"></Demo>

<<< @/public/demos/advanced/Sample_depth.ts