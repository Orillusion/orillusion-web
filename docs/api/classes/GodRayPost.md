[**@orillusion/core**](../README.md)

***

# Class: GodRayPost

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L27)

God-ray (light-shaft) post-processing effect. A compute pass marches
the scene depth/G-buffer to accumulate volumetric light scattering
along view rays toward the light, with temporal history reuse, then
blends the result over the scene color.

## Constructors

### Constructor

> **new GodRayPost**(): `GodRayPost`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:47](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L47)

#### Returns

`GodRayPost`

#### Overrides

`PostBase.constructor`

## Properties

### rtFrame

> **rtFrame**: [`RTFrame`](RTFrame.md)

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L45)

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

### blendColor

#### Get Signature

> **get** **blendColor**(): `boolean`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:66](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L66)

##### Returns

`boolean`

#### Set Signature

> **set** **blendColor**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:69](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L69)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### rayMarchCount

#### Get Signature

> **get** **rayMarchCount**(): `number`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:72](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L72)

##### Returns

`number`

#### Set Signature

> **set** **rayMarchCount**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:75](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L75)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### scatteringExponent

#### Get Signature

> **get** **scatteringExponent**(): `number`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:79](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L79)

##### Returns

`number`

#### Set Signature

> **set** **scatteringExponent**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:82](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L82)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### intensity

#### Get Signature

> **get** **intensity**(): `number`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:86](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L86)

##### Returns

`number`

#### Set Signature

> **set** **intensity**(`value`): `void`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:89](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L89)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/GodRayPost.ts:136](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GodRayPost.ts#L136)

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
