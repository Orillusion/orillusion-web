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

[src/core/geometry/GeometryBase.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L57)

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

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L68)

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L72)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/core/geometry/GeometryBase.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L76)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`\<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Returns

`Map`\<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Defined in

[src/core/geometry/GeometryBase.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L80)

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L84)

• `set` **geometryType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryVertexType`](../enums/GeometryVertexType.md) |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L87)

___

### bounds

• `get` **bounds**(): `BoundingBox`

#### Returns

`BoundingBox`

#### Defined in

[src/core/geometry/GeometryBase.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L91)

• `set` **bounds**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BoundingBox` |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L134)

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

[src/core/geometry/GeometryBase.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L142)

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

[src/core/geometry/GeometryBase.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L153)

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

[src/core/geometry/GeometryBase.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L162)

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

[src/core/geometry/GeometryBase.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L174)

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

[src/core/geometry/GeometryBase.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L187)

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

[src/core/geometry/GeometryBase.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L191)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

[src/core/geometry/GeometryBase.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L195)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L248)

___

### computeNormals

▸ **computeNormals**(): `this`

#### Returns

`this`

#### Defined in

[src/core/geometry/GeometryBase.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L267)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/geometry/GeometryBase.ts:309](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L309)

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

[src/core/geometry/GeometryBase.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L313)
