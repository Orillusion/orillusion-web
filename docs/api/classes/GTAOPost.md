[**@orillusion/core**](../README.md)

***

# Class: GTAOPost

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L28)

Ground base Ambient Occlusion
Let the intersection of the object and the object imitate the effect of the light being cross-occluded
```
gtao setting
let cfg = {@link this.setting.render.postProcessing.gtao};
```

## Constructors

### Constructor

> **new GTAOPost**(): `GTAOPost`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:56](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L56)

#### Returns

`GTAOPost`

#### Overrides

`PostBase.constructor`

## Properties

### rtFrame

> **rtFrame**: [`RTFrame`](RTFrame.md)

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:54](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L54)

***

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

### maxDistance

#### Get Signature

> **get** **maxDistance**(): `number`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:73](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L73)

##### Returns

`number`

#### Set Signature

> **set** **maxDistance**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:78](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L78)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### maxPixel

#### Get Signature

> **get** **maxPixel**(): `number`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:84](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L84)

##### Returns

`number`

#### Set Signature

> **set** **maxPixel**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:89](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L89)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### darkFactor

#### Get Signature

> **get** **darkFactor**(): `number`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:95](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L95)

##### Returns

`number`

#### Set Signature

> **set** **darkFactor**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:100](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L100)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rayMarchSegment

#### Get Signature

> **get** **rayMarchSegment**(): `number`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:107](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L107)

##### Returns

`number`

#### Set Signature

> **set** **rayMarchSegment**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:112](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L112)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### multiBounce

#### Get Signature

> **get** **multiBounce**(): `boolean`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:118](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L118)

##### Returns

`boolean`

#### Set Signature

> **set** **multiBounce**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:123](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L123)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### blendColor

#### Get Signature

> **get** **blendColor**(): `boolean`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:128](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L128)

##### Returns

`boolean`

#### Set Signature

> **set** **blendColor**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:133](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L133)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### usePosFloat32

#### Get Signature

> **get** **usePosFloat32**(): `boolean`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:138](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L138)

##### Returns

`boolean`

#### Set Signature

> **set** **usePosFloat32**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:143](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L143)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/GTAOPost.ts:234](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GTAOPost.ts#L234)

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
