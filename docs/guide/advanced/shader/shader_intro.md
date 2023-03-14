# WebGPU Shader
本章节主要介绍如何使用wgsl语言编写orillusion着色器代码，和注意事项；
与目前主流的3D引擎类似，orillusion渲染模块的MeshRender中可以有多材质球，每个材质球可以定义多个渲染通道；在完成一个渲染任务期间，引擎会根据材质球类型、渲染通道的类型以及优先级按照规则对渲染输出不同的结果。

### Shader分类
Orillusion中shader可以分为两大类，每个类别的用途不同，使用方式也不同。

>1. 图形管线着色器：用于顶点着色和片元着色阶段的shader程序；
>2. 计算着色器：在常规图形管线之外，在GPU上执行通用计算的shader程序。

> 附：本章的末尾内容会着重介绍如何使用ComputeShader，展示如何一步一步的配置ComputeGPUBuffer，使用UniformGPUBuffer、StorageGPUBuffer、StructStorageGPUBuffer，然后配置ComputeShader渲染管线和创建任务，以及最终执行完所有的任务。

 