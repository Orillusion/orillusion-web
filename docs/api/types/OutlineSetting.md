# Type alias: OutlineSetting

Ƭ **OutlineSetting**: `Object`

Outline描边

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | - |
| `groupCount` | `number` | 分组设定，可以设置最多8组：通过OutlineManager开放的函数， 传入不同Object3D列表以及颜色参数获得分组过的描边效果。 |
| `outlinePixel` | `number` | 描边硬边的像素宽度 |
| `fadeOutlinePixel` | `number` | 描边淡出像素宽度 |
| `strength` | `number` | 描边强度 |
| `useAddMode` | `boolean` | 混合模式：true使用叠加模式，false：使用默认Alpha混合 |
| `debug` | `boolean` | 是否显示GUI调试面板 |

#### Defined in

[src/engine/EngineConfig.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L340)
