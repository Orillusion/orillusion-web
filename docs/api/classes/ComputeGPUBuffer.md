# Class: ComputeGPUBuffer

Storage class buffer for calculating shaders
Usage GPUBufferUsage.STORAGE & GPUBufferUsage.COPY_SRC & GPUBufferUsage.COPY_DST

## Hierarchy

- `GPUBufferBase`

  ↳ **`ComputeGPUBuffer`**

### Constructors

- [constructor](ComputeGPUBuffer.md#constructor)

### Properties

- [bufferType](ComputeGPUBuffer.md#buffertype)
- [buffer](ComputeGPUBuffer.md#buffer)
- [memory](ComputeGPUBuffer.md#memory)
- [memoryNodes](ComputeGPUBuffer.md#memorynodes)
- [seek](ComputeGPUBuffer.md#seek)
- [outFloat32Array](ComputeGPUBuffer.md#outfloat32array)
- [byteSize](ComputeGPUBuffer.md#bytesize)
- [usage](ComputeGPUBuffer.md#usage)
- [visibility](ComputeGPUBuffer.md#visibility)

### Methods

- [debug](ComputeGPUBuffer.md#debug)
- [reset](ComputeGPUBuffer.md#reset)
- [setBoolean](ComputeGPUBuffer.md#setboolean)
- [readBoole](ComputeGPUBuffer.md#readboole)
- [setFloat](ComputeGPUBuffer.md#setfloat)
- [getFloat](ComputeGPUBuffer.md#getfloat)
- [setInt8](ComputeGPUBuffer.md#setint8)
- [getInt8](ComputeGPUBuffer.md#getint8)
- [setInt16](ComputeGPUBuffer.md#setint16)
- [getInt16](ComputeGPUBuffer.md#getint16)
- [setInt32](ComputeGPUBuffer.md#setint32)
- [getInt32](ComputeGPUBuffer.md#getint32)
- [setUint8](ComputeGPUBuffer.md#setuint8)
- [getUint8](ComputeGPUBuffer.md#getuint8)
- [setUint16](ComputeGPUBuffer.md#setuint16)
- [getUint16](ComputeGPUBuffer.md#getuint16)
- [setUint32](ComputeGPUBuffer.md#setuint32)
- [getUint32](ComputeGPUBuffer.md#getuint32)
- [setVector2](ComputeGPUBuffer.md#setvector2)
- [getVector2](ComputeGPUBuffer.md#getvector2)
- [setVector3](ComputeGPUBuffer.md#setvector3)
- [getVector3](ComputeGPUBuffer.md#getvector3)
- [setVector4](ComputeGPUBuffer.md#setvector4)
- [getVector4](ComputeGPUBuffer.md#getvector4)
- [setVector4Array](ComputeGPUBuffer.md#setvector4array)
- [setColor](ComputeGPUBuffer.md#setcolor)
- [getColor](ComputeGPUBuffer.md#getcolor)
- [setColorArray](ComputeGPUBuffer.md#setcolorarray)
- [setMatrix](ComputeGPUBuffer.md#setmatrix)
- [setMatrixArray](ComputeGPUBuffer.md#setmatrixarray)
- [setArray](ComputeGPUBuffer.md#setarray)
- [setFloat32Array](ComputeGPUBuffer.md#setfloat32array)
- [setInt32Array](ComputeGPUBuffer.md#setint32array)
- [setUint32Array](ComputeGPUBuffer.md#setuint32array)
- [setStruct](ComputeGPUBuffer.md#setstruct)
- [setStructArray](ComputeGPUBuffer.md#setstructarray)
- [clean](ComputeGPUBuffer.md#clean)
- [apply](ComputeGPUBuffer.md#apply)
- [mapAsyncWrite](ComputeGPUBuffer.md#mapasyncwrite)
- [destroy](ComputeGPUBuffer.md#destroy)
- [resizeBuffer](ComputeGPUBuffer.md#resizebuffer)
- [readBuffer](ComputeGPUBuffer.md#readbuffer)

## Constructors

### constructor

• **new ComputeGPUBuffer**(`size`, `data?`): [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `data?` | `Float32Array` |

#### Returns

[`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Overrides

GPUBufferBase.constructor

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/ComputeGPUBuffer.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/ComputeGPUBuffer.ts#L10)

## Properties

### bufferType

• **bufferType**: [`GPUBufferType`](../enums/GPUBufferType.md)

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
| `v2` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setVector2

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L190)

___

### getVector2

▸ **getVector2**(`name`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector2`](Vector2.md)

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
| `v3` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setVector3

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L207)

___

### getVector3

▸ **getVector3**(`name`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector3`](Vector3.md)

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
| `v4` | `Vector4` \| [`Quaternion`](Quaternion.md) |

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
| `v4Array` | [`Vector3`](Vector3.md)[] \| `Vector4`[] \| [`Quaternion`](Quaternion.md)[] |

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
| `color` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setColor

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L250)

___

### getColor

▸ **getColor**(`name`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Color`](Color.md)

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
| `colorArray` | [`Color`](Color.md)[] |

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
| `mat` | [`Matrix4`](Matrix4.md) |

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
| `mats` | [`Matrix4`](Matrix4.md)[] |

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
| `T` | extends [`Struct`](Struct.md) |

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
| `T` | extends [`Struct`](Struct.md) |

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
| `data?` | [`ArrayBufferData`](../types/ArrayBufferData.md) |

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
