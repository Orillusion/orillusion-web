# Class: GodRayPost

## Hierarchy

- `PostBase`

  ↳ **`GodRayPost`**

### Constructors

- [constructor](GodRayPost.md#constructor)

### Properties

- [rtFrame](GodRayPost.md#rtframe)
- [blendColor](GodRayPost.md#blendcolor)
- [rayMarchCount](GodRayPost.md#raymarchcount)
- [scatteringExponent](GodRayPost.md#scatteringexponent)
- [intensity](GodRayPost.md#intensity)
- [enable](GodRayPost.md#enable)
- [postRenderer](GodRayPost.md#postrenderer)

### Methods

- [onDetach](GodRayPost.md#ondetach)
- [destroy](GodRayPost.md#destroy)

## Constructors

### constructor

• **new GodRayPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L45)

## Properties

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L43)

___

### blendColor

• **blendColor**: `boolean` = `true`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L64)

___

### rayMarchCount

• **rayMarchCount**: `number` = `16`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L65)

___

### scatteringExponent

• **scatteringExponent**: `number` = `5`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L66)

___

### intensity

• **intensity**: `number` = `0.5`

#### Defined in

[src/gfx/renderJob/post/GodRayPost.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L67)

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

[src/gfx/renderJob/post/GodRayPost.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L59)

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
