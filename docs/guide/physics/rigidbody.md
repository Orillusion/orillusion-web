# Rigidbody
A rigidbody refers to an object whose own deformation can be neglected when subjected to external forces. Although an ideal rigidbody cannot truly exist, under conditions where the speed is much smaller than the speed of light, many hard objects can usually be assumed to be perfect rigidbodies. Based on the characteristics of rigidbodies, the engine's physics system can simulate the motion and collision logic of objects in the real world, producing realistic animation effects.

In the engine's physics system, the rigidbody is a key component. After adding the rigidbody component [Rigidbody](/physics/classes/Rigidbody) to a model object, the object will have mass and be able to respond to gravity and other physical forces, exhibiting dynamic characteristics similar to those in the real world.

::: details The Synchronization Mechanism Between Rigidbody and Model Object
After a rigidbody component is added to a model object, the physics engine takes over the object's transform (usually position and rotation). In each physics simulation step (usually 60Hz, i.e., 60 frames per second), the physics engine calculates the rigidbody's motion state based on its physical properties (such as mass, force, collision, etc.) and updates the rigidbody's transform information in real time with the calculated results. In each rendered frame, the rigidbody component's update function obtains the rigidbody's interpolated transform and synchronizes it to the model object, so that it exhibits realistic physical behavior in the scene. Please note that once a rigidbody component is added, the model object's transform will be automatically managed by the physics engine.
:::

## Rigidbody and Collision Shape
The rigidbody is responsible for handling an object's dynamic properties and motion, but the rigidbody alone is not enough to complete a physics simulation, because it does not contain information about the object's specific shape or size. To achieve a complete physics simulation, the rigidbody must be associated with a collision shape. The collision shape defines the object's boundaries in physical space, and the rigidbody participates in collision detection and handling through these boundaries.


## Properties and Methods
The [Rigidbody](/physics/classes/Rigidbody) component is designed to encapsulate many `API`s. The commonly used properties are shown in the table below:

| Property | Type | Description |
| --- | --- | --- |
| btRigidbody | `Ammo.btRigidBody` | Gets the native rigidbody object of `Ammo.js` |
| shape | `Ammo.btCollisionShape` | The collision shape of the rigidbody, defining the object's physical boundaries |
| mass | `number` | The mass of the rigidbody (unit: kg), which determines the object's inertia. Default value is `0.01` |
| restitution | `number` | The coefficient of restitution, which determines how much the object bounces after a collision. Default value is `0.5` |
| friction | `number`| Friction, which affects the sliding behavior of the rigidbody when in contact with other objects. Default value is `0.5` |
| velocity | `Vector3` | The force vector applied at the center of the rigidbody |
| damping | `[number, number]` | Damping coefficients, which control the decay of the rigidbody's linear and angular velocity |
| enablePhysicsTransformSync | `boolean` | Whether to enable transform synchronization between the rigidbody and the model object. Default value is `false` |
| isSilent | `boolean` | Whether it is in a silent state; when set to `true`, the collision callbacks of both parties will not be triggered |
| enableCollisionEvent | `boolean` | Whether to enable collision events. Default value is `true` |
| collisionEvent | `Function` | Collision event callback |

| Method | Description |
| --- | --- |
| wait() | Asynchronously gets the native rigidbody instance once initialization is complete |
| updateTransform() | Updates the position and rotation of the rigidbody and synchronizes the object |
| clearForcesAndVelocities() | Clears all forces and velocities of the rigidbody, resetting its motion state |

::: details More `API`s

| API | Type | Description |
| --- | --- | --- |
| collisionShape | `CollisionShapeUtil` | A tool for creating collision shapes |
| rollingFriction | `number` | Rolling friction, which affects the sliding behavior of the rigidbody when it rolls |
| ccdSettings | `[number, number]` | Settings for continuous collision detection, used to prevent high-speed moving objects from passing through other objects |
| gravity | `Vector3` | The gravity vector applied to the rigidbody, which can be customized to be different from the global gravity vector |
| linearVelocity | `Vector3` | The linear velocity of the rigidbody |
| angularVelocity | `Vector3` | The angular velocity of the rigidbody |
| activationState | `ActivationState` | The activation state of the rigidbody |
| isKinematic | `boolean` | Set as a kinematic rigidbody, which will automatically enable `enablePhysicsTransformSync` |
| isTrigger | `boolean` | Set as a trigger, which does not participate in physical reactions and does not trigger collision events |
| isDisableDebugVisible | `boolean` | Set whether the rigidbody is visible in debug mode |
| userIndex | `number` | User index, which can be used as a rigidbody identifier |
| group | `number` | The collision group of the rigidbody |
| mask | `number` | The collision mask of the rigidbody |
| margin | `number` | Defines the collision margin of the collision shape |
| collisionFlags | `number` | Gets the collision flags |
| addCollisionFlag() | `CollisionFlags`  | Adds a single collision flag. Used to set specific behaviors of the rigidbody, such as static, kinematic, etc. |
| removeCollisionFlag() | `CollisionFlags` | Removes a single collision flag |
:::


## Basic Usage

Add a `Rigidbody` component to an object:
```ts
import { Object3D } from '@orillusion/core'
import { Rigidbody, CollisionShapeUtil } from '@orillusion/physics'

let object = new Object3D();
let rigidbody = object.addComponent(Rigidbody);
```

