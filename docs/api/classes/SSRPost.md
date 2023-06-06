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
- [rtFrame](SSRPost.md#rtframe)
- [historyPosition](SSRPost.md#historyposition)

### Accessors

- [fadeEdgeRatio](SSRPost.md#fadeedgeratio)
- [rayMarchRatio](SSRPost.md#raymarchratio)
- [roughnessThreshold](SSRPost.md#roughnessthreshold)
- [fadeDistanceMin](SSRPost.md#fadedistancemin)
- [fadeDistanceMax](SSRPost.md#fadedistancemax)
- [powDotRN](SSRPost.md#powdotrn)

### Methods

- [destroy](SSRPost.md#destroy)

## Constructors

### constructor

• **new SSRPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L76)

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

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L73)

___

### historyPosition

• **historyPosition**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L74)

## Accessors

### fadeEdgeRatio

• `get` **fadeEdgeRatio**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L95)

• `set` **fadeEdgeRatio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L100)

___

### rayMarchRatio

• `get` **rayMarchRatio**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L106)

• `set` **rayMarchRatio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L111)

___

### roughnessThreshold

• `get` **roughnessThreshold**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L117)

• `set` **roughnessThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L122)

___

### fadeDistanceMin

• `get` **fadeDistanceMin**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L128)

• `set` **fadeDistanceMin**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L133)

___

### fadeDistanceMax

• `get` **fadeDistanceMax**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L139)

• `set` **fadeDistanceMax**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L144)

___

### powDotRN

• `get` **powDotRN**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L150)

• `set` **powDotRN**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSRPost.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L155)

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
