# Class: SphereGeometry

Sphere Geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`SphereGeometry`**

### Constructors

- [constructor](SphereGeometry.md#constructor)

### Properties

- [instanceID](SphereGeometry.md#instanceid)
- [name](SphereGeometry.md#name)
- [subGeometries](SphereGeometry.md#subgeometries)
- [morphTargetsRelative](SphereGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](SphereGeometry.md#morphtargetdictionary)
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
- [bounds](SphereGeometry.md#bounds)

### Methods

- [addSubGeometry](SphereGeometry.md#addsubgeometry)
- [generate](SphereGeometry.md#generate)
- [setIndices](SphereGeometry.md#setindices)
- [setAttribute](SphereGeometry.md#setattribute)
- [getAttribute](SphereGeometry.md#getattribute)
- [hasAttribute](SphereGeometry.md#hasattribute)
- [genWireframe](SphereGeometry.md#genwireframe)
- [compute](SphereGeometry.md#compute)
- [computeNormals](SphereGeometry.md#computenormals)
- [isPrimitive](SphereGeometry.md#isprimitive)
- [destroy](SphereGeometry.md#destroy)

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

[src/shape/SphereGeometry.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L53)

## Properties

### instanceID

• **instanceID**: `string`

#### Inherited from

[GeometryBase](GeometryBase.md).[instanceID](GeometryBase.md#instanceid)

#### Defined in

[src/core/geometry/GeometryBase.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L34)

___

### name

• **name**: `string`

#### Inherited from

[GeometryBase](GeometryBase.md).[name](GeometryBase.md#name)

#### Defined in

[src/core/geometry/GeometryBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L35)

___

### subGeometries

• **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

#### Inherited from

[GeometryBase](GeometryBase.md).[subGeometries](GeometryBase.md#subgeometries)

#### Defined in

[src/core/geometry/GeometryBase.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L36)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[morphTargetsRelative](GeometryBase.md#morphtargetsrelative)

#### Defined in

[src/core/geometry/GeometryBase.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L37)

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

[src/core/geometry/GeometryBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L38)

___

### shape\_vertices

• **shape\_vertices**: `any`[] = `[]`

#### Defined in

[src/shape/SphereGeometry.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L10)

___

### shape\_indices

• **shape\_indices**: `any`[] = `[]`

#### Defined in

[src/shape/SphereGeometry.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L11)

___

### radius

• **radius**: `number`

radius of sphere

#### Defined in

[src/shape/SphereGeometry.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L16)

___

### widthSegments

• **widthSegments**: `number`

Define the number of horizontal segments

#### Defined in

[src/shape/SphereGeometry.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L20)

___

### heightSegments

• **heightSegments**: `number`

Define the number of vertical segments

#### Defined in

[src/shape/SphereGeometry.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L24)

___

### phiStart

• **phiStart**: `number`

The starting point radian of the equatorial line of a sphere

#### Defined in

[src/shape/SphereGeometry.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L28)

___

### phiLength

• **phiLength**: `number`

The arc length of the equatorial line of a sphere

#### Defined in

[src/shape/SphereGeometry.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L32)

___

### thetaStart

• **thetaStart**: `number`

The radian of the starting point of the sphere's meridian

#### Defined in

[src/shape/SphereGeometry.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L36)

___

### thetaLength

• **thetaLength**: `number`

Arc length of sphere meridian

#### Defined in

[src/shape/SphereGeometry.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/shape/SphereGeometry.ts#L40)

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Inherited from

GeometryBase.indicesBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L58)

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Inherited from

GeometryBase.vertexBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L62)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Inherited from

GeometryBase.vertexAttributes

#### Defined in

[src/core/geometry/GeometryBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L66)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Returns

`Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Inherited from

GeometryBase.vertexAttributeMap

#### Defined in

[src/core/geometry/GeometryBase.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L70)

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Inherited from

GeometryBase.geometryType

#### Defined in

[src/core/geometry/GeometryBase.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L74)

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

[src/core/geometry/GeometryBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L77)

___

### bounds

• `get` **bounds**(): `BoundingBox`

#### Returns

`BoundingBox`

#### Inherited from

GeometryBase.bounds

#### Defined in

[src/core/geometry/GeometryBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L81)

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

[src/core/geometry/GeometryBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L124)

## Methods

### addSubGeometry

▸ **addSubGeometry**(`...lodLevels`): `void`

add subGeometry from lod level

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

[src/core/geometry/GeometryBase.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L132)

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

[src/core/geometry/GeometryBase.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L142)

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

[src/core/geometry/GeometryBase.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L151)

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

[src/core/geometry/GeometryBase.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L163)

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

[src/core/geometry/GeometryBase.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L176)

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

[src/core/geometry/GeometryBase.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L180)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Inherited from

[GeometryBase](GeometryBase.md).[genWireframe](GeometryBase.md#genwireframe)

#### Defined in

[src/core/geometry/GeometryBase.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L184)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[compute](GeometryBase.md#compute)

#### Defined in

[src/core/geometry/GeometryBase.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L208)

___

### computeNormals

▸ **computeNormals**(): [`SphereGeometry`](SphereGeometry.md)

#### Returns

[`SphereGeometry`](SphereGeometry.md)

#### Inherited from

[GeometryBase](GeometryBase.md).[computeNormals](GeometryBase.md#computenormals)

#### Defined in

[src/core/geometry/GeometryBase.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L227)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[isPrimitive](GeometryBase.md#isprimitive)

#### Defined in

[src/core/geometry/GeometryBase.ts:269](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L269)

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

[src/core/geometry/GeometryBase.ts:273](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L273)
