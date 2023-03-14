# Type alias: GlobalIlluminationSetting

Ƭ **GlobalIlluminationSetting**: `Object`

全局光照设置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug` | `boolean` | - |
| `debugCamera?` | `boolean` | 测试GI相机 debug 是否开启 |
| `enable` | `boolean` | 开启/关闭 |
| `offsetX` | `number` | 探针组的注册点在x轴的偏移量 |
| `offsetY` | `number` | 探针组的注册点在y轴的偏移量 |
| `offsetZ` | `number` | 探针组的注册点在z轴的偏移量 |
| `probeXCount` | `number` | 探针在x轴的数量 |
| `probeYCount` | `number` | 探针在y轴的数量 |
| `probeZCount` | `number` | 探针在z轴的数量 |
| `probeSize` | `number` | 每个探针采样到的数据尺寸 |
| `indirectIntensity` | `number` | 间接光的光照强度 |
| `ddgiGamma` | `number` | - |
| `bounceIntensity` | `number` | 反射光的光照强度 |
| `realTimeGI` | `boolean` | 实时GI计算 |
| `autoRenderProbe` | `boolean` | 设置探针是否自动采集信息 |

#### Defined in

[src/engine/EngineConfig.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L8)
