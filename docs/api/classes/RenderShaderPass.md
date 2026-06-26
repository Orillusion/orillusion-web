[**@orillusion/core**](../README.md)

***

# Class: RenderShaderPass

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:40](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L40)

A single render pass of a shader: pairs a vertex and fragment shader,
owns the shader state, textures, uniforms, bind group layouts and the
GPURenderPipeline built from them. Each pass is bound to a single
Context3D and rebuilds its pipeline lazily when its state changes.

## Extends

- [`ShaderPassBase`](ShaderPassBase.md)

## Constructors

### Constructor

> **new RenderShaderPass**(`vs`, `fs`): `RenderShaderPass`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:118](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L118)

#### Parameters

##### vs

`string`

Vertex shader name (must be registered in ShaderLib).

##### fs

`string`

Fragment shader name (must be registered in ShaderLib).

#### Returns

`RenderShaderPass`

#### Overrides

[`ShaderPassBase`](ShaderPassBase.md).[`constructor`](ShaderPassBase.md#constructor)

## Properties

### passType

> **passType**: `PassType` = `PassType.COLOR`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L45)

The type of pass (color, shadow, OIT accumulation, depth peel, …).

***

### useRz

> **useRz**: `boolean` = `false`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:50](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L50)

Whether this pass participates in the reverse-Z depth pipeline.

***

### vsName

> **vsName**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:55](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L55)

Vertex shader name

***

### fsName

> **fsName**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:60](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L60)

Fragment shader name

***

### shaderState

> **shaderState**: `ShaderState`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:65](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L65)

State of the shader

***

### textures

> **textures**: `object`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:70](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L70)

The collection of textures used in shading

#### Index Signature

\[`name`: `string`\]: [`Texture`](Texture.md)

***

### pipeline

> **pipeline**: `GPURenderPipeline` = `null`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:77](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L77)

Render pipeline. Plan B: one pipeline per RenderShaderPass, bound to
a single Context3D. Attempts to use this pass with a second engine
throw via bindCtx.

***

### bindGroupLayouts

> **bindGroupLayouts**: `GPUBindGroupLayout`[] = `[]`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:82](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L82)

BindGroup layouts (single-field, bound to one Context3D)

***

### envMap

> **envMap**: [`Texture`](Texture.md)

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:89](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L89)

Environment cube map used for image-based lighting.

***

### prefilterMap

> **prefilterMap**: [`Texture`](Texture.md)

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:94](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L94)

Pre-filtered environment map used for specular IBL.

***

### reflectionMap

> **reflectionMap**: [`Texture`](Texture.md)

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:98](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L98)

Reflection cube map used for environment reflections.

***

### outBufferMask

> **outBufferMask**: `Vector4`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:112](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L112)

Per-channel write mask applied to the pass's output buffer.

***

### instanceID

> `readonly` **instanceID**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L27)

Shader Unique instance id

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`instanceID`](ShaderPassBase.md#instanceid)

***

### shaderVariant

> **shaderVariant**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L32)

Shader variant value

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`shaderVariant`](ShaderPassBase.md#shadervariant)

***

### vsEntryPoint

> **vsEntryPoint**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L37)

Vertex stage entry point name

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`vsEntryPoint`](ShaderPassBase.md#vsentrypoint)

***

### fsEntryPoint

> **fsEntryPoint**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L42)

Fragment stage entry point name

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`fsEntryPoint`](ShaderPassBase.md#fsentrypoint)

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:48](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L48)

The Context3D this pass is bound to. Set on first GPU use via bindCtx.
Plan B: a ShaderPass may only be used by one Engine3D.

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`_boundCtx`](ShaderPassBase.md#_boundctx)

***

### bindGroups

> **bindGroups**: `GPUBindGroup`[] = `[]`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L53)

BindGroups — single array owned by the bound Context3D.

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`bindGroups`](ShaderPassBase.md#bindgroups)

***

### shaderReflection

> **shaderReflection**: `ShaderReflection`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:58](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L58)

Shader reflection info

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`shaderReflection`](ShaderPassBase.md#shaderreflection)

***

### defineValue

> **defineValue**: `object`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:63](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L63)

The defined syntax value of the Shader when it is precompiled

#### Index Signature

\[`name`: `string`\]: `any`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`defineValue`](ShaderPassBase.md#definevalue)

***

### constValues

> **constValues**: `object`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:68](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L68)

The constant value of the Shader when it is precompiled

#### Index Signature

