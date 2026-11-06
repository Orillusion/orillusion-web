[**@orillusion/core**](../README.md)

***

# Class: AnisotropyUtil

Defined in: [src/util/AnisotropyUtil.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/util/AnisotropyUtil.ts#L7)

CPU mirror of `Anisotropy_frag` (the anisotropic / isotropic GGX ratio).
All vectors are unit length, in the same space; `T`, `B`, `N` form an
orthonormal frame with `T` along the grain direction.

## Constructors

### Constructor

> **new AnisotropyUtil**(): `AnisotropyUtil`

#### Returns

`AnisotropyUtil`

## Methods

### alphaT()

> `static` **alphaT**(`roughness`, `strength`): `number`

Defined in: [src/util/AnisotropyUtil.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/util/AnisotropyUtil.ts#L12)

Tangent-direction alpha for a roughness and anisotropy strength (glTF: mix(α, 1, strength²)).

#### Parameters

##### roughness

`number`

##### strength

`number`

#### Returns

`number`

***

### specularRatio()

> `static` **specularRatio**(`N`, `V`, `L`, `T`, `B`, `roughness`, `strength`): `number`

Defined in: [src/util/AnisotropyUtil.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/util/AnisotropyUtil.ts#L19)

(anisotropic D·V) / (isotropic D·V). Exactly 1 for strength 0.

#### Parameters

##### N

`number`[]

##### V

`number`[]

##### L

`number`[]

##### T

`number`[]

##### B

`number`[]

##### roughness

`number`

##### strength

`number`

#### Returns

`number`
