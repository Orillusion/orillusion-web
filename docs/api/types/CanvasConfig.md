# Type alias: CanvasConfig

Ƭ **CanvasConfig**: `Object`

config data for canvas

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas?` | `HTMLCanvasElement` | reference of canvas |
| `alpha?` | `boolean` | wheter use transparent background Pay attention to settings when using 3D transparent backgrounds[SkyRenderer](../classes/SkyRenderer.md) The enable of the sky rendering component is false skyRender.enable = false |
| `zIndex?` | `number` | canvas styler zIndex |
| `devicePixelRatio?` | `number` | canvas pixel ratio |
| `backgroundImage?` | `string` | canvas background image need call scene.hideSky() and set CanvasConfig.alpha is true |
| `width?` | `number` | canvas width |
| `height?` | `number` | canvas width |

#### Defined in

[src/gfx/graphics/webGpu/CanvasConfig.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/CanvasConfig.ts#L6)
