# Class: PipelinePool

### Constructors

- [constructor](PipelinePool.md#constructor)

### Methods

- [getSharePipeline](PipelinePool.md#getsharepipeline)
- [setSharePipeline](PipelinePool.md#setsharepipeline)

## Constructors

### constructor

• **new PipelinePool**()

## Methods

### getSharePipeline

▸ `Static` **getSharePipeline**(`shaderVariant`): `GPURenderPipeline`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderVariant` | `string` |

#### Returns

`GPURenderPipeline`

#### Defined in

[src/gfx/graphics/webGpu/PipelinePool.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/PipelinePool.ts#L6)

___

### setSharePipeline

▸ `Static` **setSharePipeline**(`shaderVariant`, `pipeline`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderVariant` | `string` |
| `pipeline` | `GPURenderPipeline` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/PipelinePool.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/PipelinePool.ts#L15)
