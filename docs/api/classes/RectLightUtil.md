[**@orillusion/core**](../README.md)

***

# Class: RectLightUtil

Defined in: [src/util/RectLightUtil.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/util/RectLightUtil.ts#L23)

CPU mirror of `RectLight_frag`: analytic rectangular area light.

## Constructors

### Constructor

> **new RectLightUtil**(): `RectLightUtil`

#### Returns

`RectLightUtil`

## Methods

### frame()

> `static` **frame**(`light`): `object`

Defined in: [src/util/RectLightUtil.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/util/RectLightUtil.ts#L32)

Orthonormal frame of the panel: `right`, `up`, `normal`.

#### Parameters

##### light

[`RectLightDesc`](../interfaces/RectLightDesc.md)

#### Returns

`object`

##### right

> **right**: `V3`

##### up

> **up**: `V3`

##### normal

> **normal**: `V3`

***

### corners()

> `static` **corners**(`light`): `V3`[]

Defined in: [src/util/RectLightUtil.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/util/RectLightUtil.ts#L40)

The four corners in world space.

#### Parameters

##### light

[`RectLightDesc`](../interfaces/RectLightDesc.md)

#### Returns

`V3`[]

***

### formFactorVector()

> `static` **formFactorVector**(`P`, `light`): `V3`

Defined in: [src/util/RectLightUtil.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/util/RectLightUtil.ts#L53)

Unclipped vector form factor of the panel seen from `P` (Lambert's
polygon formula). Its length is the form factor toward the panel, its
direction the mean incoming light direction.

#### Parameters

##### P

`V3`

##### light

[`RectLightDesc`](../interfaces/RectLightDesc.md)

#### Returns

`V3`

***

### sphereFormFactor()

> `static` **sphereFormFactor**(`cosTheta`, `sinSigmaSqr`): `number`

Defined in: [src/util/RectLightUtil.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/util/RectLightUtil.ts#L70)

Horizon-clipped form factor of a sphere with sin²σ = `sinSigmaSqr` at angle θ from the normal.

#### Parameters

##### cosTheta

`number`

##### sinSigmaSqr

`number`

#### Returns

`number`

***

### falloff()

> `static` **falloff**(`distance`, `range`): `number`

Defined in: [src/util/RectLightUtil.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/util/RectLightUtil.ts#L82)

Distance window: 1 at the panel, 0 at `range`.

#### Parameters

##### distance

`number`

##### range

`number`

#### Returns

`number`

***

### formFactor()

> `static` **formFactor**(`P`, `N`, `light`): `number`

Defined in: [src/util/RectLightUtil.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/util/RectLightUtil.ts#L92)

Form factor (0..1) of the panel for a surface point `P` with normal `N`:
irradiance = π · radiance · formFactor. Zero behind the emitting face.

#### Parameters

##### P

`V3`

##### N

`V3`

##### light

[`RectLightDesc`](../interfaces/RectLightDesc.md)

#### Returns

`number`

***

### representativePoint()

> `static` **representativePoint**(`P`, `N`, `V`, `light`): `V3`

Defined in: [src/util/RectLightUtil.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/util/RectLightUtil.ts#L102)

Point of the panel that stands in for the whole light in the specular term.

#### Parameters

##### P

`V3`

##### N

`V3`

##### V

`V3`

##### light

[`RectLightDesc`](../interfaces/RectLightDesc.md)

#### Returns

`V3`

***

### shade()

> `static` **shade**(`P`, `N`, `V`, `albedo`, `metallic`, `roughness`, `F0`, `light`): `V3`

Defined in: [src/util/RectLightUtil.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/util/RectLightUtil.ts#L121)

Outgoing radiance toward `V` from a surface lit by the panel.
`roughness` is the shader-side value (`fragData.Roughness`).

#### Parameters

##### P

`V3`

##### N

`V3`

##### V

`V3`

##### albedo

`V3`

##### metallic

`number`

##### roughness

`number`

##### F0

`V3`

##### light

[`RectLightDesc`](../interfaces/RectLightDesc.md)

#### Returns

`V3`
