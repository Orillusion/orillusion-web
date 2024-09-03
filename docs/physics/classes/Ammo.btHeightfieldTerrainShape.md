# Class: btHeightfieldTerrainShape

[Ammo](../modules/Ammo.md).btHeightfieldTerrainShape

## Hierarchy

- [`btConcaveShape`](Ammo.btConcaveShape.md)

  ↳ **`btHeightfieldTerrainShape`**

### Constructors

- [constructor](Ammo.btHeightfieldTerrainShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btHeightfieldTerrainShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btHeightfieldTerrainShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btHeightfieldTerrainShape.md#calculatelocalinertia)
- [setMargin](Ammo.btHeightfieldTerrainShape.md#setmargin)
- [getMargin](Ammo.btHeightfieldTerrainShape.md#getmargin)

## Constructors

### constructor

• **new btHeightfieldTerrainShape**(`heightStickWidth`, `heightStickLength`, `heightfieldData`, `heightScale`, `minHeight`, `maxHeight`, `upAxis`, `hdt`, `flipQuadEdges`): [`btHeightfieldTerrainShape`](Ammo.btHeightfieldTerrainShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `heightStickWidth` | `number` |
| `heightStickLength` | `number` |
| `heightfieldData` | `unknown` |
| `heightScale` | `number` |
| `minHeight` | `number` |
| `maxHeight` | `number` |
| `upAxis` | `number` |
| `hdt` | [`PHY_ScalarType`](../types/Ammo.PHY_ScalarType.md) |
| `flipQuadEdges` | `boolean` |

#### Returns

[`btHeightfieldTerrainShape`](Ammo.btHeightfieldTerrainShape.md)

#### Overrides

[btConcaveShape](Ammo.btConcaveShape.md).[constructor](Ammo.btConcaveShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:424](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L424)

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

#### Overrides

[btConcaveShape](Ammo.btConcaveShape.md).[setMargin](Ammo.btConcaveShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:425](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L425)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btConcaveShape](Ammo.btConcaveShape.md).[getMargin](Ammo.btConcaveShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:426](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L426)
