# Class: btConeShape

[Ammo](../modules/Ammo.md).btConeShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btConeShape`**

  ↳↳ [`btConeShapeX`](Ammo.btConeShapeX.md)

  ↳↳ [`btConeShapeZ`](Ammo.btConeShapeZ.md)

### Constructors

- [constructor](Ammo.btConeShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btConeShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btConeShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btConeShape.md#calculatelocalinertia)
- [setMargin](Ammo.btConeShape.md#setmargin)
- [getMargin](Ammo.btConeShape.md#getmargin)

## Constructors

### constructor

• **new btConeShape**(`radius`, `height`): [`btConeShape`](Ammo.btConeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `height` | `number` |

#### Returns

[`btConeShape`](Ammo.btConeShape.md)

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:330](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L330)

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

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[setMargin](Ammo.btCollisionShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:276](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L276)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:277](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L277)
