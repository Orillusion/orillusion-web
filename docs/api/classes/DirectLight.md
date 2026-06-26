[**@orillusion/core**](../README.md)

***

# Class: DirectLight

Defined in: [src/components/lights/DirectLight.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L16)

Directional light source.
The light of this light source is parallel, for example, sunlight. This light source can generate shadows.

## Constructors

### Constructor

> **new DirectLight**(): `DirectLight`

Defined in: [src/components/lights/DirectLight.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L35)

#### Returns

`DirectLight`

#### Overrides

`LightBase.constructor`

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

`LightBase.object3D`

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

`LightBase.isDestroyed`

***

### shadowCamera

> **shadowCamera**: [`Camera3D`](Camera3D.md)

Defined in: [src/components/lights/DirectLight.ts:18](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L18)

Orthographic camera used to render the (non-CSM) shadow map.

***

### debugCSM

> **debugCSM**: `boolean` = `false`

Defined in: [src/components/lights/DirectLight.ts:22](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L22)

Draw the CSM cascade frustums for debugging.

***

### debugShadowBound

> **debugShadowBound**: `boolean` = `false`

Defined in: [src/components/lights/DirectLight.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L24)

Draw the non-CSM orthographic shadow bounds for debugging.

***

### csmShadowCamera

> **csmShadowCamera**: [`Camera3D`](Camera3D.md)[] = `[]`

Defined in: [src/components/lights/DirectLight.ts:26](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L26)

Per-cascade shadow cameras when CSM is enabled.

***

### frustumCSM

> **frustumCSM**: [`FrustumCSM`](FrustumCSM.md)

Defined in: [src/components/lights/DirectLight.ts:28](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L28)

Cascaded shadow map frustum splitter.

***

### csmAutoUpdate

> **csmAutoUpdate**: `boolean` = `true`

Defined in: [src/components/lights/DirectLight.ts:30](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L30)

When true, the CSM cascades are recomputed every frame.

***

### csmSplitFunction

> **csmSplitFunction**: (`near`, `far`, `index`, `max`) => `number`

Defined in: [src/components/lights/DirectLight.ts:32](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L32)

Optional custom cascade split distribution function.

#### Parameters

##### near

`number`

##### far

`number`

##### index

`number`

##### max

`number`

#### Returns

`number`

***

### name

> **name**: `string`

Defined in: [src/components/lights/LightBase.ts:22](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L22)

light name

#### Inherited from

`LightBase.name`

***

### size

> **size**: `number` = `1`

Defined in: [src/components/lights/LightBase.ts:26](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L26)

light size

#### Inherited from

`LightBase.size`

***

### shadowMapWidth

> **shadowMapWidth**: `number` = `0`

Defined in: [src/components/lights/LightBase.ts:41](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L41)

light shadow map size

#### Inherited from

`LightBase.shadowMapWidth`

***

### shadowMapHeight

> **shadowMapHeight**: `number` = `0`

Defined in: [src/components/lights/LightBase.ts:42](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L42)

#### Inherited from

`LightBase.shadowMapHeight`

***

### lightData

> **lightData**: `LightData`

Defined in: [src/components/lights/LightBase.ts:47](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L47)

light source data

#### Inherited from

`LightBase.lightData`

***

### dirFix

> **dirFix**: `number` = `1`

Defined in: [src/components/lights/LightBase.ts:52](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L52)

fix light direction

#### Inherited from

`LightBase.dirFix`

***

### bindOnChange

> **bindOnChange**: () => `void`

Defined in: [src/components/lights/LightBase.ts:57](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L57)

Callback function when binding changes

#### Returns

`void`

#### Inherited from

`LightBase.bindOnChange`

***

### needUpdateShadow

> **needUpdateShadow**: `boolean` = `true`

Defined in: [src/components/lights/LightBase.ts:59](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L59)

#### Inherited from

`LightBase.needUpdateShadow`

***

### realTimeShadow

> **realTimeShadow**: `boolean` = `true`

Defined in: [src/components/lights/LightBase.ts:64](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L64)

Whether to enable real-time rendering of shadows

#### Inherited from

`LightBase.realTimeShadow`

## Accessors

### visibleLayer

#### Get Signature

> **get** **visibleLayer**(): `number`

Defined in: [src/components/ComponentBase.ts:46](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L46)

