# Class: btSoftBodyHelpers

[Ammo](../modules/Ammo.md).btSoftBodyHelpers


### Constructors

- [constructor](Ammo.btSoftBodyHelpers.md#constructor)

### Methods

- [CreateRope](Ammo.btSoftBodyHelpers.md#createrope)
- [CreatePatch](Ammo.btSoftBodyHelpers.md#createpatch)
- [CreatePatchUV](Ammo.btSoftBodyHelpers.md#createpatchuv)
- [CreateEllipsoid](Ammo.btSoftBodyHelpers.md#createellipsoid)
- [CreateFromTriMesh](Ammo.btSoftBodyHelpers.md#createfromtrimesh)
- [CreateFromConvexHull](Ammo.btSoftBodyHelpers.md#createfromconvexhull)

## Constructors

### constructor

• **new btSoftBodyHelpers**()

#### Defined in

[packages/ammo/ammo.d.ts:1063](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1063)

## Methods

### CreateRope

▸ **CreateRope**(`worldInfo`, `from`, `to`, `res`, `fixeds`): [`btSoftBody`](Ammo.btSoftBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldInfo` | [`btSoftBodyWorldInfo`](Ammo.btSoftBodyWorldInfo.md) |
| `from` | [`btVector3`](Ammo.btVector3.md) |
| `to` | [`btVector3`](Ammo.btVector3.md) |
| `res` | `number` |
| `fixeds` | `number` |

#### Returns

[`btSoftBody`](Ammo.btSoftBody.md)

#### Defined in

[packages/ammo/ammo.d.ts:1064](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1064)

___

### CreatePatch

▸ **CreatePatch**(`worldInfo`, `corner00`, `corner10`, `corner01`, `corner11`, `resx`, `resy`, `fixeds`, `gendiags`): [`btSoftBody`](Ammo.btSoftBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldInfo` | [`btSoftBodyWorldInfo`](Ammo.btSoftBodyWorldInfo.md) |
| `corner00` | [`btVector3`](Ammo.btVector3.md) |
| `corner10` | [`btVector3`](Ammo.btVector3.md) |
| `corner01` | [`btVector3`](Ammo.btVector3.md) |
| `corner11` | [`btVector3`](Ammo.btVector3.md) |
| `resx` | `number` |
| `resy` | `number` |
| `fixeds` | `number` |
| `gendiags` | `boolean` |

#### Returns

[`btSoftBody`](Ammo.btSoftBody.md)

#### Defined in

[packages/ammo/ammo.d.ts:1065](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1065)

___

### CreatePatchUV

▸ **CreatePatchUV**(`worldInfo`, `corner00`, `corner10`, `corner01`, `corner11`, `resx`, `resy`, `fixeds`, `gendiags`, `tex_coords`): [`btSoftBody`](Ammo.btSoftBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldInfo` | [`btSoftBodyWorldInfo`](Ammo.btSoftBodyWorldInfo.md) |
| `corner00` | [`btVector3`](Ammo.btVector3.md) |
| `corner10` | [`btVector3`](Ammo.btVector3.md) |
| `corner01` | [`btVector3`](Ammo.btVector3.md) |
| `corner11` | [`btVector3`](Ammo.btVector3.md) |
| `resx` | `number` |
| `resy` | `number` |
| `fixeds` | `number` |
| `gendiags` | `boolean` |
| `tex_coords` | readonly `number`[] |

#### Returns

[`btSoftBody`](Ammo.btSoftBody.md)

#### Defined in

[packages/ammo/ammo.d.ts:1066](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1066)

___

### CreateEllipsoid

▸ **CreateEllipsoid**(`worldInfo`, `center`, `radius`, `res`): [`btSoftBody`](Ammo.btSoftBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldInfo` | [`btSoftBodyWorldInfo`](Ammo.btSoftBodyWorldInfo.md) |
| `center` | [`btVector3`](Ammo.btVector3.md) |
| `radius` | [`btVector3`](Ammo.btVector3.md) |
| `res` | `number` |

#### Returns

[`btSoftBody`](Ammo.btSoftBody.md)

#### Defined in

[packages/ammo/ammo.d.ts:1067](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1067)

___

### CreateFromTriMesh

▸ **CreateFromTriMesh**(`worldInfo`, `vertices`, `triangles`, `ntriangles`, `randomizeConstraints`): [`btSoftBody`](Ammo.btSoftBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldInfo` | [`btSoftBodyWorldInfo`](Ammo.btSoftBodyWorldInfo.md) |
| `vertices` | readonly `number`[] |
| `triangles` | readonly `number`[] |
| `ntriangles` | `number` |
| `randomizeConstraints` | `boolean` |

#### Returns

[`btSoftBody`](Ammo.btSoftBody.md)

#### Defined in

[packages/ammo/ammo.d.ts:1068](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1068)

___

### CreateFromConvexHull

▸ **CreateFromConvexHull**(`worldInfo`, `vertices`, `nvertices`, `randomizeConstraints`): [`btSoftBody`](Ammo.btSoftBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldInfo` | [`btSoftBodyWorldInfo`](Ammo.btSoftBodyWorldInfo.md) |
| `vertices` | [`btVector3`](Ammo.btVector3.md) |
| `nvertices` | `number` |
| `randomizeConstraints` | `boolean` |

#### Returns

[`btSoftBody`](Ammo.btSoftBody.md)

#### Defined in

[packages/ammo/ammo.d.ts:1069](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1069)
