[**@orillusion/core**](../README.md)

***

# Class: Shader

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L23)

A shader is the collection of render passes (grouped by PassType) and
compute passes that drive a material's rendering. It exposes convenience
methods that forward uniform, texture, buffer and define changes to all of
its render passes.

## Extended by

- [`SpriteShader`](SpriteShader.md)

## Constructors

### Constructor

> **new Shader**(): `Shader`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L32)

#### Returns

`Shader`

## Properties

### computes

> **computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L27)

Compute passes attached to this shader.

***

### passShader

> **passShader**: `Map`\<`PassType`, [`RenderShaderPass`](RenderShaderPass.md)[]\>

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L30)

Render passes grouped by pass type.

## Methods

### addRenderPass()

> **addRenderPass**(`renderShader`, `index?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L42)

Add a render pass to this shader.

#### Parameters

##### renderShader

[`RenderShaderPass`](RenderShaderPass.md)

the render pass to add

##### index?

`number` = `-1`

optional insertion index; appended when -1

#### Returns

`void`

***

### removeShader()

> **removeShader**(`renderShader`, `index?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:57](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L57)

Remove a render pass from this shader.

#### Parameters

##### renderShader

[`RenderShaderPass`](RenderShaderPass.md)

the render pass to remove

##### index?

`number` = `-1`

optional index within the pass type bucket

#### Returns

`void`

***

### removeShaderByIndex()

