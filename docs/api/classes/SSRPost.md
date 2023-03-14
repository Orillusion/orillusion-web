# Class: SSRPost

屏幕空间反射效果
```
      //配置相关参数
      let cfg = {@link Engine3D.setting.render.postProcessing.ssr};
      let renderJob = new ForwardRenderJob(this.scene);
      renderJob.addPost(new SSRPost());
      Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`SSRPost`**


### Properties

- [rtFrame](SSRPost.md#rtframe)
- [historyPosition](SSRPost.md#historyposition)

### Constructors

- [constructor](SSRPost.md#constructor)

### Accessors

- [fadeEdgeRatio](SSRPost.md#fadeedgeratio)
- [rayMarchRatio](SSRPost.md#raymarchratio)
- [roughnessThreshold](SSRPost.md#roughnessthreshold)
- [fadeDistanceMin](SSRPost.md#fadedistancemin)
- [fadeDistanceMax](SSRPost.md#fadedistancemax)
- [powDotRN](SSRPost.md#powdotrn)

## Properties

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L71)

___

### historyPosition

• **historyPosition**: `StorageGPUBuffer`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L72)

## Constructors

### constructor

• **new SSRPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L74)

## Accessors

### fadeEdgeRatio

• `get` **fadeEdgeRatio**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L92)

• `set` **fadeEdgeRatio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L97)

___

### rayMarchRatio

• `get` **rayMarchRatio**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L103)

• `set` **rayMarchRatio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L108)

___

### roughnessThreshold

• `get` **roughnessThreshold**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L114)

• `set` **roughnessThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L119)

___

### fadeDistanceMin

• `get` **fadeDistanceMin**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L125)

• `set` **fadeDistanceMin**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L130)

___

### fadeDistanceMax

• `get` **fadeDistanceMax**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L136)

• `set` **fadeDistanceMax**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L141)

___

### powDotRN

• `get` **powDotRN**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L147)

• `set` **powDotRN**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/SSRPost.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/SSRPost.ts#L152)
