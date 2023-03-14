# Class: SerializeAssetsCollect

## Implements

- [`ISerializeAssetsCollect`](../interfaces/ISerializeAssetsCollect.md)


### Constructors

- [constructor](SerializeAssetsCollect.md#constructor)

### Properties

- [retTextures](SerializeAssetsCollect.md#rettextures)
- [retMaterials](SerializeAssetsCollect.md#retmaterials)
- [retGeometries](SerializeAssetsCollect.md#retgeometries)

### Methods

- [collect](SerializeAssetsCollect.md#collect)
- [getGeometryIndex](SerializeAssetsCollect.md#getgeometryindex)
- [getMaterialIndex](SerializeAssetsCollect.md#getmaterialindex)
- [getTextureIndex](SerializeAssetsCollect.md#gettextureindex)

## Constructors

### constructor

• **new SerializeAssetsCollect**()

## Properties

### retTextures

• **retTextures**: [`SerializeTextureInstance`](SerializeTextureInstance.md)[]

#### Defined in

[src/engine/util/serialize/SerializeAssetsCollect.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetsCollect.ts#L21)

___

### retMaterials

• **retMaterials**: [`SerializeMaterialInstance`](SerializeMaterialInstance.md)[]

#### Defined in

[src/engine/util/serialize/SerializeAssetsCollect.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetsCollect.ts#L22)

___

### retGeometries

• **retGeometries**: [`SerializeGeometryInstance`](SerializeGeometryInstance.md)[]

#### Defined in

[src/engine/util/serialize/SerializeAssetsCollect.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetsCollect.ts#L23)

## Methods

### collect

▸ **collect**(`object3D`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object3D` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Implementation of

[ISerializeAssetsCollect](../interfaces/ISerializeAssetsCollect.md).[collect](../interfaces/ISerializeAssetsCollect.md#collect)

#### Defined in

[src/engine/util/serialize/SerializeAssetsCollect.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetsCollect.ts#L25)

___

### getGeometryIndex

▸ **getGeometryIndex**(`geometry`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`number`

#### Implementation of

[ISerializeAssetsCollect](../interfaces/ISerializeAssetsCollect.md).[getGeometryIndex](../interfaces/ISerializeAssetsCollect.md#getgeometryindex)

#### Defined in

[src/engine/util/serialize/SerializeAssetsCollect.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetsCollect.ts#L186)

___

### getMaterialIndex

▸ **getMaterialIndex**(`material`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `MaterialBase` |

#### Returns

`number`

#### Implementation of

[ISerializeAssetsCollect](../interfaces/ISerializeAssetsCollect.md).[getMaterialIndex](../interfaces/ISerializeAssetsCollect.md#getmaterialindex)

#### Defined in

[src/engine/util/serialize/SerializeAssetsCollect.ts:192](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetsCollect.ts#L192)

___

### getTextureIndex

▸ **getTextureIndex**(`texture`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`number`

#### Implementation of

[ISerializeAssetsCollect](../interfaces/ISerializeAssetsCollect.md).[getTextureIndex](../interfaces/ISerializeAssetsCollect.md#gettextureindex)

#### Defined in

[src/engine/util/serialize/SerializeAssetsCollect.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetsCollect.ts#L198)
