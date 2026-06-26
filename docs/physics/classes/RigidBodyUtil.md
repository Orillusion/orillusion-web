[**@orillusion/physics**](../README.md)

***

# Class: RigidBodyUtil

Defined in: [packages/physics/utils/RigidBodyUtil.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L8)

Provides a set of methods related to AMMO rigid bodies

## Constructors

### Constructor

> **new RigidBodyUtil**(): `RigidBodyUtil`

#### Returns

`RigidBodyUtil`

## Methods

### createRigidBody()

> `static` **createRigidBody**(`object3D`, `shape`, `mass`, `position?`, `rotation?`): [`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

Defined in: [packages/physics/utils/RigidBodyUtil.ts:18](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L18)

Creates an Ammo rigid body.

#### Parameters

##### object3D

`Object3D`

The 3D object.

##### shape

[`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

The collision shape.

##### mass

`number`

The mass of the collision body.

##### position?

`Vector3`

Optional parameter, the position of the rigid body; defaults to the 3D object's `localPosition`.

##### rotation?

`Vector3` \| `Quaternion`

Optional parameter, the rotation of the rigid body; defaults to the 3D object's `localRotation`.

#### Returns

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

The newly created Ammo.btRigidBody object.

***

### updateTransform()

> `static` **updateTransform**(`bodyRb`, `position`, `rotation`, `clearFV?`): `void`

Defined in: [packages/physics/utils/RigidBodyUtil.ts:46](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L46)

Updates the position and rotation of the rigid body.
This function applies the new position and rotation to the rigid body.

#### Parameters

##### bodyRb

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

The rigid body object.

##### position

`Vector3`

The new position of the rigid body, expressed as a Vector3.

##### rotation

`Vector3` \| `Quaternion`

The new rotation of the rigid body, optional; can be a Vector3 representing Euler angles (automatically converted to a quaternion); defaults to a zero quaternion.

##### clearFV?

`boolean`

Whether to clear forces and velocities, optional; defaults to false.

#### Returns

`void`

***

### updatePosition()

> `static` **updatePosition**(`bodyRb`, `value`): `void`

Defined in: [packages/physics/utils/RigidBodyUtil.ts:68](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L68)

Updates the position of the rigid body

#### Parameters

##### bodyRb

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

##### value

`Vector3`

#### Returns

`void`

***

### updateRotation()

> `static` **updateRotation**(`bodyRb`, `value`): `void`

Defined in: [packages/physics/utils/RigidBodyUtil.ts:84](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L84)

Updates the rotation of the rigid body

#### Parameters

##### bodyRb

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

##### value

`Vector3`

#### Returns

`void`

***

### updateScale()

> `static` **updateScale**(`bodyRb`, `value`, `mass`): `void`

Defined in: [packages/physics/utils/RigidBodyUtil.ts:101](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L101)

Updates the scale of the rigid body

#### Parameters

##### bodyRb

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

##### value

`Vector3`

##### mass

`number`

#### Returns

`void`

***

### clearForcesAndVelocities()

> `static` **clearForcesAndVelocities**(`bodyRb`): `void`

Defined in: [packages/physics/utils/RigidBodyUtil.ts:116](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L116)

Clears forces and velocities

#### Parameters

##### bodyRb

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

#### Returns

`void`

***

### activateCollisionBodies()

> `static` **activateCollisionBodies**(): `void`

Defined in: [packages/physics/utils/RigidBodyUtil.ts:125](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L125)

Activates all collision pairs in the physics world

#### Returns

`void`

***

### destroyRigidBody()

> `static` **destroyRigidBody**(`bodyRb`): `void`

Defined in: [packages/physics/utils/RigidBodyUtil.ts:149](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L149)

Destroys the rigid body along with its motion state and collision shape

#### Parameters

##### bodyRb

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

#### Returns

`void`

***

### destroyConstraint()

> `static` **destroyConstraint**(`constraint`): `void`

Defined in: [packages/physics/utils/RigidBodyUtil.ts:162](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L162)

Destroys a constraint

#### Parameters

##### constraint

[`btTypedConstraint`](../@orillusion/namespaces/Ammo/classes/btTypedConstraint.md)

#### Returns

`void`
