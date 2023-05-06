# Type alias: TAASetting

Ƭ **TAASetting**: `Object`

TAA Setting

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | - |
| `jitterSeedCount` | `number` | The number of random seed for dithering camera is 8 by default. Reducing the number can solve some problems with noticeable jitter, but the jagginess will become more pronounced |
| `blendFactor` | `number` | Merge the coefficients of the historical frame and the current frame. The smaller the parameter, the smaller the proportion of the current frame |
| `temporalJitterScale` | `number` | The scaling coefficient of the random offset value of the jitter camera [0,1]: The smaller the coefficient, the weaker the anti aliasing effect, and the weaker the pixel jitter |
| `sharpFactor` | `number` | Image sharpening coefficient [0.1-0.9]: The smaller the coefficient, the weaker the sharpening effect, the better the anti aliasing effect. Conversely, the stronger the sharpening, the weaker the anti aliasing effect |
| `sharpPreBlurFactor` | `number` | Image sharpening sampling coefficient scaling coefficient: Scales the sampling offset during sharpening. |
| `debug` | `boolean` |  |

#### Defined in

[src/setting/post/TAASetting.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/TAASetting.ts#L5)
