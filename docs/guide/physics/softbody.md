
# Softbody
A softbody is a type of object that produces significant deformation when subjected to external forces. Unlike a rigidbody, a softbody can simulate the dynamic behavior of flexible objects such as cloth and rubber. Although softbody simulation is more complex, it can provide more realistic animation effects for objects in the physics engine, especially when flexible materials are involved.

## Component Introduction
Softbody simulation is an advanced feature of the physics engine. The current system provides corresponding components for different types of softbodies:

- [ClothSoftbody](/physics/classes/ClothSoftbody) - Cloth softbody component
- [RopeSoftbody](/physics/classes/RopeSoftbody) - Rope softbody component

::: details The Synchronization Mechanism Between Softbody and Model Object
After a softbody component is added to a model object, the physics engine calculates the deformation and motion state of the softbody in each physics simulation step. This process covers the response of the flexible material under physical forces such as external forces and gravity. Based on these calculations, the physics engine updates the softbody's vertices, normals, and other data. The softbody component synchronizes these changes to the model object's geometry in its update function, so that it exhibits realistic physical effects in the scene. Please note that after a softbody component is added, the deformation of the geometry will be handled automatically by the physics engine, and usually no manual adjustment is required. Modifying the model object's transform may cause inconsistency with the physics simulation.
:::

Before using softbody components, you need to ensure that softbody simulation is enabled in the physics system:
```ts
Physics.init({useSoftBody: true});
```

## Basic Features

Softbody components provide some common `API`s, as shown in the table below:

| Property | Type | Description |
| --- | --- | --- |
| btSoftBody | `Ammo.btSoftBody` | Gets the native softbody object of `Ammo.js` |
| mass | `number` | The total mass of the softbody. Default value is `1` |
| margin | `number` | The collision margin. Default value is `0.15` |
| group | `number` | The collision group. Default value is `1` |
| mask | `number` | The collision mask. Default value is `-1` |
| influence | `number` | The influence of the anchor. Default value is `1` |
| disableCollision | `boolean` | Whether to disable collision with the anchored rigidbody. Default value is `false` |
| activationState | `ActivationState` | Sets the activation state of the softbody |

| Method | Description |
| --- | --- |
| wait() | Asynchronously gets the fully initialized native softbody instance |
| applyFixedNodes() | Fixes softbody nodes |
| clearAnchors() | Clears all anchors |
| appendAnchor() | Anchors a softbody node to a specified rigidbody (a wrapper around the native method, does not account for the transform) |

## Cloth Softbody [ClothSoftbody](/physics/classes/ClothSoftbody)

The cloth softbody component `ClothSoftbody` is mainly used to simulate the flexible dynamic behavior of cloth. The supported `API`s are as follows:

| Property | Type | Description |
| --- | --- | --- |
| clothCorners | `Vector3[]` | Defines the positions of the four corners of the cloth; by default, the corners are calculated from the plane's normal vector |
| fixNodeIndices | `CornerType[] \| number[]` | The node indices or corner types to fix on the cloth |
| anchorIndices | `CornerType[] \| number[]` | The anchor node indices or corner types of the cloth |
| anchorPosition | `Vector3` | The position of the cloth relative to the rigidbody after anchoring to it |
| anchorRotation | `Vector3` | The rotation of the cloth relative to the rigidbody after anchoring to it |
| anchorRigidbody | `Rigidbody` | The rigidbody required when adding anchors |

### Basic Usage

Add a `ClothSoftbody` component to an object:
```ts
import { Object3D, MeshRenderer, PlaneGeometry, LitMaterial, Vector3 } from '@orillusion/core'
import { ClothSoftbody } from '@orillusion/physics'

let object = new Object3D();
let mr = object.addComponent(MeshRenderer);

// Set the plane's normal vector, which determines the positions of the four corners of the cloth
mr.geometry = new PlaneGeometry(5, 5, 10, 10, Vector3.Z_AXIS);
mr.material = new LitMaterial();

// Add the cloth component
let clothSoftbody = object.addComponent(ClothSoftbody);
```
::: tip
Please note: the `ClothSoftbody` component only supports `PlaneGeometry` type geometry.
:::

By setting the `fixNodeIndices` property, you can fix specific cloth nodes:
```ts
clothSoftbody.fixNodeIndices = ['leftTop', 'rightTop'];
```

After the cloth is initialized, you can continue to fix nodes:
```ts
clothSoftbody.applyFixedNodes(['leftBottom', 'rightBottom']);
```

