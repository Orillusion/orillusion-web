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
- [onResize](TAAPost.md#onresize)

## Constructors

### constructor

• **new TAAPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L72)

## Properties

### enable

• **enable**: `boolean` = `true`

#### Inherited from

PostBase.enable

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L20)

___

### postRenderer

• **postRenderer**: `PostRenderer`

#### Inherited from

PostBase.postRenderer

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L21)

___

### outTexture

• **outTexture**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L43)

___

### copyTexCompute

• **copyTexCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L52)

___

### sharpCompute

• **sharpCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L53)

___

### preColorTex

• **preColorTex**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L63)

___

### preViewMatrix

• **preViewMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L69)

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L70)

## Accessors

### jitterSeedCount

• `get` **jitterSeedCount**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L92)

• `set` **jitterSeedCount**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L97)

___

### blendFactor

• `get` **blendFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L104)

• `set` **blendFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L109)

___

### sharpFactor

• `get` **sharpFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L115)

• `set` **sharpFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L120)

___

### sharpPreBlurFactor

• `get` **sharpPreBlurFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L126)

• `set` **sharpPreBlurFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L131)

___

### temporalJitterScale

• `get` **temporalJitterScale**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L137)

• `set` **temporalJitterScale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L142)

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

[src/gfx/renderJob/post/PostBase.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L87)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/TAAPost.ts:258](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L258)
