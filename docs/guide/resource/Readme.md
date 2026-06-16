# Resource Loading
The engine usually needs to load different resource files. In order to uniformly manage the loading and reading of all files, we have encapsulated a unified `res` resource manager on the engine instance, which makes it easy for users to load, store, and read various file resources.


## Basic Usage
```ts
// Load a 2D texture
let texture = await engine.res.loadTexture('path/to/image.png');
// Load a GLTF/GLB model
let gltf = await engine.res.loadGltf('path/to/model.gltf');
let glb = await engine.res.loadGltf('path/to/model.glb');
```

## Download Progress Callback
`res` supports a download progress callback. We can configure [LoaderFunctions](/api/types/LoaderFunctions) to listen for file loading event callbacks, which is commonly used for UI loading progress prompts:
```ts

let parser = await engine.res.loadGltf('/sample.gltf',{
  // You can customize the fetch request headers, for example to add Authorization
  headers: {
    'Authorization': 'Bearer xxxx',
    // ...
  },
  onProgress: (receivedLength:number, contentLength:number, url:string) => {
    // Listen for the download progress
  },
  onComplete: (url:string) => {
    // File download completed
  },
  onError: (e) => {
    // File loading error
  },
  onUrl: (url:string) =>{
    // You can modify the original url according to your needs and return a custom path
  }
});
```

## Texture Manager
We can store the loaded textures uniformly in the `res` resource pool and read them directly when needed, making it easy to centrally download and manage textures
```ts
// Pre-download the texture
let brdfLUTTexture = new BitmapTexture2D();
await brdfLUTTexture.load('PBR/BRDFLUT.png');
// Store uniformly
engine.res.addTexture('BRDFLUT', brdfLUTTexture);
// Retrieve when needed
let brdfLUTTexture = engine.res.getTexture('BRDFLUT');
```

## Material Manager
Similarly, add all kinds of materials uniformly to the material manager for easy later use
```ts
let floorMat = new LitMaterial();
engine.res.addMat('floorMat', floorMat );
// Retrieve when needed
let floorMat = engine.res.getMat('floorMat');
```

## Prefab Manager
You can also add `Object3D` nodes to the resource manager for easy searching and calling
```ts 
let box = new Object3D();
res.addPrefab('box', box);
// Retrieve when needed
let box = res.getPrefab('box');
```

## Example
<Demo :height="500" src="/demos/resource/resource.ts"></Demo>

<<< @/public/demos/resource/resource.ts



