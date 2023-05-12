# Draw a Cube

In this section, we will take a quick look at the using steps of the engine through an example of drawing a cube:

<Demo src="/demos/getting_start/cube.ts"></Demo>

<<< @/public/demos/getting_start/cube.ts

## Import modules

First, we need to import the corresponding modules:

```ts
import {
    Engine3D,
    Scene3D,
    Object3D,
    Camera3D,
    ForwardRenderJob,
    LitMaterial,
    BoxGeometry,
    MeshRenderer,
    DirectLight,
    HoverCameraController
} from '@orillusion/core';
```

| Modules               | Description                                                                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Engine3D              | Engine3D class is the main body of the engine, including engine initialization, start rendering and other core methods                                  |
| Scene3D               | By creating a new Scene3D class, you can create a instance scene, which is usually used as the root node in the program                                 |
| Object3D              | The Object3D class defines an object for object(things) that contains common object(things) properties such as position, rotation, and other parameters |
| Camera3D              | By creating a new Camera3D class you can create an instance of the camera 3D component, which can be added to the scene as a camera node                |
| ForwardRenderJob      | Forward rendering operations, providing forward rendering methods for the engine                                                                        |
| LitMaterial           | The LitMaterial class allows you to create material instances and set material parameters to achieve different material effects.                        |
| BoxGeometry           | The BoxGeometry class allows you to create a rectangular(box) geometry                                                                                  |
| MeshRenderer          | The MeshRenderer component provids mesh object geometry rendering for objects                                                                           |
| DirectLight           | DirectLight component allows you to set the color, intensity properties and light angle of light to get the Suitable light effect                       |
| HoverCameraController | HoverCamera component allows to control camera movement around the observation point                                                                    |

## Initialize the engine

```ts
await Engine3D.init();
```

## Create new scene root-node

```ts
let scene3D = new Scene3D();
```

## Add camera controller component

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

## Add light to scene

```ts
// Create a light object
let light = new Object3D();
// Add direct light component
let component = light.addComponent(DirectLight);
// Adjust light parameters
light.rotationX = 45;
light.rotationY = 30;
component.lightColor = new Color(1.0, 0.6, 0.6, 1);
component.intensity = 2;
// Add light node to sence
scene3D.addChild(light);
```

## Create a new object and Add MeshRenderer

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

## Add object to scene

```ts
scene3D.addChild(obj);
```

## Render scene

```ts
// Create forward rendering job
let renderJob = new ForwardRenderJob(scene3D);
// Start rendering
Engine3D.startRender(renderJob);
```