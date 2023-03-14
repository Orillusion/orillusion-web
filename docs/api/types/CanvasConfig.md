# Type alias: CanvasConfig

Ƭ **CanvasConfig**: `Object`

外部canvas功能配置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas?` | `HTMLCanvasElement` | 需要外部传入的canvas |
| `alpha?` | `boolean` | 是否使用3D透明背景层 在使用3D透明背景时注意设置 [SkyRenderer](../classes/SkyRenderer.md)天空渲染组件的 enable 为 false skyRender.enable = false |
| `zIndex?` | `number` | canvas styler zIndex |
| `devicePixelRatio?` | `number` | canvas pixel ratio |
| `backgroundImage?` | `string` | canvas background image need call scene.hideSky() and set CanvasConfig.alpha is true |

#### Defined in

[src/engine/gfx/graphics/webGpu/WebGpuCanvasConfig.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/WebGpuCanvasConfig.ts#L7)
