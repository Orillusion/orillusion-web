# Class: RenderShader

## Hierarchy

- [`ShaderBase`](ShaderBase.md)

  ↳ **`RenderShader`**

### Constructors

- [constructor](RenderShader.md#constructor)

### Properties

- [useRz](RenderShader.md#userz)
- [vsName](RenderShader.md#vsname)
- [fsName](RenderShader.md#fsname)
- [shaderState](RenderShader.md#shaderstate)
- [textures](RenderShader.md#textures)
- [pipeline](RenderShader.md#pipeline)
- [bindGroupLayouts](RenderShader.md#bindgrouplayouts)
- [materialDataUniformBuffer](RenderShader.md#materialdatauniformbuffer)
- [envMap](RenderShader.md#envmap)
- [prefilterMap](RenderShader.md#prefiltermap)
- [instanceID](RenderShader.md#instanceid)
- [shaderVariant](RenderShader.md#shadervariant)
- [vsEntryPoint](RenderShader.md#vsentrypoint)
- [fsEntryPoint](RenderShader.md#fsentrypoint)
- [bindGroups](RenderShader.md#bindgroups)
- [shaderReflection](RenderShader.md#shaderreflection)
- [defineValue](RenderShader.md#definevalue)
- [constValues](RenderShader.md#constvalues)
- [uniforms](RenderShader.md#uniforms)

### Accessors

- [renderOrder](RenderShader.md#renderorder)
- [doubleSide](RenderShader.md#doubleside)
- [cullMode](RenderShader.md#cullmode)
- [frontFace](RenderShader.md#frontface)
- [depthBias](RenderShader.md#depthbias)
- [topology](RenderShader.md#topology)
- [blendMode](RenderShader.md#blendmode)
- [depthCompare](RenderShader.md#depthcompare)
- [baseColor](RenderShader.md#basecolor)

### Methods

- [setShaderEntry](RenderShader.md#setshaderentry)
- [setUniform](RenderShader.md#setuniform)
- [setTexture](RenderShader.md#settexture)
- [getTexture](RenderShader.md#gettexture)
- [genRenderPipeline](RenderShader.md#genrenderpipeline)
- [reBuild](RenderShader.md#rebuild)
- [apply](RenderShader.md#apply)
- [preCompile](RenderShader.md#precompile)
- [applyPostDefine](RenderShader.md#applypostdefine)
- [setBindGroup](RenderShader.md#setbindgroup)
- [destroy](RenderShader.md#destroy)
- [destroyShader](RenderShader.md#destroyshader)
- [getShader](RenderShader.md#getshader)
- [createShader](RenderShader.md#createshader)
- [noticeShaderChange](RenderShader.md#noticeshaderchange)
- [noticeValueChange](RenderShader.md#noticevaluechange)
- [setStorageBuffer](RenderShader.md#setstoragebuffer)
- [setStructStorageBuffer](RenderShader.md#setstructstoragebuffer)
- [setUniformBuffer](RenderShader.md#setuniformbuffer)
- [setDefine](RenderShader.md#setdefine)
- [hasDefine](RenderShader.md#hasdefine)
- [deleteDefine](RenderShader.md#deletedefine)
- [setUniformFloat](RenderShader.md#setuniformfloat)
- [setUniformVector2](RenderShader.md#setuniformvector2)
- [setUniformVector3](RenderShader.md#setuniformvector3)
- [setUniformVector4](RenderShader.md#setuniformvector4)
- [setUniformColor](RenderShader.md#setuniformcolor)
- [setUniformArray](RenderShader.md#setuniformarray)
- [getUniform](RenderShader.md#getuniform)

## Constructors

### constructor

• **new RenderShader**(`vs`, `fs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | `string` |
| `fs` | `string` |

#### Overrides

[ShaderBase](ShaderBase.md).[constructor](ShaderBase.md#constructor)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L83)

## Properties

### useRz

• **useRz**: `boolean` = `false`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L32)

___

### vsName

• **vsName**: `string`

Vertex shader name

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L37)

___

### fsName

• **fsName**: `string`

Fragment shader name

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L42)

___

### shaderState

• **shaderState**: `ShaderState`

State of the shader

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L47)

___

### textures

• **textures**: `Object`

The collection of textures used in shading

#### Index signature

▪ [name: `string`]: [`Texture`](Texture.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L52)

___

### pipeline

• **pipeline**: `GPURenderPipeline`

Render pipeline

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L57)

___

### bindGroupLayouts

• **bindGroupLayouts**: `GPUBindGroupLayout`[]

BindGroup layout

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L62)

___

### materialDataUniformBuffer

• **materialDataUniformBuffer**: [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

Uniform data for materials

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L67)

___

### envMap

• **envMap**: [`Texture`](Texture.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L69)

___

### prefilterMap

• **prefilterMap**: [`Texture`](Texture.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L71)

___

### instanceID

• `Readonly` **instanceID**: `string`

Shader Unique instance id

#### Inherited from

[ShaderBase](ShaderBase.md).[instanceID](ShaderBase.md#instanceid)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L20)

___

### shaderVariant

• **shaderVariant**: `string`

Shader variant value

#### Inherited from

[ShaderBase](ShaderBase.md).[shaderVariant](ShaderBase.md#shadervariant)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L25)

___

### vsEntryPoint

• **vsEntryPoint**: `string`

Vertex stage entry point name

#### Inherited from

[ShaderBase](ShaderBase.md).[vsEntryPoint](ShaderBase.md#vsentrypoint)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L30)

___

### fsEntryPoint

• **fsEntryPoint**: `string`

Fragment stage entry point name

#### Inherited from

[ShaderBase](ShaderBase.md).[fsEntryPoint](ShaderBase.md#fsentrypoint)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L35)

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

BindGroup collection

#### Inherited from

[ShaderBase](ShaderBase.md).[bindGroups](ShaderBase.md#bindgroups)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L40)

___

### shaderReflection

• **shaderReflection**: `ShaderReflection`

Shader reflection info

#### Inherited from

[ShaderBase](ShaderBase.md).[shaderReflection](ShaderBase.md#shaderreflection)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L45)

___

### defineValue

• **defineValue**: `Object`

The defined syntax value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderBase](ShaderBase.md).[defineValue](ShaderBase.md#definevalue)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L50)

___

### constValues

• **constValues**: `Object`

The constant value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderBase](ShaderBase.md).[constValues](ShaderBase.md#constvalues)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L55)

___

### uniforms

• **uniforms**: `Object`

Uniforms data collection

#### Index signature

▪ [name: `string`]: `UniformNode`

#### Inherited from

[ShaderBase](ShaderBase.md).[uniforms](ShaderBase.md#uniforms)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L60)

## Accessors

### renderOrder

• `get` **renderOrder**(): `number`

Blend mode

#### Returns

`number`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L119)

• `set` **renderOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L123)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

Cull mode

#### Returns

`boolean`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L133)

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L137)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

get render face cull mode

#### Returns

`GPUCullMode`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L148)

• `set` **cullMode**(`value`): `void`

set render face cull mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L155)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

get front face mode

**`GPUFront Face`**

#### Returns

`GPUFrontFace`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L166)

• `set` **frontFace**(`value`): `void`

set front face mode

**`GPUFront Face`**

value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L174)

___

### depthBias

• `get` **depthBias**(): `number`

Depth bias

#### Returns

`number`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L184)

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L188)

___

### topology

• `get` **topology**(): `GPUPrimitiveTopology`

Primitive topology

#### Returns

`GPUPrimitiveTopology`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L198)

• `set` **topology**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L202)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

Blend mode

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L212)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L216)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

Depth compare function

#### Returns

`GPUCompareFunction`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L229)

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L233)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:283](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L283)

• `set` **baseColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:287](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L287)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:245](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L245)

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

[ShaderBase](ShaderBase.md).[setUniform](ShaderBase.md#setuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:255](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L255)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:265](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L265)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:296](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L296)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:305](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L305)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:315](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L315)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:329](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L329)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:356](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L356)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:369](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L369)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:392](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L392)

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

[ShaderBase](ShaderBase.md).[destroy](ShaderBase.md#destroy)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:901](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L901)

___

### destroyShader

▸ `Static` **destroyShader**(`instanceID`): `void`

Destroy a RenderShader object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instanceID` | `string` | instance ID of the RenderShader |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:942](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L942)

___

### getShader

▸ `Static` **getShader**(`instanceID`): [`RenderShader`](RenderShader.md)

Get the RenderShader object by specifying the RenderShader instance ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instanceID` | `string` | instance ID of the RenderShader |

#### Returns

[`RenderShader`](RenderShader.md)

RenderShader object

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:955](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L955)

___

### createShader

▸ `Static` **createShader**(`vs`, `fs`): `string`

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:965](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L965)

___

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

notice shader change

#### Returns

`void`

#### Inherited from

[ShaderBase](ShaderBase.md).[noticeShaderChange](ShaderBase.md#noticeshaderchange)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L77)

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

notice shader state change

#### Returns

`void`

#### Inherited from

[ShaderBase](ShaderBase.md).[noticeValueChange](ShaderBase.md#noticevaluechange)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L84)

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

[ShaderBase](ShaderBase.md).[setStorageBuffer](ShaderBase.md#setstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L93)

___

### setStructStorageBuffer

▸ **setStructStorageBuffer**<`T`\>(`name`, `buffer`): `void`

set struct storage gpu buffer

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | buffer name |
| `buffer` | [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)<`T`\> | struct storage useAge gpu buffer |

#### Returns

`void`

#### Inherited from

[ShaderBase](ShaderBase.md).[setStructStorageBuffer](ShaderBase.md#setstructstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L107)

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

[ShaderBase](ShaderBase.md).[setUniformBuffer](ShaderBase.md#setuniformbuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L121)

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

[ShaderBase](ShaderBase.md).[setDefine](ShaderBase.md#setdefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L135)

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

[ShaderBase](ShaderBase.md).[hasDefine](ShaderBase.md#hasdefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L149)

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

[ShaderBase](ShaderBase.md).[deleteDefine](ShaderBase.md#deletedefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L157)

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

[ShaderBase](ShaderBase.md).[setUniformFloat](ShaderBase.md#setuniformfloat)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L167)

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

[ShaderBase](ShaderBase.md).[setUniformVector2](ShaderBase.md#setuniformvector2)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L181)

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

[ShaderBase](ShaderBase.md).[setUniformVector3](ShaderBase.md#setuniformvector3)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L195)

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

[ShaderBase](ShaderBase.md).[setUniformVector4](ShaderBase.md#setuniformvector4)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L208)

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

[ShaderBase](ShaderBase.md).[setUniformColor](ShaderBase.md#setuniformcolor)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L221)

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

[ShaderBase](ShaderBase.md).[setUniformArray](ShaderBase.md#setuniformarray)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:234](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L234)

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

[ShaderBase](ShaderBase.md).[getUniform](ShaderBase.md#getuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L250)
