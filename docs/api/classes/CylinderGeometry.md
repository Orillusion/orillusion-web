# Class: CylinderGeometry

Cylinder geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`CylinderGeometry`**

### Constructors

- [constructor](CylinderGeometry.md#constructor)

### Properties

- [instanceID](CylinderGeometry.md#instanceid)
- [name](CylinderGeometry.md#name)
- [subGeometries](CylinderGeometry.md#subgeometries)
- [morphTargetsRelative](CylinderGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](CylinderGeometry.md#morphtargetdictionary)
- [skinNames](CylinderGeometry.md#skinnames)
- [bindPose](CylinderGeometry.md#bindpose)
- [blendShapeData](CylinderGeometry.md#blendshapedata)
- [vertexDim](CylinderGeometry.md#vertexdim)
- [vertexCount](CylinderGeometry.md#vertexcount)
- [radiusTop](CylinderGeometry.md#radiustop)
- [radiusBottom](CylinderGeometry.md#radiusbottom)
- [height](CylinderGeometry.md#height)
- [radialSegments](CylinderGeometry.md#radialsegments)
- [heightSegments](CylinderGeometry.md#heightsegments)
- [openEnded](CylinderGeometry.md#openended)
- [thetaStart](CylinderGeometry.md#thetastart)
- [thetaLength](CylinderGeometry.md#thetalength)

### Accessors

- [indicesBuffer](CylinderGeometry.md#indicesbuffer)
- [vertexBuffer](CylinderGeometry.md#vertexbuffer)
- [vertexAttributes](CylinderGeometry.md#vertexattributes)
- [vertexAttributeMap](CylinderGeometry.md#vertexattributemap)
- [geometryType](CylinderGeometry.md#geometrytype)
- [bounds](CylinderGeometry.md#bounds)

### Methods

- [addSubGeometry](CylinderGeometry.md#addsubgeometry)
- [generate](CylinderGeometry.md#generate)
- [setIndices](CylinderGeometry.md#setindices)
- [setAttribute](CylinderGeometry.md#setattribute)
- [getAttribute](CylinderGeometry.md#getattribute)
- [hasAttribute](CylinderGeometry.md#hasattribute)
- [genWireframe](CylinderGeometry.md#genwireframe)
- [compute](CylinderGeometry.md#compute)
- [computeNormals](CylinderGeometry.md#computenormals)
- [isPrimitive](CylinderGeometry.md#isprimitive)
- [destroy](CylinderGeometry.md#destroy)

## Constructors

### constructor

• **new CylinderGeometry**(`radiusTop?`, `radiusBottom?`, `height?`, `radialSegments?`, `heightSegments?`, `openEnded?`, `thetaStart?`, `thetaLength?`): [`CylinderGeometry`](CylinderGeometry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `radiusTop` | `number` | `1` |
| `radiusBottom` | `number` | `1` |
| `height` | `number` | `1` |
| `radialSegments` | `number` | `8` |
| `heightSegments` | `number` | `8` |
| `openEnded` | `boolean` | `false` |
| `thetaStart` | `number` | `0` |
| `thetaLength` | `number` | `undefined` |

#### Returns

[`CylinderGeometry`](CylinderGeometry.md)

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/shape/CylinderGeometry.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L57)

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

### radiusTop

• **radiusTop**: `number`

The radius of the top of the cylinder

#### Defined in

[src/shape/CylinderGeometry.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L15)

___

### radiusBottom

• **radiusBottom**: `number`

The radius of the bottom of the cylinder

#### Defined in

[src/shape/CylinderGeometry.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L19)

___

### height

• **height**: `number`

The height of the cylinder

#### Defined in

[src/shape/CylinderGeometry.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L23)

___

### radialSegments

• **radialSegments**: `number`

Number of segments around the side of the cylinder

#### Defined in

[src/shape/CylinderGeometry.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L27)

___

### heightSegments

• **heightSegments**: `number`

The number of segments along the height of the cylindrical side

#### Defined in

[src/shape/CylinderGeometry.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L31)

___

### openEnded

• **openEnded**: `boolean`

Indicate whether the bottom surface of the cone is open or capped. The default value is false, which means that the bottom surface is capped by default.

#### Defined in

[src/shape/CylinderGeometry.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L35)

___

### thetaStart

• **thetaStart**: `number`

Starting angle of the first segment

#### Defined in

[src/shape/CylinderGeometry.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L39)

___

### thetaLength

• **thetaLength**: `number`

The center angle of the circular sector on the bottom of the cylinder, with a default value of 2 * PI, makes it a complete cylinder.

#### Defined in

[src/shape/CylinderGeometry.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L43)

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
