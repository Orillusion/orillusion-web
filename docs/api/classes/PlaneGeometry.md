[**@orillusion/core**](../README.md)

***

# Class: PlaneGeometry

Defined in: [src/shape/PlaneGeometry.ts:10](https://github.com/orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L10)

Plane geometry

## Extends

- [`GeometryBase`](GeometryBase.md)

## Constructors

### Constructor

> **new PlaneGeometry**(`width`, `height`, `segmentW?`, `segmentH?`, `up?`): `PlaneGeometry`

Defined in: [src/shape/PlaneGeometry.ts:41](https://github.com/orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L41)

#### Parameters

##### width

`number`

Width of the plane

##### height

`number`

Height of the plane

##### segmentW?

`number` = `1`

Number of width segments of a plane

##### segmentH?

`number` = `1`

Number of height segments of a plane

##### up?

[`Vector3`](Vector3.md) = `Vector3.Y_AXIS`

Define the normal vector of a plane

#### Returns

`PlaneGeometry`

#### Overrides

[`GeometryBase`](GeometryBase.md).[`constructor`](GeometryBase.md#constructor)

## Properties

### instanceID

> **instanceID**: `string`

Defined in: [src/core/geometry/GeometryBase.ts:43](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L43)

Unique identifier of this geometry instance.

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`instanceID`](GeometryBase.md#instanceid)

***

### name

> **name**: `string`

Defined in: [src/core/geometry/GeometryBase.ts:45](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L45)

Human-readable name of this geometry.

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`name`](GeometryBase.md#name)

***

### subGeometries

> **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

Defined in: [src/core/geometry/GeometryBase.ts:47](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L47)

Sub-geometries with their per-LOD draw descriptors.

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`subGeometries`](GeometryBase.md#subgeometries)

***

### morphTargetsRelative

> **morphTargetsRelative**: `boolean`

Defined in: [src/core/geometry/GeometryBase.ts:49](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L49)

Whether morph targets are stored as relative offsets.

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`morphTargetsRelative`](GeometryBase.md#morphtargetsrelative)

***

### morphTargetDictionary

> **morphTargetDictionary**: `object`

Defined in: [src/core/geometry/GeometryBase.ts:51](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L51)

Maps morph-target names to their attribute indices.

#### Index Signature

\[`blenderName`: `string`\]: `number`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`morphTargetDictionary`](GeometryBase.md#morphtargetdictionary)

***

### skinNames

> **skinNames**: `string`[]

Defined in: [src/core/geometry/GeometryBase.ts:53](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L53)

Names of the skin joints used by this geometry.

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`skinNames`](GeometryBase.md#skinnames)

***

### bindPose

> **bindPose**: [`Matrix4`](Matrix4.md)[]

Defined in: [src/core/geometry/GeometryBase.ts:55](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L55)

Inverse bind-pose matrices for skinning.

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`bindPose`](GeometryBase.md#bindpose)

***

### blendShapeData

> **blendShapeData**: `BlendShapeData`

Defined in: [src/core/geometry/GeometryBase.ts:57](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L57)

Blend-shape (morph target) data for this geometry.

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`blendShapeData`](GeometryBase.md#blendshapedata)

***

### vertexDim

> **vertexDim**: `number`

Defined in: [src/core/geometry/GeometryBase.ts:59](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L59)

Number of floats per vertex for interleaved buffers.

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`vertexDim`](GeometryBase.md#vertexdim)

***

### vertexCount

> **vertexCount**: `number` = `0`

Defined in: [src/core/geometry/GeometryBase.ts:61](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L61)

Number of vertices in this geometry.

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`vertexCount`](GeometryBase.md#vertexcount)

***

### width

> **width**: `number`

Defined in: [src/shape/PlaneGeometry.ts:14](https://github.com/orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L14)

Width of the plane

***

### height

> **height**: `number`

Defined in: [src/shape/PlaneGeometry.ts:18](https://github.com/orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L18)

Height of the plane

***

### segmentW

> **segmentW**: `number`

Defined in: [src/shape/PlaneGeometry.ts:22](https://github.com/orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L22)

Number of width segments of a plane

***

### segmentH

> **segmentH**: `number`

Defined in: [src/shape/PlaneGeometry.ts:26](https://github.com/orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L26)

Number of height segments of a plane

***

### up

> **up**: [`Vector3`](Vector3.md)

Defined in: [src/shape/PlaneGeometry.ts:30](https://github.com/orillusion/orillusion/blob/main/src/shape/PlaneGeometry.ts#L30)

Define the normal vector of a plane

## Accessors

### indicesBuffer

#### Get Signature

> **get** **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

Defined in: [src/core/geometry/GeometryBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L79)

Get the GPU index buffer of this geometry.

##### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`indicesBuffer`](GeometryBase.md#indicesbuffer)

***

### vertexBuffer

#### Get Signature

> **get** **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

Defined in: [src/core/geometry/GeometryBase.ts:84](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L84)

Get the GPU vertex buffer of this geometry.

##### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`vertexBuffer`](GeometryBase.md#vertexbuffer)

***

### vertexAttributes

#### Get Signature

> **get** **vertexAttributes**(): `string`[]

Defined in: [src/core/geometry/GeometryBase.ts:89](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L89)

Get the list of vertex attribute names present on this geometry.

##### Returns

`string`[]

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`vertexAttributes`](GeometryBase.md#vertexattributes)

***

### vertexAttributeMap

#### Get Signature

> **get** **vertexAttributeMap**(): `Map`\<`string`, [`VertexAttributeData`](../type-aliases/VertexAttributeData.md)\>

Defined in: [src/core/geometry/GeometryBase.ts:94](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L94)

Get the map from attribute name to its vertex attribute data.

##### Returns

`Map`\<`string`, [`VertexAttributeData`](../type-aliases/VertexAttributeData.md)\>

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`vertexAttributeMap`](GeometryBase.md#vertexattributemap)

***

### geometryType

#### Get Signature

> **get** **geometryType**(): [`GeometryVertexType`](../enumerations/GeometryVertexType.md)

Defined in: [src/core/geometry/GeometryBase.ts:99](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L99)

Get the vertex layout type of this geometry.

##### Returns

[`GeometryVertexType`](../enumerations/GeometryVertexType.md)

#### Set Signature

> **set** **geometryType**(`value`): `void`

Defined in: [src/core/geometry/GeometryBase.ts:103](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L103)

Set the vertex layout type of this geometry.

##### Parameters

###### value

[`GeometryVertexType`](../enumerations/GeometryVertexType.md)

##### Returns

`void`

#### Inherited from

[`TriGeometry`](TriGeometry.md).[`geometryType`](TriGeometry.md#geometrytype)

***

### bounds

#### Get Signature

> **get** **bounds**(): `BoundingBox`

Defined in: [src/core/geometry/GeometryBase.ts:108](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L108)

Get the bounding box of this geometry, computing it from positions on first access.

##### Returns

`BoundingBox`

#### Set Signature

> **set** **bounds**(`value`): `void`

Defined in: [src/core/geometry/GeometryBase.ts:152](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L152)

Set the bounding box of this geometry.

##### Parameters

###### value

`BoundingBox`

##### Returns

`void`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`bounds`](GeometryBase.md#bounds)

## Methods

### addSubGeometry()

> **addSubGeometry**(...`lodLevels`): [`SubGeometry`](SubGeometry.md)

Defined in: [src/core/geometry/GeometryBase.ts:161](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L161)

add subGeometry from lod level

#### Parameters

##### lodLevels

...[`LODDescriptor`](../type-aliases/LODDescriptor.md)[]

#### Returns

[`SubGeometry`](SubGeometry.md)

#### See

LODDescriptor

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`addSubGeometry`](GeometryBase.md#addsubgeometry)

***

### generate()

> **generate**(`shaderReflection`): `void`

Defined in: [src/core/geometry/GeometryBase.ts:194](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L194)

Build the GPU vertex buffer + buffer-layout array from this
geometry's attribute data, driven by the consuming pass's
`ShaderReflection`. The layout array is indexed by shader slot
(`attribute.location`), so the LAYOUT contents depend on which
attributes the shader actually declares.

Originally this was gated purely on `_onChange` — i.e. ran once
after the geometry's attribute data was set. That broke
multi-pass materials: when a single geometry is consumed by a
color pass that declares N attributes (say position / normal /
uv) AND a depth pass that declares N+1 (adding TEXCOORD_1 at
slot 3 via VertexAttributes #include), the color pass ran
first, populated slots 0..N-1, and cleared `_onChange`. The
depth pass's `generate` call was then a no-op, so the pipeline
built with `vertexBufferLayouts` was missing slot N — WebGPU
rejects it with "Vertex attribute slot X used in shader is not
present in VertexState".

The fix: rebuild also when the incoming reflection requires a
slot the current layout array doesn't yet have. The data is
already in `_attributeMap`; `createVertexBuffer` will pick up
the missing slot. We keep the `_onChange` short-circuit for the
normal "shader requirements unchanged" case so dynamic geometry
updates don't pay a per-frame `createVertexBuffer` cost.

#### Parameters

##### shaderReflection

`ShaderReflection`

#### Returns

`void`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`generate`](GeometryBase.md#generate)

***

### setIndices()

> **setIndices**(`data`): `void`

Defined in: [src/core/geometry/GeometryBase.ts:214](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L214)

Set the index data of this geometry, creating its index buffer.

#### Parameters

##### data

[`ArrayBufferData`](../type-aliases/ArrayBufferData.md)

the index buffer data

#### Returns

`void`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`setIndices`](GeometryBase.md#setindices)

***

### setVertexs()

> **setVertexs**(`data`): `void`

Defined in: [src/core/geometry/GeometryBase.ts:230](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L230)

Set the position (vertex) data of this geometry.

#### Parameters

##### data

[`ArrayBufferData`](../type-aliases/ArrayBufferData.md)

the position buffer data

#### Returns

`void`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`setVertexs`](GeometryBase.md#setvertexs)

***

### setAttribute()

> **setAttribute**(`attribute`, `data`): `void`

Defined in: [src/core/geometry/GeometryBase.ts:244](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L244)

Set the data of a named vertex attribute (or indices/position).

#### Parameters

##### attribute

`string`

the attribute name

##### data

[`ArrayBufferData`](../type-aliases/ArrayBufferData.md)

the attribute buffer data

#### Returns

`void`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`setAttribute`](GeometryBase.md#setattribute)

***

### getAttribute()

> **getAttribute**(`attribute`): [`VertexAttributeData`](../type-aliases/VertexAttributeData.md)

Defined in: [src/core/geometry/GeometryBase.ts:263](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L263)

Get the data of a named vertex attribute.

#### Parameters

##### attribute

`string`

the attribute name

#### Returns

[`VertexAttributeData`](../type-aliases/VertexAttributeData.md)

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`getAttribute`](GeometryBase.md#getattribute)

***

### hasAttribute()

> **hasAttribute**(`attribute`): `boolean`

Defined in: [src/core/geometry/GeometryBase.ts:271](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L271)

Whether this geometry has the given named attribute.

#### Parameters

##### attribute

`string`

the attribute name

#### Returns

`boolean`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`hasAttribute`](GeometryBase.md#hasattribute)

***

### genWireframe()

> **genWireframe**(): [`Vector3`](Vector3.md)[]

Defined in: [src/core/geometry/GeometryBase.ts:279](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L279)

Generate (and cache) the line list describing this geometry's wireframe.

#### Returns

[`Vector3`](Vector3.md)[]

the wireframe line vertices, or null if not available

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`genWireframe`](GeometryBase.md#genwireframe)

***

### compute()

> **compute**(): `void`

Defined in: [src/core/geometry/GeometryBase.ts:335](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L335)

Run the compute step on this geometry's index and vertex buffers.

#### Returns

`void`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`compute`](GeometryBase.md#compute)

***

### computeNormals()

> **computeNormals**(): `this`

Defined in: [src/core/geometry/GeometryBase.ts:357](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L357)

Compute per-vertex normals from the position and index data and upload them.

#### Returns

`this`

this geometry for chaining

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`computeNormals`](GeometryBase.md#computenormals)

***

### isPrimitive()

> **isPrimitive**(): `boolean`

Defined in: [src/core/geometry/GeometryBase.ts:403](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L403)

Whether this geometry is a built-in primitive.

#### Returns

`boolean`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`isPrimitive`](GeometryBase.md#isprimitive)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/core/geometry/GeometryBase.ts:411](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryBase.ts#L411)

Release the buffers and data held by this geometry.

#### Parameters

##### force?

`boolean`

whether to force-destroy

#### Returns

`void`

#### Inherited from

[`GeometryBase`](GeometryBase.md).[`destroy`](GeometryBase.md#destroy)
