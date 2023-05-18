# GLTF
## What is glTF?
`glTF(GL Transmission Format)`  is a specification released by [khronos](https://www.khronos.org/gltf)  that enables efficient transmission and loading of 3D scenes. It is a `JPEG` format in the 3D field, covering traditional model formats such as `FBX` and `OBJ` . It basically supports all features in 3D scenes, and its plugin mechanism also allows users to flexibly customize and implement the desired functions.
`GlTF` is currently the preferred 3D scene transmission format recommended by `Orillusion` , and `Orillusion` provides excellent support for the core functions and plugins of `glTF` .

## Load glTF
Using [Engine3D.res.loadGltf](/api/classes/Res#loadgltf) to load the `gltf` model, this method optimizes the `gltf/glb` file and allows for direct addition of objects:
```ts
let scene = new Scene3D();
// Load gltf file
let data = await Engine3D.res.loadGltf('sample.gltf');
// Add to scene
scene.addChild(data);
```

## Plugin support
Currently, the following `glTF` plugins are supported. If the `glTF` file contains the corresponding plugins, the corresponding functions will be automatically loaded:
| Plugins | Features |
| --- | --- |
| KHRdracomesh_compression | Support Draco compression, which can effectively save model volume |
| KHRlightspunctual | Supports multiple light source combinations, which will be resolved into engine light sources. Please refer to the [Lighting Tutorial](/guide/graphics/lighting) |
| KHRmaterialspbrSpecularGlossiness | Supports the 'PBR' highlight glossiness workflow |
| KHRmaterialsunlit | Supports  `Unlit` materials |
| KHRmaterialsvariants | Allow the renderer to have multiple materials and then switch materials through the `setMaterial` interface |
| KHRmeshquantization | Supports vertex data compression to save video memory. For example, vertex data is generally floating point numbers, which can be saved as an integer |
| KHRtexturetransform | Supports texture scaling displacement transformation |
| KHR_lights_punctual | Support for extended lighting, including `direction light` ，`point light` ， `spot light` |