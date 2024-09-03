# Class: btDefaultVehicleRaycaster

[Ammo](../modules/Ammo.md).btDefaultVehicleRaycaster

## Hierarchy

- [`btVehicleRaycaster`](Ammo.btVehicleRaycaster.md)

  ↳ **`btDefaultVehicleRaycaster`**

### Constructors

- [constructor](Ammo.btDefaultVehicleRaycaster.md#constructor)

### Methods

- [castRay](Ammo.btDefaultVehicleRaycaster.md#castray)

## Constructors

### constructor

• **new btDefaultVehicleRaycaster**(`world`): [`btDefaultVehicleRaycaster`](Ammo.btDefaultVehicleRaycaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`btDynamicsWorld`](Ammo.btDynamicsWorld.md) |

#### Returns

[`btDefaultVehicleRaycaster`](Ammo.btDefaultVehicleRaycaster.md)

#### Overrides

[btVehicleRaycaster](Ammo.btVehicleRaycaster.md).[constructor](Ammo.btVehicleRaycaster.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:718](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L718)

## Methods

### castRay

▸ **castRay**(`from`, `to`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`btVector3`](Ammo.btVector3.md) |
| `to` | [`btVector3`](Ammo.btVector3.md) |
| `result` | [`btVehicleRaycasterResult`](Ammo.btVehicleRaycasterResult.md) |

#### Returns

`void`

#### Inherited from

[btVehicleRaycaster](Ammo.btVehicleRaycaster.md).[castRay](Ammo.btVehicleRaycaster.md#castray)

#### Defined in

[packages/ammo/ammo.d.ts:715](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L715)
