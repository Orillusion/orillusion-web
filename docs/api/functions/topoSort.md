[**@orillusion/core**](../README.md)

***

# Function: topoSort()

> **topoSort**(`passes`, `byName`, `insertedOrder`): `string`[]

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:215](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L215)

Kahn-style topological sort on the reads/writes DAG. Tie-breaks
between equally-ready passes use **effective scheduling order**:
  - A pass with no explicit `dependencies` keeps its original
    `insertedOrder` as its key (the order of `graph.add()`).
  - A pass with explicit `dependencies` is shifted to sit just
    after its latest explicit dep — so `b.dependsOn(X)` reads as
    "schedule me with X", not merely "after X somewhere". A late-
    added pass that depends on an early one therefore pops from
    the ready queue immediately after its dep, ahead of unrelated
    passes that happen to have lower insertion order.

Together with the resource and `dependencies` edges this fully
determines the schedule: same input → same output.

Multi-writer support:
- Writers of the same resource are ordered by insertion.
- Each subsequent writer has an incoming edge from the previous
  writer (mutator after creator).
- Each reader has an incoming edge from the LATEST writer whose
  insertion is at-or-before the reader's. This lets a reader
  sandwich between creator and a later mutator sample the
  creator's output (e.g. SceneColorPyramidPass reads the opaque-
  only ColorBuffer before SortedTransparentPass blends transparents
  on top — provided the pyramid was added after ColorPass and
  before SortedTransparentPass).

Side-effect ordering uses [RenderGraphPass.dependencies](../classes/RenderGraphPass.md#dependencies)
(set via `b.dependsOn(name)` or direct field assignment) for
cases the graph can't infer from reads/writes — see the field's
docstring for examples. Resource-derived reader/writer edges do
NOT participate in the effective-order shift: they're frequently
long-range (a final GUI pass reads FINAL_COLOR), and shifting on
every read edge would defeat insertion-order scheduling entirely.

Returns the ordered pass names; throws [CyclicDependencyError](../classes/CyclicDependencyError.md)
with the cycle path if a cycle is detected.

## Parameters

### passes

readonly [`RenderGraphPass`](../classes/RenderGraphPass.md)[]

### byName

`ReadonlyMap`\<`string`, [`RenderGraphPass`](../classes/RenderGraphPass.md)\>

### insertedOrder

(`p`) => `number`

## Returns

`string`[]
