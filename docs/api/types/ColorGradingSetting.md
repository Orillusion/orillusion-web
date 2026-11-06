[**@orillusion/core**](../README.md)

***

# Type Alias: ColorGradingSetting

> **ColorGradingSetting** = `object`

Defined in: [src/setting/post/ColorGradingSetting.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L6)

Color Grading Setting — applied by `ColorGradingPost` AFTER the tonemap,
on display-referred linear color in [0,1].

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/ColorGradingSetting.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L8)

Master switch (set by attaching / detaching `ColorGradingPost`).

***

### exposure

> **exposure**: `number`

Defined in: [src/setting/post/ColorGradingSetting.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L10)

Exposure trim in stops (EV). 0 = unchanged, +1 doubles, −1 halves.

***

### temperature

> **temperature**: `number`

Defined in: [src/setting/post/ColorGradingSetting.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L12)

White balance, −1 (cool / blue) … +1 (warm / orange).

***

### tint

> **tint**: `number`

Defined in: [src/setting/post/ColorGradingSetting.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L14)

Green–magenta balance, −1 (green) … +1 (magenta).

***

### contrast

> **contrast**: `number`

Defined in: [src/setting/post/ColorGradingSetting.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L16)

Contrast around mid-grey, measured in gamma space. 1 = unchanged.

***

### saturation

> **saturation**: `number`

Defined in: [src/setting/post/ColorGradingSetting.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L18)

0 = greyscale, 1 = unchanged, >1 = more saturated.

***

### slope

> **slope**: \[`number`, `number`, `number`\]

Defined in: [src/setting/post/ColorGradingSetting.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L20)

ASC-CDL slope (gain) per channel. [1,1,1] = unchanged.

***

### offset

> **offset**: \[`number`, `number`, `number`\]

Defined in: [src/setting/post/ColorGradingSetting.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L22)

ASC-CDL offset (lift) per channel. [0,0,0] = unchanged.

***

### power

> **power**: \[`number`, `number`, `number`\]

Defined in: [src/setting/post/ColorGradingSetting.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L24)

ASC-CDL power (gamma) per channel. [1,1,1] = unchanged.

***

### lutIntensity

> **lutIntensity**: `number`

Defined in: [src/setting/post/ColorGradingSetting.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/setting/post/ColorGradingSetting.ts#L26)

Blend between the graded color (0) and the LUT result (1). Ignored without a LUT.
