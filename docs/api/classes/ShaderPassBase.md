[**@orillusion/core**](../README.md)

***

# Class: ShaderPassBase

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L23)

Base class for a single shader pass. Holds the pass's uniforms, GPU buffers,
shader reflection data, precompile defines/constants and bind groups, and
exposes helpers to set and read uniform values and to track shader/value changes.

## Extended by

- [`RenderShaderPass`](RenderShaderPass.md)

## Constructors

### Constructor

> **new ShaderPassBase**(): `ShaderPassBase`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:93](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L93)

#### Returns

`ShaderPassBase`

## Properties

### instanceID

> `readonly` **instanceID**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L27)

Shader Unique instance id

***

### shaderVariant

> **shaderVariant**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L32)

Shader variant value

***

### vsEntryPoint

> **vsEntryPoint**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L37)

Vertex stage entry point name

***

### fsEntryPoint

> **fsEntryPoint**: `string`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L42)

Fragment stage entry point name

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:48](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L48)

The Context3D this pass is bound to. Set on first GPU use via bindCtx.
Plan B: a ShaderPass may only be used by one Engine3D.

***

### bindGroups

> **bindGroups**: `GPUBindGroup`[] = `[]`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L53)

BindGroups — single array owned by the bound Context3D.

***

### shaderReflection

> **shaderReflection**: `ShaderReflection`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:58](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L58)

Shader reflection info

***

### defineValue

> **defineValue**: `object`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:63](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L63)

The defined syntax value of the Shader when it is precompiled

#### Index Signature

\[`name`: `string`\]: `any`

***

### constValues

> **constValues**: `object`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:68](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L68)

The constant value of the Shader when it is precompiled

#### Index Signature

\[`name`: `string`\]: `any`

***

### uniforms

> **uniforms**: `object`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:73](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L73)

Uniforms data collection

#### Index Signature

\[`name`: `string`\]: `UniformNode`

***

### materialDataUniformBuffer

> **materialDataUniformBuffer**: [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:78](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L78)

Uniform data for materials

## Methods

### noticeShaderChange()

> **noticeShaderChange**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L105)

notice shader change

#### Returns

`void`

***

### noticeValueChange()

> **noticeValueChange**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:112](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L112)

notice shader state change

#### Returns

`void`

***

### setStorageBuffer()

> **setStorageBuffer**(`name`, `buffer`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:121](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L121)

set storage gpu buffer

#### Parameters

##### name

`string`

buffer name

##### buffer

[`StorageGPUBuffer`](StorageGPUBuffer.md)

storage useAge gpu buffer

#### Returns

`void`

***

### getStorageBuffer()

> **getStorageBuffer**(`name`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:141](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L141)

Get a previously set storage gpu buffer by name.

#### Parameters

##### name

`string`

buffer name

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

***

### setStructStorageBuffer()

> **setStructStorageBuffer**\<`T`\>(`name`, `buffer`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:150](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L150)

set struct storage gpu buffer

#### Type Parameters

##### T

`T` *extends* [`Struct`](Struct.md)

#### Parameters

##### name

`string`

buffer name

##### buffer

[`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\>

struct storage useAge gpu buffer

#### Returns

`void`

***

### setUniformBuffer()

> **setUniformBuffer**(`name`, `buffer`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:164](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L164)

set uniform gpu buffer min size 256

#### Parameters

##### name

`string`

##### buffer

[`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Returns

`void`

***

### getUniformBuffer()

> **getUniformBuffer**(`name`): [`UniformGPUBuffer`](UniformGPUBuffer.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:177](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L177)

Get a previously set uniform gpu buffer by name.

#### Parameters

##### name

`string`

buffer name

#### Returns

[`UniformGPUBuffer`](UniformGPUBuffer.md)

***

### setDefine()

> **setDefine**(`defineName`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:186](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L186)

set define value

#### Parameters

##### defineName

`string`

##### value

`any`

#### Returns

`void`

***

### hasDefine()

> **hasDefine**(`defineName`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:200](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L200)

Whether there is a define key

#### Parameters

##### defineName

`string`

#### Returns

`boolean`

***

### deleteDefine()

> **deleteDefine**(`defineName`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:208](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L208)

delete define value

#### Parameters

##### defineName

`string`

#### Returns

`void`

***

### setUniformFloat()

> **setUniformFloat**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:218](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L218)

set uniform float value

#### Parameters

##### name

`string`

##### value

`number`

#### Returns

`void`

***

### setUniformInt32()

> **setUniformInt32**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:232](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L232)

set uniform int32 value

#### Parameters

##### name

`string`

##### value

`number`

#### Returns

`void`

***

### setUniformVector2()

> **setUniformVector2**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:246](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L246)

set uniform vector2 value

#### Parameters

##### name

`string`

##### value

[`Vector2`](Vector2.md)

#### Returns

`void`

***

### setUniformVector3()

> **setUniformVector3**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:260](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L260)

set uniform vector3 value

#### Parameters

##### name

`string`

##### value

[`Vector3`](Vector3.md)

#### Returns

`void`

***

### setUniformVector4()

> **setUniformVector4**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:273](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L273)

set uniform vector4 value

#### Parameters

##### name

`string`

##### value

`Vector4`

#### Returns

`void`

***

### setUniformColor()

> **setUniformColor**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:286](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L286)

set uniform color value

#### Parameters

##### name

`string`

##### value

[`Color`](Color.md)

#### Returns

`void`

***

### setUniformArray()

> **setUniformArray**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:299](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L299)

set uniform array value

#### Parameters

##### name

`string`

##### value

`Float32Array`

#### Returns

`void`

***

### setUniform()

> **setUniform**(`name`, `value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:312](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L312)

Set a uniform value of an arbitrary supported type.

#### Parameters

##### name

`string`

uniform name

##### value

`any`

uniform value

#### Returns

`void`

***

### getUniform()

> **getUniform**(`name`): `any`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:324](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L324)

Get a uniform value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

`any`

***

### getUniformFloat()

> **getUniformFloat**(`name`): `number`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:332](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L332)

Get a uniform float value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

`number`

***

### getUniformVector2()

> **getUniformVector2**(`name`): [`Vector2`](Vector2.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:340](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L340)

Get a uniform vector2 value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

[`Vector2`](Vector2.md)

***

### getUniformVector3()

> **getUniformVector3**(`name`): [`Vector3`](Vector3.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:348](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L348)

Get a uniform vector3 value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

[`Vector3`](Vector3.md)

***

### getUniformVector4()

> **getUniformVector4**(`name`): `Vector4`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:356](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L356)

Get a uniform vector4 value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

`Vector4`

***

### getUniformColor()

> **getUniformColor**(`name`): [`Color`](Color.md)

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:364](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L364)

Get a uniform color value by name.

#### Parameters

##### name

`string`

uniform name

#### Returns

[`Color`](Color.md)

***

### getBuffer()

> **getBuffer**(`name`): `GPUBufferBase`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:372](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L372)

Get a registered gpu buffer by name.

#### Parameters

##### name

`string`

buffer name

#### Returns

`GPUBufferBase`

***

### applyUniform()

> **applyUniform**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:387](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L387)

Apply pending material uniform data to the GPU when values have changed.

#### Returns

`void`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/ShaderPassBase.ts:396](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/ShaderPassBase.ts#L396)

destroy

#### Parameters

##### force?

`boolean`

#### Returns

`void`
