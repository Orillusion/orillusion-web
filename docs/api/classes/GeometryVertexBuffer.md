# Class: GeometryVertexBuffer


### Properties

- [vertexCount](GeometryVertexBuffer.md#vertexcount)
- [vertexGPUBuffer](GeometryVertexBuffer.md#vertexgpubuffer)
- [geometryType](GeometryVertexBuffer.md#geometrytype)

### Constructors

- [constructor](GeometryVertexBuffer.md#constructor)

### Accessors

- [vertexBufferLayouts](GeometryVertexBuffer.md#vertexbufferlayouts)

### Methods

- [createVertexBuffer](GeometryVertexBuffer.md#createvertexbuffer)
- [upload](GeometryVertexBuffer.md#upload)
- [updateAttributes](GeometryVertexBuffer.md#updateattributes)
- [compute](GeometryVertexBuffer.md#compute)

## Properties

### vertexCount

• **vertexCount**: `number` = `0`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L10)

___

### vertexGPUBuffer

• **vertexGPUBuffer**: [`VertexGPUBuffer`](VertexGPUBuffer.md)

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L11)

___

### geometryType

• **geometryType**: [`GeometryVertexType`](../enums/GeometryVertexType.md) = `GeometryVertexType.compose`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L12)

## Constructors

### constructor

• **new GeometryVertexBuffer**()

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L17)

## Accessors

### vertexBufferLayouts

• `get` **vertexBufferLayouts**(): [`VertexBufferLayout`](VertexBufferLayout.md)[]

#### Returns

[`VertexBufferLayout`](VertexBufferLayout.md)[]

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L23)

## Methods

### createVertexBuffer

▸ **createVertexBuffer**(`vertexDataInfos`, `shaderReflection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexDataInfos` | `Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\> |
| `shaderReflection` | `ShaderReflection` |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L27)

___

### upload

▸ **upload**(`attribute`, `vertexDataInfo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |
| `vertexDataInfo` | [`VertexAttributeData`](../types/VertexAttributeData.md) |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L133)

___

### updateAttributes

▸ **updateAttributes**(`vertexDataInfos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexDataInfos` | `Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\> |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L158)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L190)
