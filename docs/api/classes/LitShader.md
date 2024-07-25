# Class: LitShader

## Hierarchy

- [`Shader`](Shader.md)

  ↳ **`LitShader`**

### Constructors

- [constructor](LitShader.md#constructor)

### Properties

- [computes](LitShader.md#computes)
- [passShader](LitShader.md#passshader)

### Accessors

- [\_MainTex](LitShader.md#_maintex)
- [\_BumpMap](LitShader.md#_bumpmap)
- [\_MaskTex](LitShader.md#_masktex)
- [\_UVTransform](LitShader.md#_uvtransform)
- [\_Metallic](LitShader.md#_metallic)
- [\_Roughness](LitShader.md#_roughness)
- [\_MainColor](LitShader.md#_maincolor)
- [\_AlphaCutoff](LitShader.md#_alphacutoff)
- [\_DoubleSidedEnable](LitShader.md#_doublesidedenable)
- [\_SurfaceType](LitShader.md#_surfacetype)
- [\_AlphaCutoffEnable](LitShader.md#_alphacutoffenable)

### Methods

- [addRenderPass](LitShader.md#addrenderpass)
- [removeShader](LitShader.md#removeshader)
- [removeShaderByIndex](LitShader.md#removeshaderbyindex)
- [getSubShaders](LitShader.md#getsubshaders)
- [hasSubShaders](LitShader.md#hassubshaders)
- [getDefaultShaders](LitShader.md#getdefaultshaders)
- [getDefaultColorShader](LitShader.md#getdefaultcolorshader)
- [setDefine](LitShader.md#setdefine)
- [hasDefine](LitShader.md#hasdefine)
- [deleteDefine](LitShader.md#deletedefine)
- [setUniform](LitShader.md#setuniform)
- [setUniformFloat](LitShader.md#setuniformfloat)
- [setUniformVector2](LitShader.md#setuniformvector2)
- [setUniformVector3](LitShader.md#setuniformvector3)
- [setUniformVector4](LitShader.md#setuniformvector4)
- [setUniformColor](LitShader.md#setuniformcolor)
- [getUniform](LitShader.md#getuniform)
- [getUniformFloat](LitShader.md#getuniformfloat)
- [getUniformVector2](LitShader.md#getuniformvector2)
- [getUniformVector3](LitShader.md#getuniformvector3)
- [getUniformVector4](LitShader.md#getuniformvector4)
- [getUniformColor](LitShader.md#getuniformcolor)
- [setTexture](LitShader.md#settexture)
- [getTexture](LitShader.md#gettexture)
- [setUniformBuffer](LitShader.md#setuniformbuffer)
- [getUniformBuffer](LitShader.md#getuniformbuffer)
- [setStorageBuffer](LitShader.md#setstoragebuffer)
- [getStorageBuffer](LitShader.md#getstoragebuffer)
- [setStructStorageBuffer](LitShader.md#setstructstoragebuffer)
- [getStructStorageBuffer](LitShader.md#getstructstoragebuffer)
- [noticeValueChange](LitShader.md#noticevaluechange)
- [destroy](LitShader.md#destroy)
- [clone](LitShader.md#clone)
- [applyUniform](LitShader.md#applyuniform)
- [setDefault](LitShader.md#setdefault)

## Constructors

### constructor

• **new LitShader**(): [`LitShader`](LitShader.md)

#### Returns

[`LitShader`](LitShader.md)

#### Overrides

[Shader](Shader.md).[constructor](Shader.md#constructor)

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L15)

## Properties

### computes

• **computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Inherited from

[Shader](Shader.md).[computes](Shader.md#computes)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L19)

___

### passShader

• **passShader**: `Map`\<`PassType`, [`RenderShaderPass`](RenderShaderPass.md)[]\>

#### Inherited from

[Shader](Shader.md).[passShader](Shader.md#passshader)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L21)

## Accessors

### \_MainTex

• `set` **_MainTex**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L67)

___

### \_BumpMap

• `set` **_BumpMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L71)

___

### \_MaskTex

• `set` **_MaskTex**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L75)

___

### \_UVTransform

• `set` **_UVTransform**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L79)

___

### \_Metallic

• `set` **_Metallic**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L83)

___

### \_Roughness

• `set` **_Roughness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L87)

___

### \_MainColor

• `set` **_MainColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L91)

___

### \_AlphaCutoff

• `set` **_AlphaCutoff**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L95)

___

### \_DoubleSidedEnable

• `set` **_DoubleSidedEnable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L99)

___

### \_SurfaceType

• `set` **_SurfaceType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L104)

___

### \_AlphaCutoffEnable

• `set` **_AlphaCutoffEnable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L113)

## Methods

### addRenderPass

▸ **addRenderPass**(`renderShader`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[addRenderPass](Shader.md#addrenderpass)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L28)

___

### removeShader

▸ **removeShader**(`renderShader`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[removeShader](Shader.md#removeshader)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L38)

___

### removeShaderByIndex

▸ **removeShaderByIndex**(`passType`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `passType` | `PassType` | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[removeShaderByIndex](Shader.md#removeshaderbyindex)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L52)

___

### getSubShaders

▸ **getSubShaders**(`passType`): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `PassType` |

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Shader](Shader.md).[getSubShaders](Shader.md#getsubshaders)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L63)

___

### hasSubShaders

▸ **hasSubShaders**(`passType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `PassType` |

#### Returns

`boolean`

#### Inherited from

[Shader](Shader.md).[hasSubShaders](Shader.md#hassubshaders)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L67)

___

### getDefaultShaders

▸ **getDefaultShaders**(): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Shader](Shader.md).[getDefaultShaders](Shader.md#getdefaultshaders)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L72)

___

### getDefaultColorShader

▸ **getDefaultColorShader**(): [`RenderShaderPass`](RenderShaderPass.md)

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

#### Inherited from

[Shader](Shader.md).[getDefaultColorShader](Shader.md#getdefaultcolorshader)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L76)

___

### setDefine

▸ **setDefine**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `boolean` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setDefine](Shader.md#setdefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L80)

___

### hasDefine

▸ **hasDefine**(`arg0`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`boolean`

#### Inherited from

[Shader](Shader.md).[hasDefine](Shader.md#hasdefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L88)

___

### deleteDefine

▸ **deleteDefine**(`arg0`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[deleteDefine](Shader.md#deletedefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L99)

___

### setUniform

▸ **setUniform**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `any` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniform](Shader.md#setuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L107)

___

### setUniformFloat

▸ **setUniformFloat**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `number` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformFloat](Shader.md#setuniformfloat)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L115)

___

### setUniformVector2

▸ **setUniformVector2**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformVector2](Shader.md#setuniformvector2)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L123)

___

### setUniformVector3

▸ **setUniformVector3**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformVector3](Shader.md#setuniformvector3)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L131)

___

### setUniformVector4

▸ **setUniformVector4**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `Vector4` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformVector4](Shader.md#setuniformvector4)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L139)

___

### setUniformColor

▸ **setUniformColor**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformColor](Shader.md#setuniformcolor)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L147)

___

### getUniform

▸ **getUniform**(`arg0`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`any`

#### Inherited from

[Shader](Shader.md).[getUniform](Shader.md#getuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L155)

___

### getUniformFloat

▸ **getUniformFloat**(`arg0`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`number`

#### Inherited from

[Shader](Shader.md).[getUniformFloat](Shader.md#getuniformfloat)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L159)

___

### getUniformVector2

▸ **getUniformVector2**(`arg0`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Shader](Shader.md).[getUniformVector2](Shader.md#getuniformvector2)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L163)

___

### getUniformVector3

▸ **getUniformVector3**(`arg0`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Shader](Shader.md).[getUniformVector3](Shader.md#getuniformvector3)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L167)

___

### getUniformVector4

▸ **getUniformVector4**(`arg0`): `Vector4`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`Vector4`

#### Inherited from

[Shader](Shader.md).[getUniformVector4](Shader.md#getuniformvector4)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L171)

___

### getUniformColor

▸ **getUniformColor**(`arg0`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Color`](Color.md)

#### Inherited from

[Shader](Shader.md).[getUniformColor](Shader.md#getuniformcolor)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L175)

___

### setTexture

▸ **setTexture**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setTexture](Shader.md#settexture)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L179)

___

### getTexture

▸ **getTexture**(`arg0`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[Shader](Shader.md).[getTexture](Shader.md#gettexture)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L188)

___

### setUniformBuffer

▸ **setUniformBuffer**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`UniformGPUBuffer`](UniformGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformBuffer](Shader.md#setuniformbuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:192](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L192)

___

### getUniformBuffer

▸ **getUniformBuffer**(`arg0`): `GPUBufferBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`GPUBufferBase`

#### Inherited from

[Shader](Shader.md).[getUniformBuffer](Shader.md#getuniformbuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L200)

___

### setStorageBuffer

▸ **setStorageBuffer**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`StorageGPUBuffer`](StorageGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setStorageBuffer](Shader.md#setstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L204)

___

### getStorageBuffer

▸ **getStorageBuffer**(`arg0`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Inherited from

[Shader](Shader.md).[getStorageBuffer](Shader.md#getstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L212)

___

### setStructStorageBuffer

▸ **setStructStorageBuffer**\<`T`\>(`arg0`, `arg1`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\> |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setStructStorageBuffer](Shader.md#setstructstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L216)

___

### getStructStorageBuffer

▸ **getStructStorageBuffer**(`arg0`): `GPUBufferBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`GPUBufferBase`

#### Inherited from

[Shader](Shader.md).[getStructStorageBuffer](Shader.md#getstructstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L224)

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[noticeValueChange](Shader.md#noticevaluechange)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L228)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[destroy](Shader.md#destroy)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L236)

___

### clone

▸ **clone**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Inherited from

[Shader](Shader.md).[clone](Shader.md#clone)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L240)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[applyUniform](Shader.md#applyuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:249](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L249)

___

### setDefault

▸ **setDefault**(): `void`

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitShader.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitShader.ts#L37)
