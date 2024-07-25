# Class: VertexGPUBuffer

The buffer use at geometry indices
written in the computer shader or CPU Coder
usage GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX

## Hierarchy

- `GPUBufferBase`

  ↳ **`VertexGPUBuffer`**

### Constructors

- [constructor](VertexGPUBuffer.md#constructor)

### Properties

- [bufferType](VertexGPUBuffer.md#buffertype)
- [buffer](VertexGPUBuffer.md#buffer)
- [memory](VertexGPUBuffer.md#memory)
- [memoryNodes](VertexGPUBuffer.md#memorynodes)
- [seek](VertexGPUBuffer.md#seek)
- [outFloat32Array](VertexGPUBuffer.md#outfloat32array)
- [byteSize](VertexGPUBuffer.md#bytesize)
- [usage](VertexGPUBuffer.md#usage)
- [visibility](VertexGPUBuffer.md#visibility)
- [node](VertexGPUBuffer.md#node)

### Methods

- [debug](VertexGPUBuffer.md#debug)
- [reset](VertexGPUBuffer.md#reset)
- [setBoolean](VertexGPUBuffer.md#setboolean)
- [readBoole](VertexGPUBuffer.md#readboole)
- [setFloat](VertexGPUBuffer.md#setfloat)
- [getFloat](VertexGPUBuffer.md#getfloat)
- [setInt8](VertexGPUBuffer.md#setint8)
- [getInt8](VertexGPUBuffer.md#getint8)
- [setInt16](VertexGPUBuffer.md#setint16)
- [getInt16](VertexGPUBuffer.md#getint16)
- [setInt32](VertexGPUBuffer.md#setint32)
- [getInt32](VertexGPUBuffer.md#getint32)
- [setUint8](VertexGPUBuffer.md#setuint8)
- [getUint8](VertexGPUBuffer.md#getuint8)
- [setUint16](VertexGPUBuffer.md#setuint16)
- [getUint16](VertexGPUBuffer.md#getuint16)
- [setUint32](VertexGPUBuffer.md#setuint32)
- [getUint32](VertexGPUBuffer.md#getuint32)
- [setVector2](VertexGPUBuffer.md#setvector2)
- [getVector2](VertexGPUBuffer.md#getvector2)
- [setVector3](VertexGPUBuffer.md#setvector3)
- [getVector3](VertexGPUBuffer.md#getvector3)
- [setVector4](VertexGPUBuffer.md#setvector4)
- [getVector4](VertexGPUBuffer.md#getvector4)
- [setVector4Array](VertexGPUBuffer.md#setvector4array)
- [setColor](VertexGPUBuffer.md#setcolor)
- [getColor](VertexGPUBuffer.md#getcolor)
- [setColorArray](VertexGPUBuffer.md#setcolorarray)
- [setMatrix](VertexGPUBuffer.md#setmatrix)
- [setMatrixArray](VertexGPUBuffer.md#setmatrixarray)
- [setArray](VertexGPUBuffer.md#setarray)
- [setFloat32Array](VertexGPUBuffer.md#setfloat32array)
- [setInt32Array](VertexGPUBuffer.md#setint32array)
- [setUint32Array](VertexGPUBuffer.md#setuint32array)
- [setStruct](VertexGPUBuffer.md#setstruct)
- [setStructArray](VertexGPUBuffer.md#setstructarray)
- [clean](VertexGPUBuffer.md#clean)
- [apply](VertexGPUBuffer.md#apply)
- [mapAsyncWrite](VertexGPUBuffer.md#mapasyncwrite)
- [destroy](VertexGPUBuffer.md#destroy)
- [resizeBuffer](VertexGPUBuffer.md#resizebuffer)
- [readBuffer](VertexGPUBuffer.md#readbuffer)

## Constructors

### constructor

• **new VertexGPUBuffer**(`size`): [`VertexGPUBuffer`](VertexGPUBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

[`VertexGPUBuffer`](VertexGPUBuffer.md)

#### Overrides

GPUBufferBase.constructor

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/VertexGPUBuffer.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/VertexGPUBuffer.ts#L15)

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

___

### node

• **node**: `MemoryInfo`

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/VertexGPUBuffer.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/VertexGPUBuffer.ts#L14)

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
