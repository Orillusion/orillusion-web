[**@orillusion/core**](../README.md)

***

# Class: PointLight

Defined in: [src/components/lights/PointLight.ts:14](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L14)

Point light source.
A single point light source that illuminates all directions.
A common example is to simulate the light emitted by a light bulb, where a point light source cannot create shadows.

## Constructors

### Constructor

> **new PointLight**(): `PointLight`

Defined in: [src/components/lights/PointLight.ts:56](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L56)

#### Returns

`PointLight`

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

***

### debugShadowRange

> **debugShadowRange**: `boolean` = `false`

Defined in: [src/components/lights/PointLight.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L24)

***

### shadowCameraNear

> **shadowCameraNear**: `number` = `0.01`

Defined in: [src/components/lights/PointLight.ts:31](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L31)

***

### shadowCameraFar

> **shadowCameraFar**: `number` = `0`

Defined in: [src/components/lights/PointLight.ts:32](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L32)

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

***

### shadowBias

#### Get Signature

> **get** **shadowBias**(): `number` \| `"auto"`

Defined in: [src/components/lights/PointLight.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L34)

##### Returns

`number` \| `"auto"`

#### Set Signature

> **set** **shadowBias**(`value`): `void`

Defined in: [src/components/lights/PointLight.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L38)

##### Parameters

###### value

`number` \| `"auto"`

##### Returns

`void`

***

### normalBias

#### Get Signature

> **get** **normalBias**(): `number` \| `"auto"`

Defined in: [src/components/lights/PointLight.ts:45](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L45)

##### Returns

`number` \| `"auto"`

#### Set Signature

> **set** **normalBias**(`value`): `void`

Defined in: [src/components/lights/PointLight.ts:49](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L49)

##### Parameters

###### value

`number` \| `"auto"`

##### Returns

`void`

***

### range

#### Get Signature

> **get** **range**(): `number`

Defined in: [src/components/lights/PointLight.ts:74](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L74)

Get the range of the light source

##### Returns

`number`

#### Set Signature

> **set** **range**(`value`): `void`

Defined in: [src/components/lights/PointLight.ts:82](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L82)

Set the range of the light source

##### Parameters

###### value

`number`

##### Returns

`void`

***

### at

#### Get Signature

> **get** **at**(): `number`

Defined in: [src/components/lights/PointLight.ts:93](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L93)

Get the illumination distance of the light source

##### Memberof

PointLight

##### Returns

`number`

#### Set Signature

> **set** **at**(`value`): `void`

Defined in: [src/components/lights/PointLight.ts:104](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L104)

Set the illumination distance of the light source

##### Memberof

PointLight

##### Parameters

###### value

`number`

##### Returns

`void`

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [src/components/lights/PointLight.ts:112](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L112)

Get the radius to control the light

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [src/components/lights/PointLight.ts:119](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L119)

Set the radius of the control light

##### Parameters

###### value

`number`

##### Returns

`void`

***

### quadratic

#### Get Signature

> **get** **quadratic**(): `number`

Defined in: [src/components/lights/PointLight.ts:127](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L127)

Get the radius to control the light

##### Returns

`number`

#### Set Signature

> **set** **quadratic**(`value`): `void`

Defined in: [src/components/lights/PointLight.ts:134](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L134)

Set the radius of the control light

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

`LightBase.stop`

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

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/lights/LightBase.ts:322](https://github.com/orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L322)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`LightBase.destroy`

***

### init()

> **init**(): `void`

Defined in: [src/components/lights/PointLight.ts:60](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L60)

#### Returns

`void`

#### Overrides

`LightBase.init`

***

### start()

> **start**(): `void`

Defined in: [src/components/lights/PointLight.ts:141](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L141)

#### Returns

`void`

#### Overrides

`LightBase.start`

***

### onUpdate()

> **onUpdate**(): `void`

Defined in: [src/components/lights/PointLight.ts:146](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L146)

#### Returns

`void`

#### Overrides

`LightBase.onUpdate`

***

### onGraphic()

> **onGraphic**(`view?`): `void`

Defined in: [src/components/lights/PointLight.ts:150](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L150)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

`LightBase.onGraphic`

***

### debug()

> **debug**(): `void`

Defined in: [src/components/lights/PointLight.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L167)

enable GUI debug

#### Returns

`void`

***

### debugDraw()

> **debugDraw**(`show`): `void`

Defined in: [src/components/lights/PointLight.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/lights/PointLight.ts#L170)

#### Parameters

##### show

`boolean`

#### Returns

`void`
