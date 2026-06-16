
# Constraint

Physical constraints are used to limit the relative motion between two physical objects (usually rigidbodies). They allow more complex behaviors to be created in physics simulations, such as hinges, sliders, or fixed connections. By properly configuring constraints, you can implement various mechanical structures and connection methods found in the real world.

## Constraint Component Overview

Constraints are added and used in the form of components. The constraint base class implements common constraint functionality, while each specific constraint component inherits from this base class and encapsulates the underlying `Ammo.js` constraint types, providing `API`s similar to the native constraints. This allows developers to skip the process of manually creating constraints and to quickly and conveniently integrate various physical constraints to achieve complex physical behaviors.

```ts
import { Object3D } from '@orillusion/core';
import { HingeConstraint, Rigidbody } from '@orillusion/physics';

let object = new Object3D();
let targetObject = new Object3D();
let rigidbody = object.addComponent(Rigidbody);
let targetRigidbody = targetObject.addComponent(Rigidbody);

// Configure the two rigidbodies respectively, such as setting mass, shape, etc.
... 

// Add a hinge constraint to object and specify the target rigidbody; the constraint will connect these two rigidbodies
let hingeConstraint = object.addComponent(HingeConstraint);
hingeConstraint.targetRigidbody = targetRigidbody;
// For specific constraint configuration, refer to the API described below
...
```

> Please note that an object must have a [Rigidbody](/guide/physics/Rigidbody.html) component added before adding a constraint component.

## Basic Usage

The following are the common `API`s for constraints. Each constraint type also provides its own unique configuration options.

| Property | Type | Description |
| --- | --- | --- |
| constraint | `Ammo.btTypedConstraint` | Gets the native `Ammo.js` constraint |
| breakingThreshold | `number` | Breaking threshold; the larger the value, the harder it is for the constraint to break |
| disableCollisionsBetweenLinkedBodies | `boolean` | Disables collisions between linked rigidbodies; default value is `true` |
| targetRigidbody | `Rigidbody` | Target rigidbody; the constraint will limit the relative motion between the current rigidbody and the target rigidbody |
| pivotSelf | `Vector3` | The pivot point of the rigidbody itself, which determines the rotation center of the constraint |
| pivotTarget | `Vector3` | The pivot point of the target rigidbody |
| rotationSelf | `Quaternion` | The rotation setting of the rigidbody itself |
| rotationTarget | `Quaternion` | The rotation setting of the target rigidbody |

| Method | Description |
| --- | --- |
| wait() | Asynchronously gets the native constraint instance once initialization is complete |
| resetConstraint() | Resets the constraint, destroying the current constraint instance, then recreating and returning a new constraint instance |

## Overload Support

In native `Ammo.js`, except for `FixedConstraint`, all other constraints provide multiple constructor overloads. To ensure the completeness of these features, the constraint components also provide corresponding overload support. Generally, if the `targetRigidbody` property is not set, the constraint will be created with a single rigidbody by default. Developers can freely choose the appropriate constraint construction method based on their specific needs.

## Constraint Types

The current system has integrated the 7 main constraint types from `Ammo.js`, each suitable for specific application scenarios.

### 1. Hinge Constraint  [HingeConstraint](/physics/classes/HingeConstraint)

The hinge constraint allows an object to rotate around a certain axis, suitable for scenarios requiring single-axis rotation such as doors and robotic arms.

| Property | Type | Description |
| --- | --- | --- |
| axisSelf | `Vector3` | The hinge axis direction on the rigidbody itself; default value is `Vector3.UP` |
| axisTarget | `Vector3` | The hinge axis direction on the target rigidbody; default value is `Vector3.UP` |
| useReferenceFrameA | `boolean` | Whether to use the reference frame of the rigidbody itself; default value is `true` |
| useTwoBodiesTransformOverload | `boolean` | Whether to use the two-rigidbody transform overload; default value is `false` |

| Method | Description |
| --- | --- |
| setLimit() | Sets the rotation limit |
| enableAngularMotor() | Enables or disables the angular motor |

```ts
let hingeConstraint = object.addComponent(HingeConstraint);
hingeConstraint.setLimit(-Math.PI / 2, Math.PI / 2, 0.9, 0.3);
hingeConstraint.enableAngularMotor(true, 1.0, 10.0);
```

### 2. Slider Constraint  [SliderConstraint](/physics/classes/SliderConstraint)

The slider constraint allows an object to translate along an axis and rotate around that axis, suitable for application scenarios such as slide rails or elevators.

| Property | Type | Description |
| --- | --- | --- |
| lowerLinLimit | `number` | Lower limit of linear motion |
| upperLinLimit | `number` | Upper limit of linear motion |
| lowerAngLimit | `number` | Lower limit of angular motion |
| upperAngLimit | `number` | Upper limit of angular motion |
| poweredLinMotor | `boolean` | Whether to enable the linear motor |
| maxLinMotorForce | `number` | The maximum force of the linear motor |
| targetLinMotorVelocity | `number` | The target velocity of the linear motor |

