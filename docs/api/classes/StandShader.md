[**@orillusion/core**](../README.md)

***

# Class: StandShader

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:11](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L11)

## Extends

- [`Shader`](Shader.md)

## Constructors

### Constructor

> **new StandShader**(`ctx?`): `StandShader`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:15](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L15)

#### Parameters

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`StandShader`

#### Overrides

[`Shader`](Shader.md).[`constructor`](Shader.md#constructor)

## Properties

### computes

> **computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L19)

#### Inherited from

[`Shader`](Shader.md).[`computes`](Shader.md#computes)

***

### passShader

> **passShader**: `Map`\<`PassType`, [`RenderShaderPass`](RenderShaderPass.md)[]\>

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L21)

#### Inherited from

[`Shader`](Shader.md).[`passShader`](Shader.md#passshader)

## Accessors

### baseMap

#### Get Signature

> **get** **baseMap**(): [`Texture`](Texture.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:100](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L100)

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **baseMap**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:104](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L104)

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### baseColor

#### Get Signature

> **get** **baseColor**(): [`Color`](Color.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:108](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L108)

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **baseColor**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:112](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L112)

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

***

### normalMap

#### Get Signature

> **get** **normalMap**(): [`Texture`](Texture.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:116](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L116)

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **normalMap**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:120](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L120)

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### doubleSide

#### Get Signature

> **get** **doubleSide**(): `boolean`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:124](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L124)

##### Returns

`boolean`

#### Set Signature

> **set** **doubleSide**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:127](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L127)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### alphaCutoff

#### Get Signature

> **get** **alphaCutoff**(): `any`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:131](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L131)

##### Returns

`any`

#### Set Signature

> **set** **alphaCutoff**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:134](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L134)

##### Parameters

###### value

`any`

##### Returns

`void`

***

### emissiveColor

#### Get Signature

> **get** **emissiveColor**(): [`Color`](Color.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:140](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L140)

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **emissiveColor**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:144](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L144)

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

***

### emissiveIntensity

#### Get Signature

> **get** **emissiveIntensity**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:148](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L148)

##### Returns

`number`

#### Set Signature

> **set** **emissiveIntensity**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:152](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L152)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### transformUV1

#### Get Signature

> **get** **transformUV1**(): `Vector4`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:159](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L159)

get transformUV1

##### Returns

`Vector4`

#### Set Signature

> **set** **transformUV1**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:166](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L166)

set transformUV1

##### Parameters

###### value

`Vector4`

##### Returns

`void`

***

### uvTransform\_2

#### Get Signature

> **get** **uvTransform\_2**(): `Vector4`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:174](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L174)

get transformUV2

##### Returns

`Vector4`

#### Set Signature

> **set** **uvTransform\_2**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:181](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L181)

set transformUV2

##### Parameters

###### value

`Vector4`

##### Returns

`void`

***

### depthWriteEnabled

#### Get Signature

> **get** **depthWriteEnabled**(): `boolean`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:186](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L186)

##### Returns

`boolean`

#### Set Signature

> **set** **depthWriteEnabled**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:189](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L189)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### materialF0

#### Get Signature

> **get** **materialF0**(): `Vector4`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:196](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L196)

get reflectivity

##### Returns

`Vector4`

#### Set Signature

> **set** **materialF0**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:203](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L203)

set reflectivity

##### Parameters

###### value

`Vector4`

##### Returns

`void`

***

### specularColor

#### Get Signature

> **get** **specularColor**(): [`Color`](Color.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:210](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L210)

get specularColor

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **specularColor**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:217](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L217)

specularColor
set reflectivity

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

***

### roughness

#### Get Signature

> **get** **roughness**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:224](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L224)

get roughness

##### Returns

`number`

#### Set Signature

> **set** **roughness**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:231](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L231)

set roughness

##### Parameters

###### value

`number`

##### Returns

`void`

***

### metallic

#### Get Signature

> **get** **metallic**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:238](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L238)

get metallic

##### Returns

`number`

#### Set Signature

> **set** **metallic**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:245](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L245)

set metallic

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ao

#### Get Signature

> **get** **ao**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:252](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L252)

get Ambient Occlussion, dealing with the effect of ambient light on object occlusion

##### Returns

`number`

#### Set Signature

> **set** **ao**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:259](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L259)

set Ambient Occlussion, dealing with the effect of ambient light on object occlusion

##### Parameters

###### value

`number`

##### Returns

`void`

***

### metallic\_min

#### Get Signature

> **get** **metallic\_min**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:266](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L266)

get min metallic

##### Returns

`number`

