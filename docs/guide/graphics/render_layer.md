# Render Layer

The render layer (Visible Layer) is a visibility classification mechanism based on a **32-bit bitmask**: objects in the scene are tagged with "layer" marks, and then cameras or render passes filter by layer, thereby precisely controlling **which objects are drawn by which camera / which Pass**. It is commonly used in scenarios such as split-screen rendering, minimaps, mirror/reflection exclusion, UI layers, debug layers, etc.

::: tip Version Notes
The render layer system was introduced in `@orillusion/core` **0.9.0**. In this version, the former `RenderNode.renderLayer` field has been **renamed to `visibleLayer`** and moved up to the base class of all components, `ComponentBase`; at the same time, the camera adds `cullingMask`.
:::

## Core Concepts

Visibility is jointly determined by three masks. After a bitwise AND of the three, as long as any common bit is set, the object will be drawn by that camera through that Pass:

```text
(node.visibleLayer & pass.layerMask & camera.cullingMask) !== 0
```

| Mask | Location | Meaning |
| --- | --- | --- |
| `visibleLayer` | Component (`ComponentBase`, e.g. `MeshRenderer`) | Which layers the object **belongs to** |
| `cullingMask` | Camera (`Camera3D`) | Which layers the camera **can see** |
| `layerMask` | Render pass (`RenderGraphPass`) | Which layers the Pass **draws** (see [RenderGraph](/guide/advanced/rendergraph.md#controlling-pass-execution-order)) |

The engine does not assign any semantics to specific bits; **the project defines them itself**. There are only three reserved values:

| Value | Meaning |
| --- | --- |
| `VisibleLayer.None` (`0`) | Belongs to no layer. Used by special renderers (sky, reflection, Graphic3D) and "temporarily hidden" objects |
| `VisibleLayer.Default` (`1 << 0`, i.e. bit 0) | The default layer. The implicit layer of any newly created object, ensuring that objects without any settings render as usual. **Convention: the application layer should not occupy bit 0** |
| `VisibleLayer.All` (`0xFFFFFFFF`) | All 32 bits. The default value of `camera.cullingMask` and `pass.layerMask` |

> The application layer should use bits 1~31 (such as `1 << 1`, `1 << 2`…), leaving bit 0 for "unassigned / legacy objects", so that unmigrated legacy code can still be drawn by the default pipeline.

## Setting the Visible Layer for an Object

`visibleLayer` is defined on the component base class `ComponentBase`, so all components such as `MeshRenderer` can set it directly:

```ts
import { Object3D, MeshRenderer, BoxGeometry, LitMaterial, VisibleLayer } from '@orillusion/core';

// Project-defined custom layers (bit 0 is already occupied by Default, start from bit 1)
const UI_LAYER = 1 << 1;
const MINIMAP_LAYER = 1 << 2;

const obj = new Object3D();
const mr = obj.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(1, 1, 1);
mr.material = new LitMaterial();

// Make this object belong to both the default layer and the minimap layer
mr.visibleLayer = VisibleLayer.Default | MINIMAP_LAYER;
```

## Camera Layer Filtering (cullingMask)

`Camera3D.cullingMask` determines which layers the camera can see, defaulting to `VisibleLayer.All` (sees everything):

```ts
import { Camera3D, VisibleLayer } from '@orillusion/core';

const camera = cameraObj.addComponent(Camera3D);
camera.perspective(60, engine.aspect, 0.1, 5000);

// Make the main camera see all layers "except the minimap layer"
camera.cullingMask = VisibleLayer.remove(VisibleLayer.All, MINIMAP_LAYER);

// Minimap camera: only sees the minimap layer
minimapCamera.cullingMask = MINIMAP_LAYER;
```

## VisibleLayer Utility Functions

`VisibleLayer` provides a set of pure functions for bitmask operations (they do not modify the input parameters and return new values):

| Function | Description |
| --- | --- |
| `VisibleLayer.add(src, m)` | Set the bits of `m` in `src` (add a layer), returning the new mask |
| `VisibleLayer.remove(src, m)` | Clear `m` from `src` (remove a layer), returning the new mask |
| `VisibleLayer.has(src, m)` | Whether `src` and `m` have a common set bit (whether a certain layer is included) |

```ts
let mask = VisibleLayer.Default;
mask = VisibleLayer.add(mask, UI_LAYER);        // Add the UI layer
mask = VisibleLayer.remove(mask, VisibleLayer.Default); // Remove the default layer
const visible = VisibleLayer.has(mask, UI_LAYER);      // true
```

## Working with RenderGraph

In RenderGraph, each Pass has a `layerMask`, which can exclude certain layers from built-in Passes and hand them over to a custom Pass for separate drawing. This is the key to implementing "rendering a specific layer with a special pipeline". See [RenderGraph — Controlling Pass Execution Order](/guide/advanced/rendergraph.md#controlling-pass-execution-order) for details.

```ts
import { VisibleLayer, ColorPass } from '@orillusion/core';

const OVERLAY_LAYER = 1 << 3;
const graph = view.renderGraph!;

// Make the built-in ColorPass no longer draw OVERLAY_LAYER
graph.getPass<ColorPass>('ColorPass')!.layerMask =
    VisibleLayer.remove(VisibleLayer.All, OVERLAY_LAYER);
```

## Migrating from Older Versions

| Old API (0.8.x) | New API (0.9.0+) |
| --- | --- |
| `renderNode.renderLayer` | `component.visibleLayer` |
| (none) | `camera.cullingMask` |
| (none) | `VisibleLayer.None / Default / All` |
| (none) | `VisibleLayer.add / remove / has` |

## Related APIs

- [Camera3D](/api/classes/Camera3D) — `cullingMask`
- [MeshRenderer](/api/classes/MeshRenderer) — `visibleLayer` inherited from `ComponentBase`
