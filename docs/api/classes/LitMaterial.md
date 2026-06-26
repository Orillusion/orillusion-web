[**@orillusion/core**](../README.md)

***

# Class: LitMaterial

Defined in: [src/materials/LitMaterial.ts:24](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L24)

Physically based lit material supporting albedo, normal, ARM, emissive and
other PBR texture/parameter inputs. Serves as the standard surface material.

## Extends

- [`Material`](Material.md)

## Extended by

- [`SkinMaterial`](SkinMaterial.md)

## Constructors

### Constructor

> **new LitMaterial**(`ctx?`): `LitMaterial`

Defined in: [src/materials/LitMaterial.ts:29](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L29)

#### Parameters

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`LitMaterial`

#### Overrides

[`Material`](Material.md).[`constructor`](Material.md#constructor)

## Properties

### instanceID

> **instanceID**: `string`

Defined in: [src/materials/Material.ts:26](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L26)

Material Unique Identifier

#### Inherited from

[`Material`](Material.md).[`instanceID`](Material.md#instanceid)

***

### name

> **name**: `string`

Defined in: [src/materials/Material.ts:32](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L32)

name of this material

#### Inherited from

[`Material`](Material.md).[`name`](Material.md#name)

***

### enable

> **enable**: `boolean` = `true`

Defined in: [src/materials/Material.ts:35](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L35)

Whether this material is enabled for rendering.

#### Inherited from

[`Material`](Material.md).[`enable`](Material.md#enable)

## Accessors

### baseMap

#### Get Signature

> **get** **baseMap**(): [`Texture`](Texture.md)

Defined in: [src/materials/LitMaterial.ts:89](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L89)

Get the albedo/base color texture.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **baseMap**(`texture`): `void`

Defined in: [src/materials/LitMaterial.ts:84](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L84)

Set the albedo/base color texture.

##### Parameters

###### texture

[`Texture`](Texture.md)

##### Returns

`void`

***

### maskMap

#### Get Signature

> **get** **maskMap**(): [`Texture`](Texture.md)

Defined in: [src/materials/LitMaterial.ts:99](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L99)

Get the mask texture.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **maskMap**(`texture`): `void`

Defined in: [src/materials/LitMaterial.ts:94](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L94)

Set the mask texture.

##### Parameters

###### texture

[`Texture`](Texture.md)

##### Returns

`void`

***

### normalMap

#### Get Signature

> **get** **normalMap**(): [`Texture`](Texture.md)

Defined in: [src/materials/LitMaterial.ts:110](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L110)

Get the normal map texture.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **normalMap**(`texture`): `void`

Defined in: [src/materials/LitMaterial.ts:105](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L105)

Set the normal map texture.

##### Parameters

###### texture

[`Texture`](Texture.md)

##### Returns

`void`

***

### emissiveMap

#### Get Signature

> **get** **emissiveMap**(): [`Texture`](Texture.md)

Defined in: [src/materials/LitMaterial.ts:120](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L120)

Get the emissive texture.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **emissiveMap**(`texture`): `void`

Defined in: [src/materials/LitMaterial.ts:115](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L115)

Set the emissive texture.

##### Parameters

###### texture

[`Texture`](Texture.md)

##### Returns

`void`

***

### aoMap

#### Get Signature

> **get** **aoMap**(): [`Texture`](Texture.md)

Defined in: [src/materials/LitMaterial.ts:130](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L130)

Get the ambient occlusion texture.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **aoMap**(`texture`): `void`

Defined in: [src/materials/LitMaterial.ts:125](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L125)

Set the ambient occlusion texture.

##### Parameters

###### texture

[`Texture`](Texture.md)

##### Returns

`void`

***

### clearCoatRoughnessMap

#### Get Signature

> **get** **clearCoatRoughnessMap**(): [`Texture`](Texture.md)

Defined in: [src/materials/LitMaterial.ts:142](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L142)

Get the clearcoat roughness texture.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **clearCoatRoughnessMap**(`texture`): `void`

Defined in: [src/materials/LitMaterial.ts:135](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L135)

Set the clearcoat roughness texture and enable the clearcoat shader path.

##### Parameters

###### texture

[`Texture`](Texture.md)

##### Returns

`void`

***

### clearcoatColor

#### Get Signature

> **get** **clearcoatColor**(): [`Color`](Color.md)

Defined in: [src/materials/LitMaterial.ts:153](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L153)

Get the clearcoat tint color.

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **clearcoatColor**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:147](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L147)

Set the clearcoat tint color and enable the clearcoat shader path.

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

***

### clearcoatWeight

#### Get Signature

> **get** **clearcoatWeight**(): `number`

Defined in: [src/materials/LitMaterial.ts:164](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L164)

Get the clearcoat weight.

##### Returns

`number`

#### Set Signature

> **set** **clearcoatWeight**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:158](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L158)

Set the clearcoat weight and enable the clearcoat shader path.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### clearcoatFactor

#### Get Signature

> **get** **clearcoatFactor**(): `number`

Defined in: [src/materials/LitMaterial.ts:175](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L175)

Get the clearcoat factor.

##### Returns

`number`

#### Set Signature

> **set** **clearcoatFactor**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:169](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L169)

Set the clearcoat factor and enable the clearcoat shader path.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### clearcoatRoughnessFactor

#### Get Signature

> **get** **clearcoatRoughnessFactor**(): `number`

Defined in: [src/materials/LitMaterial.ts:187](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L187)

Get the clearcoat roughness factor.

##### Returns

`number`

#### Set Signature

> **set** **clearcoatRoughnessFactor**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:181](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L181)

