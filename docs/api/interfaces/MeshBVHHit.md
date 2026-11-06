[**@orillusion/core**](../README.md)

***

# Interface: MeshBVHHit

Defined in: [src/core/tree/bvh/MeshBVH.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L34)

Result of a `MeshBVH` ray query. All values are in the geometry's local
space; `t` is the distance along the (normalized) ray direction.

## Properties

### t

> **t**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L36)

Distance along the ray.

***

### triIndex

> **triIndex**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L38)

Triangle index into the index buffer (`indices[triIndex*3 .. +2]`).

***

### u

> **u**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L40)

Barycentric weight of vertex 1 (v0 gets `1-u-v`).

***

### v

> **v**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L42)

Barycentric weight of vertex 2.

***

### point

> **point**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/core/tree/bvh/MeshBVH.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L44)

Hit point in local space.

***

### faceNormal

> **faceNormal**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/core/tree/bvh/MeshBVH.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L46)

Geometric (face) normal in local space, unit length, from the triangle winding.

***

### frontFace

> **frontFace**: `boolean`

Defined in: [src/core/tree/bvh/MeshBVH.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L48)

Whether the ray hit the front (counter-clockwise) side of the triangle.

***

### subGeometryIndex

> **subGeometryIndex**: `number`

Defined in: [src/core/tree/bvh/MeshBVH.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/bvh/MeshBVH.ts#L50)

Index of the `SubGeometry` (and so the renderer material) the triangle belongs to.
