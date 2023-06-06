# Class: MorphTargetData

### Constructors

- [constructor](MorphTargetData.md#constructor)

### Properties

- [enable](MorphTargetData.md#enable)
- [morphTargetsRelative](MorphTargetData.md#morphtargetsrelative)
- [MaxMorphTargetCount](MorphTargetData.md#maxmorphtargetcount)

### Methods

- [initMorphTarget](MorphTargetData.md#initmorphtarget)
- [applyRenderShader](MorphTargetData.md#applyrendershader)
- [computeMorphTarget](MorphTargetData.md#computemorphtarget)
- [updateInfluence](MorphTargetData.md#updateinfluence)

## Constructors

### constructor

• **new MorphTargetData**()

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L70)

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

[src/components/anim/morphAnim/MorphTargetData.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L77)

___

### applyRenderShader

▸ **applyRenderShader**(`renderShader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderShader` | [`RenderShader`](RenderShader.md) |

#### Returns

`void`

#### Defined in

[src/components/anim/morphAnim/MorphTargetData.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L100)

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

[src/components/anim/morphAnim/MorphTargetData.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L112)

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

[src/components/anim/morphAnim/MorphTargetData.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetData.ts#L131)
