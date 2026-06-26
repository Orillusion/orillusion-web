[**@orillusion/core**](../README.md)

***

# Class: DepthOfFieldPost

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:36](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L36)

depth of field effect.
A common post-processing effect that simulates the focusing characteristics of a camera lens.
```
      //Configure parameters related to depth of field
      let cfg = {@link this.setting.render.postProcessing.depthOfView};
      cfg.near = 150;
      cfg.far = 300;
      cfg.pixelOffset = 1.0;
        let view = new View3D();
       view.scene = this.scene;
       view.camera = mainCamera;
       
      
      Engine3D.startRender(renderJob);
```

## Constructors

### Constructor

> **new DepthOfFieldPost**(): `DepthOfFieldPost`

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:59](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L59)

#### Returns

`DepthOfFieldPost`

#### Overrides

`PostBase.constructor`

## Properties

### rtFrame

> **rtFrame**: [`RTFrame`](RTFrame.md)

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:57](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L57)

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

### pixelOffset

#### Get Signature

> **get** **pixelOffset**(): `number`

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:75](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L75)

##### Returns

`number`

#### Set Signature

> **set** **pixelOffset**(`value`): `void`

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:80](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L80)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### near

#### Get Signature

> **get** **near**(): `number`

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:86](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L86)

##### Returns

`number`

#### Set Signature

> **set** **near**(`value`): `void`

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:91](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L91)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### far

#### Get Signature

> **get** **far**(): `number`

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:97](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L97)

##### Returns

`number`

#### Set Signature

> **set** **far**(`value`): `void`

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:102](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L102)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/DepthOfFieldPost.ts:197](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/DepthOfFieldPost.ts#L197)

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