Composition-layer membership bitmask. The pass / camera /
collector filters via

    (component.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

Defaults to [VisibleLayer.Default](../@orillusion/namespaces/VisibleLayer/variables/Default.md) (bit 0) so a fresh
subclass is visible to passes whose `layerMask` is
[VisibleLayer.All](../@orillusion/namespaces/VisibleLayer/variables/All.md) (which includes bit 0). Application code
can assign project-specific bits (1..31) to organise the scene
into composition layers.

##### Returns

`number`

#### Set Signature

> **set** **visibleLayer**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:50](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L50)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`LightBase.visibleLayer`

***

### eventDispatcher

#### Get Signature

> **get** **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

Defined in: [src/components/ComponentBase.ts:63](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L63)

##### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Set Signature

> **set** **eventDispatcher**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:68](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

##### Parameters

###### value

[`CEventDispatcher`](CEventDispatcher.md)

##### Returns

`void`

#### Inherited from

`LightBase.eventDispatcher`

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

`LightBase.isStart`

***

### transform

#### Get Signature

> **get** **transform**(): [`Transform`](Transform.md)

Defined in: [src/components/ComponentBase.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L89)

Return the Transform component attached to the Object3D.
Null before the component is attached — `addComponent` assigns
`object3D` only after construction — so constructor-time callers
can probe safely via `this.transform?.`.

##### Returns

[`Transform`](Transform.md)

#### Inherited from

`LightBase.transform`

***

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [src/components/ComponentBase.ts:113](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:96](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L96)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`LightBase.enable`

***

### enableCSM

#### Get Signature

> **get** **enableCSM**(): `boolean`

Defined in: [src/components/lights/DirectLight.ts:165](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L165)

Whether cascaded shadow maps (CSM) are enabled for this light.

##### Returns

`boolean`

#### Set Signature

> **set** **enableCSM**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L170)

Enable or disable cascaded shadow maps (defaults to 4 cascades).

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### cascadeNum

#### Get Signature

> **get** **cascadeNum**(): `number`

Defined in: [src/components/lights/DirectLight.ts:185](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L185)

Number of CSM cascades.

##### Returns

`number`

#### Set Signature

> **set** **cascadeNum**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:190](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L190)

Set the number of CSM cascades (min 1), rebuilding the cascade cameras.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowBias

#### Get Signature

> **get** **shadowBias**(): `number` \| `"auto"`

Defined in: [src/components/lights/DirectLight.ts:206](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L206)

Shadow depth bias; 'auto' derives a texel-size-based value.

##### Returns

`number` \| `"auto"`

#### Set Signature

> **set** **shadowBias**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:211](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L211)

Set the shadow depth bias (NDC depth units), or 'auto'.

##### Parameters

###### value

`number` \| `"auto"`

##### Returns

`void`

***

### normalBias

#### Get Signature

> **get** **normalBias**(): `number` \| `"auto"`

Defined in: [src/components/lights/DirectLight.ts:219](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L219)

Shadow normal bias; 'auto' derives a texel-size-based value.

##### Returns

`number` \| `"auto"`

#### Set Signature

> **set** **normalBias**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:224](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L224)

Set the shadow normal bias (world units), or 'auto'.

##### Parameters

###### value

`number` \| `"auto"`

##### Returns

`void`

***

### shadowBoundWidth

#### Get Signature

> **get** **shadowBoundWidth**(): `number`

Defined in: [src/components/lights/DirectLight.ts:232](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L232)

Width of the orthographic shadow bound (ignored when CSM is on).

##### Returns

`number`

#### Set Signature

> **set** **shadowBoundWidth**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:237](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L237)

Set the orthographic shadow bound width (ignored when CSM is on).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowBoundHeight

#### Get Signature

> **get** **shadowBoundHeight**(): `number`

Defined in: [src/components/lights/DirectLight.ts:248](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L248)

Height of the orthographic shadow bound (ignored when CSM is on).

##### Returns

`number`

#### Set Signature

> **set** **shadowBoundHeight**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:253](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L253)

Set the orthographic shadow bound height (ignored when CSM is on).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowBoundNear

#### Get Signature

> **get** **shadowBoundNear**(): `number`

Defined in: [src/components/lights/DirectLight.ts:264](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L264)

Near plane of the orthographic shadow bound (ignored when CSM is on).

##### Returns

`number`

#### Set Signature

> **set** **shadowBoundNear**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:269](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L269)

Set the orthographic shadow bound near plane (ignored when CSM is on).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowBoundFar

#### Get Signature

> **get** **shadowBoundFar**(): `number`

Defined in: [src/components/lights/DirectLight.ts:277](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L277)

Far plane of the orthographic shadow bound (ignored when CSM is on).

##### Returns

`number`

#### Set Signature

> **set** **shadowBoundFar**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:282](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L282)

