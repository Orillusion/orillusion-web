[**@orillusion/core**](../README.md)

***

# Interface: ComputePipelineDesc

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:10](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L10)

Descriptor for the compute pipeline owned by a
[RenderGraphComputePass](../classes/RenderGraphComputePass.md).

## Properties

### label

> **label**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:11](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L11)

***

### shaderCode

> **shaderCode**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:13](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L13)

WGSL source.

***

### entryPoint?

> `optional` **entryPoint?**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L15)

Defaults to `'CsMain'` to match the rest of the engine.

***

### bindGroupLayouts

> **bindGroupLayouts**: `GPUBindGroupLayoutDescriptor`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:16](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L16)

***

### constants?

> `optional` **constants?**: `Record`\<`string`, `number`\>

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:18](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L18)

Shader-side pipeline constants (specialization).
