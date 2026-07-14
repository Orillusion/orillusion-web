[**@orillusion/core**](../README.md)

***

# Class: ComputeGPUBuffer

Defined in: [src/gfx/graphics/webGpu/core/buffer/ComputeGPUBuffer.ts:9](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/ComputeGPUBuffer.ts#L9)

Storage class buffer for calculating shaders
Usage GPUBufferUsage.STORAGE & GPUBufferUsage.COPY_SRC & GPUBufferUsage.COPY_DST

## Constructors

### Constructor

> **new ComputeGPUBuffer**(`size`, `data?`): `ComputeGPUBuffer`

Defined in: [src/gfx/graphics/webGpu/core/buffer/ComputeGPUBuffer.ts:10](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/ComputeGPUBuffer.ts#L10)

#### Parameters

##### size

`number`

##### data?

`Float32Array`

#### Returns

`ComputeGPUBuffer`

#### Overrides

`GPUBufferBase.constructor`

## Properties

### bufferType

> **bufferType**: [`GPUBufferType`](../enumerations/GPUBufferType.md)

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L31)

#### Inherited from

`GPUBufferBase.bufferType`

***

### memory

> **memory**: `MemoryDO`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L32)

#### Inherited from

`GPUBufferBase.memory`

***

### memoryNodes

> **memoryNodes**: `Map`\<`string` \| `number`, `MemoryInfo`\>

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L33)

#### Inherited from

`GPUBufferBase.memoryNodes`

***

### seek

> **seek**: `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:34](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L34)

#### Inherited from

`GPUBufferBase.seek`

***

### outFloat32Array

> **outFloat32Array**: `Float32Array`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L35)

#### Inherited from

`GPUBufferBase.outFloat32Array`

***

### byteSize

> **byteSize**: `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:36](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L36)

#### Inherited from

`GPUBufferBase.byteSize`

***

### usage

> **usage**: `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L37)

#### Inherited from

`GPUBufferBase.usage`

***

### visibility

> **visibility**: `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L38)

#### Inherited from

`GPUBufferBase.visibility`

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:44](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L44)

The Context3D this buffer is bound to. Set on first GPU use via `bindCtx`.

#### Inherited from

`GPUBufferBase._boundCtx`

## Accessors

### buffer

#### Get Signature

> **get** **buffer**(): `GPUBuffer`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:71](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L71)

Return the GPU buffer. Materializes lazily on first access.
Callers must have bound this buffer to a Context3D via `bindCtx()`
before touching `.buffer`.

##### Returns

`GPUBuffer`

#### Inherited from

`GPUBufferBase.buffer`

## Methods

### debug()

> **debug**(): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:104](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L104)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.debug`

***

### reset()

> **reset**(`clean?`, `size?`, `data?`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:107](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L107)

#### Parameters

##### clean?

`boolean` = `false`

##### size?

`number` = `0`

##### data?

`Float32Array`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.reset`

***

### setBoolean()

> **setBoolean**(`name`, `v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:115](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L115)

#### Parameters

##### name

`string`

##### v

`boolean`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setBoolean`

***

### readBoole()

> **readBoole**(`name`): `boolean`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:125](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L125)

#### Parameters

##### name

`string`

#### Returns

`boolean`

#### Inherited from

`GPUBufferBase.readBoole`

***

### setFloat()

> **setFloat**(`name`, `v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:133](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L133)

#### Parameters

##### name

`string`

##### v

`number`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setFloat`

***

### getFloat()

> **getFloat**(`name`): `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:142](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L142)

#### Parameters

##### name

`string`

#### Returns

`number`

#### Inherited from

`GPUBufferBase.getFloat`

***

### setInt8()

> **setInt8**(`name`, `v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:150](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L150)

#### Parameters

##### name

`string`

##### v

`number`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setInt8`

***

### getInt8()

> **getInt8**(`name`): `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:159](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L159)

#### Parameters

##### name

`string`

#### Returns

`number`

#### Inherited from

`GPUBufferBase.getInt8`

***

### setInt16()

