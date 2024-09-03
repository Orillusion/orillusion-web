# Class: TerrainGeometry

## Hierarchy

- `PlaneGeometry`

  ↳ **`TerrainGeometry`**

### Constructors

- [constructor](TerrainGeometry.md#constructor)

### Properties

- [instanceID](TerrainGeometry.md#instanceid)
- [name](TerrainGeometry.md#name)
- [subGeometries](TerrainGeometry.md#subgeometries)
- [morphTargetsRelative](TerrainGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](TerrainGeometry.md#morphtargetdictionary)
- [skinNames](TerrainGeometry.md#skinnames)
- [bindPose](TerrainGeometry.md#bindpose)
- [blendShapeData](TerrainGeometry.md#blendshapedata)
- [vertexDim](TerrainGeometry.md#vertexdim)
- [vertexCount](TerrainGeometry.md#vertexcount)
- [width](TerrainGeometry.md#width)
- [height](TerrainGeometry.md#height)
- [segmentW](TerrainGeometry.md#segmentw)
- [segmentH](TerrainGeometry.md#segmenth)
- [up](TerrainGeometry.md#up)

### Accessors

- [heightData](TerrainGeometry.md#heightdata)
- [greenData](TerrainGeometry.md#greendata)
- [indicesBuffer](TerrainGeometry.md#indicesbuffer)
- [vertexBuffer](TerrainGeometry.md#vertexbuffer)
- [vertexAttributes](TerrainGeometry.md#vertexattributes)
- [vertexAttributeMap](TerrainGeometry.md#vertexattributemap)
- [geometryType](TerrainGeometry.md#geometrytype)
- [bounds](TerrainGeometry.md#bounds)

### Methods

- [setHeight](TerrainGeometry.md#setheight)
- [addSubGeometry](TerrainGeometry.md#addsubgeometry)
- [generate](TerrainGeometry.md#generate)
- [setIndices](TerrainGeometry.md#setindices)
- [setAttribute](TerrainGeometry.md#setattribute)
- [getAttribute](TerrainGeometry.md#getattribute)
- [hasAttribute](TerrainGeometry.md#hasattribute)
- [genWireframe](TerrainGeometry.md#genwireframe)
- [compute](TerrainGeometry.md#compute)
- [computeNormals](TerrainGeometry.md#computenormals)
- [isPrimitive](TerrainGeometry.md#isprimitive)
- [destroy](TerrainGeometry.md#destroy)

## Constructors

### constructor

• **new TerrainGeometry**(`width`, `height`, `segmentW?`, `segmentH?`): [`TerrainGeometry`](TerrainGeometry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `undefined` |
| `height` | `number` | `undefined` |
| `segmentW` | `number` | `199` |
| `segmentH` | `number` | `199` |

#### Returns

[`TerrainGeometry`](TerrainGeometry.md)

#### Overrides

PlaneGeometry.constructor

#### Defined in

[packages/geometry/terrain/TerrainGeometry.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/terrain/TerrainGeometry.ts#L9)

## Properties

### instanceID

• **instanceID**: `string`

#### Inherited from

PlaneGeometry.instanceID

#### Defined in

[src/core/geometry/GeometryBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L39)

___

### name

• **name**: `string`

#### Inherited from

PlaneGeometry.name

#### Defined in

[src/core/geometry/GeometryBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L40)

___

### subGeometries

• **subGeometries**: `SubGeometry`[] = `[]`

#### Inherited from

PlaneGeometry.subGeometries

#### Defined in

[src/core/geometry/GeometryBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L41)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Inherited from

PlaneGeometry.morphTargetsRelative

#### Defined in

[src/core/geometry/GeometryBase.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L42)

___

### morphTargetDictionary

• **morphTargetDictionary**: `Object`

#### Index signature

▪ [blenderName: `string`]: `number`

#### Inherited from

PlaneGeometry.morphTargetDictionary

#### Defined in

[src/core/geometry/GeometryBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L43)

___

### skinNames

• **skinNames**: `string`[]

#### Inherited from

PlaneGeometry.skinNames

#### Defined in

[src/core/geometry/GeometryBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L44)

___

### bindPose

• **bindPose**: `Matrix4`[]

#### Inherited from

PlaneGeometry.bindPose

#### Defined in

[src/core/geometry/GeometryBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L45)

___

### blendShapeData

• **blendShapeData**: `BlendShapeData`

#### Inherited from

PlaneGeometry.blendShapeData

#### Defined in

[src/core/geometry/GeometryBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L46)

___

### vertexDim

• **vertexDim**: `number`

#### Inherited from

PlaneGeometry.vertexDim

#### Defined in

[src/core/geometry/GeometryBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L47)

___

### vertexCount

• **vertexCount**: `number` = `0`

#### Inherited from

PlaneGeometry.vertexCount

#### Defined in

[src/core/geometry/GeometryBase.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L48)

___

### width

• **width**: `number`

Width of the plane

#### Inherited from

PlaneGeometry.width

#### Defined in

[src/shape/PlaneGeometry.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L14)

___

### height

• **height**: `number`

Height of the plane

#### Inherited from

PlaneGeometry.height

#### Defined in

[src/shape/PlaneGeometry.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L18)

___

### segmentW

• **segmentW**: `number`

Number of width segments of a plane

#### Inherited from

PlaneGeometry.segmentW

#### Defined in

[src/shape/PlaneGeometry.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L22)

___

### segmentH

• **segmentH**: `number`

Number of height segments of a plane

#### Inherited from

PlaneGeometry.segmentH

#### Defined in

[src/shape/PlaneGeometry.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L26)

___

### up

• **up**: `Vector3`

Define the normal vector of a plane

#### Inherited from

PlaneGeometry.up

#### Defined in

[src/shape/PlaneGeometry.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L30)

## Accessors

### heightData

• `get` **heightData**(): `number`[][]

#### Returns

`number`[][]

#### Defined in

[packages/geometry/terrain/TerrainGeometry.ts:81](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/terrain/TerrainGeometry.ts#L81)

___

### greenData

• `get` **greenData**(): `Vector3`[]

#### Returns

`Vector3`[]

#### Defined in

[packages/geometry/terrain/TerrainGeometry.ts:85](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/terrain/TerrainGeometry.ts#L85)

___

### indicesBuffer

• `get` **indicesBuffer**(): `GeometryIndicesBuffer`

#### Returns

`GeometryIndicesBuffer`

#### Inherited from

PlaneGeometry.indicesBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L69)

___

### vertexBuffer

• `get` **vertexBuffer**(): `GeometryVertexBuffer`

#### Returns

`GeometryVertexBuffer`

#### Inherited from

PlaneGeometry.vertexBuffer

#### Defined in

[src/core/geometry/GeometryBase.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L73)

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Inherited from

PlaneGeometry.vertexAttributes

#### Defined in

[src/core/geometry/GeometryBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L77)

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`\<`string`, `VertexAttributeData`\>

#### Returns

`Map`\<`string`, `VertexAttributeData`\>

#### Inherited from

PlaneGeometry.vertexAttributeMap

#### Defined in

[src/core/geometry/GeometryBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L81)

___

### geometryType

• `get` **geometryType**(): `GeometryVertexType`

#### Returns

`GeometryVertexType`

#### Inherited from

PlaneGeometry.geometryType

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

PlaneGeometry.geometryType

#### Defined in

[src/core/geometry/GeometryBase.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L88)

___

### bounds

• `get` **bounds**(): `BoundingBox`

#### Returns

`BoundingBox`

#### Inherited from

PlaneGeometry.bounds

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

PlaneGeometry.bounds

#### Defined in

[src/core/geometry/GeometryBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L135)

## Methods

### setHeight

▸ **setHeight**(`texture`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `BitmapTexture2D` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/terrain/TerrainGeometry.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/terrain/TerrainGeometry.ts#L13)

___

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

PlaneGeometry.addSubGeometry

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

PlaneGeometry.generate

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

PlaneGeometry.setIndices

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

PlaneGeometry.setAttribute

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

PlaneGeometry.getAttribute

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

PlaneGeometry.hasAttribute

#### Defined in

[src/core/geometry/GeometryBase.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L194)

___

### genWireframe

▸ **genWireframe**(): `Vector3`[]

#### Returns

`Vector3`[]

#### Inherited from

PlaneGeometry.genWireframe

#### Defined in

[src/core/geometry/GeometryBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L198)

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Inherited from

PlaneGeometry.compute

#### Defined in

[src/core/geometry/GeometryBase.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L251)

___

### computeNormals

▸ **computeNormals**(): `this`

#### Returns

`this`

#### Inherited from

PlaneGeometry.computeNormals

#### Defined in

[src/core/geometry/GeometryBase.ts:270](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L270)

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PlaneGeometry.isPrimitive

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

PlaneGeometry.destroy

#### Defined in

[src/core/geometry/GeometryBase.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L316)
