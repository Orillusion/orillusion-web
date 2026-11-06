[**@orillusion/core**](../README.md)

***

# Type Alias: MeshBVHCull

> **MeshBVHCull** = `"none"` \| `"back"` \| `"front"`

Defined in: [src/core/tree/bvh/MeshBVH.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L13)

Which triangle faces a ray query ignores. Front faces are counter-clockwise
as seen from the ray origin (the engine's default `frontFace: 'ccw'`).
- `none`: hit both sides
- `back`: skip back faces (what a `cullMode: 'back'` material shows)
- `front`: skip front faces (what a `cullMode: 'front'` material shows)