After adding the component, you also need to set a collision shape for the rigidbody. Based on the content introduced in the previous section on [collision shapes](/guide/physics/collisionShape.html), we can create an appropriate collision shape according to the object's geometry:
```ts
rigidbody.shape = CollisionShapeUtil.createShapeFromObject(object);
```

Set the mass (unit: kg) for the rigidbody:
```ts
rigidbody.mass = 50;
```

If you need a static rigidbody, simply set `mass` to `0`:
```ts
rigidbody.mass = 0;
```

You can manipulate the native `Ammo.js` rigidbody in the following way:
```ts
// Use the wait method to ensure the rigidbody initialization is complete
let bt = await rigidbody.wait();
bt.getCollisionShape(); // native rigidbody API
```

## Core Features

### Collision Detection and Event Handling

The rigidbody component supports detailed collision detection and provides the `enableCollisionEvent` property and `collisionEvent` callback function, allowing developers to listen for and handle the rigidbody's collision events.
```ts
rigidbody.enableCollisionEvent = true;
rigidbody.collisionEvent = (contactPoint: Ammo.btManifoldPoint, selfBody: Ammo.btRigidBody, otherBody: Ammo.btRigidBody) => {
    // Handle the collision event here
};
```
> Since the physics engine may detect the collision of the same pair of rigidbodies multiple times within each simulation step, the callback function will be triggered continuously during the collision.
>
> To avoid performance degradation, you can add debounce logic in the callback function, or limit the execution frequency of certain calculations.

Usually, after registering a collision event, the callback will be triggered whenever the rigidbody collides with other objects. For objects that do not need to be handled (such as the ground), you can set `isSilent` to `true` to avoid triggering the callback.

### Synchronization Between Rigidbody and Model Object

By enabling the `enablePhysicsTransformSync` property, you can ensure that the model object's transform (position, rotation, scale) is synchronized to the physical rigidbody in real time, thereby keeping the visual and physical behaviors consistent.

```ts
rigidbody.enablePhysicsTransformSync = true;

// After enabling synchronization, modifying the object's position, rotation, or scale will be synchronized to the rigidbody in real time
object.transform.x += 10;
object.transform.rotationX += 10;
object.transform.scaleX = 2;
```

## Ghost Object
A Ghost Object is a special kind of collision object used to detect overlap between objects without producing a physical reaction. Unlike a rigidbody, a ghost object is not affected by forces, nor does it exert forces on other objects, but it can detect contact with other objects and trigger corresponding events. This makes ghost objects very suitable for scenarios that require area detection or triggering events.

### Introduction to the Ghost Component
The physics system encapsulates the ghost object and provides the ghost trigger component [GhostTrigger](/physics/classes/GhostTrigger). Similar to the rigidbody, the ghost trigger component has many of the same properties and methods. The main `API`s are shown in the table below:

| Property | Type | Description |
| --- | --- | --- |
| ghostObject | `Ammo.btPairCachingGhostObject` | Gets the native ghost object of `Ammo.js` |
| shape | `Ammo.btCollisionShape` | The collision shape of the ghost object, defining the object's physical boundaries |
| enableCollisionEvent | `boolean` | Whether to enable collision events |
| collisionEvent | `Function` | Collision event callback |

| Method | Description |
| --- | --- |
| wait() | Asynchronously gets the fully initialized native ghost object instance |
| createAndAddGhostObject() | A static method that creates a ghost object and adds it to the physical world |

### Basic Usage
Similar to the usage of the rigidbody component, we can directly add the ghost trigger component and configure `shape` and `collisionEvent`:
```ts
import { GhostTrigger, CollisionShapeUtil } from "@orillusion/physics";

let ghostTrigger = object.addComponent(GhostTrigger);
ghostTrigger.shape = CollisionShapeUtil.createBoxShape(object);
ghostTrigger.collisionEvent = (contactPoint, selfBody, otherBody) => {
    // Handle the ghost object's collision event here
}
```

::: tip
After adding the component, the ghost trigger will automatically synchronize the model object's transform, ensuring that when the model moves or is adjusted, the position and shape of the ghost object are also updated in real time.
:::

Ghost objects are usually used for area detection, and in many cases there is no need to associate them with a specific model object. For this purpose, the `GhostTrigger` component provides a static method, allowing developers to directly call `createAndAddGhostObject()` to create a native ghost object without adding it in component form:

```ts
import { Ammo, CollisionShapeUtil, GhostTrigger, ContactProcessedUtil } from "@orillusion/physics";

let size = new Vector3(10, 5, 5);
let shape = CollisionShapeUtil.createBoxShape(null, size);
let position = new Vector3(0, 2.5, 0);
let rotation = Vector3.ZERO;
// Pass in the collision shape, position, and rotation information to create the ghost object and automatically add it to the physical world
let ghostObj = GhostTrigger.createAndAddGhostObject(shape, position, rotation);
// Register the event using the collision utility
ContactProcessedUtil.registerCollisionCallback(ghostObj.kB, (contactPoint, selfBody, otherBody) => {
    // Handle the ghost object's collision event here
});
```

## Example

In the following example, a simple area detection is implemented by applying the `Rigidbody` and `GhostTrigger` components.

<Demo src="/demos/physics/areaDetection.ts"></Demo>

<<< @/public/demos/physics/areaDetection.ts
