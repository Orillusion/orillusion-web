[**@orillusion/core**](../README.md)

***

# Type Alias: TonemapSetting

> **TonemapSetting** = `object`

Defined in: [src/setting/post/TonemapSetting.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L23)

Tonemap Setting — final HDR→LDR curve applied after every other
post-effect, just before the swapchain receives the frame. Defaults
to ACES Filmic, paired with an sRGB output color space — the standard
HDR-to-display pairing.

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/TonemapSetting.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L26)

Master switch. When false, the post is still attached but
 acts as a straight passthrough — useful for A/B comparisons.

***

### exposure

> **exposure**: `number`

Defined in: [src/setting/post/TonemapSetting.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L29)

Linear scale multiplied onto the HDR color before the curve.
 1.0 is the neutral default (no exposure compensation).

***

### mode

> **mode**: [`TonemapMode`](TonemapMode.md)

Defined in: [src/setting/post/TonemapSetting.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L31)

Curve selector, see [TonemapMode](TonemapMode.md).

***

### whitePoint?

> `optional` **whitePoint?**: `number`

Defined in: [src/setting/post/TonemapSetting.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/TonemapSetting.ts#L34)

Scene-linear value that maps to pure white in `'Reinhard'` mode.
 Ignored by the other curves. Default 4.
