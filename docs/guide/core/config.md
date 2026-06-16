# EngineSetting
Through [EngineSetting](/api/types/EngineSetting) you can set some common configurations of the engine. `EngineSetting` is mainly composed of several different configurations, including pick mode, render pipeline, shadow settings, post-processing settings, skybox settings, and so on.

## Basic Usage
The engine configuration is passed in **at initialization** through `Engine3D.init({ setting })`. `setting` is an optional deep partial object; you only need to write the fields you want to override, the rest use the default values.

For example, to set the maximum number of lights supported in the scene and enable log depth:
```ts
const engine = await Engine3D.init({
  setting: {
    light: { maxLight: 1024 },   // Maximum number of lights
    render: { useLogDepth: true } // Enable log depth
  }
});
```

After initialization is complete, configurations that are mutable at runtime can also continue to be read and written through the instance's `engine.setting`:
```ts
engine.setting.render.postProcessing.bloom.intensity = 0.5;
```

::: tip Migrating from Older Versions
Earlier versions assigned values before initialization through the global static `Engine3D.setting.xxx = ...`. Now the configuration travels with the instance. Please switch to passing it in through `Engine3D.init({ setting })`, or set it through `engine.setting.xxx` after obtaining the instance.
:::

## Pick Mode
The engine supports two pick modes, one is `pixel picking (pixel)`, and the other is `bounding box picking (bound)`.

The default engine configuration is `bound` mode. Bounding box picking picks up the model by calculating the model's AABB bounding box. Its accuracy is not as good as `pixel` mode, but the calculation is faster and the performance is better. The bounding box picking mode can be set through the `pick` property of the engine configuration.

```ts
const engine = await Engine3D.init({
  setting: {
    pick: { enable: true, mode: 'bound' }
  }
});
```

The pixel picking mode can also be set through the `pick` property.

```ts
const engine = await Engine3D.init({
  setting: {
    pick: { enable: true, mode: 'pixel' }
  }
});
```

For detailed usage, please refer to [Pick Event](/guide/interaction/pickfire)

## Post-Processing Settings
The engine supports multiple post-processing effects, including various anti-aliasing, bloom, ambient occlusion, and so on, which can be set through the `postProcessing` property of the `render` configuration.

For example, to set the `bloom` post-processing effect:
```ts
const engine = await Engine3D.init({
  setting: {
    render: {
      postProcessing: {
        bloom: { enable: true, intensity: 0.5 }
      }
    }
  }
});
```
For more post-processing related settings, see [Post Processing](/guide/advanced/posteffect)

## Shadow Settings
The methods and properties for setting shadows can be set through the `shadow` property of the engine configuration.

```ts
const engine = await Engine3D.init({
  setting: {
    shadow: {
      enable: true,      // Enable shadows
      type: 'SOFT',      // Soft shadow type
      shadowSize: 2048,  // Shadow map size
      shadowBound: 20,   // World size of the shadow area
      shadowBias: 0.01   // Shadow bias
    }
  }
});
```
See [Shadow](/guide/graphics/shadow) for details

## Global Illumination Settings
Set the global illumination through the `gi` property in the configuration.
```ts
const engine = await Engine3D.init({
  setting: {
    gi: {
      enable: true,
      probeYCount: 6,
      probeXCount: 6,
      probeZCount: 6,
      offsetX: 0,
      offsetY: 10,
      offsetZ: 0
      // ...
    }
  }
});
```
See [Global Illumination](/guide/advanced/gi) for details
