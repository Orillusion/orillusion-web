# Class: Interpolator

interpolator class

### Constructors

- [constructor](Interpolator.md#constructor)

### Methods

- [to](Interpolator.md#to)
- [removeList](Interpolator.md#removelist)

## Constructors

### constructor

• **new Interpolator**()

## Methods

### to

▸ `Static` **to**(`target`, `property`, `durtion`, `interpolatorEnum?`): [`Interpolator`](Interpolator.md)

Creates an animation from the current property to the specified target property.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | `any` | `undefined` | Objects that need to be animated |
| `property` | `any` | `undefined` | Animation parameter |
| `durtion` | `number` | `undefined` | Animation duration, usually seconds |
| `interpolatorEnum` | [`InterpolatorEnum`](../enums/InterpolatorEnum.md) | `InterpolatorEnum.AccelerateInterpolator` | Interpolator type |

#### Returns

[`Interpolator`](Interpolator.md)

#### Defined in

[src/math/TimeInterpolator.ts:411](https://github.com/Orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L411)

___

### removeList

▸ `Static` **removeList**(`interpolators`, `dispose?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interpolators` | [`Interpolator`](Interpolator.md)[] |
| `dispose?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/math/TimeInterpolator.ts:451](https://github.com/Orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L451)
