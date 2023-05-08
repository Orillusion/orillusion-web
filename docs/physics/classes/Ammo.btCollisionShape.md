# Class: btCollisionShape

[Ammo](../modules/Ammo.md).btCollisionShape

## Hierarchy

- **`btCollisionShape`**

  ↳ [`btConvexShape`](Ammo.btConvexShape.md)

  ↳ [`btBoxShape`](Ammo.btBoxShape.md)

  ↳ [`btCapsuleShape`](Ammo.btCapsuleShape.md)

  ↳ [`btCylinderShape`](Ammo.btCylinderShape.md)

  ↳ [`btSphereShape`](Ammo.btSphereShape.md)

  ↳ [`btMultiSphereShape`](Ammo.btMultiSphereShape.md)

  ↳ [`btConeShape`](Ammo.btConeShape.md)

  ↳ [`btConvexHullShape`](Ammo.btConvexHullShape.md)

  ↳ [`btCompoundShape`](Ammo.btCompoundShape.md)

  ↳ [`btConcaveShape`](Ammo.btConcaveShape.md)


### Constructors

- [constructor](Ammo.btCollisionShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btCollisionShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btCollisionShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btCollisionShape.md#calculatelocalinertia)
- [setMargin](Ammo.btCollisionShape.md#setmargin)
- [getMargin](Ammo.btCollisionShape.md#getmargin)

## Constructors

### constructor

• **new btCollisionShape**()

## Methods

### setLocalScaling

▸ **setLocalScaling**(`scaling`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaling` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:267](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L267)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

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

#### Defined in

[packages/ammo/ammo.d.ts:270](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L270)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:271](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L271)
