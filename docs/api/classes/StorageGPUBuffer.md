[**@orillusion/core**](../README.md)

***

# Class: StorageGPUBuffer

Defined in: [src/gfx/graphics/webGpu/core/buffer/StorageGPUBuffer.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/StorageGPUBuffer.ts#L10)

The buffer of the storage class
written in the computer shader or CPU Coder
usage GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST

## Constructors

### Constructor

> **new StorageGPUBuffer**(`size`, `usage?`, `data?`): `StorageGPUBuffer`

Defined in: [src/gfx/graphics/webGpu/core/buffer/StorageGPUBuffer.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/StorageGPUBuffer.ts#L11)

#### Parameters

##### size

`number`

##### usage?

`number` = `0`

##### data?

[`ArrayBufferData`](../type-aliases/ArrayBufferData.md)

#### Returns

`StorageGPUBuffer`

#### Overrides

`GPUBufferBase.constructor`

## Properties

### bufferType

> **bufferType**: [`GPUBufferType`](../enumerations/GPUBufferType.md)

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L31)

#### Inherited from

`GPUBufferBase.bufferType`

***

### memory

> **memory**: `MemoryDO`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L32)

#### Inherited from

`GPUBufferBase.memory`

***

### memoryNodes

> **memoryNodes**: `Map`\<`string` \| `number`, `MemoryInfo`\>

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L33)

#### Inherited from

`GPUBufferBase.memoryNodes`

***

### seek

> **seek**: `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L34)

#### Inherited from

`GPUBufferBase.seek`

***

### outFloat32Array

> **outFloat32Array**: `Float32Array`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L35)

#### Inherited from

`GPUBufferBase.outFloat32Array`

***

### byteSize

> **byteSize**: `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L36)

#### Inherited from

`GPUBufferBase.byteSize`

***

### usage

> **usage**: `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L37)

#### Inherited from

`GPUBufferBase.usage`

***

### visibility

> **visibility**: `number`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L38)

#### Inherited from

`GPUBufferBase.visibility`

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L45)

The Context3D this buffer is bound to. Set on first GPU use via `bindCtx`.

#### Inherited from

`GPUBufferBase._boundCtx`

## Accessors

### buffer

#### Get Signature

> **get** **buffer**(): `GPUBuffer`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L72)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L105)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.debug`

***

### reset()

> **reset**(`clean?`, `size?`, `data?`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L108)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L116)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L126)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L134)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L143)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L151)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L160)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L168)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L177)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L185)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L194)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L202)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L211)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:220](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L220)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L229)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:237](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L237)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:246](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L246)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L254)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:263](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L263)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:271](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L271)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:280](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L280)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:288](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L288)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:297](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L297)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:305](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L305)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:314](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L314)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:323](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L323)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:331](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L331)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L340)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:350](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L350)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:362](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L362)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:371](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L371)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:380](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L380)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:390](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L390)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:399](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L399)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:408](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L408)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L412)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:471](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L471)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:479](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L479)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.clean`

***

### apply()

> **apply**(`ctx?`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:490](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L490)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:511](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L511)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:584](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L584)

#### Returns

`void`

#### Inherited from

`GPUBufferBase.destroy`

***

### resizeBuffer()

> **resizeBuffer**(`size`, `data?`): `void`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:641](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L641)

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

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:683](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L683)

##### Returns

`Float32Array`

##### Inherited from

`GPUBufferBase.readBuffer`

#### Call Signature

> **readBuffer**(`promise`): `Float32Array`

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:684](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L684)

##### Parameters

###### promise

`false`

##### Returns

`Float32Array`

##### Inherited from

`GPUBufferBase.readBuffer`

#### Call Signature

> **readBuffer**(`promise`): `Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:685](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L685)

##### Parameters

###### promise

`true`

##### Returns

`Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

##### Inherited from

`GPUBufferBase.readBuffer`
