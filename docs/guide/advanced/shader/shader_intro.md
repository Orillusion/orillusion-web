# WebGPU Shader

This chapter mainly introduces how to use the `wgsl` language to write `orillusion` shader code and considerations.

Similar to mainstream 3D engines, the`MeshRender` 渲in the  `orillusion` rendering module can have multiple materials, and each material can define multiple rendering channels. During a rendering task, the engine outputs different results according to the rules based on the material type, rendering channel type, and priority.

## Shader Classification
In `Orillusion` , `shader` can be divided into two categories, each with a different purpose and usage:

- [RenderShader](./shader_material.md) - `shader` program used for vertex shading and fragment shading stages
- [ComputeShader](./shader_compute.md) - `shader` program used for general-purpose computing on the GPU outside of the conventional graphics pipeline

 