```ts
let sliderConstraint = object.addComponent(SliderConstraint);
sliderConstraint.lowerLinLimit = -10;
sliderConstraint.upperLinLimit = 10;
sliderConstraint.poweredLinMotor = true;
sliderConstraint.maxLinMotorForce = 100;
sliderConstraint.targetLinMotorVelocity = 5;
```

### 3. Fixed Constraint  [FixedConstraint](/physics/classes/FixedConstraint)

The fixed constraint completely fixes two objects together, limiting their relative position and rotation, thereby achieving a rigid connection effect.

```ts
let fixedConstraint = object.addComponent(FixedConstraint);
fixedConstraint.targetRigidbody = targetRigidbody; // The fixed constraint type must specify a target rigidbody
```

### 4. Point-to-Point Constraint  [PointToPointConstraint](/physics/classes/PointToPointConstraint)

This constraint limits the relative motion between two points but allows them to rotate freely in space. It is commonly used to simulate the connection of ropes or chains.

```ts
let p2pConstraint = object.addComponent(PointToPointConstraint);
p2pConstraint.targetRigidbody = targetRigidbody;
p2pConstraint.pivotSelf.set(0, 0, 0);
p2pConstraint.pivotTarget.set(0, 5, 0);
```

### 5. Cone Twist Constraint  [ConeTwistConstraint](/physics/classes/ConeTwistConstraint)

The cone twist constraint is used to create motion similar to a ball-and-socket joint, allowing an object to rotate freely within a cone-shaped range and limiting its twist angle around a certain axis.

| Property | Type | Description |
| --- | --- | --- |
| twistSpan | `number` | Twist angle limit, the twist range around the X axis |
| swingSpan1 | `number` | Swing angle limit 1, the swing range around the Y axis |
| swingSpan2 | `number` | Swing angle limit 2, the swing range around the Z axis |

```ts
let coneTwistConstraint = object.addComponent(ConeTwistConstraint);
coneTwistConstraint.twistSpan = Math.PI / 4;  // Limit the twist angle to 45 degrees
```

### 6. Generic 6-DOF Constraint  [Generic6DofConstraint](/physics/classes/Generic6DofConstraint)

This constraint allows motion limits to be freely set along three linear axes and three angular axes, providing maximum flexibility to meet various complex connection requirements.

| Property | Type | Description |
| --- | --- | --- |
| linearLowerLimit | `Vector3` | Lower limit of linear motion |
| linearUpperLimit | `Vector3` | Upper limit of linear motion |
| angularLowerLimit | `Vector3` | Lower limit of angular motion |
| angularUpperLimit | `Vector3` | Upper limit of angular motion |
| useLinearFrameReferenceFrame | `boolean` | Whether to use the linear reference coordinate frame |

```ts
let sixDofConstraint = object.addComponent(Generic6DofConstraint);
sixDofConstraint.linearLowerLimit = new Vector3(-1, -1, -1);  // Set the linear lower limit
sixDofConstraint.linearUpperLimit = new Vector3(1, 1, 1);     // Set the linear upper limit
```

### 7. Generic 6-DOF Spring Constraint  [Generic6DofSpringConstraint](/physics/classes/Generic6DofSpringConstraint)

This constraint adds spring characteristics on top of the generic 6-DOF constraint, allowing it to simulate spring effects such as stretching and vibration.

| Method | Description |
| --- | --- |
| enableSpring() | Enables or disables the spring functionality |
| setStiffness() | Sets the stiffness of the spring |
| setDamping() | Sets the damping of the spring |
| setEquilibriumPoint() | Sets the equilibrium point of the spring |

```ts
let springConstraint = object.addComponent(Generic6DofSpringConstraint);
// Enable and configure the spring: indices 0, 1, 2 correspond to the linear axes (x, y, z), and 3, 4, 5 correspond to the angular axes (x, y, z)
for (let j = 3; j < 6; j++) {
    dofSpringConstraint.enableSpring(j, true);
    dofSpringConstraint.setStiffness(j, 10.0);
    dofSpringConstraint.setDamping(j, 0.5);
    dofSpringConstraint.setEquilibriumPoint(j);
}
```

<Demo src="/examples/physics/dofSpringConstraint.ts"></Demo>

<<< @/public/examples/physics/dofSpringConstraint.ts

::: tip Notes
When two rigidbodies are connected through a constraint, the connection point of the target rigidbody is by default located at the center of the rigidbody itself. You can modify their relative positions by adjusting the `pivotSelf` or `pivotTarget` properties when creating the constraint. However, if the two rigidbodies are overlapping before the constraint is added, this may cause instability in the constraint simulation. It is recommended to ensure that the two rigidbodies do not overlap before adding the constraint.
:::

## Example

Properly configuring physical constraints can significantly enhance the expressiveness and realism of physics simulations. The following example demonstrates the interaction among rigidbodies, various constraints, and softbodies, fully reflecting their collaborative effects.

<Demo src="/examples/physics/MultipleConstraints.ts"></Demo>

<<< @/public/examples/physics/MultipleConstraints.ts
