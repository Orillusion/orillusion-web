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

- [enable](FXAAPost.md#enable)
- [postRenderer](FXAAPost.md#postrenderer)

### Methods

- [destroy](FXAAPost.md#destroy)

## Constructors

### constructor

• **new FXAAPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/FXAAPost.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L21)

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
