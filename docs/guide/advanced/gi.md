# Global Illumination

Conventional lighting systems only consider the direct illumination from light sources onto the surfaces of objects and do not calculate the light that is reflected or refracted by the surfaces, known as `indirect illumination`. Global illumination systems model the indirect illumination, resulting in more realistic lighting effects.

> The following images compare the effects of disabling GI (left) and enabling GI (right) in the same test scene:

![probe](/images/gi/gi.webp)


## principle introduction

The engine places a series of `probes` in the scene, arranged in rows, columns, and depth as specified, to collect the reflected light information from the surrounding objects. Based on their positions, these probes gather and store the lighting information for their respective regions, forming a dynamic indirect light `Irradiance Volume` region:

![volume](/images/gi/volume.webp)

During the real-time shading phase, in addition to calculating the color and intensity of direct light sources, the engine locates the corresponding probe group based on the world coordinates of the shading unit. It uses trilinear interpolation to obtain the indirect light source information from the surrounding area.

## Usage
Similar to other components, global illumination can be enabled by adding the [GlobalIlluminationComponent](/api/classes/GlobalIlluminationComponent) to the scene.

```ts
//Configure Global Irradiance parameters
Engine3D.setting.gi.probeYCount = 3
Engine3D.setting.gi.probeXCount = 6
Engine3D.setting.gi.probeZCount = 6
Engine3D.setting.gi.probeSpace = 60
Engine3D.setting.gi.offsetX = 0
Engine3D.setting.gi.offsetY = 10
Engine3D.setting.gi.offsetZ = 0
// Automatically update GI information, you can manually disable it after rendering in static scenes to improve performance
Engine3D.setting.gi.autoRenderProbe = true

//Initialize the engine
await Engine3D.init();
let scene = new Scene3D()
let camera = new Object3D()
let mainCamera = camera.addComponent(Camera3D)
scene.addChild(camera)

// Initialize the global illumination component
let probeObj = new Object3D();
probeObj.addComponent(GlobalIlluminationComponent);
this.scene.addChild(probeObj);

// Render the scene
let view = new View3D()
view.scene = this.scene
view.camera = mainCamera
Engine3D.startRenderView(view)
```

Depending on the scene size, users can dynamically adjust the probe region:

- Adjust the number of probes on the x, y, and z axes by setting `probeXCount`, `probeYCount`, `probeZCount` (must be set before rendering);
- Adjust the center position of the region by setting `offsetX`, `offsetY`, `offsetZ`；
- Adjust the spacing between probes by modifying `probeSpace`；


### Configuration Parameters
The configuration parameters for [Engine3D.setting.gi](../../api/types/GlobalIlluminationSetting.md) are as follows:

| Parameter | Type | Description |
| --- | --- | --- |
| enable | boolean | Enable/disable global illumination. |
| offsetX | number | Offset of the probe group's registration point on the x-axis. |
| offsetY | number | Offset of the probe group's registration point on the y-axis. |
| offsetZ | number | Offset of the probe group's registration point on the z-axis. |
| probeXCount | number | Number of probes on the x-axis. |
| probeYCount | number | Number of probes on the y-axis. |
| probeZCount | number | Number of probes on the z-axis. |
| probeSize | number | Size of data sampled by each probe. |
| probeSpace | number | Distance between probes. |
| ddgiGamma | number | Color gamma correction factor. |
| indirectIntensity | number | Intensity of indirect lighting. |
| bounceIntensity | number | Intensity of reflected light. |
| octRTMaxSize | number | Total size of octahedral textures. |
| octRTSideSize | number | Size of each square in the octahedral texture. |
| autoRenderProbe | boolean | Automatically update probes. |

### Considerations

Using global illumination consumes some GPU processing power. Since all `probes` collect lighting information for the entire scene, the computational workload is significant. To ensure smooth engine performance, we have optimized the processing by dividing it into frames. The complete GI effect accumulates over time. If modifications are made to the `Irradiance Volume` region, the results will not be instantly visible and will require a response time.

> If your scene is static, you can manually disable `autoRenderProbe` after the engine has been running for a while to free up computational resources.

<Demo :height="500" src="/demos/advanced/Sample_GI.ts"></Demo>

<<< @/public/demos/advanced/Sample_GI.ts
