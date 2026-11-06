[**@orillusion/core**](../README.md)

***

# Class: ColorGradingPost

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L29)

Color grading, applied after the tonemap on display-referred color:
exposure trim, white balance (temperature / tint), contrast, saturation,
ASC-CDL slope / offset / power, and an optional strip LUT for film looks.

```ts
const post = scene.addComponent(PostProcessingComponent);
const grade = post.addPost(ColorGradingPost);
grade.contrast = 1.15;
grade.saturation = 1.1;
grade.temperature = 0.2;
grade.setLUTFromFunction(16, (r, g, b) => [r, g * 0.9, b * 0.8]);   // or grade.lut = a 256×16 strip texture
```

## Constructors

### Constructor

> **new ColorGradingPost**(): `ColorGradingPost`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L41)

#### Returns

`ColorGradingPost`

#### Overrides

`PostBase.constructor`

## Properties

### postQuad

> **postQuad**: `ViewQuad`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L30)

***

### renderTexture

> **renderTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L31)

***

### enable

> **enable**: `boolean` = `true`

Defined in: [src/gfx/renderJob/post/PostBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L23)

#### Inherited from

`PostBase.enable`

***

### isFinalPass

> **isFinalPass**: `boolean` = `false`

Defined in: [src/gfx/renderJob/post/PostBase.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L27)

When true, PostPass iterates this post AFTER every regular
 post regardless of attach order — used by TonemapPost so the
 ACES curve always lands on the fully-composited HDR signal.

#### Inherited from

`PostBase.isFinalPass`

***

### postRenderer

> **postRenderer**: [`PostPass`](PostPass.md)

Defined in: [src/gfx/renderJob/post/PostBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L28)

#### Inherited from

`PostBase.postRenderer`

***

### rendererPassState

> **rendererPassState**: `RendererPassState`

Defined in: [src/gfx/renderJob/post/PostBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L29)

#### Inherited from

`PostBase.rendererPassState`

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/renderJob/post/PostBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L30)

#### Inherited from

`PostBase._boundCtx`

## Accessors

### exposure

#### Get Signature

> **get** **exposure**(): `number`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L75)

Exposure trim in stops.

##### Returns

`number`

#### Set Signature

> **set** **exposure**(`v`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L76)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### temperature

#### Get Signature

> **get** **temperature**(): `number`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L79)

White balance, −1 cool … +1 warm.

##### Returns

`number`

#### Set Signature

> **set** **temperature**(`v`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L80)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### tint

#### Get Signature

> **get** **tint**(): `number`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L83)

Green–magenta balance, −1 green … +1 magenta.

##### Returns

`number`

#### Set Signature

> **set** **tint**(`v`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L84)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### contrast

#### Get Signature

> **get** **contrast**(): `number`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L87)

Contrast, 1 = unchanged.

##### Returns

`number`

#### Set Signature

> **set** **contrast**(`v`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L88)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### saturation

#### Get Signature

> **get** **saturation**(): `number`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L91)

Saturation, 0 = greyscale, 1 = unchanged.

##### Returns

`number`

#### Set Signature

> **set** **saturation**(`v`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L92)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### slope

#### Get Signature

> **get** **slope**(): \[`number`, `number`, `number`\]

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L95)

ASC-CDL slope per channel.

##### Returns

\[`number`, `number`, `number`\]

#### Set Signature

> **set** **slope**(`v`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L96)

##### Parameters

###### v

\[`number`, `number`, `number`\]

##### Returns

`void`

***

### offset

#### Get Signature

> **get** **offset**(): \[`number`, `number`, `number`\]

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L99)

ASC-CDL offset per channel.

##### Returns

\[`number`, `number`, `number`\]

#### Set Signature

> **set** **offset**(`v`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L100)

##### Parameters

###### v

\[`number`, `number`, `number`\]

##### Returns

`void`

***

### power

#### Get Signature

> **get** **power**(): \[`number`, `number`, `number`\]

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L103)

ASC-CDL power per channel.

##### Returns

\[`number`, `number`, `number`\]

#### Set Signature

> **set** **power**(`v`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L104)

##### Parameters

###### v

\[`number`, `number`, `number`\]

##### Returns

`void`

***

### lutIntensity

#### Get Signature

> **get** **lutIntensity**(): `number`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L107)

LUT blend, 0…1.

##### Returns

`number`

#### Set Signature

> **set** **lutIntensity**(`v`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L108)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### lut

#### Get Signature

> **get** **lut**(): [`Texture`](Texture.md)

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L114)

Strip LUT texture (`size²`×`size`, e.g. 256×16 or 1024×32), sRGB-encoded,
top row = green 0. `null` removes it. The texture must not use mipmaps.

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **lut**(`tex`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L115)

##### Parameters

###### tex

[`Texture`](Texture.md)

##### Returns

`void`

***

### lutSize

#### Get Signature

> **get** **lutSize**(): `number`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L126)

Edge length of the current LUT cube, 0 without a LUT.

##### Returns

`number`

## Methods

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L55)

#### Returns

`void`

#### Overrides

`PostBase.onResize`

***

### setLUTFromFunction()

> **setLUTFromFunction**(`size`, `fn`): `object`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L132)

Build a LUT from a function on sRGB-encoded colors and use it.

#### Parameters

##### size

`number`

##### fn

(`r`, `g`, `b`) => \[`number`, `number`, `number`\]

#### Returns

`object`

the pixel data, e.g. to feed `ColorGradingUtil.sampleLUT`.

##### data

> **data**: `Uint8Array`

##### width

> **width**: `number`

##### height

> **height**: `number`

***

### render()

> **render**(`view`, `command`): `void`

Defined in: [src/gfx/renderJob/post/ColorGradingPost.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/ColorGradingPost.ts#L144)

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

Defined in: [src/gfx/renderJob/post/PostBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L133)

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

Defined in: [src/gfx/renderJob/post/PostBase.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L143)

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`PostBase.destroy`
