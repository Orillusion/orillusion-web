# 加载3D模型
我们推荐使用 `glTF`（Graphics Language Transmission Format）作为模型加载格式。

`glTF`（Graphics Language Transmission Format）规范由 `khronos` 发布，能够高效传输和加载 3D 场景、模型。`glTF`（Graphics Language Transmission Format）会压缩 3D 资源大小，以减少应用文件大小及处理难度。更多关于 `glTF` 的介绍请参看 [glTF官网](https://www.khronos.org/gltf/)。

## 基本使用
引擎内已经封装了简易的 [资源管理](/guide/resource/Readme) 模块，我们可以使用 [loadGltf](/api/classes/Res#loadgltf) API 很方便的加载 `gltf` 或 `glb` 文件:
```ts
let scene = new Scene3D();
// 加载 gltf 文件
let data = await Engine3D.res.loadGltf('sample.gltf');
// 添加至场景
scene.addChild(data);
```
更多详细用法，请参考 [GLTF](/guide/resource/gltf) 介绍

## 示例
这里我们来看一个加载模型的简单示例：

<Demo src="/demos/getting_start/load_model.ts"></Demo>

<<< @/public/demos/getting_start/load_model.ts{30}