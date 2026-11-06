[**@orillusion/core**](../README.md)

***

# Interface: RaycastHit

Defined in: [src/io/raycast/RaycastHit.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L12)

One ray/triangle intersection reported by `Raycaster` (and, mapped onto
`HitInfo`, by `MeshColliderShape`). Every result is a new object owned by
the caller.

## Properties

### distance

> **distance**: `number`

Defined in: [src/io/raycast/RaycastHit.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L14)

World-space distance from the ray origin to `point`.

***

### point

> **point**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/io/raycast/RaycastHit.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L16)

Hit point in world space.

***

### localPoint

> **localPoint**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/io/raycast/RaycastHit.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L18)

Hit point in the mesh's local space.

***

### normal

> **normal**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/io/raycast/RaycastHit.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L24)

World-space surface normal: the barycentric interpolation of the
vertex normals, or `faceNormal` when the geometry has none. Not
flipped towards the ray for back-face hits.

***

### faceNormal

> **faceNormal**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/io/raycast/RaycastHit.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L26)

World-space geometric normal of the hit triangle (from its winding).

***

### faceIndex

> **faceIndex**: `number`

Defined in: [src/io/raycast/RaycastHit.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L28)

Triangle index into the index buffer (`indices[faceIndex*3 .. +2]`).

***

### barycentric

> **barycentric**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/io/raycast/RaycastHit.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L30)

Barycentric weights (w0, w1, w2) of the triangle's three vertices.

***

### frontFace

> **frontFace**: `boolean`

Defined in: [src/io/raycast/RaycastHit.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L32)

Whether the ray hit the triangle's front (counter-clockwise, as rendered) side.

***

### uv

> **uv**: [`Vector2`](../classes/Vector2.md)

Defined in: [src/io/raycast/RaycastHit.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L34)

Interpolated `uv` (TEXCOORD_0), or null when the geometry has none.

***

### uv1

> **uv1**: [`Vector2`](../classes/Vector2.md)

Defined in: [src/io/raycast/RaycastHit.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L36)

Interpolated `TEXCOORD_1`, or null when the geometry has none.

***

### subGeometryIndex

> **subGeometryIndex**: `number`

Defined in: [src/io/raycast/RaycastHit.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L38)

Sub-geometry of the triangle; the renderer draws it with `materials[subGeometryIndex]`.

***

### object3D

> **object3D**: [`Object3D`](../classes/Object3D.md)

Defined in: [src/io/raycast/RaycastHit.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L40)

Object that owns the mesh (null for a bare geometry query).

***

### renderer

> **renderer**: [`MeshRenderer`](../classes/MeshRenderer.md)

Defined in: [src/io/raycast/RaycastHit.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/RaycastHit.ts#L42)

Renderer that was hit (null for a bare geometry query).