> **setInt16**(`name`, `v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:167](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L167)

#### Parameters

##### name

`string`

##### v

`number`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setInt16`

***

### getInt16()

> **getInt16**(`name`): `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:176](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L176)

#### Parameters

##### name

`string`

#### Returns

`number`

#### Inherited from

`GPUBufferBase.getInt16`

***

### setInt32()

> **setInt32**(`name`, `v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:184](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L184)

#### Parameters

##### name

`string`

##### v

`number`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setInt32`

***

### getInt32()

> **getInt32**(`name`): `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:193](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L193)

#### Parameters

##### name

`string`

#### Returns

`number`

#### Inherited from

`GPUBufferBase.getInt32`

***

### setUint8()

> **setUint8**(`name`, `v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:201](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L201)

#### Parameters

##### name

`string`

##### v

`number`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setUint8`

***

### getUint8()

> **getUint8**(`name`): `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:210](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L210)

#### Parameters

##### name

`string`

#### Returns

`number`

#### Inherited from

`GPUBufferBase.getUint8`

***

### setUint16()

> **setUint16**(`name`, `v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:219](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L219)

#### Parameters

##### name

`string`

##### v

`number`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setUint16`

***

### getUint16()

> **getUint16**(`name`): `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:228](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L228)

#### Parameters

##### name

`string`

#### Returns

`number`

#### Inherited from

`GPUBufferBase.getUint16`

***

### setUint32()

> **setUint32**(`name`, `v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:236](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L236)

#### Parameters

##### name

`string`

##### v

`number`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setUint32`

***

### getUint32()

> **getUint32**(`name`): `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:245](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L245)

#### Parameters

##### name

`string`

#### Returns

`number`

#### Inherited from

`GPUBufferBase.getUint32`

***

### setVector2()

> **setVector2**(`name`, `v2`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:253](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L253)

#### Parameters

##### name

`string`

##### v2

[`Vector2`](Vector2.md)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setVector2`

***

### getVector2()

> **getVector2**(`name`): [`Vector2`](Vector2.md)

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:262](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L262)

#### Parameters

##### name

`string`

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

`GPUBufferBase.getVector2`

***

### setVector3()

> **setVector3**(`name`, `v3`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:270](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L270)

#### Parameters

##### name

`string`

##### v3

[`Vector3`](Vector3.md)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setVector3`

***

### getVector3()

> **getVector3**(`name`): [`Vector3`](Vector3.md)

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:279](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L279)

#### Parameters

##### name

`string`

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`GPUBufferBase.getVector3`

***

### setVector4()

> **setVector4**(`name`, `v4`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:287](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L287)

#### Parameters

##### name

`string`

##### v4

[`Quaternion`](Quaternion.md) \| `Vector4`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setVector4`

***

### getVector4()

> **getVector4**(`name`): `Vector4`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:296](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L296)

#### Parameters

##### name

`string`

#### Returns

`Vector4`

#### Inherited from

`GPUBufferBase.getVector4`

***

### setVector4Array()

> **setVector4Array**(`name`, `v4Array`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:304](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L304)

#### Parameters

##### name

`string`

##### v4Array

[`Vector3`](Vector3.md)[] \| `Vector4`[] \| [`Quaternion`](Quaternion.md)[]

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setVector4Array`

***

### setColor()

> **setColor**(`name`, `color`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:313](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L313)

#### Parameters

##### name

`string`

##### color

[`Color`](Color.md)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setColor`

***

### getColor()

> **getColor**(`name`): [`Color`](Color.md)

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:322](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L322)

#### Parameters

##### name

`string`

#### Returns

[`Color`](Color.md)

#### Inherited from

`GPUBufferBase.getColor`

***

### setColorArray()

> **setColorArray**(`name`, `colorArray`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:330](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L330)

#### Parameters

##### name

`string`

##### colorArray

[`Color`](Color.md)[]

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setColorArray`

***

### setMatrix()

> **setMatrix**(`name`, `mat`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:339](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L339)

#### Parameters

##### name

`string`

##### mat

[`Matrix4`](Matrix4.md)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setMatrix`

