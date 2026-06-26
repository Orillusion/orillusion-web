[**@orillusion/core**](../README.md)

***

# Class: GPUContextInstance

Defined in: [src/gfx/renderJob/GPUContext.ts:18](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L18)

Per-Context3D GPU command/pipeline state. Owned by exactly one Context3D
via `Context3D.gpuContext`. Multi-engine isolation: no mutable state is
shared across engines. Access via `ctx.gpuContext.foo()`.

## Constructors

### Constructor

> **new GPUContextInstance**(`ctx`): `GPUContextInstance`

Defined in: [src/gfx/renderJob/GPUContext.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L45)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

`GPUContextInstance`

## Properties

### ctx

> `readonly` **ctx**: [`Context3D`](Context3D.md)

Defined in: [src/gfx/renderJob/GPUContext.ts:20](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L20)

The Context3D (one engine) this instance is bound to.

***

### lastGeometry

> **lastGeometry**: [`GeometryBase`](GeometryBase.md) = `null`

Defined in: [src/gfx/renderJob/GPUContext.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L23)

Last geometry bound by [bindGeometryBuffer](#bindgeometrybuffer); used to skip redundant vertex/index buffer rebinds.

***

### lastPipeline

> **lastPipeline**: `GPURenderPipeline` = `null`

Defined in: [src/gfx/renderJob/GPUContext.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L25)

Last render pipeline set on the encoder; used to skip redundant setPipeline calls.

***

### lastShader

> **lastShader**: [`RenderShaderPass`](RenderShaderPass.md) = `null`

Defined in: [src/gfx/renderJob/GPUContext.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L27)

Last shader pass bound by [bindPipeline](#bindpipeline); used to detect material switches.

***

### drawCount

> **drawCount**: `number` = `0`

Defined in: [src/gfx/renderJob/GPUContext.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L29)

Number of draw calls submitted since the last reset (profiling counter).

***

### renderPassCount

> **renderPassCount**: `number` = `0`

Defined in: [src/gfx/renderJob/GPUContext.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L31)

Number of render passes begun since the last reset (profiling counter).

***

### geometryCount

> **geometryCount**: `number` = `0`

Defined in: [src/gfx/renderJob/GPUContext.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L33)

Number of geometries processed since the last reset (profiling counter).

***

### pipelineCount

> **pipelineCount**: `number` = `0`

Defined in: [src/gfx/renderJob/GPUContext.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L35)

Number of pipelines created since the last reset (profiling counter).

***

### matrixCount

> **matrixCount**: `number` = `0`

Defined in: [src/gfx/renderJob/GPUContext.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L37)

Number of matrix uploads since the last reset (profiling counter).

***

### lastRenderPassState

> **lastRenderPassState**: `RendererPassState` = `null`

Defined in: [src/gfx/renderJob/GPUContext.ts:39](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L39)

Render-pass state of the most recently begun render pass.

***

### LastCommand

> **LastCommand**: `GPUCommandEncoder` = `null`

Defined in: [src/gfx/renderJob/GPUContext.ts:41](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L41)

Command encoder currently open via [beginCommandEncoder](#begincommandencoder), or null.

***

### LastCommandDevice

> **LastCommandDevice**: `GPUDevice` = `null`

Defined in: [src/gfx/renderJob/GPUContext.ts:43](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L43)

Device that owns [LastCommand](#lastcommand); used to submit on the matching queue.

## Methods

### bindPipeline()

> **bindPipeline**(`encoder`, `renderShader`): `boolean`

Defined in: [src/gfx/renderJob/GPUContext.ts:56](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L56)

Bind a shader pass's pipeline and bind groups onto the encoder.
Skips the work and returns `false` when `renderShader` matches the
last bound shader; otherwise binds and returns `true`. Re-issues the
stencil reference on every material switch since it is render-pass
(not pipeline) state.

#### Parameters

##### encoder

`GPURenderPassEncoder` \| `GPURenderBundleEncoder`

##### renderShader

[`RenderShaderPass`](RenderShaderPass.md)

#### Returns

`boolean`

***

### bindCamera()

> **bindCamera**(`encoder`, `camera`): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:90](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L90)

Bind the camera's global bind group at slot 0.

#### Parameters

##### encoder

`GPURenderPassEncoder` \| `GPURenderBundleEncoder`

##### camera

[`Camera3D`](Camera3D.md)

#### Returns

`void`

***

### bindGeometryBuffer()

> **bindGeometryBuffer**(`encoder`, `geometry`): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:100](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L100)

Bind a geometry's index and vertex buffers onto the encoder.
Skips the rebind when `geometry` matches the last bound geometry.
Lazily binds each GPU buffer to this context on first use.

#### Parameters

##### encoder

`GPURenderPassEncoder` \| `GPURenderBundleEncoder`

##### geometry

[`GeometryBase`](GeometryBase.md)

#### Returns

`void`

***

### cleanCache()

> **cleanCache**(): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:121](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L121)

Reset the cached geometry/pipeline/shader so the next bind always issues.

#### Returns

`void`

***

### createPipeline()

> **createPipeline**(`gpuRenderPipeline`): `GPURenderPipeline`

Defined in: [src/gfx/renderJob/GPUContext.ts:128](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L128)

Create a render pipeline on this context's device.

#### Parameters

##### gpuRenderPipeline

`GPURenderPipelineDescriptor`

#### Returns

`GPURenderPipeline`

***

### beginCommandEncoder()

> **beginCommandEncoder**(): `GPUCommandEncoder`

Defined in: [src/gfx/renderJob/GPUContext.ts:137](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L137)

Open a new command encoder. Submits any previously open encoder
first, so only one encoder is in flight at a time per context.

#### Returns

`GPUCommandEncoder`

***

### endCommandEncoder()

> **endCommandEncoder**(`command`): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:148](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L148)

