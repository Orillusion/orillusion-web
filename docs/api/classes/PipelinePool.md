[**@orillusion/core**](../README.md)

***

# Class: PipelinePool

Defined in: [src/gfx/graphics/webGpu/PipelinePool.ts:7](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/PipelinePool.ts#L7)

Per-context cache of shared render pipelines, keyed by shader variant.

## Constructors

### Constructor

> **new PipelinePool**(): `PipelinePool`

#### Returns

`PipelinePool`

## Methods

### getSharePipeline()

> `static` **getSharePipeline**(`ctx`, `shaderVariant`): `GPURenderPipeline`

Defined in: [src/gfx/graphics/webGpu/PipelinePool.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/PipelinePool.ts#L17)

Get a shared render pipeline for the given shader variant, or null if not cached.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

the rendering context

##### shaderVariant

`string`

the shader variant key

#### Returns

`GPURenderPipeline`

***

### setSharePipeline()

> `static` **setSharePipeline**(`ctx`, `shaderVariant`, `pipeline`): `void`

Defined in: [src/gfx/graphics/webGpu/PipelinePool.ts:26](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/PipelinePool.ts#L26)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

##### shaderVariant

`string`

##### pipeline

`GPURenderPipeline`

#### Returns

`void`