\[`name`: `string`\]: `any`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`constValues`](ShaderPassBase.md#constvalues)

***

### uniforms

> **uniforms**: `object`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:73](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L73)

Uniforms data collection

#### Index Signature

\[`name`: `string`\]: `UniformNode`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`uniforms`](ShaderPassBase.md#uniforms)

***

### materialDataUniformBuffer

> **materialDataUniformBuffer**: [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:78](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L78)

Uniform data for materials

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`materialDataUniformBuffer`](ShaderPassBase.md#materialdatauniformbuffer)

## Accessors

### renderOrder

#### Get Signature

> **get** **renderOrder**(): `number`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:153](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L153)

Blend mode

##### Returns

`number`

#### Set Signature

> **set** **renderOrder**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:157](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L157)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### doubleSide

#### Get Signature

> **get** **doubleSide**(): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:167](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L167)

Cull mode

##### Returns

`boolean`

#### Set Signature

> **set** **doubleSide**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:171](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L171)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### depthWriteEnabled

#### Get Signature

> **get** **depthWriteEnabled**(): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:182](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L182)

depthWriteEnabled mode

##### Returns

`boolean`

#### Set Signature

> **set** **depthWriteEnabled**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:186](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L186)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### cullMode

#### Get Signature

> **get** **cullMode**(): `GPUCullMode`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:196](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L196)

get render face cull mode

##### Returns

`GPUCullMode`

#### Set Signature

> **set** **cullMode**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:203](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L203)

set render face cull mode

##### Parameters

###### value

`GPUCullMode`

##### Returns

`void`

***

### frontFace

#### Get Signature

> **get** **frontFace**(): `GPUFrontFace`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:214](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L214)

get front face mode

##### GPUFront Face

##### Returns

`GPUFrontFace`

#### Set Signature

> **set** **frontFace**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:222](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L222)

set front face mode

##### GPUFront Face

value

##### Parameters

###### value

`GPUFrontFace`

##### Returns

`void`

***

### depthBias

#### Get Signature

> **get** **depthBias**(): `number`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:232](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L232)

Depth bias

##### Returns

`number`

#### Set Signature

> **set** **depthBias**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:236](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L236)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### topology

#### Get Signature

> **get** **topology**(): `GPUPrimitiveTopology`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:246](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L246)

Primitive topology

##### Returns

`GPUPrimitiveTopology`

#### Set Signature

> **set** **topology**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:250](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L250)

##### Parameters

###### value

`GPUPrimitiveTopology`

##### Returns

`void`

***

### blendMode

#### Get Signature

> **get** **blendMode**(): [`BlendMode`](../enumerations/BlendMode.md)

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:260](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L260)

Blend mode

##### Returns

[`BlendMode`](../enumerations/BlendMode.md)

#### Set Signature

> **set** **blendMode**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:264](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L264)

##### Parameters

###### value

[`BlendMode`](../enumerations/BlendMode.md)

##### Returns

`void`

***

### depthCompare

#### Get Signature

> **get** **depthCompare**(): `GPUCompareFunction`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:277](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L277)

Depth compare function

##### Returns

`GPUCompareFunction`

#### Set Signature

> **set** **depthCompare**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:281](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L281)

##### Parameters

###### value

`GPUCompareFunction`

##### Returns

`void`

***

### stencilFront

#### Get Signature

> **get** **stencilFront**(): `GPUStencilFaceState`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:291](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L291)

Stencil front face state

##### Returns

`GPUStencilFaceState`

#### Set Signature

> **set** **stencilFront**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:295](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L295)

##### Parameters

###### value

`GPUStencilFaceState`

##### Returns

`void`

***

### stencilBack

#### Get Signature

> **get** **stencilBack**(): `GPUStencilFaceState`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:303](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L303)

Stencil back face state

##### Returns

`GPUStencilFaceState`

#### Set Signature

> **set** **stencilBack**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:307](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L307)

##### Parameters

###### value

`GPUStencilFaceState`

##### Returns

`void`

***

### stencilReadMask

#### Get Signature

> **get** **stencilReadMask**(): `number`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:315](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L315)

Stencil read mask

##### Returns

`number`

#### Set Signature

> **set** **stencilReadMask**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:319](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L319)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### stencilWriteMask

#### Get Signature

> **get** **stencilWriteMask**(): `number`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:329](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L329)

Stencil write mask

##### Returns

`number`

#### Set Signature

> **set** **stencilWriteMask**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:333](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L333)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### stencilRef

