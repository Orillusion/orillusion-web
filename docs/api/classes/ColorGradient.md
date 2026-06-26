[**@orillusion/core**](../README.md)

***

# Class: ColorGradient

Defined in: [src/math/ColorGradient.ts:7](https://github.com/orillusion/orillusion/blob/main/src/math/ColorGradient.ts#L7)

A color gradient that interpolates between an ordered array of colors.

## Constructors

### Constructor

> **new ColorGradient**(`array`): `ColorGradient`

Defined in: [src/math/ColorGradient.ts:11](https://github.com/orillusion/orillusion/blob/main/src/math/ColorGradient.ts#L11)

Creates a gradient from an ordered array of colors.

#### Parameters

##### array

[`Color`](Color.md)[]

#### Returns

`ColorGradient`

## Methods

### getColor()

> **getColor**(`p`): [`Color`](Color.md)

Defined in: [src/math/ColorGradient.ts:16](https://github.com/orillusion/orillusion/blob/main/src/math/ColorGradient.ts#L16)

Returns the interpolated color at the normalized position `p` (0 to 1).

#### Parameters

##### p

`number`

#### Returns

[`Color`](Color.md)
