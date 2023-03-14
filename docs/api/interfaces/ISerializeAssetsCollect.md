# Interface: ISerializeAssetsCollect

## Implemented by

- [`SerializeAssetsCollect`](../classes/SerializeAssetsCollect.md)


### Methods

- [collect](ISerializeAssetsCollect.md#collect)
- [getGeometryIndex](ISerializeAssetsCollect.md#getgeometryindex)
- [getMaterialIndex](ISerializeAssetsCollect.md#getmaterialindex)
- [getTextureIndex](ISerializeAssetsCollect.md#gettextureindex)

## Methods

### collect

▸ **collect**(`scene`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](../classes/Scene3D.md) |

#### Returns

`any`

#### Defined in

[src/engine/util/serialize/ISerializeAssetsCollect.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/ISerializeAssetsCollect.ts#L7)

___

### getGeometryIndex

▸ **getGeometryIndex**(`geometry`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](../classes/GeometryBase.md) |

#### Returns

`number`

#### Defined in

[src/engine/util/serialize/ISerializeAssetsCollect.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/ISerializeAssetsCollect.ts#L9)

___

### getMaterialIndex

▸ **getMaterialIndex**(`material`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `MaterialBase` |

#### Returns

`number`

#### Defined in

[src/engine/util/serialize/ISerializeAssetsCollect.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/ISerializeAssetsCollect.ts#L11)

___

### getTextureIndex

▸ **getTextureIndex**(`texture`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](../classes/Texture.md) |

#### Returns

`number`

#### Defined in

[src/engine/util/serialize/ISerializeAssetsCollect.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/ISerializeAssetsCollect.ts#L13)
