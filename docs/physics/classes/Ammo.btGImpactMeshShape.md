# Class: btGImpactMeshShape

[Ammo](../modules/Ammo.md).btGImpactMeshShape

## Hierarchy

- [`btTriangleMeshShape`](Ammo.btTriangleMeshShape.md)

  ↳ **`btGImpactMeshShape`**

### Constructors

- [constructor](Ammo.btGImpactMeshShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btGImpactMeshShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btGImpactMeshShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btGImpactMeshShape.md#calculatelocalinertia)
- [setMargin](Ammo.btGImpactMeshShape.md#setmargin)
- [getMargin](Ammo.btGImpactMeshShape.md#getmargin)
- [updateBound](Ammo.btGImpactMeshShape.md#updatebound)

## Constructors

### constructor

• **new btGImpactMeshShape**(`meshInterface`): [`btGImpactMeshShape`](Ammo.btGImpactMeshShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `meshInterface` | [`btStridingMeshInterface`](Ammo.btStridingMeshInterface.md) |

#### Returns

[`btGImpactMeshShape`](Ammo.btGImpactMeshShape.md)

#### Overrides

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[constructor](Ammo.btTriangleMeshShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:420](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L420)

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

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[setLocalScaling](Ammo.btTriangleMeshShape.md#setlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:273](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[getLocalScaling](Ammo.btTriangleMeshShape.md#getlocalscaling)

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

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[calculateLocalInertia](Ammo.btTriangleMeshShape.md#calculatelocalinertia)

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

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[setMargin](Ammo.btTriangleMeshShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:276](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L276)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[getMargin](Ammo.btTriangleMeshShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:277](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L277)

___

### updateBound

▸ **updateBound**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:421](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L421)
