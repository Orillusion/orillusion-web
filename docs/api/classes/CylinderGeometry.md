# Class: CylinderGeometry

Cylinder geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`CylinderGeometry`**


### Properties

- [uuid](CylinderGeometry.md#uuid)
- [name](CylinderGeometry.md#name)
- [subGeometries](CylinderGeometry.md#subgeometries)
- [morphTargetsRelative](CylinderGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](CylinderGeometry.md#morphtargetdictionary)
- [bounds](CylinderGeometry.md#bounds)
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

### Methods

- [updateBounds](CylinderGeometry.md#updatebounds)
- [addSubGeometry](CylinderGeometry.md#addsubgeometry)
- [generate](CylinderGeometry.md#generate)
- [setIndices](CylinderGeometry.md#setindices)
- [setAttribute](CylinderGeometry.md#setattribute)
- [getAttribute](CylinderGeometry.md#getattribute)
- [hasAttribute](CylinderGeometry.md#hasattribute)
- [genWireframe](CylinderGeometry.md#genwireframe)
- [compute](CylinderGeometry.md#compute)
- [isPrimitive](CylinderGeometry.md#isprimitive)

### Constructors

- [constructor](CylinderGeometry.md#constructor)

## Properties

### uuid

• **uuid**: `string`

#### Inherited from

[GeometryBase](GeometryBase.md).[uuid](GeometryBase.md#uuid)

#### Defined in

[src/core/geometry/GeometryBase.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L33)

___

### name

• **name**: `string`

#### Inherited from

[GeometryBase](GeometryBase.md).[name](GeometryBase.md#name)

#### Defined in

[src/core/geometry/GeometryBase.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L34)

___

### subGeometries

• **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

#### Inherited from

[GeometryBase](GeometryBase.md).[subGeometries](GeometryBase.md#subgeometries)

#### Defined in

[src/core/geometry/GeometryBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L35)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[morphTargetsRelative](GeometryBase.md#morphtargetsrelative)

#### Defined in

[src/core/geometry/GeometryBase.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L36)

___

### morphTargetDictionary

• **morphTargetDictionary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `key` | `number` |

#### Inherited from

[GeometryBase](GeometryBase.md).[morphTargetDictionary](GeometryBase.md#morphtargetdictionary)

#### Defined in

[src/core/geometry/GeometryBase.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L37)

___

### bounds

• **bounds**: `BoundingBox`

#### Inherited from

[GeometryBase](GeometryBase.md).[bounds](GeometryBase.md#bounds)

#### Defined in

[src/core/geometry/GeometryBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L38)

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

[src/core/geometry/GeometryBase.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L61)

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Inherited from

GeometryBase.vertexBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L65)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Inherited from

GeometryBase.vertexAttributes

#### Defined in

[src/core/geometry/GeometryBase.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L69)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Returns

`Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Inherited from

GeometryBase.vertexAttributeMap

#### Defined in

[src/core/geometry/GeometryBase.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L73)

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Inherited from

GeometryBase.geometryType

#### Defined in

[src/core/geometry/GeometryBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L77)

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

[src/core/geometry/GeometryBase.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L80)

## Methods

### updateBounds

▸ **updateBounds**(`min`, `max`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | [`Vector3`](Vector3.md) |
| `max` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[updateBounds](GeometryBase.md#updatebounds)

#### Defined in

[src/core/geometry/GeometryBase.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L86)

___

### addSubGeometry

▸ **addSubGeometry**(`...lodLevels`): `void`

add subGeometry form lod level

**`See`**

LodLevel

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lodLevels` | [`LodLevel`](../types/LodLevel.md)[] |

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[addSubGeometry](GeometryBase.md#addsubgeometry)

#### Defined in

[src/core/geometry/GeometryBase.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L94)

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

[src/core/geometry/GeometryBase.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L104)

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

[src/core/geometry/GeometryBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L110)

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

[src/core/geometry/GeometryBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L122)

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

[src/core/geometry/GeometryBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L135)

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

[src/core/geometry/GeometryBase.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L139)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Inherited from

[GeometryBase](GeometryBase.md).[genWireframe](GeometryBase.md#genwireframe)

#### Defined in

[src/core/geometry/GeometryBase.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L143)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[compute](GeometryBase.md#compute)

#### Defined in

[src/core/geometry/GeometryBase.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L167)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[isPrimitive](GeometryBase.md#isprimitive)

#### Defined in

[src/core/geometry/GeometryBase.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L177)

## Constructors

### constructor

• **new CylinderGeometry**(`radiusTop?`, `radiusBottom?`, `height?`, `radialSegments?`, `heightSegments?`, `openEnded?`, `thetaStart?`, `thetaLength?`)

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

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/shape/CylinderGeometry.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/shape/CylinderGeometry.ts#L57)
