# Class: btCapsuleShape

[Ammo](../modules/Ammo.md).btCapsuleShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btCapsuleShape`**

  ↳↳ [`btCapsuleShapeX`](Ammo.btCapsuleShapeX.md)

  ↳↳ [`btCapsuleShapeZ`](Ammo.btCapsuleShapeZ.md)


### Methods

- [setLocalScaling](Ammo.btCapsuleShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btCapsuleShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btCapsuleShape.md#calculatelocalinertia)
- [setMargin](Ammo.btCapsuleShape.md#setmargin)
- [getMargin](Ammo.btCapsuleShape.md#getmargin)
- [getUpAxis](Ammo.btCapsuleShape.md#getupaxis)
- [getRadius](Ammo.btCapsuleShape.md#getradius)
- [getHalfHeight](Ammo.btCapsuleShape.md#gethalfheight)

### Constructors

- [constructor](Ammo.btCapsuleShape.md#constructor)

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

[packages/ammo/ammo.d.ts:284](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L284)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:285](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L285)

___

### getUpAxis

▸ **getUpAxis**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:286](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L286)

___

### getRadius

▸ **getRadius**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:287](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L287)

___

### getHalfHeight

▸ **getHalfHeight**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:288](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L288)

## Constructors

### constructor

• **new btCapsuleShape**(`radius`, `height`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `height` | `number` |

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:283](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L283)
