# Class: btBoxShape

[Ammo](../modules/Ammo.md).btBoxShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btBoxShape`**


### Methods

- [setLocalScaling](Ammo.btBoxShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btBoxShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btBoxShape.md#calculatelocalinertia)
- [setMargin](Ammo.btBoxShape.md#setmargin)
- [getMargin](Ammo.btBoxShape.md#getmargin)

### Constructors

- [constructor](Ammo.btBoxShape.md#constructor)

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

[packages/ammo/ammo.d.ts:279](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L279)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:280](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L280)

## Constructors

### constructor

• **new btBoxShape**(`boxHalfExtents`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boxHalfExtents` | [`btVector3`](Ammo.btVector3.md) |

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:278](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L278)
