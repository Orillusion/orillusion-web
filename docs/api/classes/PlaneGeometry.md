# Class: PlaneGeometry

Plane geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`PlaneGeometry`**


### Properties

- [uuid](PlaneGeometry.md#uuid)
- [name](PlaneGeometry.md#name)
- [subGeometries](PlaneGeometry.md#subgeometries)
- [morphTargetsRelative](PlaneGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](PlaneGeometry.md#morphtargetdictionary)
- [bounds](PlaneGeometry.md#bounds)
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

### Methods

- [updateBounds](PlaneGeometry.md#updatebounds)
- [addSubGeometry](PlaneGeometry.md#addsubgeometry)
- [generate](PlaneGeometry.md#generate)
- [setIndices](PlaneGeometry.md#setindices)
- [setAttribute](PlaneGeometry.md#setattribute)
- [getAttribute](PlaneGeometry.md#getattribute)
- [hasAttribute](PlaneGeometry.md#hasattribute)
- [genWireframe](PlaneGeometry.md#genwireframe)
- [compute](PlaneGeometry.md#compute)
- [isPrimitive](PlaneGeometry.md#isprimitive)

### Constructors

- [constructor](PlaneGeometry.md#constructor)

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

• **new PlaneGeometry**(`width`, `height`, `segmentW?`, `segmentH?`, `up?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `undefined` | Width of the plane |
| `height` | `number` | `undefined` | Height of the plane |
| `segmentW` | `number` | `1` | Number of width segments of a plane |
| `segmentH` | `number` | `1` | Number of height segments of a plane |
| `up` | [`Vector3`](Vector3.md) | `Vector3.Y_AXIS` | Define the normal vector of a plane |

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/shape/PlaneGeometry.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L41)
