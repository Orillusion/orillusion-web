[**@orillusion/core**](../README.md)

***

# Interface: RenderGraphRenderTargetDesc

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:99](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L99)

Declarative description of a render target.

## Properties

### label

> **label**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:100](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L100)

***

### width?

> `optional` **width?**: `number`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:104](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L104)

0 / undefined => canvas-sized; the underlying RenderTexture
 installs its own CResizeEvent.RESIZE listener so the GPU
 resource follows the canvas.

***

### height?

> `optional` **height?**: `number`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L105)

***

### customSize?

> `optional` **customSize?**: `boolean`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:106](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L106)

***

### sampleCount?

> `optional` **sampleCount?**: `number`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:111](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L111)

MSAA sample count — 0 disables. Forwarded to
 [RTFrame.sampleCount](../classes/RTFrame.md#samplecount) so
 WebGPUDescriptorCreator.createRendererPassState allocates
 matching side-band textures.

***

### colors

> **colors**: [`RTColorAttachmentDesc`](RTColorAttachmentDesc.md)[]

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:112](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L112)

***

### depth?

> `optional` **depth?**: [`RTDepthAttachmentDesc`](RTDepthAttachmentDesc.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:113](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L113)

***

### isOutTarget?

> `optional` **isOutTarget?**: `boolean`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:116](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L116)

When true the RT participates in the canvas swapchain present
 path. Mirrors [RTFrame.isOutTarget](../classes/RTFrame.md#isouttarget); default `false`.
