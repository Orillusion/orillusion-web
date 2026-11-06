[**@orillusion/core**](../README.md)

***

# Interface: DeformedMesh

Defined in: [src/io/raycast/MeshDeformer.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshDeformer.ts#L19)

Result of `MeshDeformer.deform`.

## Properties

### geometry

> **geometry**: [`GeometryBase`](../classes/GeometryBase.md)

Defined in: [src/io/raycast/MeshDeformer.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshDeformer.ts#L24)

CPU-only geometry holding the deformed positions/normals (shares the
source indices, uvs and sub-geometries). Reused across calls.

***

### worldSpace

> **worldSpace**: `boolean`

Defined in: [src/io/raycast/MeshDeformer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshDeformer.ts#L26)

True when positions are already in world space (skinned); false → mesh local space (morph only).
