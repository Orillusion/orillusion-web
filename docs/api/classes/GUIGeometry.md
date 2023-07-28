# Class: GUIGeometry

composite geometry of gui, holding and updating attribute data

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`GUIGeometry`**

### Constructors

- [constructor](GUIGeometry.md#constructor)

### Properties

- [maxQuadCount](GUIGeometry.md#maxquadcount)
- [instanceID](GUIGeometry.md#instanceid)
- [name](GUIGeometry.md#name)
- [subGeometries](GUIGeometry.md#subgeometries)
- [morphTargetsRelative](GUIGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](GUIGeometry.md#morphtargetdictionary)

### Accessors

- [vPositionBuffer](GUIGeometry.md#vpositionbuffer)
- [vSpriteBuffer](GUIGeometry.md#vspritebuffer)
- [vColorBuffer](GUIGeometry.md#vcolorbuffer)
- [indicesBuffer](GUIGeometry.md#indicesbuffer)
- [vertexBuffer](GUIGeometry.md#vertexbuffer)
- [vertexAttributes](GUIGeometry.md#vertexattributes)
- [vertexAttributeMap](GUIGeometry.md#vertexattributemap)
- [geometryType](GUIGeometry.md#geometrytype)
- [bounds](GUIGeometry.md#bounds)

### Methods

- [updateBounds](GUIGeometry.md#updatebounds)
- [create](GUIGeometry.md#create)
- [fillQuad](GUIGeometry.md#fillquad)
- [addSubGeometry](GUIGeometry.md#addsubgeometry)
- [generate](GUIGeometry.md#generate)
- [setIndices](GUIGeometry.md#setindices)
- [setAttribute](GUIGeometry.md#setattribute)
- [getAttribute](GUIGeometry.md#getattribute)
- [hasAttribute](GUIGeometry.md#hasattribute)
- [genWireframe](GUIGeometry.md#genwireframe)
- [compute](GUIGeometry.md#compute)
- [computeNormals](GUIGeometry.md#computenormals)
- [isPrimitive](GUIGeometry.md#isprimitive)
- [destroy](GUIGeometry.md#destroy)

## Constructors

### constructor

• **new GUIGeometry**(`max`)

constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `max` | `number` | max quad of a geometry |

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L45)

## Properties

### maxQuadCount

• `Readonly` **maxQuadCount**: `number`

#### Defined in

[src/components/gui/core/GUIGeometry.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L38)

___

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

## Accessors

### vPositionBuffer

• `get` **vPositionBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L62)

___

### vSpriteBuffer

• `get` **vSpriteBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L70)

___

### vColorBuffer

• `get` **vColorBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L78)

___

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

### updateBounds

▸ **updateBounds**(`min?`, `max?`): [`GUIGeometry`](GUIGeometry.md)

the bounds will be set to infinity

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | [`Vector3`](Vector3.md) |
| `max?` | [`Vector3`](Vector3.md) |

#### Returns

[`GUIGeometry`](GUIGeometry.md)

GUIGeometry

#### Defined in

[src/components/gui/core/GUIGeometry.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L54)

___

### create

▸ **create**(): [`GUIGeometry`](GUIGeometry.md)

#### Returns

[`GUIGeometry`](GUIGeometry.md)

#### Defined in

[src/components/gui/core/GUIGeometry.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L86)

___

### fillQuad

▸ **fillQuad**(`quad`, `transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [`GUIQuad`](GUIQuad.md) |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIGeometry.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIGeometry.ts#L144)

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

▸ **computeNormals**(): [`GUIGeometry`](GUIGeometry.md)

#### Returns

[`GUIGeometry`](GUIGeometry.md)

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
