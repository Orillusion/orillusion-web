[**@orillusion/core**](../README.md)

***

# Type Alias: TonemapMode

> **TonemapMode** = `"None"` \| `"ACES"` \| `"Reinhard"` \| `"Uncharted2"` \| `"AgX"` \| `"Neutral"`

Defined in: [src/setting/post/TonemapSetting.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L13)

Tone curve applied by `TonemapPost`.

- `'None'`       passthrough (exposure still applies); output is clamped by the swapchain.
- `'ACES'`       Narkowicz ACES Filmic fit — punchy, saturated highlights drift toward white. Engine default.
- `'Reinhard'`   Extended Reinhard with a white point: `c·(1 + c/w²)/(1 + c)`. Soft, low contrast.
- `'Uncharted2'` Hable filmic (Uncharted 2) with W = 11.2, exposure bias 2.
- `'AgX'`        Blender 4 / three.js AgX (base look). Desaturates bright saturated colors instead of clipping hues.
- `'Neutral'`    Khronos PBR Neutral — leaves colors below ~0.76 untouched; meant for product / e-commerce rendering where base colors must match the authored sRGB values.
