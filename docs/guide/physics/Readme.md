# Overview of Physics
The physics system is a simulation of the real world, allowing the modeled objects in the scene to behave like physical objects with mass, respond correctly to gravity and various collisions, just like in the real environment. The engine provides physics engine support （based on [ammo.js](https://github.com/kripken/ammo.js)）in the form of plugins and encapsulates commonly used components to help users simulate the physical system in their projects.

Similar to the engine installation method, we can introduce the physics plugin in two ways through `NPM` and `CDN` links:
```bash
npm install @orillusion/core --save
npm install @orillusion/physics --save
```
Import modules:
```ts
import { Engine3D } from "@orillusion/core"
import { Physics } from "@orillusion/physics"
```
Or load globally using `<script>`, obtain the `Physics` module from the global  `Orillusion`  variable:
```html
<script src="https://cdn.orillusion.com/orillusion.umd.js"></script>
<script src="https://cdn.orillusion.com/physics.umd.js"></script>
```
```ts
const { Engine3D, Physics } = Orillusion 
```

Currently, the parameters and methods supported by [Physics](/physics/classes/Physics) are shown in the following table:

| API | Description |
| --- | --- |
| init(): void | Initialize the physics engine |
| update(): void | Update the physical system, needs to be called in the loop body |
| gravity: Vecter3 | Gravity parameter |
| isStop: boolean | Control whether the physical world is running or paused |
| world: Ammo.btDiscreteDynamicsWorld | Native physical world in ammo.js |

## Running the Physics Environment
We can initialize the Physics to start the physical system, and run the physical world by calling `Physics.update()` in the main loop:
```ts
import { Engine3D } from '@orillusion/core'
import { Physics } from '@orillusion/physics'

await Physics.init();
await Engine3D.init({
  renderLoop: () => this.loop(),
});

loop() {
  if (Physics.isInited) {
    Physics.update();
  }
}
```
After opening and running the physical system with the above method, the engine will calculate and update the actual response of the object model to the physical world based on the set parameters for rendering each frame.

In some projects, there is usually a need to pause the physical world simulation, so we provide a parameter to pause and resume the physical world operation:
```ts
Physics.isStop = !Physics.isStop;
```

## Gravity Simulation
Currently, the default gravity parameter in the engine is `Vector3(0, -9.8, 0)`, simulating the gravity of the earth. If you need to customize the gravity parameter, simply change the `Physics.gravity` property, but remember to change it before initialization, otherwise it will not take effect.

For example, if you want to simulate zero gravity in space, change the `gravity` parameter before initialization:
```ts
Physics.gravity = new Vector3(0,0,0);
await Physics.init();
```
Please note that it needs to be changed before the initialization of the physical system to take effect.

## Extension
In addition, users can use the following code to obtain the native physical world of `ammo.js`and implement more customization requirements through the api provided by `ammo.js` itself:
```bash
let world: Ammo.btDiscreteDynamicsWorld = Physics.world;
```

## Simple Example of Object Landing
Here, we simulate the process of a cube falling on the ground to see what specific effects the physics system can provide.

<Demo src="/demos/physics/demo1.ts"></Demo>

<<< @/public/demos/physics/demo1.ts

Following the process described in the previous chapters, we first initialize and set the parameters for basic components such as the scene, camera, environment map, and lighting.
```ts
let scene3D = new Scene3D();
let cameraObj = new Object3D();
let mainCamera = cameraObj.addComponent(Camera3D);
mainCamera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
Camera3D.mainCamera = mainCamera;
let controller = mainCamera.object3D.addComponent(HoverCameraController);
controller.setCamera(45, -15, 200, new Vector3(0, 100, 0));
scene3D.addChild(cameraObj);

let light: Object3D = new Object3D();
let component = light.addComponent(DirectLight);
light.rotationX = 45;
light.rotationY = 30;
component.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
component.intensity = 0.1;
scene3D.addChild(light);
```

Next, we create a cube and add rigid body and collider components to it, so that it has mass and can correctly respond to gravity and collisions.
```ts
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(5, 5, 5);
mr.material = new LitMaterial();
...
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 10;
let collider = obj.addComponent(Collider);
collider.shape = new BoxColliderShape();
collider.shape.size = new Vector3(5, 5, 5);

scene3D.addChild(obj);
```

Then, we create a plane below the cube as the ground and also add rigid body and collider components to it. Since the ground is stationary, we set its mass to 0.
```ts
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new PlaneGeometry(size.x, size.y);
mr.material = new LitMaterial();
...
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 0;
let collider = obj.addComponent(Collider);
collider.shape = new BoxColliderShape();
collider.shape.size = new Vector3(size.x, 0.1, size.y);

scene.addChild(obj);
```

Once the physics system is started, the engine immediately responds to the object's gravity based on its mass. Therefore, we will see the cube falling from the air. Since we have set up collider components, the collision is detected when the cube and ground collider shapes intersect. In the example, we can see the realistic collision effect when the cube hits the ground.