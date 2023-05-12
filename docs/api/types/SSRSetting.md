# Type alias: SSRSetting

Ƭ **SSRSetting**: `Object`

Screen Space Reflection Setting

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug` | `any` | - |
| `enable` | `boolean` | enable |
| `pixelRatio` | `number` | pixel ratio, Smaller pixel ratios can achieve better performance, but the visual effect will decrease |
| `fadeEdgeRatio` | `number` | fade out when pixel is closed to edge |
| `rayMarchRatio` | `number` | fade alpha from ray trace step count |
| `fadeDistanceMin` | `number` | fade alpha by distance from camera to hit point (min) |
| `fadeDistanceMax` | `number` | fade alpha by distance from camera to hit point (max) |
| `roughnessThreshold` | `number` | threshold of roughness, determine effect refrection |
| `powDotRN` | `number` | Pow parameter of normal and reflection dot product |
| `mixThreshold` | `number` | SSR color mixing parameter: If the position difference between the current frame and the previous frame exceeds the mixThreshold at a certain pixel position, the current frame will be quickly retained to have more. |

#### Defined in

[src/setting/post/SSRSetting.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/SSRSetting.ts#L6)
