[**@orillusion/core**](../README.md)

***

# Type Alias: LensSetting

> **LensSetting** = `object`

Defined in: [src/setting/post/LensSetting.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/LensSetting.ts#L8)

Lens Setting — vignette, chromatic aberration and film grain, applied by
`LensPost` in scene-linear HDR (before the tonemap).

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/LensSetting.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/LensSetting.ts#L10)

Master switch (set by attaching / detaching `LensPost`).

***

### vignetteIntensity

> **vignetteIntensity**: `number`

Defined in: [src/setting/post/LensSetting.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/LensSetting.ts#L12)

Vignette strength. 0 = off; 0.4 is a gentle darkening of the corners; 1 is heavy.

***

### vignetteSmoothness

> **vignetteSmoothness**: `number`

Defined in: [src/setting/post/LensSetting.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/LensSetting.ts#L14)

Falloff softness, 0 (hard edge) … 1 (very gradual).

***

### vignetteRoundness

> **vignetteRoundness**: `number`

Defined in: [src/setting/post/LensSetting.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/LensSetting.ts#L16)

1 = circular vignette regardless of aspect ratio, 0 = follows the screen rectangle.

***

### vignetteColor

> **vignetteColor**: [`Color`](../classes/Color.md)

Defined in: [src/setting/post/LensSetting.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/LensSetting.ts#L18)

Color the corners fade to (usually black).

***

### chromaticAberration

> **chromaticAberration**: `number`

Defined in: [src/setting/post/LensSetting.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/LensSetting.ts#L25)

Chromatic aberration strength: red and blue are sampled along the
radius from the screen center, offset by `c·|c|²·0.4·intensity`
(c = uv − 0.5), i.e. intensity 1 shifts them by about 5 % of the
screen at the left/right edge. 0 = off; 0.1 subtle; 1 obvious fringing.

***

### grainIntensity

> **grainIntensity**: `number`

Defined in: [src/setting/post/LensSetting.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/LensSetting.ts#L27)

Film grain strength, 0 = off; 0.1 subtle; 0.5 heavy. Multiplicative, so it scales with exposure.

***

### grainStatic

> **grainStatic**: `boolean`

Defined in: [src/setting/post/LensSetting.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/LensSetting.ts#L29)

Freeze the grain pattern (useful for screenshots / tests).
