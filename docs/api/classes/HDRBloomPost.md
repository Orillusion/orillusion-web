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

- [strength](HDRBloomPost.md#strength)
- [radius](HDRBloomPost.md#radius)
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

[src/gfx/renderJob/post/HDRBloomPost.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L89)

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

[src/gfx/renderJob/post/HDRBloomPost.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L93)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L96)

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

### strength

• `get` **strength**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L99)

• `set` **strength**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L103)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L107)

• `set` **radius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L111)

___

### luminosityThreshold

• `get` **luminosityThreshold**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L115)

• `set` **luminosityThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L119)

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
