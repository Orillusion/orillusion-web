---
aside: false
---
# Tone Mapping - Tonemap
The engine computes lighting and post-processing in linear HDR color, where pixel brightness can go far above `1`, while the screen can only show `0 ~ 1`. Tone mapping compresses HDR color into the displayable range with a curve; it decides how highlights roll off and how colors saturate, and is the basis of the overall look of the image.

Tone mapping is done by `TonemapPost`, which the engine adds automatically: **no `addPost` call is needed**. It always runs after every other post effect (except [color grading](./post_colorGrading)), so bloom, fog and the rest are composited in HDR before the curve is applied. Configure it through `engine.setting.render.tonemap`:

```ts
// Configure at initialization
let engine = await Engine3D.init({
    setting: {
        render: {
            tonemap: {
                enable: true,
                mode: 'AgX',
                exposure: 1.2
            }
        }
    }
});

// Change at runtime; takes effect on the next frame
engine.setting.render.tonemap.mode = 'Neutral';
engine.setting.render.tonemap.exposure = 0.8;
```

[engine.setting.render.tonemap](../../api/types/TonemapSetting.md) parameters:

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `enable` | `boolean` | `true` | Whether tone mapping is applied. Set to `false` at runtime to output raw HDR color (values out of range are clamped on output), useful for comparisons; set to `false` at initialization and `TonemapPost` is not added at all |
| `mode` | `TonemapMode` | `'ACES'` | Tone curve, see below |
| `exposure` | `number` | `1.0` | Exposure: a linear factor multiplied onto the HDR color before the curve |
| `whitePoint` | `number` | `4.0` | `'Reinhard'` mode only: the scene-linear value that maps to pure white |

Available curves, `TonemapMode`:

| Value | Description |
| --- | --- |
| `'ACES'` | Default. ACES Filmic fit: high contrast and saturated colors; highlights drift toward white late |
| `'AgX'` | AgX as used by Blender 4 / three.js (base look): bright saturated colors roll off smoothly to white instead of shifting hue. Suits scenes with strong lights and lots of emission |
| `'Neutral'` | Khronos PBR Neutral: colors below about `0.76` stay unchanged and only highlights are compressed. Suits product and e-commerce rendering, where colors must match the authored sRGB values |
| `'Reinhard'` | Extended Reinhard with a white point: soft roll-off, low contrast; the white point is set by `whitePoint` |
| `'Uncharted2'` | Hable Filmic (Uncharted 2): a filmic shoulder for highlights, darker mid-tones |
| `'None'` | No curve (`exposure` still applies); colors outside `0 ~ 1` are simply clamped |

`TonemapUtil` provides a CPU implementation identical to the shader, to estimate what a curve does to an HDR color:

```ts
import { TonemapUtil } from '@orillusion/core';

TonemapUtil.MODES; // ['None', 'ACES', 'Reinhard', 'Uncharted2', 'AgX', 'Neutral']
// Arguments: curve, linear HDR color, exposure, white point
const ldr = TonemapUtil.apply('AgX', [4, 1, 0.25], 1.0, 4.0);
```

In the example below, each row of emissive spheres ramps from `0.25` to `32` times the intensity. Switch curves and watch the brightest spheres of each row: `None` clips to flat colors, `ACES` stays saturated, `AgX` gradually rolls off to white, and with `Neutral` the ordinary materials below barely change.

<Demo src="/demos/advanced/Sample_tonemap.ts"></Demo>

<<< @/public/demos/advanced/Sample_tonemap.ts
