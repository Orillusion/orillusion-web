[**@orillusion/core**](../README.md)

***

# Class: GeometryVertexBuffer

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:15](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L15)

Holds the vertex attribute data of a geometry and manages its backing
GPU vertex buffer and attribute layout.

## Constructors

### Constructor

> **new GeometryVertexBuffer**(): `GeometryVertexBuffer`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:76](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L76)

#### Returns

`GeometryVertexBuffer`

## Properties

### vertexCount

> **vertexCount**: `number` = `0`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:17](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L17)

***

### vertexGPUBuffer

> **vertexGPUBuffer**: [`VertexGPUBuffer`](VertexGPUBuffer.md)

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:18](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L18)

***

### geometryType

> **geometryType**: [`GeometryVertexType`](../enumerations/GeometryVertexType.md) = `GeometryVertexType.split`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:19](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L19)

***

### bufferChanged

> **bufferChanged**: `boolean` = `false`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:28](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L28)

Set to `true` whenever `vertexGPUBuffer` is replaced by a fresh
allocation (first build or a packing-size change). Consumers that
captured the GPU buffer handle — e.g. compute pipelines writing
deformed/generated vertices — must observe this flag and rebind,
otherwise they keep writing into an orphaned buffer while the
renderer draws the new one. The owner resets it after handling.

## Accessors

### vertexBufferLayouts

#### Get Signature

> **get** **vertexBufferLayouts**(): [`VertexBufferLayout`](VertexBufferLayout.md)[]

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:82](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L82)

##### Returns

[`VertexBufferLayout`](VertexBufferLayout.md)[]

## Methods

### setComposeBinLayout()

> **setComposeBinLayout**(`layout`): `void`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:69](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L69)

Record the real interleave layout of a `compose_bin` geometry's packed
vertex buffer (attribute name → byte offset within the stride), so each
pass's VertexState can be derived independently of how many attributes
that pass's shader declares.

#### Parameters

##### layout

[`VertexAttribute`](VertexAttribute.md)[]

#### Returns

`void`

***

### getPipelineLayout()

> **getPipelineLayout**(`shaderReflection`): [`VertexBufferLayout`](VertexBufferLayout.md)[]

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:97](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L97)

Vertex buffer layout for a specific pass's pipeline VertexState. For
`compose` geometry this is derived per-pass from the pass's shader
reflection: each attribute the pass declares is mapped to its own
`shaderLocation` but the canonical (by-name) byte offset and the
shared canonical `arrayStride`, so a pass simply strides over the
attributes it does not read. For `split` / `compose_bin` it falls
back to the shared layout (their per-pass decoupling is not done
yet). Consumed by RenderShaderPass.createPipeline; draw-time binding
still uses [vertexBufferLayouts](#vertexbufferlayouts).

#### Parameters

##### shaderReflection

`ShaderReflection`

#### Returns

[`VertexBufferLayout`](VertexBufferLayout.md)[]

***

### needsRebuild()

> **needsRebuild**(`shaderReflection`): `boolean`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:163](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L163)

Whether `createVertexBuffer` must run for this pass's reflection (on
top of the geometry's own `_onChange`). For `compose` this is true
only when the reflection introduces an attribute not yet in the
canonical packing — after the union converges, repeated passes
short-circuit so a compute-written buffer is not re-uploaded with
rest-pose data. For `split` / `compose_bin` it preserves the legacy
"a declared shader slot is missing from the layout" check.

#### Parameters

##### shaderReflection

`ShaderReflection`

#### Returns

`boolean`

***

### createVertexBuffer()

> **createVertexBuffer**(`vertexDataInfos`, `shaderReflection`): `void`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:185](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L185)

#### Parameters

##### vertexDataInfos

`Map`\<`string`, [`VertexAttributeData`](../type-aliases/VertexAttributeData.md)\>

##### shaderReflection

`ShaderReflection`

#### Returns

`void`

***

### upload()

> **upload**(`attribute`, `vertexDataInfo`): `void`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:391](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L391)

#### Parameters

##### attribute

`string`

##### vertexDataInfo

[`VertexAttributeData`](../type-aliases/VertexAttributeData.md)

#### Returns

`void`

***

### updateAttributes()

> **updateAttributes**(`vertexDataInfos`): `void`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:420](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L420)

#### Parameters

##### vertexDataInfos

`Map`\<`string`, [`VertexAttributeData`](../type-aliases/VertexAttributeData.md)\>

#### Returns

`void`

***

### compute()

> **compute**(): `void`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:459](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L459)

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [src/core/geometry/GeometryVertexBuffer.ts:463](https://github.com/orillusion/orillusion/blob/main/src/core/geometry/GeometryVertexBuffer.ts#L463)

#### Returns

`void`
