# Type alias: RenderSetting

Ƭ **RenderSetting**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug` | `boolean` | - |
| `renderPassState` | `number` | - |
| `renderState_left` | `number` | - |
| `renderState_right` | `number` | - |
| `renderState_split` | `number` | - |
| `quadScale` | `number` | - |
| `hdrExposure` | `number` | - |
| `debugQuad` | `number` | - |
| `maxPointLight` | `number` | - |
| `maxDirectLight` | `number` | - |
| `maxSportLight` | `number` | - |
| `drawOpMin` | `number` | - |
| `drawOpMax` | `number` | - |
| `drawTrMin` | `number` | - |
| `drawTrMax` | `number` | - |
| `zPrePass` | `boolean` | - |
| `gi` | `boolean` | - |
| `postProcessing` | { `enable?`: `boolean` ; `bloom?`: [`BloomSetting`](BloomSetting.md) ; `ssao?`: { `debug`: `any` ; `enable`: `boolean` ; `radius`: `number` ; `bias`: `number` ; `aoPower`: `number`  } ; `ssr?`: [`SSRSetting`](SSRSetting.md) ; `taa?`: [`TAASetting`](TAASetting.md) ; `gtao?`: [`GTAOSetting`](GTAOSetting.md) ; `outline?`: [`OutlineSetting`](OutlineSetting.md) ; `globalFog?`: [`GlobalFogSetting`](GlobalFogSetting.md) ; `fxaa?`: { `enable`: `boolean`  } ; `depthOfView?`: [`DepthOfViewSetting`](DepthOfViewSetting.md)  } | post effect |
| `postProcessing.enable?` | `boolean` | - |
| `postProcessing.bloom?` | [`BloomSetting`](BloomSetting.md) | - |
| `postProcessing.ssao?` | { `debug`: `any` ; `enable`: `boolean` ; `radius`: `number` ; `bias`: `number` ; `aoPower`: `number`  } | - |
| `postProcessing.ssao.debug` | `any` | - |
| `postProcessing.ssao.enable` | `boolean` | - |
| `postProcessing.ssao.radius` | `number` | - |
| `postProcessing.ssao.bias` | `number` | - |
| `postProcessing.ssao.aoPower` | `number` | - |
| `postProcessing.ssr?` | [`SSRSetting`](SSRSetting.md) | - |
| `postProcessing.taa?` | [`TAASetting`](TAASetting.md) | - |
| `postProcessing.gtao?` | [`GTAOSetting`](GTAOSetting.md) | - |
| `postProcessing.outline?` | [`OutlineSetting`](OutlineSetting.md) | - |
| `postProcessing.globalFog?` | [`GlobalFogSetting`](GlobalFogSetting.md) | - |
| `postProcessing.fxaa?` | { `enable`: `boolean`  } | - |
| `postProcessing.fxaa.enable` | `boolean` | - |
| `postProcessing.depthOfView?` | [`DepthOfViewSetting`](DepthOfViewSetting.md) | - |

#### Defined in

[src/setting/RenderSetting.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L9)
