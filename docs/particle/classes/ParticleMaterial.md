[**@orillusion/particle**](../README.md)

***

# Class: ParticleMaterial

Defined in: [packages/particle/material/ParticleMaterial.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L8)

material of particle renderer

## Extends

- `Material`

## Constructors

### Constructor

> **new ParticleMaterial**(`ctx?`): `ParticleMaterial`

Defined in: [packages/particle/material/ParticleMaterial.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L9)

#### Parameters

##### ctx?

`Context3D`

#### Returns

`ParticleMaterial`

#### Overrides

`Material.constructor`

## Properties

### instanceID

> **instanceID**: `string`

Defined in: [src/materials/Material.ts:26](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L26)

Material Unique Identifier

#### Inherited from

`Material.instanceID`

***

### name

> **name**: `string`

Defined in: [src/materials/Material.ts:32](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L32)

name of this material

#### Inherited from

`Material.name`

***

### enable

> **enable**: `boolean` = `true`

Defined in: [src/materials/Material.ts:35](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L35)

Whether this material is enabled for rendering.

#### Inherited from

`Material.enable`

## Accessors

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

`Material.oitMode`

***

### shader

#### Get Signature

> **get** **shader**(): `Shader`

Defined in: [src/materials/Material.ts:96](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L96)

Get the shader bound to this material.

##### Returns

`Shader`

#### Set Signature

> **set** **shader**(`shader`): `void`

Defined in: [src/materials/Material.ts:90](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L90)

Set the shader for this material and cache its default sub-shader.

##### Parameters

###### shader

`Shader`

##### Returns

`void`

#### Inherited from

`Material.shader`

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

`Material.doubleSide`

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

`Material.castShadow`

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

`Material.acceptShadow`

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

`Material.castReflection`

***

### blendMode

#### Get Signature

> **get** **blendMode**(): `BlendMode`

Defined in: [src/materials/Material.ts:149](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L149)

The blend mode of the default sub-shader.

##### Returns

`BlendMode`

#### Set Signature

> **set** **blendMode**(`value`): `void`

Defined in: [src/materials/Material.ts:154](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L154)

Set the blend mode of the default sub-shader.

##### Parameters

###### value

`BlendMode`

##### Returns

`void`

#### Inherited from

`Material.blendMode`

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

`Material.depthCompare`

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

`Material.transparent`

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

`Material.cullMode`

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

`Material.depthWriteEnabled`

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

`Material.stencilFront`

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

`Material.stencilBack`

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

`Material.stencilReadMask`

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

`Material.stencilWriteMask`

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

`Material.stencilRef`

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

`Material.useBillboard`

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

`Material.topology`

***

### baseColor

#### Get Signature

> **get** **baseColor**(): `Color`

Defined in: [src/materials/Material.ts:295](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L295)

Get the base color uniform.

##### Returns

`Color`

#### Set Signature

> **set** **baseColor**(`color`): `void`

Defined in: [src/materials/Material.ts:290](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L290)

Set the base color uniform.

##### Parameters

###### color

`Color`

##### Returns

`void`

#### Inherited from

`Material.baseColor`

***

### baseMap

#### Get Signature

> **get** **baseMap**(): `Texture`

