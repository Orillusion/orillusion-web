# Class: HDRBloomPost

HDR Bloom effect
```
@group Post Effects

## Hierarchy

- `PostBase`

  ↳ **`HDRBloomPost`**

### Constructors

- [constructor](HDRBloomPost.md#constructor)

### Properties

- [enable](HDRBloomPost.md#enable)
- [postRenderer](HDRBloomPost.md#postrenderer)

### Accessors

- [tintColor](HDRBloomPost.md#tintcolor)
- [strength](HDRBloomPost.md#strength)
- [exposure](HDRBloomPost.md#exposure)
- [radius](HDRBloomPost.md#radius)
- [luminosityThreshold](HDRBloomPost.md#luminositythreshold)

### Methods

- [onAttach](HDRBloomPost.md#onattach)
- [onDetach](HDRBloomPost.md#ondetach)
- [debug](HDRBloomPost.md#debug)
- [destroy](HDRBloomPost.md#destroy)

## Constructors

### constructor

• **new HDRBloomPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L30)

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

## Accessors

### tintColor

• `get` **tintColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L105)

• `set` **tintColor**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L109)

___

### strength

• `get` **strength**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L113)

• `set` **strength**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L117)

___

### exposure

• `get` **exposure**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L121)

• `set` **exposure**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L125)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L130)

• `set` **radius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L134)

___

### luminosityThreshold

• `get` **luminosityThreshold**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L138)

• `set` **luminosityThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L142)

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

[src/gfx/renderJob/post/HDRBloomPost.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L95)

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

[src/gfx/renderJob/post/HDRBloomPost.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L99)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/HDRBloomPost.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/HDRBloomPost.ts#L102)

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

[src/gfx/renderJob/post/PostBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L81)
