# Class: HDRBloomPost

HDR Bloom effect
```
@group Post Effects

## Hierarchy

- `PostBase`

  ↳ **`HDRBloomPost`**


### Constructors

- [constructor](HDRBloomPost.md#constructor)

### Methods

- [onAttach](HDRBloomPost.md#onattach)
- [onDetach](HDRBloomPost.md#ondetach)
- [debug](HDRBloomPost.md#debug)
- [destroy](HDRBloomPost.md#destroy)

### Accessors

- [bloomStrength](HDRBloomPost.md#bloomstrength)
- [bloomRadius](HDRBloomPost.md#bloomradius)
- [luminosityThreshold](HDRBloomPost.md#luminositythreshold)

### Properties

- [enable](HDRBloomPost.md#enable)
- [postRenderer](HDRBloomPost.md#postrenderer)

## Constructors

### constructor

• **new HDRBloomPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L29)

## Methods

### onAttach

▸ **onAttach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

PostBase.onAttach

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L87)

___

### onDetach

▸ **onDetach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

PostBase.onDetach

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L91)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L94)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

PostBase.destroy

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L79)

## Accessors

### bloomStrength

• `get` **bloomStrength**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L97)

• `set` **bloomStrength**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L101)

___

### bloomRadius

• `get` **bloomRadius**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L105)

• `set` **bloomRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L109)

___

### luminosityThreshold

• `get` **luminosityThreshold**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L113)

• `set` **luminosityThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L117)

## Properties

### enable

• **enable**: `boolean` = `true`

#### Inherited from

PostBase.enable

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L18)

___

### postRenderer

• **postRenderer**: `PostRenderer`

#### Inherited from

PostBase.postRenderer

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L19)
