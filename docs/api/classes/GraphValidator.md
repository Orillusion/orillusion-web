[**@orillusion/core**](../README.md)

***

# Class: GraphValidator

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:113](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L113)

Static graph invariants enforcer. Called by `RenderGraph.compile`;
factored out so unit tests can exercise validation without GPU.

## Constructors

### Constructor

> **new GraphValidator**(`passes`): `GraphValidator`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:124](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L124)

#### Parameters

##### passes

readonly [`RenderGraphPass`](RenderGraphPass.md)[]

#### Returns

`GraphValidator`

## Methods

### validateSingleCreator()

> **validateSingleCreator**(): `void`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:149](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L149)

Each name must have at most one creator. Mutator-only resources
 (no creator) are caught by validateResolvable.

#### Returns

`void`

***

### validateResolvable()

> **validateResolvable**(): `void`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:159](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L159)

Every read and every mutator-write must point to a resource
 with a creator.

#### Returns

`void`
