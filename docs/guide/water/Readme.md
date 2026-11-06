# Water Rendering - WaterRenderer

`WaterRenderer` renders large bodies of water such as pools, lakes and oceans. It generates a grid in the xz plane of its object, displaces it with Gerstner waves or FFT wind waves, and shades it with `WaterMaterial`: refraction, absorption, sky reflection and sun highlights. Together with the render settings it also provides caustics on the bottom, an underwater view and interactive ripples.

## Enabling Water Support

`WaterRenderer` can draw a wavy surface on its own, but water depth, caustics, the underwater view, ripples and FFT waves rely on extra render passes. Turn on `setting.render.water` when initializing the engine:

```ts
import { Engine3D } from '@orillusion/core';

const engine = await Engine3D.init({
    setting: { render: { water: true } }
});
```

This adds the following passes to the render pipeline:

| Pass | Purpose |
| --- | --- |
| `SceneLinearDepthPass` | Records the linear depth of the opaque scene, so the water knows the real distance to the bottom at every pixel for absorption and refraction |
| `CausticsPass` | Projects the caustics formed by sunlight focused through the waves onto objects under water |
| `UnderwaterPass` | When the camera is under water, absorbs and scatters the image along the view ray; a camera half in the water shows a waterline |
| `WaterSimulationPass` | Advances the FFT waves and the interactive ripples on the GPU |

::: tip
Without `setting.render.water` the water has no scene depth, so it uses `waterMaterial.waterDepth` (default `2`) as a fixed depth for its color; caustics, the underwater view, `addRipple()` and `spectrum` have no effect.
:::

## Basic Usage

Add a `WaterRenderer` component to an `Object3D` to get a `10 × 10` water surface. The water level is the object's world `y` coordinate:

```ts
import { Object3D, WaterRenderer, Vector2 } from '@orillusion/core';

const waterObj = new Object3D();
const water = waterObj.addComponent(WaterRenderer);
// Size of the rectangle along local x and z; the object's scale applies
water.width = 20;
water.length = 14;
// Grid segments along the longer side; the waves need a few vertices per shortest wavelength
water.resolution = 200;
// Distance from the surface to the bottom, only used without setting.render.water
water.waterMaterial.waterDepth = 2;
scene.addChild(waterObj);
```

The object can be moved, scaled and rotated about the y axis. The surface always stays horizontal and the waves are evaluated in world space, so several water objects line up seamlessly.

::: tip
The water is drawn from inside the water body and refracts the color of the opaque scene, so it **does not take part in the depth prepass, does not cast shadows and does not show up in reflection probes**. The component sets this up automatically.
:::

### Example: Pool

Nearly still water over a tiled floor with caustics; a rubber duck floats on the surface using `getHeight()`. Click the water to splash, click the duck to push it under, and hold `Shift` while moving the mouse to drag a trail of ripples.

<Demo src="/examples/water/Pool.ts"></Demo>

<<< @/public/examples/water/Pool.ts

## Waves

The surface motion is the sum of the Gerstner waves in `waves` and the optional FFT wind waves in `spectrum`.

### Gerstner Waves

`waves` is an array of `GerstnerWave`; up to 8 of them are used (`WATER_MAX_WAVES`). Edit the elements in place or assign a new array:

```ts
water.waves = [
    { direction: new Vector2(1, 0.3), wavelength: 4, steepness: 0.025 },
    { direction: new Vector2(0.4, 1), wavelength: 2.6, steepness: 0.02 },
    { direction: new Vector2(-0.7, 0.6), wavelength: 1.7, steepness: 0.015 }
];
// Animation speed; 0 freezes the surface
water.timeScale = 1;
```

| Field | Description |
| --- | --- |
| `direction` | Direction of travel in the xz plane (`Vector2`: x is world x, y is world z) |
| `wavelength` | Crest-to-crest distance in world units; the wave speed follows from the deep-water dispersion relation |
| `steepness` | `0 ~ 1`. The wave height is about `steepness × wavelength / 2π`. Keep the sum over all waves below `1`, otherwise the crests loop |

### FFT Wind Waves

For open water, set `spectrum`: it simulates a complete sea on the GPU with FFTs from the wind speed and fetch, from swells hundreds of metres long down to centimetre ripples, with whitecap foam where the crests break. It adds to `waves`; an ocean usually clears `waves`:

