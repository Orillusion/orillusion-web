[**@orillusion/core**](../README.md)

***

# Class: RTFrame

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:13](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L13)

A render-target frame: the set of color attachments (with their
per-attachment [RTDescriptor](RTDescriptor.md)s) plus the depth/z textures and
depth load behaviour that define one render pass's output. Subclasses
such as [GBufferFrame](GBufferFrame.md) and [ProbeGBufferFrame](ProbeGBufferFrame.md) populate
specific attachment layouts.

## Extended by

- [`GBufferFrame`](GBufferFrame.md)
- [`ProbeGBufferFrame`](ProbeGBufferFrame.md)

## Constructors

### Constructor

> **new RTFrame**(`attachments`, `rtDescriptors`, `depthTexture?`, `zPreTexture?`, `isOutTarget?`): `RTFrame`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L42)

#### Parameters

##### attachments

`RenderTexture`[]

##### rtDescriptors

[`RTDescriptor`](RTDescriptor.md)[]

##### depthTexture?

`RenderTexture`

##### zPreTexture?

`RenderTexture`

##### isOutTarget?

`boolean` = `true`

#### Returns

`RTFrame`

## Properties

### label

> **label**: `string`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L15)

Optional debug label for this frame.

***

### customSize

> **customSize**: `boolean` = `false`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L17)

When true the attachments are a fixed custom size rather than tracking the canvas.

***

### renderTargets

> **renderTargets**: `RenderTexture`[]

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L19)

The color attachments rendered into by this frame.

***

### rtDescriptors

> **rtDescriptors**: [`RTDescriptor`](RTDescriptor.md)[]

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L21)

Per-attachment load/store/clear descriptors, parallel to [renderTargets](#rendertargets).

***

### zPreTexture

> **zPreTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:24](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L24)

Optional z-prepass depth texture sampled by this frame.

***

### depthTexture

> **depthTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:26](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L26)

The depth (or depth+stencil) attachment for this frame.

***

### depthViewIndex

> **depthViewIndex**: `number` = `0`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L29)

Array-layer / face index of the depth view to attach.

***

### depthCleanValue

> **depthCleanValue**: `number` = `1`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L31)

Clear value used when the depth load op is `clear`.

***

### depthLoadOp

> **depthLoadOp**: `GPULoadOp`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L33)

Load op for the depth attachment (`clear` by default).

***

### isOutTarget

> **isOutTarget**: `boolean` = `true`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L35)

Whether this frame writes the final output target (vs. an intermediate).

***

### sampleCount

> **sampleCount**: `number` = `0`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:40](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L40)

MSAA sample count — 0 disables MSAA (default). When non-zero,
 WebGPUDescriptorCreator allocates side-band multisample
 textures and flags the pass state so pipelines compile with the
 matching sample count.

## Methods

### clone2Frame()

> **clone2Frame**(`rtFrame`): `void`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:51](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L51)

Copy this frame's attachments, descriptors and depth/z textures into `rtFrame`.

#### Parameters

##### rtFrame

`RTFrame`

#### Returns

`void`

***

### clone()

> **clone**(): `RTFrame`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L67)

Return a new RTFrame copied from this one via [clone2Frame](#clone2frame).

#### Returns

`RTFrame`
