[**@orillusion/core**](../README.md)

***

# Class: GraphCompileError

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:9](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L9)

Base class for graph-compile errors. Subclass messages embed
concrete pass / resource names so users can grep to the culprit.

## Extends

- `Error`

## Extended by

- [`CyclicDependencyError`](CyclicDependencyError.md)
- [`UnresolvedResourceError`](UnresolvedResourceError.md)
- [`MissingCreatorError`](MissingCreatorError.md)
- [`WrongResourceKindError`](WrongResourceKindError.md)
- [`DuplicateCreatorError`](DuplicateCreatorError.md)

## Constructors

### Constructor

> **new GraphCompileError**(`message`): `GraphCompileError`

Defined in: [src/gfx/renderJob/graph/GraphValidator.ts:10](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/GraphValidator.ts#L10)

#### Parameters

##### message

`string`

#### Returns

`GraphCompileError`

#### Overrides

`Error.constructor`
