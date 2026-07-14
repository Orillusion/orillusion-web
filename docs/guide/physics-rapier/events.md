# Triggers and Collision Events

A rigidbody can act as a **trigger (Sensor)** to detect objects entering and leaving a region, and can also listen for **collision contact** events. Both are implemented through callbacks on the `Rigidbody`.

::: warning Note
`isSensor` and `enableEvents` must be set before the component's `start()` (i.e. after adding the component and before the object is added to the scene).
:::

## Trigger (Sensor)

A trigger produces no physical collision response; it only detects other objects entering/leaving, and is commonly used for region detection (entering a zone, picking up items, etc.):

```ts
import { Object3D, Vector3 } from '@orillusion/core';
import { Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';

const sensor = obj.addComponent(Rigidbody);
sensor.bodyType = BodyType.Static;
sensor.shape = CollisionShapeUtil.createBoxShape(obj, new Vector3(2, 2, 2));
sensor.isSensor = true;       // Set as a trigger
sensor.enableEvents = true;   // Enable events

sensor.onTriggerEnter = (other) => console.log('enter', other.object3D.name);
sensor.onTriggerExit  = (other) => console.log('exit', other.object3D.name);
```

| Callback | When it fires |
| --- | --- |
| `onTriggerEnter(other)` | An object enters the trigger |
| `onTriggerExit(other)` | An object leaves the trigger |

## Collision Contact Events

By enabling `enableEvents` on a dynamic rigidbody, you can listen for contact with other objects:

```ts
const rb = body.addComponent(Rigidbody);
rb.bodyType = BodyType.Dynamic;
rb.mass = 1;
rb.shape = CollisionShapeUtil.createBoxShape(body, new Vector3(1, 1, 1));
rb.enableEvents = true;

rb.onContactBegin = (other) => { /* Contact begins (one-time) */ };
rb.onContactStay  = (other) => { /* Contact ongoing (every frame) */ };
rb.onContactEnd   = (other) => { /* Contact ends (one-time) */ };
```

| Callback | When it fires |
| --- | --- |
| `onContactBegin(other)` | Contact just started |
| `onContactStay(other)` | Contact is ongoing (every frame) |
| `onContactEnd(other)` | Contact ended |

> The callback parameter `other` is the other party's `Rigidbody`; you can access its owning node via `other.object3D`.

## Example

<Demo src="/demos/physics-rapier/Sample_rapierTriggers.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rapierTriggers.ts