#### Get Signature

> **get** **stencilRef**(): `number`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:343](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L343)

Stencil reference value (used with setStencilReference)

##### Returns

`number`

#### Set Signature

> **set** **stencilRef**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:347](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L347)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### baseColor

#### Get Signature

> **get** **baseColor**(): [`Color`](Color.md)

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:417](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L417)

Base color tint, backed by the `baseColor` uniform.

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **baseColor**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:421](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L421)

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

## Methods

### setShaderEntry()

> **setShaderEntry**(`vsEntryPoint?`, `fsEntryPoint?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:356](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L356)

Sets the entry point names for the RenderShader vertex phase and fragment phase

#### Parameters

##### vsEntryPoint?

`string` = `''`

##### fsEntryPoint?

`string` = `''`

#### Returns

`void`

***

### setUniform()

> **setUniform**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:366](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L366)

#### Parameters

##### name

`string`

##### value

`any`

#### Returns

`void`

#### Overrides

[`ShaderPassBase`](ShaderPassBase.md).[`setUniform`](ShaderPassBase.md#setuniform)

***

### setTexture()

> **setTexture**(`name`, `texture`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:376](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L376)

Set the texture used in the Render Shader code

#### Parameters

##### name

`string`

Name in the shader code

##### texture

[`Texture`](Texture.md)

Texture object

#### Returns

`void`

***

### getTexture()

> **getTexture**(`name`): [`Texture`](Texture.md)

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:430](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L430)

Get the texture used in the Render Shader code

#### Parameters

##### name

`string`

Name in the shader code

#### Returns

[`Texture`](Texture.md)

Texture object

***

### declareBinding()

> **declareBinding**(`name`, `handleName`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:449](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L449)

Declare that the material slot `name` should be sourced from a
Frame Graph resource handle rather than a pre-bound Texture.
Resolution is deferred until `resolveBindings(view)` runs — the
graph's resource pool may not have produced the GPUTexture yet
when the declaration happens.

A frame-graph-aware feature can hand its material a named handle
at setup time, and the `RenderNode.nodeUpdate` path keeps working
in parallel. No behavior change when `declareBinding` is never
called.

#### Parameters

##### name

`string`

Shader-side texture binding name (e.g. `shadowMap`).

##### handleName

`string`

Frame Graph handle name (e.g. `_MainShadowMap`).

#### Returns

`void`

***

### getDeclaredBinding()

> **getDeclaredBinding**(`name`): `string`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:458](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L458)

Return the declared handle name for a material slot, or null
if the slot is not backed by a Frame Graph handle.

#### Parameters

##### name

`string`

#### Returns

`string`

***

### resolveBindings()

> **resolveBindings**(`view`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:471](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L471)

Walk declared bindings and push the current frame's resolved
textures into the material via `setTexture`. Safe to call
every frame — `setTexture` is a no-op when the resolved
texture is identity-equal to the previously bound one.

No-op unless `view.renderGraph` is present (legacy path) and
the pool actually holds the declared resource.

#### Parameters

##### view

###### renderGraph?

\{ `pool`: \{ `has`: `boolean`; `get`: `T`; \}; \}

###### renderGraph.pool

\{ `has`: `boolean`; `get`: `T`; \}

###### renderGraph.pool.has

###### renderGraph.pool.get

#### Returns

`void`

***

### genRenderPipeline()

> **genRenderPipeline**(`geometry`, `renderPassState`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:493](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L493)

Create a rendering pipeline

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

##### renderPassState

`RendererPassState`

#### Returns

`void`

***

### reBuild()

> **reBuild**(`geometry`, `rendererPassState`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:503](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L503)

Recompile the shader and create the rendering pipeline

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

##### rendererPassState

`RendererPassState`

#### Returns

`void`

***

### apply()

> **apply**(`ctx`, `geometry`, `rendererPassState`, `noticeFun?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:523](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L523)

Apply render shader state value

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

##### geometry

[`GeometryBase`](GeometryBase.md)

##### rendererPassState

`RendererPassState`

##### noticeFun?

`Function`

#### Returns

`void`

***

### preCompile()

> **preCompile**(`geometry`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:566](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L566)

Precompile the shader code

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

#### Returns

`void`

***

### applyPostDefine()

> **applyPostDefine**(`shader`, `renderPassState`): `string`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:579](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L579)

Apply defines syntax values

#### Parameters

##### shader

`string`

##### renderPassState

`RendererPassState`

#### Returns

`string`

***

