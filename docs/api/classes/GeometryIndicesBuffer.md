[**@orillusion/core**](../README.md)

***

# Class: GeometryIndicesBuffer

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:10](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L10)

Holds the index data of a geometry and manages its backing GPU index buffer.

## Constructors

### Constructor

> **new GeometryIndicesBuffer**(): `GeometryIndicesBuffer`

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:17](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L17)

#### Returns

`GeometryIndicesBuffer`

## Properties

### uuid

> **uuid**: `string` = `''`

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:12](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L12)

***

### name

> **name**: `string`

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:13](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L13)

***

### indicesGPUBuffer

> **indicesGPUBuffer**: [`IndicesGPUBuffer`](IndicesGPUBuffer.md)

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:14](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L14)

***

### indicesFormat

> **indicesFormat**: `GPUIndexFormat`

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:15](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L15)

***

### indicesCount

> **indicesCount**: `number` = `0`

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:16](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L16)

## Methods

### createIndicesBuffer()

> **createIndicesBuffer**(`indicesData`): `void`

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:20](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L20)

#### Parameters

##### indicesData

[`VertexAttributeData`](../type-aliases/VertexAttributeData.md)

#### Returns

`void`

***

### upload()

> **upload**(`data`): `void`

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:30](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L30)

#### Parameters

##### data

[`ArrayBufferData`](../type-aliases/ArrayBufferData.md)

#### Returns

`void`

***

### compute()

> **compute**(): `void`

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:35](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L35)

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [src/core/geometry/GeometryIndicesBuffer.ts:39](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryIndicesBuffer.ts#L39)

#### Returns

`void`
