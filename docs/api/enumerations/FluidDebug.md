[**@orillusion/core**](../README.md)

***

# Enumeration: FluidDebug

Defined in: [src/components/renderer/FluidRenderer.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L45)

Intermediate image shown instead of the shaded fluid when
[FluidRenderer.debug](../classes/FluidRenderer.md#debug) is on.

## Enumeration Members

### DepthTexture

> **DepthTexture**: `0`

Defined in: [src/components/renderer/FluidRenderer.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L47)

Linear view-space depth of the particle spheres.

***

### DepthBlurredTexture

> **DepthBlurredTexture**: `1`

Defined in: [src/components/renderer/FluidRenderer.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L49)

Depth after the bilateral blur.

***

### ThicknessTexture

> **ThicknessTexture**: `2`

Defined in: [src/components/renderer/FluidRenderer.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L51)

Accumulated particle thickness.

***

### ThicknessBlurredTexture

> **ThicknessBlurredTexture**: `3`

Defined in: [src/components/renderer/FluidRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L53)

Thickness after the gaussian blur.

***

### Normals

> **Normals**: `4`

Defined in: [src/components/renderer/FluidRenderer.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L55)

View-space normals reconstructed from the blurred depth.
