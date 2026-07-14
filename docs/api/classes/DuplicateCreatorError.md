[**@orillusion/core**](../README.md)

***

# Class: DuplicateCreatorError

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:96](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L96)

Raised when two passes call `b.write(name, factory)` for the same
`name`. Only one pass may be the creator of a given resource;
additional passes that also write must drop their factory and
become mutators.

## Extends

- [`GraphCompileError`](GraphCompileError.md)

## Constructors

### Constructor

> **new DuplicateCreatorError**(`resource`, `creators`): `DuplicateCreatorError`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:99](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L99)

#### Parameters

##### resource

`string`

##### creators

readonly `string`[]

#### Returns

`DuplicateCreatorError`

#### Overrides

[`GraphCompileError`](GraphCompileError.md).[`constructor`](GraphCompileError.md#constructor)

## Properties

### resource

> `readonly` **resource**: `string`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:97](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L97)

***

### creators

> `readonly` **creators**: readonly `string`[]

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:98](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L98)
