[**@orillusion/core**](../README.md)

***

# Class: WasmMatrix

Defined in: [src/components/matrix/WasmMatrix.ts:23](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L23)

Bridge to the WebAssembly matrix module that batch-computes object
world transforms. Holds the shared SRT/state buffers mapped onto the
WASM heap and exposes setters used by [Transform](Transform.md) to feed
per-object translation, rotation and scale into the native solver.

## Constructors

### Constructor

> **new WasmMatrix**(): `WasmMatrix`

#### Returns

`WasmMatrix`

## Properties

### matrixBuffer

> `static` **matrixBuffer**: [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [src/components/matrix/WasmMatrix.ts:26](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L26)

World-matrix output buffer mapped onto the WASM heap.

***

### matrixBuffer\_32bit

> `static` **matrixBuffer\_32bit**: `Float32Array`

Defined in: [src/components/matrix/WasmMatrix.ts:28](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L28)

32-bit copy of the world matrices (used when running in double precision).

***

### matrixSRTBuffer

> `static` **matrixSRTBuffer**: [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [src/components/matrix/WasmMatrix.ts:30](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L30)

Per-object scale/rotation/translation input buffer.

***

### matrixContinuedSRTBuffer

> `static` **matrixContinuedSRTBuffer**: [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [src/components/matrix/WasmMatrix.ts:32](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L32)

Per-object continuous (per-frame delta) SRT buffer for animated transforms.

***

### matrixWorldPositionHLBuffer

> `static` **matrixWorldPositionHLBuffer**: `Float32Array`

Defined in: [src/components/matrix/WasmMatrix.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L34)

High/low split of world positions for relative-to-eye (RTE) precision.

***

### matrixStateBuffer

> `static` **matrixStateBuffer**: `Int32Array`

Defined in: [src/components/matrix/WasmMatrix.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L36)

Per-object state buffer (dirty flags, parent index, depth order).

***

### matrixBufferPtr

> `static` **matrixBufferPtr**: `number`

Defined in: [src/components/matrix/WasmMatrix.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L38)

WASM heap pointer to the world-matrix buffer.

***

### matrixSRTBufferPtr

> `static` **matrixSRTBufferPtr**: `number`

Defined in: [src/components/matrix/WasmMatrix.ts:40](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L40)

WASM heap pointer to the SRT buffer.

***

### matrixContinuedSRTBufferPtr

> `static` **matrixContinuedSRTBufferPtr**: `number`

Defined in: [src/components/matrix/WasmMatrix.ts:42](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L42)

WASM heap pointer to the continuous SRT buffer.

***

### matrixWorldPositionHLBufferPtr

> `static` **matrixWorldPositionHLBufferPtr**: `number`

Defined in: [src/components/matrix/WasmMatrix.ts:44](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L44)

WASM heap pointer to the world-position high/low buffer.

***

### matrixStateBufferPtr

> `static` **matrixStateBufferPtr**: `number`

Defined in: [src/components/matrix/WasmMatrix.ts:46](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L46)

WASM heap pointer to the state buffer.

***

### wasm

> `static` **wasm**: *typeof* `Module`

Defined in: [src/components/matrix/WasmMatrix.ts:48](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L48)

Loaded WASM matrix module instance.

***

### stateStruct

> `static` **stateStruct**: `number` = `4`

Defined in: [src/components/matrix/WasmMatrix.ts:50](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L50)

Number of Int32 entries per object in the state buffer.

***

### useDoublePrecision

> `static` **useDoublePrecision**: `boolean` = `false`

Defined in: [src/components/matrix/WasmMatrix.ts:52](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L52)

Whether matrices are stored in 64-bit (double) precision.

## Methods

### init()

> `static` **init**(`count`, `useDoublePrecision?`): `Promise`\<`void`\>

Defined in: [src/components/matrix/WasmMatrix.ts:60](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L60)

Load and initialize the WASM module, then allocate buffers for
`count` matrices.

#### Parameters

##### count

`number`

maximum number of matrices to allocate

##### useDoublePrecision?

`boolean` = `false`

use 64-bit floats when true

#### Returns

`Promise`\<`void`\>

***

### allocMatrix()

> `static` **allocMatrix**(`count`): `void`

Defined in: [src/components/matrix/WasmMatrix.ts:72](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L72)

Allocate the WASM-side matrix storage and map the shared buffers
onto the WASM heap for `count` matrices.

#### Parameters

##### count

`number`

number of matrices to allocate

#### Returns

`void`

***

### updateAllContinueTransform()

> `static` **updateAllContinueTransform**(`start`, `end`, `dt`, `RTEScale`): `void`

Defined in: [src/components/matrix/WasmMatrix.ts:113](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L113)

Advance all continuous (auto-animating) transforms in the index
range `[start, end)` by `dt`.

#### Parameters

##### start

`number`

first matrix index

##### end

`number`

one past the last matrix index

##### dt

`number`

delta time in seconds

##### RTEScale

`number`

relative-to-eye scale factor

#### Returns

`void`

***

### setParent()

> `static` **setParent**(`matIndex`, `x`, `depthOrder`): `void`

Defined in: [src/components/matrix/WasmMatrix.ts:123](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L123)

Set the parent index and depth order for a matrix.

#### Parameters

##### matIndex

`number`

matrix index to update

##### x

`number`

parent matrix index, or negative for no parent

##### depthOrder

`number`

hierarchy depth order used for update sequencing

#### Returns

`void`

***

### setTranslate()

> `static` **setTranslate**(`matIndex`, `x`, `y`, `z`): `void`

Defined in: [src/components/matrix/WasmMatrix.ts:130](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L130)

Set the local translation of a matrix.

#### Parameters

##### matIndex

`number`

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`void`

***

### setRotation()

> `static` **setRotation**(`matIndex`, `x`, `y`, `z`): `void`

Defined in: [src/components/matrix/WasmMatrix.ts:137](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L137)

Set the local rotation of a matrix (Euler degrees).

#### Parameters

##### matIndex

`number`

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`void`

***

### setScale()

> `static` **setScale**(`matIndex`, `x`, `y`, `z`): `void`

Defined in: [src/components/matrix/WasmMatrix.ts:144](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L144)

Set the local scale of a matrix.

#### Parameters

##### matIndex

`number`

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`void`

***

### setContinueTranslate()

> `static` **setContinueTranslate**(`matIndex`, `x`, `y`, `z`): `void`

Defined in: [src/components/matrix/WasmMatrix.ts:151](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L151)

Set a per-frame continuous translation delta (auto-applied each update).

#### Parameters

##### matIndex

`number`

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`void`

***

### setContinueRotation()

> `static` **setContinueRotation**(`matIndex`, `x`, `y`, `z`): `void`

Defined in: [src/components/matrix/WasmMatrix.ts:161](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L161)

Set a per-frame continuous rotation delta (auto-applied each update).

#### Parameters

##### matIndex

`number`

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`void`

***

### setContinueScale()

> `static` **setContinueScale**(`matIndex`, `x`, `y`, `z`): `void`

Defined in: [src/components/matrix/WasmMatrix.ts:171](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L171)

Set a per-frame continuous scale delta (auto-applied each update).

#### Parameters

##### matIndex

`number`

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`void`
