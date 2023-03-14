# Class: HDRBloomPost

HDRBloom泛光效果
```
      //配置相关参数
      let cfg = {@link Engine3D.setting.render.postProcessing.bloom};
      let renderJob = new ForwardRenderJob(this.scene);
      renderJob.addPost(new HDRBloomPost());
      Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`HDRBloomPost`**


### Constructors

- [constructor](HDRBloomPost.md#constructor)

### Methods

- [debug](HDRBloomPost.md#debug)

### Accessors

- [bloomStrength](HDRBloomPost.md#bloomstrength)
- [bloomRadius](HDRBloomPost.md#bloomradius)
- [luminosityThreshold](HDRBloomPost.md#luminositythreshold)

## Constructors

### constructor

• **new HDRBloomPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/engine/gfx/renderJob/post/HDRBloomPost.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/HDRBloomPost.ts#L36)

## Methods

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/HDRBloomPost.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/HDRBloomPost.ts#L95)

## Accessors

### bloomStrength

• `get` **bloomStrength**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/HDRBloomPost.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/HDRBloomPost.ts#L107)

• `set` **bloomStrength**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/HDRBloomPost.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/HDRBloomPost.ts#L111)

___

### bloomRadius

• `get` **bloomRadius**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/HDRBloomPost.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/HDRBloomPost.ts#L115)

• `set` **bloomRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/HDRBloomPost.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/HDRBloomPost.ts#L119)

___

### luminosityThreshold

• `get` **luminosityThreshold**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/HDRBloomPost.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/HDRBloomPost.ts#L123)

• `set` **luminosityThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/HDRBloomPost.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/HDRBloomPost.ts#L127)
