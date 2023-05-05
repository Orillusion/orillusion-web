---
aside: false
---
# 全局光照

一般光照系统只考虑光源直接照射到物体表面所产生的效果，不会计算光源经过物体表面反射或折射的光线，即`间接光照`。全局光照系统能够对间接光照进行建模，实现更加逼真的光线效果。

```ts
//初始化引擎
await Engine3D.init({ });

Engine3D.setting.gi.enable = true;
Engine3D.setting.gi.gridYCount = 3;
Engine3D.setting.gi.gridXCount = 4;
Engine3D.setting.gi.gridZCount = 4;
Engine3D.setting.gi.probeSpace = 30;
Engine3D.setting.gi.offsetX = 22;
Engine3D.setting.gi.offsetY = 56;
Engine3D.setting.gi.offsetZ = 23;
Engine3D.setting.gi.indirectIntensity = 2;
Engine3D.setting.gi.probeSize = 64;
Engine3D.setting.gi.octRTSideSize = 128;
Engine3D.setting.gi.autoRenderProbe = true;

let probeObj = new Object3D();
let component = probeObj.addComponent(GlobalIlluminationComponent);
this.scene.addChild(probeObj);

//开始渲染
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```
[Engine3D.setting.gi](../../api/types/GlobalIlluminationSetting.md) 配置参数。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开启/关闭 |
| offsetX | number | 探针组的注册点在x轴的偏移量 |
| offsetY | number | 探针组的注册点在y轴的偏移量 |
| offsetZ | number | 探针组的注册点在z轴的偏移量 |
| gridXCount | number | 探针在x轴的数量 |
| gridYCount | number | 探针在y轴的数量 |
| gridZCount | numbe` | 探针在z轴的数量 |
| ProbeSize | number | 每个探针采样到的数据尺寸 |
| probeSpace | number | 探针与探针之间的距离 |
| indirectIntensity | number | 间接光的光照强度 |
| bounceIntensity | number | 反射光的光照强度 |
| octRTMaxSize | number | 设置八面体贴图的总尺寸 |
| octRTSideSize | number | 设置八面体贴图，每个八面体正方形的尺寸 |
| autoRenderProbe | boolean | 设置探针是否自动更新 |

<Demo src="/demos/advanced/Sample_GI.ts"></Demo>

<<< @/public/demos/advanced/Sample_GI.ts
