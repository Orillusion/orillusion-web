# Camera

Camera is a tool for users to display or capture the virtual world, just like the eyes that observe things in the real world. All the cool images need to be rendered through the camera. At least one camera must be present in each scene to view the objects in the scene. `Orillusion` has already encapsulated the [camera types](#camera-type) and [controllers](#camera-component) commonly used, and users can also extend the function of the camera by [custom components](/guide/core/component).

## Basic Usage
```ts
import { Object3D, Scene3D, Camera3D } from '@orillusion/core'
// Initialize a scene
let scene = new Scene3D();
// Initialize a camera node
let cameraObj = new Object3D();
// Add a camera component to the node
let camera = cameraObj.addComponent(Camera3D);
// Add the camera node to scene
scene.addChild(cameraObj);

// Create 3D view
let view = new View3D();
// Fill the scene to the 3D view
view.scene = scene;
// Fill the camera to the 3D view
view.camera = camera;
// Start rendering
Engine3D.startRenderView(view);
```
If there are multiple cameras in the scene, you can manually switch the target camera through `view.camera`:
```ts
// If multiple cameras exist in the scene
let cameraObj1 = new Object3D();
let camera1 = cameraObj.addComponent(Camera3D);
let cameraObj2 = new Object3D();
let camera2 = cameraObj.addComponent(Camera3D);

// Create 3D view
let view = new View3D();
// Set the rendering scene
view.scene = scene;
// camera1 Set camera1
view.camera = camera1;
...
// Switch to use camera2 for rendering
view.camera = camera2;

```

## Camera Position
There are three ways to change the camera position:
1. By `TransForm` transformation: The position and direction angle of the camera can be manually set through the [transForm](/guide/core/transform) property of the camera node `Object3D`:
```ts
// Create a node
let cameraObj = new Object3D();
// Add a camera component to the node
let camera = cameraObj.addComponent(Camera3D);
// Set the Position or Rotation of the Object3D
cameraObj.x = 10;
cameraObj.rotateX = 90;
...
```

2. By `lookAt` function of the component: The [lookAt](/api/classes/Camera3D#lookat) function of the camera component can set the position of the camera `Object3D` and the position of the target to be observed at the same time:

```ts
// Create a node
let cameraObj = new Object3D();
// Add a camera component to the node
let camera = cameraObj.addComponent(Camera3D);
// Use the lookAt function of the Camera3D component to change the position and direction angle of the Object3D
camera.lookAt(new Vecter3(0,0,10), new Vecter3(0,0,0), new Vecter3(0,0,1));
```
| Parameter | Type    | Description                                                  | Example          |
|-----------|---------|--------------------------------------------------------------|------------------|
| pos       | Vecter3 | The position of the object itself (global)                   | Vector3(0, 0, 0) |
| target    | Vecter3 | The position of the target (global)                          | Vector3(0, 1, 0) |
| up        | Vecter3 | The coordinate axis of the direction the camera is facing up | Vector3(0, 1, 0) |
3. Camera Controller: Several common [controller components](#camera-component) are built in the engine, which can automatically adjust the position properties of the camera according to the user's input interaction.


## Camera Type
The engine mainly supports orthographic cameras and perspective cameras for developers to use currently.

### Orthographic Projection

In orthographic camera mode, the size of the object does not change regardless of how far the object is from the camera. We usually use orthographic cameras in 2D drawing, and set the `z` coordinate to `0.0` in our geometric graphics. But the `z` axis can be extended to any length we want. Using an orthographic camera to project the display object, the result is scaled proportionally without distortion.

![camera_orthoOffCenter](/images/camera_orthoOffCenter.webp)

Use [camera.orthoOffCenter](/api/classes/Camera3D.html#orthooffcenter) API to set the camera to an orthographic camera:

| Parameter | Type   | Description                                                   | Example                 |
|-----------|--------|---------------------------------------------------------------|-------------------------|
| left      | number | The minimum value of the x-axis of the viewing frustum        | -window.innerWidth / 2  |
| right     | number | The maximum value of the x-axis of the viewing frustum        | window.innerWidth / 2   |
| bottom    | number | The minimum value of the y-axis of the viewing frustum        | -window.innerHeight / 2 |
| top       | number | The maximum value of the y-axis of the viewing frustum        | window.innerHeight / 2  |
| near      | number | The z value of the near clipping plane of the viewing frustum | 1                       |
| far       | number | The z value of the far clipping plane of the viewing frustum  | 5000                    |

### Perspective Projection
Perspective projection will use perspective division to shorten and shrink objects that are far away from the observer. Objects with the same logical size appear larger in the front position than in the back position in the visible area, which can achieve the observation effect close to the human eye. It is the most commonly used projection mode in 3D scenes.

![camera_perspective](/images/camera_perspective.webp)

Use [camera.perspective](/api/classes/Camera3D#perspective) API to set the camera to a perspective camera:

| Parameter | Type   | Description                                                   | Example                                |
|-----------|--------|---------------------------------------------------------------|----------------------------------------|
| fov       | number | The perspective degree                                        | 60                                     |
| aspect    | number | The aspect ratio of the viewport                              | window.innerWidth / window.innerHeight |
| near      | number | The z value of the near clipping plane of the viewing frustum | 0.1                                    |
| far       | number | The z value of the far clipping plane of the viewing frustum  | 1000                                   |

<Demo :height="500" src="/demos/graphics/camera_type.ts"></Demo>

<<< @/public/demos/graphics/camera_type.ts{35-41}

## Camera Conponent
The Camera component provides flexible extension support for the camera, which can be used directly with predefined components, or can be customized to implement more personalized requirements. The component executes its own update logic in sync with the `Engine3D` main loop through its `update` function.

### [FlyCamera](/api/classes/FlyCameraController)
This controller implements the camera's free movement. Its interaction features are:
  - Move forward, backward and left and right by pressing W A S D
  - Control the movement direction of the camera by holding down the left mouse button

<Demo :height="500" src="/demos/graphics/camera_fly.ts"></Demo>

<<< @/public/demos/graphics/camera_fly.ts

Basic usage:
```ts
import { Scene3D, Camera3D, FlyCameraController } from '@orillusion/core'
// Create a node
let cameraObj = new Object3D();
// Add a camera component to the node
let camera = cameraObj.addComponent(Camera3D);
// Add a controller component to the node
let flyController = cameraObj.addComponent(FlyCameraController);
// Set the camera position through the component setCamera
flyController.setCamera(new Vector3(0, 0, 15), new Vector3(0, 0, 0));
// Set the mouse movement speed
flyController.moveSpeed = 10;
```
The fly camera can be set by [setCamera](/api/classes/FlyCameraController#setcamera) to set its own position and orientation

| Parameter | Type    | Description                | Example             |
|-----------|---------|----------------------------|---------------------|
| targetPos | Vector3 | The position of the camera | new Vector3(0,0,10) |
| lookAtPos | Vector3 | The position of the target | new Vector3(0,0,0)  |

Also, you can modify `moveSpeed` to adjust the speed of movement

| Parameter | Type   | Description           | Example |
|-----------|--------|-----------------------|---------|
| moveSpeed | number | The speed of movement | 10      |

### [HoverCamera](/api/classes/HoverCameraController)

This camera controller implements the camera's movement in the `xz` plane and rotation around the current observation point. Its interaction features are:
  - Press the left mouse button and move the mouse to rotate the camera around the current observation target.
  - Press the right mouse button and move the mouse to move the camera smoothly in the direction and distance of the mouse movement in the current scene visible area.
  - Scroll the mouse wheel to control the camera's viewing distance

<Demo :height="500" src="/demos/graphics/camera_hover.ts"></Demo>

<<< @/public/demos/graphics/camera_hover.ts

Basic usage:
```ts
import { Scene3D, Camera3D, HoverCameraController } from '@orillusion/core'
// Create a node
let cameraObj = new Object3D();
// Add a camera component to the node
let camera = cameraObj.addComponent(Camera3D);
// Add a controller component to the node
let hoverCameraController = cameraObj.addComponent(HoverCameraController);
// Set the camera position through the component setCamera
hoverController.setCamera(15, -15, 15, new Vector3(0, 0, 0));
```
The hover camera can be controlled by [setCamera](/api/classes/HoverCameraController#setcamera) to set its own position and orientation

| Parameter | Type    | Description              | Example            |
|-----------|---------|--------------------------|--------------------|
| roll      | number  | Rotate around the y axis | 0                  |
| pitch     | number  | Rotate around the x axis | 0                  |
| distance  | number  | Distance from the target | 10                 |
| target    | Vecter3 | Target coordinate        | new Vector3(0,0,0) |


### [Orbit](/api/classes/OrbitController)
This camera controller is similar to the hover camera, but it can directly set the position and orientation of the camera `Object3D` to control the position and orientation of the view. The main features are as follows:
  - Press the left mouse button and move the mouse to rotate the camera around the current observation target.
  - Press the right mouse button and move the mouse to move the camera smoothly in the direction and distance of the mouse movement in the current scene visible area.
  - Scroll the mouse wheel to control the camera's viewing distance
  - You can set the camera to automatically rotate
  - You can set the rotation, zoom, and translation speed
  - You can set the maximum and minimum angles of elevation

<Demo :height="500" src="/demos/graphics/camera_orbit.ts"></Demo>

<<< @/public/demos/graphics/camera_orbit.ts{12-17}


Basic usage:
```ts
import { Scene3D, Camera3D, OrbitController } from '@orillusion/core'
// Create a node
let cameraObj = new Object3D();
// Add a camera component to the node
let camera = cameraObj.addComponent(Camera3D);
// Add a controller component to the node
let orbit = cameraObj.addComponent(OrbitController);
// Set the position of the camera Object3D
cameraObj.localPosition.set(0, 10, 30);
// Enable automatic rotation
orbit.autoRotate = true
// Automatic rotation speed
orbit.autoRotateSpeed = 0.1
// Zoom speed coefficient
orbit.zoomFactor = 0.1
// View angle translation speed coefficient
orbit.panFactor = 0.25
// View angle smoothing coefficient
orbit.smooth = 5
// Zoom minimum distance
orbit.minDistance = 1
// Zoom maximum distance
orbit.maxDistance = 1000
// Minimum elevation angle
orbit.minPolarAngle = -90
// Maximum elevation angle
orbit.minPolarAngle = 90
```

### Custom Controller
Users can extend additional camera components through [custom components](/guide/core/script), See [OrbitController](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts) as an example.