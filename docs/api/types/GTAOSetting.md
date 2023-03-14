# Type alias: GTAOSetting

Ƭ **GTAOSetting**: `Object`

GTAO设置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | - |
| `maxDistance` | `number` | 设定ao采样时搜索3D空间周边的最大距离 |
| `maxPixel` | `number` | 设定ao采样时搜索周边像素时的最大距离 |
| `darkFactor` | `number` | 设定ao数值参与输出到屏幕时的系数，1：全部输出，0：不输出 |
| `rayMarchSegment` | `number` | 设定ao采样时的步进的步数，值越大将会获得质量更好的ao效果，同时消耗更多的性能 |
| `multiBounce` | `boolean` | 是否模拟颜色反弹 |
| `usePosFloat32` | `boolean` | true：将使用f32的GBuffer的position数值做运算获得更精确的数值（水体等效果可能不支持） false:将使用f16的GBuffer的position数值做运算，覆盖面更广泛 |
| `blendColor` | `boolean` | true：将与GBuffer的mainColor混合；false：将只输出ao的颜色 |
| `debug` | `boolean` | 是否显示GUI调试面板 |

#### Defined in

[src/engine/EngineConfig.ts:406](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L406)
