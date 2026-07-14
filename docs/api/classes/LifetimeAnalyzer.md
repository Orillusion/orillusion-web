[**@orillusion/core**](../README.md)

***

# Class: LifetimeAnalyzer

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:58](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L58)

Compile-time lifetime analysis over the [TransientResourceRegistry](TransientResourceRegistry.md)'s
declarations and the compiled pass order. Invoked from
`RenderGraph.compile()` immediately after `topoSort`; output drives
the transient texture + buffer pools.

The analyzer walks the topo order and updates each resource's
`[firstUseIdx, lastUseIdx]` envelope from every pass's
`reads` / `writes` / `_lifetimeReads` / `_lifetimeWrites` arrays.
The `_lifetime*` arrays are populated by the typed-RT builders
(`borrowRenderTarget` etc., Phase 2) to extend a resource's
lifetime without polluting the topo edge set; Phase 0 tolerates
their absence.

## Constructors

### Constructor

> **new LifetimeAnalyzer**(): `LifetimeAnalyzer`

#### Returns

`LifetimeAnalyzer`

## Methods

### analyze()

> `static` **analyze**(`order`, `byName`, `registry`, `presentationSize`): [`ResourceLifetime`](../interfaces/ResourceLifetime.md)[]

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:68](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L68)

Analyze one compile window.

#### Parameters

##### order

readonly `string`[]

Topo-sorted pass names from [topoSort](../functions/topoSort.md).

##### byName

`ReadonlyMap`\<`string`, [`RenderGraphPass`](RenderGraphPass.md)\>

Pass lookup map.

##### registry

[`TransientResourceRegistry`](TransientResourceRegistry.md)

Per-graph transient registry populated during setup.

##### presentationSize

readonly \[`number`, `number`\]

`[width, height]` of the owning view's
  canvas. Used to resolve `'screen'` / `'screen/2'` size tokens.

#### Returns

[`ResourceLifetime`](../interfaces/ResourceLifetime.md)[]
