[**@orillusion/core**](../../../README.md)

***

# VisibleLayer

Layer-mask helpers for renderable classification.

The engine treats `RenderNode.visibleLayer` as an opaque 32-bit
mask (one bit per logical layer) and does NOT assign any semantic
meaning to specific bits — projects define their own enums to give
bits meaning. Only three universally meaningful values are
reserved here:

  - `None    = 0`          no layer membership; special renderers
                           (Sky, Reflection, Graphic3D) and
                           explicitly-hidden nodes use this.
  - `Default = 1 << 0`     bit 0; the implicit layer for any node
                           that hasn't been assigned to a project-
                           specific layer. Built-in passes accept
                           it so untouched code keeps rendering.
  - `All     = 0xFFFFFFFF` all bits set; the implicit value for
                           [RenderGraphPass.layerMask](../../../classes/RenderGraphPass.md#layermask) and
                           [Camera3D.cullingMask](../../../classes/Camera3D.md#cullingmask).

Application code should occupy bits 1..31 and leave bit 0 untouched
so untouched legacy objects (which default to `Default`) remain
rendered by any pass whose `layerMask` includes bit 0 (which `All`
does).

Visibility rule applied at pass execute time:

    (node.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

All three masks must share at least one set bit for the node to be
drawn by that pass through that camera.

## Variables

- [None](variables/None.md)
- [Default](variables/Default.md)
- [All](variables/All.md)

## Functions

- [add](functions/add.md)
- [remove](functions/remove.md)
- [has](functions/has.md)
