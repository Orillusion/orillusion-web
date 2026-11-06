[**@orillusion/core**](../README.md)

***

# Interface: MeshRaycastOptions

Defined in: [src/io/raycast/MeshRaycast.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L26)

Options for `MeshRaycast.intersect`. Distances are world space.

## Properties

### near?

> `optional` **near?**: `number`

Defined in: [src/io/raycast/MeshRaycast.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L28)

Ignore hits closer than this. Default 0.

***

### far?

> `optional` **far?**: `number`

Defined in: [src/io/raycast/MeshRaycast.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L30)

Ignore hits farther than this. Default Infinity.

***

### cull?

> `optional` **cull?**: `boolean` \| [`MeshBVHCull`](../type-aliases/MeshBVHCull.md)

Defined in: [src/io/raycast/MeshRaycast.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L35)

Faces to ignore, as they appear in the world (a mirroring transform
flips the local winding; that is accounted for). Default `'none'`.

***

### useBVH?

> `optional` **useBVH?**: [`RaycastBVHMode`](../type-aliases/RaycastBVHMode.md)

Defined in: [src/io/raycast/MeshRaycast.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L37)

Default `'auto'`.

***

### all?

> `optional` **all?**: `boolean`

Defined in: [src/io/raycast/MeshRaycast.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L39)

Report every hit instead of only the closest. Default false.

***

### deformation?

> `optional` **deformation?**: [`RaycastDeformation`](../type-aliases/RaycastDeformation.md)

Defined in: [src/io/raycast/MeshRaycast.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L41)

How skinned / morphed renderers are handled by `intersectRenderer`. Default `'cpu'`.

***

### accept?

> `optional` **accept?**: (`hit`, `frontFace`) => `boolean`

Defined in: [src/io/raycast/MeshRaycast.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshRaycast.ts#L46)

Per-hit predicate, given the local hit and whether it is a front face
in world space. Rejected hits do not hide hits behind them.

#### Parameters

##### hit

[`MeshBVHHit`](MeshBVHHit.md)

##### frontFace

`boolean`

#### Returns

`boolean`
