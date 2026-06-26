[**@orillusion/core**](../README.md)

***

# Class: ReflectionShader

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:11](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L11)

## Extends

- [`Shader`](Shader.md)

## Constructors

### Constructor

> **new ReflectionShader**(): `ReflectionShader`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:13](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L13)

#### Returns

`ReflectionShader`

#### Overrides

[`Shader`](Shader.md).[`constructor`](Shader.md#constructor)

## Properties

### computes

> **computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L19)

#### Inherited from

[`Shader`](Shader.md).[`computes`](Shader.md#computes)

***

### passShader

> **passShader**: `Map`\<`PassType`, [`RenderShaderPass`](RenderShaderPass.md)[]\>

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L21)

#### Inherited from

[`Shader`](Shader.md).[`passShader`](Shader.md#passshader)

## Accessors

### \_MainTex

#### Set Signature

> **set** **\_MainTex**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:41](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L41)

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### \_BumpMap

#### Set Signature

> **set** **\_BumpMap**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:45](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L45)

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### \_MaskTex

#### Set Signature

> **set** **\_MaskTex**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:49](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L49)

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### \_UVTransform

#### Set Signature

> **set** **\_UVTransform**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:53](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L53)

##### Parameters

###### value

`Vector4`

##### Returns

`void`

***

### \_Metallic

#### Set Signature

> **set** **\_Metallic**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:57](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L57)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### \_Roughness

#### Set Signature

> **set** **\_Roughness**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:61](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L61)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### \_MainColor

#### Set Signature

> **set** **\_MainColor**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:66](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L66)

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

***

### \_AlphaCutoff

#### Set Signature

> **set** **\_AlphaCutoff**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:70](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L70)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### \_DoubleSidedEnable

#### Set Signature

> **set** **\_DoubleSidedEnable**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:74](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L74)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### \_SurfaceType

#### Set Signature

> **set** **\_SurfaceType**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:79](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L79)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### \_AlphaCutoffEnable

#### Set Signature

> **set** **\_AlphaCutoffEnable**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:88](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L88)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addRenderPass()

> **addRenderPass**(`renderShader`, `index?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L28)

#### Parameters

##### renderShader

[`RenderShaderPass`](RenderShaderPass.md)

##### index?

`number` = `-1`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`addRenderPass`](Shader.md#addrenderpass)

***

### removeShader()

> **removeShader**(`renderShader`, `index?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L38)

#### Parameters

##### renderShader

[`RenderShaderPass`](RenderShaderPass.md)

##### index?

