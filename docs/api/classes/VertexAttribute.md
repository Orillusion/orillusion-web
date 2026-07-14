[**@orillusion/core**](../README.md)

***

# Class: VertexAttribute

Defined in: [src/core/geometry/VertexAttribute.ts:21](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L21)

Describes a single vertex attribute, including its format, offset and
shader binding location within a vertex buffer.

## Implements

- `GPUVertexAttribute`

## Constructors

### Constructor

> **new VertexAttribute**(): `VertexAttribute`

#### Returns

`VertexAttribute`

## Properties

### name

> **name**: `string`

Defined in: [src/core/geometry/VertexAttribute.ts:22](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L22)

***

### format

> **format**: `GPUVertexFormat`

Defined in: [src/core/geometry/VertexAttribute.ts:23](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L23)

The GPUVertexFormat of the attribute.

#### Implementation of

`GPUVertexAttribute.format`

***

### offset

> **offset**: `number`

Defined in: [src/core/geometry/VertexAttribute.ts:24](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L24)

The offset, in bytes, from the beginning of the element to the data for the attribute.

#### Implementation of

`GPUVertexAttribute.offset`

***

### shaderLocation

> **shaderLocation**: `number`

Defined in: [src/core/geometry/VertexAttribute.ts:25](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L25)

The numeric location associated with this attribute, which will correspond with a
<a href="https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations">"@location" attribute</a>
declared in the GPURenderPipelineDescriptor#vertex.GPUProgrammableStage#module \| module.

#### Implementation of

`GPUVertexAttribute.shaderLocation`

***

### stride

> **stride**: `number`

Defined in: [src/core/geometry/VertexAttribute.ts:26](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/VertexAttribute.ts#L26)