#### Set Signature

> **set** **metallic\_min**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:273](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L273)

set min metallic

##### Parameters

###### value

`number`

##### Returns

`void`

***

### metallic\_max

#### Get Signature

> **get** **metallic\_max**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:280](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L280)

get max metallic

##### Returns

`number`

#### Set Signature

> **set** **metallic\_max**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:287](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L287)

set max metallic

##### Parameters

###### value

`number`

##### Returns

`void`

***

### roughness\_min

#### Get Signature

> **get** **roughness\_min**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:294](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L294)

get min roughness

##### Returns

`number`

#### Set Signature

> **set** **roughness\_min**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:301](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L301)

set min roughness

##### Parameters

###### value

`number`

##### Returns

`void`

***

### roughness\_max

#### Get Signature

> **get** **roughness\_max**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:308](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L308)

get max roughness

##### Returns

`number`

#### Set Signature

> **set** **roughness\_max**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:315](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L315)

set max roughness

##### Parameters

###### value

`number`

##### Returns

`void`

***

### normalScale

#### Get Signature

> **get** **normalScale**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:322](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L322)

Get the influence of Normal mapping on materials

##### Returns

`number`

#### Set Signature

> **set** **normalScale**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:329](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L329)

Set the influence of Normal mapping on materials

##### Parameters

###### value

`number`

##### Returns

`void`

***

### maskMap

#### Get Signature

> **get** **maskMap**(): [`Texture`](Texture.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:340](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L340)

get Mask Map
R_chanel -> AoMap 
G_chanel -> Roughness
B_chanel -> Metallic
A_chanel -> C

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **maskMap**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:351](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L351)

set Mask Map
R_chanel -> AoMap 
G_chanel -> Roughness
B_chanel -> Metallic
A_chanel -> C

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### aoMap

#### Get Signature

> **get** **aoMap**(): [`Texture`](Texture.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:374](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L374)

get Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **aoMap**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:363](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L363)

set Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### clearCoatRoughnessMap

#### Get Signature

> **get** **clearCoatRoughnessMap**(): [`Texture`](Texture.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:390](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L390)

get clearCoatRoughnessMap

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **clearCoatRoughnessMap**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:381](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L381)

set clearCoatRoughnessMap

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### brdfLUT

#### Get Signature

> **get** **brdfLUT**(): [`Texture`](Texture.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:397](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L397)

get brdf query map

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **brdfLUT**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:404](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L404)

set brdf query map

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### emissiveMap

#### Get Signature

> **get** **emissiveMap**(): [`Texture`](Texture.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:412](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L412)

get emissive map

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **emissiveMap**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:419](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L419)

set emissive map

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

***

### envIntensity

#### Get Signature

> **get** **envIntensity**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:433](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L433)

get intensity of environment light or color of sampled by texture

##### Returns

`number`

#### Set Signature

> **set** **envIntensity**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:426](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L426)

set intensity of environment light or color of sampled by texture

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ior

#### Get Signature

> **get** **ior**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:447](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L447)

get factor of refractive

##### Returns

`number`

#### Set Signature

> **set** **ior**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:440](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L440)

set factor of refractive

##### Parameters

###### value

`number`

##### Returns

`void`

***

### clearcoatFactor

#### Get Signature

> **get** **clearcoatFactor**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:469](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L469)

get the factor of the clearcoat

##### Returns

`number`

#### Set Signature

> **set** **clearcoatFactor**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:461](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L461)

Set the factor of the clearcoat

##### Parameters

###### value

`number`

##### Returns

`void`

***

### clearcoatRoughnessFactor

#### Get Signature

> **get** **clearcoatRoughnessFactor**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:484](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L484)

get the factor of the clearcoat Roughness

##### Returns

`number`

#### Set Signature

> **set** **clearcoatRoughnessFactor**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:476](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L476)

set the factor of the clearcoat Roughness

##### Parameters

###### value

`number`

##### Returns

`void`

***

### clearcoatWeight

#### Get Signature

> **get** **clearcoatWeight**(): `number`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:499](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L499)

get the weight of the clearcoat

##### Returns

`number`

#### Set Signature

> **set** **clearcoatWeight**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:491](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L491)

set the weight of the clearcoat

##### Parameters

###### value

`number`

##### Returns

`void`

***

### clearcoatColor

#### Get Signature

> **get** **clearcoatColor**(): [`Color`](Color.md)

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:514](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L514)

set the color of the clearcoat

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **clearcoatColor**(`value`): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:506](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L506)

get the color of the clearcoat

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

## Methods

### addRenderPass()

