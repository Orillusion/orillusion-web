# GLTF
## 什么是 glTF?
`glTF(GL Transmission Format)` 是 [khronos](https://www.khronos.org/gltf) 发布的一种能高效传输和加载 3D 场景的规范，是 3D 领域中的 `JPEG` 格式，其功能涵盖了 `FBX`、`OBJ` 等传统模型格式，基本支持 3D 场景中的所有特性，其插件机制也使用户可以灵活地自定义实现想要的功能。
`glTF` 是目前 `Orillusion` 推荐的首选 3D 场景传输格式，`Orillusion` 对 `glTF` 的核心功能和插件都做了很好的支持。

## 加载 glTF
使用 [Engine3D.res.loadGltf](/api/classes/Res#loadgltf) 来加载 `gltf` 模型，该方法对 `gltf/glb` 文件做了优化处理，可以直接添加对象:
```ts
let scene = new Scene3D();
// 加载 gltf 文件
let data = await Engine3D.res.loadGltf('sample.gltf');
// 添加至场景
scene.addChild(data);
```

## 插件支持
目前支持以下 `glTF` 插件，若 `glTF` 文件中包含相应插件，则会自动加载相应功能：
| 插件 | 功能 |
| --- | --- |
| KHRdracomesh_compression | 支持 Draco 压缩，能有效节省模型体积 |
| KHRlightspunctual | 支持多光源组合，会解析成引擎的光源，详见 [光照教程](/guide/graphics/lighting) |
| KHRmaterialspbrSpecularGlossiness | 支持 `PBR`  高光-光泽度工作流 |
| KHRmaterialsunlit | 支持  `Unlit` 材质 |
| KHRmaterialsvariants | 允许渲染器存在多个材质，然后通过 `setMaterial` 接口进行材质切换 |
| KHRmeshquantization | 支持顶点数据压缩，节省显存，如顶点数据一般都是浮点数，此插件可以保存为整型 |
| KHRtexturetransform | 支持纹理的缩放位移变换 |
| KHR_lights_punctual | 支持扩展灯光，包含 `direction light` ，`point light` ， `spot light` |