Set the clearcoat roughness factor and enable the clearcoat shader path.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ior

#### Get Signature

> **get** **ior**(): `number`

Defined in: [src/materials/LitMaterial.ts:197](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L197)

Get the index of refraction.

##### Returns

`number`

#### Set Signature

> **set** **ior**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:192](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L192)

Set the index of refraction.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### alphaCutoff

#### Get Signature

> **get** **alphaCutoff**(): `number`

Defined in: [src/materials/LitMaterial.ts:209](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L209)

Get the alpha cutoff threshold.

##### Returns

`number`

#### Set Signature

> **set** **alphaCutoff**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:203](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L203)

Set the alpha cutoff threshold and enable the alpha-cut shader path.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### transmissionMap

#### Get Signature

> **get** **transmissionMap**(): [`Texture`](Texture.md)

Defined in: [src/materials/LitMaterial.ts:233](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L233)

Get the transmission texture.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **transmissionMap**(`texture`): `void`

Defined in: [src/materials/LitMaterial.ts:226](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L226)

glTF KHR_materials_transmission `transmissionTexture` — R channel
 is multiplied with `transmissionFactor` per fragment, so the same
 material can have opaque + glassy regions (e.g. a frosted window
 with painted bezels). Setting it implies USE_TRANSMISSION.

##### Parameters

###### texture

[`Texture`](Texture.md)

##### Returns

`void`

***

### transmissionFactor

#### Get Signature

> **get** **transmissionFactor**(): `number`

Defined in: [src/materials/LitMaterial.ts:264](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L264)

Get the transmission factor.

##### Returns

`number`

#### Set Signature

> **set** **transmissionFactor**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:238](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L238)

Set the transmission factor, toggling the transmission shader path and resolving the scene color pyramid.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### thicknessFactor

#### Get Signature

> **get** **thicknessFactor**(): `number`

Defined in: [src/materials/LitMaterial.ts:274](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L274)

Get the volume thickness factor.

##### Returns

`number`

#### Set Signature

> **set** **thicknessFactor**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:269](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L269)

Set the volume thickness factor used for transmission attenuation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### attenuationDistance

#### Get Signature

> **get** **attenuationDistance**(): `number`

Defined in: [src/materials/LitMaterial.ts:291](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L291)

