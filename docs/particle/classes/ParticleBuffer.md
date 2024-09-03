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
- [readBoole](ParticleBuffer.md#readboole)
- [setFloat](ParticleBuffer.md#setfloat)
- [getFloat](ParticleBuffer.md#getfloat)
- [setInt8](ParticleBuffer.md#setint8)
- [getInt8](ParticleBuffer.md#getint8)
- [setInt16](ParticleBuffer.md#setint16)
- [getInt16](ParticleBuffer.md#getint16)
- [setInt32](ParticleBuffer.md#setint32)
- [getInt32](ParticleBuffer.md#getint32)
- [setUint8](ParticleBuffer.md#setuint8)
- [getUint8](ParticleBuffer.md#getuint8)
- [setUint16](ParticleBuffer.md#setuint16)
- [getUint16](ParticleBuffer.md#getuint16)
- [setUint32](ParticleBuffer.md#setuint32)
- [getUint32](ParticleBuffer.md#getuint32)
- [setVector2](ParticleBuffer.md#setvector2)
- [getVector2](ParticleBuffer.md#getvector2)
- [setVector3](ParticleBuffer.md#setvector3)
- [getVector3](ParticleBuffer.md#getvector3)
- [setVector4](ParticleBuffer.md#setvector4)
- [getVector4](ParticleBuffer.md#getvector4)
- [setVector4Array](ParticleBuffer.md#setvector4array)
- [setColor](ParticleBuffer.md#setcolor)
- [getColor](ParticleBuffer.md#getcolor)
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

• **new ParticleBuffer**(`size`, `data?`): [`ParticleBuffer`](ParticleBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `data?` | `Float32Array` |

#### Returns

[`ParticleBuffer`](ParticleBuffer.md)

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

• **memoryNodes**: `Map`\<`string` \| `number`, `MemoryInfo`\>

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

### readBoole

▸ **readBoole**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

GPUBufferBase.readBoole

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L62)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L70)

___

### getFloat

▸ **getFloat**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

GPUBufferBase.getFloat

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L79)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L87)

___

### getInt8

▸ **getInt8**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

GPUBufferBase.getInt8

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L96)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L104)

___

### getInt16

▸ **getInt16**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

GPUBufferBase.getInt16

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L113)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L121)

___

### getInt32

▸ **getInt32**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

GPUBufferBase.getInt32

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L130)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L138)

___

### getUint8

▸ **getUint8**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

GPUBufferBase.getUint8

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L147)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L156)

___

### getUint16

▸ **getUint16**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

GPUBufferBase.getUint16

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L165)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L173)

___

### getUint32

▸ **getUint32**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

GPUBufferBase.getUint32

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L182)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L190)

___

### getVector2

▸ **getVector2**(`name`): `Vector2`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Vector2`

#### Inherited from

GPUBufferBase.getVector2

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L199)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L207)

___

### getVector3

▸ **getVector3**(`name`): `Vector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Vector3`

#### Inherited from

GPUBufferBase.getVector3

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L216)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L224)

___

### getVector4

▸ **getVector4**(`name`): `Vector4`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Vector4`

#### Inherited from

GPUBufferBase.getVector4

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L233)

___

### setVector4Array

▸ **setVector4Array**(`name`, `v4Array`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v4Array` | `Vector3`[] \| `Vector4`[] \| `Quaternion`[] |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setVector4Array

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:241](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L241)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L250)

___

### getColor

▸ **getColor**(`name`): `Color`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Color`

#### Inherited from

GPUBufferBase.getColor

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:259](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L259)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L267)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:276](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L276)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:285](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L285)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:297](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L297)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:306](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L306)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:315](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L315)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:325](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L325)

___

### setStruct

▸ **setStruct**\<`T`\>(`c`, `index`, `data`, `property?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:334](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L334)

___

### setStructArray

▸ **setStructArray**\<`T`\>(`c`, `dataList`, `property?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:390](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L390)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.clean

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:403](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L403)

___

### apply

▸ **apply**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.apply

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:408](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L408)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:413](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L413)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:454](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L454)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:511](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L511)

___

### readBuffer

▸ **readBuffer**(): `Float32Array`

#### Returns

`Float32Array`

#### Inherited from

GPUBufferBase.readBuffer

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:558](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L558)

▸ **readBuffer**(`promise`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | ``false`` |

#### Returns

`Float32Array`

#### Inherited from

GPUBufferBase.readBuffer

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:559](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L559)

▸ **readBuffer**(`promise`): `Promise`\<`Float32Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | ``true`` |

#### Returns

`Promise`\<`Float32Array`\>

#### Inherited from

GPUBufferBase.readBuffer

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:560](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L560)
