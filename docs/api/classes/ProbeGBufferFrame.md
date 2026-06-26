[**@orillusion/core**](../README.md)

***

# Class: ProbeGBufferFrame

Defined in: [src/gfx/renderJob/frame/ProbeGBufferFrame.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/ProbeGBufferFrame.ts#L15)

G-buffer [RTFrame](RTFrame.md) used when rendering reflection / GI probes.
Allocates position, normal and color attachments (all rgba16float)
plus a depth texture, with `load` op so probe faces accumulate rather
than clear.

## Extends

- [`RTFrame`](RTFrame.md)

## Constructors

### Constructor

> **new ProbeGBufferFrame**(`rtWidth`, `rtHeight`, `autoResize?`, `ctx?`): `ProbeGBufferFrame`

Defined in: [src/gfx/renderJob/frame/ProbeGBufferFrame.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/ProbeGBufferFrame.ts#L17)

#### Parameters

##### rtWidth

`number`

##### rtHeight

`number`

##### autoResize?

`boolean` = `true`

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`ProbeGBufferFrame`

#### Overrides

[`RTFrame`](RTFrame.md).[`constructor`](RTFrame.md#constructor)

## Properties

### label

> **label**: `string`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L15)

Optional debug label for this frame.

#### Inherited from

[`RTFrame`](RTFrame.md).[`label`](RTFrame.md#label)

***

### customSize

> **customSize**: `boolean` = `false`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L17)

When true the attachments are a fixed custom size rather than tracking the canvas.

#### Inherited from

[`RTFrame`](RTFrame.md).[`customSize`](RTFrame.md#customsize)

***

### renderTargets

> **renderTargets**: `RenderTexture`[]

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L19)

The color attachments rendered into by this frame.

#### Inherited from

[`RTFrame`](RTFrame.md).[`renderTargets`](RTFrame.md#rendertargets)

***

### rtDescriptors

> **rtDescriptors**: [`RTDescriptor`](RTDescriptor.md)[]

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L21)

Per-attachment load/store/clear descriptors, parallel to [renderTargets](RTFrame.md#rendertargets).

#### Inherited from

[`RTFrame`](RTFrame.md).[`rtDescriptors`](RTFrame.md#rtdescriptors)

***

### zPreTexture

> **zPreTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:24](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L24)

Optional z-prepass depth texture sampled by this frame.

#### Inherited from

[`RTFrame`](RTFrame.md).[`zPreTexture`](RTFrame.md#zpretexture)

***

### depthTexture

> **depthTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:26](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L26)

The depth (or depth+stencil) attachment for this frame.

#### Inherited from

[`RTFrame`](RTFrame.md).[`depthTexture`](RTFrame.md#depthtexture)

***

### depthViewIndex

> **depthViewIndex**: `number` = `0`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L29)

Array-layer / face index of the depth view to attach.

#### Inherited from

[`RTFrame`](RTFrame.md).[`depthViewIndex`](RTFrame.md#depthviewindex)

***

### depthCleanValue

> **depthCleanValue**: `number` = `1`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L31)

Clear value used when the depth load op is `clear`.

#### Inherited from

[`RTFrame`](RTFrame.md).[`depthCleanValue`](RTFrame.md#depthcleanvalue)

***

### depthLoadOp

> **depthLoadOp**: `GPULoadOp`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L33)

Load op for the depth attachment (`clear` by default).

#### Inherited from

[`RTFrame`](RTFrame.md).[`depthLoadOp`](RTFrame.md#depthloadop)

***

### isOutTarget

> **isOutTarget**: `boolean` = `true`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L35)

Whether this frame writes the final output target (vs. an intermediate).

#### Inherited from

[`RTFrame`](RTFrame.md).[`isOutTarget`](RTFrame.md#isouttarget)

***

### sampleCount

> **sampleCount**: `number` = `0`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:40](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L40)

MSAA sample count — 0 disables MSAA (default). When non-zero,
 WebGPUDescriptorCreator allocates side-band multisample
 textures and flags the pass state so pipelines compile with the
 matching sample count.

#### Inherited from

[`RTFrame`](RTFrame.md).[`sampleCount`](RTFrame.md#samplecount)

## Methods

### crateGBuffer()

> **crateGBuffer**(`rtWidth`, `rtHeight`, `autoResize`, `ctx?`): `void`

Defined in: [src/gfx/renderJob/frame/ProbeGBufferFrame.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/ProbeGBufferFrame.ts#L23)

Allocate the probe G-buffer's position/normal/color attachments and depth texture.

#### Parameters

##### rtWidth

`number`

##### rtHeight

`number`

##### autoResize

`boolean`

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`void`

***

### clone2Frame()

> **clone2Frame**(`rtFrame`): `void`

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:51](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L51)

Copy this frame's attachments, descriptors and depth/z textures into `rtFrame`.

#### Parameters

##### rtFrame

[`RTFrame`](RTFrame.md)

#### Returns

`void`

#### Inherited from

[`RTFrame`](RTFrame.md).[`clone2Frame`](RTFrame.md#clone2frame)

***

### clone()

> **clone**(): [`RTFrame`](RTFrame.md)

Defined in: [src/gfx/renderJob/frame/RTFrame.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L67)

Return a new RTFrame copied from this one via [clone2Frame](RTFrame.md#clone2frame).

#### Returns

[`RTFrame`](RTFrame.md)

#### Inherited from

[`RTFrame`](RTFrame.md).[`clone`](RTFrame.md#clone)
