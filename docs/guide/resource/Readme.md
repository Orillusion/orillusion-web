# Resource Loading
Engines usually need to load different resource files. To manage the loading and reading of all files uniformly, we have encapsulated a unified `res` resource manager in `Engine3D` that makes it easy for users to load, store, and read various file resources.


## Basic Usage
```ts
// Load 2D texture
let texture = await Engine3D.res.loadTexture('path/to/image.png');
// Load GLTF/GLB model
let gltf = await Engine3D.res.loadGltf('path/to/model.gltf');
let glb = await Engine3D.res.loadGltf('path/to/model.glb');
```

## Download Progress Callback
`Res` supports a download progress callback, which can be configured with [LoaderFunctions](/api/types/LoaderFunctions) to listen for file loading events callbacks, commonly used for UI loading progress prompts:
```ts

let parser = await Engine3D.res.loadGltf('/sample.gltf',{
  onProgress: (receivedLength:number, contentLength:number, url:string) => {
    // Listen to download progress
  },
  onComplete: (url:string) => {
    // File download completed
  },
  onError: (e) => {
    // File loading error
  },
  onUrl: (url:string) =>{
    // Can modify the original url according to the requirement and return a custom path
  }
});
```

## Texture Manager
We can store the loaded textures uniformly in the `res` resource pool, and read them directly when needed, making it easy to centrally download and manage textures.
```ts
// Pre-download textures
let brdfLUTTexture = new BitmapTexture2D();
await brdfLUTTexture.load('PBR/BRDFLUT.png');
// Uniform storage
Engine3D.res.addTexture('BRDFLUT', brdfLUTTexture);
// Take out when needed
let brdfLUTTexture = Engine3D.res.getTexture('BRDFLUT');
```

## Material Manager
Similarly, add all kinds of materials to the material manager uniformly for later use.
```ts
let floorMat = new LitMaterial();
Engine3D.res.addMat('floorMat', floorMat );
// Take out when needed
let floorMat = Engine3D.res.getMat('floorMat');
```

## Prefab Manager
We can also add `Object3D` nodes to the resource management for easy searching and calling.
```ts 
let box = new Object3D();
res.addPrefab('box', box);
// Take out when needed
let box = res.getPrefab('box');
```

## Example
<Demo :height="500" src="/demos/resource/resource.ts"></Demo>

<<< @/public/demos/resource/resource.ts