### setBindGroup()

> **setBindGroup**(`groupIndex`, `group`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:607](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L607)

Set GPUBindGroup to the specified index slot

#### Parameters

##### groupIndex

`number`

##### group

`GPUBindGroup`

#### Returns

`void`

***

### clone()

> **clone**(): `RenderShaderPass`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:1359](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L1359)

Deep-copy this pass into a fresh instance with its own GPU lifecycle.

Why this exists: `Material.clone()` → `Shader.clone()` used to share
the same RenderShaderPass instance between source and clones. When
the clone's material was destroyed (Sample_AddRemove's add → remove
→ add path), it tore down `materialDataUniformBuffer` /
`bindGroupLayouts` / `pipeline` on the SHARED pass — the source
material and any future clones then tried to render through dead
GPU resources and `createBindGroup` failed validation.

The clone re-runs the (sub)class constructor via `this.constructor`
so subclass-specific setup (CastShadowMaterialPass uniforms,
OITAccumPass entry points, …) is preserved, then overlays the
source's user-modified state. Texture / external-buffer references
are shared (their lifetime is owner-managed); UniformNode values
are copied so vector mutations on one material don't leak into
the other; `materialDataUniformBuffer` and the pipeline objects
stay fresh from the constructor so the next apply() rebuilds
cleanly under the cloned material's own ownership.

#### Returns

`RenderShaderPass`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:1416](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L1416)

Destroy and release render shader related resources

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

[`ShaderPassBase`](ShaderPassBase.md).[`destroy`](ShaderPassBase.md#destroy)

***

### destroyShader()

> `static` **destroyShader**(`ctx`, `instanceID`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:1449](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L1449)

Destroy a RenderShader object

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

Context3D owning the shader cache

##### instanceID

`string`

instance ID of the RenderShader

#### Returns

`void`

***

### getShader()

> `static` **getShader**(`ctx`, `instanceID`): `RenderShaderPass`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:1464](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L1464)

Get the RenderShader object by specifying the RenderShader instance ID

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

Context3D owning the shader cache

##### instanceID

`string`

instance ID of the RenderShader

#### Returns

`RenderShaderPass`

RenderShader object

***

### createShader()

> `static` **createShader**(`ctx`, `vs`, `fs`): `string`

Defined in: [src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:1475](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L1475)

Create a RenderShader with vertex shaders and fragment shaders

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

Context3D owning the shader cache

##### vs

`string`

Vertex shader name

##### fs

`string`

Fragment shader name

#### Returns

`string`

Returns the instance ID of the RenderShader

***

### noticeShaderChange()

> **noticeShaderChange**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L105)

notice shader change

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`noticeShaderChange`](ShaderPassBase.md#noticeshaderchange)

***

### noticeValueChange()

> **noticeValueChange**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:112](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L112)

notice shader state change

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`noticeValueChange`](ShaderPassBase.md#noticevaluechange)

***

### setStorageBuffer()

> **setStorageBuffer**(`name`, `buffer`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:121](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L121)

set storage gpu buffer

#### Parameters

##### name

`string`

buffer name

##### buffer

[`StorageGPUBuffer`](StorageGPUBuffer.md)

storage useAge gpu buffer

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setStorageBuffer`](ShaderPassBase.md#setstoragebuffer)

***

### getStorageBuffer()

> **getStorageBuffer**(`name`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:141](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L141)

Get a previously set storage gpu buffer by name.

#### Parameters

##### name

`string`

buffer name

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`getStorageBuffer`](ShaderPassBase.md#getstoragebuffer)

***

### setStructStorageBuffer()

> **setStructStorageBuffer**\<`T`\>(`name`, `buffer`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:150](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L150)

set struct storage gpu buffer

#### Type Parameters

##### T

`T` *extends* [`Struct`](Struct.md)

#### Parameters

##### name

`string`

buffer name

##### buffer

[`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\>

struct storage useAge gpu buffer

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setStructStorageBuffer`](ShaderPassBase.md#setstructstoragebuffer)

***

### setUniformBuffer()

> **setUniformBuffer**(`name`, `buffer`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:164](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L164)

set uniform gpu buffer min size 256

#### Parameters

##### name

`string`

##### buffer

[`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setUniformBuffer`](ShaderPassBase.md#setuniformbuffer)

***

### getUniformBuffer()

> **getUniformBuffer**(`name`): [`UniformGPUBuffer`](UniformGPUBuffer.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:177](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L177)

Get a previously set uniform gpu buffer by name.

#### Parameters

##### name

`string`

buffer name

#### Returns

[`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`getUniformBuffer`](ShaderPassBase.md#getuniformbuffer)

***

### setDefine()

> **setDefine**(`defineName`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:186](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L186)

set define value

#### Parameters

##### defineName

`string`

##### value

`any`

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setDefine`](ShaderPassBase.md#setdefine)

***

### hasDefine()

> **hasDefine**(`defineName`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:200](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L200)

Whether there is a define key

#### Parameters

##### defineName

`string`

#### Returns

`boolean`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`hasDefine`](ShaderPassBase.md#hasdefine)

***

### deleteDefine()

> **deleteDefine**(`defineName`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:208](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L208)

delete define value

#### Parameters

##### defineName

`string`

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`deleteDefine`](ShaderPassBase.md#deletedefine)

***

### setUniformFloat()

> **setUniformFloat**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:218](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L218)

set uniform float value

#### Parameters

##### name

`string`

##### value

`number`

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setUniformFloat`](ShaderPassBase.md#setuniformfloat)

***

### setUniformInt32()

> **setUniformInt32**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:232](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L232)

