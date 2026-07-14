[**@orillusion/core**](../README.md)

***

# Type Alias: ShadowSetting

> **ShadowSetting** = `object`

Defined in: [src/setting/ShadowSetting.ts:6](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L6)

Shadow setting

## Properties

### debug

> **debug**: `any`

Defined in: [src/setting/ShadowSetting.ts:7](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L7)

***

### enable

> **enable**: `boolean`

Defined in: [src/setting/ShadowSetting.ts:11](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L11)

enable

***

### needUpdate

> **needUpdate**: `boolean`

Defined in: [src/setting/ShadowSetting.ts:15](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L15)

***

### autoUpdate

> **autoUpdate**: `boolean`

Defined in: [src/setting/ShadowSetting.ts:19](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L19)

update shadown automatic

***

### updateFrameRate

> **updateFrameRate**: `number`

Defined in: [src/setting/ShadowSetting.ts:24](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L24)

frequency for shadows update

***

### type

> **type**: `"PCF"` \| `"HARD"` \| `"SOFT"`

Defined in: [src/setting/ShadowSetting.ts:43](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L43)

Shadow sampling mode.

- `'HARD'`: single-tap hardware compare, sharp 1-texel edges.
  Cheapest. Default.
- `'PCF'`: 3×3 tent-weighted PCF (~5×5 effective via the
  hardware comparison sampler's 2×2 filtering). Mild softness,
  uniform across the shadow map regardless of receiver depth.
- `'SOFT'`: **Percentage-Closer Soft Shadows (PCSS)** — the
  16-tap blocker search + similar-triangles penumbra estimate +
  16-tap Poisson PCF. Produces "contact hardening": sharp
  directly under occluders, progressively softer as receiver-to-
  blocker distance grows. The most expensive of the three but
  the only one that captures distance-dependent softness.
  Per-light `softness` (light.size in shadow-map texels) overrides
  the global `shadowSoft` knob.

***

### shadowSize

> **shadowSize**: `number`

Defined in: [src/setting/ShadowSetting.ts:51](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L51)

shadow mapping Size

***

### shadowSoft

> **shadowSoft**: `number`

Defined in: [src/setting/ShadowSetting.ts:55](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L55)

Shadow softness

***

### pcfKernelScale?

> `optional` **pcfKernelScale?**: `number`

Defined in: [src/setting/ShadowSetting.ts:64](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L64)

Directional PCF kernel radius multiplier. 1.0 = exactly one shadow
texel per sample step (3x3 tap spacing). Values > 1 widen the
kernel for softer edges at the cost of possible peter-panning;
values < 1 tighten it and give sharper but more aliased edges.
Live-tunable — the value is rewritten to globalUniform every frame.
Default 1.0.

***

### pointShadowSize

> **pointShadowSize**: `number`

Defined in: [src/setting/ShadowSetting.ts:68](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L68)

Point shadow mapping size

***

### csmMargin

> **csmMargin**: `number`

Defined in: [src/setting/ShadowSetting.ts:72](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L72)

Blend Shadow(0-1)

***

### csmScatteringExp

> **csmScatteringExp**: `number`

Defined in: [src/setting/ShadowSetting.ts:76](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L76)

scattering csm Area Exponent for each level

***

### csmAreaScale

> **csmAreaScale**: `number`

Defined in: [src/setting/ShadowSetting.ts:80](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L80)

scale csm Area of all level

***

### maxShadowMapNum

> **maxShadowMapNum**: `number`

Defined in: [src/setting/ShadowSetting.ts:93](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L93)

max shadow map number

***

### maxShadowMapWidth

> **maxShadowMapWidth**: `number`

Defined in: [src/setting/ShadowSetting.ts:98](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L98)

max shadow map width

***

### maxShadowMapHeight

> **maxShadowMapHeight**: `number`

Defined in: [src/setting/ShadowSetting.ts:103](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L103)

max shadow map height

***

### maxCascades

> **maxCascades**: `number`

Defined in: [src/setting/ShadowSetting.ts:108](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L108)

max cascades for csm

***

### shadowBound

> **shadowBound**: `number`

Defined in: [src/setting/ShadowSetting.ts:119](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L119)

shadow bound, the area of shadow map projection,
the larger the value, the more area the shadow map covers,
but the lower the quality.
The smaller the value, the higher the quality,
but the smaller the area covered by the shadow map.
It is recommended to set this value according to the
scene size and light distance.

***

### enableStaticCache?

> `optional` **enableStaticCache?**: `boolean`

Defined in: [src/setting/ShadowSetting.ts:141](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L141)

Opt-in static-shadow caching.

When `true`, the shadow-cast pass splits into two phases per frame:
  1. If the per-light static layer is dirty (light moved, or the scene
     explicitly marked dirty), rebuild it by drawing only renderers
     with `shadowCacheMode === 'static'`. Result stored in a cached
     depth texture.
  2. Every frame: copy the cached static depth into the live shadow
     map and draw renderers with `shadowCacheMode === 'dynamic'` on
     top (load-op preserves the copied depth, allowing correct
     occlusion resolution between static and dynamic geometry).

When `false` (default), all renderers are treated as dynamic and the
pipeline behaves exactly like before — no cached layer, no extra
copies. Safe default for backwards compatibility.

Only `'auto'` / `'static'` / `'dynamic'` tags on `RenderNode.shadowCacheMode`
are consulted when this flag is on; `'auto'` counts as dynamic.

***

### contactShadow?

> `optional` **contactShadow?**: `object`

Defined in: [src/setting/ShadowSetting.ts:148](https://github.com/orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L148)

Contact Shadows — short screen-space ray-march along the dominant
 directional light. Adds the close-contact darkness CSM can't
 resolve (object-on-floor, fingers-on-table). Enable by adding
 ContactShadowPost to the post chain; this sub-tree controls
 the shader parameters.

#### enable

> **enable**: `boolean`

#### maxStepCount

> **maxStepCount**: `number`

Number of ray-march steps. 12-24 is the visual sweet-spot.

#### maxDistance

> **maxDistance**: `number`

World-space ray length. Smaller = tighter contact-only shadow.

#### thickness

> **thickness**: `number`

Depth-difference window that counts as "occluded". Bigger
 catches more contact but smears under thin geometry.

#### bias

> **bias**: `number`

Bias along the surface normal to avoid self-shadow acne.

#### intensity

> **intensity**: `number`

[0,1] strength.
