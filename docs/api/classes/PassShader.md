[**@orillusion/core**](../README.md)

***

# Class: PassShader

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:18](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L18)

A single parsed shader pass, holding its pass type, render state and shader sources.

## Constructors

### Constructor

> **new PassShader**(): `PassShader`

#### Returns

`PassShader`

## Properties

### passType

> **passType**: `string` = `''`

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:20](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L20)

Pass type identifier (e.g. COLOR, SHADOW).

***

### shaderState

> **shaderState**: `Map`\<`string`, `any`\>

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:22](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L22)

Render state key/value pairs declared for this pass.

***

### vertexShader

> **vertexShader**: `string` = `''`

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:24](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L24)

Vertex shader source code.

***

### fragmentShader

> **fragmentShader**: `string` = `''`

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:26](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L26)

Fragment shader source code.
