[**@orillusion/core**](../README.md)

***

# Class: LensUtil

Defined in: [src/util/LensUtil.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/util/LensUtil.ts#L6)

CPU mirror of the vignette / chromatic-aberration math in `LensShader`,
for tooling and GPU-vs-CPU validation. Keep in sync with the WGSL.

## Constructors

### Constructor

> **new LensUtil**(): `LensUtil`

#### Returns

`LensUtil`

## Methods

### vignette()

> `static` **vignette**(`u`, `v`, `aspect`, `intensity`, `smoothness`, `roundness`): `number`

Defined in: [src/util/LensUtil.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/util/LensUtil.ts#L11)

Vignette multiplier at a screen UV (0..1, origin irrelevant — symmetric).
1 = untouched, 0 = fully replaced by the vignette color.

#### Parameters

##### u

`number`

##### v

`number`

##### aspect

`number`

##### intensity

`number`

##### smoothness

`number`

##### roundness

`number`

#### Returns

`number`

***

### chromaticOffset()

> `static` **chromaticOffset**(`u`, `v`, `intensity`): \[`number`, `number`\]

Defined in: [src/util/LensUtil.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/util/LensUtil.ts#L21)

UV offset applied to the red channel (blue gets the negation).

#### Parameters

##### u

`number`

##### v

`number`

##### intensity

`number`

#### Returns

\[`number`, `number`\]
