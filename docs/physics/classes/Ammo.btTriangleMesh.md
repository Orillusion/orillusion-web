# Class: btTriangleMesh

[Ammo](../modules/Ammo.md).btTriangleMesh

## Hierarchy

- [`btStridingMeshInterface`](Ammo.btStridingMeshInterface.md)

  ↳ **`btTriangleMesh`**

### Constructors

- [constructor](Ammo.btTriangleMesh.md#constructor)

### Methods

- [setScaling](Ammo.btTriangleMesh.md#setscaling)
- [addTriangle](Ammo.btTriangleMesh.md#addtriangle)
- [findOrAddVertex](Ammo.btTriangleMesh.md#findoraddvertex)
- [addIndex](Ammo.btTriangleMesh.md#addindex)
- [getIndexedMeshArray](Ammo.btTriangleMesh.md#getindexedmesharray)

## Constructors

### constructor

• **new btTriangleMesh**(`use32bitIndices?`, `use4componentVertices?`): [`btTriangleMesh`](Ammo.btTriangleMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `use32bitIndices?` | `boolean` |
| `use4componentVertices?` | `boolean` |

#### Returns

[`btTriangleMesh`](Ammo.btTriangleMesh.md)

#### Overrides

[btStridingMeshInterface](Ammo.btStridingMeshInterface.md).[constructor](Ammo.btStridingMeshInterface.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:401](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L401)

## Methods

### setScaling

▸ **setScaling**(`scaling`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaling` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btStridingMeshInterface](Ammo.btStridingMeshInterface.md).[setScaling](Ammo.btStridingMeshInterface.md#setscaling)

#### Defined in

[packages/ammo/ammo.d.ts:390](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L390)

___

### addTriangle

▸ **addTriangle**(`vertex0`, `vertex1`, `vertex2`, `removeDuplicateVertices?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertex0` | [`btVector3`](Ammo.btVector3.md) |
| `vertex1` | [`btVector3`](Ammo.btVector3.md) |
| `vertex2` | [`btVector3`](Ammo.btVector3.md) |
| `removeDuplicateVertices?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:402](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L402)

___

### findOrAddVertex

▸ **findOrAddVertex**(`vertex`, `removeDuplicateVertices`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertex` | [`btVector3`](Ammo.btVector3.md) |
| `removeDuplicateVertices` | `boolean` |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:403](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L403)

___

### addIndex

▸ **addIndex**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:404](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L404)

___

### getIndexedMeshArray

▸ **getIndexedMeshArray**(): [`btIndexedMeshArray`](Ammo.btIndexedMeshArray.md)

#### Returns

[`btIndexedMeshArray`](Ammo.btIndexedMeshArray.md)

#### Defined in

[packages/ammo/ammo.d.ts:405](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L405)