Defined in: [packages/particle/material/ParticleMaterial.ts:46](https://github.com/orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L46)

##### Returns

`Texture`

#### Set Signature

> **set** **baseMap**(`texture`): `void`

Defined in: [packages/particle/material/ParticleMaterial.ts:41](https://github.com/orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L41)

##### Parameters

###### texture

`Texture`

##### Returns

`void`

***

### envMap

#### Set Signature

> **set** **envMap**(`texture`): `void`

Defined in: [packages/particle/material/ParticleMaterial.ts:50](https://github.com/orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L50)

##### Parameters

###### texture

`Texture`

##### Returns

`void`

***

### shadowMap

#### Set Signature

> **set** **shadowMap**(`texture`): `void`

Defined in: [packages/particle/material/ParticleMaterial.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L54)

##### Parameters

###### texture

`Texture`

##### Returns

`void`

## Methods

### getPass()

> **getPass**(`passType`): `RenderShaderPass`[]

Defined in: [src/materials/Material.ts:304](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L304)

get render pass by renderType

#### Parameters

##### passType

`PassType`

#### Returns

`RenderShaderPass`[]

#### Inherited from

`Material.getPass`

***

### getAllPass()

> **getAllPass**(): `RenderShaderPass`[]

Defined in: [src/materials/Material.ts:312](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L312)

get all color render pass

#### Returns

`RenderShaderPass`[]

#### Inherited from

`Material.getAllPass`

***

### clone()

> **clone**(): `Material`

Defined in: [src/materials/Material.ts:320](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L320)

clone one material

#### Returns

`Material`

Material

#### Inherited from

`Material.clone`

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

`Material.destroy`

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

`Material.setDefine`

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

`Material.getDefine`

***

### setTexture()

> **setTexture**(`propertyName`, `texture`): `void`

Defined in: [src/materials/Material.ts:347](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L347)

Bind a texture to the named shader property.

#### Parameters

##### propertyName

`string`

##### texture

`Texture`

#### Returns

`void`

#### Inherited from

`Material.setTexture`

***

### setStorageBuffer()

> **setStorageBuffer**(`propertyName`, `buffer`): `void`

Defined in: [src/materials/Material.ts:352](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L352)

Bind a storage GPU buffer to the named shader property.

#### Parameters

##### propertyName

`string`

##### buffer

`StorageGPUBuffer`

#### Returns

`void`

#### Inherited from

`Material.setStorageBuffer`

***

### setUniformBuffer()

> **setUniformBuffer**(`propertyName`, `buffer`): `void`

Defined in: [src/materials/Material.ts:357](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L357)

Bind a uniform GPU buffer to the named shader property.

#### Parameters

##### propertyName

`string`

##### buffer

`UniformGPUBuffer`

#### Returns

`void`

#### Inherited from

`Material.setUniformBuffer`

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

`Material.setUniformFloat`

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

`Material.setUniformInt32`

***

### setUniformVector2()

> **setUniformVector2**(`propertyName`, `value`): `void`

Defined in: [src/materials/Material.ts:373](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L373)

Set a Vector2 uniform on the named shader property.

#### Parameters

##### propertyName

`string`

##### value

`Vector2`

#### Returns

`void`

#### Inherited from

`Material.setUniformVector2`

***

### setUniformVector3()

> **setUniformVector3**(`propertyName`, `value`): `void`

Defined in: [src/materials/Material.ts:378](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L378)

Set a Vector3 uniform on the named shader property.

#### Parameters

##### propertyName

`string`

##### value

`Vector3`

#### Returns

`void`

#### Inherited from

`Material.setUniformVector3`

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

`Material.setUniformVector4`

***

### setUniformColor()

> **setUniformColor**(`propertyName`, `value`): `void`

Defined in: [src/materials/Material.ts:388](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L388)

Set a color uniform on the named shader property.

#### Parameters

##### propertyName

`string`

##### value

`Color`

#### Returns

`void`

#### Inherited from

`Material.setUniformColor`

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

`Material.getUniformFloat`

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

`Material.getUniformInt32`

***

### getUniformV2()

> **getUniformV2**(`str`): `Vector2`

Defined in: [src/materials/Material.ts:403](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L403)

Get the Vector2 value of the named uniform.

#### Parameters

##### str

`string`

#### Returns

`Vector2`

#### Inherited from

`Material.getUniformV2`

***

### getUniformV3()

> **getUniformV3**(`str`): `Vector3`

Defined in: [src/materials/Material.ts:408](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L408)

Get the Vector3 value of the named uniform.

#### Parameters

##### str

`string`

#### Returns

`Vector3`

#### Inherited from

`Material.getUniformV3`

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

`Material.getUniformV4`

***

### getUniformColor()

> **getUniformColor**(`str`): `Color`

Defined in: [src/materials/Material.ts:418](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L418)

Get the color value of the named uniform.

#### Parameters

##### str

`string`

#### Returns

`Color`

#### Inherited from

`Material.getUniformColor`

***

### getTexture()

> **getTexture**(`str`): `Texture`

Defined in: [src/materials/Material.ts:423](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L423)

Get the texture bound to the named shader property.

#### Parameters

##### str

`string`

#### Returns

`Texture`

#### Inherited from

`Material.getTexture`

***

### getStorageBuffer()

> **getStorageBuffer**(`str`): `StorageGPUBuffer`

Defined in: [src/materials/Material.ts:428](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L428)

Get the storage buffer bound to the named shader property.

#### Parameters

##### str

`string`

#### Returns

`StorageGPUBuffer`

#### Inherited from

`Material.getStorageBuffer`

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

`Material.getStructStorageBuffer`

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

`Material.getUniformBuffer`

***

### applyUniform()

> **applyUniform**(): `void`

Defined in: [src/materials/Material.ts:443](https://github.com/orillusion/orillusion/blob/main/src/materials/Material.ts#L443)

Upload pending uniform changes to the GPU.

#### Returns

`void`

#### Inherited from

`Material.applyUniform`
