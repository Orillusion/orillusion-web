# 全局光照

一般光照系统只考虑光源直接照射到物体表面所产生的效果，不会计算光源经过物体表面反射或折射的光线，即`间接光照`。全局光照系统能够对间接光照进行建模，实现更加逼真的光线效果。

> 以下为同一个测试场景，关闭GI（左图）和开启GI（右图）的效果对比

![probe](/images/gi/gi.webp)


## 原理简介

引擎在场景中按照设定的行列以及纵深数量放置了一系列探针 `(Probe)`，用来收集周围物体的反射光信息。它们会根据所处位置对所在区域的光照信息进行搜集和存储，形成一个动态的间接光 `Irrandiance Volume` 区域：

![volume](/images/gi/volume.webp)

在实时着色的阶段，除了计算直接光源的颜色和强度，还会根据着色单元所处的世界坐标，找到对应的探针组，使用三线性插值获得该区域周围的间接光源信息。

## 使用方法
和其它组件用法一样，只要在场景中添加 [GlobalIlluminationComponent](/api/classes/GlobalIlluminationComponent) 即可打开全局光照

```ts
//配置Global Irrandiance 参数
Engine3D.setting.gi.probeYCount = 3
Engine3D.setting.gi.probeXCount = 6
Engine3D.setting.gi.probeZCount = 6
Engine3D.setting.gi.probeSpace = 60
Engine3D.setting.gi.offsetX = 0
Engine3D.setting.gi.offsetY = 10
Engine3D.setting.gi.offsetZ = 0
// 自动更新GI信息，静态场景中可以在渲染完成后手动关闭节省性能
Engine3D.setting.gi.autoRenderProbe = true

//初始化引擎
await Engine3D.init();
let scene = new Scene3D()
let camera = new Object3D()
let mainCamera = camera.addComponent(Camera3D)
scene.addChild(camera)

// 初始化全局光照组件
let probeObj = new Object3D();
probeObj.addComponent(GlobalIlluminationComponent);
this.scene.addChild(probeObj);

// 渲染场景
let view = new View3D()
view.scene = this.scene
view.camera = mainCamera
Engine3D.startRenderView(view)
```

根据场景大小，用户可以动态调整探针区域范围：

- 通过设置 `probeXCount`, `probeYCount`, `probeZCount` 调整探针数量（需渲染前设置）；
- 通过设置 `offsetX`, `offsetY`, `offsetZ` 调整区域中心位置；
- 通过调整 `probeSpace` 调整探针的间距；


### 配置参数
[Engine3D.setting.gi](../../api/types/GlobalIlluminationSetting.md) 配置参数。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开启/关闭 |
| offsetX | number | 探针组的注册点在x轴的偏移量 |
| offsetY | number | 探针组的注册点在y轴的偏移量 |
| offsetZ | number | 探针组的注册点在z轴的偏移量 |
| probeXCount | number | 探针在x轴的数量 |
| probeYCount | number | 探针在y轴的数量 |
| probeZCount | number | 探针在z轴的数量 |
| probeSize | number | 每个探针采样到的数据尺寸 |
| probeSpace | number | 探针与探针之间的距离 |
| ddgiGamma | number | 颜色gamma校正系数 |
| indirectIntensity | number | 间接光的光照强度 |
| bounceIntensity | number | 反射光的光照强度 |
| octRTMaxSize | number | 设置八面体贴图的总尺寸 |
| octRTSideSize | number | 设置八面体贴图，每个八面体正方形的尺寸 |
| autoRenderProbe | boolean | 设置探针是否自动更新 |

### 注意事项

使用全局光照会消耗GPU的部分算力，由于所有的探针`Probe`对全场景的光照信息进行搜集，这个计算量是不可忽视的，为了让引擎能够正常流畅运行，我们做了分帧处理优化。最终GI的完整效果呈现是一个随时间累积的过程。如果用户对 `Irrandiance Volume` 区域做了修改，其结果也不是瞬间呈现出来，也会需要一个响应过程。

> 如果你的场景是静态的，在引擎运行了一段时间后，可以主动关闭 `autoRenderProbe`，让引擎不再更新GI信息，从而解放这部分算力。

<Demo :height="500" src="/demos/advanced/Sample_GI.ts"></Demo>

<<< @/public/demos/advanced/Sample_GI.ts
