# Class: Shader

## Hierarchy

- **`Shader`**

  ↳ [`LitHairShader`](LitHairShader.md)

  ↳ [`LitSSSShader`](LitSSSShader.md)

  ↳ [`LitShader`](LitShader.md)

  ↳ [`QuadShader`](QuadShader.md)

  ↳ [`ReflectionShader`](ReflectionShader.md)

  ↳ [`SkyShader`](SkyShader.md)

  ↳ [`StandShader`](StandShader.md)

  ↳ [`UnLitShader`](UnLitShader.md)

  ↳ [`UnLitTexArrayShader`](UnLitTexArrayShader.md)

### Constructors

- [constructor](Shader.md#constructor)

### Properties

- [computes](Shader.md#computes)
- [passShader](Shader.md#passshader)

### Methods

- [addRenderPass](Shader.md#addrenderpass)
- [removeShader](Shader.md#removeshader)
- [removeShaderByIndex](Shader.md#removeshaderbyindex)
- [getSubShaders](Shader.md#getsubshaders)
- [hasSubShaders](Shader.md#hassubshaders)
- [getDefaultShaders](Shader.md#getdefaultshaders)
- [getDefaultColorShader](Shader.md#getdefaultcolorshader)
- [setDefine](Shader.md#setdefine)
- [hasDefine](Shader.md#hasdefine)
- [deleteDefine](Shader.md#deletedefine)
- [setUniform](Shader.md#setuniform)
- [setUniformFloat](Shader.md#setuniformfloat)
- [setUniformVector2](Shader.md#setuniformvector2)
- [setUniformVector3](Shader.md#setuniformvector3)
- [setUniformVector4](Shader.md#setuniformvector4)
- [setUniformColor](Shader.md#setuniformcolor)
- [getUniform](Shader.md#getuniform)
- [getUniformFloat](Shader.md#getuniformfloat)
- [getUniformVector2](Shader.md#getuniformvector2)
- [getUniformVector3](Shader.md#getuniformvector3)
- [getUniformVector4](Shader.md#getuniformvector4)
- [getUniformColor](Shader.md#getuniformcolor)
- [setTexture](Shader.md#settexture)
- [getTexture](Shader.md#gettexture)
- [setUniformBuffer](Shader.md#setuniformbuffer)
- [getUniformBuffer](Shader.md#getuniformbuffer)
- [setStorageBuffer](Shader.md#setstoragebuffer)
- [getStorageBuffer](Shader.md#getstoragebuffer)
- [setStructStorageBuffer](Shader.md#setstructstoragebuffer)
- [getStructStorageBuffer](Shader.md#getstructstoragebuffer)
- [noticeValueChange](Shader.md#noticevaluechange)
- [destroy](Shader.md#destroy)
- [clone](Shader.md#clone)
- [applyUniform](Shader.md#applyuniform)

## Constructors

### constructor

• **new Shader**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L23)

## Properties

### computes

• **computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L19)

___

### passShader

• **passShader**: `Map`\<`PassType`, [`RenderShaderPass`](RenderShaderPass.md)[]\>

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L21)

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

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L67)

___

### getDefaultShaders

▸ **getDefaultShaders**(): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L72)

___

### getDefaultColorShader

▸ **getDefaultColorShader**(): [`RenderShaderPass`](RenderShaderPass.md)

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

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

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L224)

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L228)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L236)

___

### clone

▸ **clone**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L240)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:249](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L249)
