# Class: RenderContext

### Constructors

- [constructor](RenderContext.md#constructor)

### Properties

- [command](RenderContext.md#command)
- [encoder](RenderContext.md#encoder)

### Accessors

- [rendererPassState](RenderContext.md#rendererpassstate)

### Methods

- [clean](RenderContext.md#clean)
- [beginContinueRendererPassState](RenderContext.md#begincontinuerendererpassstate)
- [beginOpaqueRenderPass](RenderContext.md#beginopaquerenderpass)
- [beginTransparentRenderPass](RenderContext.md#begintransparentrenderpass)
- [endRenderPass](RenderContext.md#endrenderpass)
- [begineNewCommand](RenderContext.md#beginenewcommand)
- [endCommand](RenderContext.md#endcommand)
- [beginNewEncoder](RenderContext.md#beginnewencoder)
- [endEncoder](RenderContext.md#endencoder)

## Constructors

### constructor

• **new RenderContext**(`rtFrame`): [`RenderContext`](RenderContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) |

#### Returns

[`RenderContext`](RenderContext.md)

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L12)

## Properties

### command

• **command**: `GPUCommandEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L7)

___

### encoder

• **encoder**: `GPURenderPassEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L8)

## Accessors

### rendererPassState

• `get` **rendererPassState**(): `RendererPassState`

#### Returns

`RendererPassState`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L49)

## Methods

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L18)

___

### beginContinueRendererPassState

▸ **beginContinueRendererPassState**(`color_loadOp?`, `depth_loadOp?`): `RendererPassState`

continue renderer pass state

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color_loadOp` | `GPULoadOp` | `'load'` |
| `depth_loadOp` | `GPULoadOp` | `'load'` |

#### Returns

`RendererPassState`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L27)

___

### beginOpaqueRenderPass

▸ **beginOpaqueRenderPass**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L53)

___

### beginTransparentRenderPass

▸ **beginTransparentRenderPass**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L59)

___

### endRenderPass

▸ **endRenderPass**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L65)

___

### begineNewCommand

▸ **begineNewCommand**(): `GPUCommandEncoder`

#### Returns

`GPUCommandEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L70)

___

### endCommand

▸ **endCommand**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L75)

___

### beginNewEncoder

▸ **beginNewEncoder**(): `GPURenderPassEncoder`

#### Returns

`GPURenderPassEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L80)

___

### endEncoder

▸ **endEncoder**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L85)
