[**@orillusion/core**](../README.md)

***

# Interface: MeshBVHRayOptions

Defined in: [src/core/tree/bvh/MeshBVH.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L20)

Options for `MeshBVH` ray queries. Distances are along the normalized ray
direction in the geometry's local space.

## Properties

### cull?

> `optional` **cull?**: `boolean` \| [`MeshBVHCull`](../type-aliases/MeshBVHCull.md)

Defined in: [src/core/tree/bvh/MeshBVH.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L22)

Faces to ignore; `true` means `'back'`. Default `'none'`.

***

### near?

> `optional` **near?**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L24)

Ignore hits closer than this. Default 0.

***

### far?

> `optional` **far?**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L26)

Ignore hits farther than this. Default Infinity.
