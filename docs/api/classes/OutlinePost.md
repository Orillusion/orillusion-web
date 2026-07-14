[**@orillusion/core**](../README.md)

***

# Class: OutlinePost

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:36](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L36)

post effect out line 
OutlinePostManager,
```
 setting
 let cfg = {@link this.setting.render.postProcessing.outline};
 let view = new View3D();
 view.scene = this.scene;
 view.camera = mainCamera;
 Engine3D.startRender(renderJob);
```

## Constructors

### Constructor

> **new OutlinePost**(): `OutlinePost`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:95](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L95)

#### Returns

`OutlinePost`

#### Overrides

`PostBase.constructor`

## Properties

### enable

> **enable**: `boolean` = `true`

Defined in: [src/gfx/renderJob/post/PostBase.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L23)

#### Inherited from

`PostBase.enable`

***

### isFinalPass

> **isFinalPass**: `boolean` = `false`

Defined in: [src/gfx/renderJob/post/PostBase.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L27)

When true, PostPass iterates this post AFTER every regular
 post regardless of attach order — used by TonemapPost so the
 ACES curve always lands on the fully-composited HDR signal.

#### Inherited from

`PostBase.isFinalPass`

***

### postRenderer

> **postRenderer**: [`PostPass`](PostPass.md)

Defined in: [src/gfx/renderJob/post/PostBase.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L28)

#### Inherited from

`PostBase.postRenderer`

***

### rendererPassState

> **rendererPassState**: `RendererPassState`

Defined in: [src/gfx/renderJob/post/PostBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L29)

#### Inherited from

`PostBase.rendererPassState`

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/renderJob/post/PostBase.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L30)

#### Inherited from

`PostBase._boundCtx`

## Accessors

### outlinePixel

#### Get Signature

> **get** **outlinePixel**(): `number`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:122](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L122)

##### Returns

`number`

#### Set Signature

> **set** **outlinePixel**(`value`): `void`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:114](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L114)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### fadeOutlinePixel

#### Get Signature

> **get** **fadeOutlinePixel**(): `number`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:134](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L134)

##### Returns

`number`

#### Set Signature

> **set** **fadeOutlinePixel**(`value`): `void`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:126](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L126)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### strength

#### Get Signature

> **get** **strength**(): `number`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:146](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L146)

##### Returns

`number`

#### Set Signature

> **set** **strength**(`value`): `void`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:138](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L138)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### useAddMode

#### Get Signature

> **get** **useAddMode**(): `boolean`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:154](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L154)

##### Returns

`boolean`

#### Set Signature

> **set** **useAddMode**(`value`): `void`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:150](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L150)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/OutlinePost.ts:294](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/OutlinePost.ts#L294)

#### Returns

`void`

#### Overrides

`PostBase.onResize`

***

### compute()

> **compute**(`view`): `void`

Defined in: [src/gfx/renderJob/post/PostBase.ts:133](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L133)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

#### Inherited from

`PostBase.compute`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/gfx/renderJob/post/PostBase.ts:143](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L143)

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`PostBase.destroy`
