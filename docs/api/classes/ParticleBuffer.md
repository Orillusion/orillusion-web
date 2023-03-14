# Class: ParticleBuffer

## Hierarchy

- `GPUBufferBase`

  ↳ **`ParticleBuffer`**


### Properties

- [buffer](ParticleBuffer.md#buffer)
- [memory](ParticleBuffer.md#memory)
- [memoryNodes](ParticleBuffer.md#memorynodes)
- [seek](ParticleBuffer.md#seek)
- [outFloat32Array](ParticleBuffer.md#outfloat32array)
- [size](ParticleBuffer.md#size)
- [visibility](ParticleBuffer.md#visibility)

### Methods

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
- [setMatrix](ParticleBuffer.md#setmatrix)
- [setMatrixArray](ParticleBuffer.md#setmatrixarray)
- [setArray](ParticleBuffer.md#setarray)
- [setFloat32Array](ParticleBuffer.md#setfloat32array)
- [setInt32Array](ParticleBuffer.md#setint32array)
- [setStruct](ParticleBuffer.md#setstruct)
- [setStructArray](ParticleBuffer.md#setstructarray)
- [apply](ParticleBuffer.md#apply)
- [readBuffer](ParticleBuffer.md#readbuffer)
- [destory](ParticleBuffer.md#destory)
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

### Constructors

- [constructor](ParticleBuffer.md#constructor)

## Properties

### buffer

• **buffer**: `GPUBuffer`

#### Inherited from

GPUBufferBase.buffer

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L21)

___

### memory

• **memory**: `MemoryDO`

#### Inherited from

GPUBufferBase.memory

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L24)

___

### memoryNodes

• **memoryNodes**: `Map`<`string` \| `number`, `MemoryInfo`\>

#### Inherited from

GPUBufferBase.memoryNodes

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L25)

___

### seek

• **seek**: `number`

#### Inherited from

GPUBufferBase.seek

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L26)

___

### outFloat32Array

• **outFloat32Array**: `Float32Array`

#### Inherited from

GPUBufferBase.outFloat32Array

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L27)

___

### size

• **size**: `number`

#### Inherited from

GPUBufferBase.size

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L28)

___

### visibility

• **visibility**: `number`

#### Inherited from

GPUBufferBase.visibility

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L29)

## Methods

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.debug

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L35)

___

### reset

▸ **reset**(`clean?`, `value?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clean` | `boolean` | `false` |
| `value` | `number` | `0` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.reset

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L96)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L103)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L112)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L121)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L130)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L139)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L148)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L157)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L166)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L175)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L184)

___

### setVector4

▸ **setVector4**(`name`, `v4`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v4` | [`Quaternion`](Quaternion.md) \| `Vector4` |

#### Returns

`void`

#### Inherited from

GPUBufferBase.setVector4

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L193)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L202)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L211)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:220](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L220)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L229)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:241](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L241)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L250)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:259](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L259)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L268)

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

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:321](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L321)

___

### apply

▸ **apply**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.apply

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:334](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L334)

___

### readBuffer

▸ **readBuffer**(): `Float32Array`

#### Returns

`Float32Array`

#### Inherited from

GPUBufferBase.readBuffer

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:339](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L339)

___

### destory

▸ **destory**(): `void`

#### Returns

`void`

#### Inherited from

GPUBufferBase.destory

#### Defined in

[src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:368](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts#L368)

___

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L12)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L21)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L25)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L29)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L33)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L37)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L41)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L45)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L49)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L53)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L57)

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

[src/engine/plugins/particle/buffer/ParticleBuffer.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/engine/plugins/particle/buffer/ParticleBuffer.ts#L5)
