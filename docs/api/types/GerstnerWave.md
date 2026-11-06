[**@orillusion/core**](../README.md)

***

# Type Alias: GerstnerWave

> **GerstnerWave** = `object`

Defined in: [src/components/renderer/WaterRenderer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L25)

One Gerstner wave of a [WaterRenderer](../classes/WaterRenderer.md).

## Properties

### direction

> **direction**: [`Vector2`](../classes/Vector2.md)

Defined in: [src/components/renderer/WaterRenderer.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L27)

Direction of travel in the xz plane.

***

### wavelength

> **wavelength**: `number`

Defined in: [src/components/renderer/WaterRenderer.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L29)

Crest-to-crest distance in world units.

***

### steepness

> **steepness**: `number`

Defined in: [src/components/renderer/WaterRenderer.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L31)

0 to 1; the sum over all waves should stay below 1 to avoid looping crests.
