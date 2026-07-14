# Camera

The camera is a tool for displaying or capturing the virtual world for users, just like the eyes that observe things in the real world. All cool images need to be rendered through the camera. At least one camera must be present in each scene to view the objects in the scene. `Orillusion` has already encapsulated the commonly used [camera types](#camera-type) and [controllers](#camera-component), and users can also extend the camera's functionality through [custom components](/guide/core/component).

## Basic Usage
```ts
import { Object3D, Scene3D, Camera3D } from '@orillusion/core'
// Instantiate a scene
let scene = new Scene3D();
// Instantiate a node
let cameraObj = new Object3D();
// Load a camera component
let camera = cameraObj.addComponent(Camera3D);
// Add the camera to the scene
scene.addChild(cameraObj);

// Create a 3D view
let view = new View3D();
// Fill the scene into the 3D view
view.scene = scene;
// Fill the camera into the 3D view
view.camera = camera;
// Start rendering
engine.startRenderView(view);
```
If there are multiple cameras in the scene, you can switch the target camera by setting `view.camera`:
```ts
// If there are multiple cameras
let cameraObj1 = new Object3D();
let camera1 = cameraObj.addComponent(Camera3D);
let cameraObj2 = new Object3D();
let camera2 = cameraObj.addComponent(Camera3D);

// Create a 3D view
let view = new View3D();
// Set the rendering scene
view.scene = scene;
// Set camera1
view.camera = camera1;
...
// Switch to use camera2 for rendering
view.camera = camera2;

```

## Camera Position
There are three main ways to change the camera position:
1. By `TransForm` transformation: The position and direction angle of the camera can be manually set through the [transForm](/guide/core/transform) property of the camera node `Object3D`:
```ts
// Create a node
let cameraObj = new Object3D();
// Add a camera component
let camera = cameraObj.addComponent(Camera3D);
// Set the Position or Rotation of the Object3D 
cameraObj.x = 10;
cameraObj.rotateX = 90;
...
```

2. By the component's `lookAt` function: The [lookAt](/api/classes/Camera3D#lookat) function provided by the camera component can set both the position of the camera `Object3D` and the position of the observation target at the same time:

```ts
// Create a node
let cameraObj = new Object3D();
// Add a camera component
let camera = cameraObj.addComponent(Camera3D);
// Use the lookAt function of the Camera3D component to change the position and direction angle of the Object3D
camera.lookAt(new Vector3(0,0,10), new Vector3(0,0,0), new Vector3(0,0,1));
```
| Parameter | Type | Description | Example |
| --- | --- | ------ | --- |
| pos | Vector3 | The position of the object itself (global) | Vector3(0, 0, 0) |
| target | Vector3 | The position of the target (global) | Vector3(0, 1, 0) |
| up | Vector3 | The coordinate axis of the camera's up direction | Vector3(0, 1, 0) |
3. Camera Controller: Several common [controller components](#camera-component) are built into the engine, which can automatically adjust the position property of the camera according to the user's input interaction.


## Camera Type
Currently, orthographic cameras and perspective cameras are mainly supported for developers to use.

### Orthographic Projection   

In orthographic camera mode, the size of the object in the rendering result does not change regardless of whether the object is far from or near the camera. We usually use orthographic cameras in 2D drawing and set the `z` coordinate to `0.0` in our geometric graphics. But the `z` axis can be extended to any length we want. Using an orthographic camera to project the display object, the result is scaled proportionally without any distortion.

![camera_orthoOffCenter](/images/camera_orthoOffCenter.webp)

Calling the [camera.orthoOffCenter](/api/classes/Camera3D.html#orthooffcenter) API allows you to customize an orthographic camera space:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| left | number | The minimum value of the x-axis of the viewing frustum | -window.innerWidth / 2 | 
| right | number | The maximum value of the x-axis of the viewing frustum | window.innerWidth / 2 | 
| bottom | number | The minimum value of the y-axis of the viewing frustum | -window.innerHeight / 2 | 
| top | number | The maximum value of the y-axis of the viewing frustum | window.innerHeight / 2 | 
| near | number | The z value of the near clipping plane of the viewing frustum | 1 |
| far | number | The z value of the far clipping plane of the viewing frustum | 5000 |

In general, we can quickly set up an orthographic space centered on the camera target, with `frustumSize` as the height and `frustumSize` as the depth, using [camera.ortho](/api/classes/Camera3D.html#ortho). It keeps the screen ratio and automatically calculates `left` and `right`, and automatically calculates the `near` and `far` values of the viewing frustum based on the camera target as the base point.

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| frustumSize | number | Height of the frustum | 100 | 
| frustumDepth | number | Depth of the frustum | 100 | 

### Perspective Projection
Perspective projection uses perspective division to shorten and shrink objects that are far away from the observer. Objects with the same logical size appear larger in the front position than in the back position in the visible area, which can achieve an observation effect close to the human eye. It is the most commonly used projection mode in 3D scenes.

![camera_perspective](/images/camera_perspective.webp)

Calling [camera.perspective](/api/classes/Camera3D#perspective) allows you to set the camera as a perspective camera as needed:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| fov  | number | Perspective degree | 60 |
| aspect | number | Viewport ratio | window.innerWidth / window.innerHeight |
| near | number | Near clipping plane | 0.1 |
| far | number | Far clipping plane | 1000 |

<Demo :height="500" src="/demos/graphics/camera_type.ts"></Demo>

<<< @/public/demos/graphics/camera_type.ts{35-41}

## Camera Component
The camera component provides flexible extension support for the camera. You can use predefined components directly, or customize components to implement more personalized requirements. The component executes its own update logic, synchronized with the `Engine3D` main loop, through its own `update` function.

### [Fly Camera](/api/classes/FlyCameraController)
This camera controller implements the free movement of the camera. Its interaction features are:
  - Move forward, backward, left, and right toward the facing direction using W A S D
  - Control the movement orientation of the camera by holding down the left mouse button

<Demo :height="500" src="/demos/graphics/camera_fly.ts"></Demo>

<<< @/public/demos/graphics/camera_fly.ts

Basic usage:
```ts
import { Scene3D, Camera3D, FlyCameraController } from '@orillusion/core'
// Instantiate a node
let cameraObj = new Object3D();
// Load a camera component
let camera = cameraObj.addComponent(Camera3D);
// Load the controller component
let flyController = cameraObj.addComponent(FlyCameraController);
// Set the camera position through the component's setCamera
flyController.setCamera(new Vector3(0, 0, 15), new Vector3(0, 0, 0));
// Set the mouse movement speed
flyController.moveSpeed = 10;
```
The fly camera can set its own position and orientation through [setCamera](/api/classes/FlyCameraController#setcamera)

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| targetPos | Vector3 | Own position | new Vector3(0,0,10) |
| lookAtPos | Vector3 | Target position  | new Vector3(0,0,0) |

You can also modify `moveSpeed` to adjust the speed of movement

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| moveSpeed | number | Movement speed | 10 |

### [Hover Camera](/api/classes/HoverCameraController)

This camera controller implements the camera's movement in the `xz` plane / rotation around the current observation point. Its interaction features are:
  - Press the left mouse button and move the mouse to rotate the camera around the current observation target.
  - Press the right mouse button and move the mouse to smoothly move the current scene's visible area according to the direction and distance of the mouse movement
  - Scroll the mouse wheel to control the camera's viewing distance

<Demo :height="500" src="/demos/graphics/camera_hover.ts"></Demo>

<<< @/public/demos/graphics/camera_hover.ts


Basic usage:
```ts
import { Scene3D, Camera3D, HoverCameraController } from '@orillusion/core'
// Instantiate a node
let cameraObj = new Object3D();
// Load a camera component
let camera = cameraObj.addComponent(Camera3D);
// Load the controller component
let hoverCameraController = cameraObj.addComponent(HoverCameraController);
// Set the camera position through the component's setCamera
hoverController.setCamera(15, -15, 15, new Vector3(0, 0, 0));
```
The hover camera can control the camera position and orientation through [setCamera](/api/classes/HoverCameraController#setcamera)
| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| roll   | number | Rotate around the y axis  | 0 |
| pitch  | number | Rotate around the x axis  | 0 |
| distance | number | Distance between the camera and the target | 10 |
| target   | Vector3 | Target coordinate to face  | new Vector3(0,0,0) |


### [Orbit Camera](/api/classes/OrbitController)
This camera controller is very similar to the hover camera, also rotating around a coordinate observation point. But it can directly set the position and rendering of the camera's `Object3D` to control the view position and orientation. Its main features are as follows:
  - Press the left mouse button and move the mouse to rotate the camera omnidirectionally around the current observation target
  - Press the right mouse button and move the mouse to move the camera center in all spatial directions according to the direction of mouse movement, not only freely moving in the `xz` plane, but also supporting free movement in the `y` direction
  - Scroll the mouse wheel to control the distance between the camera and the center
  - You can set the camera to rotate automatically
  - You can set the speed of rotation, zoom, and panning
  - You can set the maximum and minimum elevation angles

<Demo :height="500" src="/demos/graphics/camera_orbit.ts"></Demo>

<<< @/public/demos/graphics/camera_orbit.ts{12-17}


Basic usage:
```ts
import { Scene3D, Camera3D, OrbitController } from '@orillusion/core'
// Instantiate a node
let cameraObj = new Object3D();
// Load a camera component
let camera = cameraObj.addComponent(Camera3D);
// Load the controller component
let orbit = cameraObj.addComponent(OrbitController);
// Set the position of the camera Object3D
cameraObj.localPosition.set(0, 10, 30);
// Enable automatic rotation
orbit.autoRotate = true
// Automatic rotation speed
orbit.autoRotateSpeed = 0.1
// Zoom speed coefficient
orbit.zoomFactor = 0.1
// View panning speed coefficient
orbit.panFactor = 0.25
// View smoothing coefficient
orbit.smooth = 5
// Minimum zoom distance
orbit.minDistance = 1
// Maximum zoom distance
orbit.maxDistance = 1000
// Minimum elevation angle
orbit.minPolarAngle = -90
// Maximum elevation angle
orbit.minPolarAngle = 90
```

### Custom Controller
Users can extend additional camera components through [custom components](/guide/core/script), and can refer to the implementation of [OrbitController](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts).
