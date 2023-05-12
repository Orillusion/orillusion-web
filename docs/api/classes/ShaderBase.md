# Class: ShaderBase

## Hierarchy

- **`ShaderBase`**

  ↳ [`RenderShader`](RenderShader.md)


### Properties

- [instanceID](ShaderBase.md#instanceid)
- [shaderVariant](ShaderBase.md#shadervariant)
- [vsEntryPoint](ShaderBase.md#vsentrypoint)
- [fsEntryPoint](ShaderBase.md#fsentrypoint)
- [bindGroups](ShaderBase.md#bindgroups)
- [shaderReflection](ShaderBase.md#shaderreflection)
- [defineValue](ShaderBase.md#definevalue)
- [constValues](ShaderBase.md#constvalues)
- [uniforms](ShaderBase.md#uniforms)

### Constructors

- [constructor](ShaderBase.md#constructor)

### Methods

- [noticeShaderChange](ShaderBase.md#noticeshaderchange)
- [noticeStateChange](ShaderBase.md#noticestatechange)
- [setStorageBuffer](ShaderBase.md#setstoragebuffer)
- [setStructStorageBuffer](ShaderBase.md#setstructstoragebuffer)
- [setUniformBuffer](ShaderBase.md#setuniformbuffer)
- [setDefine](ShaderBase.md#setdefine)
- [hasDefine](ShaderBase.md#hasdefine)
- [deleteDefine](ShaderBase.md#deletedefine)
- [setUniformFloat](ShaderBase.md#setuniformfloat)
- [setUniformVector2](ShaderBase.md#setuniformvector2)
- [setUniformVector3](ShaderBase.md#setuniformvector3)
- [setUniformVector4](ShaderBase.md#setuniformvector4)
- [setUniformColor](ShaderBase.md#setuniformcolor)
- [setUniformArray](ShaderBase.md#setuniformarray)
- [destroy](ShaderBase.md#destroy)

## Properties

### instanceID

• `Readonly` **instanceID**: `string`

Shader Unique instance id

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L19)

___

### shaderVariant

• **shaderVariant**: `string`

Shader variant value

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L24)

___

### vsEntryPoint

• **vsEntryPoint**: `string`

Vertex stage entry point name

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L29)

___

### fsEntryPoint

• **fsEntryPoint**: `string`

Fragment stage entry point name

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L34)

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

BindGroup collection

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L39)

___

### shaderReflection

• **shaderReflection**: `ShaderReflection`

Shader reflection info

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L44)

___

### defineValue

• **defineValue**: `Object`

The defined syntax value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L49)

___

### constValues

• **constValues**: `Object`

The constant value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L54)

___

### uniforms

• **uniforms**: `Object`

Uniforms data collection

#### Index signature

▪ [name: `string`]: `UniformNode`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L59)

## Constructors

### constructor

• **new ShaderBase**()

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L65)

## Methods

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

notice shader change

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L76)

___

### noticeStateChange

▸ **noticeStateChange**(): `void`

notice shader state change

#### Returns

`void`

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

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:219](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L219)

___

### destroy

▸ **destroy**(): `void`

destroy

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:230](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L230)
