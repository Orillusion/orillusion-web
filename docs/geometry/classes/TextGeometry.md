# Class: TextGeometry

## Hierarchy

- [`ExtrudeGeometry`](ExtrudeGeometry.md)

  ↳ **`TextGeometry`**

### Constructors

- [constructor](TextGeometry.md#constructor)

### Properties

- [shapes](TextGeometry.md#shapes)
- [options](TextGeometry.md#options)
- [instanceID](TextGeometry.md#instanceid)
- [name](TextGeometry.md#name)
- [subGeometries](TextGeometry.md#subgeometries)
- [morphTargetsRelative](TextGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](TextGeometry.md#morphtargetdictionary)
- [skinNames](TextGeometry.md#skinnames)
- [bindPose](TextGeometry.md#bindpose)
- [blendShapeData](TextGeometry.md#blendshapedata)
- [vertexDim](TextGeometry.md#vertexdim)
- [vertexCount](TextGeometry.md#vertexcount)

### Accessors

- [font](TextGeometry.md#font)
- [text](TextGeometry.md#text)
- [fontSize](TextGeometry.md#fontsize)
- [indicesBuffer](TextGeometry.md#indicesbuffer)
- [vertexBuffer](TextGeometry.md#vertexbuffer)
- [vertexAttributes](TextGeometry.md#vertexattributes)
- [vertexAttributeMap](TextGeometry.md#vertexattributemap)
- [geometryType](TextGeometry.md#geometrytype)
- [bounds](TextGeometry.md#bounds)

### Methods

- [addSubGeometry](TextGeometry.md#addsubgeometry)
- [generate](TextGeometry.md#generate)
- [setIndices](TextGeometry.md#setindices)
- [setAttribute](TextGeometry.md#setattribute)
- [getAttribute](TextGeometry.md#getattribute)
- [hasAttribute](TextGeometry.md#hasattribute)
- [genWireframe](TextGeometry.md#genwireframe)
- [compute](TextGeometry.md#compute)
- [computeNormals](TextGeometry.md#computenormals)
- [isPrimitive](TextGeometry.md#isprimitive)
- [destroy](TextGeometry.md#destroy)

## Constructors

### constructor

• **new TextGeometry**(`text`, `options`): [`TextGeometry`](TextGeometry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `options` | [`TextGeometryArgs`](../types/TextGeometryArgs.md) |

#### Returns

[`TextGeometry`](TextGeometry.md)

#### Overrides

[ExtrudeGeometry](ExtrudeGeometry.md).[constructor](ExtrudeGeometry.md#constructor)

#### Defined in

[packages/geometry/text/TextGeometry.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/text/TextGeometry.ts#L14)

## Properties

### shapes

• **shapes**: [`Shape2D`](Shape2D.md)[]

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[shapes](ExtrudeGeometry.md#shapes)

#### Defined in

[packages/geometry/ExtrudeGeometry/ExtrudeGeometry.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/ExtrudeGeometry.ts#L17)

___

### options

• **options**: [`TextGeometryArgs`](../types/TextGeometryArgs.md)

#### Overrides

[ExtrudeGeometry](ExtrudeGeometry.md).[options](ExtrudeGeometry.md#options)

#### Defined in

[packages/geometry/text/TextGeometry.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/text/TextGeometry.ts#L13)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[instanceID](ExtrudeGeometry.md#instanceid)

#### Defined in

[src/core/geometry/GeometryBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L39)

___

### name

• **name**: `string`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[name](ExtrudeGeometry.md#name)

#### Defined in

[src/core/geometry/GeometryBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L40)

___

### subGeometries

• **subGeometries**: `SubGeometry`[] = `[]`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[subGeometries](ExtrudeGeometry.md#subgeometries)

#### Defined in

[src/core/geometry/GeometryBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L41)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[morphTargetsRelative](ExtrudeGeometry.md#morphtargetsrelative)

#### Defined in

[src/core/geometry/GeometryBase.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L42)

___

### morphTargetDictionary

• **morphTargetDictionary**: `Object`

#### Index signature

▪ [blenderName: `string`]: `number`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[morphTargetDictionary](ExtrudeGeometry.md#morphtargetdictionary)

#### Defined in

[src/core/geometry/GeometryBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L43)

___

### skinNames

• **skinNames**: `string`[]

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[skinNames](ExtrudeGeometry.md#skinnames)

#### Defined in

[src/core/geometry/GeometryBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L44)

___

### bindPose

• **bindPose**: `Matrix4`[]

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[bindPose](ExtrudeGeometry.md#bindpose)

#### Defined in

[src/core/geometry/GeometryBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L45)

___

### blendShapeData

• **blendShapeData**: `BlendShapeData`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[blendShapeData](ExtrudeGeometry.md#blendshapedata)

#### Defined in

[src/core/geometry/GeometryBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L46)

___

### vertexDim

• **vertexDim**: `number`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[vertexDim](ExtrudeGeometry.md#vertexdim)

#### Defined in

[src/core/geometry/GeometryBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L47)

___

### vertexCount

• **vertexCount**: `number` = `0`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[vertexCount](ExtrudeGeometry.md#vertexcount)

#### Defined in

[src/core/geometry/GeometryBase.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L48)

## Accessors

### font

• `get` **font**(): `Font`

#### Returns

`Font`

#### Defined in

[packages/geometry/text/TextGeometry.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/text/TextGeometry.ts#L20)

___

### text

• `get` **text**(): `string`

#### Returns

`string`

#### Defined in

[packages/geometry/text/TextGeometry.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/text/TextGeometry.ts#L24)

• `set` **text**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`void`

#### Defined in

[packages/geometry/text/TextGeometry.ts:36](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/text/TextGeometry.ts#L36)

___

### fontSize

• `get` **fontSize**(): `number`

#### Returns

`number`

#### Defined in

[packages/geometry/text/TextGeometry.ts:28](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/text/TextGeometry.ts#L28)

• `set` **fontSize**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/text/TextGeometry.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/text/TextGeometry.ts#L32)

___

### indicesBuffer

• `get` **indicesBuffer**(): `GeometryIndicesBuffer`

#### Returns

`GeometryIndicesBuffer`

#### Inherited from

ExtrudeGeometry.indicesBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L69)

___

### vertexBuffer

• `get` **vertexBuffer**(): `GeometryVertexBuffer`

#### Returns

`GeometryVertexBuffer`

#### Inherited from

ExtrudeGeometry.vertexBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L73)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Inherited from

ExtrudeGeometry.vertexAttributes

#### Defined in

[src/core/geometry/GeometryBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L77)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`\<`string`, `VertexAttributeData`\>

#### Returns

`Map`\<`string`, `VertexAttributeData`\>

#### Inherited from

ExtrudeGeometry.vertexAttributeMap

#### Defined in

[src/core/geometry/GeometryBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L81)

___

### geometryType

• `get` **geometryType**(): `GeometryVertexType`

#### Returns

`GeometryVertexType`

#### Inherited from

ExtrudeGeometry.geometryType

#### Defined in

[src/core/geometry/GeometryBase.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L85)

• `set` **geometryType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GeometryVertexType` |

#### Returns

`void`

#### Inherited from

ExtrudeGeometry.geometryType

#### Defined in

[src/core/geometry/GeometryBase.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L88)

___

### bounds

• `get` **bounds**(): `BoundingBox`

#### Returns

`BoundingBox`

#### Inherited from

ExtrudeGeometry.bounds

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

ExtrudeGeometry.bounds

#### Defined in

[src/core/geometry/GeometryBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L135)

## Methods

### addSubGeometry

▸ **addSubGeometry**(`...lodLevels`): `SubGeometry`

add subGeometry from lod level

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lodLevels` | `LODDescriptor`[] |

#### Returns

`SubGeometry`

**`See`**

LODDescriptor

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[addSubGeometry](ExtrudeGeometry.md#addsubgeometry)

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

[ExtrudeGeometry](ExtrudeGeometry.md).[generate](ExtrudeGeometry.md#generate)

#### Defined in

[src/core/geometry/GeometryBase.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L155)

___

### setIndices

▸ **setIndices**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBufferData` |

#### Returns

`void`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[setIndices](ExtrudeGeometry.md#setindices)

#### Defined in

[src/core/geometry/GeometryBase.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L165)

___

### setAttribute

▸ **setAttribute**(`attribute`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |
| `data` | `ArrayBufferData` |

#### Returns

`void`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[setAttribute](ExtrudeGeometry.md#setattribute)

#### Defined in

[src/core/geometry/GeometryBase.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L177)

___

### getAttribute

▸ **getAttribute**(`attribute`): `VertexAttributeData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |

#### Returns

`VertexAttributeData`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[getAttribute](ExtrudeGeometry.md#getattribute)

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

[ExtrudeGeometry](ExtrudeGeometry.md).[hasAttribute](ExtrudeGeometry.md#hasattribute)

#### Defined in

[src/core/geometry/GeometryBase.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L194)

___

### genWireframe

▸ **genWireframe**(): `Vector3`[]

#### Returns

`Vector3`[]

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[genWireframe](ExtrudeGeometry.md#genwireframe)

#### Defined in

[src/core/geometry/GeometryBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L198)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[compute](ExtrudeGeometry.md#compute)

#### Defined in

[src/core/geometry/GeometryBase.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L251)

___

### computeNormals

▸ **computeNormals**(): `this`

#### Returns

`this`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[computeNormals](ExtrudeGeometry.md#computenormals)

#### Defined in

[src/core/geometry/GeometryBase.ts:270](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L270)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ExtrudeGeometry](ExtrudeGeometry.md).[isPrimitive](ExtrudeGeometry.md#isprimitive)

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

[ExtrudeGeometry](ExtrudeGeometry.md).[destroy](ExtrudeGeometry.md#destroy)

#### Defined in

[src/core/geometry/GeometryBase.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L316)