Get the attenuation distance, returning Infinity when attenuation is effectively disabled.

##### Returns

`number`

#### Set Signature

> **set** **attenuationDistance**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:281](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L281)

Distance (in world units) after which the transmitted radiance
 has been attenuated to `1/e` of its initial intensity. Use
 `Number.POSITIVE_INFINITY` to disable attenuation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### attenuationColor

#### Get Signature

> **get** **attenuationColor**(): [`Color`](Color.md)

Defined in: [src/materials/LitMaterial.ts:302](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L302)

Get the attenuation (transmission absorption) color.

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **attenuationColor**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:297](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L297)

Set the attenuation (transmission absorption) color.

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

***

### transmissionAlphaMode

#### Get Signature

> **get** **transmissionAlphaMode**(): `boolean`

Defined in: [src/materials/LitMaterial.ts:318](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L318)

Whether transmission also attenuates the output alpha for see-through compositing.

##### Returns

`boolean`

#### Set Signature

> **set** **transmissionAlphaMode**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:313](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L313)

When set to true, the transmission shader path attenuates this
 fragment's output alpha by transmission as well as RGB so an
 `alpha:true` swapchain composites whatever's behind the canvas
 (HTML page background, video element, ...) through the glass.
 Off by default — opaque-queue draws keep alpha=1 so demos that
 share an opaque canvas with other geometry don't inherit
 unwanted blending.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### alphaMode

#### Get Signature

> **get** **alphaMode**(): [`AlphaMode`](../type-aliases/AlphaMode.md)

Defined in: [src/materials/LitMaterial.ts:323](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L323)

glTF-aligned alpha handling. See [AlphaMode](../type-aliases/AlphaMode.md).

##### Returns

[`AlphaMode`](../type-aliases/AlphaMode.md)

#### Set Signature

> **set** **alphaMode**(`mode`): `void`

Defined in: [src/materials/LitMaterial.ts:328](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L328)

Set the glTF-aligned alpha mode, configuring blend/discard state and render queue accordingly.

##### Parameters

###### mode

[`AlphaMode`](../type-aliases/AlphaMode.md)

##### Returns

`void`

***

### baseColor

#### Get Signature

> **get** **baseColor**(): [`Color`](Color.md)

Defined in: [src/materials/LitMaterial.ts:407](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L407)

get base color (tint color)

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **baseColor**(`color`): `void`

Defined in: [src/materials/LitMaterial.ts:400](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L400)

set base color (tint color)

##### Parameters

###### color

[`Color`](Color.md)

##### Returns

`void`

#### Overrides

[`Material`](Material.md).[`baseColor`](Material.md#basecolor)

***

### roughness

#### Get Signature

> **get** **roughness**(): `number`

Defined in: [src/materials/LitMaterial.ts:412](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L412)

Get the surface roughness.

##### Returns

`number`

#### Set Signature

> **set** **roughness**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:417](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L417)

Set the surface roughness.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### metallic

#### Get Signature

> **get** **metallic**(): `number`

Defined in: [src/materials/LitMaterial.ts:422](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L422)

Get the metallic factor.

##### Returns

`number`

#### Set Signature

> **set** **metallic**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:427](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L427)

Set the metallic factor.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### emissiveColor

#### Get Signature

> **get** **emissiveColor**(): [`Color`](Color.md)

Defined in: [src/materials/LitMaterial.ts:432](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L432)

Get the emissive color.

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **emissiveColor**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:437](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L437)

Set the emissive color.

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

***

### emissiveIntensity

#### Get Signature

> **get** **emissiveIntensity**(): `number`

Defined in: [src/materials/LitMaterial.ts:442](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L442)

Get the emissive intensity.

##### Returns

`number`

#### Set Signature

> **set** **emissiveIntensity**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:447](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L447)

Set the emissive intensity.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ao

#### Get Signature

> **get** **ao**(): `number`

Defined in: [src/materials/LitMaterial.ts:452](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L452)

