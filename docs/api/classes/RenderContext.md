[**@orillusion/core**](../README.md)

***

# Class: RenderContext

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:16](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L16)

Drives one [RTFrame](RTFrame.md)'s render through the GPU: opens command
encoders and render-pass encoders, and builds the
RendererPassState sequence (opaque / transparent / continuation
passes) for the frame. Wraps [GPUContextInstance](GPUContextInstance.md) so passes work
against a single frame's attachments without touching the device API.

## Constructors

### Constructor

> **new RenderContext**(`ctx`, `rtFrame`): `RenderContext`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L27)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

##### rtFrame

[`RTFrame`](RTFrame.md)

#### Returns

`RenderContext`

## Properties

### command

> **command**: `GPUCommandEncoder`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:18](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L18)

The command encoder currently open for this frame.

***

### encoder

> **encoder**: `GPURenderPassEncoder`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:20](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L20)

The render-pass encoder currently open for this frame.

***

### gpu

> **gpu**: [`GPUContextInstance`](GPUContextInstance.md)

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:22](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L22)

The per-context GPU helper this render context issues through.

## Accessors

### rendererPassState

#### Get Signature

> **get** **rendererPassState**(): `RendererPassState`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L67)

The most recently pushed renderer pass state (the active one).

##### Returns

`RendererPassState`

## Methods

### clean()

> **clean**(): `void`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:34](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L34)

Reset the accumulated pass states and the GPU bind cache for a new frame.

#### Returns

`void`

***

### beginContinueRendererPassState()

> **beginContinueRendererPassState**(`color_loadOp?`, `depth_loadOp?`): `RendererPassState`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L45)

Push a renderer pass state for the current frame and return it.
When earlier states already exist this is a continuation pass that
loads (rather than clears) prior attachment contents; otherwise it
applies the given color/depth load ops to the frame's first pass.

#### Parameters

##### color\_loadOp?

`GPULoadOp` = `'load'`

##### depth\_loadOp?

`GPULoadOp` = `'load'`

#### Returns

`RendererPassState`

***

### beginOpaqueRenderPass()

> **beginOpaqueRenderPass**(): `void`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:72](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L72)

Begin the opaque pass: clear color + depth, then open a fresh command and encoder.

#### Returns

`void`

***

### beginTransparentRenderPass()

> **beginTransparentRenderPass**(): `void`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:79](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L79)

Begin a transparent pass: load color + depth (continuation), then open a fresh command and encoder.

#### Returns

`void`

***

### specialtRenderPass()

> **specialtRenderPass**(): `void`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:86](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L86)

Begin a special-purpose continuation pass: load color + depth, then open a fresh command and encoder.

#### Returns

`void`

***

### endRenderPass()

> **endRenderPass**(): `void`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:93](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L93)

End the current render pass: close the encoder then submit the command.

#### Returns

`void`

***

### begineNewCommand()

> **begineNewCommand**(): `GPUCommandEncoder`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:99](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L99)

Open a new command encoder for this frame.

#### Returns

`GPUCommandEncoder`

***

### endCommand()

> **endCommand**(): `void`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L105)

Submit and clear the current command encoder.

#### Returns

`void`

***

### beginNewEncoder()

> **beginNewEncoder**(): `GPURenderPassEncoder`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:111](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L111)

Begin a render-pass encoder for the active pass state on the open command.

#### Returns

`GPURenderPassEncoder`

***

### endEncoder()

> **endEncoder**(): `void`

Defined in: [src/gfx/renderJob/passRenderer/RenderContext.ts:117](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/RenderContext.ts#L117)

End and clear the current render-pass encoder.

#### Returns

`void`
