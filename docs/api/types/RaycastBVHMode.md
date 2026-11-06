[**@orillusion/core**](../README.md)

***

# Type Alias: RaycastBVHMode

> **RaycastBVHMode** = `"auto"` \| `"always"` \| `"never"`

Defined in: [src/io/raycast/MeshRaycast.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L20)

When a ray query uses a geometry's `MeshBVH`:
- `auto`: when one has been built (`MeshBVH.build` / `MeshBVH.get`),
  otherwise test every triangle
- `always`: build one on first use
- `never`: always test every triangle
