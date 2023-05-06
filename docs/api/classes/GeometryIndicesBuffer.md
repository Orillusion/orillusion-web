# Class: GeometryIndicesBuffer


### Properties

- [uuid](GeometryIndicesBuffer.md#uuid)
- [name](GeometryIndicesBuffer.md#name)
- [indicesGPUBuffer](GeometryIndicesBuffer.md#indicesgpubuffer)
- [indicesFormat](GeometryIndicesBuffer.md#indicesformat)
- [indicesCount](GeometryIndicesBuffer.md#indicescount)

### Constructors

- [constructor](GeometryIndicesBuffer.md#constructor)

### Methods

- [createIndicesBuffer](GeometryIndicesBuffer.md#createindicesbuffer)
- [upload](GeometryIndicesBuffer.md#upload)
- [compute](GeometryIndicesBuffer.md#compute)

## Properties

### uuid

• **uuid**: `string` = `''`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L7)

___

### name

• **name**: `string`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L8)

___

### indicesGPUBuffer

• **indicesGPUBuffer**: [`IndicesGPUBuffer`](IndicesGPUBuffer.md)

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L9)

___

### indicesFormat

• **indicesFormat**: `GPUIndexFormat`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L10)

___

### indicesCount

• **indicesCount**: `number` = `0`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L11)

## Constructors

### constructor

• **new GeometryIndicesBuffer**()

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L12)

## Methods

### createIndicesBuffer

▸ **createIndicesBuffer**(`indicesData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indicesData` | [`VertexAttributeData`](../types/VertexAttributeData.md) |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L15)

___

### upload

▸ **upload**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBufferData`](../types/ArrayBufferData.md) |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L25)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L30)
