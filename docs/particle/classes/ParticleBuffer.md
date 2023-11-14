# Class: ParticleBuffer

Basic class of particle memory data

## Hierarchy

- `GPUBufferBase`

  ↳ **`ParticleBuffer`**

### Constructors

- [constructor](ParticleBuffer.md#constructor)

### Properties

- [bufferType](ParticleBuffer.md#buffertype)
- [buffer](ParticleBuffer.md#buffer)
- [memory](ParticleBuffer.md#memory)
- [memoryNodes](ParticleBuffer.md#memorynodes)
- [seek](ParticleBuffer.md#seek)
- [outFloat32Array](ParticleBuffer.md#outfloat32array)
- [byteSize](ParticleBuffer.md#bytesize)
- [usage](ParticleBuffer.md#usage)
- [visibility](ParticleBuffer.md#visibility)

### Methods

- [alloc](ParticleBuffer.md#alloc)
- [allocInt8](ParticleBuffer.md#allocint8)
- [allocUint8](ParticleBuffer.md#allocuint8)
- [allocInt16](ParticleBuffer.md#allocint16)
- [allocUint16](ParticleBuffer.md#allocuint16)
- [allocInt32](ParticleBuffer.md#allocint32)
- [allocUint32](ParticleBuffer.md#allocuint32)
- [allocFloat32](ParticleBuffer.md#allocfloat32)
- [allocVec2](ParticleBuffer.md#allocvec2)
- [allocVec3](ParticleBuffer.md#allocvec3)
- [allocVec4](ParticleBuffer.md#allocvec4)
- [debug](ParticleBuffer.md#debug)
- [reset](ParticleBuffer.md#reset)
- [setBoolean](ParticleBuffer.md#setboolean)
- [setFloat](ParticleBuffer.md#setfloat)
- [setInt8](ParticleBuffer.md#setint8)
- [setInt16](ParticleBuffer.md#setint16)
- [setInt32](ParticleBuffer.md#setint32)
- [setUint8](ParticleBuffer.md#setuint8)
- [setUint16](ParticleBuffer.md#setuint16)
- [setUint32](ParticleBuffer.md#setuint32)
- [setVector2](ParticleBuffer.md#setvector2)
- [setVector3](ParticleBuffer.md#setvector3)
- [setVector4](ParticleBuffer.md#setvector4)
- [setVector4Array](ParticleBuffer.md#setvector4array)
- [setColor](ParticleBuffer.md#setcolor)
- [setColorArray](ParticleBuffer.md#setcolorarray)
- [setMatrix](ParticleBuffer.md#setmatrix)
- [setMatrixArray](ParticleBuffer.md#setmatrixarray)
- [setArray](ParticleBuffer.md#setarray)
- [setFloat32Array](ParticleBuffer.md#setfloat32array)
- [setInt32Array](ParticleBuffer.md#setint32array)
- [setUint32Array](ParticleBuffer.md#setuint32array)
- [setStruct](ParticleBuffer.md#setstruct)
- [setStructArray](ParticleBuffer.md#setstructarray)
- [clean](ParticleBuffer.md#clean)
- [apply](ParticleBuffer.md#apply)
- [mapAsyncWrite](ParticleBuffer.md#mapasyncwrite)
- [destroy](ParticleBuffer.md#destroy)
- [resizeBuffer](ParticleBuffer.md#resizebuffer)
- [readBuffer](ParticleBuffer.md#readbuffer)

## Constructors

### constructor

• **new ParticleBuffer**(`size`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `data?` | `Float32Array` |

#### Overrides

GPUBufferBase.constructor

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:8](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L8)

## Properties

### bufferType

• **bufferType**: `GPUBufferType`

#### Inherited from

GPUBufferBase.bufferType

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L20)

___

### buffer

• **buffer**: `GPUBuffer`

#### Inherited from

GPUBufferBase.buffer

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L21)

___

### memory

• **memory**: `MemoryDO`

#### Inherited from

GPUBufferBase.memory

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L22)

___

### memoryNodes

• **memoryNodes**: `Map`<`string` \| `number`, `MemoryInfo`\>

#### Inherited from

GPUBufferBase.memoryNodes

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L23)

___

### seek

• **seek**: `number`

#### Inherited from

GPUBufferBase.seek

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L24)

___

### outFloat32Array

• **outFloat32Array**: `Float32Array`

#### Inherited from

GPUBufferBase.outFloat32Array

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L25)

___

### byteSize

• **byteSize**: `number`

#### Inherited from

GPUBufferBase.byteSize

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L26)

___

### usage

• **usage**: `number`

#### Inherited from

GPUBufferBase.usage

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L27)

___

### visibility

• **visibility**: `number`

#### Inherited from

GPUBufferBase.visibility

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L28)

## Methods

### alloc

▸ **alloc**(`name`, `byte`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `byte` | `number` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L15)

___

### allocInt8

▸ **allocInt8**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L24)

___

### allocUint8

▸ **allocUint8**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:28](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L28)

___

### allocInt16

▸ **allocInt16**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L32)

___

### allocUint16

▸ **allocUint16**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:36](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L36)

___

### allocInt32

▸ **allocInt32**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L40)

___

### allocUint32

▸ **allocUint32**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:44](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L44)

___

### allocFloat32

▸ **allocFloat32**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L48)

___

### allocVec2

▸ **allocVec2**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L52)

___

### allocVec3

▸ **allocVec3**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:56](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L56)

___

### allocVec4

▸ **allocVec4**(`name`): `MemoryInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MemoryInfo`

#### Defined in

[packages/particle/buffer/ParticleBuffer.ts:60](https://github.com/Orillusion/orillusion/blob/main/packages/particle/buffer/ParticleBuffer.ts#L60)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.debug

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L41)

___

### reset

▸ **reset**(`clean?`, `size?`, `data?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clean` | `boolean` | `false` |
| `size` | `number` | `0` |
| `data?` | `Float32Array` | `undefined` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.reset

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L44)

___

### setBoolean

▸ **setBoolean**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setBoolean

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L52)

___

### setFloat

▸ **setFloat**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setFloat

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L61)

___

### setInt8

▸ **setInt8**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setInt8

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L70)

___

### setInt16

▸ **setInt16**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setInt16

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L79)

___

### setInt32

▸ **setInt32**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setInt32

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L88)

___

### setUint8

▸ **setUint8**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setUint8

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L97)

___

### setUint16

▸ **setUint16**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setUint16

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L106)

___

### setUint32

▸ **setUint32**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setUint32

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L115)

___

### setVector2

▸ **setVector2**(`name`, `v2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v2` | `Vector2` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setVector2

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L124)

___

### setVector3

▸ **setVector3**(`name`, `v3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v3` | `Vector3` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setVector3

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L133)

___

### setVector4

▸ **setVector4**(`name`, `v4`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v4` | `Quaternion` \| `Vector4` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setVector4

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L142)

___

### setVector4Array

▸ **setVector4Array**(`name`, `v4Array`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v4Array` | `Vector4`[] \| `Quaternion`[] |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setVector4Array

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L151)

___

### setColor

▸ **setColor**(`name`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `color` | `Color` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setColor

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L160)

___

### setColorArray

▸ **setColorArray**(`name`, `colorArray`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `colorArray` | `Color`[] |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setColorArray

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L169)

___

### setMatrix

▸ **setMatrix**(`name`, `mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `mat` | `Matrix4` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setMatrix

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L178)

___

### setMatrixArray

▸ **setMatrixArray**(`name`, `mats`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `mats` | `Matrix4`[] |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setMatrixArray

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L187)

___

### setArray

▸ **setArray**(`name`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `number`[] |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setArray

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L199)

___

### setFloat32Array

▸ **setFloat32Array**(`name`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `Float32Array` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setFloat32Array

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L208)

___

### setInt32Array

▸ **setInt32Array**(`name`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `Int32Array` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setInt32Array

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L217)

___

### setUint32Array

▸ **setUint32Array**(`name`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `Uint32Array` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setUint32Array

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L227)

___

### setStruct

▸ **setStruct**<`T`\>(`c`, `index`, `data`, `property?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | () => `T` |
| `index` | `number` |
| `data` | `any` |
| `property?` | `string` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setStruct

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L236)

___

### setStructArray

▸ **setStructArray**<`T`\>(`c`, `dataList`, `property?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | () => `T` |
| `dataList` | `any`[] |
| `property?` | `string` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setStructArray

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:292](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L292)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.clean

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:305](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L305)

___

### apply

▸ **apply**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.apply

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:310](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L310)

___

### mapAsyncWrite

▸ **mapAsyncWrite**(`mapAsyncArray`, `len`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapAsyncArray` | `Float32Array` |
| `len` | `number` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.mapAsyncWrite

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:315](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L315)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.destroy

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:355](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L355)

___

### resizeBuffer

▸ **resizeBuffer**(`size`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `data?` | `ArrayBufferData` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.resizeBuffer

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L412)

___

### readBuffer

▸ **readBuffer**(): `Float32Array`

#### Returns

`Float32Array`

#### Inherited from

GPUBufferBase.readBuffer

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:460](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L460)
