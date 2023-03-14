# 渲染器组件

## 渲染器 
渲染流程/管线中，定义了多个不同子渲染器。对整个场景做一次完整的渲染，需要在不同的阶段使用特定的渲染器按需执行，输出结果。最终合成屏幕上的显示效果。
    1. Forward 渲染器
定义一系列的渲染任务，从一开始渲染整个场景到Global Data Buffer，到指定采用的后处理Post效果序列。引擎将按照用户的配置执行该渲染任务。
```ts
let renderJob = new ForwardRenderJob(this.scene);
renderJob.addPost(new SSAOPost());
renderJob.addPost(new GlobalFog());
renderJob.addPost(new HDRBloomPost());
renderJob.addPost(new FXAAPost());
```
    2. Shadow 渲染器
Shadow渲染器，定义一个阴影贴图动态渲染的通道，通过搜集灯光，遍历场景需要渲染的对象，绘制出一张或者多张阴影贴图。该阴影贴图会在一处或者多处被重复使用，用于光照计算。
    3. Probe 渲染器
Probe渲染器，主要用于搜集场景中指定位置和方向的周围360角度场景的描述信息。
通过在预先摆放好的探针（Probe），采用CubeCamera对其使用6个方位的对全场景进行渲染，获得想要的数据。为后期处理提供必要的参数，如光照计算提供全局光照信息等。

    4. ClustingLighting 渲染器
ClustingLighting渲染器，他主要用于搜集场景中的灯光信息，通过一定的方式重新组织数据，在最终渲染的时候可以更加高效的获取某个着色点的灯光信息，降低复杂的光照计算消耗。通过ClustingLighting渲染器的使用，使引擎里面能够同时支持更大规模的灯光数量。

## RenderNode 渲染单元
RenderNode，用于描述场景中需要被绘制的对象。
一个渲染单元的定义，通常来说会包含如下信息：


| materials |材质球列表  | 描述渲染对象的表面光学信息，指定如何使用着色的模型和提供参数 |
| --- | --- | --- |
|  geometry| 几何数据 | 指定渲染单元的几何模型，可以是复杂三角面，也可以是简单的Plane等 |
| renderOrder | 渲染顺序 |  指定渲染优先级|
|  castShadow| 是否参与阴影贴图绘制 |True：将被搜集进入阴影图的绘制过程。False：不参与阴影贴图绘制  |
| castGI | 是否参与全局光照图生成 | True：将被搜集进入全局光照信息的绘制过程。False：不参与全局光照信息搜集 |
|  rendererType| 指定渲染类型 | 标记该渲染单元，为一些特殊的逻辑提供决策。如指定其为SkyRenderer。 |