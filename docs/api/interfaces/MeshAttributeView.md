[**@orillusion/core**](../README.md)

***

# Interface: MeshAttributeView

Defined in: [src/core/tree/bvh/MeshBVH.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L59)

Strided view of one vertex attribute: component `k` of vertex `i` is
`data[i * stride + offset + k]`. Covers both split attributes and the
interleaved `all` buffer of `compose_bin` (prefab) geometry.

## Properties

### data

> **data**: `ArrayLike`\<`number`\>

Defined in: [src/core/tree/bvh/MeshBVH.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L60)

***

### stride

> **stride**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L61)

***

### offset

> **offset**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L62)
