# Class: RigidBodyMapping

A bidirectional mapping between RigidBody objects and 3D objects.

### Constructors

- [constructor](RigidBodyMapping.md#constructor)

### Accessors

- [getAllPhysicsObjectMap](RigidBodyMapping.md#getallphysicsobjectmap)
- [getAllGraphicObjectMap](RigidBodyMapping.md#getallgraphicobjectmap)

### Methods

- [addMapping](RigidBodyMapping.md#addmapping)
- [getPhysicsObject](RigidBodyMapping.md#getphysicsobject)
- [getGraphicObject](RigidBodyMapping.md#getgraphicobject)
- [removeMappingByGraphic](RigidBodyMapping.md#removemappingbygraphic)
- [removeMappingByPhysics](RigidBodyMapping.md#removemappingbyphysics)

## Constructors

### constructor

• **new RigidBodyMapping**(): [`RigidBodyMapping`](RigidBodyMapping.md)

#### Returns

[`RigidBodyMapping`](RigidBodyMapping.md)

## Accessors

### getAllPhysicsObjectMap

• `get` **getAllPhysicsObjectMap**(): `Map`\<[`btRigidBody`](Ammo.btRigidBody.md), `Object3D`\>

Retrieves the entire mapping of all RigidBody objects.

#### Returns

`Map`\<[`btRigidBody`](Ammo.btRigidBody.md), `Object3D`\>

A map of RigidBody objects to 3D objects.

#### Defined in

[packages/physics/utils/RigidBodyMapping.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L14)

___

### getAllGraphicObjectMap

• `get` **getAllGraphicObjectMap**(): `Map`\<`Object3D`, [`btRigidBody`](Ammo.btRigidBody.md)\>

Retrieves the entire mapping of all 3D objects.

#### Returns

`Map`\<`Object3D`, [`btRigidBody`](Ammo.btRigidBody.md)\>

A map of 3D objects to RigidBody objects.

#### Defined in

[packages/physics/utils/RigidBodyMapping.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L22)

## Methods

### addMapping

▸ **addMapping**(`object3D`, `physics`): `void`

Adds a mapping between a 3D object and a RigidBody object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | The 3D object. |
| `physics` | [`btRigidBody`](Ammo.btRigidBody.md) | The RigidBody object. |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyMapping.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L31)

___

### getPhysicsObject

▸ **getPhysicsObject**(`object3D`): [`btRigidBody`](Ammo.btRigidBody.md)

Retrieves the RigidBody object associated with a given 3D object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | The 3D object. |

#### Returns

[`btRigidBody`](Ammo.btRigidBody.md)

The associated RigidBody object, or undefined if not found.

#### Defined in

[packages/physics/utils/RigidBodyMapping.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L40)

___

### getGraphicObject

▸ **getGraphicObject**(`physics`): `Object3D`

Retrieves the 3D object associated with a given RigidBody object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `physics` | [`btRigidBody`](Ammo.btRigidBody.md) | The RigidBody object. |

#### Returns

`Object3D`

The associated 3D object, or undefined if not found.

#### Defined in

[packages/physics/utils/RigidBodyMapping.ts:49](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L49)

___

### removeMappingByGraphic

▸ **removeMappingByGraphic**(`object3D`): `void`

Removes the mapping associated with a given 3D object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | The 3D object. |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyMapping.ts:57](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L57)

___

### removeMappingByPhysics

▸ **removeMappingByPhysics**(`physics`): `void`

Removes the mapping associated with a given RigidBody object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `physics` | [`btRigidBody`](Ammo.btRigidBody.md) | The RigidBody object. |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyMapping.ts:65](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyMapping.ts#L65)
