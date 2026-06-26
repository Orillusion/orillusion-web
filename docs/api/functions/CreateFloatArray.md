[**@orillusion/core**](../README.md)

***

# Function: CreateFloatArray()

> **CreateFloatArray**(`buffer`, `byteOffset?`, `length?`): `Float64Array`\<`ArrayBufferLike`\> \| `Float32Array`\<`ArrayBufferLike`\>

Defined in: [src/components/matrix/WasmMatrix.ts:10](https://github.com/orillusion/orillusion/blob/main/src/components/matrix/WasmMatrix.ts#L10)

Create a typed float array view, picking 64-bit precision when
[WasmMatrix.useDoublePrecision](../classes/WasmMatrix.md#usedoubleprecision) is enabled, otherwise 32-bit.

## Parameters

### buffer

`ArrayBufferLike`

### byteOffset?

`number`

### length?

`number`

## Returns

`Float64Array`\<`ArrayBufferLike`\> \| `Float32Array`\<`ArrayBufferLike`\>
