[**@orillusion/core**](../README.md)

***

# Class: GBufferFrame

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L19)

A G-buffer [RTFrame](RTFrame.md): a color attachment plus a packed/compressed
G-buffer attachment and a matching depth (or depth+stencil) texture.
Instances are cached per Context3D and per string key via
getGBufferFrame, so passes that name the same key share one
G-buffer within an engine without leaking across engines.

## Extends

- [`RTFrame`](RTFrame.md)

## Constructors

### Constructor

> **new GBufferFrame**(): `GBufferFrame`

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:41](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L41)

#### Returns

`GBufferFrame`

#### Overrides

[`RTFrame`](RTFrame.md).[`constructor`](RTFrame.md#constructor)

## Properties

### colorPass\_GBuffer

> `static` **colorPass\_GBuffer**: `string` = `"ColorPassGBuffer"`

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L21)

Shared key for the main color-pass G-buffer.

***

### reflections\_GBuffer

> `static` **reflections\_GBuffer**: `string` = `"reflections_GBuffer"`

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L23)

Shared key for the reflection-probe G-buffer.

***

### gBufferMap

> `static` **gBufferMap**: `Map`\<`string`, `GBufferFrame`\>

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L25)

Cache of G-buffers for the most recently queried context (see getGBufferFrame).

***

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

### createGBuffer()

> **createGBuffer**(`ctx`, `key`, `rtWidth`, `rtHeight`, `_autoResize?`, `outColor?`, `depthTexture?`, `sampleCount?`): `void`

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L53)

Allocate this G-buffer's attachments and depth texture. Optionally
creates the color attachment (`outColor`), always creates the
compressed G-buffer attachment, and creates a depth (or
depth+stencil) texture unless `depthTexture` is supplied. `sampleCount`
is captured on the frame so the render pass state can pick up the MSAA
sample count without re-reading the engine setting.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

##### key

`string`

##### rtWidth

`number`

##### rtHeight

`number`

##### \_autoResize?

`boolean` = `true`

##### outColor?

`boolean` = `true`

##### depthTexture?

`RenderTexture`

##### sampleCount?

`number` = `0`

#### Returns

`void`

***

### getPositionMap()

> **getPositionMap**(): `RenderTexture`

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:95](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L95)

The world-position attachment (render target index 1).

#### Returns

`RenderTexture`

***

### getNormalMap()

> **getNormalMap**(): `RenderTexture`

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:100](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L100)

The world-normal attachment (render target index 2).

#### Returns

`RenderTexture`

***

### getColorTexture()

> **getColorTexture**(): `RenderTexture`

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L105)

The scene color attachment, or undefined when created with `outColor=false`.

#### Returns

`RenderTexture`

***

### getCompressGBufferTexture()

> **getCompressGBufferTexture**(): `RenderTexture`

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:110](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L110)

The packed/compressed G-buffer attachment.

#### Returns

`RenderTexture`

***

### clone()

> **clone**(): `GBufferFrame`

Defined in: [src/gfx/renderJob/frame/GBufferFrame.ts:143](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L143)

Create a new GBufferFrame sharing this frame's attachment/descriptor setup.

#### Returns

`GBufferFrame`

#### Overrides

[`RTFrame`](RTFrame.md).[`clone`](RTFrame.md#clone)

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