Get the ambient occlusion factor.

##### Returns

`number`

#### Set Signature

> **set** **ao**(`value`): `void`

Defined in: [src/materials/LitMaterial.ts:457](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L457)

Set the ambient occlusion factor.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### oitMode

#### Get Signature

> **get** **oitMode**(): `"sorted"` \| `"weighted"` \| `"depth-peel"`

Defined in: [src/materials/Material.ts:69](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L69)

Order-independent transparency mode opt-in.

 - `'sorted'` (default): back-to-front sorted alpha-blend. Cheap,
   correct between meshes, but in-mesh triangle order is geometry-
   based not depth-based so self-overlapping meshes (spheres,
   torus) show banding.
 - `'weighted'`: McGuire-Bavoil 2013 Weighted-Blended OIT. Single-
   pass, order-independent, no in-mesh banding. Approximate —
   accum.rgb/accum.a degenerates to a depth-weighted average so
   α=1 looks averaged-milky at small scene scales (the front-vs-
   back depth-weight ratio saturates the paper's z/200 norm).
   Use for unbounded transparent layer counts: particles, smoke,
   foliage, hair cards.
 - `'depth-peel'`: Dual depth peeling. Multi-pass
   (passCount × 2 layers), order-correct over operator. α=1 is
   cleanly opaque — front fragment dominates because subsequent
   layers get multiplied by (1 - frontColor.a) = 0. Hard layer
   count limit (default 10). Use for hero glass, scientific
   visualization, layered architectural geometry.

 All three only take effect when `engine.setting.render.useOIT`
 is true (otherwise everything falls through the sorted path).

 Setter notifies attached renderers so the corresponding derived
 pass(es) get lazily generated when flipping mode at runtime.
 Without this, callers had to follow up with an alphaMode setter
 call to provoke `refreshRenderClassification` → `castNeedPass`.

 Documented at Material-level (not LitMaterial) so any future
 material subclass (particle, decal) can opt in.

##### Returns

`"sorted"` \| `"weighted"` \| `"depth-peel"`

#### Set Signature

> **set** **oitMode**(`value`): `void`

Defined in: [src/materials/Material.ts:74](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L74)

Set the order-independent transparency mode, notifying renderers to re-classify the affected passes.

##### Parameters

###### value

`"sorted"` \| `"weighted"` \| `"depth-peel"`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`oitMode`](Material.md#oitmode)

***

### shader

#### Get Signature

> **get** **shader**(): [`Shader`](Shader.md)

Defined in: [src/materials/Material.ts:96](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L96)

Get the shader bound to this material.

##### Returns

[`Shader`](Shader.md)

#### Set Signature

> **set** **shader**(`shader`): `void`

Defined in: [src/materials/Material.ts:90](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L90)

Set the shader for this material and cache its default sub-shader.

##### Parameters

###### shader

[`Shader`](Shader.md)

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`shader`](Material.md#shader)

***

### doubleSide

#### Get Signature

> **get** **doubleSide**(): `boolean`

Defined in: [src/materials/Material.ts:101](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L101)

Whether the default sub-shader renders both faces (no back-face culling).

##### Returns

`boolean`

#### Set Signature

> **set** **doubleSide**(`value`): `void`

Defined in: [src/materials/Material.ts:106](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L106)

Enable or disable double-sided rendering on the default sub-shader.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`UnLitTexArrayMaterial`](UnLitTexArrayMaterial.md).[`doubleSide`](UnLitTexArrayMaterial.md#doubleside)

***

### castShadow

#### Get Signature

> **get** **castShadow**(): `boolean`

Defined in: [src/materials/Material.ts:111](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L111)

Whether this material casts shadows.

##### Returns

`boolean`

#### Set Signature

> **set** **castShadow**(`value`): `void`

Defined in: [src/materials/Material.ts:116](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L116)

Enable or disable shadow casting for this material.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`UnLitTexArrayMaterial`](UnLitTexArrayMaterial.md).[`castShadow`](UnLitTexArrayMaterial.md#castshadow)

***

### acceptShadow

#### Get Signature

> **get** **acceptShadow**(): `boolean`

Defined in: [src/materials/Material.ts:124](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L124)

Whether this material receives shadows from other casters.

##### Returns

`boolean`

#### Set Signature

> **set** **acceptShadow**(`value`): `void`

Defined in: [src/materials/Material.ts:129](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L129)

Enable or disable shadow receiving for this material.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`acceptShadow`](Material.md#acceptshadow)

***

### castReflection

#### Get Signature

> **get** **castReflection**(): `boolean`

Defined in: [src/materials/Material.ts:139](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L139)

Whether this material contributes to reflection probes.

##### Returns

`boolean`

#### Set Signature

> **set** **castReflection**(`value`): `void`

Defined in: [src/materials/Material.ts:144](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L144)

Enable or disable reflection casting for this material.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`castReflection`](Material.md#castreflection)

***

### blendMode

#### Get Signature

> **get** **blendMode**(): [`BlendMode`](../enumerations/BlendMode.md)

Defined in: [src/materials/Material.ts:149](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L149)

The blend mode of the default sub-shader.

##### Returns

[`BlendMode`](../enumerations/BlendMode.md)

#### Set Signature

> **set** **blendMode**(`value`): `void`

Defined in: [src/materials/Material.ts:154](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L154)

Set the blend mode of the default sub-shader.

##### Parameters

###### value

[`BlendMode`](../enumerations/BlendMode.md)

##### Returns

`void`

#### Inherited from

[`UnLitTexArrayMaterial`](UnLitTexArrayMaterial.md).[`blendMode`](UnLitTexArrayMaterial.md#blendmode)

***

### depthCompare

#### Get Signature

> **get** **depthCompare**(): `GPUCompareFunction`

Defined in: [src/materials/Material.ts:159](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L159)

The depth comparison function of the default sub-shader.

##### Returns

`GPUCompareFunction`

#### Set Signature

> **set** **depthCompare**(`value`): `void`

Defined in: [src/materials/Material.ts:164](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L164)

Set the depth comparison function across all passes of this material.

##### Parameters

###### value

`GPUCompareFunction`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`depthCompare`](Material.md#depthcompare)

***

### transparent

#### Get Signature

> **get** **transparent**(): `boolean`

Defined in: [src/materials/Material.ts:175](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L175)

Whether this material is rendered as transparent.

##### Returns

`boolean`

#### Set Signature

> **set** **transparent**(`value`): `void`

Defined in: [src/materials/Material.ts:180](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L180)

Enable or disable transparency, moving the pass to the transparent queue when enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`UnLitTexArrayMaterial`](UnLitTexArrayMaterial.md).[`transparent`](UnLitTexArrayMaterial.md#transparent)

***

### cullMode

#### Get Signature

> **get** **cullMode**(): `GPUCullMode`

Defined in: [src/materials/Material.ts:188](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L188)

The face culling mode of the default sub-shader.

##### Returns

`GPUCullMode`

#### Set Signature

> **set** **cullMode**(`value`): `void`

Defined in: [src/materials/Material.ts:193](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L193)

Set the face culling mode across all passes of this material.

##### Parameters

###### value

`GPUCullMode`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`cullMode`](Material.md#cullmode)

***

### depthWriteEnabled

#### Get Signature

> **get** **depthWriteEnabled**(): `boolean`

Defined in: [src/materials/Material.ts:205](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L205)

Whether depth writing is enabled for the default sub-shader.

##### Returns

`boolean`

#### Set Signature

> **set** **depthWriteEnabled**(`value`): `void`

Defined in: [src/materials/Material.ts:210](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L210)

Enable or disable depth writing for the default sub-shader.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`depthWriteEnabled`](Material.md#depthwriteenabled)

***

### stencilFront

#### Get Signature

> **get** **stencilFront**(): `GPUStencilFaceState`

Defined in: [src/materials/Material.ts:217](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L217)

Stencil front face state

##### Returns

`GPUStencilFaceState`

#### Set Signature

> **set** **stencilFront**(`value`): `void`

Defined in: [src/materials/Material.ts:222](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L222)

Set the stencil front face state.

##### Parameters

###### value

`GPUStencilFaceState`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`stencilFront`](Material.md#stencilfront)

***

### stencilBack

#### Get Signature

> **get** **stencilBack**(): `GPUStencilFaceState`

Defined in: [src/materials/Material.ts:229](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L229)

Stencil back face state

##### Returns

`GPUStencilFaceState`

#### Set Signature

> **set** **stencilBack**(`value`): `void`

Defined in: [src/materials/Material.ts:234](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L234)

Set the stencil back face state.

##### Parameters

###### value

`GPUStencilFaceState`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`stencilBack`](Material.md#stencilback)

***

### stencilReadMask

#### Get Signature

> **get** **stencilReadMask**(): `number`

Defined in: [src/materials/Material.ts:241](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L241)

Stencil read mask

##### Returns

`number`

#### Set Signature

> **set** **stencilReadMask**(`value`): `void`

Defined in: [src/materials/Material.ts:246](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L246)

Set the stencil read mask.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`stencilReadMask`](Material.md#stencilreadmask)

***

### stencilWriteMask

#### Get Signature

> **get** **stencilWriteMask**(): `number`

Defined in: [src/materials/Material.ts:253](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L253)

Stencil write mask

##### Returns

`number`

#### Set Signature

> **set** **stencilWriteMask**(`value`): `void`

Defined in: [src/materials/Material.ts:258](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L258)

Set the stencil write mask.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`stencilWriteMask`](Material.md#stencilwritemask)

***

### stencilRef

#### Get Signature

> **get** **stencilRef**(): `number`

Defined in: [src/materials/Material.ts:265](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L265)

Stencil reference value

##### Returns

`number`

#### Set Signature

> **set** **stencilRef**(`value`): `void`

Defined in: [src/materials/Material.ts:270](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L270)

Set the stencil reference value.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`stencilRef`](Material.md#stencilref)

***

### useBillboard

#### Set Signature

> **set** **useBillboard**(`value`): `void`

Defined in: [src/materials/Material.ts:275](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L275)

Enable or disable billboard orientation via the USE_BILLBOARD shader define.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`useBillboard`](Material.md#usebillboard)

***

### topology

#### Get Signature

> **get** **topology**(): `GPUPrimitiveTopology`

Defined in: [src/materials/Material.ts:280](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L280)

The primitive topology of the default sub-shader.

##### Returns

`GPUPrimitiveTopology`

#### Set Signature

> **set** **topology**(`value`): `void`

Defined in: [src/materials/Material.ts:285](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L285)

Set the primitive topology of the default sub-shader.

##### Parameters

###### value

`GPUPrimitiveTopology`

##### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`topology`](Material.md#topology)

## Methods

### clone()

> **clone**(): [`Material`](Material.md)

Defined in: [src/materials/LitMaterial.ts:37](https://github.com/orillusion/orillusion/blob/main/src/materials/LitMaterial.ts#L37)

Clone this material into a new LitMaterial, copying PBR uniforms and textures.

#### Returns

[`Material`](Material.md)

#### Overrides

[`Material`](Material.md).[`clone`](Material.md#clone)

***

### getPass()

> **getPass**(`passType`): [`RenderShaderPass`](RenderShaderPass.md)[]

Defined in: [src/materials/Material.ts:304](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L304)

get render pass by renderType

#### Parameters

##### passType

`PassType`

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[`Material`](Material.md).[`getPass`](Material.md#getpass)

***

### getAllPass()

> **getAllPass**(): [`RenderShaderPass`](RenderShaderPass.md)[]

Defined in: [src/materials/Material.ts:312](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L312)

get all color render pass

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[`Material`](Material.md).[`getAllPass`](Material.md#getallpass)

***

### destroy()

> **destroy**(`force`): `void`

Defined in: [src/materials/Material.ts:328](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L328)

Release this material's shader and clear its identifying fields.

#### Parameters

##### force

`boolean`

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`destroy`](Material.md#destroy)

***

### setDefine()

> **setDefine**(`define`, `value`): `void`

Defined in: [src/materials/Material.ts:337](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L337)

Set a shader define flag on this material's shader.

#### Parameters

##### define

`string`

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setDefine`](Material.md#setdefine)

***

### getDefine()

> **getDefine**(`define`): `boolean`

Defined in: [src/materials/Material.ts:342](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L342)

Get the value of a shader define flag.

#### Parameters

##### define

`string`

#### Returns

`boolean`

#### Inherited from

[`Material`](Material.md).[`getDefine`](Material.md#getdefine)

***

### setTexture()

> **setTexture**(`propertyName`, `texture`): `void`

Defined in: [src/materials/Material.ts:347](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L347)

Bind a texture to the named shader property.

#### Parameters

##### propertyName

`string`

##### texture

[`Texture`](Texture.md)

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setTexture`](Material.md#settexture)

***

### setStorageBuffer()

> **setStorageBuffer**(`propertyName`, `buffer`): `void`

Defined in: [src/materials/Material.ts:352](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L352)

Bind a storage GPU buffer to the named shader property.

#### Parameters

##### propertyName

`string`

##### buffer

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setStorageBuffer`](Material.md#setstoragebuffer)

***

### setUniformBuffer()

> **setUniformBuffer**(`propertyName`, `buffer`): `void`

Defined in: [src/materials/Material.ts:357](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L357)

Bind a uniform GPU buffer to the named shader property.

#### Parameters

##### propertyName

`string`

##### buffer

[`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setUniformBuffer`](Material.md#setuniformbuffer)

***

### setUniformFloat()

> **setUniformFloat**(`propertyName`, `value`): `void`

Defined in: [src/materials/Material.ts:363](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L363)

Set a float uniform on the named shader property.

#### Parameters

##### propertyName

`string`

##### value

`number`

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setUniformFloat`](Material.md#setuniformfloat)

***

### setUniformInt32()

> **setUniformInt32**(`propertyName`, `value`): `void`

Defined in: [src/materials/Material.ts:368](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L368)

Set a 32-bit integer uniform on the named shader property.

#### Parameters

##### propertyName

`string`

##### value

`number`

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setUniformInt32`](Material.md#setuniformint32)

***

### setUniformVector2()

> **setUniformVector2**(`propertyName`, `value`): `void`

Defined in: [src/materials/Material.ts:373](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L373)

Set a Vector2 uniform on the named shader property.

#### Parameters

##### propertyName

`string`

##### value

[`Vector2`](Vector2.md)

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setUniformVector2`](Material.md#setuniformvector2)

***

### setUniformVector3()

> **setUniformVector3**(`propertyName`, `value`): `void`

Defined in: [src/materials/Material.ts:378](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L378)

Set a Vector3 uniform on the named shader property.

#### Parameters

##### propertyName

`string`

##### value

[`Vector3`](Vector3.md)

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setUniformVector3`](Material.md#setuniformvector3)

***

### setUniformVector4()

> **setUniformVector4**(`propertyName`, `value`): `void`

Defined in: [src/materials/Material.ts:383](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L383)

Set a Vector4 uniform on the named shader property.

#### Parameters

##### propertyName

`string`

##### value

`Vector4`

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setUniformVector4`](Material.md#setuniformvector4)

***

### setUniformColor()

> **setUniformColor**(`propertyName`, `value`): `void`

Defined in: [src/materials/Material.ts:388](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L388)

Set a color uniform on the named shader property.

#### Parameters

##### propertyName

`string`

##### value

[`Color`](Color.md)

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`setUniformColor`](Material.md#setuniformcolor)

***

### getUniformFloat()

> **getUniformFloat**(`str`): `any`

Defined in: [src/materials/Material.ts:393](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L393)

Get the float value of the named uniform.

#### Parameters

##### str

`string`

#### Returns

`any`

#### Inherited from

[`Material`](Material.md).[`getUniformFloat`](Material.md#getuniformfloat)

***

### getUniformInt32()

> **getUniformInt32**(`str`): `any`

Defined in: [src/materials/Material.ts:398](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L398)

Get the 32-bit integer value of the named uniform.

#### Parameters

##### str

`string`

#### Returns

`any`

#### Inherited from

[`Material`](Material.md).[`getUniformInt32`](Material.md#getuniformint32)

***

### getUniformV2()

> **getUniformV2**(`str`): [`Vector2`](Vector2.md)

Defined in: [src/materials/Material.ts:403](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L403)

Get the Vector2 value of the named uniform.

#### Parameters

##### str

`string`

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[`Material`](Material.md).[`getUniformV2`](Material.md#getuniformv2)

***

### getUniformV3()

> **getUniformV3**(`str`): [`Vector3`](Vector3.md)

Defined in: [src/materials/Material.ts:408](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L408)

Get the Vector3 value of the named uniform.

#### Parameters

##### str

`string`

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`Material`](Material.md).[`getUniformV3`](Material.md#getuniformv3)

***

### getUniformV4()

> **getUniformV4**(`str`): `Vector4`

Defined in: [src/materials/Material.ts:413](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L413)

Get the Vector4 value of the named uniform.

#### Parameters

##### str

`string`

#### Returns

`Vector4`

#### Inherited from

[`Material`](Material.md).[`getUniformV4`](Material.md#getuniformv4)

***

### getUniformColor()

> **getUniformColor**(`str`): [`Color`](Color.md)

Defined in: [src/materials/Material.ts:418](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L418)

Get the color value of the named uniform.

#### Parameters

##### str

`string`

#### Returns

[`Color`](Color.md)

#### Inherited from

[`Material`](Material.md).[`getUniformColor`](Material.md#getuniformcolor)

***

### getTexture()

> **getTexture**(`str`): [`Texture`](Texture.md)

Defined in: [src/materials/Material.ts:423](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L423)

Get the texture bound to the named shader property.

#### Parameters

##### str

`string`

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[`Material`](Material.md).[`getTexture`](Material.md#gettexture)

***

### getStorageBuffer()

> **getStorageBuffer**(`str`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/materials/Material.ts:428](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L428)

Get the storage buffer bound to the named shader property.

#### Parameters

##### str

`string`

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Inherited from

[`Material`](Material.md).[`getStorageBuffer`](Material.md#getstoragebuffer)

***

### getStructStorageBuffer()

> **getStructStorageBuffer**(`str`): `GPUBufferBase`

Defined in: [src/materials/Material.ts:433](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L433)

Get the struct storage buffer bound to the named shader property.

#### Parameters

##### str

`string`

#### Returns

`GPUBufferBase`

#### Inherited from

[`Material`](Material.md).[`getStructStorageBuffer`](Material.md#getstructstoragebuffer)

***

### getUniformBuffer()

> **getUniformBuffer**(`str`): `GPUBufferBase`

Defined in: [src/materials/Material.ts:438](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L438)

Get the uniform buffer bound to the named shader property.

#### Parameters

##### str

`string`

#### Returns

`GPUBufferBase`

#### Inherited from

[`Material`](Material.md).[`getUniformBuffer`](Material.md#getuniformbuffer)

***

### applyUniform()

> **applyUniform**(): `void`

Defined in: [src/materials/Material.ts:443](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L443)

Upload pending uniform changes to the GPU.

#### Returns

`void`

#### Inherited from

[`Material`](Material.md).[`applyUniform`](Material.md#applyuniform)
