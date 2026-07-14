[**@orillusion/core**](../README.md)

***

# Function: expand()

> **expand**(`text`, `defines`): `string`

Defined in: [src/gfx/graphics/webGpu/shader/util/PreprocessorExpr.ts:265](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/PreprocessorExpr.ts#L265)

Single-pass identifier expansion.

Replaces each bare identifier in `text` with its `defines` value.
  - arguments of `defined(X)` are preserved (so `defined(FOO)` never
    collapses to `defined(1)`).
  - `true` / `false` / `defined` keywords are never substituted.
  - unknown identifiers pass through unchanged.
  - self-referential `#define A A+1` does not loop — only the outer
    scan runs, the substituted `A` inside the RHS is not re-expanded.

Function-like macros are not supported; prefer `fn` in shader code.

## Parameters

### text

`string`

### defines

`Record`\<`string`, `any`\>

## Returns

`string`
