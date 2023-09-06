# Class: ShaderBase

## Hierarchy

- **`ShaderBase`**

  ↳ [`RenderShader`](RenderShader.md)

### Constructors

- [constructor](ShaderBase.md#constructor)

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

### Methods

- [noticeShaderChange](ShaderBase.md#noticeshaderchange)
- [noticeValueChange](ShaderBase.md#noticevaluechange)
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
- [setUniform](ShaderBase.md#setuniform)
- [getUniform](ShaderBase.md#getuniform)
- [destroy](ShaderBase.md#destroy)

## Constructors

### constructor

• **new ShaderBase**()

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L66)

## Properties

### instanceID

• `Readonly` **instanceID**: `string`

Shader Unique instance id

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L20)

___

### shaderVariant

• **shaderVariant**: `string`

Shader variant value

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L25)

___

### vsEntryPoint

• **vsEntryPoint**: `string`

Vertex stage entry point name

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L30)

___

### fsEntryPoint

• **fsEntryPoint**: `string`

Fragment stage entry point name

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L35)

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

BindGroup collection

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L40)

___

### shaderReflection

• **shaderReflection**: `ShaderReflection`

Shader reflection info

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L45)

___

### defineValue

• **defineValue**: `Object`

The defined syntax value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L50)

___

### constValues

• **constValues**: `Object`

The constant value of the Shader when it is precompiled

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L55)

___

### uniforms

• **uniforms**: `Object`

Uniforms data collection

#### Index signature

▪ [name: `string`]: `UniformNode`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L60)

## Methods

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

notice shader change

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L77)

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

notice shader state change

#### Returns

`void`

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

#### Defined in

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:234](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L234)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:242](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L242)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L250)

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

[src/gfx/graphics/webGpu/shader/ShaderBase.ts:261](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderBase.ts#L261)
