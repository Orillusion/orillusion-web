[**@orillusion/core**](../README.md)

***

# Class: ColorGradingUtil

Defined in: [src/util/ColorGradingUtil.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/util/ColorGradingUtil.ts#L13)

CPU mirror of `ColorGradingShader`, plus helpers to author strip LUTs.

LUT layout (the common "256×16" strip, generalized): `size` slices side by
side, each `size`×`size`. Inside a slice x = red, y = green (top row is
green 0); the slice index is blue. Values are sRGB-encoded 8-bit.

## Constructors

### Constructor

> **new ColorGradingUtil**(): `ColorGradingUtil`

#### Returns

`ColorGradingUtil`

## Methods

### neutral()

> `static` **neutral**(): [`ColorGradingSetting`](../type-aliases/ColorGradingSetting.md)

Defined in: [src/util/ColorGradingUtil.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/util/ColorGradingUtil.ts#L15)

Settings that leave the image untouched.

#### Returns

[`ColorGradingSetting`](../type-aliases/ColorGradingSetting.md)

***

### whiteBalance()

> `static` **whiteBalance**(`temperature`, `tint`): `RGB`

Defined in: [src/util/ColorGradingUtil.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/util/ColorGradingUtil.ts#L20)

Per-channel multipliers for a temperature / tint pair.

#### Parameters

##### temperature

`number`

##### tint

`number`

#### Returns

`RGB`

***

### apply()

> `static` **apply**(`rgb`, `s`): `RGB`

Defined in: [src/util/ColorGradingUtil.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/util/ColorGradingUtil.ts#L25)

Apply the parametric grade (everything except the LUT) to a linear display-referred color.

#### Parameters

##### rgb

`RGB`

##### s

[`ColorGradingSetting`](../type-aliases/ColorGradingSetting.md)

#### Returns

`RGB`

***

### createLUTData()

> `static` **createLUTData**(`size?`, `fn?`): `object`

Defined in: [src/util/ColorGradingUtil.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/util/ColorGradingUtil.ts#L44)

Build the RGBA8 pixels of a strip LUT from a function on sRGB-encoded
colors in [0,1]. `fn` defaults to identity (a neutral LUT).

#### Parameters

##### size?

`number` = `16`

##### fn?

(`r`, `g`, `b`) => `RGB`

#### Returns

`object`

`{ data, width: size*size, height: size }`

##### data

> **data**: `Uint8Array`

##### width

> **width**: `number`

##### height

> **height**: `number`

***

### sampleLUT()

> `static` **sampleLUT**(`lut`, `srgb`): `RGB`

Defined in: [src/util/ColorGradingUtil.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/util/ColorGradingUtil.ts#L63)

Trilinear lookup into strip-LUT pixels, sRGB-encoded in and out. Mirrors the shader.

#### Parameters

##### lut

###### data

`Uint8Array`

###### width

`number`

###### height

`number`

##### srgb

`RGB`

#### Returns

`RGB`

***

### applyWithLUT()

> `static` **applyWithLUT**(`rgb`, `s`, `lut`): `RGB`

Defined in: [src/util/ColorGradingUtil.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/util/ColorGradingUtil.ts#L78)

Full CPU pipeline: parametric grade, then the LUT blended by `lutIntensity`. Linear in, linear out.

#### Parameters

##### rgb

`RGB`

##### s

[`ColorGradingSetting`](../type-aliases/ColorGradingSetting.md)

##### lut

###### data

`Uint8Array`

###### width

`number`

###### height

`number`

#### Returns

`RGB`
