# Type alias: CanvasConfig

Ƭ **CanvasConfig**: `Object`

config data for canvas

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas?` | `HTMLCanvasElement` | reference of canvas |
| `alpha?` | `boolean` | wheter use transparent background<br>To set a transparent backgrounds, the [SkyRenderer](../classes/SkyRenderer.md) component should be disabled<br>`skyRender.enable = false` |
| `zIndex?` | `number` | canvas styler zIndex |
| `devicePixelRatio?` | `number` | canvas pixel ratio<br>use window.devicePixelRatio is not provided |
| `backgroundImage?` | `string` | canvas background image<br>a canvas background when skybox is hide/disabled and CanvasConfig.alpha is true |

#### Defined in

[src/gfx/graphics/webGpu/CanvasConfig.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/CanvasConfig.ts#L6)
