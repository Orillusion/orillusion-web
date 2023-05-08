# Class: btSphereShape

[Ammo](../modules/Ammo.md).btSphereShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btSphereShape`**


### Methods

- [setLocalScaling](Ammo.btSphereShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btSphereShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btSphereShape.md#calculatelocalinertia)
- [setMargin](Ammo.btSphereShape.md#setmargin)
- [getMargin](Ammo.btSphereShape.md#getmargin)

### Constructors

- [constructor](Ammo.btSphereShape.md#constructor)

## Methods

### setLocalScaling

▸ **setLocalScaling**(`scaling`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaling` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[setLocalScaling](Ammo.btCollisionShape.md#setlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:267](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L267)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[getLocalScaling](Ammo.btCollisionShape.md#getlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:268](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L268)

___

### calculateLocalInertia

▸ **calculateLocalInertia**(`mass`, `inertia`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |
| `inertia` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[calculateLocalInertia](Ammo.btCollisionShape.md#calculatelocalinertia)

#### Defined in

[packages/ammo/ammo.d.ts:269](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L269)

___

### setMargin

▸ **setMargin**(`margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `number` |

#### Returns

`void`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[setMargin](Ammo.btCollisionShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:317](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L317)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:318](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L318)

## Constructors

### constructor

• **new btSphereShape**(`radius`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:316](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L316)
