# Class: GTAOPost

环境光遮蔽
让物体与物体交叉处模仿光照被交叉遮挡的效果
```
      //配置gtao参数
      let cfg = {@link Engine3D.setting.render.postProcessing.gtao};
      let renderJob = new ForwardRenderJob(this.scene);
      renderJob.addPost(new GTAOPost());
      Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`GTAOPost`**


### Properties

- [rtFrame](GTAOPost.md#rtframe)

### Constructors

- [constructor](GTAOPost.md#constructor)

### Methods

- [onDetach](GTAOPost.md#ondetach)

### Accessors

- [maxDistance](GTAOPost.md#maxdistance)
- [maxPixel](GTAOPost.md#maxpixel)
- [darkFactor](GTAOPost.md#darkfactor)
- [rayMarchSegment](GTAOPost.md#raymarchsegment)
- [multiBounce](GTAOPost.md#multibounce)
- [blendColor](GTAOPost.md#blendcolor)
- [usePosFloat32](GTAOPost.md#useposfloat32)

## Properties

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L64)

## Constructors

### constructor

• **new GTAOPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L66)

## Methods

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onDetach

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L79)

## Accessors

### maxDistance

• `get` **maxDistance**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L83)

• `set` **maxDistance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L88)

___

### maxPixel

• `get` **maxPixel**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L94)

• `set` **maxPixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L99)

___

### darkFactor

• `get` **darkFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L105)

• `set` **darkFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L110)

___

### rayMarchSegment

• `get` **rayMarchSegment**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L117)

• `set` **rayMarchSegment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L122)

___

### multiBounce

• `get` **multiBounce**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L128)

• `set` **multiBounce**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L133)

___

### blendColor

• `get` **blendColor**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L138)

• `set` **blendColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L143)

___

### usePosFloat32

• `get` **usePosFloat32**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L148)

• `set` **usePosFloat32**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/GTAOPost.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/GTAOPost.ts#L153)
