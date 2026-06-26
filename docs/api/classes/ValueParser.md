[**@orillusion/core**](../README.md)

***

# Class: ValueParser

Defined in: [src/loader/parser/prefab/prefabData/ValueParser.ts:22](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/ValueParser.ts#L22)

Decodes a typed value from a prefab byte stream. Reads the leading type tag
and returns the decoded value together with its [ValueEnumType](../enumerations/ValueEnumType.md). Used
by KV and component property decoding throughout prefab parsing.

## Constructors

### Constructor

> **new ValueParser**(): `ValueParser`

#### Returns

`ValueParser`

## Properties

### \_currentCtx

> `static` **\_currentCtx**: [`Context3D`](Context3D.md)

Defined in: [src/loader/parser/prefab/prefabData/ValueParser.ts:29](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/ValueParser.ts#L29)

Scoped rendering context for resource lookups (mesh/texture/material).
Set by PrefabParser at parse start and consumed by the lookups below.
Prefab parsing is not re-entrant in practice (a single parser drives
the whole buffer synchronously per call), so a shared slot is adequate.

## Methods

### parser()

> `static` **parser**(`bytes`): `object`

Defined in: [src/loader/parser/prefab/prefabData/ValueParser.ts:36](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/ValueParser.ts#L36)

Decode a single typed value from the stream.

#### Parameters

##### bytes

`BytesArray`

the prefab byte stream positioned at a value's type tag.

#### Returns

`object`

the decoded value `v` and its type tag `t`.

##### t

> **t**: [`ValueEnumType`](../enumerations/ValueEnumType.md)

##### v

> **v**: [`CurveValueType`](../type-aliases/CurveValueType.md)
