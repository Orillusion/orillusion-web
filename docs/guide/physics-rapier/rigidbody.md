# Rigidbodies and Collision Shapes

The rigidbody (`Rigidbody`) is the core component of physics simulation, and the collision shape (created via `CollisionShapeUtil`) describes the geometric outline that an object uses to participate in collisions.

## Rigidbody Types

Set the rigidbody type via `rb.bodyType`:

| Type | Description |
| --- | --- |
| `BodyType.Dynamic` | Dynamic rigidbody, driven by gravity and collisions, requires `mass` to be set |
| `BodyType.Static` | Static rigidbody, never moves (ground, walls, etc.) |
| `BodyType.Kinematic` | Kinematic rigidbody, its position driven by code, unaffected by forces but pushes dynamic objects |

```ts
import { Object3D, MeshRenderer, BoxGeometry, LitMaterial, Vector3 } from '@orillusion/core';
import { Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';

// Static ground
const floor = new Object3D();
const fb = floor.addComponent(Rigidbody);
fb.bodyType = BodyType.Static;
fb.shape = CollisionShapeUtil.createPlaneShape(250, 0.05);
scene.addChild(floor);

// Dynamic cube
const box = new Object3D();
box.y = 5;
const rb = box.addComponent(Rigidbody);
rb.bodyType = BodyType.Dynamic;
rb.mass = 1;
rb.shape = CollisionShapeUtil.createBoxShape(box, new Vector3(1, 1, 1));
scene.addChild(box);
```

## Collision Shapes

`CollisionShapeUtil` provides factory methods for common shapes:

| Method | Shape |
| --- | --- |
| `createBoxShape(obj, halfExtents)` | Box |
| `createSphereShape(obj, radius)` | Sphere |
| `createCapsuleShape(...)` | Capsule |
| `createCylinderShape(...)` | Cylinder |
| `createConeShape(...)` | Cone |
| `createPlaneShape(size, thickness)` | Plane |
| `createConvexHullShape(...)` | Convex hull |
| `createTrimeshShape(...)` | Triangle mesh (static) |
| `createHeightfieldShape(...)` | Heightfield terrain |
| `createCompoundShape(...)` | Compound shape |

```ts
rb.shape = CollisionShapeUtil.createSphereShape(sphere, 1);
```

## Common Properties and Methods

| Member | Description |
| --- | --- |
| `bodyType` | Rigidbody type (see above) |
| `mass` | Mass (dynamic rigidbody) |
| `shape` | Collision shape |
| `native` | Underlying Rapier native `RigidBody` (escape hatch) |
| `enableCcd(true)` | Enables continuous collision detection (prevents fast-moving objects from tunneling) |
| `lockTranslations(x, y, z)` | Locks translation on the specified axes |
| `lockRotations(x, y, z)` | Locks rotation on the specified axes |

```ts
// High-speed bullet: enable CCD to prevent tunneling
rb.enableCcd(true);

// Allow movement only on the XZ plane (lock Y-axis translation) — equivalent to Ammo's setLinearFactor(1,0,1)
rb.lockTranslations(false, true, false);
```

> Shape creation depends on the object's current geometry/scale, so it is recommended to create the `shape` after setting up the `MeshRenderer` and `Transform`.

## Example

<Demo src="/demos/physics-rapier/Sample_rigidbody.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rigidbody.ts
