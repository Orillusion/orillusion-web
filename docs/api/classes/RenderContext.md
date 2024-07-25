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
- [specialtRenderPass](RenderContext.md#specialtrenderpass)
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

[src/gfx/renderJob/passRenderer/RenderContext.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L13)

## Properties

### command

• **command**: `GPUCommandEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L8)

___

### encoder

• **encoder**: `GPURenderPassEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L9)

## Accessors

### rendererPassState

• `get` **rendererPassState**(): `RendererPassState`

#### Returns

`RendererPassState`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L45)

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

[src/gfx/renderJob/passRenderer/RenderContext.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L49)

___

### beginTransparentRenderPass

▸ **beginTransparentRenderPass**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L55)

___

### specialtRenderPass

▸ **specialtRenderPass**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L61)

___

### endRenderPass

▸ **endRenderPass**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L67)

___

### begineNewCommand

▸ **begineNewCommand**(): `GPUCommandEncoder`

#### Returns

`GPUCommandEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L72)

___

### endCommand

▸ **endCommand**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L77)

___

### beginNewEncoder

▸ **beginNewEncoder**(): `GPURenderPassEncoder`

#### Returns

`GPURenderPassEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L82)

___

### endEncoder

▸ **endEncoder**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L87)
