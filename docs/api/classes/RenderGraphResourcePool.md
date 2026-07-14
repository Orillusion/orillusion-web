[**@orillusion/core**](../README.md)

***

# Class: RenderGraphResourcePool

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L38)

Thin name → getter registry with an optional kind sidecar.
Resources are owned by their creator pass (or by external
subsystems like `RTResourceMap` / `GBufferFrame`); this pool just
maps a string handle to a `() => T` lookup so other passes can
resolve dependencies via `ctx.get(name)` at execute time.

Each `RenderGraph` owns one pool. Pass.setup populates it via
`RenderGraphBuilder.write(name, factory)` (the factory's return is
captured into a getter that always returns that same instance), or
via the typed builders (`b.createRenderTarget`, etc.) which also
stamp a kind.

## Constructors

### Constructor

> **new RenderGraphResourcePool**(`ctx`): `RenderGraphResourcePool`

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:49](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L49)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

`RenderGraphResourcePool`

## Accessors

### context

#### Get Signature

> **get** **context**(): [`Context3D`](Context3D.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L53)

##### Returns

[`Context3D`](Context3D.md)

## Methods

### register()

> **register**(`name`, `getter`, `kind?`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:64](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L64)

Register a getter under `name`. Subsequent `get(name)` /
 `has(name)` calls resolve through this getter. Calling twice
 with the same name overwrites the previous getter — the
 graph's single-creator validator catches the production case;
 in tests this is convenient for swapping fakes.
 The optional `kind` defaults to `'opaque'` so existing
 call-sites that pre-date the typed builders keep working.

#### Parameters

##### name

`string`

##### getter

() => `unknown`

##### kind?

[`ResourceKind`](../type-aliases/ResourceKind.md) = `'opaque'`

#### Returns

`void`

***

### markPersistent()

> **markPersistent**(`name`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:73](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L73)

Mark `name` as persistent — the transient pool will not allocate
 or alias a wrapper for it. The persistent flag is independent of
 the kind tag: any kind can be marked persistent. Calling on an
 unregistered name still records the flag (set on `register`).

#### Parameters

##### name

`string`

#### Returns

`void`

***

### isPersistent()

> **isPersistent**(`name`): `boolean`

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:77](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L77)

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### unregister()

> **unregister**(`name`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:85](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L85)

Drop the getter for `name`. Idempotent — silently no-ops if the
 name isn't registered. Called from `RenderGraph.remove()` and
 from `RenderGraph.replace()`'s pre-install cleanup so old
 getters don't outlive their owning pass.

#### Parameters

##### name

`string`

#### Returns

`void`

***

### get()

> **get**\<`T`\>(`name`): `T`

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:92](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L92)

Resolve a named resource. Throws if no getter is registered.

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

#### Returns

`T`

***

### has()

> **has**(`name`): `boolean`

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:101](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L101)

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### kindOf()

> **kindOf**(`name`): [`ResourceKind`](../type-aliases/ResourceKind.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:106](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L106)

Return the kind tag for `name`, or `null` if unregistered.

#### Parameters

##### name

`string`

#### Returns

[`ResourceKind`](../type-aliases/ResourceKind.md)

***

### dispose()

> **dispose**(): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:114](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L114)

Drop all registrations. Called from `graph.destroy()` and on
 device-lost. The actual GPU resources are owned by the
 creator passes (or external maps), which manage their own
 destruction.

#### Returns

`void`
