[**@orillusion/physics-rapier**](../README.md)

***

# Class: CollisionShapeUtil

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:40](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L40)

Collider descriptor factories.

Public method names mirror `@orillusion/physics`'s `CollisionShapeUtil`
one-to-one where semantics line up. Some return types deviate where
Rapier and Bullet model things differently:

- `createCompoundShape*` returns `ChildShape[]` (Rapier has no monolithic
  compound primitive — multiple colliders attach to one body).
- `createConvexHullShape` may return `null` if the points are degenerate
  (Rapier surfaces this; ammo silently constructs an invalid hull).

## Constructors

### Constructor

> **new CollisionShapeUtil**(): `CollisionShapeUtil`

#### Returns

`CollisionShapeUtil`

## Methods

### createBoxShape()

> `static` **createBoxShape**(`object3D`, `size?`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:44](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L44)

Box shape. Falls back to mesh-bounds size when `size` omitted.

#### Parameters

##### object3D

`Object3D`

##### size?

`Vector3`

#### Returns

`ColliderDesc`

***

### createSphereShape()

> `static` **createSphereShape**(`object3D`, `radius?`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:52](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L52)

Sphere shape. Falls back to mesh-bounds extents.x for radius.

#### Parameters

##### object3D

`Object3D`

##### radius?

`number`

#### Returns

`ColliderDesc`

***

### createCapsuleShape()

> `static` **createCapsuleShape**(`object3D`, `radius?`, `halfHeight?`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:63](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L63)

Capsule shape. NOTE: Rapier's capsule takes `halfHeight` (the half
length of the cylindrical mid-section, NOT including the caps). The
ammo plugin's `createCapsuleShape(obj, radius, height)` uses the full
mid-section height; pass `height / 2` here.

#### Parameters

##### object3D

`Object3D`

##### radius?

`number`

##### halfHeight?

`number`

#### Returns

`ColliderDesc`

***

### createCylinderShape()

> `static` **createCylinderShape**(`object3D`, `radius?`, `halfHeight?`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:74](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L74)

Cylinder shape. NOTE: takes `halfHeight`, not full height.

#### Parameters

##### object3D

`Object3D`

##### radius?

`number`

##### halfHeight?

`number`

#### Returns

`ColliderDesc`

***

### createConeShape()

> `static` **createConeShape**(`object3D`, `radius?`, `halfHeight?`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:85](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L85)

Cone shape. NOTE: takes `halfHeight`, not full height.

#### Parameters

##### object3D

`Object3D`

##### radius?

`number`

##### halfHeight?

`number`

#### Returns

`ColliderDesc`

***

### createPlaneShape()

> `static` **createPlaneShape**(`extent?`, `thickness?`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:97](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L97)

Static plane stand-in. Rapier has no `staticPlane`; uses a wide thin
cuboid so behavior matches the ammo plugin's typical floor pattern.

#### Parameters

##### extent?

`number` = `1000`

##### thickness?

`number` = `0.1`

#### Returns

`ColliderDesc`

***

### createCompoundShape()

> `static` **createCompoundShape**(`childShapes`): [`ChildShape`](../interfaces/ChildShape.md)[]

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:105](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L105)

Compound shape. Returns an array of child descriptors — pass to
`Rigidbody.shape = [...]` and each entry becomes its own collider.

#### Parameters

##### childShapes

[`ChildShape`](../interfaces/ChildShape.md)[]

#### Returns

[`ChildShape`](../interfaces/ChildShape.md)[]

***

### createCompoundShapeFromObject()

> `static` **createCompoundShapeFromObject**(`object3D`, `includeParent?`): [`ChildShape`](../interfaces/ChildShape.md)[]

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:119](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L119)

Build a compound from an Object3D's mesh hierarchy. Each child
MeshRenderer contributes one collider, transformed into the parent's
local space.

#### Parameters

##### object3D

`Object3D`

##### includeParent?

`boolean` = `true`

#### Returns

[`ChildShape`](../interfaces/ChildShape.md)[]

***

### createShapeFromObject()

> `static` **createShapeFromObject**(`object3D`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:162](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L162)

Pick the best primitive shape for a single Object3D, falling back to
`convexHull` for arbitrary meshes. Mirrors the ammo plugin's
`createShapeFromObject`.

#### Parameters

##### object3D

`Object3D`

#### Returns

`ColliderDesc`

***

### createConvexHullShape()

> `static` **createConvexHullShape**(`object3D`, `modelVertices?`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:198](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L198)

Convex-hull shape from raw vertices or an Object3D's mesh.

#### Parameters

##### object3D

`Object3D`

##### modelVertices?

`Float32Array`

#### Returns

`ColliderDesc`

***

### createTrimeshShape()

> `static` **createTrimeshShape**(`object3D`, `modelVertices?`, `modelIndices?`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:222](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L222)

Triangle-mesh shape from Object3D's mesh. Suitable for static geometry.
For dynamic bodies prefer `createConvexHullShape` or compounds.

#### Parameters

##### object3D

`Object3D`

##### modelVertices?

`Float32Array`

##### modelIndices?

`Uint32Array`

#### Returns

`ColliderDesc`

***

### createHeightfieldShape()

> `static` **createHeightfieldShape**(`object3D`): `ColliderDesc`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:252](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L252)

Heightfield from a `PlaneGeometry`'s vertex Y values. Mirrors the ammo
plugin's `createHeightfieldTerrainShape`.

#### Parameters

##### object3D

`Object3D`

#### Returns

`ColliderDesc`

***

### getAllMeshVerticesAndIndices()

> `static` **getAllMeshVerticesAndIndices**(`object3D`, `isTransformChildren?`): `object`

Defined in: [packages/physics-rapier/shape/CollisionShapeUtil.ts:278](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/shape/CollisionShapeUtil.ts#L278)

Get a flat (verts, indices) representation of an Object3D's meshes.
Mirrors the ammo plugin's helper, but widens indices to `Uint32Array`
(Rapier requires u32; engine geometry uses u16 typically).

#### Parameters

##### object3D

`Object3D`

##### isTransformChildren?

`boolean` = `true`

#### Returns

`object`

##### vertices

> **vertices**: `Float32Array`\<`ArrayBufferLike`\> = `verts`

##### indices

> **indices**: `Uint32Array`\<`ArrayBufferLike`\>