> **removeShaderByIndex**(`passType`, `index?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:76](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L76)

Remove a render pass by pass type and index.

#### Parameters

##### passType

`PassType`

the pass type bucket

##### index?

`number` = `-1`

optional index; removes the whole bucket when -1

#### Returns

`void`

***

### getSubShaders()

> **getSubShaders**(`passType`): [`RenderShaderPass`](RenderShaderPass.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:91](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L91)

Get the render passes registered for the given pass type.

#### Parameters

##### passType

`PassType`

the pass type bucket

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

***

### hasSubShaders()

> **hasSubShaders**(`passType`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:99](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L99)

Whether any render pass is registered for the given pass type.

#### Parameters

##### passType

`PassType`

the pass type bucket

#### Returns

`boolean`

***

### getDefaultShaders()

> **getDefaultShaders**(): [`RenderShaderPass`](RenderShaderPass.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:107](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L107)

Get the default (COLOR) render passes.

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

***

### getDefaultColorShader()

> **getDefaultColorShader**(): [`RenderShaderPass`](RenderShaderPass.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:114](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L114)

Get the first default (COLOR) render pass.

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

***

### setDefine()

> **setDefine**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:123](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L123)

Set a preprocessor define on all render passes.

#### Parameters

##### arg0

`string`

the define name

##### arg1

`boolean`

the define value

#### Returns

`void`

***

### getDefine()

> **getDefine**(`arg0`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:135](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L135)

Get the value of a preprocessor define from the render passes.

#### Parameters

##### arg0

`string`

the define name

#### Returns

`boolean`

***

### hasDefine()

> **hasDefine**(`arg0`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:149](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L149)

Whether any render pass declares the given preprocessor define.

#### Parameters

##### arg0

`string`

the define name

#### Returns

`boolean`

***

### deleteDefine()

> **deleteDefine**(`arg0`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:164](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L164)

Remove a preprocessor define from all render passes.

#### Parameters

##### arg0

`string`

the define name

#### Returns

`void`

***

### setUniform()

> **setUniform**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:177](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L177)

Set a uniform value on all render passes.

#### Parameters

##### arg0

`string`

the uniform name

##### arg1

`any`

the uniform value

#### Returns

`void`

***

### setUniformFloat()

> **setUniformFloat**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:190](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L190)

Set a float uniform on all render passes.

#### Parameters

##### arg0

`string`

the uniform name

##### arg1

`number`

the float value

#### Returns

`void`

***

### setUniformInt32()

> **setUniformInt32**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:203](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L203)

Set a 32-bit integer uniform on all render passes.

#### Parameters

##### arg0

`string`

the uniform name

##### arg1

`number`

the integer value

#### Returns

`void`

***

### setUniformVector2()

> **setUniformVector2**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:216](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L216)

Set a Vector2 uniform on all render passes.

#### Parameters

##### arg0

`string`

the uniform name

##### arg1

[`Vector2`](Vector2.md)

the vector value

#### Returns

`void`

***

### setUniformVector3()

> **setUniformVector3**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:229](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L229)

Set a Vector3 uniform on all render passes.

#### Parameters

##### arg0

`string`

the uniform name

##### arg1

[`Vector3`](Vector3.md)

the vector value

#### Returns

`void`

***

### setUniformVector4()

> **setUniformVector4**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:242](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L242)

Set a Vector4 uniform on all render passes.

#### Parameters

##### arg0

`string`

the uniform name

##### arg1

`Vector4`

the vector value

#### Returns

`void`

***

### setUniformColor()

> **setUniformColor**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:255](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L255)

Set a color uniform on all render passes.

#### Parameters

##### arg0

`string`

the uniform name

##### arg1

[`Color`](Color.md)

the color value

#### Returns

`void`

***

### getUniform()

> **getUniform**(`arg0`): `any`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:267](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L267)

Get a uniform value from the default color pass.

#### Parameters

##### arg0

`string`

the uniform name

#### Returns

`any`

***

### getUniformFloat()

> **getUniformFloat**(`arg0`): `number`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:275](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L275)

Get a float uniform from the default color pass.

#### Parameters

##### arg0

`string`

the uniform name

#### Returns

`number`

***

### getUniformVector2()

> **getUniformVector2**(`arg0`): [`Vector2`](Vector2.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:283](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L283)

Get a Vector2 uniform from the default color pass.

#### Parameters

##### arg0

`string`

the uniform name

#### Returns

[`Vector2`](Vector2.md)

***

### getUniformVector3()

> **getUniformVector3**(`arg0`): [`Vector3`](Vector3.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:291](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L291)

Get a Vector3 uniform from the default color pass.

#### Parameters

##### arg0

`string`

the uniform name

#### Returns

[`Vector3`](Vector3.md)

***

### getUniformVector4()

> **getUniformVector4**(`arg0`): `Vector4`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:299](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L299)

Get a Vector4 uniform from the default color pass.

#### Parameters

##### arg0

`string`

the uniform name

#### Returns

`Vector4`

***

### getUniformColor()

> **getUniformColor**(`arg0`): [`Color`](Color.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:307](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L307)

Get a color uniform from the default color pass.

#### Parameters

##### arg0

`string`

the uniform name

#### Returns

[`Color`](Color.md)

***

### setTexture()

> **setTexture**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:316](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L316)

Set a texture on all render passes and enable its `USE_*` define.

#### Parameters

##### arg0

`string`

the texture name

##### arg1

[`Texture`](Texture.md)

the texture

#### Returns

`void`

***

### getTexture()

> **getTexture**(`arg0`): [`Texture`](Texture.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:329](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L329)

Get a texture from the default color pass.

#### Parameters

##### arg0

`string`

the texture name

#### Returns

[`Texture`](Texture.md)

***

### setUniformBuffer()

> **setUniformBuffer**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:338](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L338)

Set a uniform buffer on all render passes.

#### Parameters

##### arg0

`string`

the buffer name

##### arg1

[`UniformGPUBuffer`](UniformGPUBuffer.md)

the uniform buffer

#### Returns

`void`

***

### getUniformBuffer()

> **getUniformBuffer**(`arg0`): `GPUBufferBase`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:350](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L350)

Get a uniform buffer from the default color pass.

#### Parameters

##### arg0

`string`

the buffer name

#### Returns

`GPUBufferBase`

***

### setStorageBuffer()

> **setStorageBuffer**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:359](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L359)

Set a storage buffer on all render passes.

#### Parameters

##### arg0

`string`

the buffer name

##### arg1

[`StorageGPUBuffer`](StorageGPUBuffer.md)

the storage buffer

#### Returns

`void`

***

### getStorageBuffer()

> **getStorageBuffer**(`arg0`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:371](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L371)

Get a storage buffer from the default color pass.

#### Parameters

##### arg0

`string`

the buffer name

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

***

### setStructStorageBuffer()

> **setStructStorageBuffer**\<`T`\>(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:380](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L380)

Set a struct storage buffer on all render passes.

#### Type Parameters

##### T

`T` *extends* [`Struct`](Struct.md)

#### Parameters

##### arg0

`string`

the buffer name

##### arg1

[`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\>

the struct storage buffer

#### Returns

`void`

***

### getStructStorageBuffer()

> **getStructStorageBuffer**(`arg0`): `GPUBufferBase`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:392](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L392)

Get a struct storage buffer from the default color pass.

#### Parameters

##### arg0

`string`

the buffer name

#### Returns

`GPUBufferBase`

***

### noticeValueChange()

> **noticeValueChange**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:399](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L399)

Notify all render passes that uniform values have changed.

#### Returns

`void`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:411](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L411)

Destroy all render passes and clear the pass map.

#### Parameters

##### force?

`boolean`

force destruction of GPU resources

#### Returns

`void`

***

### clone()

> **clone**(): `Shader`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:431](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L431)

Deep-clone this shader, copying every render pass.

#### Returns

`Shader`

***

### applyUniform()

> **applyUniform**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:452](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L452)

Apply pending uniform values to all render passes.

#### Returns

`void`
