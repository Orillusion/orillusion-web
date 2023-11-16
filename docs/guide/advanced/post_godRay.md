---
aside: false
---
# 上帝射线 - GodRay
`GodRay` 是一种由光线透过物体或者云层时产生的视觉效果，表现为一束或多束明亮光线，这种效果通常在自然场景中的光线穿过云层，树叶或其他
遮挡物时出现，因为光线会被这些物体散射或折射，产生视觉上的辉光效果，
```ts
//初始化引擎
await Engine3D.init();

// 添加 后处理组件
let postProcessing = this.scene.addComponent(PostProcessingComponent);

// 添加 GodRay
postProcessing.addPost(GodRayPost);

//开始渲染
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.godray](../../api/types/GodraySetting.md) 配置参数。
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| scatteringExponent | number | 颜色扩散指数，默认为5 |
| rayMarchCount | number | 追踪采样次数，默认为16 |
| blendColor | boolean | true：将与GBuffer的mainColor混合 |
| intensity | number | 加成颜色的强度，默认 0.5|

<Demo src="/demos/advanced/Sample_godRay.ts"></Demo>

<<< @/public/demos/advanced/Sample_godRay.ts