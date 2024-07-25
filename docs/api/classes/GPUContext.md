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
- [copyTexture](GPUContext.md#copytexture)

## Constructors

### constructor

• **new GPUContext**(): [`GPUContext`](GPUContext.md)

#### Returns

[`GPUContext`](GPUContext.md)

## Properties

### lastGeometry

▪ `Static` **lastGeometry**: [`GeometryBase`](GeometryBase.md)

#### Defined in

[src/gfx/renderJob/GPUContext.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L15)

___

### lastPipeline

▪ `Static` **lastPipeline**: `GPURenderPipeline`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L16)

___

### lastShader

▪ `Static` **lastShader**: [`RenderShaderPass`](RenderShaderPass.md)

#### Defined in

[src/gfx/renderJob/GPUContext.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L17)

___

### drawCount

▪ `Static` **drawCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L18)

___

### renderPassCount

▪ `Static` **renderPassCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L19)

___

### geometryCount

▪ `Static` **geometryCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L20)

___

### pipelineCount

▪ `Static` **pipelineCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L21)

___

### matrixCount

▪ `Static` **matrixCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L22)

___

### lastRenderPassState

▪ `Static` **lastRenderPassState**: `RendererPassState`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L23)

___

### LastCommand

▪ `Static` **LastCommand**: `GPUCommandEncoder`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L24)

## Methods

### bindPipeline

▸ **bindPipeline**(`encoder`, `renderShader`): `boolean`

renderPipeline before render need bind pipeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoder` | `GPURenderPassEncoder` \| `GPURenderBundleEncoder` | current GPURenderPassEncoder GPURenderPassEncoder GPURenderBundleEncoder |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) | render pass shader [RenderShaderPass](RenderShaderPass.md) |

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L32)

___

### bindCamera

▸ **bindCamera**(`encoder`, `camera`): `void`

render before need make sure use camera

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoder` | `GPURenderPassEncoder` \| `GPURenderBundleEncoder` | current GPURenderPassEncoder GPURenderPassEncoder GPURenderBundleEncoder |
| `camera` | [`Camera3D`](Camera3D.md) | use camera [Camera3D](Camera3D.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L58)

___

### bindGeometryBuffer

▸ **bindGeometryBuffer**(`encoder`, `geometry`): `void`

bind geometry vertex buffer to current render pipeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoder` | `GPURenderPassEncoder` \| `GPURenderBundleEncoder` | current GPURenderPassEncoder GPURenderPassEncoder GPURenderBundleEncoder |
| `geometry` | [`GeometryBase`](GeometryBase.md) | engine geometry |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L70)

___

### cleanCache

▸ **cleanCache**(): `void`

begin or end clean all use cache

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L89)

___

### createPipeline

▸ **createPipeline**(`gpuRenderPipeline`): `GPURenderPipeline`

create a render pipeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gpuRenderPipeline` | `GPURenderPipelineDescriptor` | GPURenderPipelineDescriptor |

#### Returns

`GPURenderPipeline`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L100)

___

### beginCommandEncoder

▸ **beginCommandEncoder**(): `GPUCommandEncoder`

auto get webgpu commandEncoder and start a command encoder

#### Returns

`GPUCommandEncoder`

commandEncoder GPUCommandEncoder

#### Defined in

[src/gfx/renderJob/GPUContext.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L110)

___

### endCommandEncoder

▸ **endCommandEncoder**(`command`): `void`

end CommandEncoder record and submit

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `GPUCommandEncoder` | GPUCommandEncoder |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L123)

___

### recordBundleEncoder

▸ **recordBundleEncoder**(`des`): `GPURenderBundleEncoder`

create a renderBundle gpu object by GPURenderBundleEncoderDescriptor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `des` | `GPURenderBundleEncoderDescriptor` | GPURenderBundleEncoderDescriptor |

#### Returns

`GPURenderBundleEncoder`

renderBundleEncoder GPURenderBundleEncoder

#### Defined in

[src/gfx/renderJob/GPUContext.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L136)

___

### beginRenderPass

▸ **beginRenderPass**(`command`, `renderPassState`): `GPURenderPassEncoder`

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

[src/gfx/renderJob/GPUContext.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L147)

___

### drawIndexed

▸ **drawIndexed**(`encoder`, `indexCount`, `instanceCount?`, `firstIndex?`, `baseVertex?`, `firstInstance?`): `void`

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

[src/gfx/renderJob/GPUContext.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L190)

___

### draw

▸ **draw**(`encoder`, `vertexCount`, `instanceCount?`, `firstVertex?`, `firstInstance?`): `void`

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

[src/gfx/renderJob/GPUContext.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L199)

___

### endPass

▸ **endPass**(`encoder`): `void`

The GPU must be informed of the end of encoder recording

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L211)

___

### computeCommand

▸ **computeCommand**(`command`, `computes`): `void`

Perform the final calculation and submit the Shader to the GPU

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |
| `computes` | `ComputeShader`[] |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L221)

___

### copyTexture

▸ **copyTexture**(`command`, `source`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |
| `source` | [`Texture`](Texture.md) |
| `dest` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/GPUContext.ts:230](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/GPUContext.ts#L230)
