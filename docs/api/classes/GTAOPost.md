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
- [destroy](GTAOPost.md#destroy)

## Constructors

### constructor

• **new GTAOPost**()

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

[src/gfx/renderJob/post/PostBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L19)

___

### postRenderer

• **postRenderer**: `PostRenderer`

#### Inherited from

PostBase.postRenderer

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L20)

## Accessors

### maxDistance

• `get` **maxDistance**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L81)

• `set` **maxDistance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L86)

___

### maxPixel

• `get` **maxPixel**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L92)

• `set` **maxPixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L97)

___

### darkFactor

• `get` **darkFactor**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L103)

• `set` **darkFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L108)

___

### rayMarchSegment

• `get` **rayMarchSegment**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L115)

• `set` **rayMarchSegment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L120)

___

### multiBounce

• `get` **multiBounce**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L126)

• `set` **multiBounce**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L131)

___

### blendColor

• `get` **blendColor**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L136)

• `set` **blendColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L141)

___

### usePosFloat32

• `get` **usePosFloat32**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L146)

• `set` **usePosFloat32**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/GTAOPost.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L151)

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