Set the orthographic shadow bound far plane (ignored when CSM is on).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [src/components/lights/DirectLight.ts:305](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L305)

Get the radius of a directional light source

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:312](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L312)

Set the radius of a directional light source

##### Parameters

###### value

`number`

##### Returns

`void`

***

### indirect

#### Get Signature

> **get** **indirect**(): `number`

Defined in: [src/components/lights/DirectLight.ts:321](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L321)

Get the indirect (global illumination) contribution factor of this
directional light.

##### Returns

`number`

#### Set Signature

> **set** **indirect**(`value`): `void`

Defined in: [src/components/lights/DirectLight.ts:329](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L329)

Set the indirect (global illumination) contribution factor of this
directional light.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### softness

#### Get Signature

> **get** **softness**(): `number`

Defined in: [src/components/lights/LightBase.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L34)

Per-light PCSS penumbra multiplier. Default -1 means "fall back to the
global `engine.setting.shadow.shadowSoft`". Set a positive value to
override on this light only (e.g. a large area light casts a wider
penumbra than a small spotlight). Live-tunable — the value is
republished to the GPU each frame via LightEntries.

##### Returns

`number`

#### Set Signature

> **set** **softness**(`value`): `void`

Defined in: [src/components/lights/LightBase.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L35)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`LightBase.softness`

***

### iesProfiles

#### Set Signature

> **set** **iesProfiles**(`iesProfiles`): `void`

Defined in: [src/components/lights/LightBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L163)

##### Parameters

###### iesProfiles

[`IESProfiles`](IESProfiles.md)

##### Returns

`void`

#### Inherited from

`LightBase.iesProfiles`

***

### iesProfile

#### Get Signature

> **get** **iesProfile**(): [`IESProfiles`](IESProfiles.md)

Defined in: [src/components/lights/LightBase.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L173)

##### Returns

[`IESProfiles`](IESProfiles.md)

#### Inherited from

`LightBase.iesProfile`

***

### r

#### Get Signature

> **get** **r**(): `number`

Defined in: [src/components/lights/LightBase.ts:180](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L180)

Get the red component of the lighting color

##### Returns

`number`

#### Set Signature

> **set** **r**(`value`): `void`

Defined in: [src/components/lights/LightBase.ts:187](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L187)

Set the red component of the lighting color

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`LightBase.r`

***

### g

#### Get Signature

> **get** **g**(): `number`

Defined in: [src/components/lights/LightBase.ts:195](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L195)

Get the green component of the lighting color

##### Returns

`number`

#### Set Signature

> **set** **g**(`value`): `void`

Defined in: [src/components/lights/LightBase.ts:202](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L202)

Set the green component of the lighting color

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`LightBase.g`

***

### b

#### Get Signature

> **get** **b**(): `number`

Defined in: [src/components/lights/LightBase.ts:210](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L210)

Get the blue component of the lighting color

##### Returns

`number`

#### Set Signature

> **set** **b**(`value`): `void`

Defined in: [src/components/lights/LightBase.ts:216](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L216)

Set the blue component of the lighting color

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`LightBase.b`

***

### lightColor

#### Get Signature

> **get** **lightColor**(): [`Color`](Color.md)

Defined in: [src/components/lights/LightBase.ts:224](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L224)

Get light source color

##### Returns

[`Color`](Color.md)

Color

#### Set Signature

> **set** **lightColor**(`value`): `void`

Defined in: [src/components/lights/LightBase.ts:231](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L231)

