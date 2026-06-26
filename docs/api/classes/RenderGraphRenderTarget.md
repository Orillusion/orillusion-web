[**@orillusion/core**](../README.md)

***

# Class: RenderGraphRenderTarget

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:144](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L144)

Typed render target = color attachment(s) + (optional) depth +
creation description. Wraps [RTFrame](RTFrame.md) without replacing it —
the rtFrame field is still the single source of truth that
WebGPUDescriptorCreator.createRendererPassState consumes.

Two construction modes:

- **Adopt** via [fromRTFrame](#fromrtframe): bind to an externally-allocated
  [RTFrame](RTFrame.md) (typical: [GBufferFrame](GBufferFrame.md)). The RT does not
  own the underlying RenderTextures; cleanup is the source's
  responsibility.
- **Allocate** via [allocate](#allocate): allocate fresh
  RenderTextures through RTResourceMap.createRTTexture
  (auto-resize via the texture's built-in resize handler) and
  compose them into a private [RTFrame](RTFrame.md).

Multi-writer rule: only one pass creates the RT (calls
`b.createRenderTarget` / `b.adoptRenderTarget`). Downstream passes
call `b.useRenderTarget(name)` (or `b.borrowRenderTarget(name)`) to
record a mutator-write and obtain the same RT handle; the encoder
is opened in `execute()` via [beginPass](#beginpass).

## Constructors

### Constructor

> **new RenderGraphRenderTarget**(`name`, `desc`, `rtFrame`, `owned`): `RenderGraphRenderTarget`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:181](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L181)

Use [fromRTFrame](#fromrtframe) or [allocate](#allocate) — direct construction
 is reserved for internal use.

#### Parameters

##### name

`string`

##### desc

[`RenderGraphRenderTargetDesc`](../interfaces/RenderGraphRenderTargetDesc.md)

##### rtFrame

[`RTFrame`](RTFrame.md)

##### owned

`boolean`

#### Returns

`RenderGraphRenderTarget`

## Properties

### name

> `readonly` **name**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:146](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L146)

Pool handle name.

***

### desc

> `readonly` **desc**: `Readonly`\<[`RenderGraphRenderTargetDesc`](../interfaces/RenderGraphRenderTargetDesc.md)\>

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:147](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L147)

***

### rtFrame

> `readonly` **rtFrame**: [`RTFrame`](RTFrame.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:148](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L148)

***

### colorTextures

> `readonly` **colorTextures**: readonly `RenderTexture`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:149](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L149)

***

### depthTexture

> `readonly` **depthTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:150](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L150)

***

### sampleCount

> `readonly` **sampleCount**: `number`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:151](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L151)

***

### owned

> `readonly` **owned**: `boolean`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:155](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L155)

True if this RT owns the underlying textures (allocate mode).
 False for adopt mode — textures are owned by the upstream
 [RTFrame](RTFrame.md) source (e.g. [GBufferFrame](GBufferFrame.md)).

## Methods

### fromRTFrame()

> `static` **fromRTFrame**(`name`, `rtFrame`, `opts?`): `RenderGraphRenderTarget`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:202](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L202)

Adopt an externally-allocated [RTFrame](RTFrame.md). The wrapper does
not own the textures; only descriptor / cache state is reset on
[destroy](#destroy). Typical use: [GBufferResourcePass](GBufferResourcePass.md) wraps a
[GBufferFrame](GBufferFrame.md).

#### Parameters

##### name

`string`

##### rtFrame

[`RTFrame`](RTFrame.md)

##### opts?

###### label?

`string`

#### Returns

`RenderGraphRenderTarget`

***

### allocate()

> `static` **allocate**(`name`, `ctx`, `desc`): `RenderGraphRenderTarget`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:239](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L239)

Allocate fresh textures via RTResourceMap (auto-resize
inherited) and assemble a private [RTFrame](RTFrame.md). The
per-attachment cache key in `RTResourceMap` is
`"<rt-name>::<attachment-name>"` to avoid colliding with other
registries that use bare attachment names.

#### Parameters

##### name

`string`

##### ctx

[`Context3D`](Context3D.md)

##### desc

[`RenderGraphRenderTargetDesc`](../interfaces/RenderGraphRenderTargetDesc.md)

#### Returns

`RenderGraphRenderTarget`

***

### beginPass()

> **beginPass**(`ctx`, `opts`): [`OpenedRenderPass`](../interfaces/OpenedRenderPass.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:314](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L314)

Open a render pass on this target. Resolves the load-op combination
against the auto-derive rule (first-writer ⇒ clear, subsequent ⇒
load) unless `opts` overrides it, looks up (or builds) the cached
RendererPassState for that resolved bucket, opens a fresh
GPUCommandEncoder + render-pass encoder, and returns the
encoder + state.

Each invocation opens an **independent** command encoder. WebGPU
does not require encoders to be shared across passes for
`loadOp='load'` chaining — the attachment contents carry over, not
the encoder identity.

Pair every successful call with [endPass](#endpass) (typically in a
`try/finally`).

#### Parameters

##### ctx

[`RenderGraphPassContext`](../interfaces/RenderGraphPassContext.md)

##### opts

[`BeginPassOptions`](../interfaces/BeginPassOptions.md)

#### Returns

[`OpenedRenderPass`](../interfaces/OpenedRenderPass.md)

***

### endPass()

> **endPass**(`ctx`, `opened`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:401](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L401)

Close a pass opened with [beginPass](#beginpass) and submit the per-pass
command buffer.

#### Parameters

##### ctx

[`RenderGraphPassContext`](../interfaces/RenderGraphPassContext.md)

##### opened

[`OpenedRenderPass`](../interfaces/OpenedRenderPass.md)

#### Returns

`void`

***

### destroy()

> **destroy**(`_ctx`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:448](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L448)

Release per-RT framework state. Owned textures are not destroyed
here — RTResourceMap retains them so that a subsequent
graph rebuild can reuse them without reallocating. Pass authors
that want explicit destruction must do it themselves.

#### Parameters

##### \_ctx

[`Context3D`](Context3D.md)

#### Returns

`void`
