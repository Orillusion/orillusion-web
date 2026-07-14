[**@orillusion/core**](../README.md)

***

# Class: UnresolvedResourceError

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L37)

Raised when a pass declares `b.read('foo')` (or `b.write('foo')`
without factory) but no other pass is the creator of `'foo'`.

## Extends

- [`GraphCompileError`](GraphCompileError.md)

## Constructors

### Constructor

> **new UnresolvedResourceError**(`pass`, `resource`): `UnresolvedResourceError`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:40](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L40)

#### Parameters

##### pass

`string`

##### resource

`string`

#### Returns

`UnresolvedResourceError`

#### Overrides

[`GraphCompileError`](GraphCompileError.md).[`constructor`](GraphCompileError.md#constructor)

## Properties

### pass

> `readonly` **pass**: `string`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L38)

***

### resource

> `readonly` **resource**: `string`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:39](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L39)
