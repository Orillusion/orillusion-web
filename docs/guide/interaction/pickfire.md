# Pick Event
In 3D applications, it is often necessary to click on objects in the scene. The engine supports ray bounding-box picking and frame buffer picking.

The supported pick event types:
| Name | Explanation |
| --- | --- |
| PICK_OVER | Triggered once when the touch point enters the range of the collider |
| PICK_OUT | Triggered once when the touch point leaves the range of the collider |
| PICK_CLICK | Triggered once on release when the touch point is pressed and released within the range of the collider |
| PICK_MOVE | Triggered when the touch point moves within the range of the collider |
| PICK_UP | Triggered once when the touch point is released within the range of the collider |
| PICK_DOWN | Triggered once when the touch point is pressed within the range of the collider |

## Pick Detection
The engine uniformly listens to mouse events, performs pick detection on all clickable `Object3D` in the scene, and triggers the corresponding events. Users can add a [ColliderComponent](/api/classes/ColliderComponent) component to an object to mark it as clickable, and listen to the corresponding [PointerEvent3D](/guide/interaction/pointer#pointerevent3d) event.  
The engine provides a unified wrapper for both pick types, which can be switched through simple configuration.

```ts
// Picking and the pick type need to be enabled in the configuration before the engine starts
let engine = await Engine3D.init({
    setting: {
        pick: {
            enable: true,
            // bound: bounding-box picking, pixel: frame buffer picking
            mode: `bound`, // or 'pixel'
        }
    }
})
// Pick detection depends on the Collider component
let obj = Object3D();
obj.addComponent(ColliderComponent);

// Add a PickEvent listener on the node; the corresponding event can be obtained in the callback function
obj.addEventListener(PointerEvent3D.PICK_CLICK, onPick, this);

// Or listen to click events of all objects through view.pickFire
view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, onPick, this);

// Get the event information in the callback function
function onPick(e: PointerEvent3D) {
    e.target // the clicked Object
    e.data.worldPos // the clicked position in world coordinates
    e.data.worldNormal // the normal at the clicked position in world coordinates
    ...
}
```

## Bounding-Box Picking
Ray bounding-box is a commonly used CPU-based picking method. It needs to calculate the intersection between the [ColliderShape](/api/classes/ColliderShape) of the [ColliderComponent](/api/classes/ColliderComponent) component and the mouse ray. It performs well in scenes with a small number of objects, but its precision is poor, because a bounding box often cannot accurately represent the real shape of an object.   

Currently, the basic `ColliderShape` provided by the engine includes [BoxColliderShape](/api/classes/BoxColliderShape), [SphereColliderShape](/api/classes/SphereColliderShape), and [CapsuleColliderShape](/api/classes/CapsuleColliderShape). You can also construct a [MeshColliderShape](/api/classes/MeshColliderShape) from the object's own `Mesh` shape.

```ts
import {Object3D, Collider, BoxColliderShape, Vector3} from '@orillusion/core';

let box = new Object3D();
let mr = box.addComponent(MeshRenderer);
// Set the box geometry
mr.geometry = new BoxGeometry(1,1,1);
// Add collider detection
let collider = box.addComponent(ColliderComponent);
// In bound mode, the collider shape and size need to be set manually
// The picking precision depends on how well box.geometry matches collider.shape
collider.shape = new BoxColliderShape().setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(1, 1, 1));
```

- The `box` on the left uses a `BoxColliderShape` of the same shape for detection, with good precision
- The `sphere` in the middle uses a `BoxColliderShape`, but the detection area is larger than the actual model, resulting in lower precision
- The `sphere` on the right uses a `MeshColliderShape`, which can perfectly fit all vertices of the model with the highest precision, but consumes more performance for collision detection. It is not recommended for complex objects

<Demo :height="400" src="/demos/interaction/pick_bound.ts"></Demo>

<<< @/public/demos/interaction/pick_bound.ts


## Frame Buffer Picking
Unlike the `bound` mode, `frame buffer picking` in `pixel` mode utilizes the pixel detection of the `GPU`, consuming almost no `CPU` performance. It can ignore the number and shape complexity of interactive objects in the scene and supports all touch events. When the scene models have complex shapes or there are a large number of objects, we recommend using the `pixel` mode for pick detection.

<Demo :height="400" src="/demos/interaction/pick_pixel.ts"></Demo>

<<< @/public/demos/interaction/pick_pixel.ts
