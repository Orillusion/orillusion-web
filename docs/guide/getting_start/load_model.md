# Load a 3D Model
We recommend using `glTF` (Graphics Language Transmission Format) as the model loading format.

The `glTF` (Graphics Language Transmission Format) specification, published by `khronos`, enables efficient transfer and loading of 3D scenes and models. `glTF` (Graphics Language Transmission Format) compresses the size of 3D resources to reduce the application file size and processing difficulty. For more information about `glTF`, see the [glTF official website](https://www.khronos.org/gltf/).

## Basic Usage
A simple [resource management](/guide/resource/Readme) module is built into the engine. We can use the [loadGltf](/api/classes/Res#loadgltf) API to conveniently load `gltf` or `glb` files:
```ts
let scene = new Scene3D();
// Load the gltf file
let data = await engine.res.loadGltf('sample.gltf');
// Add to the scene
scene.addChild(data);
```
For more detailed usage, refer to the [GLTF](/guide/resource/gltf) introduction.

## Example
Here we look at a simple example of loading a model:

<Demo src="/demos/getting_start/load_model.ts"></Demo>

<<< @/public/demos/getting_start/load_model.ts{33}
