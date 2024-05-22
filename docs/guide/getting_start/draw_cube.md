# Draw a Cube

In this section, we will take a quick look at the using steps of the engine through an example of drawing a cube:

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

| Modules               | Description                                                                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Engine3D              | Engine3D class is the main body of the engine, including engine initialization, start rendering and other core methods                                  |
| Scene3D               | By creating a new Scene3D class, you can create a instance scene, which is usually used as the root node in the program                                 |
| Object3D              | The Object3D class defines an object for object(things) that contains common object(things) properties such as position, rotation, and other parameters |
| Camera3D              | By creating a new Camera3D class you can create an instance of the camera 3D component, which can be added to the scene as a camera node                |
| View3D                | View3D, specify the target scene and observation camera for engine rendering                                                                            |                                                                                                                                               |
| LitMaterial           | The LitMaterial class allows you to create material instances and set material parameters to achieve different material effects.                        |
| BoxGeometry           | The BoxGeometry class allows you to create a rectangular(box) geometry                                                                                  |
| MeshRenderer          | The MeshRenderer component provides mesh object geometry rendering for objects                                                                          |
| DirectLight           | DirectLight component allows you to set the color, intensity properties and light angle of light to get the Suitable light effect                       |
| HoverCameraController | HoverCamera component allows to control camera movement around the observation point                                                                    |
| AtmosphericComponent  | The built-in skybox component                                                                                                                           |

## Initialize the Engine

```ts
await Engine3D.init();
```

## Create New Scene Root-node

```ts
let scene3D = new Scene3D();
```

## Add Skybox
```ts
// Add atmospheric scattering skybox component
let sky = scene3D.addComponent(AtmosphericComponent);
```
## Add Camera Controller Component

```ts
// Create a camera object
let cameraObj = new Object3D();
let camera = cameraObj.addComponent(Camera3D);
// Set the camera perspective according to the window size
camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
// Set camera controller
let controller = camera.object3D.addComponent(HoverCameraController);
controller.setCamera(0, 0, 15);
// Add camera node to sence
scene3D.addChild(cameraObj);
```

## Add Light to Scene

```ts
// Create a light object
let light = new Object3D();
// Add direct light component
let component = light.addComponent(DirectLight);
// Adjust light parameters
light.rotationX = 45;
light.rotationY = 30;
component.intensity = 2;
// Add light node to sence
scene3D.addChild(light);
```

## Create a New Object and Add MeshRenderer

After adding the MeshRenderer to the object, we need to attach the geometry and materials to the object's MeshRenderer.

```ts
// Create a new object
const obj = new Object3D();
// Add MeshRenderer to object(obj)
let mr = obj.addComponent(MeshRenderer);
// Set geometry
mr.geometry = new BoxGeometry(5, 5, 5);
// Set material
mr.material = new LitMaterial();
```

## Add Object to Scene

```ts
scene3D.addChild(obj);
```

## Render Scene

```ts
// Create View3D object
let view = new View3D();
// Specify the scene to render
view.scene = scene3D;
// Specify the camera to use
view.camera = camera;
// Start rendering
Engine3D.startRenderView(view);
```
