# Class: RenderShader

## Hierarchy

- [`ShaderBase`](ShaderBase.md)

  ↳ **`RenderShader`**


### Properties

- [useRz](RenderShader.md#userz)
- [renderShader](RenderShader.md#rendershader)
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

### Methods

- [setPassShader](RenderShader.md#setpassshader)
- [getPassShader](RenderShader.md#getpassshader)
- [setShaderEntry](RenderShader.md#setshaderentry)
- [setDefault](RenderShader.md#setdefault)
- [createShader](RenderShader.md#createshader)
- [destoryShader](RenderShader.md#destoryshader)
- [getShader](RenderShader.md#getshader)
- [setTexture](RenderShader.md#settexture)
- [getTexture](RenderShader.md#gettexture)
- [genRenderPipeline](RenderShader.md#genrenderpipeline)
- [reBuild](RenderShader.md#rebuild)
- [apply](RenderShader.md#apply)
- [preComplie](RenderShader.md#precomplie)
- [applyPostDefine](RenderShader.md#applypostdefine)
- [checkBuffer](RenderShader.md#checkbuffer)
- [setBindGroup](RenderShader.md#setbindgroup)
- [destory](RenderShader.md#destory)
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

### Constructors

- [constructor](RenderShader.md#constructor)

### Accessors

- [cullMode](RenderShader.md#cullmode)
- [frontFace](RenderShader.md#frontface)
- [depthBias](RenderShader.md#depthbias)
- [topology](RenderShader.md#topology)
- [blendMode](RenderShader.md#blendmode)
- [depthCompare](RenderShader.md#depthcompare)

## Properties

### useRz

• **useRz**: `boolean` = `false`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L25)

___

### renderShader

▪ `Static` **renderShader**: `Map`<`string`, [`RenderShader`](RenderShader.md)\>

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L65)

___

### vsName

• **vsName**: `string`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L85)

___

### fsName

• **fsName**: `string`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L86)

___

### shaderState

• **shaderState**: `ShaderState`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L87)

___

### textures

• **textures**: `Object`

#### Index signature

▪ [name: `string`]: [`Texture`](Texture.md)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L88)

___

### pipeline

• **pipeline**: `GPURenderPipeline`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L89)

___

### bindGroupLayouts

• **bindGroupLayouts**: `GPUBindGroupLayout`[]

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L90)

___

### materialDataUniformBuffer

• **materialDataUniformBuffer**: `MatialDataUniformGPUBuffer`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L101)

___

### instanceID

• `Readonly` **instanceID**: `string`

#### Inherited from

[ShaderBase](ShaderBase.md).[instanceID](ShaderBase.md#instanceid)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L7)

___

### shaderVariant

• **shaderVariant**: `string`

#### Inherited from

[ShaderBase](ShaderBase.md).[shaderVariant](ShaderBase.md#shadervariant)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L8)

___

### vsEntryPoint

• **vsEntryPoint**: `string`

#### Inherited from

[ShaderBase](ShaderBase.md).[vsEntryPoint](ShaderBase.md#vsentrypoint)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L9)

___

### fsEntryPoint

• **fsEntryPoint**: `string`

#### Inherited from

[ShaderBase](ShaderBase.md).[fsEntryPoint](ShaderBase.md#fsentrypoint)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L10)

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

#### Inherited from

[ShaderBase](ShaderBase.md).[bindGroups](ShaderBase.md#bindgroups)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L11)

___

### shaderReflection

• **shaderReflection**: `ShaderReflection`

#### Inherited from

[ShaderBase](ShaderBase.md).[shaderReflection](ShaderBase.md#shaderreflection)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L12)

___

### defineValue

• **defineValue**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderBase](ShaderBase.md).[defineValue](ShaderBase.md#definevalue)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L13)

___

### constValues

• **constValues**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderBase](ShaderBase.md).[constValues](ShaderBase.md#constvalues)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L14)

___

### uniforms

• **uniforms**: `Object`

#### Index signature

▪ [name: `string`]: `UniformNode`

#### Inherited from

[ShaderBase](ShaderBase.md).[uniforms](ShaderBase.md#uniforms)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L15)

## Methods

### setPassShader

▸ **setPassShader**(`rendererType`, `materialPass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rendererType` | `RendererType` |
| `materialPass` | `MaterialBase` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L26)

___

### getPassShader

▸ **getPassShader**(`rendererType`): `MaterialBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rendererType` | `RendererType` |

#### Returns

`MaterialBase`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L30)

___

### setShaderEntry

▸ **setShaderEntry**(`vsEntryPoint?`, `fsEntryPoint?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vsEntryPoint` | `string` |
| `fsEntryPoint` | `string` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L35)

___

### setDefault

▸ **setDefault**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L40)

___

### createShader

▸ `Static` **createShader**(`vs`, `fs`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | `string` |
| `fs` | `string` |

#### Returns

`string`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L67)

___

### destoryShader

▸ `Static` **destoryShader**(`instanceID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceID` | `string` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L73)

___

### getShader

▸ `Static` **getShader**(`instanceID`): [`RenderShader`](RenderShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceID` | `string` |

#### Returns

[`RenderShader`](RenderShader.md)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L81)

___

### setTexture

▸ **setTexture**(`name`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L215)

___

### getTexture

▸ **getTexture**(`name`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L228)

___

### genRenderPipeline

▸ **genRenderPipeline**(`geometry`, `renderPassState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `renderPassState` | `RendererPassState` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:234](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L234)

___

### reBuild

▸ **reBuild**(`geometry`, `rendererPassState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `rendererPassState` | `RendererPassState` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:353](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L353)

___

### apply

▸ **apply**(`geometry`, `rendererPassState`, `noticeFun?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `rendererPassState` | `RendererPassState` |
| `noticeFun?` | `Function` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:360](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L360)

___

### preComplie

▸ **preComplie**(`geometry`, `material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `material` | [`MaterialPass`](MaterialPass.md) |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:448](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L448)

___

### applyPostDefine

▸ **applyPostDefine**(`shader`, `renderPassState`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | `string` |
| `renderPassState` | `RendererPassState` |

#### Returns

`string`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:455](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L455)

___

### checkBuffer

▸ **checkBuffer**(`bufferName`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufferName` | `string` |
| `buffer` | `GPUBufferBase` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:770](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L770)

___

### setBindGroup

▸ **setBindGroup**(`groupIndex`, `group`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupIndex` | `number` |
| `group` | `GPUBindGroup` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:801](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L801)

___

### destory

▸ **destory**(): `void`

#### Returns

`void`

#### Overrides

[ShaderBase](ShaderBase.md).[destory](ShaderBase.md#destory)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:805](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L805)

___

### setStorageBuffer

▸ **setStorageBuffer**(`name`, `buffer`): `void`

set storage gpu buffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | buffer name |
| `buffer` | `StorageGPUBuffer` | storage useAge gpu buffer |

#### Returns

`void`

#### Inherited from

[ShaderBase](ShaderBase.md).[setStorageBuffer](ShaderBase.md#setstoragebuffer)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L31)

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
| `buffer` | `StructStorageGPUBuffer`<`T`\> | struct storage useAge gpu buffer |

#### Returns

`void`

#### Inherited from

[ShaderBase](ShaderBase.md).[setStructStorageBuffer](ShaderBase.md#setstructstoragebuffer)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L46)

___

### setUniformBuffer

▸ **setUniformBuffer**(`name`, `buffer`): `void`

set uniform gpu buffer min size 256

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buffer` | `UniformGPUBuffer` |

#### Returns

`void`

#### Inherited from

[ShaderBase](ShaderBase.md).[setUniformBuffer](ShaderBase.md#setuniformbuffer)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L61)

___

### setDefine

▸ **setDefine**(`defineName`, `value`): `void`

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

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L71)

___

### hasDefine

▸ **hasDefine**(`defineName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |

#### Returns

`boolean`

#### Inherited from

[ShaderBase](ShaderBase.md).[hasDefine](ShaderBase.md#hasdefine)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L75)

___

### deleteDefine

▸ **deleteDefine**(`defineName`): `void`

删除定义

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |

#### Returns

`void`

#### Inherited from

[ShaderBase](ShaderBase.md).[deleteDefine](ShaderBase.md#deletedefine)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L83)

___

### setUniformFloat

▸ **setUniformFloat**(`name`, `value`): `void`

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

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L88)

___

### setUniformVector2

▸ **setUniformVector2**(`name`, `value`): `void`

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

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L96)

___

### setUniformVector3

▸ **setUniformVector3**(`name`, `value`): `void`

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

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L104)

___

### setUniformVector4

▸ **setUniformVector4**(`name`, `value`): `void`

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

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L112)

___

### setUniformColor

▸ **setUniformColor**(`name`, `value`): `void`

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

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L120)

___

### setUniformArray

▸ **setUniformArray**(`name`, `value`): `void`

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

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L128)

## Constructors

### constructor

• **new RenderShader**(`vsName`, `fsName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vsName` | `string` |
| `fsName` | `string` |

#### Overrides

[ShaderBase](ShaderBase.md).[constructor](ShaderBase.md#constructor)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L107)

## Accessors

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L146)

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L150)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

#### Returns

`GPUFrontFace`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L157)

• `set` **frontFace**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L161)

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L168)

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L172)

___

### topology

• `get` **topology**(): `GPUPrimitiveTopology`

#### Returns

`GPUPrimitiveTopology`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L179)

• `set` **topology**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:183](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L183)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L190)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L194)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L201)

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/RenderShader.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/RenderShader.ts#L205)
