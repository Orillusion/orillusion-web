# Scene3D

`Scene3D` is inherited from `Object3D` and has the same properties and methods as `Object3D`. The difference is that `Scene3D` is the engine's rendering root node and is the highest level of the scene tree. All nodes that need to be rendered must be added to `Scene3D` or to a child node of `Scene3D`.

![Scene3D](/images/Scene3D.svg)  

Main functions of `Scene3D`:
1. `Scene3D` defines the skybox and environment light map of the scene.
2. `Scene3D` can be used to control and manage the nodes in the scene tree, such as: adding, deleting, and finding nodes.


## Basic Usage
```ts
let engine = await Engine3D.init();
// Create a scene
let scene = new Scene3D();
// Add a node
let obj = new Object3D();
scene.addChild(obj);
// Add a camera node
let cameraObj = new Object3D();
let camera = cameraObj.addComponent(Camera3D);
scene.addChild(cameraObj);

// Start rendering
let view = new View3D();
view.scene = scene;
view.camera = camera;
engine.startRenderView(view);

// Remove a node
scene.removeChild(obj);
```

## Atmospheric Skybox
You can use the [AtmosphericComponent](/api/classes/AtmosphericComponent.md) component to create an atmospheric scattering skybox:
```ts
// Add the atmospheric skybox component, auto generate background and ambient light
let sky = scene3D.addComponent(AtmosphericComponent);
```
See the following example for details:
<Demo src="/demos/core/scene.ts"></Demo>

<<< @/public/demos/core/scene.ts

Use the `sunX`, `sunY`, `exposure` and other properties of the `AtmosphericComponent` component to adjust the change of the ambient light.

```ts
let sky = scene3D.addComponent(AtmosphericComponent);
sky.sunY = 0.54  // The vertical position of the sun, which can adjust the ambient light brightness
sky.exposure = 1.5; // Adjust the ambient light exposure, default value 1
sky.roughness = 0.5; // Set the skybox background blur intensity, range [0, 1], default value 0
```

### Auto Follow Light
In addition to manually setting the values of `sunX` and `sunY`, the engine also supports automatically adjusting the atmospheric ambient light position to follow the light angle in the scene.

```ts
// Directional light
let lightObj3D = new Object3D();
lightObj3D.rotationX = 46;
lightObj3D.rotationY = 62;
lightObj3D.rotationZ = 0;
let directLight = lightObj3D.addComponent(DirectLight);

let sky = scene3D.addComponent(AtmosphericComponent);
// Auto set sunX/sunY by following the directional light
sky.relativeTransform = directLight.transform
```


## Custom Skybox
If you want to customize the skybox material texture, you can add a `SkyRenderer` component to the `Scene3D` to display a custom background; at the same time, you can set the ambient light through the `envMap` property of the `Scene3D` object.

### 1. Solid Color Background and Ambient Light
You can create a solid color map to set the background and ambient light through [SolidColorSky](/api/classes/SolidColorSky):
```ts
import {Scene3D, SolidColorSky, Color, SkyRenderer} from '@orillusion/core';

let scene = new Scene3D();
// Create a solid color map
let colorSky = new SolidColorSky(new Color(0.5, 1.0, 0.8, 1))
// Add the SkyRenderer component, then set the map texture
let sky = scene.addComponent(SkyRenderer);
sky.map = colorSky;

// Set the solid color ambient light at the same time
scene.envMap = colorSky;
```

### 2. Cross Skybox
You can set the skybox by loading a [cross texture cube](/guide/graphics/texture#cross-texture-cube):
```ts
// You can load a complete cross texture cube
let textureCube = engine.res.loadTextureCube('path/to/sky.png')
// Or load 6 separate cube textures
textureCube = engine.res.loadTextureCube([
    'path/to/px.png',
    'path/to/nx.png',
    'path/to/py.png',
    'path/to/ny.png',
    'path/to/pz.png',
    'path/to/nz.png'
])
// Add the SkyRenderer component, set the map texture
let sky = scene.addComponent(SkyRenderer);
sky.map = textureCube;

// Set the ambient light
scene.envMap = textureCube;
```
> The cross skybox currently only supports `LDR` normal format images.

### 3. Equirectangular Skybox
The engine also supports setting an [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection) type skybox. We can quickly load normal `RGBA` format `LDR` images through the built-in `res`, and also support loading `RGBE` format `HDR` images:
```ts
// Normal equirectangular texture
let skyTexture = engine.res.loadLDRTextureCube('path/to/sky.png');
// HDR equirectangular texture
skyTexture = engine.res.loadHDRTextureCube('path/to/sky.hdr');

// Add the SkyRenderer component, set the map texture
let sky = scene.addComponent(SkyRenderer);
sky.map = skyTexture;

// Set the ambient light
scene.envMap = skyTexture;
```

### 4. Transparent Background
If you want to display a transparent background, hide the background by turning off the skybox component. Note that you generally also need to use a transparent [Canvas](/guide/core/engine#config-canvas) for it to take effect:

```ts
// Initialize the engine
let engine = await Engine3D.init({
    canvasConfig:{
        alpha: true, // Use a transparent Canvas configuration
        zIndex: 1
    }
});
let scene = new Scene3D();

// You can add the atmospheric skybox first to get the basic ambient light
let sky = scene3D.addComponent(AtmosphericComponent);
// Then hide the atmospheric skybox, the ambient light will not disappear
sky.enable = false
```
Of course, you can also not add an atmospheric skybox or background and directly set the ambient light:
```ts
// Set a simple white ambient light
scene.envMap = new SolidColorSky(new Color(0.75, 0.75, 0.75));
// Or load an environment map
scene.envMap = await engine.res.loadHDRTextureCube('path/to/sky.hdr');
```

See [Scene3D](/api/classes/Scene3D) for more detailed usage.
