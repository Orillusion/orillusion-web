[**@orillusion/core**](../README.md)

***

# Class: MorePassShader

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:7](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L7)

Parsed result of a multi-pass shader source: a name and its passes grouped by pass type.

## Constructors

### Constructor

> **new MorePassShader**(): `MorePassShader`

#### Returns

`MorePassShader`

## Properties

### name

> **name**: `string` = `''`

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:9](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L9)

Shader name declared in the source.

***

### passMap

> **passMap**: `Map`\<`string`, [`PassShader`](PassShader.md)[]\>

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:11](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L11)

Passes grouped by their pass type.
