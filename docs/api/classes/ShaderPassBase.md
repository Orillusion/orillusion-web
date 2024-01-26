# Class: ShaderPassBase

## Hierarchy

- **`ShaderPassBase`**

  ↳ [`RenderShaderPass`](RenderShaderPass.md)

### Constructors

- [constructor](ShaderPassBase.md#constructor)

### Properties

- [instanceID](ShaderPassBase.md#instanceid)
- [shaderVariant](ShaderPassBase.md#shadervariant)
- [vsEntryPoint](ShaderPassBase.md#vsentrypoint)
- [fsEntryPoint](ShaderPassBase.md#fsentrypoint)
- [bindGroups](ShaderPassBase.md#bindgroups)
- [shaderReflection](ShaderPassBase.md#shaderreflection)
- [defineValue](ShaderPassBase.md#definevalue)
- [constValues](ShaderPassBase.md#constvalues)
- [uniforms](ShaderPassBase.md#uniforms)
- [materialDataUniformBuffer](ShaderPassBase.md#materialdatauniformbuffer)

### Methods

- [noticeShaderChange](ShaderPassBase.md#noticeshaderchange)
- [noticeValueChange](ShaderPassBase.md#noticevaluechange)
- [setStorageBuffer](ShaderPassBase.md#setstoragebuffer)
- [setStructStorageBuffer](ShaderPassBase.md#setstructstoragebuffer)
- [setUniformBuffer](ShaderPassBase.md#setuniformbuffer)
- [setDefine](ShaderPassBase.md#setdefine)
- [hasDefine](ShaderPassBase.md#hasdefine)
- [deleteDefine](ShaderPassBase.md#deletedefine)
- [setUniformFloat](ShaderPassBase.md#setuniformfloat)
- [setUniformVector2](ShaderPassBase.md#setuniformvector2)
- [setUniformVector3](ShaderPassBase.md#setuniformvector3)
- [setUniformVector4](ShaderPassBase.md#setuniformvector4)
- [setUniformColor](ShaderPassBase.md#setuniformcolor)
- [setUniformArray](ShaderPassBase.md#setuniformarray)
- [setUniform](ShaderPassBase.md#setuniform)
- [getUniform](ShaderPassBase.md#getuniform)
- [getUniformFloat](ShaderPassBase.md#getuniformfloat)
- [getUniformVector2](ShaderPassBase.md#getuniformvector2)
- [getUniformVector3](ShaderPassBase.md#getuniformvector3)
- [getUniformVector4](ShaderPassBase.md#getuniformvector4)
- [getUniformColor](ShaderPassBase.md#getuniformcolor)
- [getBuffer](ShaderPassBase.md#getbuffer)
- [applyUniform](ShaderPassBase.md#applyuniform)
- [destroy](ShaderPassBase.md#destroy)

## Constructors

### constructor

• **new ShaderPassBase**(): [`ShaderPassBase`](ShaderPassBase.md)

#### Returns

[`ShaderPassBase`](ShaderPassBase.md)

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L72)

## Properties

### instanceID

• `Readonly` **instanceID**: `string`

Shader Unique instance id

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L21)

___

### shaderVariant

• **shaderVariant**: `string`

Shader variant value

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L26)

___

### vsEntryPoint

• **vsEntryPoint**: `string`

Vertex stage entry point name

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L31)

___

### fsEntryPoint

• **fsEntryPoint**: `string`

Fragment stage entry point name

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L36)

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

BindGroup collection

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L41)

___

### shaderReflection

• **shaderReflection**: `ShaderReflection`

Shader reflection info

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L46)

___

### defineValue

• **defineValue**: `Object`

The defined syntax value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L51)

___

### constValues

• **constValues**: `Object`

The constant value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L56)

___

### uniforms

• **uniforms**: `Object`

Uniforms data collection

#### Index signature

▪ [name: `string`]: `UniformNode`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L61)

___

### materialDataUniformBuffer

• **materialDataUniformBuffer**: [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

Uniform data for materials

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L66)

## Methods

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

notice shader change

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L83)

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

notice shader state change

#### Returns

`void`

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

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L240)

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

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L248)

___

### getUniform

▸ **getUniform**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

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

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:280](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L280)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:288](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L288)

___

### destroy

▸ **destroy**(`force?`): `void`

destroy

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:297](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L297)
