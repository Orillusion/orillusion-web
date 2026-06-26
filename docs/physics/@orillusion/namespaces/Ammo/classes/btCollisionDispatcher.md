[**@orillusion/physics**](../../../../README.md)

***

# Class: btCollisionDispatcher

Defined in: [packages/ammo/ammo.d.ts:445](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L445)

## Extends

- [`btDispatcher`](btDispatcher.md)

## Constructors

### Constructor

> **new btCollisionDispatcher**(`conf`): `btCollisionDispatcher`

Defined in: [packages/ammo/ammo.d.ts:446](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L446)

#### Parameters

##### conf

[`btDefaultCollisionConfiguration`](btDefaultCollisionConfiguration.md)

#### Returns

`btCollisionDispatcher`

#### Overrides

[`btDispatcher`](btDispatcher.md).[`constructor`](btDispatcher.md#constructor)

## Methods

### getNumManifolds()

> **getNumManifolds**(): `number`

Defined in: [packages/ammo/ammo.d.ts:442](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L442)

#### Returns

`number`

#### Inherited from

[`btDispatcher`](btDispatcher.md).[`getNumManifolds`](btDispatcher.md#getnummanifolds)

***

### getManifoldByIndexInternal()

> **getManifoldByIndexInternal**(`index`): [`btPersistentManifold`](btPersistentManifold.md)

Defined in: [packages/ammo/ammo.d.ts:443](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L443)

#### Parameters

##### index

`number`

#### Returns

[`btPersistentManifold`](btPersistentManifold.md)

#### Inherited from

[`btDispatcher`](btDispatcher.md).[`getManifoldByIndexInternal`](btDispatcher.md#getmanifoldbyindexinternal)
