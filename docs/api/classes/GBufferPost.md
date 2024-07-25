# Class: GBufferPost

Ground base Ambient Occlusion
Let the intersection of the object and the object imitate the effect of the light being cross-occluded
```
gtao setting
let cfg = {@link Engine3D.setting.render.postProcessing.gtao};
```

## Hierarchy

- `PostBase`

  ↳ **`GBufferPost`**

### Constructors

- [constructor](GBufferPost.md#constructor)

### Properties

- [rtFrame](GBufferPost.md#rtframe)
- [view](GBufferPost.md#view)
- [gBufferTexture](GBufferPost.md#gbuffertexture)
- [testCompute](GBufferPost.md#testcompute)
- [uniformBuffer](GBufferPost.md#uniformbuffer)
- [currentRenderTexture](GBufferPost.md#currentrendertexture)
- [enable](GBufferPost.md#enable)
- [postRenderer](GBufferPost.md#postrenderer)

### Accessors

- [state](GBufferPost.md#state)
- [size1](GBufferPost.md#size1)
- [size2](GBufferPost.md#size2)

### Methods

- [onDetach](GBufferPost.md#ondetach)
- [render](GBufferPost.md#render)
- [compute](GBufferPost.md#compute)
- [onResize](GBufferPost.md#onresize)
- [destroy](GBufferPost.md#destroy)

## Constructors

### constructor

• **new GBufferPost**(): [`GBufferPost`](GBufferPost.md)

#### Returns

[`GBufferPost`](GBufferPost.md)

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L55)

## Properties

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L46)

___

### view

• **view**: [`View3D`](View3D.md)

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L47)

___

### gBufferTexture

• **gBufferTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L48)

___

### testCompute

• **testCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L49)

___

### uniformBuffer

• **uniformBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L53)

___

### currentRenderTexture

• **currentRenderTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L54)

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

### state

• `get` **state**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L82)

• `set` **state**(`v`): `void`

check state

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L76)

___

### size1

• `get` **size1**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L92)

• `set` **size1**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L86)

___

### size2

• `get` **size2**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L102)

• `set` **size2**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L96)

## Methods

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

[src/gfx/renderJob/post/GBufferPost.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L69)

___

### render

▸ **render**(`view`, `command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Overrides

PostBase.render

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L153)

___

### compute

▸ **compute**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

PostBase.compute

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L157)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/GBufferPost.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L173)

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
