[**@orillusion/core**](../README.md)

***

# Class: ValueOp\<T\>

Defined in: [src/math/enum/T/ValueOp.ts:7](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/ValueOp.ts#L7)

Generic arithmetic helpers for curve value types (number, Vector2/3/4, Quaternion).

## Type Parameters

### T

`T` *extends* [`CurveValueType`](../type-aliases/CurveValueType.md)

## Constructors

### Constructor

> **new ValueOp**\<`T`\>(): `ValueOp`\<`T`\>

#### Returns

`ValueOp`\<`T`\>

## Methods

### sub()

> `static` **sub**\<`T`\>(`v1`, `v2`): `number` \| [`Vector3`](Vector3.md) \| [`Quaternion`](Quaternion.md) \| [`Vector2`](Vector2.md) \| `Vector4`

Defined in: [src/math/enum/T/ValueOp.ts:14](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/ValueOp.ts#L14)

Subtract one curve value from another, dispatching on the runtime value type.

#### Type Parameters

##### T

`T` *extends* [`CurveValueType`](../type-aliases/CurveValueType.md)

#### Parameters

##### v1

`T`

minuend

##### v2

`T`

subtrahend

#### Returns

`number` \| [`Vector3`](Vector3.md) \| [`Quaternion`](Quaternion.md) \| [`Vector2`](Vector2.md) \| `Vector4`

the component-wise difference of the same type
