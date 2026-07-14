[**@orillusion/core**](../README.md)

***

# Class: GlobalFog

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L25)

screen space fog

## Constructors

### Constructor

> **new GlobalFog**(): `GlobalFog`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L33)

#### Returns

`GlobalFog`

#### Overrides

`PostBase.constructor`

## Properties

### rtFrame

> **rtFrame**: [`RTFrame`](RTFrame.md)

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:90](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L90)

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

### fogType

#### Get Signature

> **get** **fogType**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:117](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L117)

##### Returns

`number`

#### Set Signature

> **set** **fogType**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:114](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L114)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### fogHeightScale

#### Get Signature

> **get** **fogHeightScale**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:123](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L123)

##### Returns

`number`

#### Set Signature

> **set** **fogHeightScale**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:120](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L120)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### start

#### Get Signature

> **get** **start**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:129](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L129)

##### Returns

`number`

#### Set Signature

> **set** **start**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:126](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L126)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### end

#### Get Signature

> **get** **end**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:135](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L135)

##### Returns

`number`

#### Set Signature

> **set** **end**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:132](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L132)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### ins

#### Get Signature

> **get** **ins**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:141](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L141)

##### Returns

`number`

#### Set Signature

> **set** **ins**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:138](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L138)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### density

#### Get Signature

> **get** **density**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:147](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L147)

##### Returns

`number`

#### Set Signature

> **set** **density**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:144](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L144)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### skyRoughness

#### Get Signature

> **get** **skyRoughness**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:153](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L153)

##### Returns

`number`

#### Set Signature

> **set** **skyRoughness**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:150](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L150)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### skyFactor

#### Get Signature

> **get** **skyFactor**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:159](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L159)

##### Returns

`number`

#### Set Signature

> **set** **skyFactor**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:156](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L156)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### overrideSkyFactor

#### Get Signature

> **get** **overrideSkyFactor**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:166](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L166)

##### Returns

`number`

#### Set Signature

> **set** **overrideSkyFactor**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:163](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L163)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### falloff

#### Get Signature

> **get** **falloff**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:188](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L188)

##### Returns

`number`

#### Set Signature

> **set** **falloff**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:184](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L184)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### rayLength

#### Get Signature

> **get** **rayLength**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:196](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L196)

##### Returns

`number`

#### Set Signature

> **set** **rayLength**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:192](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L192)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### scatteringExponent

#### Get Signature

> **get** **scatteringExponent**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:204](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L204)

##### Returns

`number`

#### Set Signature

> **set** **scatteringExponent**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:200](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L200)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### dirHeightLine

#### Get Signature

> **get** **dirHeightLine**(): `number`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:212](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L212)

##### Returns

`number`

#### Set Signature

> **set** **dirHeightLine**(`v`): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:208](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L208)

##### Parameters

###### v

`number`

##### Returns

`void`

## Methods

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/GlobalFog.ts:254](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/GlobalFog.ts#L254)

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
