[**@orillusion/core**](../README.md)

***

# Class: WaterSpectrum

Defined in: [src/components/renderer/WaterSpectrum.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterSpectrum.ts#L10)

Wind-driven ocean waves for [WaterRenderer.spectrum](WaterRenderer.md#spectrum): a JONSWAP
spectrum, spread around the wind direction, simulated with FFTs in
three cascades from swells hundreds of metres long down to centimetre
ripples. Adds to the Gerstner waves.

## Constructors

### Constructor

> **new WaterSpectrum**(): `WaterSpectrum`

#### Returns

`WaterSpectrum`

## Properties

### windSpeed

> **windSpeed**: `number` = `10`

Defined in: [src/components/renderer/WaterSpectrum.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterSpectrum.ts#L12)

Wind speed 10 m above the water, in metres per second.

***

### windDirection

> **windDirection**: [`Vector2`](Vector2.md)

Defined in: [src/components/renderer/WaterSpectrum.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterSpectrum.ts#L14)

Direction the wind blows toward, in the xz plane.

***

### fetch

> **fetch**: `number` = `100000`

Defined in: [src/components/renderer/WaterSpectrum.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterSpectrum.ts#L19)

Distance in metres the wind has blown over open water. A short fetch
gives young, short waves; a long one, a fully developed sea.

***

### amplitude

> **amplitude**: `number` = `1`

Defined in: [src/components/renderer/WaterSpectrum.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterSpectrum.ts#L21)

Wave height scale.

***

### choppiness

> **choppiness**: `number` = `1`

Defined in: [src/components/renderer/WaterSpectrum.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterSpectrum.ts#L26)

How far the water moves sideways toward the crests: 0 gives rounded
waves, 1 sharp crests and troughs that whitecaps break from.

***

### seed

> **seed**: `number` = `1`

Defined in: [src/components/renderer/WaterSpectrum.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterSpectrum.ts#L28)

Random seed of the wave phases.