`number` = `-1`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`removeShader`](Shader.md#removeshader)

***

### removeShaderByIndex()

> **removeShaderByIndex**(`passType`, `index?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:52](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L52)

#### Parameters

##### passType

`PassType`

##### index?

`number` = `-1`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`removeShaderByIndex`](Shader.md#removeshaderbyindex)

***

### getSubShaders()

> **getSubShaders**(`passType`): [`RenderShaderPass`](RenderShaderPass.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:63](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L63)

#### Parameters

##### passType

`PassType`

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[`Shader`](Shader.md).[`getSubShaders`](Shader.md#getsubshaders)

***

### hasSubShaders()

> **hasSubShaders**(`passType`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L67)

#### Parameters

##### passType

`PassType`

#### Returns

`boolean`

#### Inherited from

[`Shader`](Shader.md).[`hasSubShaders`](Shader.md#hassubshaders)

***

### getDefaultShaders()

> **getDefaultShaders**(): [`RenderShaderPass`](RenderShaderPass.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:72](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L72)

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[`Shader`](Shader.md).[`getDefaultShaders`](Shader.md#getdefaultshaders)

***

### getDefaultColorShader()

> **getDefaultColorShader**(): [`RenderShaderPass`](RenderShaderPass.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:76](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L76)

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

#### Inherited from

[`Shader`](Shader.md).[`getDefaultColorShader`](Shader.md#getdefaultcolorshader)

***

### setDefine()

> **setDefine**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:80](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L80)

#### Parameters

##### arg0

`string`

##### arg1

`boolean`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setDefine`](Shader.md#setdefine)

***

### getDefine()

> **getDefine**(`arg0`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:88](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L88)

#### Parameters

##### arg0

`string`

#### Returns

`boolean`

#### Inherited from

[`Shader`](Shader.md).[`getDefine`](Shader.md#getdefine)

***

### hasDefine()

> **hasDefine**(`arg0`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:98](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L98)

#### Parameters

##### arg0

`string`

#### Returns

`boolean`

#### Inherited from

[`Shader`](Shader.md).[`hasDefine`](Shader.md#hasdefine)

***

### deleteDefine()

> **deleteDefine**(`arg0`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:109](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L109)

#### Parameters

##### arg0

`string`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`deleteDefine`](Shader.md#deletedefine)

***

### setUniform()

> **setUniform**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:117](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L117)

#### Parameters

##### arg0

`string`

##### arg1

`any`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniform`](Shader.md#setuniform)

***

### setUniformFloat()

> **setUniformFloat**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:125](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L125)

#### Parameters

##### arg0

`string`

##### arg1

`number`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformFloat`](Shader.md#setuniformfloat)

***

### setUniformInt32()

> **setUniformInt32**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:133](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L133)

#### Parameters

##### arg0

`string`

##### arg1

`number`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformInt32`](Shader.md#setuniformint32)

***

### setUniformVector2()

> **setUniformVector2**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:141](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L141)

#### Parameters

##### arg0

`string`

##### arg1

[`Vector2`](Vector2.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformVector2`](Shader.md#setuniformvector2)

***

### setUniformVector3()

> **setUniformVector3**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:149](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L149)

#### Parameters

##### arg0

`string`

##### arg1

[`Vector3`](Vector3.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformVector3`](Shader.md#setuniformvector3)

***

### setUniformVector4()

> **setUniformVector4**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:157](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L157)

#### Parameters

##### arg0

`string`

##### arg1

`Vector4`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformVector4`](Shader.md#setuniformvector4)

***

### setUniformColor()

> **setUniformColor**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:165](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L165)

#### Parameters

##### arg0

`string`

##### arg1

[`Color`](Color.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformColor`](Shader.md#setuniformcolor)

***

### getUniform()

> **getUniform**(`arg0`): `any`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:173](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L173)

#### Parameters

##### arg0

`string`

#### Returns

`any`

#### Inherited from

[`Shader`](Shader.md).[`getUniform`](Shader.md#getuniform)

***

### getUniformFloat()

> **getUniformFloat**(`arg0`): `number`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:177](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L177)

#### Parameters

##### arg0

`string`

#### Returns

`number`

#### Inherited from

[`Shader`](Shader.md).[`getUniformFloat`](Shader.md#getuniformfloat)

***

### getUniformVector2()

> **getUniformVector2**(`arg0`): [`Vector2`](Vector2.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:181](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L181)

#### Parameters

##### arg0

`string`

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[`Shader`](Shader.md).[`getUniformVector2`](Shader.md#getuniformvector2)

***

### getUniformVector3()

> **getUniformVector3**(`arg0`): [`Vector3`](Vector3.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:185](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L185)

#### Parameters

##### arg0

`string`

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Shader`](Shader.md).[`getUniformVector3`](Shader.md#getuniformvector3)

***

### getUniformVector4()

> **getUniformVector4**(`arg0`): `Vector4`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:189](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L189)

#### Parameters

##### arg0

`string`

#### Returns

`Vector4`

#### Inherited from

[`Shader`](Shader.md).[`getUniformVector4`](Shader.md#getuniformvector4)

***

### getUniformColor()

> **getUniformColor**(`arg0`): [`Color`](Color.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:193](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L193)

#### Parameters

##### arg0

`string`

#### Returns

[`Color`](Color.md)

#### Inherited from

[`Shader`](Shader.md).[`getUniformColor`](Shader.md#getuniformcolor)

***

### setTexture()

> **setTexture**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:197](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L197)

#### Parameters

##### arg0

`string`

##### arg1

[`Texture`](Texture.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setTexture`](Shader.md#settexture)

***

### getTexture()

> **getTexture**(`arg0`): [`Texture`](Texture.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:206](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L206)

#### Parameters

##### arg0

`string`

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[`Shader`](Shader.md).[`getTexture`](Shader.md#gettexture)

***

### setUniformBuffer()

> **setUniformBuffer**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:210](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L210)

#### Parameters

##### arg0

`string`

##### arg1

[`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformBuffer`](Shader.md#setuniformbuffer)

***

### getUniformBuffer()

> **getUniformBuffer**(`arg0`): `GPUBufferBase`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:218](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L218)

#### Parameters

##### arg0

`string`

#### Returns

`GPUBufferBase`

#### Inherited from

[`Shader`](Shader.md).[`getUniformBuffer`](Shader.md#getuniformbuffer)

***

### setStorageBuffer()

> **setStorageBuffer**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:222](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L222)

#### Parameters

##### arg0

`string`

##### arg1

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setStorageBuffer`](Shader.md#setstoragebuffer)

***

### getStorageBuffer()

> **getStorageBuffer**(`arg0`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:230](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L230)

#### Parameters

##### arg0

`string`

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Inherited from

[`Shader`](Shader.md).[`getStorageBuffer`](Shader.md#getstoragebuffer)

***

### setStructStorageBuffer()

> **setStructStorageBuffer**\<`T`\>(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:234](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L234)

#### Type Parameters

##### T

`T` *extends* [`Struct`](Struct.md)

#### Parameters

##### arg0

`string`

##### arg1

[`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setStructStorageBuffer`](Shader.md#setstructstoragebuffer)

***

### getStructStorageBuffer()

> **getStructStorageBuffer**(`arg0`): `GPUBufferBase`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:242](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L242)

#### Parameters

##### arg0

`string`

#### Returns

`GPUBufferBase`

#### Inherited from

[`Shader`](Shader.md).[`getStructStorageBuffer`](Shader.md#getstructstoragebuffer)

***

### noticeValueChange()

> **noticeValueChange**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:246](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L246)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`noticeValueChange`](Shader.md#noticevaluechange)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:254](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L254)

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`destroy`](Shader.md#destroy)

***

### clone()

> **clone**(): [`Shader`](Shader.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:271](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L271)

#### Returns

[`Shader`](Shader.md)

#### Inherited from

[`Shader`](Shader.md).[`clone`](Shader.md#clone)

***

### applyUniform()

> **applyUniform**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:289](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L289)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`applyUniform`](Shader.md#applyuniform)

***

### setDefault()

> **setDefault**(): `void`

Defined in: [src/loader/parser/prefab/mats/shader/ReflectionShader.ts:34](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/ReflectionShader.ts#L34)

#### Returns

`void`
