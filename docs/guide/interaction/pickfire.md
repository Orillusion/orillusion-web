# Pick Event
In 3D applications, it is often necessary to click on objects in the scene. The engine supports ray box picking and frame buffer picking.

The supported pick events are:
| Name | Explanation |
| --- | --- |
| PICK_OVER | Triggered once when the touch point enters the collision body range |
| PICK_OUT | Triggered once when the touch point leaves the collision body range |
| PICK_CLICK | Triggered once when the touch point is pressed and released in the collision body range |
| PICK_MOVE | Triggered when the touch point moves within the collision body range |
| PICK_UP | Triggered once when the touch point is released within the collision body range |
| PICK_DOWN | Triggered once when the touch point is pressed within the collision body range |

## Pick Detection
The engine will catch all mouse events, performs hit detection on all clickable Object3D objects in the scene, and triggers the corresponding events. Users can add a [ColliderComponent](/api/classes/ColliderComponent) to mark objects as clickable and listen for the corresponding [PointerEvent3D](/guide/interaction/pointer#pointerevent3d) events.

The engine provides a unified encapsulation for two types of hit detection methods, which can be switched through simple configurations.

```ts
//Pick and pick type need to be configured before the engine starts
Engine3D.setting.pick.enable = true;
// Bound: ray box picking, pixel: frame buffer picking
Engine3D.setting.pick.mode = `bound`; // or 'pixel'

await Engine3D.init()
// Picking detection depends on the Collider component
let obj = Object3D();
obj.addComponent(ColliderComponent);

// Add a PickEvent event listener to the node, where the corresponding event can be obtained in the callback function
obj.addEventListener(PointerEvent3D.PICK_CLICK, onPick, this);

// Or listen to all object click events through view.pickFire
view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, onPick, this);

//Get event information in the callback function
function onPick(e: PointerEvent3D) {
    ...
}
```

## Ray Box Picking
Ray box picking (`bound` mode) is a commonly used CPU-based picking method. It needs to calculate the intersection of the [ColliderComponent](/api/classes/ColliderComponent)'s [ColliderShape](/api/classes/ColliderShape) and the mouse ray. It performs well in scenes with few objects, but has poor accuracy because the bounding box often cannot accurately represent the true shape of the object.   

Currenly, the basic `ColliderShape` provided by engine includes [BoxColliderShape](/api/classes/BoxColliderShape), [SphereColliderShape](/api/classes/SphereColliderShape) and [CapsuleColliderShape](/api/classes/CapsuleColliderShape). You can also construct a [MeshColliderShape](/api/classes/MeshColliderShape) based on the shape of the object's own `Mesh`.

```ts
import {Object3D, Collider, BoxColliderShape, Vector3} from '@orillusion/core';

let box = new Object3D();
let mr = box.addComponent(MeshRenderer);
// Set the box geometry
mr.geometry = new BoxGeometry(1,1,1);
// Add collision box detection
let collider = box.addComponent(ColliderComponent);
// For the bound mode, the style and size of the collision box need to be set manually
// The picking accuracy depends on the match between box.geometry and collider.shape
collider.shape = new BoxColliderShape().setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(1, 1, 1));
```

- The `box` on the left uses `BoxColliderShape` with the same shape for detection, which has better accuracy.
- The `sphere` on the right also uses `BoxColliderShape`, but the clickable area is larger than the actual model, resulting in lower accuracy.

<Demo :height="400" src="/demos/interaction/pick_bound.ts"></Demo>

<<< @/public/demos/interaction/pick_bound.ts


## Frame Buffer Picking
Unlike the `bound` mode, `Frame Buffer Picking` (`pixel` mode) utilizes the pixel detection of the `GPU`, which consumes almost no `CPU` performance and can ignore the number and complexity of interactive objects in the scene, supporting all touch events. When the shape of the scene model is complex or there are a large number of objects, we recommend using the `pixel` mode for picking detection.

<Demo :height="400" src="/demos/interaction/pick_pixel.ts"></Demo>

<<< @/public/demos/interaction/pick_pixel.ts
