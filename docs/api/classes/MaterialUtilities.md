# Class: MaterialUtilities

### Constructors

- [constructor](MaterialUtilities.md#constructor)

### Methods

- [GetMaterial](MaterialUtilities.md#getmaterial)
- [applyMaterialTexture](MaterialUtilities.md#applymaterialtexture)
- [applyMaterialProperties](MaterialUtilities.md#applymaterialproperties)

## Constructors

### constructor

• **new MaterialUtilities**()

## Methods

### GetMaterial

▸ `Static` **GetMaterial**(`shaderName`): [`Material`](Material.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderName` | `string` |

#### Returns

[`Material`](Material.md)

#### Defined in

[src/loader/parser/prefab/mats/MaterialUtilities.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/MaterialUtilities.ts#L10)

___

### applyMaterialTexture

▸ `Static` **applyMaterialTexture**(`mat`, `textures`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`Material`](Material.md) |
| `textures` | [`PrefabTextureData`](PrefabTextureData.md)[] |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/MaterialUtilities.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/MaterialUtilities.ts#L29)

___

### applyMaterialProperties

▸ `Static` **applyMaterialProperties**(`mat`, `properties`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`Material`](Material.md) |
| `properties` | [`KV`](KV.md)[] |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/MaterialUtilities.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/MaterialUtilities.ts#L42)
