---
aside: false
---
# 轮廓描边 - Outline
引擎内实现了为指定的物体描绘未被遮挡的部分轮廓的功能。你可以为描边的轮廓线单独设置实线、淡出部分的宽度实现不同样式。
```ts
import {Engine3D,ForwardRenderJob, OutlinePost } from '@orillusion/core';
// 初始化引擎
await Engine3D.init();
Engine3D.setting.render.postProcessing.outline.outlinePixel = 2;
Engine3D.setting.render.postProcessing.outline.fadeOutlinePixel = 4;

// 创建渲染器
let renderJob = new ForwardRenderJob(scene);
renderJob.addPost(new OutlinePost());
Engine3D.startRender(renderJob);
```
[Engine3D.setting.render.postProcessing.outline](/api/types/OutlineSetting.md) 配置参数。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| outlinePixel | number | 描边硬边的像素宽度。|
| fadeOutlinePixel | number | 描边淡出像素宽度。|


通过 [outlinePostManager](/api/classes/OutlinePostManager) 指定描边列表。目前 `outline` 最多指定8组列表，每组可以设置不同的轮廓颜色；单组内的物体可以设置多个对象。分组的先后顺序决定了描边轮廓覆盖的优先级。

```ts
let obj1 = new Object3D()
let obj2 = new Object3D()

// 设定 Outline 目标, 分2组，2种颜色
outlinePostManager.setOutlineList([[obj1], [obj2]], [new Color(1, 0.2, 0, 1), new Color(0.2, 1, 0)]);
```

<Demo src="/demos/advanced/Sample_outline.ts"></Demo>

<<< @/public/demos/advanced/Sample_outline.ts