set uniform int32 value

#### Parameters

##### name

`string`

##### value

`number`

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setUniformInt32`](ShaderPassBase.md#setuniformint32)

***

### setUniformVector2()

> **setUniformVector2**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:246](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L246)

set uniform vector2 value

#### Parameters

##### name

`string`

##### value

[`Vector2`](Vector2.md)

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setUniformVector2`](ShaderPassBase.md#setuniformvector2)

***

### setUniformVector3()

> **setUniformVector3**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:260](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L260)

set uniform vector3 value

#### Parameters

##### name

`string`

##### value

[`Vector3`](Vector3.md)

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setUniformVector3`](ShaderPassBase.md#setuniformvector3)

***

### setUniformVector4()

> **setUniformVector4**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:273](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L273)

set uniform vector4 value

#### Parameters

##### name

`string`

##### value

`Vector4`

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setUniformVector4`](ShaderPassBase.md#setuniformvector4)

***

### setUniformColor()

> **setUniformColor**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:286](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L286)

set uniform color value

#### Parameters

##### name

`string`

##### value

[`Color`](Color.md)

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setUniformColor`](ShaderPassBase.md#setuniformcolor)

***

### setUniformArray()

> **setUniformArray**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:299](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L299)

set uniform array value

#### Parameters

##### name

`string`

##### value

`Float32Array`

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`setUniformArray`](ShaderPassBase.md#setuniformarray)

***

### getUniform()

> **getUniform**(`name`): `any`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:324](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L324)

Get a uniform value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

`any`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`getUniform`](ShaderPassBase.md#getuniform)

***

### getUniformFloat()

> **getUniformFloat**(`name`): `number`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:332](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L332)

Get a uniform float value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

`number`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`getUniformFloat`](ShaderPassBase.md#getuniformfloat)

***

### getUniformVector2()

> **getUniformVector2**(`name`): [`Vector2`](Vector2.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:340](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L340)

Get a uniform vector2 value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`getUniformVector2`](ShaderPassBase.md#getuniformvector2)

***

### getUniformVector3()

> **getUniformVector3**(`name`): [`Vector3`](Vector3.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:348](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L348)

Get a uniform vector3 value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`getUniformVector3`](ShaderPassBase.md#getuniformvector3)

***

### getUniformVector4()

> **getUniformVector4**(`name`): `Vector4`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:356](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L356)

Get a uniform vector4 value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

`Vector4`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`getUniformVector4`](ShaderPassBase.md#getuniformvector4)

***

### getUniformColor()

> **getUniformColor**(`name`): [`Color`](Color.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:364](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L364)

Get a uniform color value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

[`Color`](Color.md)

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`getUniformColor`](ShaderPassBase.md#getuniformcolor)

***

### getBuffer()

> **getBuffer**(`name`): `GPUBufferBase`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:372](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L372)

Get a registered gpu buffer by name.

#### Parameters

##### name

`string`

buffer name

#### Returns

`GPUBufferBase`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`getBuffer`](ShaderPassBase.md#getbuffer)

***

### applyUniform()

> **applyUniform**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:387](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L387)

Apply pending material uniform data to the GPU when values have changed.

#### Returns

`void`

#### Inherited from

[`ShaderPassBase`](ShaderPassBase.md).[`applyUniform`](ShaderPassBase.md#applyuniform)