Set anchor nodes through the `anchorIndices` property, and specify the attached rigidbody:
```ts
clothSoftbody.anchorIndices = ['top'];
clothSoftbody.anchorRigidbody = rigidbody;

// After attaching to the rigidbody, the center point and rotation of the softbody will be consistent with the rigidbody's transform.
clothSoftbody.anchorPosition.set(0, 5, 0); // Set the relative position through anchorPosition
clothSoftbody.anchorRotation.set(0, 90, 0); // Set the relative rotation through anchorRotation
```

::: tip
When setting anchors, the softbody will be automatically attached to the rigidbody, and properties such as `influence` and `disableCollision` can be set.
:::


If you need to remove all anchors so that the softbody detaches from the anchored rigidbody, you can call the `clearAnchors()` method:
```ts
clothSoftbody.clearAnchors();
```

### Example
>
<Demo src="/examples/physics/Cloth.ts"></Demo>

<<< @/public/examples/physics/Cloth.ts


## Rope Softbody [RopeSoftbody](/physics/classes/RopeSoftbody)

The rope softbody component `RopeSoftbody` is mainly used to simulate the flexible dynamic behavior of ropes. The supported `API`s are as follows:

| API | Type | Description |
| --- | --- | --- |
| fixeds | `number` | Rope fixing option; `0`: neither end fixed, `1`: start point fixed, `2`: end point fixed, `3`: both ends fixed|
| fixNodeIndices | `number[]` | Fixed node indices; has the same effect as the `fixeds` property, but allows more flexible control of any node |
| elasticity | `number` | Rope elasticity; the larger the value, the lower the elasticity. Default value is `0.5` |
| anchorRigidbodyHead | `Rigidbody` | The rigidbody anchored at the start point of the rope |
| anchorRigidbodyTail | `Rigidbody` | The rigidbody anchored at the end point of the rope |
| anchorOffsetHead | `Vector3` | The offset of the anchor at the start point |
| anchorOffsetTail | `Vector3` | The offset of the anchor at the end point |
| setElasticity() | `void` | Sets the rope elasticity |
| buildRopeGeometry() | `GeometryBase` | A static method for building the rope (line) geometry |

### Basic Usage

Add a `RopeSoftbody` component to an object:

```ts
import { Object3D, MeshRenderer, PlaneGeometry, LitMaterial, Vector3 } from '@orillusion/core'
import { RopeSoftbody } from '@orillusion/physics'

let object = new Object3D();
let mr = object.addComponent(MeshRenderer);
let segmentCount = 10;
let startPos = new Vector3(0, 10, 0);
let endPos = new Vector3(10, 10, 0);
// Set the rope geometry
mr.geometry = RopeSoftbody.buildRopeGeometry(segmentCount, startPos, endPos);
mr.material = new LitMaterial();
mr.material.topology = 'line-list'; // Needs to be set to line rendering mode // [!code highlight] 

// Add the rope component
let ropeSoftbody = object.addComponent(RopeSoftbody);
```
::: tip
The `RopeSoftbody` component only supports `line` type geometry. For convenience, the component provides a `buildRopeGeometry()` static method.   
Note that when adding the material, the topology `topology` must be set to `'line-list'`.
:::


Fix rope nodes:
```ts
ropeSoftbody.fixeds = 1; // Fix the start point of the rope
```

Connect a rigidbody at the end:
```ts
ropeSoftbody.anchorRigidbodyTail = rigidbody;
ropeSoftbody.anchorOffsetTail.set(0, 1, 0); // After attaching to the rigidbody, the end point of the rope will be consistent with the rigidbody's position; set anchorOffsetTail to adjust the relative position
```

### Example
>
<Demo src="/examples/physics/Rope.ts"></Demo>

<<< @/public/examples/physics/Rope.ts


## Softbody Configuration

During softbody creation, some basic parameters are configured internally to control the softbody's behavior, including position iterations, damping coefficient, stiffness coefficient, etc. Developers can perform custom configuration by operating on the native `Ammo.js` softbody to ensure that the softbody has the desired physical effects:
```ts
// Asynchronously wait for the softbody initialization to complete
let bt = await clothSoftbody.wait()
// native softbody API
let sbConfig = bt.get_m_cfg();
sbConfig.set_kDF(0.2); // Set the dynamic friction coefficient
sbConfig.set_kDP(0.01); // Set the damping coefficient
sbConfig.set_kLF(0.02); // Set the lift coefficient
sbConfig.set_kDG(0.001); // Set the drag coefficient
...
```

::: tip
The properties of the softbody component are only effective when set during initialization.
:::
