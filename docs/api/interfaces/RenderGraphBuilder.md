[**@orillusion/core**](../README.md)

***

# Interface: RenderGraphBuilder

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:39](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L39)

Setup-time builder handed to [RenderGraphPass.setup](../classes/RenderGraphPass.md#setup). A pass
uses this to declare its graph-level dependencies (`read`) and
outputs (`write`). The builder also exposes the owning view's
Context3D and the graph itself so passes can look up earlier-added
sibling passes when a setup-time reference is required.

Two modes for `write`:
- **Creator** — `write(name, factory)`. Calls the factory to allocate
  the resource, registers it in the graph pool under `name`, and
  records `name` in this pass's `creates` set. Single-creator rule:
  only one pass per name may pass a factory.
- **Mutator** — `write(name)`. Declares this pass mutates a resource
  created elsewhere. Multiple passes may declare write without a
  factory; their order is determined by insertion order. Downstream
  reads see the latest writer's state.

## Properties

### context3D

> `readonly` **context3D**: [`Context3D`](../classes/Context3D.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:41](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L41)

Pass-owning view's Context3D.

***

### view

> `readonly` **view**: [`View3D`](../classes/View3D.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:44](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L44)

Pass-owning view.

***

### graph

> `readonly` **graph**: [`RenderGraph`](../classes/RenderGraph.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:49](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L49)

The graph this pass is being added to. Use
 `graph.getPass<T>(name)` to look up earlier-added sibling
 passes (later ones aren't in the graph yet during setup).

## Methods

### read()

> **read**(`target`, `access?`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:61](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L61)

Declare a read dependency on a named resource. The named
 handle must have a creator before this pass executes;
 validator enforces.

 Pass a [TextureHandle](TextureHandle.md) / [BufferHandle](BufferHandle.md) returned by
 `b.declareTexture` / `b.declareBuffer` / `b.importExternalTexture`
 / `b.importExternalBuffer` to type-check the target and to
 contribute the optional `access` hint to the resource's final
 `GPUTextureUsage` / `GPUBufferUsage`. String form keeps working
 for legacy resources registered through `b.write(name, getter)`.

#### Parameters

##### target

`string` \| [`TextureHandle`](TextureHandle.md) \| [`BufferHandle`](BufferHandle.md)

##### access?

[`AccessHint`](../type-aliases/AccessHint.md)

#### Returns

`void`

***

### write()

#### Call Signature

> **write**\<`T`\>(`name`, `getter`): `T`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:75](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L75)

Creator overload: declare a write to `name`, register `getter`
 in the pool. The `getter` is called every `pool.get(name)` —
 pass authors typically close over a local variable / instance
 field for stable identity (eager case), or implement internal
 caching that rebuilds on resize (lazy case). Returns
 `getter()` once for caller convenience. Single-creator rule
 applies.

 This overload is the legacy path; new passes should prefer
 `b.declareTexture` / `b.declareBuffer` so the graph can manage
 lifecycle + aliasing instead of the pass owning a private
 RenderTexture. Phase 5 will deprecate this overload.

##### Type Parameters

###### T

`T`

##### Parameters

###### name

`string`

###### getter

() => `T`

##### Returns

`T`

#### Call Signature

> **write**(`target`, `access?`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:83](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L83)

Mutator overload: declare this pass writes to an existing
 named resource (created by another pass). Multi-mutator OK;
 ordering is by insertion.

 Handle form contributes an access hint to the resource's usage
 union; string form preserves legacy behavior.

##### Parameters

###### target

`string` \| [`TextureHandle`](TextureHandle.md) \| [`BufferHandle`](BufferHandle.md)

###### access?

[`AccessHint`](../type-aliases/AccessHint.md)

##### Returns

`void`

***

### readWrite()

> **readWrite**(`target`, `access?`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:90](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L90)

Combined read + write of an in-place mutated resource (e.g. a
 compute pass that samples and stores back to the same storage
 texture). Same as calling `b.read(target, access)` followed by
 `b.write(target, access)` — both arrays are populated and the
 hint is unioned into the resource's usage.

#### Parameters

##### target

[`TextureHandle`](TextureHandle.md) \| [`BufferHandle`](BufferHandle.md)

##### access?

[`AccessHint`](../type-aliases/AccessHint.md)

#### Returns

`void`

***

### declareTexture()

> **declareTexture**(`name`, `desc`): [`TextureHandle`](TextureHandle.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:111](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L111)

Declare a transient texture this pass owns. The graph allocates
the underlying RenderTexture after compile from a pooled
physical slot (possibly aliased with another resource whose
lifetime ends before this one starts). The pass fetches the
actual texture from `ctx.getTexture(name)` inside `execute()`.

Single-creator rule applies — declaring the same name twice
throws. `declareTexture` registers the pass as the resource's
creator (single-creator rule) but does NOT auto-record a read or
write access — pass authors must follow up with one of:
  - `b.write(handle, hint)` / `b.read(handle, hint)`, or
  - `b.readWrite(handle, hint)`
to declare how the pass actually uses the resource. Hints
(`'sample' | 'storage' | 'attachment' | 'copy'`) drive the final
`GPUTextureUsage` union when `desc.usage === 'auto'` (default).
A `declareTexture` with no follow-up access is treated as an
orphan declaration and skipped by the pool with a warning.

#### Parameters

##### name

`string`

##### desc

[`TextureDesc`](TextureDesc.md)

#### Returns

[`TextureHandle`](TextureHandle.md)

***

### declareBuffer()

> **declareBuffer**(`name`, `desc`): [`BufferHandle`](BufferHandle.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:120](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L120)

Declare a transient buffer this pass owns. Symmetric with
[declareTexture](#declaretexture): registers the creator only, the actual
access pattern must be declared via `b.read/write/readWrite`.
The pool reuses buffer wrappers by `(rounded-pow2 size, usage)`
bucket and grows them via `GPUBufferBase.resizeBuffer` when needed.

#### Parameters

##### name

`string`

##### desc

[`BufferDesc`](BufferDesc.md)

#### Returns

[`BufferHandle`](BufferHandle.md)

***

### importExternalTexture()

> **importExternalTexture**(`name`, `tex`): [`TextureHandle`](TextureHandle.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:130](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L130)

Publish an externally-owned RenderTexture under `name`
as a persistent (non-aliasable, non-pool-allocated) resource.
Use for textures whose lifecycle is managed outside the graph
(e.g. RTResourceMap-cached resources, history textures
for TAA). Returns a [TextureHandle](TextureHandle.md) so callers can use the
handle-typed `read` / `write` overloads.

#### Parameters

##### name

`string`

##### tex

`RenderTexture`

#### Returns

[`TextureHandle`](TextureHandle.md)

***

### importExternalBuffer()

> **importExternalBuffer**(`name`, `buf`): [`BufferHandle`](BufferHandle.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:136](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L136)

Publish an externally-owned GPUBufferBase as a persistent
resource. Symmetric with [importExternalTexture](#importexternaltexture).

#### Parameters

##### name

`string`

##### buf

`GPUBufferBase`

#### Returns

[`BufferHandle`](BufferHandle.md)

***

### dependsOn()

> **dependsOn**(`passName`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:155](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L155)

Declare an explicit ordering dependency on another pass by
 name, independent of any read/write resource edge. Use this
 when the upstream pass produces side effects the downstream
 pass consumes through a non-graph channel (e.g. GPU indirect
 buffers consumed via GlobalBindGroup, or off-screen RTs
 consumed by sibling materials). The named pass must already
 be registered in the graph before this call.

 Beyond the topology edge, this also positions the dependent
 in the compiled schedule: the pass pops from the ready queue
 immediately after its latest explicit dep, ahead of unrelated
 passes that happen to have lower insertion order. In other
 words `b.dependsOn(X)` reads as "schedule me with X", not
 merely "after X somewhere" — a custom pass added late via
 `renderJob.graph.add(...)` that depends on a built-in pass
 will compile next to that built-in rather than at the tail
 of the pipeline.

#### Parameters

##### passName

`string`

#### Returns

`void`

***

### dependsOnIfPresent()

> **dependsOnIfPresent**(`passName`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:165](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L165)

Optional-dependency variant of [dependsOn](#dependson): if a pass
 named `passName` is already registered, add an ordering edge
 `<passName> → this`; otherwise silently skip. Use when this
 pass only needs to run *after* another pass when it happens
 to be present, without reading or writing any of its outputs
 — and is fine running on its own when the upstream pass is
 absent from the pipeline. When the edge is added it carries
 the same scheduling-shift behavior as [dependsOn](#dependson).

#### Parameters

##### passName

`string`

#### Returns

`void`

***

### createRenderTarget()

> **createRenderTarget**(`name`, `desc`): [`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:174](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L174)

Allocate a fresh typed [RenderGraphRenderTarget](../classes/RenderGraphRenderTarget.md) (colors +
optional depth) and register it under `name`. Single-creator
rule applies — only one pass per `name` may call this. Internally
runs through `b.write(name, factory)` so the standard mutator
chain still orders downstream `b.useRenderTarget` writers.

#### Parameters

##### name

`string`

##### desc

[`RenderGraphRenderTargetDesc`](RenderGraphRenderTargetDesc.md)

#### Returns

[`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

***

### adoptRenderTarget()

> **adoptRenderTarget**(`name`, `rtFrame`, `opts?`): [`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:182](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L182)

Adopt an externally-allocated [RTFrame](../classes/RTFrame.md) (e.g.
[GBufferFrame](../classes/GBufferFrame.md)) and publish it as a typed RT under `name`.
The wrapper does not own the underlying textures. Single-creator
rule applies.

#### Parameters

##### name

`string`

##### rtFrame

[`RTFrame`](../classes/RTFrame.md)

##### opts?

###### label?

`string`

#### Returns

[`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

***

### useRenderTarget()

> **useRenderTarget**(`name`): [`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:200](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L200)

Declare "this pass also writes to the RT named `name`" and return
the [RenderGraphRenderTarget](../classes/RenderGraphRenderTarget.md) for use in `execute()`.
Internally a mutator-form `b.write(name)` — multiple passes may
chain on the same RT.

The pass opens the encoder per-frame via
`target.beginPass(ctx, opts)`; load-ops default to the auto-derive
rule (first writer ⇒ 'clear', subsequent ⇒ 'load') unless `opts`
overrides them. Pipeline-owning passes can wrap the target in a
[RenderGraphRenderPass](../classes/RenderGraphRenderPass.md) via [createRenderPass](#createrenderpass).

#### Parameters

##### name

`string`

#### Returns

[`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

***

### borrowRenderTarget()

> **borrowRenderTarget**(`name`): [`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:220](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L220)

Like [useRenderTarget](#userendertarget) but does NOT register a mutator-write
edge on the RT.

Use when ordering is controlled by insertion order (or explicit
`dependsOn`) rather than graph-derived mutator edges — the
canonical case is [ColorPass](../classes/ColorPass.md) and its subclasses in a
chained-opaque setup (e.g. Globe → ClearDepth → World). Declaring
a mutator-write there would chain every ColorPass instance into
the transmission/transparent mutator chain by insertedOrder,
which combined with an explicit `dependsOn` from the transparent
passes onto the second opaque pass produces a
[CyclicDependencyError](../classes/CyclicDependencyError.md) at compile.

The framework's per-frame auto-derive rule still applies (the
underlying first-writer flag is set by every `target.beginPass()`
call, mutator or borrowed).

#### Parameters

##### name

`string`

#### Returns

[`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

***

### createRenderPass()

> **createRenderPass**(`name`, `target`, `desc`, `openOptions?`): [`RenderGraphRenderPass`](../classes/RenderGraphRenderPass.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:234](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L234)

Build a private render-pass handle around a single owned
GPURenderPipeline that draws into `target`. The handle
lazily compiles the pipeline on first `begin()` and reuses it
across frames. Symmetric with [createComputePass](#createcomputepass).

Storage / attachment dependencies on `target` itself are declared
separately through `b.useRenderTarget` / `b.borrowRenderTarget`
(or `b.adoptRenderTarget` / `b.createRenderTarget` if this pass
also creates the target). This call does NOT register anything in
the pool.

#### Parameters

##### name

`string`

##### target

[`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

##### desc

[`RenderPipelineDesc`](RenderPipelineDesc.md)

##### openOptions?

[`BeginPassOptions`](BeginPassOptions.md)

#### Returns

[`RenderGraphRenderPass`](../classes/RenderGraphRenderPass.md)

***

### createComputePass()

> **createComputePass**(`name`, `desc`): [`RenderGraphComputePass`](../classes/RenderGraphComputePass.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:247](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L247)

Build a private compute-pass handle (pipeline + lifecycle owned
by the caller). Does NOT register anything in the pool —
storage texture / buffer dependencies still flow through
`b.read` / `b.write`.

#### Parameters

##### name

`string`

##### desc

[`ComputePipelineDesc`](ComputePipelineDesc.md)

#### Returns

[`RenderGraphComputePass`](../classes/RenderGraphComputePass.md)
