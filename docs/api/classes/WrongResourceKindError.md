[**@orillusion/core**](../README.md)

***

# Class: WrongResourceKindError

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:73](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L73)

Raised when a pass calls `b.useRenderTarget('foo')` (or any other
kind-typed accessor) for a `name` whose pool entry is not the
expected kind. Eagerly thrown by the builder at setup time so the
stack trace points to the actual call site.

## Extends

- [`GraphCompileError`](GraphCompileError.md)

## Constructors

### Constructor

> **new WrongResourceKindError**(`pass`, `resource`, `expected`, `actual`): `WrongResourceKindError`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:78](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L78)

#### Parameters

##### pass

`string`

##### resource

`string`

##### expected

`string`

##### actual

`string`

#### Returns

`WrongResourceKindError`

#### Overrides

[`GraphCompileError`](GraphCompileError.md).[`constructor`](GraphCompileError.md#constructor)

## Properties

### pass

> `readonly` **pass**: `string`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:74](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L74)

***

### resource

> `readonly` **resource**: `string`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:75](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L75)

***

### expected

> `readonly` **expected**: `string`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:76](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L76)

***

### actual

> `readonly` **actual**: `string`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:77](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L77)