> **addRenderPass**(`renderShader`, `index?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L28)

#### Parameters

##### renderShader

[`RenderShaderPass`](RenderShaderPass.md)

##### index?

`number` = `-1`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`addRenderPass`](Shader.md#addrenderpass)

***

### removeShader()

> **removeShader**(`renderShader`, `index?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L38)

#### Parameters

##### renderShader

[`RenderShaderPass`](RenderShaderPass.md)

##### index?

`number` = `-1`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`removeShader`](Shader.md#removeshader)

***

### removeShaderByIndex()

> **removeShaderByIndex**(`passType`, `index?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:52](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L52)

#### Parameters

##### passType

`PassType`

##### index?

`number` = `-1`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`removeShaderByIndex`](Shader.md#removeshaderbyindex)

***

### getSubShaders()

> **getSubShaders**(`passType`): [`RenderShaderPass`](RenderShaderPass.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:63](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L63)

#### Parameters

##### passType

`PassType`

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[`Shader`](Shader.md).[`getSubShaders`](Shader.md#getsubshaders)

***

### hasSubShaders()

> **hasSubShaders**(`passType`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L67)

#### Parameters

##### passType

`PassType`

#### Returns

`boolean`

#### Inherited from

[`Shader`](Shader.md).[`hasSubShaders`](Shader.md#hassubshaders)

***

### getDefaultShaders()

> **getDefaultShaders**(): [`RenderShaderPass`](RenderShaderPass.md)[]

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:72](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L72)

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[`Shader`](Shader.md).[`getDefaultShaders`](Shader.md#getdefaultshaders)

***

### getDefaultColorShader()

> **getDefaultColorShader**(): [`RenderShaderPass`](RenderShaderPass.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:76](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L76)

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

#### Inherited from

[`Shader`](Shader.md).[`getDefaultColorShader`](Shader.md#getdefaultcolorshader)

***

### setDefine()

> **setDefine**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:80](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L80)

#### Parameters

##### arg0

`string`

##### arg1

`boolean`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setDefine`](Shader.md#setdefine)

***

### getDefine()

> **getDefine**(`arg0`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:88](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L88)

#### Parameters

##### arg0

`string`

#### Returns

`boolean`

#### Inherited from

[`Shader`](Shader.md).[`getDefine`](Shader.md#getdefine)

***

### hasDefine()

> **hasDefine**(`arg0`): `boolean`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:98](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L98)

#### Parameters

##### arg0

`string`

#### Returns

`boolean`

#### Inherited from

[`Shader`](Shader.md).[`hasDefine`](Shader.md#hasdefine)

***

### deleteDefine()

> **deleteDefine**(`arg0`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:109](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L109)

#### Parameters

##### arg0

`string`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`deleteDefine`](Shader.md#deletedefine)

***

### setUniform()

> **setUniform**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:117](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L117)

#### Parameters

##### arg0

`string`

##### arg1

`any`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniform`](Shader.md#setuniform)

***

### setUniformFloat()

> **setUniformFloat**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:125](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L125)

#### Parameters

##### arg0

`string`

##### arg1

`number`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformFloat`](Shader.md#setuniformfloat)

***

### setUniformInt32()

> **setUniformInt32**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:133](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L133)

#### Parameters

##### arg0

`string`

##### arg1

`number`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformInt32`](Shader.md#setuniformint32)

***

### setUniformVector2()

> **setUniformVector2**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:141](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L141)

#### Parameters

##### arg0

`string`

##### arg1

[`Vector2`](Vector2.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformVector2`](Shader.md#setuniformvector2)

***

### setUniformVector3()

> **setUniformVector3**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:149](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L149)

#### Parameters

##### arg0

`string`

##### arg1

[`Vector3`](Vector3.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformVector3`](Shader.md#setuniformvector3)

***

### setUniformVector4()

> **setUniformVector4**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:157](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L157)

#### Parameters

##### arg0

`string`

##### arg1

`Vector4`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformVector4`](Shader.md#setuniformvector4)

***

### setUniformColor()

> **setUniformColor**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:165](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L165)

#### Parameters

##### arg0

`string`

##### arg1

