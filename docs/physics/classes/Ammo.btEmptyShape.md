# Class: btEmptyShape

[Ammo](../modules/Ammo.md).btEmptyShape

## Hierarchy

- [`btConcaveShape`](Ammo.btConcaveShape.md)

  ↳ **`btEmptyShape`**

### Constructors

- [constructor](Ammo.btEmptyShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btEmptyShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btEmptyShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btEmptyShape.md#calculatelocalinertia)
- [setMargin](Ammo.btEmptyShape.md#setmargin)
- [getMargin](Ammo.btEmptyShape.md#getmargin)

## Constructors

### constructor

• **new btEmptyShape**(): [`btEmptyShape`](Ammo.btEmptyShape.md)

#### Returns

[`btEmptyShape`](Ammo.btEmptyShape.md)

#### Overrides

[btConcaveShape](Ammo.btConcaveShape.md).[constructor](Ammo.btConcaveShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:410](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L410)

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

[btConcaveShape](Ammo.btConcaveShape.md).[setLocalScaling](Ammo.btConcaveShape.md#setlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:273](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btConcaveShape](Ammo.btConcaveShape.md).[getLocalScaling](Ammo.btConcaveShape.md#getlocalscaling)

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

[btConcaveShape](Ammo.btConcaveShape.md).[calculateLocalInertia](Ammo.btConcaveShape.md#calculatelocalinertia)

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

[btConcaveShape](Ammo.btConcaveShape.md).[setMargin](Ammo.btConcaveShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:276](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L276)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[btConcaveShape](Ammo.btConcaveShape.md).[getMargin](Ammo.btConcaveShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:277](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L277)
