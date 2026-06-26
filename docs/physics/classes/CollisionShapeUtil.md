[**@orillusion/physics**](../README.md)

***

# Class: CollisionShapeUtil

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L15)

CollisionShapeUtil
Provides utilities for building various collision shapes.

## Constructors

### Constructor

> **new CollisionShapeUtil**(): `CollisionShapeUtil`

#### Returns

`CollisionShapeUtil`

## Methods

### createStaticPlaneShape()

> `static` **createStaticPlaneShape**(`planeNormal?`, `planeConstant?`): [`btStaticPlaneShape`](../@orillusion/namespaces/Ammo/classes/btStaticPlaneShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L22)

Creates a static plane collision shape, suitable for static infinite planes such as the ground or walls.

#### Parameters

##### planeNormal?

`Vector3` = `Vector3.UP`

The plane normal vector. Defaults to Vector3.UP.

##### planeConstant?

`number` = `0`

The plane constant, representing the distance from the plane to the origin. Defaults to 0.

#### Returns

[`btStaticPlaneShape`](../@orillusion/namespaces/Ammo/classes/btStaticPlaneShape.md)

Ammo.btStaticPlaneShape - The static plane collision shape instance.

***

### createBoxShape()

> `static` **createBoxShape**(`object3D`, `size?`): [`btBoxShape`](../@orillusion/namespaces/Ammo/classes/btBoxShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:36](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L36)

Creates a box collision shape, suitable for box-shaped objects with well-defined dimensions.
If no size is specified, the bounding box size of the 3D object is used.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### size?

`Vector3`

Optional. The dimensions of the box collision shape.

#### Returns

[`btBoxShape`](../@orillusion/namespaces/Ammo/classes/btBoxShape.md)

Ammo.btBoxShape - The box collision shape instance.

***

### createSphereShape()

> `static` **createSphereShape**(`object3D`, `radius?`): [`btSphereShape`](../@orillusion/namespaces/Ammo/classes/btSphereShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:51](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L51)

Creates a sphere collision shape, suitable for spherical objects.
If no radius is specified, the bounding box radius `X` of the 3D object is used.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### radius?

`number`

Optional. The radius of the sphere collision shape.

#### Returns

[`btSphereShape`](../@orillusion/namespaces/Ammo/classes/btSphereShape.md)

Ammo.btSphereShape - The sphere collision shape instance.

***

### createCapsuleShape()

> `static` **createCapsuleShape**(`object3D`, `radius?`, `height?`): [`btCapsuleShape`](../@orillusion/namespaces/Ammo/classes/btCapsuleShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:66](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L66)

Creates a capsule collision shape, suitable for capsule-shaped objects.
If no dimensions are specified, the bounding box radius `X` and height `Y` of the 3D object are used.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### radius?

`number`

Optional. The radius of the capsule.

##### height?

`number`

Optional. The height of the cylindrical middle section of the capsule.

#### Returns

[`btCapsuleShape`](../@orillusion/namespaces/Ammo/classes/btCapsuleShape.md)

Ammo.btCapsuleShape - The capsule collision shape instance.

***

### createCylinderShape()

> `static` **createCylinderShape**(`object3D`, `radius?`, `height?`): [`btCylinderShape`](../@orillusion/namespaces/Ammo/classes/btCylinderShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:85](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L85)

Creates a cylinder collision shape, suitable for cylindrical objects.
If no dimensions are specified, the bounding box radius `X` and height `Y` of the 3D object are used.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### radius?

`number`

Optional. The radius of the cylinder.

##### height?

`number`

Optional. The full height of the cylinder.

#### Returns

[`btCylinderShape`](../@orillusion/namespaces/Ammo/classes/btCylinderShape.md)

Ammo.btCylinderShape - The cylinder collision shape instance.

***

### createConeShape()

> `static` **createConeShape**(`object3D`, `radius?`, `height?`): [`btConeShape`](../@orillusion/namespaces/Ammo/classes/btConeShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:105](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L105)

