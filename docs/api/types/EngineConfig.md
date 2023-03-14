# Type alias: EngineConfig

Ƭ **EngineConfig**: `Object`

引擎配置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pickerMode` | [`PickerMode`](PickerMode.md) | 拾取模式 |
| `render` | { `renderPassState`: `number` ; `renderState_left`: `number` ; `renderState_right`: `number` ; `renderState_split`: `number` ; `quadScale`: `number` ; `hdrExposure`: `number` ; `debugQuad`: `number` ; `maxPointLight`: `number` ; `maxDirectLight`: `number` ; `maxSportLight`: `number` ; `drawOpMin`: `number` ; `drawOpMax`: `number` ; `drawTrMin`: `number` ; `drawTrMax`: `number` ; `zPrePass`: `boolean` ; `gi`: `boolean` ; `postProcessing`: { `enable?`: `boolean` ; `bloom?`: [`BloomSetting`](BloomSetting.md) ; `ssao?`: { `debug`: `any` ; `enable`: `boolean` ; `radius`: `number` ; `bias`: `number` ; `aoPower`: `number`  } ; `ssr?`: [`SSRSetting`](SSRSetting.md) ; `taa?`: [`TAASetting`](TAASetting.md) ; `gtao?`: [`GTAOSetting`](GTAOSetting.md) ; `outline?`: [`OutlineSetting`](OutlineSetting.md) ; `globalFog?`: [`GlobalFogSetting`](GlobalFogSetting.md) ; `fxaa?`: { `enable`: `boolean`  } ; `depthOfView?`: [`DepthOfViewSetting`](DepthOfViewSetting.md)  }  } | 渲染设置 |
| `render.renderPassState` | `number` | - |
| `render.renderState_left` | `number` | - |
| `render.renderState_right` | `number` | - |
| `render.renderState_split` | `number` | - |
| `render.quadScale` | `number` | - |
| `render.hdrExposure` | `number` | - |
| `render.debugQuad` | `number` | - |
| `render.maxPointLight` | `number` | - |
| `render.maxDirectLight` | `number` | - |
| `render.maxSportLight` | `number` | - |
| `render.drawOpMin` | `number` | - |
| `render.drawOpMax` | `number` | - |
| `render.drawTrMin` | `number` | - |
| `render.drawTrMax` | `number` | - |
| `render.zPrePass` | `boolean` | - |
| `render.gi` | `boolean` | - |
| `render.postProcessing` | { `enable?`: `boolean` ; `bloom?`: [`BloomSetting`](BloomSetting.md) ; `ssao?`: { `debug`: `any` ; `enable`: `boolean` ; `radius`: `number` ; `bias`: `number` ; `aoPower`: `number`  } ; `ssr?`: [`SSRSetting`](SSRSetting.md) ; `taa?`: [`TAASetting`](TAASetting.md) ; `gtao?`: [`GTAOSetting`](GTAOSetting.md) ; `outline?`: [`OutlineSetting`](OutlineSetting.md) ; `globalFog?`: [`GlobalFogSetting`](GlobalFogSetting.md) ; `fxaa?`: { `enable`: `boolean`  } ; `depthOfView?`: [`DepthOfViewSetting`](DepthOfViewSetting.md)  } | 后处理 |
| `render.postProcessing.enable?` | `boolean` | - |
| `render.postProcessing.bloom?` | [`BloomSetting`](BloomSetting.md) | - |
| `render.postProcessing.ssao?` | { `debug`: `any` ; `enable`: `boolean` ; `radius`: `number` ; `bias`: `number` ; `aoPower`: `number`  } | - |
| `render.postProcessing.ssao.debug` | `any` | - |
| `render.postProcessing.ssao.enable` | `boolean` | - |
| `render.postProcessing.ssao.radius` | `number` | - |
| `render.postProcessing.ssao.bias` | `number` | - |
| `render.postProcessing.ssao.aoPower` | `number` | - |
| `render.postProcessing.ssr?` | [`SSRSetting`](SSRSetting.md) | - |
| `render.postProcessing.taa?` | [`TAASetting`](TAASetting.md) | - |
| `render.postProcessing.gtao?` | [`GTAOSetting`](GTAOSetting.md) | - |
| `render.postProcessing.outline?` | [`OutlineSetting`](OutlineSetting.md) | - |
| `render.postProcessing.globalFog?` | [`GlobalFogSetting`](GlobalFogSetting.md) | - |
| `render.postProcessing.fxaa?` | { `enable`: `boolean`  } | - |
| `render.postProcessing.fxaa.enable` | `boolean` | - |
| `render.postProcessing.depthOfView?` | [`DepthOfViewSetting`](DepthOfViewSetting.md) | - |
| `renderJob` | { `type`: ``"Forward"`` \| ``"Forward+"``  } | - |
| `renderJob.type` | ``"Forward"`` \| ``"Forward+"`` | - |
| `sky` | [`SkySetting`](SkySetting.md) | 天空盒设置 |
| `shadow` | [`ShadowSetting`](ShadowSetting.md) | 阴影设置 |
| `gi` | [`GlobalIlluminationSetting`](GlobalIlluminationSetting.md) | 全局光照设置 |
| `light` | { `maxLight`: `number`  } | 光源设置 |
| `light.maxLight` | `number` | - |
| `performance` | { `drawCall`: `number` ; `totalDrawCall`: `number` ; `geometryCount`: `number` ; `materialCount`: `number` ; `delayTime`: `number` ; `pipelineCount`: `number` ; `bundleCount`: `number` ; `opRenderCount`: `number` ; `trRenderCount`: `number` ; `batchDrawCall`: `number`  } | - |
| `performance.drawCall` | `number` | - |
| `performance.totalDrawCall` | `number` | - |
| `performance.geometryCount` | `number` | - |
| `performance.materialCount` | `number` | - |
| `performance.delayTime` | `number` | - |
| `performance.pipelineCount` | `number` | - |
| `performance.bundleCount` | `number` | - |
| `performance.opRenderCount` | `number` | - |
| `performance.trRenderCount` | `number` | - |
| `performance.batchDrawCall` | `number` | - |

#### Defined in

[src/engine/EngineConfig.ts:500](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L500)
