[**@orillusion/core**](../README.md)

***

# Class: IridescenceUtil

Defined in: [src/util/IridescenceUtil.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/util/IridescenceUtil.ts#L7)

CPU mirror of `Iridescence_frag` (thin-film interference, Belcour & Barla
2017). Keep in sync with the WGSL. Useful for previews, LUT baking and
GPU-vs-CPU validation.

## Constructors

### Constructor

> **new IridescenceUtil**(): `IridescenceUtil`

#### Returns

`IridescenceUtil`

## Methods

### evalIridescence()

> `static` **evalIridescence**(`outsideIOR`, `filmIor`, `cosTheta`, `thicknessNm`, `baseF0`): \[`number`, `number`, `number`\]

Defined in: [src/util/IridescenceUtil.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/util/IridescenceUtil.ts#L36)

Fresnel reflectance (linear RGB) of a base surface with Schlick F0
`baseF0` under a thin film of index `filmIor` and thickness
`thicknessNm`, seen at `cosTheta` (N·V).

#### Parameters

##### outsideIOR

`number`

##### filmIor

`number`

##### cosTheta

`number`

##### thicknessNm

`number`

##### baseF0

\[`number`, `number`, `number`\]

#### Returns

\[`number`, `number`, `number`\]

***

### filmF0()

> `static` **filmF0**(`baseF0`, `NoV`, `factor`, `filmIor`, `thicknessNm`): \[`number`, `number`, `number`\]

Defined in: [src/util/IridescenceUtil.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/util/IridescenceUtil.ts#L78)

The F0 the PBR shader ends up using: film Fresnel converted back to a
Schlick F0 and blended with the base F0 by `factor`.

#### Parameters

##### baseF0

\[`number`, `number`, `number`\]

##### NoV

`number`

##### factor

`number`

##### filmIor

`number`

##### thicknessNm

`number`

#### Returns

\[`number`, `number`, `number`\]
