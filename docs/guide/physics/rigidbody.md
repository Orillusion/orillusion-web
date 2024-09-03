# Inner Components
To facilitate the use of the physics system, the engine has encapsulated some commonly used physics components. For additional functionality, users can call the `Ammo` object to access more native `APIs`.

## Rigid Body
A rigid body is an object whose own deformation can be neglected after being subjected to external forces. Although ideal rigid bodies cannot exist in reality, many hard objects can be assumed to be perfect rigid bodies under the condition of speeds much smaller than the speed of light. Based on the characteristics of rigid bodies, the physics system of the engine can simulate the motion and collision logic of objects in the real world, creating realistic animation effects.

The rigid body is an important component in the engine's physics system. After connecting a rigid body, we can make the model object have mass and respond to gravity like a real-world object. For user convenience, we have encapsulated the rigid body component [Rigidbody](/physics/classes/Rigidbody). By adding the component, the rigid body can be added to the object:
```ts
import { Object3D } from '@orillusion/core'
import { Rigidbody } from '@orillusion/physics'

let object = new Object3D();
let rigidbody = object.addComponent(Rigidbody);
```

### Basic Operations
Set the mass (unit: kg) for the rigid body:
```ts
rigidbody.mass = 50;
```

If a static rigid body is required, set the `mass` to `0`:
```ts
rigidbody.mass = 0;
```

Add a velocity to the rigid body:
```ts
rigidbody.velocity = new Vector(10, 0, 0);
```

If you want to manipulate the native `Ammo.js` rigid body, you can get it through the following method:
```ts
let bt = rigidbody.btRigidbody;
// native rigidbody API
bt.getCollisionShape(); 
bt.getWorldTransform();
...
```

### Collision Shape
The `Collision Shape` defines the actual physical shape that a rigid body uses for collision responses. The physics system uses the `Shape` to determine whether two objects intersect, which in turn produces collision effects.

:::tip
Starting from `@orillusion/physics@0.3`, we recommend directly using the native `Ammo.btShape` to manage collision shapes.
:::

1. Box Collider

![Box Collider](/images/cube.webp)

| Parameter | Type | Description |
| --- | --- | --- |
| size | btVector3 | The size of a box-shaped collision shape. By default, this is specified as half the length along the x, y, and z axes from the center of the object, which corresponds to half the width, height, and depth of the object |

```ts
import { Object3D } from '@orillusion/core'
import { Ammo, Rigidbody } from '@orillusion/physics'

let object = new Object3D();
let mr = object.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(1, 1, 1); // size 1
mr.material = new LitMaterial();
let rigidbody = object.addComponent(Rigidbody);
rigidbody.mass = 10;

// half length of BoxGeometry size
let shape = new Ammo.btBoxShape(new Ammo.btVector3(1/2, 1/2, 1/2));
rigidbody.shape = shape;
```

2. Sphere Collider

![Sphere Collider](/images/sphere.webp)

| Parameter | Type | Description |
| --- | --- | --- |
| radius | number | The radius of a spherical collision shape |

```ts
import { Object3D } from '@orillusion/core'
import { Ammo, Rigidbody } from '@orillusion/physics'

let object = new Object3D();
let mr = object.addComponent(MeshRenderer);
mr.geometry = new SphereGeometry(1, 8, 8); // radius 1
mr.material = new LitMaterial();
let rigidbody = object.addComponent(Rigidbody);
rigidbody.mass = 10;

// shape with radius 1
let shape = new Ammo.btSphereShape(1);
rigidbody.shape = shape;
```


3. Capsule Collider

![Capsule Collider](/images/capsule.webp)

| Parameter | Type | Description |
| --- | --- | --- |
| radius | number | The radius of the top and bottom hemispheres of a capsule collision shape |
| height | number | and the height of the cylindrical middle section |

```ts
import { Object3D } from '@orillusion/core'
import { Ammo, Rigidbody } from '@orillusion/physics'

// cylinder
let object = new Object3D();
let mr = object.addComponent(MeshRenderer);
mr.geometry = new CylinderGeometry(1, 1, 5); // radius 1, height 5
// top sphere
let topSphere = new Object3D();
topSphere.y = 2.5;
let mrTop = topSphere.addComponent(MeshRenderer);
mrTop.geometry = new SphereGeometry(1, 8, 8);
object.addChild(topSphere);
// bottom sphere
let bottomSphere = new Object3D();
bottomSphere.y = -2.5;
let mrBottom = bottomSphere.addComponent(MeshRenderer);
mrBottom.geometry = new SphereGeometry(1, 8, 8);
object.addChild(bottomSphere);
mr.material = mrBottom.material = mrTop.material = new LitMaterial();

let rigidbody = object.addComponent(Rigidbody);
rigidbody.mass = 10;

// CapsuleShape with radius 1, body height 5
let shape = new Ammo.btCapsuleShape(1, 5);
rigidbody.shape = shape;
```

In addition to the common shapes mentioned above，`Ammo.js` also provides more complex collision shapes such as `btStaticPlaneShape`, `btCylinderShape`, `btConeShape`, `btConvexHullShape`, `btConcaveShape` and `btHeightfieldTerrainShape`.

Using these collision shapes, we can simulate more complex physical scenarios. Let's proceed with an example to further demonstrate the usage of various shapes in the physics system.

<Demo src="/demos/physics/demo2.ts"></Demo>

<<< @/public/demos/physics/demo2.ts

## SoftBody and Constraint

Similar to rigid bodies, the engine encapsulates native `Ammo.js` objects such as `btSoftBody`, `btFixedConstraint`, `btGeneric6DofConstraint`, `btHingeConstraint` and `btSliderConstraint` to simulate more complex physical effects like cloth, springs, hinges, and sliders.

Since these complex `Ammo` objects contain a large number of physical parameter settings, we cannot cover all the details here. Users can search for `Bullet` documentation to understand the physical meanings and usage rules of these `APIs`.

Here, we will demonstrate basic usage methods for some components through an example. For more `Ammo` physics examples, please refer to the [example page](/example/physics/Dominoes).

<Demo src="/examples/physics/MultipleConstraints.ts"></Demo>

<<< @/public/examples/physics/MultipleConstraints.ts