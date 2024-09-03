# Class: GeometryBase

## Hierarchy

- **`GeometryBase`**

  ↳ [`GUIGeometry`](GUIGeometry.md)

  ↳ [`ExtrudeGeometry`](ExtrudeGeometry.md)

  ↳ [`BoxGeometry`](BoxGeometry.md)

  ↳ [`CylinderGeometry`](CylinderGeometry.md)

  ↳ [`PlaneGeometry`](PlaneGeometry.md)

  ↳ [`SphereGeometry`](SphereGeometry.md)

  ↳ [`StripeGeometry`](StripeGeometry.md)

  ↳ [`TorusGeometry`](TorusGeometry.md)

  ↳ [`TrailGeometry`](TrailGeometry.md)

  ↳ [`TriGeometry`](TriGeometry.md)

### Constructors

- [constructor](GeometryBase.md#constructor)

### Properties

- [instanceID](GeometryBase.md#instanceid)
- [name](GeometryBase.md#name)
- [subGeometries](GeometryBase.md#subgeometries)
- [morphTargetsRelative](GeometryBase.md#morphtargetsrelative)
- [morphTargetDictionary](GeometryBase.md#morphtargetdictionary)
- [skinNames](GeometryBase.md#skinnames)
- [bindPose](GeometryBase.md#bindpose)
- [blendShapeData](GeometryBase.md#blendshapedata)
- [vertexDim](GeometryBase.md#vertexdim)
- [vertexCount](GeometryBase.md#vertexcount)

### Accessors

- [indicesBuffer](GeometryBase.md#indicesbuffer)
- [vertexBuffer](GeometryBase.md#vertexbuffer)
- [vertexAttributes](GeometryBase.md#vertexattributes)
- [vertexAttributeMap](GeometryBase.md#vertexattributemap)
- [geometryType](GeometryBase.md#geometrytype)
- [bounds](GeometryBase.md#bounds)

### Methods

- [addSubGeometry](GeometryBase.md#addsubgeometry)
- [generate](GeometryBase.md#generate)
- [setIndices](GeometryBase.md#setindices)
- [setAttribute](GeometryBase.md#setattribute)
- [getAttribute](GeometryBase.md#getattribute)
- [hasAttribute](GeometryBase.md#hasattribute)
- [genWireframe](GeometryBase.md#genwireframe)
- [compute](GeometryBase.md#compute)
- [computeNormals](GeometryBase.md#computenormals)
- [isPrimitive](GeometryBase.md#isprimitive)
- [destroy](GeometryBase.md#destroy)

## Constructors

### constructor

• **new GeometryBase**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L58)

## Properties

### instanceID

• **instanceID**: `string`

#### Defined in

[src/core/geometry/GeometryBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L39)

___

### name

• **name**: `string`

#### Defined in

[src/core/geometry/GeometryBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L40)

___

### subGeometries

• **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

#### Defined in

[src/core/geometry/GeometryBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L41)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Defined in

[src/core/geometry/GeometryBase.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L42)

___

### morphTargetDictionary

• **morphTargetDictionary**: `Object`

#### Index signature

▪ [blenderName: `string`]: `number`

#### Defined in

[src/core/geometry/GeometryBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L43)

___

### skinNames

• **skinNames**: `string`[]

#### Defined in

[src/core/geometry/GeometryBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L44)

___

### bindPose

• **bindPose**: [`Matrix4`](Matrix4.md)[]

#### Defined in

[src/core/geometry/GeometryBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L45)

___

### blendShapeData

• **blendShapeData**: [`BlendShapeData`](BlendShapeData.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L46)

___

### vertexDim

• **vertexDim**: `number`

#### Defined in

[src/core/geometry/GeometryBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L47)

___

### vertexCount

• **vertexCount**: `number` = `0`

#### Defined in

[src/core/geometry/GeometryBase.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L48)

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L69)

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L73)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/core/geometry/GeometryBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L77)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`\<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Returns

`Map`\<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Defined in

[src/core/geometry/GeometryBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L81)

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L85)

• `set` **geometryType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryVertexType`](../enums/GeometryVertexType.md) |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L88)

___

### bounds

• `get` **bounds**(): `BoundingBox`

#### Returns

`BoundingBox`

#### Defined in

[src/core/geometry/GeometryBase.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L92)

• `set` **bounds**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BoundingBox` |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L135)

## Methods

### addSubGeometry

▸ **addSubGeometry**(`...lodLevels`): [`SubGeometry`](SubGeometry.md)

add subGeometry from lod level

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lodLevels` | [`LODDescriptor`](../types/LODDescriptor.md)[] |

#### Returns

[`SubGeometry`](SubGeometry.md)

**`See`**

LODDescriptor

#### Defined in

[src/core/geometry/GeometryBase.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L144)

___

### generate

▸ **generate**(`shaderReflection`): `void`

create geometry by shaderReflection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shaderReflection` | `ShaderReflection` | ShaderReflection |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L155)

___

### setIndices

▸ **setIndices**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBufferData`](../types/ArrayBufferData.md) |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L165)

___

### setAttribute

▸ **setAttribute**(`attribute`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |
| `data` | [`ArrayBufferData`](../types/ArrayBufferData.md) |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L177)

___

### getAttribute

▸ **getAttribute**(`attribute`): [`VertexAttributeData`](../types/VertexAttributeData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |

#### Returns

[`VertexAttributeData`](../types/VertexAttributeData.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L190)

___

### hasAttribute

▸ **hasAttribute**(`attribute`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |

#### Returns

`boolean`

#### Defined in

[src/core/geometry/GeometryBase.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L194)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

[src/core/geometry/GeometryBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L198)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L251)

___

### computeNormals

▸ **computeNormals**(): `this`

#### Returns

`this`

#### Defined in

[src/core/geometry/GeometryBase.ts:270](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L270)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/geometry/GeometryBase.ts:312](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L312)

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

[src/core/geometry/GeometryBase.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L316)
