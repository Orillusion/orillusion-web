# Class: btCylinderShapeX

[Ammo](../modules/Ammo.md).btCylinderShapeX

## Hierarchy

- [`btCylinderShape`](Ammo.btCylinderShape.md)

  ↳ **`btCylinderShapeX`**

### Constructors

- [constructor](Ammo.btCylinderShapeX.md#constructor)

### Methods

- [setLocalScaling](Ammo.btCylinderShapeX.md#setlocalscaling)
- [getLocalScaling](Ammo.btCylinderShapeX.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btCylinderShapeX.md#calculatelocalinertia)
- [setMargin](Ammo.btCylinderShapeX.md#setmargin)
- [getMargin](Ammo.btCylinderShapeX.md#getmargin)

## Constructors

### constructor

• **new btCylinderShapeX**(`halfExtents`): [`btCylinderShapeX`](Ammo.btCylinderShapeX.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `halfExtents` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btCylinderShapeX`](Ammo.btCylinderShapeX.md)

#### Overrides

[btCylinderShape](Ammo.btCylinderShape.md).[constructor](Ammo.btCylinderShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:312](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L312)

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

[btCylinderShape](Ammo.btCylinderShape.md).[setLocalScaling](Ammo.btCylinderShape.md#setlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:273](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btCylinderShape](Ammo.btCylinderShape.md).[getLocalScaling](Ammo.btCylinderShape.md#getlocalscaling)

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

[btCylinderShape](Ammo.btCylinderShape.md).[calculateLocalInertia](Ammo.btCylinderShape.md#calculatelocalinertia)

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

[btCylinderShape](Ammo.btCylinderShape.md).[setMargin](Ammo.btCylinderShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:313](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L313)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btCylinderShape](Ammo.btCylinderShape.md).[getMargin](Ammo.btCylinderShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:314](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L314)
