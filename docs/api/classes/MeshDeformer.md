[**@orillusion/core**](../README.md)

***

# Class: MeshDeformer

Defined in: [src/io/raycast/MeshDeformer.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshDeformer.ts#L110)

CPU replica of the vertex-shader deformation (morph targets, then
skinning) used by ray queries, so picks match what is drawn.

Skinning reads each bone's current world matrix from the same global
matrix slot the shader reads (`models.matrix[...]`), multiplies by the
skin's inverse bind matrix and blends with `joints0/weights0` (and
`joints1/weights1`), producing world-space positions exactly as the
shader's `getSkeletonWorldMatrix_*`. Morphing applies
`position * baseInfluence + Σ influence_i * a_morphPositions_i`.

Results are cached per renderer and recomputed only when the skinning
matrices or morph weights changed; the cost is O(vertices) per change.
Normals are deformed with the blended matrix (exact for rotation and
uniform scale).

## Constructors

### Constructor

> **new MeshDeformer**(): `MeshDeformer`

#### Returns

`MeshDeformer`

## Methods

### isDeformed()

> `static` **isDeformed**(`renderer`): `boolean`

Defined in: [src/io/raycast/MeshDeformer.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshDeformer.ts#L114)

Whether the GPU currently deforms this renderer's geometry (bound skin, or non-trivial morph weights).

#### Parameters

##### renderer

[`MeshRenderer`](MeshRenderer.md)

#### Returns

`boolean`

***

### deform()

> `static` **deform**(`renderer`): [`DeformedMesh`](../interfaces/DeformedMesh.md)

Defined in: [src/io/raycast/MeshDeformer.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshDeformer.ts#L122)

Deform the renderer's geometry as the vertex shader does and return the
cached CPU geometry, or null when nothing deforms it.

#### Parameters

##### renderer

[`MeshRenderer`](MeshRenderer.md)

#### Returns

[`DeformedMesh`](../interfaces/DeformedMesh.md)
