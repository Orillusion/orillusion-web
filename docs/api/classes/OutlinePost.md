# Class: OutlinePost

post effect out line 
OutlinePostManager,
```
 setting
 let cfg = {@link Engine3D.setting.render.postProcessing.outline};
 let view = new View3D();
 view.scene = this.scene;
 view.camera = mainCamera;
 Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`OutlinePost`**

### Constructors

- [constructor](OutlinePost.md#constructor)

### Properties

- [enable](OutlinePost.md#enable)
- [postRenderer](OutlinePost.md#postrenderer)

### Accessors

- [outlinePixel](OutlinePost.md#outlinepixel)
- [fadeOutlinePixel](OutlinePost.md#fadeoutlinepixel)
- [strength](OutlinePost.md#strength)
- [useAddMode](OutlinePost.md#useaddmode)

### Methods

- [onResize](OutlinePost.md#onresize)
- [destroy](OutlinePost.md#destroy)

## Constructors

### constructor

• **new OutlinePost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L99)

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

## Accessors

### outlinePixel

• `get` **outlinePixel**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L125)

• `set` **outlinePixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L117)

___

### fadeOutlinePixel

• `get` **fadeOutlinePixel**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L137)

• `set` **fadeOutlinePixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L129)

___

### strength

• `get` **strength**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L149)

• `set` **strength**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L141)

___

### useAddMode

• `get` **useAddMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L157)

• `set` **useAddMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L153)

## Methods

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:293](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L293)

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
