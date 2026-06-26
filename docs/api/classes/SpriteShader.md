[**@orillusion/core**](../README.md)

***

# Class: SpriteShader

Defined in: [src/gfx/graphics/webGpu/shader/SpriteShader.ts:18](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/SpriteShader.ts#L18)

Default shader backing `SpriteMaterial`. One COLOR pass, no shadow /
reflection / GI / lighting — sprites are a flat textured quad in
world space.

## Extends

- [`Shader`](Shader.md)

## Constructors

### Constructor

> **new SpriteShader**(): `SpriteShader`

Defined in: [src/gfx/graphics/webGpu/shader/SpriteShader.ts:20](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/SpriteShader.ts#L20)

#### Returns

`SpriteShader`

#### Overrides

[`Shader`](Shader.md).[`constructor`](Shader.md#constructor)

## Properties

### computes

> **computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L27)

Compute passes attached to this shader.

#### Inherited from

[`Shader`](Shader.md).[`computes`](Shader.md#computes)

***

### passShader

> **passShader**: `Map`\<`PassType`, [`RenderShaderPass`](RenderShaderPass.md)[]\>

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L30)

Render passes grouped by pass type.

#### Inherited from

[`Shader`](Shader.md).[`passShader`](Shader.md#passshader)

## Accessors

### baseMap

#### Get Signature

> **get** **baseMap**(): [`Texture`](Texture.md)

Defined in: [src/gfx/graphics/webGpu/shader/SpriteShader.ts:60](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/SpriteShader.ts#L60)

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **baseMap**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/SpriteShader.ts:56](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/SpriteShader.ts#L56)

The base color texture of the sprite.

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

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

#### Inherited from

[`Shader`](Shader.md).[`addRenderPass`](Shader.md#addrenderpass)

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

#### Inherited from

[`Shader`](Shader.md).[`removeShader`](Shader.md#removeshader)

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

#### Inherited from

[`Shader`](Shader.md).[`removeShaderByIndex`](Shader.md#removeshaderbyindex)

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

#### Inherited from

[`Shader`](Shader.md).[`getSubShaders`](Shader.md#getsubshaders)

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

#### Inherited from

[`Shader`](Shader.md).[`hasSubShaders`](Shader.md#hassubshaders)

***

### getDefaultShaders()

> **getDefaultShaders**(): [`RenderShaderPass`](RenderShaderPass.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:107](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L107)

Get the default (COLOR) render passes.

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[`Shader`](Shader.md).[`getDefaultShaders`](Shader.md#getdefaultshaders)

***

### getDefaultColorShader()

> **getDefaultColorShader**(): [`RenderShaderPass`](RenderShaderPass.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:114](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L114)

Get the first default (COLOR) render pass.

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

#### Inherited from

[`Shader`](Shader.md).[`getDefaultColorShader`](Shader.md#getdefaultcolorshader)

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

#### Inherited from

[`Shader`](Shader.md).[`setDefine`](Shader.md#setdefine)

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

#### Inherited from

[`Shader`](Shader.md).[`getDefine`](Shader.md#getdefine)

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

#### Inherited from

[`Shader`](Shader.md).[`hasDefine`](Shader.md#hasdefine)

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

#### Inherited from

[`Shader`](Shader.md).[`deleteDefine`](Shader.md#deletedefine)

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

#### Inherited from

[`Shader`](Shader.md).[`setUniform`](Shader.md#setuniform)

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

#### Inherited from

[`Shader`](Shader.md).[`setUniformFloat`](Shader.md#setuniformfloat)

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

#### Inherited from

[`Shader`](Shader.md).[`setUniformInt32`](Shader.md#setuniformint32)

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

#### Inherited from

[`Shader`](Shader.md).[`setUniformVector2`](Shader.md#setuniformvector2)

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

#### Inherited from

[`Shader`](Shader.md).[`setUniformVector3`](Shader.md#setuniformvector3)

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

#### Inherited from

[`Shader`](Shader.md).[`setUniformVector4`](Shader.md#setuniformvector4)

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

#### Inherited from

[`Shader`](Shader.md).[`setUniformColor`](Shader.md#setuniformcolor)

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

#### Inherited from

[`Shader`](Shader.md).[`getUniform`](Shader.md#getuniform)

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

#### Inherited from

[`Shader`](Shader.md).[`getUniformFloat`](Shader.md#getuniformfloat)

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

#### Inherited from

[`Shader`](Shader.md).[`getUniformVector2`](Shader.md#getuniformvector2)

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

#### Inherited from

[`Shader`](Shader.md).[`getUniformVector3`](Shader.md#getuniformvector3)

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

#### Inherited from

[`Shader`](Shader.md).[`getUniformVector4`](Shader.md#getuniformvector4)

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

#### Inherited from

[`Shader`](Shader.md).[`getUniformColor`](Shader.md#getuniformcolor)

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

#### Inherited from

[`Shader`](Shader.md).[`setTexture`](Shader.md#settexture)

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

#### Inherited from

[`Shader`](Shader.md).[`getTexture`](Shader.md#gettexture)

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

#### Inherited from

[`Shader`](Shader.md).[`setUniformBuffer`](Shader.md#setuniformbuffer)

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

#### Inherited from

[`Shader`](Shader.md).[`getUniformBuffer`](Shader.md#getuniformbuffer)

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

#### Inherited from

[`Shader`](Shader.md).[`setStorageBuffer`](Shader.md#setstoragebuffer)

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

#### Inherited from

[`Shader`](Shader.md).[`getStorageBuffer`](Shader.md#getstoragebuffer)

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

#### Inherited from

[`Shader`](Shader.md).[`setStructStorageBuffer`](Shader.md#setstructstoragebuffer)

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

#### Inherited from

[`Shader`](Shader.md).[`getStructStorageBuffer`](Shader.md#getstructstoragebuffer)

***

### noticeValueChange()

> **noticeValueChange**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:399](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L399)

Notify all render passes that uniform values have changed.

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`noticeValueChange`](Shader.md#noticevaluechange)

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

#### Inherited from

[`Shader`](Shader.md).[`destroy`](Shader.md#destroy)

***

### clone()

> **clone**(): [`Shader`](Shader.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:431](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L431)

Deep-clone this shader, copying every render pass.

#### Returns

[`Shader`](Shader.md)

#### Inherited from

[`Shader`](Shader.md).[`clone`](Shader.md#clone)

***

### applyUniform()

> **applyUniform**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:452](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L452)

Apply pending uniform values to all render passes.

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`applyUniform`](Shader.md#applyuniform)

***

### setDefault()

> **setDefault**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/SpriteShader.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/SpriteShader.ts#L42)

Apply the default uniform values for the sprite shader.

#### Returns

`void`
