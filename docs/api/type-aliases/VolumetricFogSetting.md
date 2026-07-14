[**@orillusion/core**](../README.md)

***

# Type Alias: VolumetricFogSetting

> **VolumetricFogSetting** = `object`

Defined in: [src/setting/post/VolumetricFogSetting.ts:5](https://github.com/orillusion/orillusion/blob/main/src/setting/post/VolumetricFogSetting.ts#L5)

Settings for VolumetricFogPost (screen-space MVP). See the post
class for an explanation of trade-offs vs a froxel grid.

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/VolumetricFogSetting.ts:7](https://github.com/orillusion/orillusion/blob/main/src/setting/post/VolumetricFogSetting.ts#L7)

Whether the post pass runs. Toggled by `addPost` / detach.

***

### density

> **density**: `number`

Defined in: [src/setting/post/VolumetricFogSetting.ts:10](https://github.com/orillusion/orillusion/blob/main/src/setting/post/VolumetricFogSetting.ts#L10)

Beer-Lambert extinction coefficient per unit distance.
 0.0 disables fog absorption. 0.05 is a good baseline.

***

### scatteringIntensity

> **scatteringIntensity**: `number`

Defined in: [src/setting/post/VolumetricFogSetting.ts:13](https://github.com/orillusion/orillusion/blob/main/src/setting/post/VolumetricFogSetting.ts#L13)

Multiplier on accumulated scattering. Punchier values
 amplify "god rays" near the sun. 1.0 default.

***

### anisotropy

> **anisotropy**: `number`

Defined in: [src/setting/post/VolumetricFogSetting.ts:17](https://github.com/orillusion/orillusion/blob/main/src/setting/post/VolumetricFogSetting.ts#L17)

Henyey-Greenstein phase asymmetry [-0.99, 0.99]. Positive =
 forward scatter (light shafts visible looking toward sun);
 negative = backward; 0 = isotropic. 0.6 is canonical.

***

### maxDistance

> **maxDistance**: `number`

Defined in: [src/setting/post/VolumetricFogSetting.ts:20](https://github.com/orillusion/orillusion/blob/main/src/setting/post/VolumetricFogSetting.ts#L20)

Cap the ray-march distance in world units. Past this,
 transmittance saturates. 100 default.

***

### stepCount

> **stepCount**: `number`

Defined in: [src/setting/post/VolumetricFogSetting.ts:23](https://github.com/orillusion/orillusion/blob/main/src/setting/post/VolumetricFogSetting.ts#L23)

Number of march steps per pixel. 16 (cheap, banded) → 64
 (smooth, expensive). 32 default.

***

### ambient

> **ambient**: `object`

Defined in: [src/setting/post/VolumetricFogSetting.ts:26](https://github.com/orillusion/orillusion/blob/main/src/setting/post/VolumetricFogSetting.ts#L26)

Ambient scattering tint added at every step (independent of
 the directional light). Useful for low-key blue night fogs.

#### r

> **r**: `number`

#### g

> **g**: `number`

#### b

> **b**: `number`
