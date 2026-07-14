[**@orillusion/core**](../README.md)

***

# Class: RenderShaderCollect

Defined in: [src/gfx/renderJob/collect/RenderShaderCollect.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L15)

Per-view registry of renderable nodes indexed by their shader passes.
Groups RenderNodes by geometry+pass key so the renderer can
batch draws that share the same pipeline, and keeps a flat per-view
node lookup by instance id.

## Constructors

### Constructor

> **new RenderShaderCollect**(): `RenderShaderCollect`

#### Returns

`RenderShaderCollect`

## Properties

### renderShaderUpdateList

> **renderShaderUpdateList**: `Map`\<[`View3D`](View3D.md), [`RenderShaderList`](../type-aliases/RenderShaderList.md)\>

Defined in: [src/gfx/renderJob/collect/RenderShaderCollect.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L17)

Per-view map of `geometry+pass` key to the nodes drawn with that pass.

***

### renderNodeList

> **renderNodeList**: `Map`\<[`View3D`](View3D.md), `Map`\<`string`, `RenderNode`\>\>

Defined in: [src/gfx/renderJob/collect/RenderShaderCollect.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L19)

Per-view flat lookup of every render node by its instance id.

## Methods

### collect\_add()

> **collect\_add**(`node`): `void`

Defined in: [src/gfx/renderJob/collect/RenderShaderCollect.ts:22](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L22)

Register `node` (and all its material passes) into this view's render lists.

#### Parameters

##### node

`RenderNode`

#### Returns

`void`

***

### collect\_remove()

> **collect\_remove**(`node`): `void`

Defined in: [src/gfx/renderJob/collect/RenderShaderCollect.ts:55](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L55)

Remove `node`'s per-pass entries from this view's render lists.

#### Parameters

##### node

`RenderNode`

#### Returns

`void`

***

### removeView()

> **removeView**(`view`): `void`

Defined in: [src/gfx/renderJob/collect/RenderShaderCollect.ts:73](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L73)

Drop all entries for `view` (called on view/engine teardown).

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`
