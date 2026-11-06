[**@orillusion/core**](../README.md)

***

# Type Alias: MotionBlurSetting

> **MotionBlurSetting** = `object`

Defined in: [src/setting/post/MotionBlurSetting.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/MotionBlurSetting.ts#L5)

Motion Blur Setting — camera-motion blur applied by `MotionBlurPost`.

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/MotionBlurSetting.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/MotionBlurSetting.ts#L7)

Master switch (set by attaching / detaching `MotionBlurPost`).

***

### intensity

> **intensity**: `number`

Defined in: [src/setting/post/MotionBlurSetting.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/MotionBlurSetting.ts#L13)

Shutter scale. 1 blurs each pixel along the full distance it travelled
since the previous frame (a 360° shutter at 60 Hz); 0.5 is the classic
180° film shutter; 0 disables the blur.

***

### samples

> **samples**: `number`

Defined in: [src/setting/post/MotionBlurSetting.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/MotionBlurSetting.ts#L15)

Samples taken along the velocity vector, 2…32. More = smoother, slower.

***

### maxBlurPixels

> **maxBlurPixels**: `number`

Defined in: [src/setting/post/MotionBlurSetting.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/MotionBlurSetting.ts#L17)

Upper bound on the blur length, in pixels, so a camera cut or teleport does not smear the whole frame.

***

### frameRateIndependent

> **frameRateIndependent**: `boolean`

Defined in: [src/setting/post/MotionBlurSetting.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/MotionBlurSetting.ts#L22)

Normalize the blur length to a 60 Hz frame so it looks the same at
any frame rate. Turn off to blur by the raw per-frame displacement.
