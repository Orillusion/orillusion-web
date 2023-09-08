# Type alias: ShadowSetting

Ƭ **ShadowSetting**: `Object`

Shadow setting

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug` | `any` | - |
| `enable` | `boolean` | enable |
| `needUpdate` | `boolean` |  |
| `autoUpdate` | `boolean` | update shadown automatic |
| `updateFrameRate` | `number` | frequency for shadows update |
| `type` | ``"PCF"`` \| ``"HARD"`` \| ``"SOFT"`` | Percentage-Closer Filtering(PCF)is a simple, often seen technique for removing shadow edges. Soft shadow, is a soft and blurred shadow that is farther away from the object when the light is shot down. Hard shadow, is a sharper shadow, at the exchange (connection) with the object or the place where the light hits and close to the object, or the occluded place where the sunlight cannot reach. |
| `pointShadowBias` | `number` | Offset of point light shadow |
| `shadowBound?` | `number` | shadow boundary |
| `shadowSize` | `number` | shadow mapping Size |
| `shadowSoft` | `number` | Shadow softness |
| `pointShadowSize` | `number` | Point shadow mapping size |
| `csmMargin` | `number` | Blend Shadow(0-1) |
| `csmScatteringExp` | `number` | scattering csm Area Exponent for each level |
| `csmAreaScale` | `number` | scale csm Area of all level |

#### Defined in

[src/setting/ShadowSetting.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/setting/ShadowSetting.ts#L6)
