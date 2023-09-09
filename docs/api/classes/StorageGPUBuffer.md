# Class: StorageGPUBuffer

The buffer of the storage class
written in the computer shader or CPU Coder
usage GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST

## Hierarchy

- `GPUBufferBase`

  ↳ **`StorageGPUBuffer`**

### Constructors

- [constructor](StorageGPUBuffer.md#constructor)

### Properties

- [bufferType](StorageGPUBuffer.md#buffertype)
- [buffer](StorageGPUBuffer.md#buffer)
- [memory](StorageGPUBuffer.md#memory)
- [memoryNodes](StorageGPUBuffer.md#memorynodes)
- [seek](StorageGPUBuffer.md#seek)
- [outFloat32Array](StorageGPUBuffer.md#outfloat32array)
- [byteSize](StorageGPUBuffer.md#bytesize)
- [usage](StorageGPUBuffer.md#usage)
- [visibility](StorageGPUBuffer.md#visibility)

### Methods

- [debug](StorageGPUBuffer.md#debug)
- [reset](StorageGPUBuffer.md#reset)
- [setBoolean](StorageGPUBuffer.md#setboolean)
- [setFloat](StorageGPUBuffer.md#setfloat)
- [setInt8](StorageGPUBuffer.md#setint8)
- [setInt16](StorageGPUBuffer.md#setint16)
- [setInt32](StorageGPUBuffer.md#setint32)
- [setUint8](StorageGPUBuffer.md#setuint8)
- [setUint16](StorageGPUBuffer.md#setuint16)
- [setUint32](StorageGPUBuffer.md#setuint32)
- [setVector2](StorageGPUBuffer.md#setvector2)
- [setVector3](StorageGPUBuffer.md#setvector3)
- [setVector4](StorageGPUBuffer.md#setvector4)
- [setVector4Array](StorageGPUBuffer.md#setvector4array)
- [setColor](StorageGPUBuffer.md#setcolor)
- [setColorArray](StorageGPUBuffer.md#setcolorarray)
- [setMatrix](StorageGPUBuffer.md#setmatrix)
- [setMatrixArray](StorageGPUBuffer.md#setmatrixarray)
- [setArray](StorageGPUBuffer.md#setarray)
- [setFloat32Array](StorageGPUBuffer.md#setfloat32array)
- [setInt32Array](StorageGPUBuffer.md#setint32array)
- [setUint32Array](StorageGPUBuffer.md#setuint32array)
- [setStruct](StorageGPUBuffer.md#setstruct)
- [setStructArray](StorageGPUBuffer.md#setstructarray)
- [clean](StorageGPUBuffer.md#clean)
- [apply](StorageGPUBuffer.md#apply)
- [applyMapAsync](StorageGPUBuffer.md#applymapasync)
- [mapAsyncWrite](StorageGPUBuffer.md#mapasyncwrite)
- [destroy](StorageGPUBuffer.md#destroy)
- [readBuffer](StorageGPUBuffer.md#readbuffer)

## Constructors

### constructor

• **new StorageGPUBuffer**(`size`, `usage?`, `data?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `undefined` |
| `usage` | `number` | `0` |
| `data?` | [`ArrayBufferData`](../types/ArrayBufferData.md) | `undefined` |

#### Overrides

GPUBufferBase.constructor

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/StorageGPUBuffer.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/StorageGPUBuffer.ts#L11)

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
| `v2` | [`Vector2`](Vector2.md) |

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
| `v3` | [`Vector3`](Vector3.md) |

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
| `v4` | `Vector4` \| [`Quaternion`](Quaternion.md) |

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
| `v4Array` | `Vector4`[] \| [`Quaternion`](Quaternion.md)[] |

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
| `color` | [`Color`](Color.md) |

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
| `colorArray` | [`Color`](Color.md)[] |

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
| `mat` | [`Matrix4`](Matrix4.md) |

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
| `mats` | [`Matrix4`](Matrix4.md)[] |

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
| `T` | extends [`Struct`](Struct.md)<`T`\> |

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
| `T` | extends [`Struct`](Struct.md)<`T`\> |

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:289](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L289)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.clean

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:302](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L302)

___

### apply

▸ **apply**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.apply

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L307)

___

### applyMapAsync

▸ **applyMapAsync**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.applyMapAsync

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:312](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L312)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L316)

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

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:356](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L356)

___

### readBuffer

▸ **readBuffer**(): `Float32Array`

#### Returns

`Float32Array`

#### Inherited from

GPUBufferBase.readBuffer

#### Defined in

[src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:446](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L446)
