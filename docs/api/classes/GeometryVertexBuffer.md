# Class: GeometryVertexBuffer

### Constructors

- [constructor](GeometryVertexBuffer.md#constructor)

### Properties

- [vertexCount](GeometryVertexBuffer.md#vertexcount)
- [vertexGPUBuffer](GeometryVertexBuffer.md#vertexgpubuffer)
- [geometryType](GeometryVertexBuffer.md#geometrytype)

### Accessors

- [vertexBufferLayouts](GeometryVertexBuffer.md#vertexbufferlayouts)

### Methods

- [createVertexBuffer](GeometryVertexBuffer.md#createvertexbuffer)
- [upload](GeometryVertexBuffer.md#upload)
- [updateAttributes](GeometryVertexBuffer.md#updateattributes)
- [compute](GeometryVertexBuffer.md#compute)
- [destroy](GeometryVertexBuffer.md#destroy)

## Constructors

### constructor

• **new GeometryVertexBuffer**()

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L19)

## Properties

### vertexCount

• **vertexCount**: `number` = `0`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L12)

___

### vertexGPUBuffer

• **vertexGPUBuffer**: [`VertexGPUBuffer`](VertexGPUBuffer.md)

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L13)

___

### geometryType

• **geometryType**: [`GeometryVertexType`](../enums/GeometryVertexType.md) = `GeometryVertexType.compose`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L14)

## Accessors

### vertexBufferLayouts

• `get` **vertexBufferLayouts**(): [`VertexBufferLayout`](VertexBufferLayout.md)[]

#### Returns

[`VertexBufferLayout`](VertexBufferLayout.md)[]

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L25)

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

[src/core/geometry/GeometryVertexBuffer.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L29)

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

[src/core/geometry/GeometryVertexBuffer.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L193)

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

[src/core/geometry/GeometryVertexBuffer.ts:222](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L222)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:261](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L261)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryVertexBuffer.ts:265](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L265)
