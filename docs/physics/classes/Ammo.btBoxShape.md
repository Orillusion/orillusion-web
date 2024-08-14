# Class: btBoxShape

[Ammo](../modules/Ammo.md).btBoxShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btBoxShape`**

### Constructors

- [constructor](Ammo.btBoxShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btBoxShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btBoxShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btBoxShape.md#calculatelocalinertia)
- [setMargin](Ammo.btBoxShape.md#setmargin)
- [getMargin](Ammo.btBoxShape.md#getmargin)

## Constructors

### constructor

• **new btBoxShape**(`boxHalfExtents`): [`btBoxShape`](Ammo.btBoxShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boxHalfExtents` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btBoxShape`](Ammo.btBoxShape.md)

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:284](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L284)

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

[packages/ammo/ammo.d.ts:285](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L285)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:286](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L286)
