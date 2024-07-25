# Class: GTAOPost

Ground base Ambient Occlusion
Let the intersection of the object and the object imitate the effect of the light being cross-occluded
```
gtao setting
let cfg = {@link Engine3D.setting.render.postProcessing.gtao};
```

## Hierarchy

- `PostBase`

  ↳ **`GTAOPost`**

### Constructors

- [constructor](GTAOPost.md#constructor)

### Properties

- [rtFrame](GTAOPost.md#rtframe)
- [enable](GTAOPost.md#enable)
- [postRenderer](GTAOPost.md#postrenderer)

### Accessors

- [maxDistance](GTAOPost.md#maxdistance)
- [maxPixel](GTAOPost.md#maxpixel)
- [darkFactor](GTAOPost.md#darkfactor)
- [rayMarchSegment](GTAOPost.md#raymarchsegment)
- [multiBounce](GTAOPost.md#multibounce)
- [blendColor](GTAOPost.md#blendcolor)
- [usePosFloat32](GTAOPost.md#useposfloat32)

### Methods

- [onDetach](GTAOPost.md#ondetach)
- [onResize](GTAOPost.md#onresize)
- [destroy](GTAOPost.md#destroy)

## Constructors

### constructor

• **new GTAOPost**(): [`GTAOPost`](GTAOPost.md)

#### Returns

[`GTAOPost`](GTAOPost.md)

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L62)

## Properties

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L60)

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

### maxDistance

• `get` **maxDistance**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L79)

• `set` **maxDistance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L84)

___

### maxPixel

• `get` **maxPixel**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L90)

• `set` **maxPixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L95)

___

### darkFactor

• `get` **darkFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L101)

• `set` **darkFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L106)

___

### rayMarchSegment

• `get` **rayMarchSegment**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L113)

• `set` **rayMarchSegment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L118)

___

### multiBounce

• `get` **multiBounce**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L124)

• `set` **multiBounce**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L129)

___

### blendColor

• `get` **blendColor**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L134)

• `set` **blendColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L139)

___

### usePosFloat32

• `get` **usePosFloat32**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L144)

• `set` **usePosFloat32**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L149)

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

[src/gfx/renderJob/post/GTAOPost.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L75)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L239)

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
