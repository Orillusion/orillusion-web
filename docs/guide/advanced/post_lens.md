---
aside: false
---
# Lens Effects - LensPost
Simulates three effects of a real camera lens in a single fullscreen pass:

- **Vignette**: the image darkens toward the corners, drawing the eye to the center;
- **Chromatic aberration**: the lens refracts different wavelengths differently, so the red and blue channels shift apart along the radius, leaving colored fringes on high-contrast edges near the border of the image;
- **Film grain**: random noise for a film look.

`LensPost` runs in linear HDR space before tone mapping, so the grain and the vignette go through the same [tone mapping](./post_tonemap) curve as the rest of the image.

```ts
// Initialize the engine; default parameters can be configured here
let engine = await Engine3D.init({
    setting: {
        render: {
            postProcessing: {
                lens: {
                    vignetteIntensity: 0.55,
                    chromaticAberration: 0.3,
                    grainIntensity: 0.15
                }
            }
        }
    }
});

// Add the post-processing component
let postProcessing = scene.addComponent(PostProcessingComponent);

// Add LensPost
let lens = postProcessing.addPost(LensPost);

// The lens object can be configured too, equivalent to the engine settings above
lens.vignetteIntensity = 0.55;
lens.vignetteColor = new Color(0, 0, 0, 1);
lens.chromaticAberration = 0.3;
lens.grainIntensity = 0.15;

// Removing LensPost turns the effect off
postProcessing.removePost(LensPost);
```

[engine.setting.render.postProcessing.lens](../../api/types/LensSetting.md) parameters:

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `enable` | `boolean` | `false` | Whether the effect is on; set automatically when `LensPost` is added / removed |
| `vignetteIntensity` | `number` | `0.4` | Vignette strength; `0` off, `0.4` a gentle darkening of the corners, `1` heavy |
| `vignetteSmoothness` | `number` | `0.4` | Falloff softness, `0` (hard edge) ~ `1` (very gradual) |
| `vignetteRoundness` | `number` | `1.0` | `1` is a circular vignette regardless of aspect ratio, `0` follows the screen rectangle |
| `vignetteColor` | `Color` | black | Color the corners fade to |
| `chromaticAberration` | `number` | `0` | Chromatic aberration strength; `0` off, `0.1` subtle, `1` obvious fringing (about a 5% shift at the left and right edges) |
| `grainIntensity` | `number` | `0` | Film grain strength; `0` off, `0.1` subtle, `0.5` heavy. The grain is multiplicative, so it scales with exposure |
| `grainStatic` | `boolean` | `false` | Freeze the grain pattern (for screenshots and tests) |

The example below uses alternating black and white pillars, which make the color fringing near the edges easy to see; the sky shows the vignette falloff and the grain.

<Demo src="/demos/advanced/Sample_lens.ts"></Demo>

<<< @/public/demos/advanced/Sample_lens.ts
