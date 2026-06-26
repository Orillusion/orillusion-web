[**@orillusion/core**](../README.md)

***

# Class: Interpolator

Defined in: [src/math/TimeInterpolator.ts:348](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L348)

interpolator class

## Constructors

### Constructor

> **new Interpolator**(): `Interpolator`

#### Returns

`Interpolator`

## Methods

### to()

> `static` **to**(`target`, `property`, `durtion`, `interpolatorEnum?`): `Interpolator`

Defined in: [src/math/TimeInterpolator.ts:411](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L411)

Creates an animation from the current property to the specified target property.

#### Parameters

##### target

`any`

Objects that need to be animated

##### property

`any`

Animation parameter

##### durtion

`number`

Animation duration, usually seconds

##### interpolatorEnum?

[`InterpolatorEnum`](../enumerations/InterpolatorEnum.md) = `InterpolatorEnum.AccelerateInterpolator`

Interpolator type

#### Returns

`Interpolator`

***

### removeList()

> `static` **removeList**(`interpolators`, `dispose?`): `void`

Defined in: [src/math/TimeInterpolator.ts:456](https://github.com/orillusion/orillusion/blob/main/src/math/TimeInterpolator.ts#L456)

Remove a list of interpolators from the active pool.

#### Parameters

##### interpolators

`Interpolator`[]

interpolators to remove

##### dispose?

`boolean`

whether to dispose each removed interpolator

#### Returns

`void`
