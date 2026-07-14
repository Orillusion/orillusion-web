[**@orillusion/core**](../README.md)

***

# Class: MorePassParser

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L33)

Parser that splits a multi-pass shader source into a [MorePassShader](MorePassShader.md).

## Constructors

### Constructor

> **new MorePassParser**(): `MorePassParser`

#### Returns

`MorePassParser`

## Methods

### parser()

> `static` **parser**(`code`, `defineValue`): [`MorePassShader`](MorePassShader.md)

Defined in: [src/gfx/graphics/webGpu/shader/util/MorePassParser.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/MorePassParser.ts#L45)

Parse a multi-pass shader source into a [MorePassShader](MorePassShader.md).

#### Parameters

##### code

`string`

the raw shader source code

##### defineValue

preprocessor define values applied to each pass

#### Returns

[`MorePassShader`](MorePassShader.md)
