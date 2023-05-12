# Type alias: GTAOSetting

Ƭ **GTAOSetting**: `Object`

Setting of GTAO

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | - |
| `maxDistance` | `number` | Set the maximum distance to search around 3D space during ao sampling |
| `maxPixel` | `number` | Set the maximum distance when searching for surrounding pixels during ao sampling |
| `darkFactor` | `number` | Set the coefficient of ao value to participate in outputting to the screen, 1: output all, 0: not output |
| `rayMarchSegment` | `number` | Set the number of steps for AO sampling. A larger value will result in better quality AO effects while consuming more performance |
| `multiBounce` | `boolean` | Simulate color rebound or not |
| `usePosFloat32` | `boolean` | true: Calculate the position value of GBuffer using f32 to obtain more accurate values (water and other effects may not be supported) false: We will use the position value of GBuffer in f16 for operations, with a wider coverage |
| `blendColor` | `boolean` | True: will be mixed with the mainColor of GBuffer; False: will only output the colors of ao |
| `debug` | `boolean` |  |

#### Defined in

[src/setting/post/GTAOSetting.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/GTAOSetting.ts#L6)
