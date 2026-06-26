[**@orillusion/core**](../README.md)

***

# Type Alias: AlphaMode

> **AlphaMode** = `"OPAQUE"` \| `"MASK"` \| `"BLEND"` \| `"HASH"`

Defined in: [src/materials/LitMaterial.ts:17](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L17)

glTF-style alpha handling for a LitMaterial.
 - OPAQUE: opaque queue, no alpha handling (default).
 - MASK:   opaque queue, hard `discard` via alphaCutoff. When the
           engine has MSAA enabled (`engine.setting.render.msaa > 0`)
           the pipeline additionally enables alpha-to-coverage for
           smooth edges (foliage, fences).
 - BLEND:  transparent queue, hardware straight-alpha blending.