```ts
import { WaterSpectrum, Vector2 } from '@orillusion/core';

const spectrum = new WaterSpectrum();
spectrum.windSpeed = 12;                     // wind speed 10 m above the water (m/s)
spectrum.windDirection = new Vector2(1, 0.3);
spectrum.fetch = 100000;                     // fetch: distance the wind has blown over open water (m)
water.spectrum = spectrum;
water.waves = [];
```

| Property | Default | Description |
| --- | --- | --- |
| `windSpeed` | `10` | Wind speed (m/s); stronger wind gives higher, longer waves |
| `windDirection` | `(1, 0.3)` | Direction the wind blows toward |
| `fetch` | `100000` | Fetch in metres. A short fetch gives young, short waves; a long one a fully developed sea |
| `amplitude` | `1` | Wave height scale |
| `choppiness` | `1` | How far the water moves sideways toward the crests: `0` gives rounded waves, `1` sharp crests and troughs that whitecaps break from |
| `seed` | `1` | Random seed of the wave phases |

`water.spectrum = null` removes the wind waves and releases their GPU resources.

### Fading Distant Waves

The grid resolution is limited; where vertices are far apart, short waves alias. `waveFadeDistance` is the distance from the camera, in **wavelengths**, at which each wave has faded out (fading starts at half of it). The default `80` suits an even grid; lower it for a grid that gets coarser with distance, and `0` keeps every wave. It only affects the image: `getHeight()` always includes every wave.

### Example: Ocean

An open sea made of FFT wind waves. The surface is a disc of rings around the buoy that gets sparser with distance, combined with `waveFadeDistance = 14` to avoid aliasing in the distance; ripples are only simulated within 60 metres of the buoy (see `rippleArea` below). The `Sea` panel adjusts the wind speed, fetch, wave height and crest sharpness.

<Demo src="/examples/water/Ocean.ts"></Demo>

<<< @/public/examples/water/Ocean.ts

## Custom Water Shapes

The default rectangle is defined by `width`, `length` and `resolution`. For lakes, ponds and other irregular water, set `surfaceGeometry` to any flat mesh; the water surface, the underwater view, the caustics and the ripples all follow its outline:

```ts
// An indexed mesh in the object's local xz plane; vertex y is ignored
water.surfaceGeometry = lakeGeometry;
// null restores the rectangle
water.surfaceGeometry = null;
```

Requirements for the mesh:

- flat in the object's local xz plane (vertex `y` is ignored);
- indexed geometry;
- fine enough for the shortest waves.

Usually the mesh reaches a little past the shoreline, under the terrain, so the sideways motion of the waves never opens a gap at the shore.

### Example: Lake

A lake with an irregular shoreline; the water mesh extends one metre past the shoreline, buried under the rising terrain. The `Buoy` panel makes the buoy drift in a circle, or lifts it and drops it into the water.

<Demo src="/examples/water/Lake.ts"></Demo>

<<< @/public/examples/water/Lake.ts

## Detail Ripples and Caustics

On top of the mesh displacement, the surface carries smaller ripples that only bend the normal. They break up highlights and reflections, and they are what focuses the sunlight into caustics:

| Property | Default | Description |
| --- | --- | --- |
| `detailScale` | `1.8` | Base wavelength of the detail ripples (world units) |
| `detailStrength` | `0.35` | How much the detail ripples bend the normal, `0 ~ 1`. Caustics always use the full strength; lower values only keep the view of the bottom through calm water clearer |
| `caustics` | `true` | Whether to draw caustics on objects under water (requires `setting.render.water`) |
| `causticsIntensity` | `0.6` | Caustics strength |

## Interaction

### Ripples

`addRipple(x, z, strength, radius)` pushes the surface down at world `(x, z)`, as if something struck it; a ring then spreads out and reflects off the edge of the water. Mouse clicks, objects falling in or moving through the water can all start ripples this way:

```ts
import { PointerEvent3D } from '@orillusion/core';

engine.inputSystem.addEventListener(PointerEvent3D.POINTER_DOWN, (e: PointerEvent3D) => {
    const ray = camera.screenPointToRay(e.mouseX, e.mouseY);
    if (ray.direction.y >= 0) return;
    // Where the view ray meets the undisturbed surface
    const t = (water.baseHeight - ray.origin.y) / ray.direction.y;
    const x = ray.origin.x + ray.direction.x * t;
    const z = ray.origin.z + ray.direction.z * t;
    // Crater depth 0.4, radius 0.4 (world units)
    water.addRipple(x, z, 0.4, 0.4);
}, null);
```

