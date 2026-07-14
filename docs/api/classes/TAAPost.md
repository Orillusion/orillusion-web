[**@orillusion/core**](../README.md)

***

# Class: TAAPost

Defined in: [src/gfx/renderJob/post/TAAPost.ts:36](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L36)

Temporal AA
```
      //setting
      let cfg = {@link this.setting.render.postProcessing.taa};
        let view = new View3D();
       view.scene = this.scene;
       view.camera = mainCamera;
       
      
      Engine3D.startRender(renderJob);
```

## Constructors

### Constructor

> **new TAAPost**(): `TAAPost`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:66](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L66)

#### Returns

`TAAPost`

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

***

### outTexture

> **outTexture**: `VirtualTexture`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:41](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L41)

***

### copyTexCompute

> **copyTexCompute**: `ComputeShader`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:46](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L46)

***

### sharpCompute

> **sharpCompute**: `ComputeShader`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:47](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L47)

***

### preColorTex

> **preColorTex**: `VirtualTexture`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:57](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L57)

***

### preViewMatrix

> **preViewMatrix**: [`Matrix4`](Matrix4.md)

Defined in: [src/gfx/renderJob/post/TAAPost.ts:63](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L63)

***

### rtFrame

> **rtFrame**: [`RTFrame`](RTFrame.md)

Defined in: [src/gfx/renderJob/post/TAAPost.ts:64](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L64)

## Accessors

### jitterSeedCount

#### Get Signature

> **get** **jitterSeedCount**(): `number`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:86](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L86)

##### Returns

`number`

#### Set Signature

> **set** **jitterSeedCount**(`value`): `void`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:91](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L91)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### blendFactor

#### Get Signature

> **get** **blendFactor**(): `number`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:98](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L98)

##### Returns

`number`

#### Set Signature

> **set** **blendFactor**(`value`): `void`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:103](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L103)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sharpFactor

#### Get Signature

> **get** **sharpFactor**(): `number`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:109](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L109)

##### Returns

`number`

#### Set Signature

> **set** **sharpFactor**(`value`): `void`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:114](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L114)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sharpPreBlurFactor

#### Get Signature

> **get** **sharpPreBlurFactor**(): `number`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:120](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L120)

##### Returns

`number`

#### Set Signature

> **set** **sharpPreBlurFactor**(`value`): `void`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:125](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L125)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### temporalJitterScale

#### Get Signature

> **get** **temporalJitterScale**(): `number`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:131](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L131)

##### Returns

`number`

#### Set Signature

> **set** **temporalJitterScale**(`value`): `void`

Defined in: [src/gfx/renderJob/post/TAAPost.ts:136](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L136)

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

Defined in: [src/gfx/renderJob/post/TAAPost.ts:251](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TAAPost.ts#L251)

#### Returns

`void`

#### Overrides

`PostBase.onResize`
