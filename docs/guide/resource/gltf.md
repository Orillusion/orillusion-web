# GLTF
## What is glTF?
`glTF(GL Transmission Format)` is a specification released by [khronos](https://www.khronos.org/gltf) that enables efficient transmission and loading of 3D scenes. It is the `JPEG` format of the 3D field. Its features cover traditional model formats such as `FBX` and `OBJ`, and it basically supports all the features in a 3D scene. Its plugin mechanism also allows users to flexibly customize and implement the desired functions.
`glTF` is currently the preferred 3D scene transmission format recommended by `Orillusion`. `Orillusion` provides excellent support for the core features and plugins of `glTF`.

## Loading glTF
Use [engine.res.loadGltf](/api/classes/Res#loadgltf) to load a `gltf` model. This method optimizes the handling of `gltf/glb` files and allows for direct addition of objects:
```ts
let scene = new Scene3D();
// Load the gltf file
let data = await engine.res.loadGltf('sample.gltf');
// Add to the scene
scene.addChild(data);
```

## Plugin Support
Currently, the following `glTF` plugins are supported. If the `glTF` file contains the corresponding plugins, the corresponding features will be loaded automatically:
| Plugin | Feature |
| --- | --- |
| KHRdracomesh_compression | Supports Draco compression, which can effectively reduce model size |
| KHRlightspunctual | Supports combinations of multiple light sources, which will be parsed into the engine's light sources. See the [Lighting Tutorial](/guide/graphics/lighting) for details |
| KHRmaterialspbrSpecularGlossiness | Supports the `PBR` specular-glossiness workflow |
| KHRmaterialsunlit | Supports `Unlit` materials |
| KHRmaterialsvariants | Allows the renderer to have multiple materials, then switch materials through the `setMaterial` interface |
| KHRmeshquantization | Supports vertex data compression to save video memory. For example, vertex data is generally floating-point numbers, and this plugin allows them to be stored as integers |
| KHRtexturetransform | Supports scaling and displacement transformation of textures |
| KHR_lights_punctual | Supports extended lights, including `direction light`, `point light`, and `spot light` |
