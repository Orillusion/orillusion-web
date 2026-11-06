[**@orillusion/core**](../README.md)

***

# Type Alias: RaycastSide

> **RaycastSide** = `"material"` \| `"front"` \| `"back"` \| `"double"`

Defined in: [src/io/raycast/Raycaster.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/Raycaster.ts#L24)

Which faces a `Raycaster` can hit:
- `material`: whatever each sub-mesh's material renders (its `cullMode`)
- `front` / `back`: only front / only back faces
- `double`: both
