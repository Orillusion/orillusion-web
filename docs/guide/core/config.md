# EngineSetting
You can set some common configurations of the engine through [EngineSetting](/api/types/EngineSetting), `EngineSetting` is mainly composed of several configurations, including pick mode, render pipeline, shadow settings, post-processing settings, skybox settings, etc.

## Basic Usage
Before initializing the engine, you need to set the engine configuration first, which can be set through the `setting` property of `Engine3D`.

For example, set the maximum number of lights supported in the scene:
```ts
// Maximum number of lights
Engine3D.setting.light.maxLight = 1024;
// Enbale use log depth
Engine3D.setting.render.useLogDepth = true;
// Configure first, then initialize
await Engine3D.init();
```

## Pick Mode
Engine supports two pick modes, one is `pixel` and the other is `bound`.

The default configuration is `bound` mode, which picks up the model by calculating the AABB bounding box of the model. The accuracy is not as good as `pixel` mode, but the calculation is faster and the performance is better. The bounding box picking mode can be set through the `pick` property of the engine configuration.

```ts
Engine3D.setting.pick.enable = true;
Engine3D.setting.pick.mode = 'bound';
await Engine3D.init();
```

Also, the pixel picking mode can also be set through the `pick` property.

```ts
Engine3D.setting.pick.enable = true;
Engine3D.setting.pick.mode = 'pixel';
await Engine3D.init();
```

See more about [Pick Event](/guide/interaction/pickfire)

## Post Processing Settings
Engine supports multiple post-processing effects, including various anti-aliasing, bloom, ambient occlusion, etc., which can be set through the `postProcessing` property of the `render` configuration.

For example, set the `bloom` post-processing effect:
```ts
// Enable bloom 
Engine3D.setting.render.postProcessing.bloom.enable = true;
// Set the intensity of bloom
Engine3D.setting.render.postProcessing.bloom.intensity = 0.5;
```
See more about [Post Processing](/guide/advanced/posteffect)

## Shadow Settings
Setting the shadow method and attributes through the `shadow` property of the engine configuration.

```ts
Engine3D.setting.shadow.enable = true; // Enable shadow
Engine3D.setting.shadow.type = 'SOFT'; // The type of shadow, SOFT
Engine3D.setting.shadow.shadowSize = 2048; // The size of the shadow map
Engine3D.setting.shadow.shadowBound = 20; // The bound of shadow
```
See more about [Shadow](/guide/graphics/shadow)

## Global Illumination Settings
Setting the global illumination through the `gi` property of the configuration.

```ts
Engine3D.setting.gi.enable = true;
Engine3D.setting.gi.probeYCount = 6;
Engine3D.setting.gi.probeXCount = 6;
Engine3D.setting.gi.probeZCount = 6;
Engine3D.setting.gi.offsetX = 0;
Engine3D.setting.gi.offsetY = 10;
Engine3D.setting.gi.offsetZ = 0;
...
```
See more about [Global Illumination](/guide/advanced/gi)

