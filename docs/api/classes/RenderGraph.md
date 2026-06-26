[**@orillusion/core**](../README.md)

***

# Class: RenderGraph

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:130](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L130)

User-facing Frame Graph. Each [View3D](View3D.md) owns one — the graph
is bound to the view's Context3D in the constructor and uses that
view as the implicit owner for setup contexts and pass execution.

Pass lifecycle:

  graph.add(MyPass, ...args)
    → new MyPass(...args)            // ctor: nothing GPU
    → (defer; setup runs at compile)
    → graph.compile() (lazy)         // setup → validator → topoSort
      → pass.setup(builder)          // declares reads/writes/creates
    → pass.execute(ctx)              // each frame, in topo order
    → pass.destroy()                 // on graph.destroy() or remove()

Setup is **deferred** to `compile()` and runs with a transactional
builder + multi-round iteration: a pass that reads a resource (or
uses an RT) declared by another not-yet-set-up pass throws an
internal `_PendingSetupError`, its draft is discarded, and the pass
is retried after other passes commit their declarations. This makes
`add()` call order irrelevant — the topo sort still ultimately
picks the right execute order from the declared reads/writes/deps.

The graph collects `b.read` / `b.write` calls into the pass's
`reads` / `writes` / `creates` arrays during setup, freezing them
at commit time. See [RenderGraphPass](RenderGraphPass.md) for the contract.

## Hot-swap contract

Mutations are safe at any time between frames. Each one marks the
graph dirty so the next `compile()` rebuilds; wrap a sequence of
mutations in [beginUpdate](#beginupdate) / [endUpdate](#endupdate) to coalesce.

| Op | Effect on validator | Effect on pool |
|----|---------------------|----------------|
| `add(Ctor)` | new pass joins validation + topo | pass's `b.write(name, getter)` registers `name` |
| `remove(name)` | pass leaves validation + topo; consumers of its outputs fail compile | pass's `creates` are unregistered |
| `replace(name, Ctor)` | old leaves, new joins | old `creates` unregistered, then new `setup()` registers |
| `disablePass(name)` | pass is filtered out as if removed | unchanged (getter stays for cheap `enablePass`) |
| `enablePass(name)` | pass re-enters validation + topo | unchanged |

`disable === remove` for the validator's purposes — disabling a
producer whose output is read by an enabled pass throws
`UnresolvedResourceError` at the next compile, instead of silently
delivering stale data at execute. Disable is the right choice when
you intend to flip the pass back on; remove is right when you don't.

## Constructors

### Constructor

> **new RenderGraph**(`view`): `RenderGraph`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:177](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L177)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`RenderGraph`

## Accessors

### context

#### Get Signature

> **get** **context**(): [`Context3D`](Context3D.md)

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:207](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L207)

##### Returns

[`Context3D`](Context3D.md)

***

### view

#### Get Signature

> **get** **view**(): [`View3D`](View3D.md)

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:211](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L211)

##### Returns

[`View3D`](View3D.md)

***

### pool

#### Get Signature

> **get** **pool**(): [`RenderGraphResourcePool`](RenderGraphResourcePool.md)

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:215](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L215)

##### Returns

[`RenderGraphResourcePool`](RenderGraphResourcePool.md)

***

### passes

#### Get Signature

> **get** **passes**(): readonly [`RenderGraphPass`](RenderGraphPass.md)[]

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:219](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L219)

##### Returns

readonly [`RenderGraphPass`](RenderGraphPass.md)[]

## Methods

### add()

> **add**\<`C`\>(`Ctor`, ...`args`): `InstanceType`\<`C`\>

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:235](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L235)

Construct a pass and queue it for the next `compile()`. The
factory passes ctor args through to `new Ctor(...args)`; the
pass's `setup()` is NOT run here — it runs at compile time so
`add()` call order is independent of resource-dependency order.

Returns the constructed pass so callers can hold a reference if
needed — but the canonical way to reach a pass after add is
`graph.getPass<T>(name)`. Note that `pass.reads`/`writes`/
`creates` are empty arrays until the first `compile()` runs the
pass's setup.

#### Type Parameters

##### C

`C` *extends* (...`args`) => [`RenderGraphPass`](RenderGraphPass.md)

#### Parameters

##### Ctor

`C`

##### args

...`ConstructorParameters`\<`C`\>

#### Returns

`InstanceType`\<`C`\>

***

### replace()

> **replace**\<`C`\>(`name`, `Ctor`, ...`args`): `InstanceType`\<`C`\>

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:249](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L249)

Replace a pass by name. The replacement is queued for setup at
 the next `compile()` — same deferred-setup contract as `add()`.
 The old pass's `destroy()` is called immediately and any resource
 handles it owns are unregistered from the pool, but only if it
 had completed setup (otherwise it owns nothing yet).

#### Type Parameters

##### C

`C` *extends* (...`args`) => [`RenderGraphPass`](RenderGraphPass.md)

#### Parameters

##### name

`string`

##### Ctor

`C`

##### args

...`ConstructorParameters`\<`C`\>

#### Returns

