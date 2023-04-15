# Collider
Collider defines the actual physical characteristics of an object's response to collisions, which is typically invisible at the rendering layer. By setting the Collider component, the physical system can determine whether two objects intersect, resulting in a collision effect.

## Overview of Collider Components
We have encapsulated the following common types of collider shapes for user convenience:

1. Box Collider

![Box Collider](/images/cube.webp)

```ts
import { BoxColliderShape } from '@orillusion/physics'

// some codes here to create object...
let collider = object.addComponent(Collider);
collider.shape = new BoxColliderShape();
// set shape parameters...
collider.shape.size = new Vector3(2, 2, 2);
```
| Parameter | Type | Description |
| --- | --- | --- |
| size | Vecter3 | The size of the box collider. By default, the center of the box is at the object's center, and the length of the box is specified by creating a new instance of Vector3 and setting the length along the x, y, and z axes respectively. |

2. Sphere Collider

![Sphere Collider](/images/sphere.webp)

```ts
import { SphereColliderShape } from '@orillusion/physics'

// some codes here to create object...
let collider = object.addComponent(Collider);
collider.shape = new SphereColliderShape();
// set shape parameters...
collider.radius = 5;
```
| Parameter | Type | Description |
| --- | --- | --- |
| radius | number | The radius of the sphere collider. By default, the center of the sphere is at the object's center. |

3. Capsule Collider

![Capsule Collider](/images/capsule.webp)

```ts
import { CapsuleColliderShape } from '@orillusion/physics'

// some codes here to create object...
let collider = object.addComponent(Collider);
collider.shape = new CapsuleColliderShape();
// set shape parameters...
collider.radius = 2.5;
collider.height = 10;
```
| Parameter | Type | Description |
| --- | --- | --- |
| radius | number | The radius of the upper or lower half-sphere of the capsule collider. |
| height | number | The height of the capsule collider. By default, the center of the capsule is at the object's center. |


## Example of Applying Collider Components
After adding a Rigidbody component to an object, we can add a collider and specify the shape type of the collider to make the object respond to collisions:
```ts
import { Vecter3D, Object3D } from '@orillusion/core'
import { BoxColliderShape, Rigidbody } from '@orillusion/physics'

let object = new Object3D();
object.addComponent(Rigidbody);
let collider = obj.addComponent(Collider);
collider.shape = new BoxColliderShape();
collider.shape.size = new Vector3(2, 2, 2);
```

By using collider components, we can simulate realistic physical effects. The following example demonstrates a more complex scenario to further understand the effects that can be achieved through the physical system.

<Demo src="/demos/physics/demo2.ts"></Demo>

<<< @/public/demos/physics/demo2.ts
