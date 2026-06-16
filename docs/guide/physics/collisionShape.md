# Collision Shape
The collision shape `Collision Shape` defines the actual physical shape that a rigidbody uses to respond to collisions. The physics system uses the `Shape` to determine whether two objects intersect, thereby producing collision effects.

:::tip
Starting from `@orillusion/physics@0.3`, we recommend directly using the native `Ammo` `Shape` to manage collision shapes.
:::

## Collision Shape Utility
To simplify the process of creating collision shapes, the [CollisionShapeUtil](/physics/classes/CollisionShapeUtil) utility class provides convenient methods for building physical shapes, covering a variety of common collision shapes. This utility class encapsulates the complex process of generating physical shapes into a series of easy-to-call methods, enabling developers to quickly and efficiently generate matching collision shapes for model objects.

### Built-in Shapes

Currently, the physical shape creation methods provided by [CollisionShapeUtil](/physics/classes/CollisionShapeUtil) are shown in the table below:

| Function Name | Return Type | Description |
| --- | --- | --- |
| createStaticPlaneShape | `Ammo.btStaticPlaneShape` | Creates a static plane collision shape, suitable for an infinite and stationary plane, such as a ground or wall |
| createBoxShape | `Ammo.btBoxShape` | Box collision shape |
| createSphereShape | `Ammo.btSphereShape` | Sphere collision shape |
| createCapsuleShape | `Ammo.btCapsuleShape` | Capsule collision shape |
| createCylinderShape | `Ammo.btCylinderShape` | Cylinder collision shape |
| createConeShape | `Ammo.btConeShape` | Cone collision shape |
| createCompoundShape | `Ammo.btCompoundShape` | Compound shape, combining multiple child shapes into one complex collision shape |
| createHeightfieldTerrainShape | `Ammo.btHeightfieldTerrainShape` | Heightfield shape, suitable for terrain collision detection |
| createConvexHullShape | `Ammo.btConvexHullShape` | Convex hull shape, suitable for fast collision detection of dynamic objects |
| createConvexTriangleMeshShape | `Ammo.btConvexTriangleMeshShape` | Convex triangle mesh shape, suitable for dynamic objects requiring complex geometry representation |
| createBvhTriangleMeshShape | `Ammo.btBvhTriangleMeshShape` | Bounding Volume Hierarchy `BVH` mesh shape, suitable for static objects requiring complex geometry representation |
| createGImpactMeshShape | `Ammo.btGImpactMeshShape` | `GImpact` mesh shape, suitable for complex triangle mesh collision detection, especially for dynamic objects |
| createShapeFromObject | `Ammo.btCollisionShape` | Creates a collision shape matching the geometry type of an `Object3D` |

### Complex Structure Support
`CollisionShapeUtil` provides two `API`s that support handling nested objects. These `API`s can automatically generate appropriate collision shapes or extract geometry data, suitable for complex structures created by the engine, without the need to manually configure each child object individually.

| Function Name | Return Type | Description |
| --- | --- | --- |
| createCompoundShapeFromObject | `Ammo.btCompoundShape` | Automatically creates a compound collision shape based on the geometry types of the passed-in `Object3D` and its child objects |
| getAllMeshVerticesAndIndices | `{ vertices:Float32Array; indices: Uint16Array; }` | Returns all vertex and index data of the `Object3D` and its child objects, transformed by the world transformation matrix, which can be used to create high-precision mesh collision shapes |

## Basic Usage

The process of creating collision shapes has been simplified. In most cases, you only need to pass in an `Object3D` to generate a collision shape. The following is example code for creating basic collision shapes using `CollisionShapeUtil`:

```ts
import { Object3D, MeshRenderer, CylinderGeometry, LitMaterial } from '@orillusion/core';
import { CollisionShapeUtil } from '@orillusion/physics';

// Create a cone
const coneObject = new Object3D();
let mr = coneObject.addComponent(MeshRenderer);
mr.geometry = new CylinderGeometry(0.01, 1, 5);
mr.material = new LitMaterial();

// For simple geometry types such as box, sphere, cone, and cylinder, the generic method can be used to create the collision shape
let coneShape1 = CollisionShapeUtil.createShapeFromObject(coneObject);
// Or create the cone shape by computing the local bounding box
let coneShape2 = CollisionShapeUtil.createConeShape(coneObject);
// Or specify the shape dimensions
let coneShape3 = CollisionShapeUtil.createConeShape(null, 1, 5);
```

Meanwhile, the construction process for complex collision shapes has also been simplified. To meet custom requirements, developers can pass in `vertices` and `indices` to generate custom collision shapes:

```ts
const object = await engine.res.loadGltf('model.glb');

// Create a BVH mesh shape using the model's own vertices and indices
let bvhMeshShape = CollisionShapeUtil.createBvhTriangleMeshShape(object);

// Or manually pass in vertices and indices
const vertices = [...]
const indices = [...]
const vertices = new Float32Array(vertices);
const indices = new Uint16Array(data.indices);
let bvhMeshShape = CollisionShapeUtil.createBvhTriangleMeshShape(object, vertices, indices);
```

In addition, based on `TerrainGeometry` or `PlaneGeometry`, you can create a heightfield collision shape suitable for simulating terrain:

```ts
import { TerrainGeometry } from '@orillusion/geometry';

// Load textures and create terrain geometry
let heightTexture = await engine.res.loadTexture('height.png');
let terrainGeometry = new TerrainGeometry(100, 100, 60, 60);
terrainGeometry.setHeight(heightTexture as BitmapTexture2D, 50);

const terrain = new Object3D();
let mr = terrain.addComponent(MeshRenderer);
mr.geometry = terrainGeometry;
mr.material = new LitMaterial();

// Create terrain collision shape
let terrainShape = CollisionShapeUtil.createHeightfieldTerrainShape(terrain);
```

Through the operations above, we can create a variety of collision shapes to suit different physical needs. However, to achieve a complete physics simulation, collision shapes alone are not enough. To obtain realistic physical effects, they must also be used in combination with a [Rigidbody](/guide/physics/Rigidbody.html), thereby enabling complete physical interaction and simulation.


## Example

Different collision shapes are suitable for various physical scenarios. The following example demonstrates how to use `CollisionShapeUtil` to generate corresponding collision shapes for various geometries, and applies these shapes in the physics system in combination with a [Rigidbody](/guide/physics/Rigidbody.html).

<Demo src="/demos/physics/shapes.ts"></Demo>

<<< @/public/demos/physics/shapes.ts

More [physics examples](/example/physics/Dominoes)
