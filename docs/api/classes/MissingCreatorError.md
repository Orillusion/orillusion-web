[**@orillusion/core**](../README.md)

***

# Class: MissingCreatorError

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:54](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L54)

Raised when a pass calls `b.write('foo')` (mutator, no factory)
but no other pass is the creator of `'foo'`.

## Extends

- [`GraphCompileError`](GraphCompileError.md)

## Constructors

### Constructor

> **new MissingCreatorError**(`pass`, `resource`): `MissingCreatorError`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:57](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L57)

#### Parameters

##### pass

`string`

##### resource

`string`

#### Returns

`MissingCreatorError`

#### Overrides

[`GraphCompileError`](GraphCompileError.md).[`constructor`](GraphCompileError.md#constructor)

## Properties

### pass

> `readonly` **pass**: `string`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:55](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L55)

***

### resource

> `readonly` **resource**: `string`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:56](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L56)
