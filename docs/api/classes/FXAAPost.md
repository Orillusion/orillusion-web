# Class: FXAAPost

FXAA(fast approximate antialiasing)
A deformation anti-aliasing method that pays more attention to performance. 
It only needs one pass to get the result. FXAA focuses on fast visual anti-aliasing effect, 
rather than pursuing perfect real anti-aliasing effect.

## Hierarchy

- `PostBase`

  ↳ **`FXAAPost`**

### Constructors

- [constructor](FXAAPost.md#constructor)

### Properties

- [postQuad](FXAAPost.md#postquad)
- [renderTexture](FXAAPost.md#rendertexture)
- [enable](FXAAPost.md#enable)
- [postRenderer](FXAAPost.md#postrenderer)

### Methods

- [onResize](FXAAPost.md#onresize)
- [destroy](FXAAPost.md#destroy)

## Constructors

### constructor

• **new FXAAPost**(): [`FXAAPost`](FXAAPost.md)

#### Returns

[`FXAAPost`](FXAAPost.md)

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/FXAAPost.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L22)

## Properties

### postQuad

• **postQuad**: `ViewQuad`

#### Defined in

[src/gfx/renderJob/post/FXAAPost.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L19)

___

### renderTexture

• **renderTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/post/FXAAPost.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L21)

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

## Methods

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/FXAAPost.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L33)

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
