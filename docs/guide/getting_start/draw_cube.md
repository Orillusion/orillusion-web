# Draw a Cube
In this section, we will take a quick look at how to use the engine through an example of drawing a cube:

<Demo src="/demos/getting_start/cube.ts"></Demo>

<<< @/public/demos/getting_start/cube.ts

## Import Modules
First, we need to import the corresponding modules:
```ts
import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  View3D,
  LitMaterial,
  BoxGeometry,
  MeshRenderer,
  DirectLight,
  HoverCameraController,
  AtmosphericComponent
} from '@orillusion/core';
```
| Module | Description |
| --- | --- |
| Engine3D | The Engine3D class is the main body of the engine, containing core methods such as engine initialization and startup, running and rendering |
| Scene3D | By creating a new Scene3D class you can create a scene instance, which is usually used as the root node in the program |
| Object3D | The Object3D class defines an object that contains common object properties such as position, rotation, and other parameters |
| Camera3D | By creating a new Camera3D class you can create an instance of a 3D camera component, which can be added to the scene as a camera node |
| View3D | View3D, specifies the target scene and observation camera for engine rendering |
| LitMaterial | The LitMaterial class allows you to create material instances and achieve different material effects by setting material parameters |
| BoxGeometry | The BoxGeometry class allows you to create a cuboid geometry |
| MeshRenderer | The MeshRenderer component provides mesh object geometry rendering for objects |
| DirectLight | The directional light component allows you to set the color, intensity properties and lighting angle of the directional light to achieve a suitable lighting effect |
| HoverCameraController | The hover camera component allows you to control camera movement around the observation point |
| AtmosphericComponent | The engine's built-in atmospheric skybox component |

## Initialize the Engine
```ts
let engine = await Engine3D.init();
```

## Create a New Scene Root Node
```ts
let scene3D = new Scene3D();
```

## Add a Skybox
```ts
// Add the atmospheric scattering sky component
let sky = scene3D.addComponent(AtmosphericComponent);
```

## Add a Camera Controller
```ts
// Create a new camera instance
let cameraObj = new Object3D();
let camera = cameraObj.addComponent(Camera3D);
// Set the camera perspective according to the window size
camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
// Set the camera controller
let controller = camera.object3D.addComponent(HoverCameraController);
controller.setCamera(0, 0, 15);
// Add the camera node
scene3D.addChild(cameraObj);
```

## Add Lighting
```ts
// Create a new light
let light = new Object3D();
// Add a directional light component
let component = light.addComponent(DirectLight);
// Adjust the lighting parameters
light.rotationX = 45;
light.rotationY = 30;
component.intensity = 2;
// Add the light object
scene3D.addChild(light);
```

## Create an Object and Add a MeshRenderer to It
After adding a MeshRenderer to the object, we need to attach the geometry and material to the object's MeshRenderer.
```ts
// Create a new object
const obj = new Object3D();
// Add a MeshRenderer to the object
let mr = obj.addComponent(MeshRenderer);
// Set the geometry
mr.geometry = new BoxGeometry(5, 5, 5);
// Set the material
mr.material = new LitMaterial();
```

## Add the Object to the Scene
```ts
scene3D.addChild(obj);
```

## Render the Scene
```ts
// Create a View3D object
let view = new View3D();
// Specify the scene to render
view.scene = scene3D;
// Specify the camera to use
view.camera = camera;
// Start rendering
engine.startRenderView(view);
```
