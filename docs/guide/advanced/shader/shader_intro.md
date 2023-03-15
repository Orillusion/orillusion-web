# WebGPU Shader

本章节主要介绍如何使用 `wgsl` 语言编写 `orillusion` 着色器代码和注意事项

与目前主流的3D引擎类似，`orillusion` 渲染模块的 `MeshRender` 中可以有多材质球，每个材质球可以定义多个渲染通道；在完成一个渲染任务期间，引擎会根据材质球类型、渲染通道的类型以及优先级按照规则对渲染输出不同的结果。

## Shader 分类
`Orillusion` 中 `shader` 可以分为两大类，每个类别的用途不同，使用方式也不同:

- [RenderShader](./shader_material.md) - 用于顶点着色和片元着色阶段的 `shader` 程序
- [ComputeShader](./shader_compute.md) - 在常规图形管线之外，在GPU上执行通用计算的 `shader` 程序

 