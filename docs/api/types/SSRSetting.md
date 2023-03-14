# Type alias: SSRSetting

Ƭ **SSRSetting**: `Object`

屏幕空间反射设置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug` | `any` | - |
| `enable` | `boolean` | 开始/关闭 |
| `pixelRatio` | `number` | 像素比率 |
| `fadeEdgeRatio` | `number` | 渐变速率 |
| `rayMarchRatio` | `number` | 光线步进速率 |
| `fadeDistanceMin` | `number` | 消退距离最小值 |
| `fadeDistanceMax` | `number` | 消退距离最大值 |
| `roughnessThreshold` | `number` | 粗糙度阈值 |
| `powDotRN` | `number` | normal和reflection点积的pow参数 |
| `mixThreshold` | `number` | ssr颜色混合参数，某个像素位置，当前帧和上帧的位置差超过mixThreshold，则快速保留当前帧多一些。 |

#### Defined in

[src/engine/EngineConfig.ts:447](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L447)
