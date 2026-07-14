[**@orillusion/core**](../README.md)

***

# Class: AtmosphericScatteringSkySetting

Defined in: [src/textures/AtmosphericScatteringSky.ts:14](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L14)

AtmosphericScattering Sky Setting

## Constructors

### Constructor

> **new AtmosphericScatteringSkySetting**(): `AtmosphericScatteringSkySetting`

#### Returns

`AtmosphericScatteringSkySetting`

## Properties

### sunRadius

> **sunRadius**: `number` = `500.0`

Defined in: [src/textures/AtmosphericScatteringSky.ts:16](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L16)

Angular size of the sun disc.

***

### sunRadiance

> **sunRadiance**: `number` = `11.0`

Defined in: [src/textures/AtmosphericScatteringSky.ts:18](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L18)

Radiance (brightness) of the sun.

***

### mieG

> **mieG**: `number` = `0.76`

Defined in: [src/textures/AtmosphericScatteringSky.ts:20](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L20)

Mie scattering anisotropy factor (forward-scattering bias).

***

### mieHeight

> **mieHeight**: `number` = `1200`

Defined in: [src/textures/AtmosphericScatteringSky.ts:22](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L22)

Scale height of the Mie (aerosol) layer.

***

### eyePos

> **eyePos**: `number` = `1500`

Defined in: [src/textures/AtmosphericScatteringSky.ts:24](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L24)

Height of the viewer's eye above the planet surface.

***

### sunX

> **sunX**: `number` = `0.71`

Defined in: [src/textures/AtmosphericScatteringSky.ts:26](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L26)

Sun direction's horizontal (azimuth) parameter, in [0, 1].

***

### sunY

> **sunY**: `number` = `0.56`

Defined in: [src/textures/AtmosphericScatteringSky.ts:28](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L28)

Sun direction's vertical (elevation) parameter, in [0, 1].

***

### sunBrightness

> **sunBrightness**: `number` = `1.0`

Defined in: [src/textures/AtmosphericScatteringSky.ts:30](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L30)

Overall brightness multiplier applied to the sun.

***

### displaySun

> **displaySun**: `boolean` = `true`

Defined in: [src/textures/AtmosphericScatteringSky.ts:32](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L32)

Whether the sun disc is drawn in the sky.

***

### defaultTextureCubeSize

> **defaultTextureCubeSize**: `number` = `512`

Defined in: [src/textures/AtmosphericScatteringSky.ts:34](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L34)

Default edge size of the generated sky cube texture.

***

### defaultTexture2DSize

> **defaultTexture2DSize**: `number` = `1024`

Defined in: [src/textures/AtmosphericScatteringSky.ts:36](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L36)

Default width of the generated panorama 2D texture.

***

### skyColor

> **skyColor**: [`Color`](Color.md)

Defined in: [src/textures/AtmosphericScatteringSky.ts:38](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L38)

Tint color applied to the sky.