Finish and submit `command` if it is the currently open encoder.

#### Parameters

##### command

`GPUCommandEncoder`

#### Returns

`void`

***

### recordBundleEncoder()

> **recordBundleEncoder**(`des`): `GPURenderBundleEncoder`

Defined in: [src/gfx/renderJob/GPUContext.ts:158](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L158)

Create a render bundle encoder on this context's device.

#### Parameters

##### des

`GPURenderBundleEncoderDescriptor`

#### Returns

`GPURenderBundleEncoder`

***

### beginRenderPass()

> **beginRenderPass**(`command`, `renderPassState`): `GPURenderPassEncoder`

Defined in: [src/gfx/renderJob/GPUContext.ts:167](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L167)

Begin a render pass from `renderPassState`. Resolves the attachment
views (depth, color RTs, MSAA side-bands + resolve targets, or the
swapchain present view when no RTs are set) before opening the pass.

#### Parameters

##### command

`GPUCommandEncoder`

##### renderPassState

`RendererPassState`

#### Returns

`GPURenderPassEncoder`

***

### drawIndexedIndirect()

> **drawIndexedIndirect**(`encoder`, `indirectBuffer`, `indirectOffset`): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:255](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L255)

Indirect indexed draw — the draw call counts (indexCount, instanceCount,
firstIndex, baseVertex, firstInstance) come from a GPU buffer at the
given offset. Companion of [drawIndexed](#drawindexed); used by GPU-driven
culling so the visibility decision and the draw submission both live
on the GPU.

The `indirect-first-instance` adapter feature must be enabled if the
indirect buffer's `firstInstance` field is non-zero (Orillusion
requests it in Context3D init).

#### Parameters

##### encoder

`GPURenderPassEncoder`

##### indirectBuffer

`GPUBuffer`

##### indirectOffset

`number`

#### Returns

`void`

***

### drawIndexed()

> **drawIndexed**(`encoder`, `indexCount`, `instanceCount?`, `firstIndex?`, `baseVertex?`, `firstInstance?`): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:265](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L265)

Indexed draw with CPU-provided counts. No-ops when `indexCount` or
`instanceCount` is zero — WebGPU flags empty indexed draws as
unusual, and dynamic geometry starts with empty buffers.

#### Parameters

##### encoder

`GPURenderPassEncoder`

##### indexCount

`number`

##### instanceCount?

`number`

##### firstIndex?

`number`

##### baseVertex?

`number`

##### firstInstance?

`number`

#### Returns

`void`

***

### draw()

> **draw**(`encoder`, `vertexCount`, `instanceCount?`, `firstVertex?`, `firstInstance?`): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:280](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L280)

Non-indexed draw. No-ops when `vertexCount` or `instanceCount` is zero.

#### Parameters

##### encoder

`GPURenderPassEncoder`

##### vertexCount

`number`

##### instanceCount?

`number`

##### firstVertex?

`number`

##### firstInstance?

`number`

#### Returns

`void`

***

### endPass()

> **endPass**(`encoder`): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:290](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L290)

End the given render pass.

#### Parameters

##### encoder

`GPURenderPassEncoder`

#### Returns

`void`

***

### computeCommand()

> **computeCommand**(`command`, `computes`): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:296](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L296)

Run a list of compute shaders inside a single compute pass on `command`.

#### Parameters

##### command

`GPUCommandEncoder`

##### computes

`ComputeShader`[]

#### Returns

`void`

***

### copyTexture()

> **copyTexture**(`command`, `source`, `dest`): `void`

Defined in: [src/gfx/renderJob/GPUContext.ts:306](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L306)

Copy mip 0 of `source` into mip 0 of `dest`, sized to `dest`.

#### Parameters

##### command

`GPUCommandEncoder`

##### source

[`Texture`](Texture.md)

##### dest

[`Texture`](Texture.md)

#### Returns

`void`
