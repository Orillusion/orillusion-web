# Type alias: ShadowSetting

Ƭ **ShadowSetting**: `Object`

阴影设置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug` | `any` | - |
| `enable` | `boolean` | 开启/关闭 |
| `needUpdate` | `boolean` |  |
| `autoUpdate` | `boolean` | 阴影自动更新 |
| `updateFrameRate` | `number` | 阴影的更新频率 |
| `type` | ``"PCF"`` \| ``"HARD"`` \| ``"SOFT"`` | 百分比渐近过滤(PCF)是一个简单，常见的进行阴影边缘反走的技术。 软阴影(soft shadow),是比较柔和的阴影,模糊的阴影,是光打下来离物体比较远的阴影。 硬阴影(hard shadow),是比较锐利的阴影,在和物体的交替(接)处或者是光打下来离物体比较近的地方,在比较闭塞的地方,阳光不容易照射到的地方。 |
| `shadowBias` | `number` | 阴影的偏移量 |
| `pointShadowBias` | `number` | 点光源阴影的偏移量 |
| `shadowQuality` | `number` | 阴影品质 |
| `shadowBound` | `number` | 阴影边界 |
| `shadowSize` | `number` | 朝向阴影贴图尺寸 |
| `shadowSoft` | `number` | 阴影软硬程度 |
| `pointShadowSize` | `number` | 点阴影贴图尺寸 |
| `shadowNear` | `number` | 阴影近截面 |
| `shadowFar` | `number` | 阴影远截面 |

#### Defined in

[src/engine/EngineConfig.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L123)
