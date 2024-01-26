# Class: PlaneGeometry

Plane geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`PlaneGeometry`**

### Constructors

- [constructor](PlaneGeometry.md#constructor)

### Properties

- [instanceID](PlaneGeometry.md#instanceid)
- [name](PlaneGeometry.md#name)
- [subGeometries](PlaneGeometry.md#subgeometries)
- [morphTargetsRelative](PlaneGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](PlaneGeometry.md#morphtargetdictionary)
- [skinNames](PlaneGeometry.md#skinnames)
- [bindPose](PlaneGeometry.md#bindpose)
- [blendShapeData](PlaneGeometry.md#blendshapedata)
- [vertexDim](PlaneGeometry.md#vertexdim)
- [width](PlaneGeometry.md#width)
- [height](PlaneGeometry.md#height)
- [segmentW](PlaneGeometry.md#segmentw)
- [segmentH](PlaneGeometry.md#segmenth)
- [up](PlaneGeometry.md#up)

### Accessors

- [indicesBuffer](PlaneGeometry.md#indicesbuffer)
- [vertexBuffer](PlaneGeometry.md#vertexbuffer)
- [vertexAttributes](PlaneGeometry.md#vertexattributes)
- [vertexAttributeMap](PlaneGeometry.md#vertexattributemap)
- [geometryType](PlaneGeometry.md#geometrytype)
- [bounds](PlaneGeometry.md#bounds)

### Methods

- [addSubGeometry](PlaneGeometry.md#addsubgeometry)
- [generate](PlaneGeometry.md#generate)
- [setIndices](PlaneGeometry.md#setindices)
- [setAttribute](PlaneGeometry.md#setattribute)
- [getAttribute](PlaneGeometry.md#getattribute)
- [hasAttribute](PlaneGeometry.md#hasattribute)
- [genWireframe](PlaneGeometry.md#genwireframe)
- [compute](PlaneGeometry.md#compute)
- [computeNormals](PlaneGeometry.md#computenormals)
- [isPrimitive](PlaneGeometry.md#isprimitive)
- [destroy](PlaneGeometry.md#destroy)

## Constructors

### constructor

• **new PlaneGeometry**(`width`, `height`, `segmentW?`, `segmentH?`, `up?`): [`PlaneGeometry`](PlaneGeometry.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `undefined` | Width of the plane |
| `height` | `number` | `undefined` | Height of the plane |
| `segmentW` | `number` | `1` | Number of width segments of a plane |
| `segmentH` | `number` | `1` | Number of height segments of a plane |
| `up` | [`Vector3`](Vector3.md) | `Vector3.Y_AXIS` | Define the normal vector of a plane |

#### Returns

[`PlaneGeometry`](PlaneGeometry.md)

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/shape/PlaneGeometry.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L41)

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

___

### width

• **width**: `number`

Width of the plane

#### Defined in

[src/shape/PlaneGeometry.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L14)

___

### height

• **height**: `number`

Height of the plane

#### Defined in

[src/shape/PlaneGeometry.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L18)

___

### segmentW

• **segmentW**: `number`

Number of width segments of a plane

#### Defined in

[src/shape/PlaneGeometry.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L22)

___

### segmentH

• **segmentH**: `number`

Number of height segments of a plane

#### Defined in

[src/shape/PlaneGeometry.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L26)

___

### up

• **up**: [`Vector3`](Vector3.md)

Define the normal vector of a plane

#### Defined in

[src/shape/PlaneGeometry.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L30)

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
