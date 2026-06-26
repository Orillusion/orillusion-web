[**@orillusion/core**](../README.md)

***

# Class: CyclicDependencyError

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:22](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L22)

Raised when passes form a cycle on reads/writes. The message lists
the pass names on the cycle in order.

## Extends

- [`GraphCompileError`](GraphCompileError.md)

## Constructors

### Constructor

> **new CyclicDependencyError**(`cycle`): `CyclicDependencyError`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:24](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L24)

#### Parameters

##### cycle

readonly `string`[]

#### Returns

`CyclicDependencyError`

#### Overrides

[`GraphCompileError`](GraphCompileError.md).[`constructor`](GraphCompileError.md#constructor)

## Properties

### cycle

> `readonly` **cycle**: readonly `string`[]

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L23)
