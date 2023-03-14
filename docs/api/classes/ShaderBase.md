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
- [destory](ShaderBase.md#destory)

## Properties

### instanceID

• `Readonly` **instanceID**: `string`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L7)

___

### shaderVariant

• **shaderVariant**: `string`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L8)

___

### vsEntryPoint

• **vsEntryPoint**: `string`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L9)

___

### fsEntryPoint

• **fsEntryPoint**: `string`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L10)

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L11)

___

### shaderReflection

• **shaderReflection**: `ShaderReflection`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L12)

___

### defineValue

• **defineValue**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L13)

___

### constValues

• **constValues**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L14)

___

### uniforms

• **uniforms**: `Object`

#### Index signature

▪ [name: `string`]: `UniformNode`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L15)

## Constructors

### constructor

• **new ShaderBase**()

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L18)

## Methods

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

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L128)

___

### destory

▸ **destory**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/shader/ShaderBase.ts#L145)
