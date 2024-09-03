# Scene3D

`Scene3D` is inherited from `Object3D`, which has the same properties and methods as `Object3D`. The difference is that `Scene3D` is the root node of the engine rendering, and is the highest level of the scene tree. All nodes that need to be rendered must be added to `Scene3D` or its child nodes.

![Scene3D](/images/Scene3D.svg)  

Main functions of `Scene3D`:

1. `Scene3D` defines the skybox and ambient light mapping of the scene.
2. `Scene3D` can be used to control and manage nodes in the scene tree, such as: add, delete, find nodes.

## Basic Usage
```ts
await Engine3D.init();
// Create a scene
let scene = new Scene3D();
// Add one object node
let obj = new Object3D();
scene.addChild(obj);
// Add a camera node
let cameraObj = new Object3D();
let camera = cameraObj.addComponent(Camera3D);
scene.addChild(cameraObj);
// Start render loop
let view = new View3D();
view.scene = scene;
view.camera = camera;
Engine3D.startRenderView(view);
// Remove the node
scene.removeChild(obj);
```

## Atmospheric Skybox
You can use [AtmosphericComponent](/api/classes/AtmosphericComponent.md) component to set the atmospheric sky box of the scene.
```ts
// Add an Atmospheric Skybox, auto generate background and enviroment light
let sky = scene3D.addComponent(AtmosphericComponent);
```
See the following example for details:
<Demo src="/demos/core/scene.ts"></Demo>

<<< @/public/demos/core/scene.ts

Use the `sunX`,`sunY`,`exposure` properties of the `AtmosphericComponent` to adjust the change of ambient light.

```ts
let sky = scene3D.addComponent(AtmosphericComponent);
sky.sunY = 0.54 // The vertical position of the sun, you can adjust the ambient light brightness
sky.exposure = 1.5; // Adjust the ambient light exposure, default value 1
sky.roughness = 0.5; // Set Sky box background blur intensity, range [0, 1], default value 0
```

### Auto Transform
In addition to manually setting the values of `sunX` and `sunY`, the engine also supports automatic adjustment of the atmospheric ambient light position according to the light angle in the scene.

```ts
// create a Directional Light
let lightObj3D = new Object3D();
lightObj3D.rotationX = 46;
lightObj3D.rotationY = 62;
lightObj3D.rotationZ = 0;
let directLight = lightObj3D.addComponent(DirectLight);

let sky = scene3D.addComponent(AtmosphericComponent);
// auto change sunX/sunY based on directLight rotation
sky.relativeTransform = directLight.transform
```

## Custom Skybox
If you want to customize the skybox material texture, you can add the `SkyRenderer` component to the `Scene3D` to display the custom background; at the same time, you can set the ambient light through the `envMap` property of the `Scene3D` object.


### 1. Solid Color Background and Ambient Light
A solid color background and ambient light can be created by [SolidColorSky](/api/classes/SolidColorSky):
```ts
import {Scene3D, SolidColorSky, Color, SkyRenderer} from '@orillusion/core';

let scene = new Scene3D();
// Create a solid color map
let colorSky = new SolidColorSky(new Color(0.5, 1.0, 0.8, 1))
// Add SkyRenderer component, then set map texture
let sky = scene.addComponent(SkyRenderer);
sky.map = colorSky;

// Set monochrome ambient light at the same time
scene.envMap = colorSky;
```

### 2. Cross Skybox
You can set skybox by loading [cross texture cube](/guide/graphics/texture#cross-texture-cube):
```ts
// Load an entire cube texture
let textureCube = Engine3D.res.loadTextureCube('path/to/sky.png')
// Or load 6 separate cube textures
textureCube = Engine3D.res.loadTextureCube([
    'path/to/px.png',
    'path/to/nx.png',
    'path/to/py.png',
    'path/to/ny.png',
    'path/to/pz.png',
    'path/to/nz.png'
])
// Add SkyRenderer component, then set map texture
let sky = scene.addComponent(SkyRenderer);
sky.map = textureCube;

// Set ambient light
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

// Add SkyRenderer component, then set map texture
let sky = scene.addComponent(SkyRenderer);
sky.map = skyTexture;

// Set ambient light
scene.envMap = skyTexture;
```

### 4. Transparent Background
If you want to display a transparent background, you can hide the background by turning off the skybox component. Note that you generally need to use a transparent [Canvas](/guide/core/engine#config-canvas) to take effect:

```ts
// Initialize the engine
await Engine3D.init({
    canvasConfig:{
        alpha: true, //use transparent Canvas configuration
        zIndex: 1
    }
});
let scene = new Scene3D();

// Add the atmospheric skybox first to get the basic ambient light
let sky = scene3D.addComponent(AtmosphericComponent);
// Then hide the atmospheric skybox, the ambient light will not disappear
sky.enable = false
```
Of course, you can also not add an atmospheric skybox or background, and directly set the ambient light:
```ts
// Set a simple white ambient light
scene.envMap = new SolidColorSky(new Color(0.75, 0.75, 0.75));
// Or load the environment map
scene.envMap = await Engine3D.res.loadHDRTextureCube('path/to/sky.hdr');
```


See more usage in [Scene3D](/api/classes/Scene3D)