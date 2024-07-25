# Class: SSRPost

Screen space reflection
```
      //setting
      let cfg = {@link Engine3D.setting.render.postProcessing.ssr};
        let view = new View3D();
       view.scene = this.scene;
       view.camera = mainCamera;
       
      
      Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`SSRPost`**

### Constructors

- [constructor](SSRPost.md#constructor)

### Properties

- [enable](SSRPost.md#enable)
- [postRenderer](SSRPost.md#postrenderer)
- [historyPosition](SSRPost.md#historyposition)
- [view](SSRPost.md#view)

### Accessors

- [fadeEdgeRatio](SSRPost.md#fadeedgeratio)
- [rayMarchRatio](SSRPost.md#raymarchratio)
- [roughnessThreshold](SSRPost.md#roughnessthreshold)
- [fadeDistanceMin](SSRPost.md#fadedistancemin)
- [fadeDistanceMax](SSRPost.md#fadedistancemax)
- [powDotRN](SSRPost.md#powdotrn)

### Methods

- [destroy](SSRPost.md#destroy)
- [onResize](SSRPost.md#onresize)

## Constructors

### constructor

• **new SSRPost**(): [`SSRPost`](SSRPost.md)

#### Returns

[`SSRPost`](SSRPost.md)

#### Inherited from

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L25)

## Properties

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

___

### historyPosition

• **historyPosition**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L71)

___

### view

• **view**: [`View3D`](View3D.md)

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L72)

## Accessors

### fadeEdgeRatio

• `get` **fadeEdgeRatio**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L90)

• `set` **fadeEdgeRatio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L95)

___

### rayMarchRatio

• `get` **rayMarchRatio**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L101)

• `set` **rayMarchRatio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L106)

___

### roughnessThreshold

• `get` **roughnessThreshold**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L112)

• `set` **roughnessThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L117)

___

### fadeDistanceMin

• `get` **fadeDistanceMin**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L123)

• `set` **fadeDistanceMin**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L128)

___

### fadeDistanceMax

• `get` **fadeDistanceMax**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L134)

• `set` **fadeDistanceMax**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L139)

___

### powDotRN

• `get` **powDotRN**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L145)

• `set` **powDotRN**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L150)

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

[src/gfx/renderJob/post/PostBase.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L87)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:289](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L289)
