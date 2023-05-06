# Class: SphereGeometry

Sphere Geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`SphereGeometry`**


### Properties

- [uuid](SphereGeometry.md#uuid)
- [name](SphereGeometry.md#name)
- [subGeometries](SphereGeometry.md#subgeometries)
- [morphTargetsRelative](SphereGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](SphereGeometry.md#morphtargetdictionary)
- [bounds](SphereGeometry.md#bounds)
- [shape\_vertices](SphereGeometry.md#shape_vertices)
- [shape\_indices](SphereGeometry.md#shape_indices)
- [radius](SphereGeometry.md#radius)
- [widthSegments](SphereGeometry.md#widthsegments)
- [heightSegments](SphereGeometry.md#heightsegments)
- [phiStart](SphereGeometry.md#phistart)
- [phiLength](SphereGeometry.md#philength)
- [thetaStart](SphereGeometry.md#thetastart)
- [thetaLength](SphereGeometry.md#thetalength)

### Accessors

- [indicesBuffer](SphereGeometry.md#indicesbuffer)
- [vertexBuffer](SphereGeometry.md#vertexbuffer)
- [vertexAttributes](SphereGeometry.md#vertexattributes)
- [vertexAttributeMap](SphereGeometry.md#vertexattributemap)
- [geometryType](SphereGeometry.md#geometrytype)

### Methods

- [updateBounds](SphereGeometry.md#updatebounds)
- [addSubGeometry](SphereGeometry.md#addsubgeometry)
- [generate](SphereGeometry.md#generate)
- [setIndices](SphereGeometry.md#setindices)
- [setAttribute](SphereGeometry.md#setattribute)
- [getAttribute](SphereGeometry.md#getattribute)
- [hasAttribute](SphereGeometry.md#hasattribute)
- [genWireframe](SphereGeometry.md#genwireframe)
- [compute](SphereGeometry.md#compute)
- [isPrimitive](SphereGeometry.md#isprimitive)

### Constructors

- [constructor](SphereGeometry.md#constructor)

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

### shape\_vertices

• **shape\_vertices**: `any`[] = `[]`

#### Defined in

[src/shape/SphereGeometry.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L9)

___

### shape\_indices

• **shape\_indices**: `any`[] = `[]`

#### Defined in

[src/shape/SphereGeometry.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L10)

___

### radius

• **radius**: `number`

radius of sphere

#### Defined in

[src/shape/SphereGeometry.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L15)

___

### widthSegments

• **widthSegments**: `number`

Define the number of horizontal segments

#### Defined in

[src/shape/SphereGeometry.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L19)

___

### heightSegments

• **heightSegments**: `number`

Define the number of vertical segments

#### Defined in

[src/shape/SphereGeometry.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L23)

___

### phiStart

• **phiStart**: `number`

The starting point radian of the equatorial line of a sphere

#### Defined in

[src/shape/SphereGeometry.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L27)

___

### phiLength

• **phiLength**: `number`

The arc length of the equatorial line of a sphere

#### Defined in

[src/shape/SphereGeometry.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L31)

___

### thetaStart

• **thetaStart**: `number`

The radian of the starting point of the sphere's meridian

#### Defined in

[src/shape/SphereGeometry.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L35)

___

### thetaLength

• **thetaLength**: `number`

Arc length of sphere meridian

#### Defined in

[src/shape/SphereGeometry.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L39)

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

• **new SphereGeometry**(`radius`, `widthSegments`, `heightSegments`, `phiStart?`, `phiLength?`, `thetaStart?`, `thetaLength?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `any` | radius of sphere |
| `widthSegments` | `any` | Define the number of horizontal segments |
| `heightSegments` | `any` | Define the number of vertical segments |
| `phiStart?` | `any` | The starting point radian of the equatorial line of a sphere |
| `phiLength?` | `any` | The arc length of the equatorial line of a sphere |
| `thetaStart?` | `any` | The radian of the starting point of the sphere's meridian |
| `thetaLength?` | `any` | Arc length of sphere meridian |

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/shape/SphereGeometry.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L52)
