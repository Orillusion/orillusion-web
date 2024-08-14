# Class: btConvexTriangleMeshShape

[Ammo](../modules/Ammo.md).btConvexTriangleMeshShape

## Hierarchy

- [`btConvexShape`](Ammo.btConvexShape.md)

  ↳ **`btConvexTriangleMeshShape`**

### Constructors

- [constructor](Ammo.btConvexTriangleMeshShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btConvexTriangleMeshShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btConvexTriangleMeshShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btConvexTriangleMeshShape.md#calculatelocalinertia)
- [setMargin](Ammo.btConvexTriangleMeshShape.md#setmargin)
- [getMargin](Ammo.btConvexTriangleMeshShape.md#getmargin)

## Constructors

### constructor

• **new btConvexTriangleMeshShape**(`meshInterface`, `calcAabb?`): [`btConvexTriangleMeshShape`](Ammo.btConvexTriangleMeshShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `meshInterface` | [`btStridingMeshInterface`](Ammo.btStridingMeshInterface.md) |
| `calcAabb?` | `boolean` |

#### Returns

[`btConvexTriangleMeshShape`](Ammo.btConvexTriangleMeshShape.md)

#### Overrides

[btConvexShape](Ammo.btConvexShape.md).[constructor](Ammo.btConvexShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:281](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L281)

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

[btConvexShape](Ammo.btConvexShape.md).[setLocalScaling](Ammo.btConvexShape.md#setlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:273](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btConvexShape](Ammo.btConvexShape.md).[getLocalScaling](Ammo.btConvexShape.md#getlocalscaling)

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

[btConvexShape](Ammo.btConvexShape.md).[calculateLocalInertia](Ammo.btConvexShape.md#calculatelocalinertia)

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

[btConvexShape](Ammo.btConvexShape.md).[setMargin](Ammo.btConvexShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:276](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L276)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[btConvexShape](Ammo.btConvexShape.md).[getMargin](Ammo.btConvexShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:277](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L277)
