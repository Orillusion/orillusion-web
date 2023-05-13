# Class: RenderShader

## Hierarchy

- [`ShaderBase`](ShaderBase.md)

  ↳ **`RenderShader`**


### Properties

- [useRz](RenderShader.md#userz)
- [vsName](RenderShader.md#vsname)
- [fsName](RenderShader.md#fsname)
- [shaderState](RenderShader.md#shaderstate)
- [textures](RenderShader.md#textures)
- [pipeline](RenderShader.md#pipeline)
- [bindGroupLayouts](RenderShader.md#bindgrouplayouts)
- [materialDataUniformBuffer](RenderShader.md#materialdatauniformbuffer)
- [instanceID](RenderShader.md#instanceid)
- [shaderVariant](RenderShader.md#shadervariant)
- [vsEntryPoint](RenderShader.md#vsentrypoint)
- [fsEntryPoint](RenderShader.md#fsentrypoint)
- [bindGroups](RenderShader.md#bindgroups)
- [shaderReflection](RenderShader.md#shaderreflection)
- [defineValue](RenderShader.md#definevalue)
- [constValues](RenderShader.md#constvalues)
- [uniforms](RenderShader.md#uniforms)

### Constructors

- [constructor](RenderShader.md#constructor)

### Accessors

- [cullMode](RenderShader.md#cullmode)
- [frontFace](RenderShader.md#frontface)
- [depthBias](RenderShader.md#depthbias)
- [topology](RenderShader.md#topology)
- [blendMode](RenderShader.md#blendmode)
- [depthCompare](RenderShader.md#depthcompare)

### Methods

- [createShader](RenderShader.md#createshader)
- [destroyShader](RenderShader.md#destroyshader)
- [getShader](RenderShader.md#getshader)
- [setPassShader](RenderShader.md#setpassshader)
- [getPassShader](RenderShader.md#getpassshader)
- [setShaderEntry](RenderShader.md#setshaderentry)
- [setTexture](RenderShader.md#settexture)
- [getTexture](RenderShader.md#gettexture)
- [genRenderPipeline](RenderShader.md#genrenderpipeline)
- [reBuild](RenderShader.md#rebuild)
- [apply](RenderShader.md#apply)
- [preCompile](RenderShader.md#precompile)
- [applyPostDefine](RenderShader.md#applypostdefine)
- [setBindGroup](RenderShader.md#setbindgroup)
- [setDefault](RenderShader.md#setdefault)
- [destroy](RenderShader.md#destroy)
- [noticeShaderChange](RenderShader.md#noticeshaderchange)
- [noticeStateChange](RenderShader.md#noticestatechange)
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

### instanceID

• `Readonly` **instanceID**: `string`

Shader Unique instance id

#### Inherited from

[ShaderBase](ShaderBase.md).[instanceID](ShaderBase.md#instanceid)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L19)

___

### shaderVariant

• **shaderVariant**: `string`

Shader variant value

#### Inherited from

[ShaderBase](ShaderBase.md).[shaderVariant](ShaderBase.md#shadervariant)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L24)

___

### vsEntryPoint

• **vsEntryPoint**: `string`

Vertex stage entry point name

#### Inherited from

[ShaderBase](ShaderBase.md).[vsEntryPoint](ShaderBase.md#vsentrypoint)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L29)

___

### fsEntryPoint

• **fsEntryPoint**: `string`

Fragment stage entry point name

#### Inherited from

[ShaderBase](ShaderBase.md).[fsEntryPoint](ShaderBase.md#fsentrypoint)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L34)

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

BindGroup collection

#### Inherited from

[ShaderBase](ShaderBase.md).[bindGroups](ShaderBase.md#bindgroups)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L39)

___

### shaderReflection

• **shaderReflection**: `ShaderReflection`

Shader reflection info

#### Inherited from

[ShaderBase](ShaderBase.md).[shaderReflection](ShaderBase.md#shaderreflection)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L44)

___

### defineValue

• **defineValue**: `Object`

The defined syntax value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderBase](ShaderBase.md).[defineValue](ShaderBase.md#definevalue)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L49)

___

### constValues

• **constValues**: `Object`

The constant value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderBase](ShaderBase.md).[constValues](ShaderBase.md#constvalues)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L54)

___

### uniforms

• **uniforms**: `Object`

Uniforms data collection

#### Index signature

▪ [name: `string`]: `UniformNode`

#### Inherited from

[ShaderBase](ShaderBase.md).[uniforms](ShaderBase.md#uniforms)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L59)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L85)

## Accessors

### cullMode

• `get` **cullMode**(): `GPUCullMode`

Cull mode

#### Returns

`GPUCullMode`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L120)

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L124)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

Front face

#### Returns

`GPUFrontFace`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L134)

• `set` **frontFace**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L138)

___

### depthBias

• `get` **depthBias**(): `number`

Depth bias

#### Returns

`number`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L148)

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L152)

___

### topology

• `get` **topology**(): `GPUPrimitiveTopology`

Primitive topology

#### Returns

`GPUPrimitiveTopology`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L162)

• `set` **topology**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L166)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

Blend mode

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L176)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L180)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

Depth compare function

#### Returns

`GPUCompareFunction`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L190)

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L194)

## Methods

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L207)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:218](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L218)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L231)

___

### setPassShader

▸ **setPassShader**(`rendererType`, `materialPass`): `void`

Set the material shader for the specified render type

#### Parameters

| Name | Type |
| :------ | :------ |
| `rendererType` | `RendererType` |
| `materialPass` | `MaterialBase` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L240)

___

### getPassShader

▸ **getPassShader**(`rendererType`): `MaterialBase`

Get the material shader for the specified render type

#### Parameters

| Name | Type |
| :------ | :------ |
| `rendererType` | `RendererType` |

#### Returns

`MaterialBase`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:249](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L249)

___

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:259](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L259)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:269](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L269)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:287](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L287)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:296](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L296)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:306](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L306)

___

### apply

▸ **apply**(`geometry`, `materialPass`, `rendererPassState`, `noticeFun?`): `void`

Apply render shader state value

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `materialPass` | [`MaterialPass`](MaterialPass.md) |
| `rendererPassState` | `RendererPassState` |
| `noticeFun?` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L320)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L347)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:360](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L360)

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

[src/gfx/graphics/webGpu/shader/RenderShader.ts:396](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L396)

___

### setDefault

▸ **setDefault**(): `void`

Set the render shader default value

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:403](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L403)

___

### destroy

▸ **destroy**(): `void`

Destroy and release render shader related resources

#### Returns

`void`

#### Overrides

[ShaderBase](ShaderBase.md).[destroy](ShaderBase.md#destroy)

#### Defined in

[src/gfx/graphics/webGpu/shader/RenderShader.ts:431](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/RenderShader.ts#L431)

___

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

notice shader change

#### Returns

`void`

#### Inherited from

[ShaderBase](ShaderBase.md).[noticeShaderChange](ShaderBase.md#noticeshaderchange)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L76)

___

### noticeStateChange

▸ **noticeStateChange**(): `void`

notice shader state change

#### Returns

`void`

#### Inherited from

[ShaderBase](ShaderBase.md).[noticeStateChange](ShaderBase.md#noticestatechange)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L83)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L92)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L103)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L114)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L125)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L135)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L143)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L153)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L167)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L180)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L193)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:206](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L206)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:219](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L219)
