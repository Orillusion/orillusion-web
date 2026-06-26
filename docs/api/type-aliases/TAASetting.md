[**@orillusion/core**](../README.md)

***

# Type Alias: TAASetting

> **TAASetting** = `object`

Defined in: [src/setting/post/TAASetting.ts:5](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TAASetting.ts#L5)

TAA Setting

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/TAASetting.ts:6](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TAASetting.ts#L6)

***

### jitterSeedCount

> **jitterSeedCount**: `number`

Defined in: [src/setting/post/TAASetting.ts:11](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TAASetting.ts#L11)

The number of random seed for dithering camera is 8 by default.
Reducing the number can solve some problems with noticeable jitter, but the jagginess will become more pronounced

***

### blendFactor

> **blendFactor**: `number`

Defined in: [src/setting/post/TAASetting.ts:15](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TAASetting.ts#L15)

Merge the coefficients of the historical frame and the current frame. The smaller the parameter, the smaller the proportion of the current frame

***

### temporalJitterScale

> **temporalJitterScale**: `number`

Defined in: [src/setting/post/TAASetting.ts:19](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TAASetting.ts#L19)

The scaling coefficient of the random offset value of the jitter camera [0,1]: The smaller the coefficient, the weaker the anti aliasing effect, and the weaker the pixel jitter

***

### sharpFactor

> **sharpFactor**: `number`

Defined in: [src/setting/post/TAASetting.ts:23](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TAASetting.ts#L23)

Image sharpening coefficient [0.1-0.9]: The smaller the coefficient, the weaker the sharpening effect, the better the anti aliasing effect. Conversely, the stronger the sharpening, the weaker the anti aliasing effect

***

### sharpPreBlurFactor

> **sharpPreBlurFactor**: `number`

Defined in: [src/setting/post/TAASetting.ts:27](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TAASetting.ts#L27)

Image sharpening sampling coefficient scaling coefficient: Scales the sampling offset during sharpening.

***

### debug

> **debug**: `boolean`

Defined in: [src/setting/post/TAASetting.ts:31](https://github.com/orillusion/orillusion/blob/main/src/setting/post/TAASetting.ts#L31)
