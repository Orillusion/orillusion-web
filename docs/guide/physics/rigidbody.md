# Rigid Body
A rigid body is an object whose own deformation can be neglected after being subjected to external forces. Although ideal rigid bodies cannot exist in reality, many hard objects can be assumed to be perfect rigid bodies under the condition of speeds much smaller than the speed of light. Based on the characteristics of rigid bodies, the physics system of the engine can simulate the motion and collision logic of objects in the real world, creating realistic animation effects.

The rigid body is an important component in the engine's physics system. After connecting a rigid body, we can make the model object have mass and respond to gravity like a real-world object. For user convenience, we have encapsulated the rigid body component [Rigidbody](/physics/classes/Rigidbody). By adding the component, the rigid body can be added to the object:
```ts
import { Object3D } from '@orillusion/core'
import { Rigidbody } from '@orillusion/physics'

let object = new Object3D();
let rigidbody = object.addComponent(Rigidbody);
```

Set the mass (unit: kg) for the rigid body:
```ts
rigidbody.mass = 50;
```

If a static rigid body is required, set the mass to 0:

```ts
rigidbody.mass = 0;
```

If you want to manipulate the native ammo.js rigid body, you can get it through the following method:
```ts
let bt = rigidbody.btRigidbody;
```

After adding the rigid body, you need to add a collider to the object to enable the object to respond to gravity and collisions correctly. The details of the collider component [Collider](/guide/physics/collider) will be introduced in the next section.