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

• **new OutlinePost**(): [`OutlinePost`](OutlinePost.md)

#### Returns

[`OutlinePost`](OutlinePost.md)

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L101)

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

[src/gfx/renderJob/post/OutlinePost.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L128)

• `set` **outlinePixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L120)

___

### fadeOutlinePixel

• `get` **fadeOutlinePixel**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L140)

• `set` **fadeOutlinePixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L132)

___

### strength

• `get` **strength**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L152)

• `set` **strength**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L144)

___

### useAddMode

• `get` **useAddMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L160)

• `set` **useAddMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L156)

## Methods

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/OutlinePost.ts:299](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L299)

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
