[**@orillusion/core**](../README.md)

***

# Interface: ComputeDispatchCall

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L29)

Single dispatch payload — bind groups + workgroup count. Pass
authors build this fresh per frame (bind groups generally hold
references to per-frame textures so must be reconstructed when the
underlying GPU resources rebuild on resize).

## Properties

### bindGroups

> **bindGroups**: `GPUBindGroup`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L30)

***

### workgroups

> **workgroups**: \[`number`, `number`, `number`\]

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L31)
