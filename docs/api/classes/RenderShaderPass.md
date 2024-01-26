# Class: RenderShaderPass

## Hierarchy

- [`ShaderPassBase`](ShaderPassBase.md)

  ↳ **`RenderShaderPass`**

### Constructors

- [constructor](RenderShaderPass.md#constructor)

### Properties

- [passType](RenderShaderPass.md#passtype)
- [useRz](RenderShaderPass.md#userz)
- [vsName](RenderShaderPass.md#vsname)
- [fsName](RenderShaderPass.md#fsname)
- [shaderState](RenderShaderPass.md#shaderstate)
- [textures](RenderShaderPass.md#textures)
- [pipeline](RenderShaderPass.md#pipeline)
- [bindGroupLayouts](RenderShaderPass.md#bindgrouplayouts)
- [envMap](RenderShaderPass.md#envmap)
- [prefilterMap](RenderShaderPass.md#prefiltermap)
- [outBufferMask](RenderShaderPass.md#outbuffermask)
- [instanceID](RenderShaderPass.md#instanceid)
- [shaderVariant](RenderShaderPass.md#shadervariant)
- [vsEntryPoint](RenderShaderPass.md#vsentrypoint)
- [fsEntryPoint](RenderShaderPass.md#fsentrypoint)
- [bindGroups](RenderShaderPass.md#bindgroups)
- [shaderReflection](RenderShaderPass.md#shaderreflection)
- [defineValue](RenderShaderPass.md#definevalue)
- [constValues](RenderShaderPass.md#constvalues)
- [uniforms](RenderShaderPass.md#uniforms)
- [materialDataUniformBuffer](RenderShaderPass.md#materialdatauniformbuffer)

### Accessors

- [renderOrder](RenderShaderPass.md#renderorder)
- [doubleSide](RenderShaderPass.md#doubleside)
- [depthWriteEnabled](RenderShaderPass.md#depthwriteenabled)
- [cullMode](RenderShaderPass.md#cullmode)
- [frontFace](RenderShaderPass.md#frontface)
- [depthBias](RenderShaderPass.md#depthbias)
- [topology](RenderShaderPass.md#topology)
- [blendMode](RenderShaderPass.md#blendmode)
- [depthCompare](RenderShaderPass.md#depthcompare)
- [baseColor](RenderShaderPass.md#basecolor)

### Methods

- [setShaderEntry](RenderShaderPass.md#setshaderentry)
- [setUniform](RenderShaderPass.md#setuniform)
- [setTexture](RenderShaderPass.md#settexture)
- [getTexture](RenderShaderPass.md#gettexture)
- [genRenderPipeline](RenderShaderPass.md#genrenderpipeline)
- [reBuild](RenderShaderPass.md#rebuild)
- [apply](RenderShaderPass.md#apply)
- [preCompile](RenderShaderPass.md#precompile)
- [applyPostDefine](RenderShaderPass.md#applypostdefine)
- [setBindGroup](RenderShaderPass.md#setbindgroup)
- [destroy](RenderShaderPass.md#destroy)
- [destroyShader](RenderShaderPass.md#destroyshader)
- [getShader](RenderShaderPass.md#getshader)
- [createShader](RenderShaderPass.md#createshader)
- [noticeShaderChange](RenderShaderPass.md#noticeshaderchange)
- [noticeValueChange](RenderShaderPass.md#noticevaluechange)
- [setStorageBuffer](RenderShaderPass.md#setstoragebuffer)
- [setStructStorageBuffer](RenderShaderPass.md#setstructstoragebuffer)
- [setUniformBuffer](RenderShaderPass.md#setuniformbuffer)
- [setDefine](RenderShaderPass.md#setdefine)
- [hasDefine](RenderShaderPass.md#hasdefine)
- [deleteDefine](RenderShaderPass.md#deletedefine)
- [setUniformFloat](RenderShaderPass.md#setuniformfloat)
- [setUniformVector2](RenderShaderPass.md#setuniformvector2)
- [setUniformVector3](RenderShaderPass.md#setuniformvector3)
- [setUniformVector4](RenderShaderPass.md#setuniformvector4)
- [setUniformColor](RenderShaderPass.md#setuniformcolor)
- [setUniformArray](RenderShaderPass.md#setuniformarray)
- [getUniform](RenderShaderPass.md#getuniform)
- [getUniformFloat](RenderShaderPass.md#getuniformfloat)
- [getUniformVector2](RenderShaderPass.md#getuniformvector2)
- [getUniformVector3](RenderShaderPass.md#getuniformvector3)
- [getUniformVector4](RenderShaderPass.md#getuniformvector4)
- [getUniformColor](RenderShaderPass.md#getuniformcolor)
- [getBuffer](RenderShaderPass.md#getbuffer)
- [applyUniform](RenderShaderPass.md#applyuniform)

## Constructors

### constructor

• **new RenderShaderPass**(`vs`, `fs`): [`RenderShaderPass`](RenderShaderPass.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | `string` |
| `fs` | `string` |

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

#### Overrides

[ShaderPassBase](ShaderPassBase.md).[constructor](ShaderPassBase.md#constructor)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L85)

## Properties

### passType

• **passType**: `PassType` = `PassType.COLOR`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L34)

___

### useRz

• **useRz**: `boolean` = `false`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L36)

___

### vsName

• **vsName**: `string`

Vertex shader name

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L41)

___

### fsName

• **fsName**: `string`

Fragment shader name

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L46)

___

### shaderState

• **shaderState**: `ShaderState`

State of the shader

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L51)

___

### textures

• **textures**: `Object`

The collection of textures used in shading

#### Index signature

▪ [name: `string`]: [`Texture`](Texture.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L56)

___

### pipeline

• **pipeline**: `GPURenderPipeline`

Render pipeline

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L61)

___

### bindGroupLayouts

• **bindGroupLayouts**: `GPUBindGroupLayout`[]

BindGroup layout

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L66)

___

### envMap

• **envMap**: [`Texture`](Texture.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L70)

___

### prefilterMap

• **prefilterMap**: [`Texture`](Texture.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L72)

___

### outBufferMask

• **outBufferMask**: `Vector4`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L83)

___

### instanceID

• `Readonly` **instanceID**: `string`

Shader Unique instance id

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[instanceID](ShaderPassBase.md#instanceid)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L21)

___

### shaderVariant

• **shaderVariant**: `string`

Shader variant value

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[shaderVariant](ShaderPassBase.md#shadervariant)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L26)

___

### vsEntryPoint

• **vsEntryPoint**: `string`

Vertex stage entry point name

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[vsEntryPoint](ShaderPassBase.md#vsentrypoint)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L31)

___

### fsEntryPoint

• **fsEntryPoint**: `string`

Fragment stage entry point name

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[fsEntryPoint](ShaderPassBase.md#fsentrypoint)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L36)

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

BindGroup collection

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[bindGroups](ShaderPassBase.md#bindgroups)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L41)

___

### shaderReflection

• **shaderReflection**: `ShaderReflection`

Shader reflection info

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[shaderReflection](ShaderPassBase.md#shaderreflection)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L46)

___

### defineValue

• **defineValue**: `Object`

The defined syntax value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[defineValue](ShaderPassBase.md#definevalue)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L51)

___

### constValues

• **constValues**: `Object`

The constant value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[constValues](ShaderPassBase.md#constvalues)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L56)

___

### uniforms

• **uniforms**: `Object`

Uniforms data collection

#### Index signature

▪ [name: `string`]: `UniformNode`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[uniforms](ShaderPassBase.md#uniforms)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L61)

___

### materialDataUniformBuffer

• **materialDataUniformBuffer**: [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

Uniform data for materials

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[materialDataUniformBuffer](ShaderPassBase.md#materialdatauniformbuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L66)

## Accessors

### renderOrder

• `get` **renderOrder**(): `number`

Blend mode

#### Returns

`number`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L120)

• `set` **renderOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L124)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

Cull mode

#### Returns

`boolean`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L134)

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L138)

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

depthWriteEnabled mode

#### Returns

`boolean`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L149)

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L153)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

get render face cull mode

#### Returns

`GPUCullMode`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L163)

• `set` **cullMode**(`value`): `void`

set render face cull mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L170)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

get front face mode

#### Returns

`GPUFrontFace`

**`GPUFront Face`**

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L181)

• `set` **frontFace**(`value`): `void`

set front face mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

**`GPUFront Face`**

value

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L189)

___

### depthBias

• `get` **depthBias**(): `number`

Depth bias

#### Returns

`number`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L199)

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L203)

___

### topology

• `get` **topology**(): `GPUPrimitiveTopology`

Primitive topology

#### Returns

`GPUPrimitiveTopology`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L213)

• `set` **topology**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L217)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

Blend mode

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L227)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L231)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

Depth compare function

#### Returns

`GPUCompareFunction`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:244](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L244)

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L248)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:298](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L298)

• `set` **baseColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:302](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L302)

## Methods

### setShaderEntry

▸ **setShaderEntry**(`vsEntryPoint?`, `fsEntryPoint?`): `void`

Sets the entry point names for the RenderShader vertex phase and fragment phase

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vsEntryPoint` | `string` | `''` |
| `fsEntryPoint` | `string` | `''` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L260)

___

### setUniform

▸ **setUniform**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Overrides

[ShaderPassBase](ShaderPassBase.md).[setUniform](ShaderPassBase.md#setuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:270](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L270)

___

### setTexture

▸ **setTexture**(`name`, `texture`): `void`

Set the texture used in the Render Shader code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name in the shader code |
| `texture` | [`Texture`](Texture.md) | Texture object |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:280](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L280)

___

### getTexture

▸ **getTexture**(`name`): [`Texture`](Texture.md)

Get the texture used in the Render Shader code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name in the shader code |

#### Returns

[`Texture`](Texture.md)

Texture object

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:311](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L311)

___

### genRenderPipeline

▸ **genRenderPipeline**(`geometry`, `renderPassState`): `void`

Create a rendering pipeline

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `renderPassState` | `RendererPassState` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L320)

___

### reBuild

▸ **reBuild**(`geometry`, `rendererPassState`): `void`

Recompile the shader and create the rendering pipeline

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `rendererPassState` | `RendererPassState` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:330](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L330)

___

### apply

▸ **apply**(`geometry`, `rendererPassState`, `noticeFun?`): `void`

Apply render shader state value

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `rendererPassState` | `RendererPassState` |
| `noticeFun?` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:344](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L344)

___

### preCompile

▸ **preCompile**(`geometry`): `void`

Precompile the shader code

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:371](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L371)

___

### applyPostDefine

▸ **applyPostDefine**(`shader`, `renderPassState`): `string`

Apply defines syntax values

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | `string` |
| `renderPassState` | `RendererPassState` |

#### Returns

`string`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:384](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L384)

___

### setBindGroup

▸ **setBindGroup**(`groupIndex`, `group`): `void`

Set GPUBindGroup to the specified index slot

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupIndex` | `number` |
| `group` | `GPUBindGroup` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:407](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L407)

___

### destroy

▸ **destroy**(`force?`): `void`

Destroy and release render shader related resources

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Overrides

[ShaderPassBase](ShaderPassBase.md).[destroy](ShaderPassBase.md#destroy)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:941](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L941)

___

### destroyShader

▸ **destroyShader**(`instanceID`): `void`

Destroy a RenderShader object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instanceID` | `string` | instance ID of the RenderShader |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:984](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L984)

___

### getShader

▸ **getShader**(`instanceID`): [`RenderShaderPass`](RenderShaderPass.md)

Get the RenderShader object by specifying the RenderShader instance ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instanceID` | `string` | instance ID of the RenderShader |

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

RenderShader object

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:997](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L997)

___

### createShader

▸ **createShader**(`vs`, `fs`): `string`

Create a RenderShader with vertex shaders and fragment shaders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vs` | `string` | Vertex shader name |
| `fs` | `string` | Fragment shader name |

#### Returns

`string`

Returns the instance ID of the RenderShader

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShaderPass.ts:1007](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShaderPass.ts#L1007)

___

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

notice shader change

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[noticeShaderChange](ShaderPassBase.md#noticeshaderchange)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L83)

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

notice shader state change

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[noticeValueChange](ShaderPassBase.md#noticevaluechange)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L90)

___

### setStorageBuffer

▸ **setStorageBuffer**(`name`, `buffer`): `void`

set storage gpu buffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | buffer name |
| `buffer` | [`StorageGPUBuffer`](StorageGPUBuffer.md) | storage useAge gpu buffer |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setStorageBuffer](ShaderPassBase.md#setstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L99)

___

### setStructStorageBuffer

▸ **setStructStorageBuffer**\<`T`\>(`name`, `buffer`): `void`

set struct storage gpu buffer

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | buffer name |
| `buffer` | [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\> | struct storage useAge gpu buffer |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setStructStorageBuffer](ShaderPassBase.md#setstructstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L113)

___

### setUniformBuffer

▸ **setUniformBuffer**(`name`, `buffer`): `void`

set uniform gpu buffer min size 256

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buffer` | [`UniformGPUBuffer`](UniformGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformBuffer](ShaderPassBase.md#setuniformbuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L127)

___

### setDefine

▸ **setDefine**(`defineName`, `value`): `void`

set define value

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setDefine](ShaderPassBase.md#setdefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L141)

___

### hasDefine

▸ **hasDefine**(`defineName`): `boolean`

Whether there is a define key

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |

#### Returns

`boolean`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[hasDefine](ShaderPassBase.md#hasdefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L155)

___

### deleteDefine

▸ **deleteDefine**(`defineName`): `void`

delete define value

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[deleteDefine](ShaderPassBase.md#deletedefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L163)

___

### setUniformFloat

▸ **setUniformFloat**(`name`, `value`): `void`

set uniform float value

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformFloat](ShaderPassBase.md#setuniformfloat)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L173)

___

### setUniformVector2

▸ **setUniformVector2**(`name`, `value`): `void`

set uniform vector2 value

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformVector2](ShaderPassBase.md#setuniformvector2)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L187)

___

### setUniformVector3

▸ **setUniformVector3**(`name`, `value`): `void`

set uniform vector3 value

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformVector3](ShaderPassBase.md#setuniformvector3)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L201)

___

### setUniformVector4

▸ **setUniformVector4**(`name`, `value`): `void`

set uniform vector4 value

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformVector4](ShaderPassBase.md#setuniformvector4)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:214](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L214)

___

### setUniformColor

▸ **setUniformColor**(`name`, `value`): `void`

set uniform color value

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformColor](ShaderPassBase.md#setuniformcolor)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L227)

___

### setUniformArray

▸ **setUniformArray**(`name`, `value`): `void`

set uniform array value

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `Float32Array` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformArray](ShaderPassBase.md#setuniformarray)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L240)

___

### getUniform

▸ **getUniform**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniform](ShaderPassBase.md#getuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:256](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L256)

___

### getUniformFloat

▸ **getUniformFloat**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformFloat](ShaderPassBase.md#getuniformfloat)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L260)

___

### getUniformVector2

▸ **getUniformVector2**(`name`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformVector2](ShaderPassBase.md#getuniformvector2)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L264)

___

### getUniformVector3

▸ **getUniformVector3**(`name`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformVector3](ShaderPassBase.md#getuniformvector3)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L268)

___

### getUniformVector4

▸ **getUniformVector4**(`name`): `Vector4`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Vector4`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformVector4](ShaderPassBase.md#getuniformvector4)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L272)

___

### getUniformColor

▸ **getUniformColor**(`name`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Color`](Color.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformColor](ShaderPassBase.md#getuniformcolor)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:276](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L276)

___

### getBuffer

▸ **getBuffer**(`name`): `GPUBufferBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`GPUBufferBase`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getBuffer](ShaderPassBase.md#getbuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:280](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L280)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[applyUniform](ShaderPassBase.md#applyuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:288](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L288)
