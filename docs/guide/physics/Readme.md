# Overview of Physics
The physics system is a simulation of the real world, allowing the model objects in the scene to have mass and correctly respond to gravity and various collisions, just like objects in a real environment. The engine provides physics engine support in the form of an extension, [@orillusion/physics](/physics/) (based on [Ammo.js](https://github.com/kripken/ammo.js)), and encapsulates commonly used components to help users simulate a physics system in their projects.

## Installation
Consistent with the engine's approach, we can import the physics plugin in two ways: through `NPM` and `CDN` links:

### 1. Install via `NPM` Package
```bash
npm install @orillusion/core --save
npm install @orillusion/physics --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Physics } from "@orillusion/physics"
```

### 2. Import via `CDN` Links
We recommend using the `ESModule` build version:
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { Physics } from "https://unpkg.com/@orillusion/physics/dist/physics.es.js" 
</script>
```

Or load the `UMD` build version via `<script>`, and get the `Physics` module from the global `Orillusion` variable:
```html
<script src="https://unpkg.com/@orillusion/core/dist/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/physics/dist/physics.umd.js"></script>
<script>
  const { Engine3D, Physics } = Orillusion
  const { Physics, Rigidbody } = Physics
</script>
```

## Basic Usage
Currently, the parameters and methods supported by [Physics](/physics/classes/Physics) are shown in the following table:

| API | Description |
| --- | --- |
| init(): void | Initialize the physics engine |
| initDebugDrawer(): void | Initialize the physics debugger |
| update(): void | Update the physics system, needs to be called in the loop body |
| gravity: Vector3 | Gravity parameter |
| isStop: boolean | Control whether the physical world is paused |
| debugDrawer: PhysicsDebugDrawer | Visual debugging tool |
| physicsDragger: PhysicsDragger | Drag interaction tool |
| world: Ammo.btDiscreteDynamicsWorld | Native physical world in Ammo.js |

 `init()` initialization configuration parameters:

| Parameter | Type | Description |
| --- | --- | --- |
| useSoftBody | `boolean` | Whether to enable softbody simulation |
| useDrag | `boolean` | Whether to enable the drag interaction feature |
| physicBound | `Vector3` | Boundary of the physical world |
| destroyObjectBeyondBounds | `boolean` | Destroy the 3D object when it goes beyond the boundary |

### Starting the Physics System
We can call `init()` to start the physics system, and run the physical world by calling `update()` in the main render loop:
```ts
import { Engine3D } from '@orillusion/core'
import { Physics } from '@orillusion/physics'

await Physics.init();
await Engine3D.init({
  renderLoop: () => Physics.update()
});
```
::: tip
After starting and running the physics system with the above method, the engine will, on each rendered frame, calculate and update the actual response of the object models to the physical world based on the configured parameters.
:::

### Pause and Resume
```ts
Physics.isStop = !Physics.isStop;
```


### Gravity Environment Simulation
The default gravity is `Vector3(0, -9.8, 0)` (Earth's gravity). To customize gravity, simply modify `Physics.gravity`:
```ts
Physics.gravity = new Vector3(0, 0, 0); // Zero-gravity environment
```

## Auxiliary Features
- **Physics Visualization**: To visualize physical objects, we can initialize the physics visualization debugger after the engine starts. It requires passing in a `Graphic3D` object:
```ts
const graphic3D = new Graphic3D();
scene.addChild(graphic3D);
Physics.initDebugDrawer(graphic3D, { enable: true });
```

::: details Controlling the Debugger with dat
```ts
import dat from "dat.gui";

let gui = new dat.GUI();
let f = gui.addFolder("PhysicsDebugDrawer");
f.add(Physics.debugDrawer, 'enable').listen(); // Enable or disable the debugging feature
f.add(Physics.debugDrawer, 'debugMode', Physics.debugDrawer.debugModeList); // Debug mode
f.add(Physics.debugDrawer, 'updateFreq', 1, 360, 1); // Frequency of line rendering (per frame)
f.add(Physics.debugDrawer, 'maxLineCount', 100, 33000, 100); // Set the maximum number of lines to render
```
:::

- **Physical Object Interaction**: If you need to use the mouse to drag and control rigidbodies, you can enable this feature in `init()`:

```ts
await Physics.init({ useDrag: true });
```
::: tip
You can configure the relevant settings through `Physics.physicsDragger`. For details, see [PhysicsDragger](/physics/classes/PhysicsDragger).
:::

## Physics Tools
The physics system provides several tools to help developers customize their development more flexibly.
- [CollisionShapeUtil](/physics/classes/CollisionShapeUtil): Provides various methods to create different types of collision shapes.
- [ContactProcessedUtil](/physics/classes/ContactProcessedUtil): A utility class for registering and managing collision events between physical objects.
- [RigidBodyMapping](/physics/classes/RigidBodyMapping): A utility class for managing the mapping relationship between `Ammo` rigidbodies and 3D model objects; the mapping must be specified manually.
- [RigidBodyUtil](/physics/classes/RigidBodyUtil): Provides various utility methods related to `Ammo` rigidbodies, simplifying the creation of rigidbodies and various operations on them.
- [TempPhyMath](/physics/classes/TempPhyMath): A temporary physics math utility class that provides instances of `Ammo` math objects (such as vectors and quaternions) and supports conversion to and from engine data types.


## Native Extension
The current engine only encapsulates a few commonly used components. If you need to implement complex physics simulations, you can directly reference `Ammo` to use the native physical world objects, and implement more customization requirements through the native `API` provided by `Ammo.js` itself:
```ts
import { Ammo, Physics } from "@orillusion/physics";

// init physics
await Physics.init();

// ...

// native Ammo shape
let boxShape = new Ammo.btBoxShape(
  new Ammo.btVector3(1, 1, 1)
);
// native Ammo transform
let transform = new Ammo.btTransform();
```
For more usage, see [Ammo API](/physics/modules/Ammo)

## Simple Example
Here, we simulate the process of a cube falling onto the ground to see what specific effects the physics system can provide.

<Demo src="/demos/physics/demo1.ts"></Demo>

<<< @/public/demos/physics/demo1.ts

Following the process described in the previous chapters, we first initialize and configure the basic components such as the scene, camera, environment map, and lighting.
Next, we create a cube, add a rigidbody component to it, and specify a collision shape, so that it has mass and can correctly respond to gravity and collisions.

```ts {7-9}
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(5, 5, 5);
mr.material = new LitMaterial();

// Respond to gravity and set the collision shape
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 10;
rigidbody.shape = Rigidbody.collisionShape.createShapeFromObject(obj);

scene3D.addChild(obj);
```

Then, we create a plane below the cube to serve as the ground, and likewise add a rigidbody component to it and specify a collision shape. Since the ground is stationary, we set its mass to `0`.

```ts {7-9}
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new PlaneGeometry(size.x, size.y);
mr.material = new LitMaterial();

// Static rigidbody, does not respond to gravity
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 0;
rigidbody.shape = Rigidbody.collisionShape.createShapeFromObject(obj);

scene.addChild(obj);
```

After the physics system is started, the engine immediately responds to the objects' gravity based on their mass. When the collision shapes of the cube and the ground intersect, we can see a realistic landing collision effect. More [physics examples](/example/physics/Dominoes).
