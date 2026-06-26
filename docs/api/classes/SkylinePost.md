[**@orillusion/core**](../README.md)

***

# Class: SkylinePost

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L21)

Skyline post-processing effect
Draws a colored outline at the boundary between objects and the sky

## Constructors

### Constructor

> **new SkylinePost**(): `SkylinePost`

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L30)

#### Returns

`SkylinePost`

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

### lineColor

#### Get Signature

> **get** **lineColor**(): [`Color`](Color.md)

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:90](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L90)

Line color of the skyline effect

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **lineColor**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:94](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L94)

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

***

### lineWidth

#### Get Signature

> **get** **lineWidth**(): `number`

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:101](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L101)

Line width in pixels

##### Returns

`number`

#### Set Signature

> **set** **lineWidth**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L105)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### depthThreshold

#### Get Signature

> **get** **depthThreshold**(): `number`

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:112](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L112)

Depth threshold for edge detection

##### Returns

`number`

#### Set Signature

> **set** **depthThreshold**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:116](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L116)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### strength

#### Get Signature

> **get** **strength**(): `number`

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:123](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L123)

Strength of the skyline effect

##### Returns

`number`

#### Set Signature

> **set** **strength**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:127](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L127)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

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

***

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/SkylinePost.ts:151](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SkylinePost.ts#L151)

#### Returns

`void`

#### Overrides

`PostBase.onResize`
