[**@orillusion/core**](../README.md)

***

# Type Alias: CanvasConfig

> **CanvasConfig** = `object`

Defined in: [src/gfx/graphics/webGpu/CanvasConfig.ts:6](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/CanvasConfig.ts#L6)

config data for canvas

## Properties

### canvas?

> `optional` **canvas?**: `HTMLCanvasElement`

Defined in: [src/gfx/graphics/webGpu/CanvasConfig.ts:10](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/CanvasConfig.ts#L10)

reference of canvas

***

### alpha?

> `optional` **alpha?**: `boolean`

Defined in: [src/gfx/graphics/webGpu/CanvasConfig.ts:16](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/CanvasConfig.ts#L16)

wheter use transparent background
To set a transparent background, the SkyRenderer[SkyRenderer](../classes/SkyRenderer.md) component should be disabled
skyRender.enable = false

***

### zIndex?

> `optional` **zIndex?**: `number`

Defined in: [src/gfx/graphics/webGpu/CanvasConfig.ts:20](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/CanvasConfig.ts#L20)

canvas styler zIndex

***

### devicePixelRatio?

> `optional` **devicePixelRatio?**: `number`

Defined in: [src/gfx/graphics/webGpu/CanvasConfig.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/CanvasConfig.ts#L25)

canvas pixel ratio
use window.devicePixelRatio is not provided

***

### backgroundImage?

> `optional` **backgroundImage?**: `string`

Defined in: [src/gfx/graphics/webGpu/CanvasConfig.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/CanvasConfig.ts#L30)

canvas background image
a canvas background when skybox is hide/disabled and CanvasConfig.alpha is true
