[**@orillusion/core**](../README.md)

***

# Class: MorphTargetData

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L54)

GPU-side morph-target (blend-shape) state for a single geometry. Merges
per-target position/normal deltas into storage buffers and runs a compute
shader each frame to accumulate weighted deltas, then feeds the result
into the render shader.

## Constructors

### Constructor

> **new MorphTargetData**(): `MorphTargetData`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L83)

#### Returns

`MorphTargetData`

## Properties

### enable

> **enable**: `boolean`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L56)

Whether morph-target processing is active.

***

### morphTargetsRelative

> **morphTargetsRelative**: `boolean`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L58)

When true, target deltas are applied relatively (added on top of the base).

***

### MaxMorphTargetCount

> `readonly` **MaxMorphTargetCount**: `number` = `64`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L60)

Maximum number of morph targets supported per geometry.

## Accessors

### influences

#### Get Signature

> **get** **influences**(): `Float32Array`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L154)

Current influence weight of each morph target (read-only view; use `updateInfluence` to change).

##### Returns

`Float32Array`

***

### morphTargetCount

#### Get Signature

> **get** **morphTargetCount**(): `number`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L159)

Number of morph targets of the current geometry.

##### Returns

`number`

***

### baseInfluence

#### Get Signature

> **get** **baseInfluence**(): `number`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L167)

Weight of the base position in the blend, as the shader applies it:
1 for relative targets, `1 - Σ influences` for absolute ones.

##### Returns

`number`

***

### blendShape

#### Get Signature

> **get** **blendShape**(): `object`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L175)

Map of blend-shape name to its influence-setter function.

##### Returns

`object`

## Methods

### initMorphTarget()

> **initMorphTarget**(`geometry`): `void`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L91)

Collect a geometry's morph targets and build the compute shader + buffers.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

#### Returns

`void`

***

### applyRenderShader()

> **applyRenderShader**(`renderShader`): `void`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L115)

Bind the morph-target config and output buffers onto a render shader pass.

#### Parameters

##### renderShader

[`RenderShaderPass`](RenderShaderPass.md)

#### Returns

`void`

***

### computeMorphTarget()

> **computeMorphTarget**(`view`, `command`): `void`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L128)

Dispatch the compute shader that accumulates weighted morph deltas.

#### Parameters

##### view

[`View3D`](View3D.md)

##### command

`GPUCommandEncoder`

#### Returns

`void`

***

### updateInfluence()

> **updateInfluence**(`index`, `value`): `void`

Defined in: [src/components/anim/morphAnim/MorphTargetData.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L148)

Set the influence weight of the morph target at `index`.

#### Parameters

##### index

`number`

##### value

`number`

#### Returns

`void`
