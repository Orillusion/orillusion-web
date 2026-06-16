# Global Illumination

Conventional lighting systems only consider the direct illumination from light sources onto the surfaces of objects and do not calculate the light that is reflected or refracted by the surfaces, known as `indirect illumination`. Global illumination systems can model the indirect illumination, resulting in more realistic lighting effects.

> The following images compare the effects of disabling GI (left) and enabling GI (right) in the same test scene:

![probe](/images/gi/gi.webp)


## Principle Introduction

The engine places a series of `probes` in the scene, arranged in rows, columns, and depth as specified, to collect the reflected light information from the surrounding objects. Based on their positions, these probes gather and store the lighting information for their respective regions, forming a dynamic indirect light `Irradiance Volume` region:

![volume](/images/gi/volume.webp)

During the real-time shading phase, in addition to calculating the color and intensity of direct light sources, the engine locates the corresponding probe group based on the world coordinates of the shading unit, and uses trilinear interpolation to obtain the indirect light source information from the surrounding area.

## Usage
Global illumination can be enabled simply by adding the [GlobalIlluminationComponent](/api/classes/GlobalIlluminationComponent). Note: when adding this component, you must explicitly pass the `scene` it belongs to as the second argument of `addComponent`.

```ts
//Initialize the engine
let engine = await Engine3D.init({
    setting: {
        gi: {
            //Configure Global Irradiance parameters
            probeYCount: 3,
            probeXCount: 6,
            probeZCount: 6,
            probeSpace: 60,
            offsetX: 0,
            offsetY: 10,
            offsetZ: 0,
            // Automatically update GI information; in static scenes you can manually disable it after rendering completes to save performance
            autoRenderProbe: true,
        }
    }
});
let scene = new Scene3D()
let camera = new Object3D()
let mainCamera = camera.addComponent(Camera3D)
scene.addChild(camera)

// Initialize the global illumination component (you must explicitly pass the scene it belongs to)
let probeObj = new Object3D();
probeObj.addComponent(GlobalIlluminationComponent, scene);
scene.addChild(probeObj);

// Render the scene
let view = new View3D()
view.scene = scene
view.camera = mainCamera
engine.startRenderView(view)
```

Depending on the scene size, users can dynamically adjust the probe region:

- Adjust the number of probes by setting `probeXCount`, `probeYCount`, `probeZCount` (must be set before rendering);
- Adjust the center position of the region by setting `offsetX`, `offsetY`, `offsetZ`;
- Adjust the spacing between probes by modifying `probeSpace`;


### Configuration Parameters
Configuration parameters for [engine.setting.gi](../../api/types/GlobalIlluminationSetting.md).

| Parameter | Type | Description |
| --- | --- | --- |
| enable | boolean | Enable/disable |
| offsetX | number | Offset of the probe group's registration point on the x-axis |
| offsetY | number | Offset of the probe group's registration point on the y-axis |
| offsetZ | number | Offset of the probe group's registration point on the z-axis |
| probeXCount | number | Number of probes on the x-axis |
| probeYCount | number | Number of probes on the y-axis |
| probeZCount | number | Number of probes on the z-axis |
| probeSize | number | Size of the data sampled by each probe |
| probeSpace | number | Distance between probes |
| ddgiGamma | number | Color gamma correction factor |
| indirectIntensity | number | Intensity of indirect lighting |
| bounceIntensity | number | Intensity of reflected light |
| octRTMaxSize | number | Total size of the octahedral texture |
| octRTSideSize | number | Size of each octahedral square in the octahedral texture |
| autoRenderProbe | boolean | Whether the probes update automatically |

### Considerations

Using global illumination consumes some GPU processing power. Since all `probes` collect lighting information for the entire scene, this computational workload cannot be ignored. To ensure the engine runs smoothly, we have optimized the processing by dividing it across frames. The complete GI effect is therefore presented as a process that accumulates over time. If you modify the `Irradiance Volume` region, the results will not appear instantly either and will require a response time.

> If your scene is static, you can manually disable `autoRenderProbe` after the engine has been running for a while, so that the engine no longer updates GI information and frees up this computational power.

<Demo :height="500" src="/demos/advanced/Sample_GI.ts"></Demo>

<<< @/public/demos/advanced/Sample_GI.ts
