[**@orillusion/core**](../README.md)

***

# Class: GBufferPost

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:34](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L34)

Ground base Ambient Occlusion
Let the intersection of the object and the object imitate the effect of the light being cross-occluded
```
gtao setting
let cfg = {@link this.setting.render.postProcessing.gtao};
```

## Constructors

### Constructor

> **new GBufferPost**(): `GBufferPost`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:49](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L49)

#### Returns

`GBufferPost`

#### Overrides

`PostBase.constructor`

## Properties

### rtFrame

> **rtFrame**: [`RTFrame`](RTFrame.md)

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:40](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L40)

***

### view

> **view**: [`View3D`](View3D.md)

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:41](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L41)

***

### gBufferTexture

> **gBufferTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L42)

***

### testCompute

> **testCompute**: `ComputeShader`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:43](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L43)

***

### uniformBuffer

> **uniformBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:47](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L47)

***

### currentRenderTexture

> **currentRenderTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:48](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L48)

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

### state

#### Get Signature

> **get** **state**(): `number`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:76](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L76)

##### Returns

`number`

#### Set Signature

> **set** **state**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:70](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L70)

check state

##### Parameters

###### v

`number`

##### Returns

`void`

***

### size1

#### Get Signature

> **get** **size1**(): `number`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:86](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L86)

##### Returns

`number`

#### Set Signature

> **set** **size1**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:80](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L80)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### size2

#### Get Signature

> **get** **size2**(): `number`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:96](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L96)

##### Returns

`number`

#### Set Signature

> **set** **size2**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:90](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L90)

##### Parameters

###### v

`number`

##### Returns

`void`

## Methods

### render()

> **render**(`view`, `command`): `void`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:147](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L147)

#### Parameters

##### view

[`View3D`](View3D.md)

##### command

`GPUCommandEncoder`

#### Returns

`void`

#### Overrides

`PostBase.render`

***

### compute()

> **compute**(`view`): `void`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:151](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L151)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

`PostBase.compute`

***

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/GBufferPost.ts:167](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GBufferPost.ts#L167)

#### Returns

`void`

#### Overrides

`PostBase.onResize`

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
