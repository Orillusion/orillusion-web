# Class: DepthOfFieldPost

景深效果。
模拟摄像机镜头对焦特性的一种常见的后处理效果。
```
      //配置景深的相关参数
      let cfg = {@link Engine3D.setting.render.postProcessing.depthOfView};
      cfg.near = 150;
      cfg.far = 300;
      cfg.pixelOffset = 1.0;
      let renderJob = new ForwardRenderJob(this.scene);
      renderJob.addPost(new DepthOfFieldPost());
      Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`DepthOfFieldPost`**


### Properties

- [rtFrame](DepthOfFieldPost.md#rtframe)

### Constructors

- [constructor](DepthOfFieldPost.md#constructor)

### Accessors

- [pixelOffset](DepthOfFieldPost.md#pixeloffset)
- [near](DepthOfFieldPost.md#near)
- [far](DepthOfFieldPost.md#far)

## Properties

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/engine/gfx/renderJob/post/DepthOfFieldPost.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/DepthOfFieldPost.ts#L59)

## Constructors

### constructor

• **new DepthOfFieldPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/engine/gfx/renderJob/post/DepthOfFieldPost.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/DepthOfFieldPost.ts#L61)

## Accessors

### pixelOffset

• `get` **pixelOffset**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/DepthOfFieldPost.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/DepthOfFieldPost.ts#L86)

• `set` **pixelOffset**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/DepthOfFieldPost.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/DepthOfFieldPost.ts#L91)

___

### near

• `get` **near**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/DepthOfFieldPost.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/DepthOfFieldPost.ts#L97)

• `set` **near**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/DepthOfFieldPost.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/DepthOfFieldPost.ts#L102)

___

### far

• `get` **far**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/DepthOfFieldPost.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/DepthOfFieldPost.ts#L108)

• `set` **far**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/DepthOfFieldPost.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/DepthOfFieldPost.ts#L113)
