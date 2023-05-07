# Type alias: DepthOfViewSetting

Ƭ **DepthOfViewSetting**: `Object`

dpeth of view effect

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | - |
| `iterationCount` | `number` | Blur Effect Iterations |
| `pixelOffset` | `number` | the distance of Blur effect pixel diffusion |
| `near` | `number` | the pixel below this distance to camera will not be blurred |
| `far` | `number` | the pixel above this distance will experience maximum blurring, [near,far]: the pixel between near and far will be blurred with linear interpolation coefficients between [0,1] |

#### Defined in

[src/setting/post/DepthOfViewSetting.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/DepthOfViewSetting.ts#L7)
