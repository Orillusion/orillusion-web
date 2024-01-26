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

[src/gfx/renderJob/post/GTAOPost.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L63)

## Properties

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L61)

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

[src/gfx/renderJob/post/GTAOPost.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L80)

• `set` **maxDistance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L85)

___

### maxPixel

• `get` **maxPixel**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L91)

• `set` **maxPixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L96)

___

### darkFactor

• `get` **darkFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L102)

• `set` **darkFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L107)

___

### rayMarchSegment

• `get` **rayMarchSegment**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L114)

• `set` **rayMarchSegment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L119)

___

### multiBounce

• `get` **multiBounce**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L125)

• `set` **multiBounce**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L130)

___

### blendColor

• `get` **blendColor**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L135)

• `set` **blendColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L140)

___

### usePosFloat32

• `get` **usePosFloat32**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L145)

• `set` **usePosFloat32**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L150)

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

[src/gfx/renderJob/post/GTAOPost.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L76)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:257](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L257)

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
