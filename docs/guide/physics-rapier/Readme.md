# Physics Overview (Rapier)

`@orillusion/physics-rapier` is a physics plugin based on [Rapier](https://rapier.rs/) (Rust → WASM), and is the **recommended** physics solution for new projects. It is independent of the Ammo-based [@orillusion/physics](/guide/physics/Readme.md) and can coexist with it in the same project.

::: tip Which one should I use?
- **New projects / rigidbodies, joints, characters, vehicles, raycast queries** → `@orillusion/physics-rapier` is recommended (smaller size, official types included, deterministic simulation, built-in query/character/vehicle APIs).
- **Soft bodies (cloth, rope)** → you currently still need `@orillusion/physics` (Ammo); the Rapier edition does not yet support soft bodies.
:::

## Comparison with the Ammo Edition

| | `@orillusion/physics` (Ammo) | `@orillusion/physics-rapier` |
| --- | --- | --- |
| Backend | Bullet 2.x (asm.js) | Rapier (Rust → WASM) |
| Size | ~1.95 MB | ~600 KB |
| Type definitions | Community-maintained | Official |
| Deterministic | No | Yes |
| Raycast / sweep / overlap queries | No public API | `PhysicsQuery.*` |
| Character controller | None | `CharacterController` |
| Vehicle | Bare `btRaycastVehicle` | `VehicleController` |
| Soft bodies | Supported (cloth, rope) | Not supported |
| Snapshot / replay | Partial | `Physics.snapshot / restore` |

## Installation

### Via NPM
```bash
npm install @orillusion/core --save
npm install @orillusion/physics-rapier --save
```
```ts
import { Engine3D } from '@orillusion/core';
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';
```

### Via CDN (ESModule)
```html
<script type="module">
  import { Engine3D } from 'https://unpkg.com/@orillusion/core/dist/orillusion.es.js'
  import { Physics } from 'https://unpkg.com/@orillusion/physics-rapier/dist/physics-rapier.es.js'
</script>
```

## Quick Start

The physics system must first be initialized with `await Physics.init()`, and `Physics.update()` must be called in the engine render loop to advance the simulation:

```ts
import { Engine3D, Object3D, MeshRenderer, BoxGeometry, LitMaterial, Vector3 } from '@orillusion/core';
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';

// Initialize the physics world (asynchronous, requires loading WASM)
await Physics.init();

// Advance physics in the render loop
const engine = await Engine3D.init({ renderLoop: () => Physics.update() });

// ……create scene / camera / view……

// A dynamic cube that will fall
const cube = new Object3D();
cube.y = 5;
const mr = cube.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(1, 1, 1);
mr.material = new LitMaterial();

const rb = cube.addComponent(Rigidbody);
rb.bodyType = BodyType.Dynamic;
rb.mass = 1;
rb.shape = CollisionShapeUtil.createBoxShape(cube, new Vector3(1, 1, 1));
scene.addChild(cube);
```

## Module Overview

| Class | Purpose | Tutorial |
| --- | --- | --- |
| `Physics` | Physics world singleton: initialization, stepping, gravity, snapshots | This page |
| `Rigidbody` / `BodyType` | Rigidbody component (dynamic / static / kinematic) | [Rigidbodies and Collision Shapes](/guide/physics-rapier/rigidbody.md) |
| `CollisionShapeUtil` | Creates various collision shapes | [Rigidbodies and Collision Shapes](/guide/physics-rapier/rigidbody.md) |
| `HingeJoint` / `SliderJoint` / `FixedJoint` / `SphericalJoint` / `GenericJoint` / `RopeJoint` / `SpringJoint` | Joint constraints | [Joints](/guide/physics-rapier/joint.md) |
| `Rigidbody` events | Triggers and collision callbacks | [Triggers and Events](/guide/physics-rapier/events.md) |
| `PhysicsQuery` | Raycast / sweep / overlap queries | [Physics Query](/guide/physics-rapier/query.md) |
| `CharacterController` / `VehicleController` | Character controller / vehicle | [Character and Vehicle](/guide/physics-rapier/character_vehicle.md) |

## Migrating from the Ammo Edition

Main changes:

```ts
- import { Physics, Rigidbody, ColliderComponent, BoxColliderShape } from '@orillusion/physics';
+ import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';
```

| Ammo Edition | Rapier Edition |
| --- | --- |
| `rb.mass = 0` means static | `rb.bodyType = BodyType.Static` (`mass = 0` also works) |
| `ColliderComponent` + `BoxColliderShape` | `rb.shape = CollisionShapeUtil.createBoxShape(obj, ...)` (no separate collider component needed) |
| `setLinearFactor(x, y, z)` | `rb.lockTranslations(x === 0, y === 0, z === 0)` |
| `Physics.world.rayTest(...)` (private) | `PhysicsQuery.raycast(origin, dir, { ... })` |
| Joints `HingeConstraint` / `SliderConstraint`, etc. | Renamed to `HingeJoint` / `SliderJoint`, etc. |
| `PointToPointConstraint` + `ConeTwistConstraint` | Unified into `SphericalJoint` |
| Soft bodies `ClothSoftbody` / `RopeSoftbody` | Not supported, keep using `@orillusion/physics` |

## Escape Hatch (Direct Rapier Access)

When you need native Rapier capabilities that the engine wrapper does not expose, you can access the underlying objects directly (this gives up cross-backend portability):

```ts
import RAPIER from '@dimforge/rapier3d-compat';

const native = rb.native;     // Rapier native RigidBody
const world = Physics.world;  // Rapier native World
world.integrationParameters.numSolverIterations = 8;
```
