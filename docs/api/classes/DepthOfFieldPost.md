# Class: DepthOfFieldPost

depth of field effect.
A common post-processing effect that simulates the focusing characteristics of a camera lens.
```
      //Configure parameters related to depth of field
      let cfg = {@link Engine3D.setting.render.postProcessing.depthOfView};
      cfg.near = 150;
      cfg.far = 300;
      cfg.pixelOffset = 1.0;
        let view = new View3D();
       view.scene = this.scene;
       view.camera = mainCamera;
       
      
      Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`DepthOfFieldPost`**

### Constructors

- [constructor](DepthOfFieldPost.md#constructor)

### Properties

- [rtFrame](DepthOfFieldPost.md#rtframe)
- [enable](DepthOfFieldPost.md#enable)
- [postRenderer](DepthOfFieldPost.md#postrenderer)

### Accessors

- [pixelOffset](DepthOfFieldPost.md#pixeloffset)
- [near](DepthOfFieldPost.md#near)
- [far](DepthOfFieldPost.md#far)

### Methods

- [destroy](DepthOfFieldPost.md#destroy)

## Constructors

### constructor

• **new DepthOfFieldPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L65)

## Properties

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L63)

___

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

## Accessors

### pixelOffset

• `get` **pixelOffset**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L85)

• `set` **pixelOffset**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L90)

___

### near

• `get` **near**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L96)

• `set` **near**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L101)

___

### far

• `get` **far**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L107)

• `set` **far**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L112)

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
