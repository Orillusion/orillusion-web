# Class: TAAPost

反走样。
通过抖镜头的方式获得反走样样本。
```
      //配置反走样的相关参数
      let cfg = {@link Engine3D.setting.render.postProcessing.taa};
      let postProcessing = this.scene.addComponent(PostProcessingComponent);
      postProcessing.addPost(TAAPost);
```

## Hierarchy

- `PostBase`

  ↳ **`TAAPost`**


### Properties

- [outTexture](TAAPost.md#outtexture)
- [copyTexCompute](TAAPost.md#copytexcompute)
- [sharpCompute](TAAPost.md#sharpcompute)
- [preColorTex](TAAPost.md#precolortex)
- [preViewMatrix](TAAPost.md#previewmatrix)
- [rtFrame](TAAPost.md#rtframe)

### Constructors

- [constructor](TAAPost.md#constructor)

### Accessors

- [jitterSeedCount](TAAPost.md#jitterseedcount)
- [blendFactor](TAAPost.md#blendfactor)
- [sharpFactor](TAAPost.md#sharpfactor)
- [sharpPreBlurFactor](TAAPost.md#sharppreblurfactor)
- [temporalJitterScale](TAAPost.md#temporaljitterscale)

## Properties

### outTexture

• **outTexture**: `VirtualTexture`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L44)

___

### copyTexCompute

• **copyTexCompute**: `ComputeShader`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L53)

___

### sharpCompute

• **sharpCompute**: `ComputeShader`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L54)

___

### preColorTex

• **preColorTex**: `VirtualTexture`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L64)

___

### preViewMatrix

• **preViewMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L70)

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L71)

## Constructors

### constructor

• **new TAAPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L73)

## Accessors

### jitterSeedCount

• `get` **jitterSeedCount**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L91)

• `set` **jitterSeedCount**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L96)

___

### blendFactor

• `get` **blendFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L103)

• `set` **blendFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L108)

___

### sharpFactor

• `get` **sharpFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L114)

• `set` **sharpFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L119)

___

### sharpPreBlurFactor

• `get` **sharpPreBlurFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L125)

• `set` **sharpPreBlurFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L130)

___

### temporalJitterScale

• `get` **temporalJitterScale**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L136)

• `set` **temporalJitterScale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/TAAPost.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/TAAPost.ts#L141)
