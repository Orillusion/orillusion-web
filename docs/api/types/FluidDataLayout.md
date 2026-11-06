[**@orillusion/core**](../README.md)

***

# Type Alias: FluidDataLayout

> **FluidDataLayout** = `object`

Defined in: [src/components/renderer/FluidRenderer.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L11)

Byte layout of one particle inside a particle buffer.

## Properties

### stride?

> `optional` **stride?**: `number`

Defined in: [src/components/renderer/FluidRenderer.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L13)

Bytes between two consecutive particles. Default 16 (one vec4f).

***

### positionOffset?

> `optional` **positionOffset?**: `number`

Defined in: [src/components/renderer/FluidRenderer.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L15)

Byte offset of the xyz position inside a particle. Default 0.
