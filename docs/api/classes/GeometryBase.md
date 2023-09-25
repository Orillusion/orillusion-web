# Class: GeometryBase

## Hierarchy

- **`GeometryBase`**

  ↳ [`GUIGeometry`](GUIGeometry.md)

  ↳ [`ExtrudeGeometry`](ExtrudeGeometry.md)

  ↳ [`BoxGeometry`](BoxGeometry.md)

  ↳ [`CylinderGeometry`](CylinderGeometry.md)

  ↳ [`PlaneGeometry`](PlaneGeometry.md)

  ↳ [`SphereGeometry`](SphereGeometry.md)

  ↳ [`TorusGeometry`](TorusGeometry.md)

### Constructors

- [constructor](GeometryBase.md#constructor)

### Properties

- [instanceID](GeometryBase.md#instanceid)
- [name](GeometryBase.md#name)
- [subGeometries](GeometryBase.md#subgeometries)
- [morphTargetsRelative](GeometryBase.md#morphtargetsrelative)
- [morphTargetDictionary](GeometryBase.md#morphtargetdictionary)

### Accessors

- [indicesBuffer](GeometryBase.md#indicesbuffer)
- [vertexBuffer](GeometryBase.md#vertexbuffer)
- [vertexAttributes](GeometryBase.md#vertexattributes)
- [vertexAttributeMap](GeometryBase.md#vertexattributemap)
- [geometryType](GeometryBase.md#geometrytype)
- [bounds](GeometryBase.md#bounds)

### Methods

- [addSubGeometry](GeometryBase.md#addsubgeometry)
- [generate](GeometryBase.md#generate)
- [setIndices](GeometryBase.md#setindices)
- [setAttribute](GeometryBase.md#setattribute)
- [getAttribute](GeometryBase.md#getattribute)
- [hasAttribute](GeometryBase.md#hasattribute)
- [genWireframe](GeometryBase.md#genwireframe)
- [compute](GeometryBase.md#compute)
- [computeNormals](GeometryBase.md#computenormals)
- [isPrimitive](GeometryBase.md#isprimitive)
- [destroy](GeometryBase.md#destroy)

## Constructors

### constructor

• **new GeometryBase**()

#### Defined in

[src/core/geometry/GeometryBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L47)

## Properties

### instanceID

• **instanceID**: `string`

#### Defined in

[src/core/geometry/GeometryBase.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L34)

___

### name

• **name**: `string`

#### Defined in

[src/core/geometry/GeometryBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L35)

___

### subGeometries

• **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

#### Defined in

[src/core/geometry/GeometryBase.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L36)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

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

#### Defined in

[src/core/geometry/GeometryBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L38)

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L58)

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L62)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/core/geometry/GeometryBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L66)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Returns

`Map`<`string`, [`VertexAttributeData`](../types/VertexAttributeData.md)\>

#### Defined in

[src/core/geometry/GeometryBase.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L70)

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L74)

• `set` **geometryType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryVertexType`](../enums/GeometryVertexType.md) |

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L77)

___

### bounds

• `get` **bounds**(): `BoundingBox`

#### Returns

`BoundingBox`

#### Defined in

[src/core/geometry/GeometryBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L81)

• `set` **bounds**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BoundingBox` |

#### Returns

`void`

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

#### Defined in

[src/core/geometry/GeometryBase.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L180)

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

[src/core/geometry/GeometryBase.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L184)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

[src/core/geometry/GeometryBase.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L208)

___

### computeNormals

▸ **computeNormals**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Defined in

[src/core/geometry/GeometryBase.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L227)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

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

#### Defined in

[src/core/geometry/GeometryBase.ts:273](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L273)
