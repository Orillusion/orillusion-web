# Class: btConvexTriangleMeshShape

[Ammo](../modules/Ammo.md).btConvexTriangleMeshShape

## Hierarchy

- [`btConvexShape`](Ammo.btConvexShape.md)

  ↳ **`btConvexTriangleMeshShape`**


### Methods

- [setLocalScaling](Ammo.btConvexTriangleMeshShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btConvexTriangleMeshShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btConvexTriangleMeshShape.md#calculatelocalinertia)
- [setMargin](Ammo.btConvexTriangleMeshShape.md#setmargin)
- [getMargin](Ammo.btConvexTriangleMeshShape.md#getmargin)

### Constructors

- [constructor](Ammo.btConvexTriangleMeshShape.md#constructor)

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

[packages/ammo/ammo.d.ts:267](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L267)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btConvexShape](Ammo.btConvexShape.md).[getLocalScaling](Ammo.btConvexShape.md#getlocalscaling)

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

[btConvexShape](Ammo.btConvexShape.md).[calculateLocalInertia](Ammo.btConvexShape.md#calculatelocalinertia)

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

[btConvexShape](Ammo.btConvexShape.md).[setMargin](Ammo.btConvexShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:270](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L270)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[btConvexShape](Ammo.btConvexShape.md).[getMargin](Ammo.btConvexShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:271](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L271)

## Constructors

### constructor

• **new btConvexTriangleMeshShape**(`meshInterface`, `calcAabb?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `meshInterface` | [`btStridingMeshInterface`](Ammo.btStridingMeshInterface.md) |
| `calcAabb?` | `boolean` |

#### Overrides

[btConvexShape](Ammo.btConvexShape.md).[constructor](Ammo.btConvexShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:275](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L275)
