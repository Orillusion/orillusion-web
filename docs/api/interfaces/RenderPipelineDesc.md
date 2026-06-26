[**@orillusion/core**](../README.md)

***

# Interface: RenderPipelineDesc

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L23)

Descriptor for the render pipeline owned by a
[RenderGraphRenderPass](../classes/RenderGraphRenderPass.md).

Format-dependent fields ([fragmentTargets](#fragmenttargets), [depthStencil](#depthstencil),
[multisample](#multisample)) are auto-derived from the bound
[RenderGraphRenderTarget](../classes/RenderGraphRenderTarget.md) when omitted — formats and MSAA sample
count must match the target the pipeline draws into. Pass authors
supply these fields only when they need to override blend state,
depth-compare ops, write masks, etc.

## Properties

### label

> **label**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:24](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L24)

***

### shaderCode

> **shaderCode**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L27)

Combined WGSL source containing the vertex + fragment entry
 points.

***

### vertexEntry?

> `optional` **vertexEntry?**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L29)

Defaults to `'main'` to match the engine's WGSL convention.

***

### fragmentEntry?

> `optional` **fragmentEntry?**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L31)

Defaults to `'main'`.

***

### bindGroupLayouts

> **bindGroupLayouts**: `GPUBindGroupLayoutDescriptor`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L32)

***

### vertexBuffers?

> `optional` **vertexBuffers?**: `GPUVertexBufferLayout`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L35)

Vertex buffer layouts. Omit for fullscreen-triangle passes that
 source positions from `@builtin(vertex_index)`.

***

### primitive?

> `optional` **primitive?**: `GPUPrimitiveState`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L38)

Primitive topology, cull mode, front-face, etc. Defaults to
 WebGPU defaults (triangle list, no culling).

***

### depthStencil?

> `optional` **depthStencil?**: `Omit`\<`GPUDepthStencilState`, `"format"`\> & `object`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:43](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L43)

Depth/stencil state. `format` is auto-filled from the target's
 depth attachment when omitted. Pass `null` to opt out even when
 the target has a depth attachment (rare — usually you want at
 least `{ depthWriteEnabled: false, depthCompare: 'always' }`).

#### Type Declaration

##### format?

> `optional` **format?**: `GPUTextureFormat`

***

### fragmentTargets?

> `optional` **fragmentTargets?**: `Omit`\<`GPUColorTargetState`, `"format"`\> & `object`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:47](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L47)

Per-color-attachment fragment targets. Length must match the
 target's color count when provided. `format` is auto-filled from
 each color attachment's texture when omitted.

***

### multisample?

> `optional` **multisample?**: `GPUMultisampleState`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:50](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L50)

Multisample state. `count` is auto-filled from the target's
 sample count when omitted.

***

### constants?

> `optional` **constants?**: `Record`\<`string`, `number`\>

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L53)

Shader-side pipeline constants (specialization). Applied to both
 vertex and fragment stages.
