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

• **new btSoftBodyHelpers**(): [`btSoftBodyHelpers`](Ammo.btSoftBodyHelpers.md)

#### Returns

[`btSoftBodyHelpers`](Ammo.btSoftBodyHelpers.md)

#### Defined in

[packages/ammo/ammo.d.ts:1078](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1078)

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

[packages/ammo/ammo.d.ts:1079](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1079)

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

[packages/ammo/ammo.d.ts:1080](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1080)

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

[packages/ammo/ammo.d.ts:1081](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1081)

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

[packages/ammo/ammo.d.ts:1082](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1082)

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

[packages/ammo/ammo.d.ts:1083](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1083)

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

[packages/ammo/ammo.d.ts:1084](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1084)
