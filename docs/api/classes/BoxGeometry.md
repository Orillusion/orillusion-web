# Class: BoxGeometry

Box geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`BoxGeometry`**

### Constructors

- [constructor](BoxGeometry.md#constructor)

### Properties

- [instanceID](BoxGeometry.md#instanceid)
- [name](BoxGeometry.md#name)
- [subGeometries](BoxGeometry.md#subgeometries)
- [morphTargetsRelative](BoxGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](BoxGeometry.md#morphtargetdictionary)
- [skinNames](BoxGeometry.md#skinnames)
- [bindPose](BoxGeometry.md#bindpose)
- [blendShapeData](BoxGeometry.md#blendshapedata)
- [vertexDim](BoxGeometry.md#vertexdim)
- [vertexCount](BoxGeometry.md#vertexcount)
- [width](BoxGeometry.md#width)
- [height](BoxGeometry.md#height)
- [depth](BoxGeometry.md#depth)

### Accessors

- [indicesBuffer](BoxGeometry.md#indicesbuffer)
- [vertexBuffer](BoxGeometry.md#vertexbuffer)
- [vertexAttributes](BoxGeometry.md#vertexattributes)
- [vertexAttributeMap](BoxGeometry.md#vertexattributemap)
- [geometryType](BoxGeometry.md#geometrytype)
- [bounds](BoxGeometry.md#bounds)

### Methods

- [addSubGeometry](BoxGeometry.md#addsubgeometry)
- [generate](BoxGeometry.md#generate)
- [setIndices](BoxGeometry.md#setindices)
- [setAttribute](BoxGeometry.md#setattribute)
- [getAttribute](BoxGeometry.md#getattribute)
- [hasAttribute](BoxGeometry.md#hasattribute)
- [genWireframe](BoxGeometry.md#genwireframe)
- [compute](BoxGeometry.md#compute)
- [computeNormals](BoxGeometry.md#computenormals)
- [isPrimitive](BoxGeometry.md#isprimitive)
- [destroy](BoxGeometry.md#destroy)

## Constructors

### constructor

• **new BoxGeometry**(`width?`, `height?`, `depth?`): [`BoxGeometry`](BoxGeometry.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `1` | {number} box width, default value is 1 |
| `height` | `number` | `1` | {number} box height, default value is 1 |
| `depth` | `number` | `1` | {number} box depth, default value is 1 |

#### Returns

[`BoxGeometry`](BoxGeometry.md)

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/shape/BoxGeometry.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/shape/BoxGeometry.ts#L30)

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

### vertexCount

• **vertexCount**: `number` = `0`

#### Inherited from

[GeometryBase](GeometryBase.md).[vertexCount](GeometryBase.md#vertexcount)

#### Defined in

[src/core/geometry/GeometryBase.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L48)

___

### width

• **width**: `number`

box width

#### Defined in

[src/shape/BoxGeometry.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/shape/BoxGeometry.ts#L14)

___

### height

• **height**: `number`

box height

#### Defined in

[src/shape/BoxGeometry.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/shape/BoxGeometry.ts#L18)

___

### depth

• **depth**: `number`

box depth

#### Defined in

[src/shape/BoxGeometry.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/shape/BoxGeometry.ts#L22)

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Inherited from

GeometryBase.indicesBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L69)

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Inherited from

GeometryBase.vertexBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L73)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Inherited from

GeometryBase.vertexAttributes

#### Defined in

[src/core/geometry/GeometryBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L77)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`\<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Returns

`Map`\<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Inherited from

GeometryBase.vertexAttributeMap

#### Defined in

[src/core/geometry/GeometryBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L81)

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Inherited from

GeometryBase.geometryType

#### Defined in

[src/core/geometry/GeometryBase.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L85)

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

[src/core/geometry/GeometryBase.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L88)

___

### bounds

• `get` **bounds**(): `BoundingBox`

#### Returns

`BoundingBox`

#### Inherited from

GeometryBase.bounds

#### Defined in

[src/core/geometry/GeometryBase.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L92)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[addSubGeometry](GeometryBase.md#addsubgeometry)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[generate](GeometryBase.md#generate)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[setIndices](GeometryBase.md#setindices)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[setAttribute](GeometryBase.md#setattribute)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[getAttribute](GeometryBase.md#getattribute)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[hasAttribute](GeometryBase.md#hasattribute)

#### Defined in

[src/core/geometry/GeometryBase.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L194)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Inherited from

[GeometryBase](GeometryBase.md).[genWireframe](GeometryBase.md#genwireframe)

#### Defined in

[src/core/geometry/GeometryBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L198)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[compute](GeometryBase.md#compute)

#### Defined in

[src/core/geometry/GeometryBase.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L251)

___

### computeNormals

▸ **computeNormals**(): `this`

#### Returns

`this`

#### Inherited from

[GeometryBase](GeometryBase.md).[computeNormals](GeometryBase.md#computenormals)

#### Defined in

[src/core/geometry/GeometryBase.ts:270](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L270)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[isPrimitive](GeometryBase.md#isprimitive)

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

#### Inherited from

[GeometryBase](GeometryBase.md).[destroy](GeometryBase.md#destroy)

#### Defined in

[src/core/geometry/GeometryBase.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L316)
