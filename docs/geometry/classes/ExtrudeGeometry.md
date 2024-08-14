# Class: ExtrudeGeometry

## Hierarchy

- `GeometryBase`

  ↳ **`ExtrudeGeometry`**

  ↳↳ [`TextGeometry`](TextGeometry.md)

### Constructors

- [constructor](ExtrudeGeometry.md#constructor)

### Properties

- [shapes](ExtrudeGeometry.md#shapes)
- [options](ExtrudeGeometry.md#options)
- [instanceID](ExtrudeGeometry.md#instanceid)
- [name](ExtrudeGeometry.md#name)
- [subGeometries](ExtrudeGeometry.md#subgeometries)
- [morphTargetsRelative](ExtrudeGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](ExtrudeGeometry.md#morphtargetdictionary)
- [skinNames](ExtrudeGeometry.md#skinnames)
- [bindPose](ExtrudeGeometry.md#bindpose)
- [blendShapeData](ExtrudeGeometry.md#blendshapedata)
- [vertexDim](ExtrudeGeometry.md#vertexdim)
- [vertexCount](ExtrudeGeometry.md#vertexcount)

### Accessors

- [indicesBuffer](ExtrudeGeometry.md#indicesbuffer)
- [vertexBuffer](ExtrudeGeometry.md#vertexbuffer)
- [vertexAttributes](ExtrudeGeometry.md#vertexattributes)
- [vertexAttributeMap](ExtrudeGeometry.md#vertexattributemap)
- [geometryType](ExtrudeGeometry.md#geometrytype)
- [bounds](ExtrudeGeometry.md#bounds)

### Methods

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

• **new ExtrudeGeometry**(`shapes?`, `options?`): [`ExtrudeGeometry`](ExtrudeGeometry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes?` | [`Shape2D`](Shape2D.md)[] |
| `options?` | `any` |

#### Returns

[`ExtrudeGeometry`](ExtrudeGeometry.md)

#### Overrides

GeometryBase.constructor

#### Defined in

[packages/geometry/ExtrudeGeometry/ExtrudeGeometry.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/ExtrudeGeometry.ts#L22)

## Properties

### shapes

• **shapes**: [`Shape2D`](Shape2D.md)[]

#### Defined in

[packages/geometry/ExtrudeGeometry/ExtrudeGeometry.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/ExtrudeGeometry.ts#L17)

___

### options

• **options**: [`ExtrudeGeometryArgs`](../types/ExtrudeGeometryArgs.md)

#### Defined in

[packages/geometry/ExtrudeGeometry/ExtrudeGeometry.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/ExtrudeGeometry.ts#L18)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

GeometryBase.instanceID

#### Defined in

[src/core/geometry/GeometryBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L39)

___

### name

• **name**: `string`

#### Inherited from

GeometryBase.name

#### Defined in

[src/core/geometry/GeometryBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L40)

___

### subGeometries

• **subGeometries**: `SubGeometry`[] = `[]`

#### Inherited from

GeometryBase.subGeometries

#### Defined in

[src/core/geometry/GeometryBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L41)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Inherited from

GeometryBase.morphTargetsRelative

#### Defined in

[src/core/geometry/GeometryBase.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L42)

___

### morphTargetDictionary

• **morphTargetDictionary**: `Object`

#### Index signature

▪ [blenderName: `string`]: `number`

#### Inherited from

GeometryBase.morphTargetDictionary

#### Defined in

[src/core/geometry/GeometryBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L43)

___

### skinNames

• **skinNames**: `string`[]

#### Inherited from

GeometryBase.skinNames

#### Defined in

[src/core/geometry/GeometryBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L44)

___

### bindPose

• **bindPose**: `Matrix4`[]

#### Inherited from

GeometryBase.bindPose

#### Defined in

[src/core/geometry/GeometryBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L45)

___

### blendShapeData

• **blendShapeData**: `BlendShapeData`

#### Inherited from

GeometryBase.blendShapeData

#### Defined in

[src/core/geometry/GeometryBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L46)

___

### vertexDim

• **vertexDim**: `number`

#### Inherited from

GeometryBase.vertexDim

#### Defined in

[src/core/geometry/GeometryBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L47)

___

### vertexCount

• **vertexCount**: `number` = `0`

#### Inherited from

GeometryBase.vertexCount

#### Defined in

[src/core/geometry/GeometryBase.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L48)

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): `GeometryIndicesBuffer`

#### Returns

`GeometryIndicesBuffer`

#### Inherited from

GeometryBase.indicesBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L69)

___

### vertexBuffer

• `get` **vertexBuffer**(): `GeometryVertexBuffer`

#### Returns

`GeometryVertexBuffer`

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

• `get` **vertexAttributeMap**(): `Map`\<`string`, `VertexAttributeData`\>

#### Returns

`Map`\<`string`, `VertexAttributeData`\>

#### Inherited from

GeometryBase.vertexAttributeMap

#### Defined in

[src/core/geometry/GeometryBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L81)

___

### geometryType

• `get` **geometryType**(): `GeometryVertexType`

#### Returns

`GeometryVertexType`

#### Inherited from

GeometryBase.geometryType

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

GeometryBase.addSubGeometry

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

GeometryBase.generate

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

GeometryBase.setIndices

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

GeometryBase.setAttribute

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

GeometryBase.getAttribute

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

GeometryBase.hasAttribute

#### Defined in

[src/core/geometry/GeometryBase.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L194)

___

### genWireframe

▸ **genWireframe**(): `Vector3`[]

#### Returns

`Vector3`[]

#### Inherited from

GeometryBase.genWireframe

#### Defined in

[src/core/geometry/GeometryBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L198)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Inherited from

GeometryBase.compute

#### Defined in

[src/core/geometry/GeometryBase.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L251)

___

### computeNormals

▸ **computeNormals**(): `this`

#### Returns

`this`

#### Inherited from

GeometryBase.computeNormals

#### Defined in

[src/core/geometry/GeometryBase.ts:270](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L270)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

GeometryBase.isPrimitive

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

GeometryBase.destroy

#### Defined in

[src/core/geometry/GeometryBase.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L316)
