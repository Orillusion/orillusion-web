# Class: SerializeData


### Constructors

- [constructor](SerializeData.md#constructor)

### Properties

- [version](SerializeData.md#version)
- [hierarchy](SerializeData.md#hierarchy)
- [textures](SerializeData.md#textures)
- [materials](SerializeData.md#materials)
- [geometries](SerializeData.md#geometries)
- [engineSetting](SerializeData.md#enginesetting)
- [gltfList](SerializeData.md#gltflist)
- [prefabList](SerializeData.md#prefablist)

### Methods

- [toJson](SerializeData.md#tojson)

## Constructors

### constructor

• **new SerializeData**()

## Properties

### version

• **version**: [`SerializeVersion`](SerializeVersion.md)

#### Defined in

[src/engine/util/serialize/SerializeData.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L106)

___

### hierarchy

• **hierarchy**: [`SerializeObject3D`](SerializeObject3D.md)[]

#### Defined in

[src/engine/util/serialize/SerializeData.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L107)

___

### textures

• **textures**: [`SerializeTextureInstance`](SerializeTextureInstance.md)[]

#### Defined in

[src/engine/util/serialize/SerializeData.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L109)

___

### materials

• **materials**: [`SerializeMaterialInstance`](SerializeMaterialInstance.md)[]

#### Defined in

[src/engine/util/serialize/SerializeData.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L110)

___

### geometries

• **geometries**: [`SerializeGeometryInstance`](SerializeGeometryInstance.md)[]

#### Defined in

[src/engine/util/serialize/SerializeData.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L111)

___

### engineSetting

• `Optional` **engineSetting**: `any`

#### Defined in

[src/engine/util/serialize/SerializeData.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L113)

___

### gltfList

• **gltfList**: `string`[]

#### Defined in

[src/engine/util/serialize/SerializeData.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L114)

___

### prefabList

• **prefabList**: `string`[]

#### Defined in

[src/engine/util/serialize/SerializeData.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L115)

## Methods

### toJson

▸ **toJson**(): `string`

#### Returns

`string`

#### Defined in

[src/engine/util/serialize/SerializeData.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L117)
