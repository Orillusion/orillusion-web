# Type alias: TAASetting

Ƭ **TAASetting**: `Object`

TAA抗锯齿设置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | - |
| `jitterSeedCount` | `number` | 抖动相机随机种子采用个数，默认8个。 （降低个数可以解决一些抖动太明显的问题，但是锯齿会变得更明显） |
| `blendFactor` | `number` | 合并历史帧与当前帧的系数，参数越小，当前帧占比越小 |
| `temporalJitterScale` | `number` | 抖动相机随机偏移值的缩放系数[0,1]：系数越小抗锯齿效果变弱，像素抖动也会变弱 |
| `sharpFactor` | `number` | 图像锐化系数[0.1,1.9]：系数越小锐化效果越弱抗锯齿效果好，反之锐化越强抗锯齿效果越弱 |
| `sharpPreBlurFactor` | `number` | 图像锐化采样系数缩放系数：锐化时候采样的偏移量缩放。 |
| `debug` | `boolean` | 是否显示GUI调试面板 |

#### Defined in

[src/engine/EngineConfig.ts:373](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L373)