[`Color`](Color.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformColor`](Shader.md#setuniformcolor)

***

### getUniform()

> **getUniform**(`arg0`): `any`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:173](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L173)

#### Parameters

##### arg0

`string`

#### Returns

`any`

#### Inherited from

[`Shader`](Shader.md).[`getUniform`](Shader.md#getuniform)

***

### getUniformFloat()

> **getUniformFloat**(`arg0`): `number`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:177](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L177)

#### Parameters

##### arg0

`string`

#### Returns

`number`

#### Inherited from

[`Shader`](Shader.md).[`getUniformFloat`](Shader.md#getuniformfloat)

***

### getUniformVector2()

> **getUniformVector2**(`arg0`): [`Vector2`](Vector2.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:181](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L181)

#### Parameters

##### arg0

`string`

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[`Shader`](Shader.md).[`getUniformVector2`](Shader.md#getuniformvector2)

***

### getUniformVector3()

> **getUniformVector3**(`arg0`): [`Vector3`](Vector3.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:185](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L185)

#### Parameters

##### arg0

`string`

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Shader`](Shader.md).[`getUniformVector3`](Shader.md#getuniformvector3)

***

### getUniformVector4()

> **getUniformVector4**(`arg0`): `Vector4`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:189](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L189)

#### Parameters

##### arg0

`string`

#### Returns

`Vector4`

#### Inherited from

[`Shader`](Shader.md).[`getUniformVector4`](Shader.md#getuniformvector4)

***

### getUniformColor()

> **getUniformColor**(`arg0`): [`Color`](Color.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:193](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L193)

#### Parameters

##### arg0

`string`

#### Returns

[`Color`](Color.md)

#### Inherited from

[`Shader`](Shader.md).[`getUniformColor`](Shader.md#getuniformcolor)

***

### setTexture()

> **setTexture**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:197](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L197)

#### Parameters

##### arg0

`string`

##### arg1

[`Texture`](Texture.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setTexture`](Shader.md#settexture)

***

### getTexture()

> **getTexture**(`arg0`): [`Texture`](Texture.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:206](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L206)

#### Parameters

##### arg0

`string`

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[`Shader`](Shader.md).[`getTexture`](Shader.md#gettexture)

***

### setUniformBuffer()

> **setUniformBuffer**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:210](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L210)

#### Parameters

##### arg0

`string`

##### arg1

[`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setUniformBuffer`](Shader.md#setuniformbuffer)

***

### getUniformBuffer()

> **getUniformBuffer**(`arg0`): `GPUBufferBase`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:218](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L218)

#### Parameters

##### arg0

`string`

#### Returns

`GPUBufferBase`

#### Inherited from

[`Shader`](Shader.md).[`getUniformBuffer`](Shader.md#getuniformbuffer)

***

### setStorageBuffer()

> **setStorageBuffer**(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:222](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L222)

#### Parameters

##### arg0

`string`

##### arg1

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setStorageBuffer`](Shader.md#setstoragebuffer)

***

### getStorageBuffer()

> **getStorageBuffer**(`arg0`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:230](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L230)

#### Parameters

##### arg0

`string`

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Inherited from

[`Shader`](Shader.md).[`getStorageBuffer`](Shader.md#getstoragebuffer)

***

### setStructStorageBuffer()

> **setStructStorageBuffer**\<`T`\>(`arg0`, `arg1`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:234](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L234)

#### Type Parameters

##### T

`T` *extends* [`Struct`](Struct.md)

#### Parameters

##### arg0

`string`

##### arg1

[`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`setStructStorageBuffer`](Shader.md#setstructstoragebuffer)

***

### getStructStorageBuffer()

> **getStructStorageBuffer**(`arg0`): `GPUBufferBase`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:242](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L242)

#### Parameters

##### arg0

`string`

#### Returns

`GPUBufferBase`

#### Inherited from

[`Shader`](Shader.md).[`getStructStorageBuffer`](Shader.md#getstructstoragebuffer)

***

### noticeValueChange()

> **noticeValueChange**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:246](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L246)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`noticeValueChange`](Shader.md#noticevaluechange)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:254](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L254)

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`destroy`](Shader.md#destroy)

***

### clone()

> **clone**(): [`Shader`](Shader.md)

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:271](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L271)

#### Returns

[`Shader`](Shader.md)

#### Inherited from

[`Shader`](Shader.md).[`clone`](Shader.md#clone)

***

### applyUniform()

> **applyUniform**(): `void`

Defined in: [src/gfx/graphics/webGpu/shader/Shader.ts:289](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L289)

#### Returns

`void`

#### Inherited from

[`Shader`](Shader.md).[`applyUniform`](Shader.md#applyuniform)

***

### setDefault()

> **setDefault**(): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:39](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L39)

#### Returns

`void`

***

### useCleanCoat()

> **useCleanCoat**(): `void`

Defined in: [src/loader/parser/prefab/mats/shader/StandShader.ts:454](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L454)

valid USE_CLEARCOAT define in shader

#### Returns

`void`
