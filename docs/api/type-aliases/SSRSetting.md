[**@orillusion/core**](../README.md)

***

# Type Alias: SSRSetting

> **SSRSetting** = `object`

Defined in: [src/setting/post/SSRSetting.ts:6](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L6)

Screen Space Reflection Setting

## Properties

### debug

> **debug**: `any`

Defined in: [src/setting/post/SSRSetting.ts:7](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L7)

***

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/SSRSetting.ts:11](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L11)

enable

***

### pixelRatio

> **pixelRatio**: `number`

Defined in: [src/setting/post/SSRSetting.ts:15](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L15)

pixel ratio, Smaller pixel ratios can achieve better performance, but the visual effect will decrease

***

### fadeEdgeRatio

> **fadeEdgeRatio**: `number`

Defined in: [src/setting/post/SSRSetting.ts:19](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L19)

fade out when pixel is closed to edge

***

### rayMarchRatio

> **rayMarchRatio**: `number`

Defined in: [src/setting/post/SSRSetting.ts:23](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L23)

fade alpha from ray trace step count

***

### fadeDistanceMin

> **fadeDistanceMin**: `number`

Defined in: [src/setting/post/SSRSetting.ts:27](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L27)

fade alpha by distance from camera to hit point (min)

***

### fadeDistanceMax

> **fadeDistanceMax**: `number`

Defined in: [src/setting/post/SSRSetting.ts:31](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L31)

fade alpha by distance from camera to hit point (max)

***

### roughnessThreshold

> **roughnessThreshold**: `number`

Defined in: [src/setting/post/SSRSetting.ts:35](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L35)

threshold of roughness, determine effect refrection

***

### powDotRN

> **powDotRN**: `number`

Defined in: [src/setting/post/SSRSetting.ts:39](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L39)

Pow parameter of normal and reflection dot product

***

### mixThreshold

> **mixThreshold**: `number`

Defined in: [src/setting/post/SSRSetting.ts:43](https://github.com/orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L43)

SSR color mixing parameter: If the position difference between the current frame and the previous frame exceeds the mixThreshold at a certain pixel position, the current frame will be quickly retained to have more.
