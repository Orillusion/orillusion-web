# Class: ExtrudeGeometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`ExtrudeGeometry`**

### Constructors

- [constructor](ExtrudeGeometry.md#constructor)

### Properties

- [vScale](ExtrudeGeometry.md#vscale)
- [uNegate](ExtrudeGeometry.md#unegate)
- [sections](ExtrudeGeometry.md#sections)
- [uuid](ExtrudeGeometry.md#uuid)
- [name](ExtrudeGeometry.md#name)
- [subGeometries](ExtrudeGeometry.md#subgeometries)
- [morphTargetsRelative](ExtrudeGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](ExtrudeGeometry.md#morphtargetdictionary)

### Accessors

- [indicesBuffer](ExtrudeGeometry.md#indicesbuffer)
- [vertexBuffer](ExtrudeGeometry.md#vertexbuffer)
- [vertexAttributes](ExtrudeGeometry.md#vertexattributes)
- [vertexAttributeMap](ExtrudeGeometry.md#vertexattributemap)
- [geometryType](ExtrudeGeometry.md#geometrytype)
- [bounds](ExtrudeGeometry.md#bounds)

### Methods

- [build](ExtrudeGeometry.md#build)
- [addSubGeometry](ExtrudeGeometry.md#addsubgeometry)
- [generate](ExtrudeGeometry.md#generate)
- [setIndices](ExtrudeGeometry.md#setindices)
- [setAttribute](ExtrudeGeometry.md#setattribute)
- [getAttribute](ExtrudeGeometry.md#getattribute)
- [hasAttribute](ExtrudeGeometry.md#hasattribute)
- [genWireframe](ExtrudeGeometry.md#genwireframe)
- [compute](ExtrudeGeometry.md#compute)
- [computeNormals](ExtrudeGeometry.md#computenormals)
- [isPrimitive](ExtrudeGeometry.md#isprimitive)
- [destroy](ExtrudeGeometry.md#destroy)

## Constructors

### constructor

• **new ExtrudeGeometry**()

#### Inherited from

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/core/geometry/GeometryBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L45)

## Properties

### vScale

• **vScale**: `number`

#### Defined in

[src/core/geometry/ExtrudeGeometry.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/ExtrudeGeometry.ts#L21)

___

### uNegate

• **uNegate**: `boolean`

#### Defined in

[src/core/geometry/ExtrudeGeometry.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/ExtrudeGeometry.ts#L22)

___

### sections

• **sections**: `Section`[]

#### Defined in

[src/core/geometry/ExtrudeGeometry.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/ExtrudeGeometry.ts#L23)

___

### uuid

• **uuid**: `string`

#### Inherited from

[GeometryBase](GeometryBase.md).[uuid](GeometryBase.md#uuid)

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

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Inherited from

GeometryBase.indicesBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L56)

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Inherited from

GeometryBase.vertexBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L60)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Inherited from

GeometryBase.vertexAttributes

#### Defined in

[src/core/geometry/GeometryBase.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L64)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Returns

`Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Inherited from

GeometryBase.vertexAttributeMap

#### Defined in

[src/core/geometry/GeometryBase.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L68)

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Inherited from

GeometryBase.geometryType

#### Defined in

[src/core/geometry/GeometryBase.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L72)

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

[src/core/geometry/GeometryBase.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L75)

___

### bounds

• `get` **bounds**(): `BoundingBox`

#### Returns

`BoundingBox`

#### Inherited from

GeometryBase.bounds

#### Defined in

[src/core/geometry/GeometryBase.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L79)

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

[src/core/geometry/GeometryBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L122)

## Methods

### build

▸ **build**(`shape`, `isShapeClosed`, `path`, `vScale?`, `uNegate?`): [`ExtrudeGeometry`](ExtrudeGeometry.md)

for the points of start and end:
Please ensure that you do not actively clone the starting point to the end of the shape array;
closed: true.
      if you want them closed, it'll auto clone start point.
closed: false.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shape` | [`Vector3`](Vector3.md)[] | `undefined` |
| `isShapeClosed` | `boolean` | `undefined` |
| `path` | [`Vector3`](Vector3.md)[] | `undefined` |
| `vScale` | `number` | `1.0` |
| `uNegate` | `boolean` | `true` |

#### Returns

[`ExtrudeGeometry`](ExtrudeGeometry.md)

#### Defined in

[src/core/geometry/ExtrudeGeometry.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/ExtrudeGeometry.ts#L34)

___

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

[src/core/geometry/GeometryBase.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L130)

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

[src/core/geometry/GeometryBase.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L140)

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

[src/core/geometry/GeometryBase.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L146)

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

[src/core/geometry/GeometryBase.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L158)

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

[src/core/geometry/GeometryBase.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L171)

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

[src/core/geometry/GeometryBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L175)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Inherited from

[GeometryBase](GeometryBase.md).[genWireframe](GeometryBase.md#genwireframe)

#### Defined in

[src/core/geometry/GeometryBase.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L179)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[compute](GeometryBase.md#compute)

#### Defined in

[src/core/geometry/GeometryBase.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L203)

___

### computeNormals

▸ **computeNormals**(): [`ExtrudeGeometry`](ExtrudeGeometry.md)

#### Returns

[`ExtrudeGeometry`](ExtrudeGeometry.md)

#### Inherited from

[GeometryBase](GeometryBase.md).[computeNormals](GeometryBase.md#computenormals)

#### Defined in

[src/core/geometry/GeometryBase.ts:222](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L222)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[isPrimitive](GeometryBase.md#isprimitive)

#### Defined in

[src/core/geometry/GeometryBase.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L264)

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

[src/core/geometry/GeometryBase.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L268)
