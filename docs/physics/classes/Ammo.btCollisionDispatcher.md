# Class: btCollisionDispatcher

[Ammo](../modules/Ammo.md).btCollisionDispatcher

## Hierarchy

- [`btDispatcher`](Ammo.btDispatcher.md)

  ↳ **`btCollisionDispatcher`**

### Constructors

- [constructor](Ammo.btCollisionDispatcher.md#constructor)

### Methods

- [getNumManifolds](Ammo.btCollisionDispatcher.md#getnummanifolds)
- [getManifoldByIndexInternal](Ammo.btCollisionDispatcher.md#getmanifoldbyindexinternal)

## Constructors

### constructor

• **new btCollisionDispatcher**(`conf`): [`btCollisionDispatcher`](Ammo.btCollisionDispatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `conf` | [`btDefaultCollisionConfiguration`](Ammo.btDefaultCollisionConfiguration.md) |

#### Returns

[`btCollisionDispatcher`](Ammo.btCollisionDispatcher.md)

#### Overrides

[btDispatcher](Ammo.btDispatcher.md).[constructor](Ammo.btDispatcher.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:446](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L446)

## Methods

### getNumManifolds

▸ **getNumManifolds**(): `number`

#### Returns

`number`

#### Inherited from

[btDispatcher](Ammo.btDispatcher.md).[getNumManifolds](Ammo.btDispatcher.md#getnummanifolds)

#### Defined in

[packages/ammo/ammo.d.ts:442](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L442)

___

### getManifoldByIndexInternal

▸ **getManifoldByIndexInternal**(`index`): [`btPersistentManifold`](Ammo.btPersistentManifold.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`btPersistentManifold`](Ammo.btPersistentManifold.md)

#### Inherited from

[btDispatcher](Ammo.btDispatcher.md).[getManifoldByIndexInternal](Ammo.btDispatcher.md#getmanifoldbyindexinternal)

#### Defined in

[packages/ammo/ammo.d.ts:443](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L443)
