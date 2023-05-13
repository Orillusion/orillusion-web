# Class: btConcaveShape

[Ammo](../modules/Ammo.md).btConcaveShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btConcaveShape`**

  ↳↳ [`btEmptyShape`](Ammo.btEmptyShape.md)

  ↳↳ [`btStaticPlaneShape`](Ammo.btStaticPlaneShape.md)

  ↳↳ [`btTriangleMeshShape`](Ammo.btTriangleMeshShape.md)

  ↳↳ [`btHeightfieldTerrainShape`](Ammo.btHeightfieldTerrainShape.md)


### Constructors

- [constructor](Ammo.btConcaveShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btConcaveShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btConcaveShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btConcaveShape.md#calculatelocalinertia)
- [setMargin](Ammo.btConcaveShape.md#setmargin)
- [getMargin](Ammo.btConcaveShape.md#getmargin)

## Constructors

### constructor

• **new btConcaveShape**()

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

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

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[setMargin](Ammo.btCollisionShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:270](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L270)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:271](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L271)