Set light source color

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`lightColor`](Light.md#lightcolor)

***

### color

#### Get Signature

> **get** **color**(): [`Color`](Color.md)

Defined in: [src/components/lights/LightBase.ts:240](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L240)

Get light source color

##### Returns

[`Color`](Color.md)

Color

#### Set Signature

> **set** **color**(`value`): `void`

Defined in: [src/components/lights/LightBase.ts:248](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L248)

Set light source color

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

#### Inherited from

`LightBase.color`

***

### intensity

#### Get Signature

> **get** **intensity**(): `number`

Defined in: [src/components/lights/LightBase.ts:257](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L257)

Get Illumination intensity of light source

##### Returns

`number`

number

#### Set Signature

> **set** **intensity**(`value`): `void`

Defined in: [src/components/lights/LightBase.ts:265](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L265)

Set Illumination intensity of light source

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`intensity`](Light.md#intensity)

***

### castShadow

#### Get Signature

> **get** **castShadow**(): `boolean`

Defined in: [src/components/lights/LightBase.ts:281](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L281)

##### Returns

`boolean`

#### Set Signature

> **set** **castShadow**(`value`): `void`

Defined in: [src/components/lights/LightBase.ts:274](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L274)

Cast Light Shadow

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`castShadow`](Light.md#castshadow)

***

### shadowIndex

#### Get Signature

> **get** **shadowIndex**(): `number`

Defined in: [src/components/lights/LightBase.ts:288](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L288)

get shadow index at shadow map list

##### Returns

`number`

#### Inherited from

`LightBase.shadowIndex`

***

### castGI

#### Get Signature

> **get** **castGI**(): `boolean`

Defined in: [src/components/lights/LightBase.ts:297](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L297)

get gi is enable

##### Returns

`boolean`

boolean

#### Set Signature

> **set** **castGI**(`value`): `void`

Defined in: [src/components/lights/LightBase.ts:304](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L304)

set gi is enable

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`castGI`](Light.md#castgi)

***

### direction

#### Get Signature

> **get** **direction**(): [`Vector3`](Vector3.md)

Defined in: [src/components/lights/LightBase.ts:318](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L318)

light source direction

##### Returns

[`Vector3`](Vector3.md)

Vector3

#### Inherited from

`LightBase.direction`

## Methods

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

`LightBase.stop`

***

### onUpdate()?

> `optional` **onUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:166](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L166)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

`LightBase.onUpdate`

***

### onLateUpdate()?

> `optional` **onLateUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L167)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

`LightBase.onLateUpdate`

***

### onBeforeUpdate()?

> `optional` **onBeforeUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:168](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L168)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

`LightBase.onBeforeUpdate`

***

### onCompute()?

> `optional` **onCompute**(`view?`, `command?`): `any`

Defined in: [src/components/ComponentBase.ts:169](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L169)

#### Parameters

##### view?

[`View3D`](View3D.md)

##### command?

`GPUCommandEncoder`

#### Returns

`any`

#### Inherited from

`LightBase.onCompute`

***

### onGraphic()?

> `optional` **onGraphic**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L170)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

`LightBase.onGraphic`

***

### onParentChange()?

> `optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

Defined in: [src/components/ComponentBase.ts:171](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L171)

#### Parameters

##### lastParent?

[`Object3D`](Object3D.md)

##### currentParent?

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

`LightBase.onParentChange`

***

### onAddChild()?

> `optional` **onAddChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:172](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L172)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

`LightBase.onAddChild`

***

### onRemoveChild()?

> `optional` **onRemoveChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L173)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

`LightBase.onRemoveChild`

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/ComponentBase.ts:180](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L180)

clone component data to target object3D

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object3D

#### Returns

`void`

#### Inherited from

`LightBase.cloneTo`

***

### copyComponent()

> **copyComponent**(`from`): `this`

Defined in: [src/components/ComponentBase.ts:182](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L182)

#### Parameters

##### from

`this`

#### Returns

`this`

#### Inherited from

`LightBase.copyComponent`

***

### beforeDestroy()

> **beforeDestroy**(`force?`): `void`

Defined in: [src/components/ComponentBase.ts:249](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L249)

before release this component, object refrences are not be set null now.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`LightBase.beforeDestroy`

***

### start()

> **start**(): `void`

Defined in: [src/components/lights/DirectLight.ts:43](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L43)

Initialize the shadow camera frustum to a usable default cube.

#### Returns

`void`

#### Overrides

`LightBase.start`

***

### updateShadowCameraCSM()

> **updateShadowCameraCSM**(`renderCamera`): `void`

Defined in: [src/components/lights/DirectLight.ts:69](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L69)

Recompute the per-cascade shadow cameras from the render camera's
frustum, using a rotation-invariant sphere fit plus texel snapping
to keep cascade shadows stable as the camera moves.

#### Parameters

##### renderCamera

[`Camera3D`](Camera3D.md)

the main rendering camera

#### Returns

`void`

***

### init()

> **init**(): `void`

Defined in: [src/components/lights/DirectLight.ts:290](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L290)

Initialize as a directional light and assign a default name.

#### Returns

`void`

#### Overrides

`LightBase.init`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/lights/DirectLight.ts:360](https://github.com/orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L360)

Destroy the light and its (parentless) shadow/CSM cameras.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

`LightBase.destroy`

***

### onEnable()

> **onEnable**(): `void`

Defined in: [src/components/lights/LightBase.ts:152](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L152)

#### Returns

`void`

#### Inherited from

`LightBase.onEnable`

***

### onDisable()

> **onDisable**(): `void`

Defined in: [src/components/lights/LightBase.ts:157](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L157)

#### Returns

`void`

#### Inherited from

`LightBase.onDisable`
