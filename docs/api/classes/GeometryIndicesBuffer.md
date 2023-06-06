# Class: GeometryIndicesBuffer

### Constructors

- [constructor](GeometryIndicesBuffer.md#constructor)

### Properties

- [uuid](GeometryIndicesBuffer.md#uuid)
- [name](GeometryIndicesBuffer.md#name)
- [indicesGPUBuffer](GeometryIndicesBuffer.md#indicesgpubuffer)
- [indicesFormat](GeometryIndicesBuffer.md#indicesformat)
- [indicesCount](GeometryIndicesBuffer.md#indicescount)

### Methods

- [createIndicesBuffer](GeometryIndicesBuffer.md#createindicesbuffer)
- [upload](GeometryIndicesBuffer.md#upload)
- [compute](GeometryIndicesBuffer.md#compute)
- [destroy](GeometryIndicesBuffer.md#destroy)

## Constructors

### constructor

• **new GeometryIndicesBuffer**()

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L13)

## Properties

### uuid

• **uuid**: `string` = `''`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L8)

___

### name

• **name**: `string`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L9)

___

### indicesGPUBuffer

• **indicesGPUBuffer**: [`IndicesGPUBuffer`](IndicesGPUBuffer.md)

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L10)

___

### indicesFormat

• **indicesFormat**: `GPUIndexFormat`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L11)

___

### indicesCount

• **indicesCount**: `number` = `0`

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

[src/core/geometry/GeometryIndicesBuffer.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L16)

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

[src/core/geometry/GeometryIndicesBuffer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L26)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L31)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryIndicesBuffer.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L35)
