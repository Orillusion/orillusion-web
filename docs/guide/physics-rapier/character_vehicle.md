# Character Controller and Vehicle

The Rapier edition ships with two high-level components: the **character controller `CharacterController`** for first-/third-person movement, and the **vehicle controller `VehicleController`** for vehicle simulation.

## Character Controller (CharacterController)

The character controller is a kinematic controller with built-in handling for slope climbing, steps, ground snapping, and so on, making it suitable for playable, walkable player characters. Drive movement via `controller.move(displacement)`:

```ts
import { Object3D, Vector3 } from '@orillusion/core';
import { CharacterController } from '@orillusion/physics-rapier';

const player = new Object3D();
const cc = player.addComponent(CharacterController);
cc.maxSlopeClimbAngle = (50 * Math.PI) / 180; // Maximum climbable slope angle (radians)
cc.snapToGround = 0.5;                          // Ground snap distance
scene.addChild(player);

// Drive movement per frame based on input (displacement vector, already including gravity/jump components)
cc.move(new Vector3(vx * speed * dt, vy * dt, vz * speed * dt));
```

| Member | Description |
| --- | --- |
| `move(displacement)` | Drives the character with a displacement vector (automatically handles collision sliding, slope climbing, steps) |
| `maxSlopeClimbAngle` | Maximum climbable slope (radians) |
| `snapToGround` | Ground snap distance when stepping down |

> Gravity and jumping must be accumulated into the Y component of the displacement yourself (accumulate vertical velocity `vy`, reset to zero after landing).

## Example

<Demo src="/demos/physics-rapier/Sample_rapierCharacter.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rapierCharacter.ts

## Vehicle Controller (VehicleController)

The vehicle controller is based on a raycast wheel model: add a `VehicleController` to the chassis rigidbody, then add wheels one by one via `addWheel`, and control them at runtime with `setEngineForce` / `setBrake` / `setSteering`.

```ts
import { Object3D, Vector3 } from '@orillusion/core';
import { Rigidbody, BodyType, CollisionShapeUtil, VehicleController } from '@orillusion/physics-rapier';

// Chassis (dynamic rigidbody)
const chassis = new Object3D();
chassis.y = 2;
const crb = chassis.addComponent(Rigidbody);
crb.bodyType = BodyType.Dynamic;
crb.shape = CollisionShapeUtil.createBoxShape(chassis, new Vector3(2, 0.6, 4));
scene.addChild(chassis);

// Vehicle controller + four wheels
const vc = chassis.addComponent(VehicleController);
const wheelOpts = {
    suspensionRestLength: 0.3,
    radius: 0.4,
    stiffness: 30,
    dampingCompression: 4.4,
    dampingRelaxation: 2.3,
    frictionSlip: 1000,
};
vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3(-1, -0.3, -1.5) }); // 0 front left
vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3( 1, -0.3, -1.5) }); // 1 front right
vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3(-1, -0.3,  1.5) }); // 2 rear left
vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3( 1, -0.3,  1.5) }); // 3 rear right
```

Runtime control (by wheel index):

```ts
// Rear-wheel drive
vc.setEngineForce(engineForce, 2);
vc.setEngineForce(engineForce, 3);
// Front-wheel steering
vc.setSteering(steerAngle, 0);
vc.setSteering(steerAngle, 1);
// Braking (all wheels)
for (let i = 0; i < vc.numWheels(); i++) vc.setBrake(brakeForce, i);
```

| Method | Description |
| --- | --- |
| `addWheel(opts)` | Adds a wheel (with suspension, radius, connection point, etc.) |
| `setEngineForce(force, wheelIndex)` | Sets the engine drive force for a wheel |
| `setBrake(force, wheelIndex)` | Sets the brake force for a wheel |
| `setSteering(angle, wheelIndex)` | Sets the steering angle for a wheel |
| `numWheels()` | Number of wheels |

## Example

<Demo src="/demos/physics-rapier/Sample_rapierVehicle.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rapierVehicle.ts

## Debugging and Dragging

The physics plugin also provides out-of-the-box debug wireframes and a mouse-drag tool:

```ts
import { Graphic3D } from '@orillusion/graphic';

// Draw collider wireframes in real time
const graphic = new Graphic3D();
scene.addChild(graphic);
Physics.initDebugDrawer(graphic, { enable: true, updateFreq: 1 });

// Allow dragging dynamic rigidbodies with the mouse
Physics.enableDragger(view);
```