Creates a cone collision shape, suitable for cone-shaped objects.
If no dimensions are specified, the bounding box radius `X` and height `Y` of the 3D object are used.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### radius?

`number`

Optional. The radius of the cone.

##### height?

`number`

Optional. The height of the cone.

#### Returns

[`btConeShape`](../@orillusion/namespaces/Ammo/classes/btConeShape.md)

Ammo.btConeShape - The cone collision shape instance.

***

### createCompoundShape()

> `static` **createCompoundShape**(`childShapes`): [`btCompoundShape`](../@orillusion/namespaces/Ammo/classes/btCompoundShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:121](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L121)

Creates a compound shape that combines multiple child shapes into a single shape.

#### Parameters

##### childShapes

[`ChildShape`](../interfaces/ChildShape.md)[]

An array containing child shape instances along with their position and rotation properties.

#### Returns

[`btCompoundShape`](../@orillusion/namespaces/Ammo/classes/btCompoundShape.md)

Ammo.btCompoundShape - The compound shape instance.

***

### createCompoundShapeFromObject()

> `static` **createCompoundShapeFromObject**(`object3D`, `includeParent?`): [`btCompoundShape`](../@orillusion/namespaces/Ammo/classes/btCompoundShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:142](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L142)

Creates a compound collision shape from an Object3D and its child objects.

#### Parameters

##### object3D

`Object3D`

The 3D object containing multiple child objects.

##### includeParent?

`boolean` = `true`

Whether to include the parent object's geometry. Defaults to `true`.

#### Returns

[`btCompoundShape`](../@orillusion/namespaces/Ammo/classes/btCompoundShape.md)

The compound collision shape.

***

### createShapeFromObject()

