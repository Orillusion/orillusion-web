[**@orillusion/core**](../README.md)

***

# Class: VertexBufferLayout

Defined in: [src/core/geometry/VertexAttribute.ts:7](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L7)

Describes the memory layout of a single vertex buffer, including its
stride, step mode and the attributes it contains.

## Implements

- `GPUVertexBufferLayout`

## Constructors

### Constructor

> **new VertexBufferLayout**(): `VertexBufferLayout`

#### Returns

`VertexBufferLayout`

## Properties

### name

> **name**: `string`

Defined in: [src/core/geometry/VertexAttribute.ts:8](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L8)

***

### offset

> **offset**: `number`

Defined in: [src/core/geometry/VertexAttribute.ts:9](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L9)

***

### size

> **size**: `number`

Defined in: [src/core/geometry/VertexAttribute.ts:10](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L10)

***

### arrayStride

> **arrayStride**: `number`

Defined in: [src/core/geometry/VertexAttribute.ts:11](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L11)

The stride, in bytes, between elements of this array.

#### Implementation of

`GPUVertexBufferLayout.arrayStride`

***

### stepMode?

> `optional` **stepMode?**: `GPUVertexStepMode`

Defined in: [src/core/geometry/VertexAttribute.ts:12](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L12)

Whether each element of this array represents per-vertex data or per-instance data

#### Implementation of

`GPUVertexBufferLayout.stepMode`

***

### attributes

> **attributes**: `GPUVertexAttribute`[]

Defined in: [src/core/geometry/VertexAttribute.ts:13](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L13)

An array defining the layout of the vertex attributes within each element.

#### Implementation of

`GPUVertexBufferLayout.attributes`
