[**@orillusion/core**](../README.md)

***

# Type Alias: GTAOSetting

> **GTAOSetting** = `object`

Defined in: [src/setting/post/GTAOSetting.ts:6](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L6)

Setting of GTAO

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/GTAOSetting.ts:7](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L7)

***

### maxDistance

> **maxDistance**: `number`

Defined in: [src/setting/post/GTAOSetting.ts:11](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L11)

Set the maximum distance to search around 3D space during ao sampling

***

### maxPixel

> **maxPixel**: `number`

Defined in: [src/setting/post/GTAOSetting.ts:15](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L15)

Set the maximum distance when searching for surrounding pixels during ao sampling

***

### darkFactor

> **darkFactor**: `number`

Defined in: [src/setting/post/GTAOSetting.ts:19](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L19)

Set the coefficient of ao value to participate in outputting to the screen, 1: output all, 0: not output

***

### rayMarchSegment

> **rayMarchSegment**: `number`

Defined in: [src/setting/post/GTAOSetting.ts:23](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L23)

Set the number of steps for AO sampling. A larger value will result in better quality AO effects while consuming more performance

***

### multiBounce

> **multiBounce**: `boolean`

Defined in: [src/setting/post/GTAOSetting.ts:27](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L27)

Simulate color rebound or not

***

### usePosFloat32

> **usePosFloat32**: `boolean`

Defined in: [src/setting/post/GTAOSetting.ts:32](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L32)

true: Calculate the position value of GBuffer using f32 to obtain more accurate values (water and other effects may not be supported)
false: We will use the position value of GBuffer in f16 for operations, with a wider coverage

***

### blendColor

> **blendColor**: `boolean`

Defined in: [src/setting/post/GTAOSetting.ts:36](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L36)

True: will be mixed with the mainColor of GBuffer; False: will only output the colors of ao

***

### debug

> **debug**: `boolean`

Defined in: [src/setting/post/GTAOSetting.ts:40](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L40)