> `static` **createShapeFromObject**(`object3D`): [`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:188](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L188)

Creates a collision shape that matches the geometry type of the Object3D.

Only Box, Sphere, Plane, and Cylinder geometries are supported. For any other geometry type, a btConvexHullShape (convex hull) is returned.

#### Parameters

##### object3D

`Object3D`

#### Returns

[`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

Ammo.btCollisionShape

***

### createHeightfieldTerrainShape()

> `static` **createHeightfieldTerrainShape**(`object3D`, `heightScale?`, `upAxis?`, `hdt?`, `flipQuadEdges?`): [`btHeightfieldTerrainShape`](../@orillusion/namespaces/Ammo/classes/btHeightfieldTerrainShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:246](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L246)

Creates a heightfield shape that simulates terrain based on plane vertex data.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### heightScale?

`number` = `1`

The height scaling factor. Defaults to `1`.

##### upAxis?

`number` = `1`

The up axis of the heightfield. Defaults to `1`.

##### hdt?

[`PHY_ScalarType`](../@orillusion/namespaces/Ammo/type-aliases/PHY_ScalarType.md) = `'PHY_FLOAT'`

The data type of the heightfield. Defaults to `Ammo.PHY_FLOAT`.

##### flipQuadEdges?

`boolean` = `false`

Whether to flip the quad edges. Defaults to `false`.

#### Returns

[`btHeightfieldTerrainShape`](../@orillusion/namespaces/Ammo/classes/btHeightfieldTerrainShape.md)

Ammo.btHeightfieldTerrainShape - The heightfield terrain shape instance.

***

### createConvexHullShape()

> `static` **createConvexHullShape**(`object3D`, `modelVertices?`): [`btConvexHullShape`](../@orillusion/namespaces/Ammo/classes/btConvexHullShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:299](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L299)

Creates a convex hull shape, suitable for models with filled-in concavities.
This shape is appropriate for dynamic objects and provides fast collision detection.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### modelVertices?

`Float32Array`

Optional. Vertex data for the collision shape. Defaults to the 3D object's vertex data.

#### Returns

[`btConvexHullShape`](../@orillusion/namespaces/Ammo/classes/btConvexHullShape.md)

Ammo.btConvexHullShape - The convex hull shape instance.

***

### createConvexTriangleMeshShape()

> `static` **createConvexTriangleMeshShape**(`object3D`, `modelVertices?`, `modelIndices?`): [`btBvhTriangleMeshShape`](../@orillusion/namespaces/Ammo/classes/btBvhTriangleMeshShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:322](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L322)

Creates a convex triangle mesh shape, suitable for dynamic objects that require complex geometric representation.
This shape does not require a separate convex hull generation step and is suitable for convex triangle meshes.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### modelVertices?

`Float32Array`

Optional. Vertex data for the collision shape.

##### modelIndices?

`Uint16Array`

Optional. Index data for the collision shape.

#### Returns

[`btBvhTriangleMeshShape`](../@orillusion/namespaces/Ammo/classes/btBvhTriangleMeshShape.md)

Ammo.btConvexTriangleMeshShape - The convex triangle mesh shape instance.

***

### createBvhTriangleMeshShape()

> `static` **createBvhTriangleMeshShape**(`object3D`, `modelVertices?`, `modelIndices?`): [`btBvhTriangleMeshShape`](../@orillusion/namespaces/Ammo/classes/btBvhTriangleMeshShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:349](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L349)

Creates a bounding volume hierarchy (BVH) triangle mesh shape, suitable for static objects that require complex geometric representation.
This shape is well-suited for large-scale static meshes but is not appropriate for dynamic objects.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### modelVertices?

`Float32Array`

Optional. Vertex data for the collision shape.

##### modelIndices?

`Uint16Array`

Optional. Index data for the collision shape.

#### Returns

[`btBvhTriangleMeshShape`](../@orillusion/namespaces/Ammo/classes/btBvhTriangleMeshShape.md)

Ammo.btBvhTriangleMeshShape - The BVH triangle mesh shape instance.

***

### createGImpactMeshShape()

> `static` **createGImpactMeshShape**(`object3D`, `modelVertices?`, `modelIndices?`): [`btGImpactMeshShape`](../@orillusion/namespaces/Ammo/classes/btGImpactMeshShape.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:376](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L376)

Creates a GImpact mesh shape, suitable for dynamic objects that require complex geometric representation.
Based on the GIMPACT algorithm, it can be used for complex triangle mesh collision detection, including interactions between dynamic objects. This shape has a higher performance cost but provides more precise collision detection.

#### Parameters

##### object3D

`Object3D`

The 3D object used to create the collision shape.

##### modelVertices?

`Float32Array`

Optional. Vertex data for the collision shape.

##### modelIndices?

`Uint16Array`

Optional. Index data for the collision shape.

#### Returns

[`btGImpactMeshShape`](../@orillusion/namespaces/Ammo/classes/btGImpactMeshShape.md)

Ammo.btGImpactMeshShape - The GImpact mesh shape instance.

***

### buildTriangleMesh()

> `static` **buildTriangleMesh**(`vertices`, `indices`): [`btTriangleMesh`](../@orillusion/namespaces/Ammo/classes/btTriangleMesh.md)

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:402](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L402)

Builds a btTriangleMesh object used to create mesh shapes.

#### Parameters

##### vertices

`Float32Array`

Vertex data laid out in xyz order.

##### indices

`Uint16Array`

Index data defining the vertex indices of each triangle.

#### Returns

[`btTriangleMesh`](../@orillusion/namespaces/Ammo/classes/btTriangleMesh.md)

Ammo.btTriangleMesh - The constructed triangle mesh.

***

### getAllMeshVerticesAndIndices()

> `static` **getAllMeshVerticesAndIndices**(`object3D`, `isTransformChildren?`): `object`

Defined in: [packages/physics/utils/CollisionShapeUtil.ts:426](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/CollisionShapeUtil.ts#L426)

Gets the vertices and indices of all meshes belonging to a 3D object.

#### Parameters

##### object3D

`Object3D`

The 3D object.

##### isTransformChildren?

`boolean` = `true`

Whether to transform child object vertices into the parent object's local coordinate space. Defaults to `true`.

#### Returns

`object`

The combined vertex data and index data.

##### vertices

> **vertices**: `Float32Array`\<`ArrayBufferLike`\>

##### indices

> **indices**: `Uint16Array`\<`ArrayBufferLike`\>
