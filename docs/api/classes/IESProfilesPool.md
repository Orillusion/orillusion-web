[**@orillusion/core**](../README.md)

***

# Class: IESProfilesPool

Defined in: [src/components/lights/IESProfiles.ts:52](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L52)

Per-Context3D registry of IES profiles. Each engine owns one pool
(lazily created through `ctx.cache`) holding the texture array bound
as `iesTextureArrayMap` plus the profile -> layer assignments, so
sibling engines never share GPU textures or the USE_IES_PROFILE
shader define. The pool dies with the Context3D cache, so engine
teardown / device loss cannot leak a texture from a dead device.

## Constructors

### Constructor

> **new IESProfilesPool**(`ctx`): `IESProfilesPool`

Defined in: [src/components/lights/IESProfiles.ts:60](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L60)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

`IESProfilesPool`

## Properties

### MAX\_PROFILES

> `readonly` `static` **MAX\_PROFILES**: `number` = `48`

Defined in: [src/components/lights/IESProfiles.ts:54](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L54)

Layer capacity of the texture array.

***

### iesTexture

> **iesTexture**: `BitmapTexture2DArray` = `null`

Defined in: [src/components/lights/IESProfiles.ts:56](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L56)

## Accessors

### use

#### Get Signature

> **get** **use**(): `boolean`

Defined in: [src/components/lights/IESProfiles.ts:69](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L69)

True once any profile is registered — drives the USE_IES_PROFILE shader define.

##### Returns

`boolean`

## Methods

### for()

> `static` **for**(`ctx`): `IESProfilesPool`

Defined in: [src/components/lights/IESProfiles.ts:64](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L64)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

`IESProfilesPool`

***

### register()

> **register**(`profile`): `number`

Defined in: [src/components/lights/IESProfiles.ts:78](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L78)

Register a profile and return its texture-array layer index.
Idempotent for an already-registered profile. Returns -1 (no IES
applied) when the profile has no texture yet or the pool is full.

#### Parameters

##### profile

[`IESProfiles`](IESProfiles.md)

#### Returns

`number`
