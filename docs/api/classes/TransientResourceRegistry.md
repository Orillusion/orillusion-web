[**@orillusion/core**](../README.md)

***

# Class: TransientResourceRegistry

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:50](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L50)

Per-graph collector for transient resource declarations and access
hints. Lives on the [RenderGraph](RenderGraph.md) as `_transient`. Populated
during each pass's `setup()` (through `RenderGraphBuilder`), consumed
by [LifetimeAnalyzer](LifetimeAnalyzer.md) inside `RenderGraph.compile()`.

Plain pass `b.read(name)` / `b.write(name)` (without an access hint
and without a `TextureHandle/BufferHandle` target) still flow through
the legacy `RenderGraphResourcePool` and never touch this registry —
the new API is fully opt-in.

## Constructors

### Constructor

> **new TransientResourceRegistry**(): `TransientResourceRegistry`

#### Returns

`TransientResourceRegistry`

## Accessors

### declarations

#### Get Signature

> **get** **declarations**(): `ReadonlyMap`\<`string`, `TransientResourceDeclaration`\>

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:158](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L158)

Read-only view of registered declarations.

##### Returns

`ReadonlyMap`\<`string`, `TransientResourceDeclaration`\>

## Methods

### declareTexture()

> **declareTexture**(`name`, `desc`, `creatorPass`): `void`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:64](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L64)

Register a transient texture declaration.

#### Parameters

##### name

`string`

##### desc

[`TextureDesc`](../interfaces/TextureDesc.md)

##### creatorPass

`string`

#### Returns

`void`

#### Throws

if `name` has already been declared (single-creator).

***

### declareBuffer()

> **declareBuffer**(`name`, `desc`, `creatorPass`): `void`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:79](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L79)

Register a transient buffer declaration.

#### Parameters

##### name

`string`

##### desc

[`BufferDesc`](../interfaces/BufferDesc.md)

##### creatorPass

`string`

#### Returns

`void`

#### Throws

if `name` has already been declared (single-creator).

***

### importExternalTexture()

> **importExternalTexture**(`name`, `tex`, `creatorPass`): `void`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:96](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L96)

Register an externally-owned texture as a persistent resource.
The pool will not allocate, will not alias, and will not destroy
the underlying GPU texture. `getTexture(name)` returns `tex`
verbatim.

#### Parameters

##### name

`string`

##### tex

`RenderTexture`

##### creatorPass

`string`

#### Returns

`void`

***

### importExternalBuffer()

> **importExternalBuffer**(`name`, `buf`, `creatorPass`): `void`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:124](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L124)

Register an externally-owned GPU buffer as a persistent resource.

#### Parameters

##### name

`string`

##### buf

`GPUBufferBase`

##### creatorPass

`string`

#### Returns

`void`

***

### recordAccessHint()

> **recordAccessHint**(`name`, `kind`, `hint`, `mode`): `void`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:151](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L151)

Record one `read` / `write` / `readWrite` access hint for a
resource. Hint bits are OR'd into the per-name hint usage map;
the analyzer combines this with the desc's `usage` (when `'auto'`)
to produce the final allocation usage.

Targets that aren't registered in this registry are silently
ignored — they're legacy `b.write(name, getter)` resources that
live in `RenderGraphResourcePool` only and don't participate in
transient allocation.

#### Parameters

##### name

`string`

##### kind

[`TransientResourceKind`](../type-aliases/TransientResourceKind.md)

##### hint

[`AccessHint`](../type-aliases/AccessHint.md)

##### mode

`"read"` \| `"write"`

#### Returns

`void`

***

### hintUsageOf()

> **hintUsageOf**(`name`): `number`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:163](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L163)

Per-name unioned usage contribution from access hints.

#### Parameters

##### name

`string`

#### Returns

`number`

***

### has()

> **has**(`name`): `boolean`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:167](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L167)

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### get()

> **get**(`name`): `TransientResourceDeclaration`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:171](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L171)

#### Parameters

##### name

`string`

#### Returns

`TransientResourceDeclaration`

***

### unregister()

> **unregister**(`name`): `void`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:181](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L181)

Drop the declaration + access hints for `name`. Called from
`RenderGraph.remove()` / `RenderGraph.replace()` so a re-added
pass can re-declare its outputs without tripping the
single-creator check.

#### Parameters

##### name

`string`

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts:190](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientResourceRegistry.ts#L190)

Drop every declaration and hint. Called on graph destroy and
device-lost.

#### Returns

`void`
