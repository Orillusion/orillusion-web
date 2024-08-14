# Class: btCapsuleShape

[Ammo](../modules/Ammo.md).btCapsuleShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btCapsuleShape`**

  ↳↳ [`btCapsuleShapeX`](Ammo.btCapsuleShapeX.md)

  ↳↳ [`btCapsuleShapeZ`](Ammo.btCapsuleShapeZ.md)

### Constructors

- [constructor](Ammo.btCapsuleShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btCapsuleShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btCapsuleShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btCapsuleShape.md#calculatelocalinertia)
- [setMargin](Ammo.btCapsuleShape.md#setmargin)
- [getMargin](Ammo.btCapsuleShape.md#getmargin)
- [getUpAxis](Ammo.btCapsuleShape.md#getupaxis)
- [getRadius](Ammo.btCapsuleShape.md#getradius)
- [getHalfHeight](Ammo.btCapsuleShape.md#gethalfheight)

## Constructors

### constructor

• **new btCapsuleShape**(`radius`, `height`): [`btCapsuleShape`](Ammo.btCapsuleShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `height` | `number` |

#### Returns

[`btCapsuleShape`](Ammo.btCapsuleShape.md)

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:289](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L289)

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

[packages/ammo/ammo.d.ts:290](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L290)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:291](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L291)

___

### getUpAxis

▸ **getUpAxis**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:292](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L292)

___

### getRadius

▸ **getRadius**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:293](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L293)

___

### getHalfHeight

▸ **getHalfHeight**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:294](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L294)
