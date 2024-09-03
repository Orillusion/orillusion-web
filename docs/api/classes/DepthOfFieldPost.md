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

- [onResize](DepthOfFieldPost.md#onresize)
- [destroy](DepthOfFieldPost.md#destroy)

## Constructors

### constructor

• **new DepthOfFieldPost**(): [`DepthOfFieldPost`](DepthOfFieldPost.md)

#### Returns

[`DepthOfFieldPost`](DepthOfFieldPost.md)

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

[src/gfx/renderJob/post/PostBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L20)

___

### postRenderer

• **postRenderer**: `PostRenderer`

#### Inherited from

PostBase.postRenderer

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L21)

## Accessors

### pixelOffset

• `get` **pixelOffset**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L81)

• `set` **pixelOffset**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L86)

___

### near

• `get` **near**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L92)

• `set` **near**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L97)

___

### far

• `get` **far**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L103)

• `set` **far**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L108)

## Methods

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/DepthOfFieldPost.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L199)

___

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
