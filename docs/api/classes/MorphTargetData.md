# Class: MorphTargetData

### Constructors

- [constructor](MorphTargetData.md#constructor)

### Properties

- [enable](MorphTargetData.md#enable)
- [morphTargetsRelative](MorphTargetData.md#morphtargetsrelative)
- [MaxMorphTargetCount](MorphTargetData.md#maxmorphtargetcount)

### Accessors

- [blendShape](MorphTargetData.md#blendshape)

### Methods

- [initMorphTarget](MorphTargetData.md#initmorphtarget)
- [applyRenderShader](MorphTargetData.md#applyrendershader)
- [computeMorphTarget](MorphTargetData.md#computemorphtarget)
- [updateInfluence](MorphTargetData.md#updateinfluence)

## Constructors

### constructor

• **new MorphTargetData**()

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L73)

## Properties

### enable

• **enable**: `boolean`

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L48)

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L49)

___

### MaxMorphTargetCount

• `Readonly` **MaxMorphTargetCount**: `number` = `64`

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L50)

## Accessors

### blendShape

• `get` **blendShape**(): `Object`

#### Returns

`Object`

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L141)

## Methods

### initMorphTarget

▸ **initMorphTarget**(`geometry`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L80)

___

### applyRenderShader

▸ **applyRenderShader**(`renderShader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) |

#### Returns

`void`

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L103)

___

### computeMorphTarget

▸ **computeMorphTarget**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L115)

___

### updateInfluence

▸ **updateInfluence**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L136)
