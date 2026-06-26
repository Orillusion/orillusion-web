[**@orillusion/core**](../README.md)

***

# Class: RTDescriptor

Defined in: [src/gfx/graphics/webGpu/descriptor/RTDescriptor.ts:5](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/descriptor/RTDescriptor.ts#L5)

Describes the load/store operations and clear value for a render target attachment.

## Constructors

### Constructor

> **new RTDescriptor**(): `RTDescriptor`

#### Returns

`RTDescriptor`

## Properties

### storeOp

> **storeOp**: `string` = `'store'`

Defined in: [src/gfx/graphics/webGpu/descriptor/RTDescriptor.ts:7](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/descriptor/RTDescriptor.ts#L7)

Store operation applied at the end of the render pass.

***

### loadOp

> **loadOp**: `GPULoadOp`

Defined in: [src/gfx/graphics/webGpu/descriptor/RTDescriptor.ts:9](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/descriptor/RTDescriptor.ts#L9)

Load operation applied at the start of the render pass.

***

### clearValue

> **clearValue**: `GPUColor`

Defined in: [src/gfx/graphics/webGpu/descriptor/RTDescriptor.ts:11](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/descriptor/RTDescriptor.ts#L11)

Clear color used when the load operation is `clear`.
