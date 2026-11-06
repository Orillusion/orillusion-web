[**@orillusion/core**](../README.md)

***

# Interface: MaterialVariantBinding

Defined in: [src/components/renderer/MaterialVariants.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MaterialVariants.ts#L9)

One renderer's participation in the variant set: the material it was
authored with, and the material to use for each variant index that maps it.

## Properties

### renderer

> **renderer**: `object`

Defined in: [src/components/renderer/MaterialVariants.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MaterialVariants.ts#L11)

A `MeshRenderer` / `SkinnedMeshRenderer2` — anything with a `material` property.

#### material

> **material**: [`Material`](../classes/Material.md)

***

### original

> **original**: [`Material`](../classes/Material.md)

Defined in: [src/components/renderer/MaterialVariants.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MaterialVariants.ts#L13)

Material used when no variant (or a variant that does not mention this primitive) is active.

***

### byVariant

> **byVariant**: `Map`\<`number`, [`Material`](../classes/Material.md)\>

Defined in: [src/components/renderer/MaterialVariants.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MaterialVariants.ts#L15)

Variant index → material.
