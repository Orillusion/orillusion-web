[**@orillusion/core**](../README.md)

***

# Enumeration: FluidDepthFilter

Defined in: [src/components/renderer/FluidRenderer.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L22)

Filter that smooths the fluid depth map.

## Enumeration Members

### Bilateral

> **Bilateral**: `0`

Defined in: [src/components/renderer/FluidRenderer.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L24)

Separable bilateral filter: spatial gaussian weighted by depth similarity.

***

### NarrowRange

> **NarrowRange**: `1`

Defined in: [src/components/renderer/FluidRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L26)

Narrow-range filter: averages only samples within a depth range that follows the surface; keeps silhouettes and separate layers sharper at larger radii.
