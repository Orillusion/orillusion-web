[**@orillusion/core**](../README.md)

***

# Type Alias: TonemapSetting

> **TonemapSetting** = `object`

Defined in: [src/setting/post/TonemapSetting.ts:9](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L9)

Tonemap Setting — final HDR→LDR curve applied after every other
post-effect, just before the swapchain receives the frame. Defaults
to ACES Filmic, paired with an sRGB output color space — the standard
HDR-to-display pairing.

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/TonemapSetting.ts:12](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L12)

Master switch. When false, the post is still attached but
 acts as a straight passthrough — useful for A/B comparisons.

***

### exposure

> **exposure**: `number`

Defined in: [src/setting/post/TonemapSetting.ts:15](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L15)

Linear scale multiplied onto the HDR color before the curve.
 1.0 is the neutral default (no exposure compensation).

***

### mode

> **mode**: `"ACES"` \| `"None"`

Defined in: [src/setting/post/TonemapSetting.ts:19](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L19)

Curve selector. 'ACES' applies the Filmic Narkowicz fit;
 'None' is straight passthrough (same effect as enable=false
 but keeps exposure scaling).
