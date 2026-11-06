---
aside: false
---
# Color Grading - ColorGradingPost
Color grading gives the image a consistent style: warm or cool tones, the cinematic teal-orange look, a vintage sepia and so on. `ColorGradingPost` runs **after** [tone mapping](./post_tonemap), regardless of the order it is added in, and adjusts display colors already mapped to `0 ~ 1`, so grading is not affected by HDR brightness or the tone curve.

```ts
// Initialize the engine; default parameters can be configured here
let engine = await Engine3D.init({
    setting: {
        render: {
            postProcessing: {
                colorGrading: {
                    contrast: 1.15,
                    saturation: 1.1,
                    temperature: 0.2
                }
            }
        }
    }
});

// Add the post-processing component
let postProcessing = scene.addComponent(PostProcessingComponent);

// Add ColorGradingPost
let grade = postProcessing.addPost(ColorGradingPost);

// The grade object can be configured too, equivalent to the engine settings above
grade.contrast = 1.15;
grade.saturation = 1.1;
grade.temperature = 0.2;
// ASC-CDL values are per channel [r, g, b]
grade.slope = [1.05, 1.0, 0.95];
```

The adjustments are applied in this order: exposure and white balance → contrast → saturation → ASC-CDL → LUT.

[engine.setting.render.postProcessing.colorGrading](../../api/types/ColorGradingSetting.md) parameters:

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `enable` | `boolean` | `false` | Whether the effect is on; set automatically when `ColorGradingPost` is added / removed |
| `exposure` | `number` | `0` | Exposure trim in stops (EV): `+1` doubles the brightness, `-1` halves it |
| `temperature` | `number` | `0` | White balance temperature, `-1` (cool / blue) ~ `+1` (warm / orange) |
| `tint` | `number` | `0` | White balance tint, `-1` (green) ~ `+1` (magenta) |
| `contrast` | `number` | `1` | Contrast around mid-grey, adjusted in gamma space; `1` is unchanged |
| `saturation` | `number` | `1` | Saturation; `0` is greyscale, `1` unchanged, above `1` more vivid |
| `slope` | `[r, g, b]` | `[1, 1, 1]` | ASC-CDL slope (gain), multiplied onto the color |
| `offset` | `[r, g, b]` | `[0, 0, 0]` | ASC-CDL offset (lift), added to the color |
| `power` | `[r, g, b]` | `[1, 1, 1]` | ASC-CDL power (gamma) |
| `lutIntensity` | `number` | `1` | Blend between the graded color and the LUT result, `0 ~ 1`; no effect without a LUT |

::: tip
`exposure` here is in stops and differs from the linear `exposure` of [tone mapping](./post_tonemap), which applies before the curve: this one is a trim of the final display color.
:::

## LUT

ASC-CDL is the industry-standard description of a grade, `out = (in × slope + offset) ^ power`, with every parameter per RGB channel; it covers most primary grading. More elaborate looks use a LUT (lookup table), which maps every input color to an output color. LUTs can be exported from grading software or generated in code.

### Generating a LUT from a Function

`setLUTFromFunction(size, fn)` builds a LUT from a function and uses it right away. The function takes and returns sRGB-encoded colors in `0 ~ 1`:

```ts
// Vintage sepia: recolor by luminance
grade.setLUTFromFunction(32, (r, g, b) => {
    const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return [l * 1.07 + 0.03, l * 0.92 + 0.02, l * 0.72];
});
grade.lutIntensity = 0.8;

// Remove the LUT
grade.lut = null;
```

`size` is the edge length of the LUT cube; `32` suits most looks, and larger values give smoother gradients.

### Using a LUT Image

You can also assign a strip LUT image exported from grading software to `lut`. The image must:

- be `size²` wide and `size` high, for example `256 × 16` or `1024 × 32`;
- hold `size` squares side by side, one per blue value; inside each square red runs horizontally and green vertically, with green `0` on the top row;
- store sRGB-encoded values, and be loaded with the default linear color space and without mipmaps, so the shader reads the stored values as they are.

```ts
import { BitmapTexture2D } from '@orillusion/core';

// First argument false: no mipmaps
const lutTexture = new BitmapTexture2D(false);
await lutTexture.load('images/lut_night.png');
grade.lut = lutTexture;
```

The example below contains a color chart (12 hues × 4 lightness levels, with a grey ramp on top) and a row of spheres with different materials, so the effect of each adjustment is easy to read. The `look` menu offers a few LUT looks generated in code; `night (image)` loads a `1024 × 32` LUT image (a night look). After choosing a LUT, `lutIntensity` sets how much of it is blended with the original image.

<Demo src="/demos/advanced/Sample_colorGrading.ts"></Demo>

<<< @/public/demos/advanced/Sample_colorGrading.ts
