[**@orillusion/core**](../README.md)

***

# Class: IESProfiles

Defined in: [src/components/lights/IESProfiles.ts:15](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L15)

One IES photometric profile, assignable to a light via
`LightBase.iesProfiles`. Holds only CPU-side state; the profile is
registered into the owning engine's IESProfilesPool when that
engine's light data is first uploaded (LightEntries.update), which
assigns `index` — the layer in the pool's texture array.

## Constructors

### Constructor

> **new IESProfiles**(): `IESProfiles`

#### Returns

`IESProfiles`

## Properties

### index

> **index**: `number` = `-1`

Defined in: [src/components/lights/IESProfiles.ts:19](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L19)

Layer index inside the owning pool's texture array. -1 until registered.

## Accessors

### IESTexture

#### Get Signature

> **get** **IESTexture**(): [`Texture`](Texture.md)

Defined in: [src/components/lights/IESProfiles.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L38)

The assigned IES photometric texture, or undefined if none.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **IESTexture**(`texture`): `void`

Defined in: [src/components/lights/IESProfiles.ts:25](https://github.com/orillusion/orillusion/blob/main/src/components/lights/IESProfiles.ts#L25)

Set the IES photometric texture. Can only be assigned before the
profile is registered into a pool; later assignments are ignored.

##### Parameters

###### texture

[`Texture`](Texture.md)

##### Returns

`void`
