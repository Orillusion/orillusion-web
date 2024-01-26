# Class: GUIGeometry

composite geometry of gui, holding and updating attribute data

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`GUIGeometry`**

### Constructors

- [constructor](GUIGeometry.md#constructor)

### Properties

- [maxQuadCount](GUIGeometry.md#maxquadcount)
- [instanceID](GUIGeometry.md#instanceid)
- [name](GUIGeometry.md#name)
- [subGeometries](GUIGeometry.md#subgeometries)
- [morphTargetsRelative](GUIGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](GUIGeometry.md#morphtargetdictionary)
- [skinNames](GUIGeometry.md#skinnames)
- [bindPose](GUIGeometry.md#bindpose)
- [blendShapeData](GUIGeometry.md#blendshapedata)
- [vertexDim](GUIGeometry.md#vertexdim)

### Accessors

- [indicesBuffer](GUIGeometry.md#indicesbuffer)
- [vertexBuffer](GUIGeometry.md#vertexbuffer)
- [vertexAttributes](GUIGeometry.md#vertexattributes)
- [vertexAttributeMap](GUIGeometry.md#vertexattributemap)
- [geometryType](GUIGeometry.md#geometrytype)
- [bounds](GUIGeometry.md#bounds)

### Methods

- [updateSubGeometry](GUIGeometry.md#updatesubgeometry)
- [resetSubGeometries](GUIGeometry.md#resetsubgeometries)
- [updateBounds](GUIGeometry.md#updatebounds)
- [getPositionBuffer](GUIGeometry.md#getpositionbuffer)
- [getSpriteBuffer](GUIGeometry.md#getspritebuffer)
- [getColorBuffer](GUIGeometry.md#getcolorbuffer)
- [create](GUIGeometry.md#create)
- [fillQuad](GUIGeometry.md#fillquad)
- [addSubGeometry](GUIGeometry.md#addsubgeometry)
- [generate](GUIGeometry.md#generate)
- [setIndices](GUIGeometry.md#setindices)
- [setAttribute](GUIGeometry.md#setattribute)
- [getAttribute](GUIGeometry.md#getattribute)
- [hasAttribute](GUIGeometry.md#hasattribute)
- [genWireframe](GUIGeometry.md#genwireframe)
- [compute](GUIGeometry.md#compute)
- [computeNormals](GUIGeometry.md#computenormals)
- [isPrimitive](GUIGeometry.md#isprimitive)
- [destroy](GUIGeometry.md#destroy)

## Constructors

### constructor

• **new GUIGeometry**(`max`): [`GUIGeometry`](GUIGeometry.md)

constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `max` | `number` | max quad of a geometry |

#### Returns

[`GUIGeometry`](GUIGeometry.md)

GUIGeometry

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L45)

## Properties

### maxQuadCount

• `Readonly` **maxQuadCount**: `number`

#### Defined in

[src/components/gui/core/GUIGeometry.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L38)

___

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

### updateSubGeometry

▸ **updateSubGeometry**(`index`, `start`, `count`): [`SubGeometry`](SubGeometry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `start` | `number` |
| `count` | `number` |

#### Returns

[`SubGeometry`](SubGeometry.md)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L50)

___

### resetSubGeometries

▸ **resetSubGeometries**(): `void`

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIGeometry.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L71)

___

### updateBounds

▸ **updateBounds**(`min?`, `max?`): `this`

the bounds will be set to infinity

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | [`Vector3`](Vector3.md) |
| `max?` | [`Vector3`](Vector3.md) |

#### Returns

`this`

GUIGeometry

#### Defined in

[src/components/gui/core/GUIGeometry.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L84)

___

### getPositionBuffer

▸ **getPositionBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L92)

___

### getSpriteBuffer

▸ **getSpriteBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L100)

___

### getColorBuffer

▸ **getColorBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L108)

___

### create

▸ **create**(): `this`

#### Returns

`this`

#### Defined in

[src/components/gui/core/GUIGeometry.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L116)

___

### fillQuad

▸ **fillQuad**(`quad`, `transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [`GUIQuad`](GUIQuad.md) |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIGeometry.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L170)

___

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