Points off the water are ignored, and at most 32 ripples start per frame (`WATER_MAX_RIPPLES_PER_FRAME`). The ripple simulation is created on the first `addRipple()` call.

| Property | Default | Description |
| --- | --- | --- |
| `rippleSpeed` | `1.2` | Ripple speed (world units per second) |
| `rippleDamping` | `0.3` | Fraction of the ripples' motion lost per second |
| `rippleResolution` | `256` | Ripple grid cells along the longer side of the water; changing it clears the ripples |
| `rippleArea` | `null` | Simulate ripples only in a square of this side (local units) around the water's origin; `null` covers the whole surface. For large water such as an ocean, where one grid cannot resolve ripples |

### Getting the Water Height

`getHeight(x, z)` returns the current world height of the surface above `(x, z)` on the CPU, for floating objects, boats, checking whether a character is in the water and so on:

```ts
class Floater extends ComponentBase {
    public water: WaterRenderer;

    public onUpdate(): void {
        const p = this.transform;
        // Keep the object's center 0.1 above the surface
        p.y = this.water.getHeight(p.x, p.z) + 0.1;
    }
}
```

::: tip Height of FFT waves
Gerstner waves are evaluated on the CPU directly. FFT waves are computed on the GPU: `getHeight()` queues the point, and their part of the height comes from the read-back of the nearest point queried a frame or two earlier (0 on the first query). Call `getHeight()` every frame for moving objects.
:::

Other helpers:

| Method | Description |
| --- | --- |
| `isUnderwater(point)` | Whether the point is inside the water's outline and below the surface |
| `containsXZ(x, z, margin?)` | Whether world `(x, z)` is inside the water's outline; `margin` grows the outline |
| `baseHeight` | World height of the undisturbed surface, i.e. the object's world `y` |
| `time` | Wave phase time in seconds; can be set to keep several water surfaces in sync |

## Underwater View

With `setting.render.water` on, `UnderwaterPass` takes over automatically when the camera enters the water: the image is attenuated along the view ray by the water's absorption color and mixed with the water's own color, and a camera half in the water shows a waterline across the screen. Looking up from below, the world above shows through the surface within Snell's window (within about 48.6° of straight up), while the rest of the surface mirrors the water below; `waterMaterial.underwaterClarity` widens the window so the world above is easier to see.

## Material Parameters

The look of the water is controlled by `water.waterMaterial` (`WaterMaterial`):

```ts
import { Color } from '@orillusion/core';

const m = water.waterMaterial;
m.absorptionColor = new Color(0.25, 0.55, 0.42); // color that objects seen through the water are tinted toward
m.underwaterColor = new Color(0.05, 0.13, 0.1);  // color of deep water
m.density = 0.45;                                // higher is murkier
```

| Property | Default | Description |
| --- | --- | --- |
| `absorptionColor` | `(0.12, 0.62, 0.72)` | Light passing through the water is tinted toward this color |
| `underwaterColor` | `(0.03, 0.16, 0.2)` | Color of deep water; anything seen through the water, from above or below, fades into it with distance |
| `density` | `0.15` | Absorption per world unit of path through the water |
| `refractionStrength` | `1` | Strength of the distortion seen through the surface; `1` is physical, `0` disables it |
| `waterDepth` | `2` | Fixed water depth used without `setting.render.water` |
| `reflectionIntensity` | `1` | Environment reflection strength |
| `reflectionRoughness` | `0.02` | Surface roughness below the scale of the detail ripples; blurs the reflection |
| `fresnelClamp` | `1` | Upper bound of the fresnel reflection weight, `0 ~ 1` |
| `specularPower` | `2000` | Sun highlight exponent; higher is smaller and sharper |
| `specularIntensity` | `2` | Sun highlight strength |
| `foamIntensity` | `1` | Whitecap foam where crests break, `0 ~ 1`; calm water has none |
| `foamTexture` | built-in | Tileable foam texture (r channel); `null` falls back to noise patches |
| `subsurfaceIntensity` | `1` | Sunlight glowing through the crests of tall waves when looking toward the sun |
| `underwaterClarity` | `0.5` | How clearly the world above shows from underwater, `0 ~ 1`; `0` is the physical Snell's window |

See the API documentation of [WaterRenderer](/api/classes/WaterRenderer), [WaterMaterial](/api/classes/WaterMaterial) and [WaterSpectrum](/api/classes/WaterSpectrum) for more properties.
