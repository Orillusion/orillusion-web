---
aside: false
---
# Global Illumination

Conventional lighting systems only consider the direct lighting effect produced by light sources shining directly onto object surfaces and do not calculate the light rays that are reflected or refracted by object surfaces, i.e.,`indirect lighting`. Global illumination systems can model indirect lighting to achieve more realistic lighting effects.

```ts
//Initialize the engine
await Engine3D.init({ });

// Configure global illumination settings
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

// Create a probe object and add the GlobalIlluminationComponent
let probeObj = new Object3D();
let component = probeObj.addComponent(GlobalIlluminationComponent);
this.scene.addChild(probeObj);

//Create a renderer
let renderJob = new ForwardRenderJob(this.scene);
Engine3D.startRender(renderJob);
```
[Engine3D.setting.gi](../../api/types/GlobalIlluminationSetting.md) configuration parameters.

| Parameter | Type | Description |
| --- | --- | --- |
| enable | boolean | 	On/Off |
| offsetX | number | The x-axis offset of the probe group registration point |
| offsetY | number | The y-axis offset of the probe group registration point |
| offsetZ | number | The z-axis offset of the probe group registration point |
| gridXCount | number | The number of probes in the x-axis |
| gridYCount | number | The number of probes in the y-axis|
| gridZCount | numbe` | The number of probes in the z-axis |
| ProbeSize | number | The data size sampled by each probe|
| probeSpace | number | The distance between probes |
| indirectIntensity | number | The lighting intensity of indirect lighting |
| bounceIntensity | number | The lighting intensity of reflection |
| octRTMaxSize | number | The total size of the octahedral texture |
| octRTSideSize | number | The size of each octahedral square |
| autoRenderProbe | boolean | Whether the probe is automatically updated |

<Demo src="/demos/advanced/Sample_GI.ts"></Demo>

<<< @/public/demos/advanced/Sample_GI.ts
