[**@orillusion/core**](../README.md)

***

# Interface: RTColorAttachmentDesc

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:60](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L60)

Per-color-attachment description.

## Properties

### name

> **name**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:65](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L65)

Logical attachment name. Used as the sub-key in
 RTResourceMap when the RT allocates fresh, and as a
 human-readable label for debug. Inside one
 [RenderGraphRenderTargetDesc](RenderGraphRenderTargetDesc.md) every `name` must be unique.

***

### format

> **format**: `GPUTextureFormat`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:66](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L66)

***

### clearValue?

> `optional` **clearValue?**: `GPUColor`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:70](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L70)

Default clearValue used by the first writer's auto-clear path.
 Can be overridden per-`beginPass` via
 [BeginPassOptions.colorClearValues](BeginPassOptions.md#colorclearvalues).

***

### storeOp?

> `optional` **storeOp?**: `GPUStoreOp`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:72](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L72)

Default storeOp. Defaults to `'store'`.

***

### texture?

> `optional` **texture?**: `RenderTexture`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:75](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L75)

Adopt mode: pre-existing texture. If provided the RT does not
 allocate a new one through RTResourceMap.
