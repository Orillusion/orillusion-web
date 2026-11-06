[**@orillusion/core**](../README.md)

***

# Enumeration: FluidThicknessMode

Defined in: [src/components/renderer/FluidRenderer.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L33)

How the thickness used for light absorption is measured.

## Enumeration Members

### Accumulated

> **Accumulated**: `0`

Defined in: [src/components/renderer/FluidRenderer.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L35)

Sum of every particle's contribution along the view ray ([FluidRenderer.particleThicknessAlpha](../classes/FluidRenderer.md#particlethicknessalpha) each). Follows the particle density, so uneven sampling shows as uneven absorption.

***

### Geometric

> **Geometric**: `1`

Defined in: [src/components/renderer/FluidRenderer.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L37)

Distance between the near and the far side of the fluid along the view ray, in world units; even inside a still body of fluid. Gaps between separate bodies along the ray count as fluid.
