# Class: LitSSSShader

## Hierarchy

- [`Shader`](Shader.md)

  ↳ **`LitSSSShader`**

### Constructors

- [constructor](LitSSSShader.md#constructor)

### Properties

- [computes](LitSSSShader.md#computes)
- [passShader](LitSSSShader.md#passshader)

### Accessors

- [\_MainTex](LitSSSShader.md#_maintex)
- [\_BumpMap](LitSSSShader.md#_bumpmap)
- [\_SSSMap](LitSSSShader.md#_sssmap)
- [\_MaskTex](LitSSSShader.md#_masktex)
- [\_UVTransform](LitSSSShader.md#_uvtransform)
- [\_Metallic](LitSSSShader.md#_metallic)
- [\_Roughness](LitSSSShader.md#_roughness)
- [\_MainColor](LitSSSShader.md#_maincolor)
- [\_AlphaCutoff](LitSSSShader.md#_alphacutoff)
- [\_DoubleSidedEnable](LitSSSShader.md#_doublesidedenable)
- [\_SkinColor](LitSSSShader.md#_skincolor)
- [\_SkinPower](LitSSSShader.md#_skinpower)
- [\_SkinColorIns](LitSSSShader.md#_skincolorins)
- [curveFactor](LitSSSShader.md#curvefactor)
- [\_SurfaceType](LitSSSShader.md#_surfacetype)
- [\_AlphaCutoffEnable](LitSSSShader.md#_alphacutoffenable)

### Methods

- [addRenderPass](LitSSSShader.md#addrenderpass)
- [removeShader](LitSSSShader.md#removeshader)
- [removeShaderByIndex](LitSSSShader.md#removeshaderbyindex)
- [getSubShaders](LitSSSShader.md#getsubshaders)
- [hasSubShaders](LitSSSShader.md#hassubshaders)
- [getDefaultShaders](LitSSSShader.md#getdefaultshaders)
- [getDefaultColorShader](LitSSSShader.md#getdefaultcolorshader)
- [setDefine](LitSSSShader.md#setdefine)
- [deleteDefine](LitSSSShader.md#deletedefine)
- [setUniform](LitSSSShader.md#setuniform)
- [setUniformFloat](LitSSSShader.md#setuniformfloat)
- [setUniformVector2](LitSSSShader.md#setuniformvector2)
- [setUniformVector3](LitSSSShader.md#setuniformvector3)
- [setUniformVector4](LitSSSShader.md#setuniformvector4)
- [setUniformColor](LitSSSShader.md#setuniformcolor)
- [getUniform](LitSSSShader.md#getuniform)
- [getUniformFloat](LitSSSShader.md#getuniformfloat)
- [getUniformVector2](LitSSSShader.md#getuniformvector2)
- [getUniformVector3](LitSSSShader.md#getuniformvector3)
- [getUniformVector4](LitSSSShader.md#getuniformvector4)
- [getUniformColor](LitSSSShader.md#getuniformcolor)
- [setTexture](LitSSSShader.md#settexture)
- [getTexture](LitSSSShader.md#gettexture)
- [setUniformBuffer](LitSSSShader.md#setuniformbuffer)
- [getUniformBuffer](LitSSSShader.md#getuniformbuffer)
- [setStorageBuffer](LitSSSShader.md#setstoragebuffer)
- [getStorageBuffer](LitSSSShader.md#getstoragebuffer)
- [setStructStorageBuffer](LitSSSShader.md#setstructstoragebuffer)
- [getStructStorageBuffer](LitSSSShader.md#getstructstoragebuffer)
- [noticeValueChange](LitSSSShader.md#noticevaluechange)
- [destroy](LitSSSShader.md#destroy)
- [clone](LitSSSShader.md#clone)
- [applyUniform](LitSSSShader.md#applyuniform)
- [debug](LitSSSShader.md#debug)
- [setDefault](LitSSSShader.md#setdefault)

## Constructors

### constructor

• **new LitSSSShader**()

#### Overrides

[Shader](Shader.md).[constructor](Shader.md#constructor)

#### Defined in

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L18)

## Properties

### computes

• **computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Inherited from

[Shader](Shader.md).[computes](Shader.md#computes)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L19)

___

### passShader

• **passShader**: `Map`<`PassType`, [`RenderShaderPass`](RenderShaderPass.md)[]\>

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L103)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L107)

___

### \_SSSMap

• `set` **_SSSMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L111)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L115)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L119)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L123)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L127)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L132)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L136)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L140)

___

### \_SkinColor

• `set` **_SkinColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L145)

___

### \_SkinPower

• `set` **_SkinPower**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L149)

___

### \_SkinColorIns

• `set` **_SkinColorIns**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L153)

___

### curveFactor

• `set` **curveFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L157)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L161)

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

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L170)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L88)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L96)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L104)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L112)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L120)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L128)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L136)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L144)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L148)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L152)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L156)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L160)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L164)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L168)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L177)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L181)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L189)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L193)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L201)

___

### setStructStorageBuffer

▸ **setStructStorageBuffer**<`T`\>(`arg0`, `arg1`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)<`T`\> |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setStructStorageBuffer](Shader.md#setstructstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L205)

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

[src/gfx/graphics/webGpu/shader/Shader.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L213)

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[noticeValueChange](Shader.md#noticevaluechange)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L217)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[destroy](Shader.md#destroy)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L225)

___

### clone

▸ **clone**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Inherited from

[Shader](Shader.md).[clone](Shader.md#clone)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L229)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[applyUniform](Shader.md#applyuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:238](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L238)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L46)

___

### setDefault

▸ **setDefault**(): `void`

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/LitSSSShader.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/LitSSSShader.ts#L72)