`InstanceType`\<`C`\>

***

### remove()

> **remove**(`name`): `boolean`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:293](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L293)

Remove a pass by name. Idempotent — returns `false` if `name`
 isn't registered (callers can use this for unconditional
 cleanup). On a hit: `pass.destroy()` runs, every name in
 `pass.creates` is dropped from the pool, and the pass is
 unlinked from the graph. The next `compile()` rebuilds without
 it, and `UnresolvedResourceError` surfaces for any consumer that
 still references the removed pass's outputs.

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### disablePass()

> **disablePass**(`name`): `this`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:318](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L318)

Runtime kill switch. Disabled passes are treated as if they
 weren't in the graph: they don't participate in validation or
 topo sort, and they're skipped during execute. Disabling a
 producer whose output is read by another enabled pass will make
 the next `compile()` throw `UnresolvedResourceError`. Use this
 for temporary off switches you intend to flip back on; use
 [remove](#remove) for permanent removal.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### enablePass()

> **enablePass**(`name`): `this`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:328](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L328)

#### Parameters

##### name

`string`

#### Returns

`this`

***

### getPass()

> **getPass**\<`T`\>(`name`): `T`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:339](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L339)

Look up a pass by name.

#### Type Parameters

##### T

`T` *extends* [`RenderGraphPass`](RenderGraphPass.md) = [`RenderGraphPass`](RenderGraphPass.md)

#### Parameters

##### name

`string`

#### Returns

`T`

***

### beginUpdate()

> **beginUpdate**(): `this`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:352](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L352)

Open a mutation batch. `compile()` short-circuits until the
 matching `endUpdate()` runs, so a sequence of `add` / `remove` /
 `replace` / `disablePass` / `enablePass` calls produces at most
 one validation + topo sort. Pairs are reentrant: nesting two
 `beginUpdate()` calls requires two `endUpdate()` calls to flush.
 Calling `execute()` mid-batch is allowed but will run against
 the last compiled order (i.e. ignores in-flight mutations);
 flush the batch before the next frame if you want the new
 structure to take effect.

#### Returns

`this`

***

### endUpdate()

> **endUpdate**(): `this`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:360](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L360)

Close a mutation batch opened with [beginUpdate](#beginupdate). When the
 outermost batch closes, `compile()` runs if any mutation
 happened inside.

#### Returns

`this`

***

### compile()

> **compile**(): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:381](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L381)

Validate + topologically sort. Idempotent — short-circuits if
 no mutation since the last compile. Throws GraphCompileError
 subclasses on validation failure.

 Disabled passes are filtered out before validation and topo sort
 — `disable === remove` from the validator's point of view. This
 means disabling a producer whose output is read by another
 enabled pass throws `UnresolvedResourceError` here, instead of
 silently leaving the consumer with stale/zero data at execute.
 Use `remove(name)` for permanent removal; use `disablePass(name)`
 + matching `disablePass` on every reader for a temporary off
 switch.

#### Returns

`void`

***

### execute()

> **execute**(`occlusion`, `frameIndex`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:462](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L462)

Run one frame. Lazy-compiles on first call (or after a
 mutation). Disabled passes are skipped. In dev mode each
 execute is wrapped in a `device.pushErrorScope('validation')`
 so the offending pass name shows up next to any WebGPU error.

#### Parameters

##### occlusion

`OcclusionSystem`

##### frameIndex

`number`

#### Returns

`void`

***

### dumpDot()

> **dumpDot**(): `string`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:553](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L553)

Graphviz DOT representation of the compiled graph. Stable
 iteration order so snapshot tests can diff against a fixture.
 Edges go from the LAST writer of each resource to each reader;
 multiple mutators of the same resource appear as a chain.
 Explicit `dependencies` edges are rendered as dotted lines.

#### Returns

`string`

***

### destroy()

> **destroy**(): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:596](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L596)

Tear down all passes, the resource pool, and the device-lost
 listener. Called from RendererJob.destroy on engine dispose.

#### Returns

`void`

***

### transientStats()

> **transientStats**(): `object`

Defined in: [src/gfx/renderJob/graph/RenderGraph.ts:623](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraph.ts#L623)

Snapshot of the transient pools' current allocations + HWM stats.
Use this to monitor whether lifetime-aliasing is actually saving
memory after migrating a pass to `b.declareTexture`. The numbers
are rough estimates (4 bpp fallback for unknown formats) — useful
for ratio comparisons, not absolute accounting.

#### Returns

`object`

##### texture

> **texture**: `object`

###### texture.currentBytes

> **currentBytes**: `number`

###### texture.peakBytes

> **peakBytes**: `number`

###### texture.bucketCount

> **bucketCount**: `number`

###### texture.slotCount

> **slotCount**: `number`

##### buffer

> **buffer**: `object`

###### buffer.currentBytes

> **currentBytes**: `number`

###### buffer.peakBytes

> **peakBytes**: `number`

###### buffer.bucketCount

> **bucketCount**: `number`

###### buffer.slotCount

> **slotCount**: `number`

##### lifetimes

> **lifetimes**: `number`
