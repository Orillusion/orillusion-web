[**@orillusion/core**](../README.md)

***

# Enumeration: BlendMode

Defined in: [src/materials/BlendMode.ts:6](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L6)

Blend mode
|name|description|

## Enumeration Members

### NONE

> **NONE**: `0`

Defined in: [src/materials/BlendMode.ts:11](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L11)

Working only in WebGPU may improve the performance of large background images without alpha.
The source pixel is not mixed with the target pixel, so the GPU will not read colors from the target pixel.

***

### ABOVE

> **ABOVE**: `1`

Defined in: [src/materials/BlendMode.ts:16](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L16)

Display objects above the background. When the background is transparent, 
the pixel values of the displayed object are not visible.

***

### ALPHA

> **ALPHA**: `2`

Defined in: [src/materials/BlendMode.ts:21](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L21)

Transparent mode

***

### NORMAL

> **NORMAL**: `3`

Defined in: [src/materials/BlendMode.ts:26](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L26)

Normal blend mode

***

### ADD

> **ADD**: `4`

Defined in: [src/materials/BlendMode.ts:31](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L31)

Add the values of the component colors of the displayed object to its background color

***

### BELOW

> **BELOW**: `5`

Defined in: [src/materials/BlendMode.ts:36](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L36)

Add the values of the component colors of the displayed object to its background color

***

### ERASE

> **ERASE**: `6`

Defined in: [src/materials/BlendMode.ts:40](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L40)

Erase the background based on the alpha value of the displayed object.

***

### MUL

> **MUL**: `7`

Defined in: [src/materials/BlendMode.ts:45](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L45)

Multiply the values of the displayed object's constituent colors by the background color, 
and then divide by 0xFF for normalization to obtain a darker color.

***

### SCREEN

> **SCREEN**: `8`

Defined in: [src/materials/BlendMode.ts:49](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L49)

Multiply the inverse of the components of the source and target images, and then calculate the inverse result.

***

### DIVD

> **DIVD**: `9`

Defined in: [src/materials/BlendMode.ts:50](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L50)

***

### SOFT\_ADD

> **SOFT\_ADD**: `10`

Defined in: [src/materials/BlendMode.ts:51](https://github.com/orillusion/orillusion/blob/main/src/materials/BlendMode.ts#L51)
