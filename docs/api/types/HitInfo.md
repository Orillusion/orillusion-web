[**@orillusion/core**](../README.md)

***

# Type Alias: HitInfo

> **HitInfo** = `object`

Defined in: [src/components/shape/ColliderShape.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L13)

Result of `ColliderShape.rayPick`. `intersectPoint`, `normal` and
`distance` are in world space (distance is measured from the world ray
origin), so hits from different shapes and transforms can be compared.

## Properties

### intersectPoint?

> `optional` **intersectPoint?**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L15)

Hit point in world space.

***

### normal?

> `optional` **normal?**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L17)

Surface normal in world space (unit length).

***

### distance

> **distance**: `number`

Defined in: [src/components/shape/ColliderShape.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L19)

World-space distance from the ray origin to `intersectPoint`.

***

### collider?

> `optional` **collider?**: [`ColliderComponent`](../classes/ColliderComponent.md)

Defined in: [src/components/shape/ColliderShape.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L21)

Collider that produced the hit (filled in by the caller).

***

### localPoint?

> `optional` **localPoint?**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L23)

Hit point in the collider's local space.

***

### faceNormal?

> `optional` **faceNormal?**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L25)

Mesh colliders: geometric normal of the hit triangle (world space).

***

### faceIndex?

> `optional` **faceIndex?**: `number`

Defined in: [src/components/shape/ColliderShape.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L27)

Mesh colliders: triangle index into the index buffer.

***

### barycentric?

> `optional` **barycentric?**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L29)

Mesh colliders: barycentric weights (w0, w1, w2) of the hit triangle.

***

### uv?

> `optional` **uv?**: [`Vector2`](../classes/Vector2.md)

Defined in: [src/components/shape/ColliderShape.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L31)

Mesh colliders: interpolated `uv` (TEXCOORD_0), if the geometry has one.

***

### uv1?

> `optional` **uv1?**: [`Vector2`](../classes/Vector2.md)

Defined in: [src/components/shape/ColliderShape.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L33)

Mesh colliders: interpolated `TEXCOORD_1`, if the geometry has one.

***

### subGeometryIndex?

> `optional` **subGeometryIndex?**: `number`

Defined in: [src/components/shape/ColliderShape.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L35)

Mesh colliders: sub-geometry (material slot) of the hit triangle.

***

### frontFace?

> `optional` **frontFace?**: `boolean`

Defined in: [src/components/shape/ColliderShape.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L37)

Mesh colliders: whether the front (counter-clockwise) side was hit.
