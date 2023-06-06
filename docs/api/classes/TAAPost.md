# Class: TAAPost

Temporal AA
```
      //setting
      let cfg = {@link Engine3D.setting.render.postProcessing.taa};
        let view = new View3D();
       view.scene = this.scene;
       view.camera = mainCamera;
       
      
      Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`TAAPost`**

### Constructors

- [constructor](TAAPost.md#constructor)

### Properties

- [enable](TAAPost.md#enable)
- [postRenderer](TAAPost.md#postrenderer)
- [outTexture](TAAPost.md#outtexture)
- [copyTexCompute](TAAPost.md#copytexcompute)
- [sharpCompute](TAAPost.md#sharpcompute)
- [preColorTex](TAAPost.md#precolortex)
- [preViewMatrix](TAAPost.md#previewmatrix)
- [rtFrame](TAAPost.md#rtframe)

### Accessors

- [jitterSeedCount](TAAPost.md#jitterseedcount)
- [blendFactor](TAAPost.md#blendfactor)
- [sharpFactor](TAAPost.md#sharpfactor)
- [sharpPreBlurFactor](TAAPost.md#sharppreblurfactor)
- [temporalJitterScale](TAAPost.md#temporaljitterscale)

### Methods

- [destroy](TAAPost.md#destroy)

## Constructors

### constructor

• **new TAAPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L71)

## Properties

### enable

• **enable**: `boolean` = `true`

#### Inherited from

PostBase.enable

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L19)

___

### postRenderer

• **postRenderer**: `PostRenderer`

#### Inherited from

PostBase.postRenderer

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L20)

___

### outTexture

• **outTexture**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L42)

___

### copyTexCompute

• **copyTexCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L51)

___

### sharpCompute

• **sharpCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L52)

___

### preColorTex

• **preColorTex**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L62)

___

### preViewMatrix

• **preViewMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L68)

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L69)

## Accessors

### jitterSeedCount

• `get` **jitterSeedCount**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L91)

• `set` **jitterSeedCount**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L96)

___

### blendFactor

• `get` **blendFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L103)

• `set` **blendFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L108)

___

### sharpFactor

• `get` **sharpFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L114)

• `set` **sharpFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L119)

___

### sharpPreBlurFactor

• `get` **sharpPreBlurFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L125)

• `set` **sharpPreBlurFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L130)

___

### temporalJitterScale

• `get` **temporalJitterScale**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L136)

• `set` **temporalJitterScale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L141)

## Methods

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

PostBase.destroy

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L81)
