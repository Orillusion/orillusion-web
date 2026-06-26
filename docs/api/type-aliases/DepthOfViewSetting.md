[**@orillusion/core**](../README.md)

***

# Type Alias: DepthOfViewSetting

> **DepthOfViewSetting** = `object`

Defined in: [src/setting/post/DepthOfViewSetting.ts:7](https://github.com/orillusion/orillusion/blob/main/src/setting/post/DepthOfViewSetting.ts#L7)

dpeth of view effect

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/DepthOfViewSetting.ts:8](https://github.com/orillusion/orillusion/blob/main/src/setting/post/DepthOfViewSetting.ts#L8)

***

### iterationCount

> **iterationCount**: `number`

Defined in: [src/setting/post/DepthOfViewSetting.ts:12](https://github.com/orillusion/orillusion/blob/main/src/setting/post/DepthOfViewSetting.ts#L12)

Blur Effect Iterations

***

### pixelOffset

> **pixelOffset**: `number`

Defined in: [src/setting/post/DepthOfViewSetting.ts:16](https://github.com/orillusion/orillusion/blob/main/src/setting/post/DepthOfViewSetting.ts#L16)

the distance of Blur effect pixel diffusion

***

### near

> **near**: `number`

Defined in: [src/setting/post/DepthOfViewSetting.ts:20](https://github.com/orillusion/orillusion/blob/main/src/setting/post/DepthOfViewSetting.ts#L20)

the pixel below this distance to camera will not be blurred

***

### far

> **far**: `number`

Defined in: [src/setting/post/DepthOfViewSetting.ts:25](https://github.com/orillusion/orillusion/blob/main/src/setting/post/DepthOfViewSetting.ts#L25)

the pixel above this distance will experience maximum blurring,
[near,far]: the pixel between near and far will be blurred with linear interpolation coefficients between [0,1]
