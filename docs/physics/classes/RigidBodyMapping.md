[**@orillusion/physics**](../README.md)

***

# Class: RigidBodyMapping

Defined in: [packages/physics/utils/RigidBodyMapping.ts:7](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L7)

A bidirectional mapping between RigidBody objects and 3D objects.

## Constructors

### Constructor

> **new RigidBodyMapping**(): `RigidBodyMapping`

#### Returns

`RigidBodyMapping`

## Accessors

### getAllPhysicsObjectMap

#### Get Signature

> **get** `static` **getAllPhysicsObjectMap**(): `Map`\<[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md), `Object3D`\>

Defined in: [packages/physics/utils/RigidBodyMapping.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L14)

Retrieves the entire mapping of all RigidBody objects.

##### Returns

`Map`\<[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md), `Object3D`\>

A map of RigidBody objects to 3D objects.

***

### getAllGraphicObjectMap

#### Get Signature

> **get** `static` **getAllGraphicObjectMap**(): `Map`\<`Object3D`, [`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)\>

Defined in: [packages/physics/utils/RigidBodyMapping.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L22)

Retrieves the entire mapping of all 3D objects.

##### Returns

`Map`\<`Object3D`, [`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)\>

A map of 3D objects to RigidBody objects.

## Methods

### addMapping()

> `static` **addMapping**(`object3D`, `physics`): `void`

Defined in: [packages/physics/utils/RigidBodyMapping.ts:31](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L31)

Adds a mapping between a 3D object and a RigidBody object.

#### Parameters

##### object3D

`Object3D`

The 3D object.

##### physics

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

The RigidBody object.

#### Returns

`void`

***

### getPhysicsObject()

> `static` **getPhysicsObject**(`object3D`): [`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

Defined in: [packages/physics/utils/RigidBodyMapping.ts:40](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L40)

Retrieves the RigidBody object associated with a given 3D object.

#### Parameters

##### object3D

`Object3D`

The 3D object.

#### Returns

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

The associated RigidBody object, or undefined if not found.

***

### getGraphicObject()

> `static` **getGraphicObject**(`physics`): `Object3D`

Defined in: [packages/physics/utils/RigidBodyMapping.ts:49](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L49)

Retrieves the 3D object associated with a given RigidBody object.

#### Parameters

##### physics

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

The RigidBody object.

#### Returns

`Object3D`

The associated 3D object, or undefined if not found.

***

### removeMappingByGraphic()

> `static` **removeMappingByGraphic**(`object3D`): `void`

Defined in: [packages/physics/utils/RigidBodyMapping.ts:57](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L57)

Removes the mapping associated with a given 3D object.

#### Parameters

##### object3D

`Object3D`

The 3D object.

#### Returns

`void`

***

### removeMappingByPhysics()

> `static` **removeMappingByPhysics**(`physics`): `void`

Defined in: [packages/physics/utils/RigidBodyMapping.ts:65](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L65)

Removes the mapping associated with a given RigidBody object.

#### Parameters

##### physics

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

The RigidBody object.

#### Returns

`void`
