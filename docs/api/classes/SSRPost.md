[**@orillusion/core**](../README.md)

***

# Class: SSRPost

Defined in: [src/gfx/renderJob/post/SSRPost.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L37)

Screen space reflection
```
      //setting
      let cfg = {@link this.setting.render.postProcessing.ssr};
        let view = new View3D();
       view.scene = this.scene;
       view.camera = mainCamera;
       
      
      Engine3D.startRender(renderJob);
```

## Constructors

### Constructor

> **new SSRPost**(): `SSRPost`

Defined in: [src/gfx/renderJob/post/PostBase.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L35)

#### Returns

`SSRPost`

#### Inherited from

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

***

### historyPosition

> **historyPosition**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/renderJob/post/SSRPost.ts:65](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L65)

***

### view

> **view**: [`View3D`](View3D.md)

Defined in: [src/gfx/renderJob/post/SSRPost.ts:66](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L66)

## Accessors

### fadeEdgeRatio

#### Get Signature

> **get** **fadeEdgeRatio**(): `number`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:84](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L84)

##### Returns

`number`

#### Set Signature

> **set** **fadeEdgeRatio**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:89](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L89)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rayMarchRatio

#### Get Signature

> **get** **rayMarchRatio**(): `number`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:95](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L95)

##### Returns

`number`

#### Set Signature

> **set** **rayMarchRatio**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:100](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L100)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### roughnessThreshold

#### Get Signature

> **get** **roughnessThreshold**(): `number`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:106](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L106)

##### Returns

`number`

#### Set Signature

> **set** **roughnessThreshold**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:111](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L111)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### fadeDistanceMin

#### Get Signature

> **get** **fadeDistanceMin**(): `number`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:117](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L117)

##### Returns

`number`

#### Set Signature

> **set** **fadeDistanceMin**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:122](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L122)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### fadeDistanceMax

#### Get Signature

> **get** **fadeDistanceMax**(): `number`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:128](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L128)

##### Returns

`number`

#### Set Signature

> **set** **fadeDistanceMax**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:133](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L133)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### powDotRN

#### Get Signature

> **get** **powDotRN**(): `number`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:139](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L139)

##### Returns

`number`

#### Set Signature

> **set** **powDotRN**(`value`): `void`

Defined in: [src/gfx/renderJob/post/SSRPost.ts:144](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L144)

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

Defined in: [src/gfx/renderJob/post/SSRPost.ts:287](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSRPost.ts#L287)

#### Returns

`void`

#### Overrides

`PostBase.onResize`
