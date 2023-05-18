# Load 3D Model
We recommend using `glTF` (Graphics Language Transmission Format) as the model loading format.

The `glTF` (Graphics Language Transmission Format) format, published by `khronos`, enables efficient transfer and loading of 3D scenes and models. The `glTF` (Graphics Language Transmission Format) compresses the size of 3D resources to reduce application file sizes and processing difficulties. For more information about `glTF`, please refer to [glTF official website](https://www.khronos.org/gltf/).
## Basic Usage
A simple [resource management](/guide/resource/Readme) module has been included in the engine, we can use [loadGltf](/api/classes/Res#loadgltf) API easily to load`gltf` or `glb` files:
```ts
let scene = new Scene3D();
// load gltf file
let data = await Engine3D.res.loadGltf('sample.gltf');
// add to scene
scene.addChild(data);
```
You can refer [GLTF Introduction](/guide/resource/gltf) for more detailed information.

## Example
Here is a simple example of loading a model:

<Demo src="/demos/getting_start/load_model.ts"></Demo>

<<< @/public/demos/getting_start/load_model.ts{30}