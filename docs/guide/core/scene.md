# Scene3D

`Scene3D` is inherited from `Object3D`, which has the same properties and methods as `Object3D`. The difference is that `Scene3D` is the root node of the engine rendering, and is the highest level of the scene tree. All nodes that need to be rendered must be added to `Scene3D` or its child nodes.

![Scene3D](/images/Scene3D.svg)  

Main functions of `Scene3D`:

1. `Scene3D` defines the skybox and ambient light mapping of the scene.
2. `Scene3D` can be used to control and manage nodes in the scene tree, such as: add, delete, find nodes.

## Basic Usage
```ts
await Engine3D.init();
// Specify the size of sky box
Engine3D.setting.sky.defaultFar = 5000;
// Create a scene
let scene = new Scene3D();
// Add one object node
let obj = new Object3D();
scene.addChild(obj);
// Add a camera node
let camera = new Object3D();
camera.addComponent(Camera3D);
scene.addChild(camera);
// Start render loop
let renderJob = new ForwardRenderJob(this.scene);
Engine3D.startRender(renderJob);
// Remove the node
scene.removeChild(obj);
```

## Sky Box
By default, the engine will create an [AtmosphericScatteringSky](/api/classes/AtmosphericScatteringSky) skybox, which can set the position of the sun and other parameters by `envMap`.


<Demo src="/demos/core/scene.ts"></Demo>

<<< @/public/demos/core/scene.ts{7-13}

The engine uses skybox textures as the scene's ambient light by default. The ambient light exposure can be adjusted by the `exposure` property of the `Scene3D` object.

```ts
let scene = new Scene3D();
// Adjust the ambient light exposure (the default value is 1) 
scene.exposure = 1.5; 
```

You can customize the skybox material by updating the `envMap` property of the `Scene3D` object.
### 1. Solid Color Background
A solid color background can be created by [SolidColorSky](/api/classes/SolidColorSky):
```ts{5}
import {Scene3D, SolidColorSky, Color} from '@orillusion/core';

let scene = new Scene3D();
// Set a solid color background
scene.envMap = new SolidColorSky(new Color(0.5, 1.0, 0.8, 1));
```

### 2. Cross Sky Box
You can set skybox by loading [cross texture cube](/guide/graphics/texture#cross-texture-cube):
```ts
let textureCube = Engine3D.res.loadTextureCube('path/to/sky.png')
// Or load 6 separate cube textures
textureCube = Engine3D.res.loadTextureCube([
    'path/to/sky1.png',
    'path/to/sky2.png',
    'path/to/sky3.png',
    'path/to/sky4.png',
    'path/to/sky5.png',
    'path/to/sky6.png'
])
// Set skybox
scene.envMap = textureCube;
```
> The cross skybox currently only supports `LDR` normal format images.

### 3. Equirectangular Skybox
The engine also supports setting the [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection) skybox. We can quickly load normal `RGBA` format `LDR` images through the built-in `res`, and also support loading `RGBE` format `HDR` images:
```ts
// Normal equirectangular skybox
let skyTexture = Engine3D.res.loadLDRTextureCube('path/to/sky.png');
// HDR equirectangular skybox
skyTexture = Engine3D.res.loadHDRTextureCube('path/to/sky.hdr');
// Set skybox
scene.envMap = skyTexture;
```

### 4. Transparent Background
If you want to show a transparent background, you can call [hideSky](/api/classes/Scene3D#hidesky) to hide the skybox. Note that you also need to configure [Canvas](/guide/core/engine#config-canvas) transparent:

```ts
// Initialize the engine, use transparent Canvas configuration
await Engine3D.init({
    canvasConfig:{
        alpha: true,
        zIndex: 1
    }
});
let scene = new Scene3D();
// Hide skybox
scene.hideSky();
```


See more usage in [Scene3D](/api/classes/Scene3D)