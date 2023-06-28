# Type alias: GlobalFogSetting

Ƭ **GlobalFogSetting**: `Object`

Global fog effect setting

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug` | `any` | - |
| `enable` | `boolean` | enable |
| `fogType` | `number` | type of fog: 0: linear exponent 2: squar exponent |
| `height` | `number` | Setting the Influence of Height on Fog |
| `start` | `number` | If the distance between the object and the camera is set as distance, the fog concentration will be linear interpolation between start and end |
| `end` | `number` | If the distance between the object and the camera is set as distance, the fog concentration will be linear interpolation between start and end |
| `density` | `number` | When the type is exponential square fog, the fog concentration coefficient is added |
| `ins` | `number` | The effect of setting height on fog (working together with height) |
| `skyFactor` | `number` | mix fog color with sky color |
| `skyRoughness` | `number` | use mipmap level |
| `overrideSkyFactor` | `number` | factor effect the sky |
| `fogColor` | [`Color`](../classes/Color.md) | fog color |

#### Defined in

[src/setting/post/GlobalFogSetting.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L7)
