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
- [beginRenderPass](RenderContext.md#beginrenderpass)
- [endRenderPass](RenderContext.md#endrenderpass)
- [begineNewCommand](RenderContext.md#beginenewcommand)
- [endCommand](RenderContext.md#endcommand)
- [beginNewEncoder](RenderContext.md#beginnewencoder)
- [endEncoder](RenderContext.md#endencoder)

## Constructors

### constructor

• **new RenderContext**(`rtFrame`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) |

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

▸ **beginContinueRendererPassState**(): `RendererPassState`

continue renderer pass state

#### Returns

`RendererPassState`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L27)

___

### beginRenderPass

▸ **beginRenderPass**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L49)

___

### endRenderPass

▸ **endRenderPass**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L55)

___

### begineNewCommand

▸ **begineNewCommand**(): `GPUCommandEncoder`

#### Returns

`GPUCommandEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L60)

___

### endCommand

▸ **endCommand**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L65)

___

### beginNewEncoder

▸ **beginNewEncoder**(): `GPURenderPassEncoder`

#### Returns

`GPURenderPassEncoder`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L70)

___

### endEncoder

▸ **endEncoder**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/RenderContext.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L75)
