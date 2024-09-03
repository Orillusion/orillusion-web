# Class: btCylinderShape

[Ammo](../modules/Ammo.md).btCylinderShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btCylinderShape`**

  ↳↳ [`btCylinderShapeX`](Ammo.btCylinderShapeX.md)

  ↳↳ [`btCylinderShapeZ`](Ammo.btCylinderShapeZ.md)

### Constructors

- [constructor](Ammo.btCylinderShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btCylinderShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btCylinderShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btCylinderShape.md#calculatelocalinertia)
- [setMargin](Ammo.btCylinderShape.md#setmargin)
- [getMargin](Ammo.btCylinderShape.md#getmargin)

## Constructors

### constructor

• **new btCylinderShape**(`halfExtents`): [`btCylinderShape`](Ammo.btCylinderShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `halfExtents` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btCylinderShape`](Ammo.btCylinderShape.md)

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:307](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L307)

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

[packages/ammo/ammo.d.ts:273](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[getLocalScaling](Ammo.btCollisionShape.md#getlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:274](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L274)

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

[packages/ammo/ammo.d.ts:275](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L275)

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

[packages/ammo/ammo.d.ts:308](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L308)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:309](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L309)