***

### setMatrixArray()

> **setMatrixArray**(`name`, `mats`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:349](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L349)

#### Parameters

##### name

`string`

##### mats

[`Matrix4`](Matrix4.md)[]

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setMatrixArray`

***

### setArray()

> **setArray**(`name`, `data`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:361](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L361)

#### Parameters

##### name

`string`

##### data

`number`[]

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setArray`

***

### setFloat32Array()

> **setFloat32Array**(`name`, `data`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:370](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L370)

#### Parameters

##### name

`string`

##### data

`Float32Array`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setFloat32Array`

***

### setInt32Array()

> **setInt32Array**(`name`, `data`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:379](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L379)

#### Parameters

##### name

`string`

##### data

`Int32Array`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setInt32Array`

***

### setUint32Array()

> **setUint32Array**(`name`, `data`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:389](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L389)

#### Parameters

##### name

`string`

##### data

`Uint32Array`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setUint32Array`

***

### allocMemoryNode()

> **allocMemoryNode**(`name`, `byteSize`): `MemoryInfo`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:398](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L398)

#### Parameters

##### name

`string`

##### byteSize

`number`

#### Returns

`MemoryInfo`

#### Inherited from

`GPUBufferBase.allocMemoryNode`

***

### getMemoryNode()

> **getMemoryNode**(`name`): `MemoryInfo`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:407](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L407)

#### Parameters

##### name

`string`

#### Returns

`MemoryInfo`

#### Inherited from

`GPUBufferBase.getMemoryNode`

***

### setStruct()

> **setStruct**\<`T`\>(`c`, `index`, `data`, `property?`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:411](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L411)

#### Type Parameters

##### T

`T` *extends* [`Struct`](Struct.md)

#### Parameters

##### c

() => `T`

##### index

`number`

##### data

`any`

##### property?

`string`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setStruct`

***

### setStructArray()

> **setStructArray**\<`T`\>(`c`, `dataList`, `property?`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:470](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L470)

#### Type Parameters

##### T

`T` *extends* [`Struct`](Struct.md)

#### Parameters

##### c

() => `T`

##### dataList

`any`[]

##### property?

`string`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.setStructArray`

***

### clean()

> **clean**(): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:478](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L478)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.clean`

***

### apply()

> **apply**(`ctx?`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:489](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L489)

Upload CPU-side memory to the GPU buffer. Lazy-materializes when a
Context3D is available. If called with no ctx and the buffer is not
yet bound, the upload is DEFERRED: CPU data remains in
`shareDataBuffer` and flows to the GPU automatically when `.buffer`
is first accessed with a real ctx (via `_materialize`).

#### Parameters

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.apply`

***

### mapAsyncWrite()

> **mapAsyncWrite**(`floatArray`, `len`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:502](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L502)

#### Parameters

##### floatArray

[`FloatArray`](../type-aliases/FloatArray.md)

##### len

`number`

#### Returns

`void`

#### Inherited from

`GPUBufferBase.mapAsyncWrite`

***

### destroy()

> **destroy**(): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:554](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L554)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.destroy`

***

### resizeBuffer()

> **resizeBuffer**(`size`, `data?`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:603](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L603)

#### Parameters

##### size

`number`

##### data?

[`ArrayBufferData`](../type-aliases/ArrayBufferData.md)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.resizeBuffer`

***

### readBuffer()

#### Call Signature

> **readBuffer**(): `Float32Array`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:645](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L645)

##### Returns

`Float32Array`

##### Inherited from

`GPUBufferBase.readBuffer`

#### Call Signature

> **readBuffer**(`promise`): `Float32Array`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:646](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L646)

##### Parameters

###### promise

`false`

##### Returns

`Float32Array`

##### Inherited from

`GPUBufferBase.readBuffer`

#### Call Signature

> **readBuffer**(`promise`): `Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:647](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L647)

##### Parameters

###### promise

`true`

##### Returns

`Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

##### Inherited from

`GPUBufferBase.readBuffer`
