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

• **new BoxGeometry**(`width?`, `height?`, `depth?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `1` | {number} box width, default value is 1 |
| `height` | `number` | `1` | {number} box height, default value is 1 |
| `depth` | `number` | `1` | {number} box depth, default value is 1 |

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

▸ **computeNormals**(): [`BoxGeometry`](BoxGeometry.md)

#### Returns

[`BoxGeometry`](BoxGeometry.md)

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
