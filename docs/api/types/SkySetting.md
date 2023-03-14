# Type alias: SkySetting

Ƭ **SkySetting**: `Object`

天空设置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"HDRSKY"`` \| ``"ShaderSky"`` | 天空类型 |
| `sky` | [`HDRTextureCube`](../classes/HDRTextureCube.md) | HDR立方体纹理 |
| `skyExposure` | `number` | 天空曝光面 |
| `defaultFar` | `number` | 默认远截面大小 |
| `defaultNear` | `number` | 默认近截面大小 |

#### Defined in

[src/engine/EngineConfig.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L199)
