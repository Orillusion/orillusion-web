# Class: TriGeometry

Plane geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`TriGeometry`**

### Constructors

- [constructor](TriGeometry.md#constructor)

### Properties

- [instanceID](TriGeometry.md#instanceid)
- [name](TriGeometry.md#name)
- [subGeometries](TriGeometry.md#subgeometries)
- [morphTargetsRelative](TriGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](TriGeometry.md#morphtargetdictionary)
- [skinNames](TriGeometry.md#skinnames)
- [bindPose](TriGeometry.md#bindpose)
- [blendShapeData](TriGeometry.md#blendshapedata)
- [vertexDim](TriGeometry.md#vertexdim)

### Accessors

- [indicesBuffer](TriGeometry.md#indicesbuffer)
- [vertexBuffer](TriGeometry.md#vertexbuffer)
- [vertexAttributes](TriGeometry.md#vertexattributes)
- [vertexAttributeMap](TriGeometry.md#vertexattributemap)
- [geometryType](TriGeometry.md#geometrytype)
- [bounds](TriGeometry.md#bounds)

### Methods

- [addSubGeometry](TriGeometry.md#addsubgeometry)
- [generate](TriGeometry.md#generate)
- [setIndices](TriGeometry.md#setindices)
- [setAttribute](TriGeometry.md#setattribute)
- [getAttribute](TriGeometry.md#getattribute)
- [hasAttribute](TriGeometry.md#hasattribute)
- [genWireframe](TriGeometry.md#genwireframe)
- [compute](TriGeometry.md#compute)
- [computeNormals](TriGeometry.md#computenormals)
- [isPrimitive](TriGeometry.md#isprimitive)
- [destroy](TriGeometry.md#destroy)

## Constructors

### constructor

• **new TriGeometry**(`count`): [`TriGeometry`](TriGeometry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`TriGeometry`](TriGeometry.md)

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/shape/TriGeometry.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/shape/TriGeometry.ts#L16)

## Properties

### instanceID

• **instanceID**: `string`

#### Inherited from

[GeometryBase](GeometryBase.md).[instanceID](GeometryBase.md#instanceid)

#### Defined in

[src/core/geometry/GeometryBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L39)

___

### name

• **name**: `string`

#### Inherited from

[GeometryBase](GeometryBase.md).[name](GeometryBase.md#name)

#### Defined in

[src/core/geometry/GeometryBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L40)

___

### subGeometries

• **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

#### Inherited from

[GeometryBase](GeometryBase.md).[subGeometries](GeometryBase.md#subgeometries)

#### Defined in

[src/core/geometry/GeometryBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L41)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[morphTargetsRelative](GeometryBase.md#morphtargetsrelative)

#### Defined in

[src/core/geometry/GeometryBase.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L42)

___

### morphTargetDictionary

• **morphTargetDictionary**: `Object`

#### Index signature

▪ [blenderName: `string`]: `number`

#### Inherited from

[GeometryBase](GeometryBase.md).[morphTargetDictionary](GeometryBase.md#morphtargetdictionary)

#### Defined in

[src/core/geometry/GeometryBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L43)

___

### skinNames

• **skinNames**: `string`[]

#### Inherited from

[GeometryBase](GeometryBase.md).[skinNames](GeometryBase.md#skinnames)

#### Defined in

[src/core/geometry/GeometryBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L44)

___

### bindPose

• **bindPose**: [`Matrix4`](Matrix4.md)[]

#### Inherited from

[GeometryBase](GeometryBase.md).[bindPose](GeometryBase.md#bindpose)

#### Defined in

[src/core/geometry/GeometryBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L45)

___

### blendShapeData

• **blendShapeData**: [`BlendShapeData`](BlendShapeData.md)

#### Inherited from

[GeometryBase](GeometryBase.md).[blendShapeData](GeometryBase.md#blendshapedata)

#### Defined in

[src/core/geometry/GeometryBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L46)

___

### vertexDim

• **vertexDim**: `number`

#### Inherited from

[GeometryBase](GeometryBase.md).[vertexDim](GeometryBase.md#vertexdim)

#### Defined in

[src/core/geometry/GeometryBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L47)

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Inherited from

GeometryBase.indicesBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L68)

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Inherited from

GeometryBase.vertexBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L72)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Inherited from

GeometryBase.vertexAttributes

#### Defined in

[src/core/geometry/GeometryBase.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L76)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`\<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Returns

`Map`\<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Inherited from

GeometryBase.vertexAttributeMap

#### Defined in

[src/core/geometry/GeometryBase.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L80)

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Inherited from

GeometryBase.geometryType

#### Defined in

[src/core/geometry/GeometryBase.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L84)

• `set` **geometryType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryVertexType`](../enums/GeometryVertexType.md) |

#### Returns

`void`

#### Inherited from

GeometryBase.geometryType

#### Defined in

[src/core/geometry/GeometryBase.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L87)

___

### bounds

• `get` **bounds**(): `BoundingBox`

#### Returns

`BoundingBox`

#### Inherited from

GeometryBase.bounds

#### Defined in

[src/core/geometry/GeometryBase.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L91)

• `set` **bounds**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BoundingBox` |

#### Returns

`void`

#### Inherited from

GeometryBase.bounds

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

#### Inherited from

[GeometryBase](GeometryBase.md).[addSubGeometry](GeometryBase.md#addsubgeometry)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[generate](GeometryBase.md#generate)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[setIndices](GeometryBase.md#setindices)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[setAttribute](GeometryBase.md#setattribute)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[getAttribute](GeometryBase.md#getattribute)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[hasAttribute](GeometryBase.md#hasattribute)

#### Defined in

[src/core/geometry/GeometryBase.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L191)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Inherited from

[GeometryBase](GeometryBase.md).[genWireframe](GeometryBase.md#genwireframe)

#### Defined in

[src/core/geometry/GeometryBase.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L195)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[compute](GeometryBase.md#compute)

#### Defined in

[src/core/geometry/GeometryBase.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L248)

___

### computeNormals

▸ **computeNormals**(): `this`

#### Returns

`this`

#### Inherited from

[GeometryBase](GeometryBase.md).[computeNormals](GeometryBase.md#computenormals)

#### Defined in

[src/core/geometry/GeometryBase.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L267)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[isPrimitive](GeometryBase.md#isprimitive)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[destroy](GeometryBase.md#destroy)

#### Defined in

[src/core/geometry/GeometryBase.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L313)
