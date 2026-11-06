[**@orillusion/core**](../README.md)

***

# Type Alias: RaycastDeformation

> **RaycastDeformation** = `"cpu"` \| `"bindPose"` \| `"skip"`

Defined in: [src/io/raycast/MeshDeformer.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/io/raycast/MeshDeformer.ts#L16)

How ray queries treat meshes the GPU deforms (skinning, morph targets):
- `cpu`: deform the vertices on the CPU the way the vertex shader does,
  then intersect the result (default)
- `bindPose`: intersect the undeformed geometry
- `skip`: ignore deformed meshes
