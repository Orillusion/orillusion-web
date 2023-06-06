# Class: GPUContext

WebGPU api use context

### Constructors

- [constructor](GPUContext.md#constructor)

### Properties

- [lastGeometry](GPUContext.md#lastgeometry)
- [lastPipeline](GPUContext.md#lastpipeline)
- [lastShader](GPUContext.md#lastshader)
- [drawCount](GPUContext.md#drawcount)
- [renderPassCount](GPUContext.md#renderpasscount)
- [geometryCount](GPUContext.md#geometrycount)
- [pipelineCount](GPUContext.md#pipelinecount)
- [matrixCount](GPUContext.md#matrixcount)
- [lastRenderPassState](GPUContext.md#lastrenderpassstate)
- [LastCommand](GPUContext.md#lastcommand)

### Methods

- [bindPipeline](GPUContext.md#bindpipeline)
- [bindCamera](GPUContext.md#bindcamera)
- [bindGeometryBuffer](GPUContext.md#bindgeometrybuffer)
- [cleanCache](GPUContext.md#cleancache)
- [createPipeline](GPUContext.md#createpipeline)
- [beginCommandEncoder](GPUContext.md#begincommandencoder)
- [endCommandEncoder](GPUContext.md#endcommandencoder)
- [recordBundleEncoder](GPUContext.md#recordbundleencoder)
- [beginRenderPass](GPUContext.md#beginrenderpass)
- [drawIndexed](GPUContext.md#drawindexed)
- [draw](GPUContext.md#draw)
- [endPass](GPUContext.md#endpass)
- [computeCommand](GPUContext.md#computecommand)

## Constructors

### constructor

• **new GPUContext**()

## Properties

### lastGeometry

▪ `Static` **lastGeometry**: [`GeometryBase`](GeometryBase.md)

#### Defined in

[src/gfx/renderJob/GPUContext.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L14)

___

### lastPipeline

▪ `Static` **lastPipeline**: `GPURenderPipeline`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L15)

___

### lastShader

▪ `Static` **lastShader**: [`RenderShader`](RenderShader.md)

#### Defined in

[src/gfx/renderJob/GPUContext.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L16)

___

### drawCount

▪ `Static` **drawCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L17)

___

### renderPassCount

▪ `Static` **renderPassCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L18)

___

### geometryCount

▪ `Static` **geometryCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L19)

___

### pipelineCount

▪ `Static` **pipelineCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L20)

___

### matrixCount

▪ `Static` **matrixCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L21)

___

### lastRenderPassState

▪ `Static` **lastRenderPassState**: `RendererPassState`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L22)

___

### LastCommand

▪ `Static` **LastCommand**: `GPUCommandEncoder`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L23)

## Methods

### bindPipeline

▸ `Static` **bindPipeline**(`encoder`, `renderShader`): `void`

renderPipeline before render need bind pipeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoder` | `GPURenderPassEncoder` \| `GPURenderBundleEncoder` | current GPURenderPassEncoder GPURenderPassEncoder GPURenderBundleEncoder |
| `renderShader` | [`RenderShader`](RenderShader.md) | render pass shader [RenderShader](RenderShader.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L31)

___

### bindCamera

▸ `Static` **bindCamera**(`encoder`, `camera`): `void`

render before need make sure use camera

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoder` | `GPURenderPassEncoder` \| `GPURenderBundleEncoder` | current GPURenderPassEncoder GPURenderPassEncoder GPURenderBundleEncoder |
| `camera` | [`Camera3D`](Camera3D.md) | use camera [Camera3D](Camera3D.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L56)

___

### bindGeometryBuffer

▸ `Static` **bindGeometryBuffer**(`encoder`, `geometry`): `void`

bind geometry vertex buffer to current render pipeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoder` | `GPURenderPassEncoder` \| `GPURenderBundleEncoder` | current GPURenderPassEncoder GPURenderPassEncoder GPURenderBundleEncoder |
| `geometry` | [`GeometryBase`](GeometryBase.md) | engine geometry |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L68)

___

### cleanCache

▸ `Static` **cleanCache**(): `void`

begin or end clean all use cache

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L87)

___

### createPipeline

▸ `Static` **createPipeline**(`gpuRenderPipeline`): `GPURenderPipeline`

create a render pipeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gpuRenderPipeline` | `GPURenderPipelineDescriptor` | GPURenderPipelineDescriptor |

#### Returns

`GPURenderPipeline`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L98)

___

### beginCommandEncoder

▸ `Static` **beginCommandEncoder**(): `GPUCommandEncoder`

auto get webgpu commandEncoder and start a command encoder

#### Returns

`GPUCommandEncoder`

commandEncoder GPUCommandEncoder

#### Defined in

[src/gfx/renderJob/GPUContext.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L107)

___

### endCommandEncoder

▸ `Static` **endCommandEncoder**(`command`): `void`

end CommandEncoder record and submit

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `GPUCommandEncoder` | GPUCommandEncoder |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L120)

___

### recordBundleEncoder

▸ `Static` **recordBundleEncoder**(`des`): `GPURenderBundleEncoder`

create a renderBundle gpu object by GPURenderBundleEncoderDescriptor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `des` | `GPURenderBundleEncoderDescriptor` | GPURenderBundleEncoderDescriptor |

#### Returns

`GPURenderBundleEncoder`

renderBundleEncoder GPURenderBundleEncoder

#### Defined in

[src/gfx/renderJob/GPUContext.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L133)

___

### beginRenderPass

▸ `Static` **beginRenderPass**(`command`, `renderPassState`): `GPURenderPassEncoder`

render pass start return current use gpu renderPassEncoder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `GPUCommandEncoder` | GPUCommandEncoder |
| `renderPassState` | `RendererPassState` | RendererPassState |

#### Returns

`GPURenderPassEncoder`

encoder GPURenderPassEncoder

#### Defined in

[src/gfx/renderJob/GPUContext.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L144)

___

### drawIndexed

▸ `Static` **drawIndexed**(`encoder`, `indexCount`, `instanceCount?`, `firstIndex?`, `baseVertex?`, `firstInstance?`): `void`

Start the rendering process to draw any pipes

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` |
| `indexCount` | `number` |
| `instanceCount?` | `number` |
| `firstIndex?` | `number` |
| `baseVertex?` | `number` |
| `firstInstance?` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L184)

___

### draw

▸ `Static` **draw**(`encoder`, `vertexCount`, `instanceCount?`, `firstVertex?`, `firstInstance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` |
| `vertexCount` | `number` |
| `instanceCount?` | `number` |
| `firstVertex?` | `number` |
| `firstInstance?` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L193)

___

### endPass

▸ `Static` **endPass**(`encoder`): `void`

The GPU must be informed of the end of encoder recording

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L205)

___

### computeCommand

▸ `Static` **computeCommand**(`command`, `computes`): `void`

Perform the final calculation and submit the Shader to the GPU

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |
| `computes` | `ComputeShader`[] |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L217)
