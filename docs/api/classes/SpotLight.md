# Class: SpotLight

Spotlight source.
Light shines from a point in one direction, and as the light shines further away, the size of the light cone gradually increases.
Similar to a desk lamp, chandelier, or flashlight, this light source can produce shadows.

## Hierarchy

- `LightBase`

  ↳ **`SpotLight`**

### Constructors

- [constructor](SpotLight.md#constructor)

### Properties

- [object3D](SpotLight.md#object3d)
- [isDestroyed](SpotLight.md#isdestroyed)
- [name](SpotLight.md#name)
- [size](SpotLight.md#size)
- [lightData](SpotLight.md#lightdata)
- [dirFix](SpotLight.md#dirfix)
- [bindOnChange](SpotLight.md#bindonchange)
- [needUpdateShadow](SpotLight.md#needupdateshadow)
- [realTimeShadow](SpotLight.md#realtimeshadow)

### Accessors

- [eventDispatcher](SpotLight.md#eventdispatcher)
- [isStart](SpotLight.md#isstart)
- [transform](SpotLight.md#transform)
- [enable](SpotLight.md#enable)
- [iesProfiles](SpotLight.md#iesprofiles)
- [iesProfile](SpotLight.md#iesprofile)
- [r](SpotLight.md#r)
- [g](SpotLight.md#g)
- [b](SpotLight.md#b)
- [lightColor](SpotLight.md#lightcolor)
- [intensity](SpotLight.md#intensity)
- [castShadow](SpotLight.md#castshadow)
- [shadowIndex](SpotLight.md#shadowindex)
- [castGI](SpotLight.md#castgi)
- [direction](SpotLight.md#direction)
- [innerAngle](SpotLight.md#innerangle)
- [outerAngle](SpotLight.md#outerangle)
- [radius](SpotLight.md#radius)
- [range](SpotLight.md#range)
- [at](SpotLight.md#at)

### Methods

- [stop](SpotLight.md#stop)
- [onLateUpdate](SpotLight.md#onlateupdate)
- [onBeforeUpdate](SpotLight.md#onbeforeupdate)
- [onCompute](SpotLight.md#oncompute)
- [onParentChange](SpotLight.md#onparentchange)
- [cloneTo](SpotLight.md#cloneto)
- [copyComponent](SpotLight.md#copycomponent)
- [beforeDestroy](SpotLight.md#beforedestroy)
- [onEnable](SpotLight.md#onenable)
- [onDisable](SpotLight.md#ondisable)
- [destroy](SpotLight.md#destroy)
- [init](SpotLight.md#init)
- [start](SpotLight.md#start)
- [onUpdate](SpotLight.md#onupdate)
- [onGraphic](SpotLight.md#ongraphic)
- [debug](SpotLight.md#debug)
- [debugDraw](SpotLight.md#debugdraw)

## Constructors

### constructor

• **new SpotLight**()

#### Overrides

LightBase.constructor

#### Defined in

[src/components/lights/SpotLight.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L16)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

LightBase.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

LightBase.isDestroyed

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### name

• **name**: `string`

light name

#### Inherited from

LightBase.name

#### Defined in

[src/components/lights/LightBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L21)

___

### size

• **size**: `number` = `1`

light size

#### Inherited from

LightBase.size

#### Defined in

[src/components/lights/LightBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L25)

___

### lightData

• **lightData**: `LightData`

light source data

#### Inherited from

LightBase.lightData

#### Defined in

[src/components/lights/LightBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L30)

___

### dirFix

• **dirFix**: `number` = `1`

fix light direction

#### Inherited from

LightBase.dirFix

#### Defined in

[src/components/lights/LightBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L35)

___

### bindOnChange

• **bindOnChange**: () => `void`

#### Type declaration

▸ (): `void`

Callback function when binding changes

##### Returns

`void`

#### Inherited from

LightBase.bindOnChange

#### Defined in

[src/components/lights/LightBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L40)

___

### needUpdateShadow

• **needUpdateShadow**: `boolean` = `true`

#### Inherited from

LightBase.needUpdateShadow

#### Defined in

[src/components/lights/LightBase.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L42)

___

### realTimeShadow

• **realTimeShadow**: `boolean` = `true`

Whether to enable real-time rendering of shadows

#### Inherited from

LightBase.realTimeShadow

#### Defined in

[src/components/lights/LightBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L47)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

LightBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

#### Returns

`void`

#### Inherited from

LightBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LightBase.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

LightBase.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

LightBase.enable

#### Defined in

[src/components/ComponentBase.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

• `set` **enable**(`value`): `void`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

LightBase.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

___

### iesProfiles

• `set` **iesProfiles**(`iesProfiles`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iesProfiles` | [`IESProfiles`](IESProfiles.md) |

#### Returns

`void`

#### Inherited from

LightBase.iesProfiles

#### Defined in

[src/components/lights/LightBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L117)

___

### iesProfile

• `get` **iesProfile**(): [`IESProfiles`](IESProfiles.md)

#### Returns

[`IESProfiles`](IESProfiles.md)

#### Inherited from

LightBase.iesProfile

#### Defined in

[src/components/lights/LightBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L124)

___

### r

• `get` **r**(): `number`

Get the red component of the lighting color

#### Returns

`number`

#### Inherited from

LightBase.r

#### Defined in

[src/components/lights/LightBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L131)

• `set` **r**(`value`): `void`

Set the red component of the lighting color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LightBase.r

#### Defined in

[src/components/lights/LightBase.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L138)

___

### g

• `get` **g**(): `number`

Get the green component of the lighting color

#### Returns

`number`

#### Inherited from

LightBase.g

#### Defined in

[src/components/lights/LightBase.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L146)

• `set` **g**(`value`): `void`

Set the green component of the lighting color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LightBase.g

#### Defined in

[src/components/lights/LightBase.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L153)

___

### b

• `get` **b**(): `number`

Get the blue component of the lighting color

#### Returns

`number`

#### Inherited from

LightBase.b

#### Defined in

[src/components/lights/LightBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L161)

• `set` **b**(`value`): `void`

Set the blue component of the lighting color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LightBase.b

#### Defined in

[src/components/lights/LightBase.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L167)

___

### lightColor

• `get` **lightColor**(): [`Color`](Color.md)

Get light source color

#### Returns

[`Color`](Color.md)

Color

#### Inherited from

LightBase.lightColor

#### Defined in

[src/components/lights/LightBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L175)

• `set` **lightColor**(`value`): `void`

Set light source color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

LightBase.lightColor

#### Defined in

[src/components/lights/LightBase.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L182)

___

### intensity

• `get` **intensity**(): `number`

Get Illumination intensity of light source

#### Returns

`number`

number

#### Inherited from

LightBase.intensity

#### Defined in

[src/components/lights/LightBase.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L190)

• `set` **intensity**(`value`): `void`

Set Illumination intensity of light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LightBase.intensity

#### Defined in

[src/components/lights/LightBase.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L197)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LightBase.castShadow

#### Defined in

[src/components/lights/LightBase.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L213)

• `set` **castShadow**(`value`): `void`

Cast Light Shadow

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

LightBase.castShadow

#### Defined in

[src/components/lights/LightBase.ts:206](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L206)

___

### shadowIndex

• `get` **shadowIndex**(): `number`

get shadow index at shadow map list

#### Returns

`number`

#### Inherited from

LightBase.shadowIndex

#### Defined in

[src/components/lights/LightBase.ts:220](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L220)

___

### castGI

• `get` **castGI**(): `boolean`

get gi is enable

#### Returns

`boolean`

boolean

#### Inherited from

LightBase.castGI

#### Defined in

[src/components/lights/LightBase.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L229)

• `set` **castGI**(`value`): `void`

set gi is enable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

LightBase.castGI

#### Defined in

[src/components/lights/LightBase.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L236)

___

### direction

• `get` **direction**(): [`Vector3`](Vector3.md)

light source direction

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Inherited from

LightBase.direction

#### Defined in

[src/components/lights/LightBase.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L250)

___

### innerAngle

• `get` **innerAngle**(): `number`

Get the inner cone angle of the light source (as a percentage relative to the outer cone angle)

#### Returns

`number`

#### Defined in

[src/components/lights/SpotLight.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L33)

• `set` **innerAngle**(`value`): `void`

Set the inner cone angle of the light source (as a percentage relative to the outer cone angle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/lights/SpotLight.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L42)

___

### outerAngle

• `get` **outerAngle**(): `number`

Get the outer cone angle of the light source

#### Returns

`number`

number

#### Defined in

[src/components/lights/SpotLight.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L51)

• `set` **outerAngle**(`value`): `void`

Set the outer cone angle of the light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/lights/SpotLight.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L59)

___

### radius

• `get` **radius**(): `number`

Get the radius of the light source

#### Returns

`number`

number

#### Defined in

[src/components/lights/SpotLight.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L69)

• `set` **radius**(`value`): `void`

Set the radius of the light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/lights/SpotLight.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L78)

___

### range

• `get` **range**(): `number`

Get the range of the light source

#### Returns

`number`

#### Defined in

[src/components/lights/SpotLight.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L86)

• `set` **range**(`value`): `void`

Set the range of the light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/lights/SpotLight.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L95)

___

### at

• `get` **at**(): `number`

Get the illumination distance of the light source

#### Returns

`number`

#### Defined in

[src/components/lights/SpotLight.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L103)

• `set` **at**(`value`): `void`

Set the illumination distance of the light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/lights/SpotLight.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L110)

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

LightBase.stop

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onLateUpdate

▸ `Optional` **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

LightBase.onLateUpdate

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ `Optional` **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

LightBase.onBeforeUpdate

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onCompute

▸ `Optional` **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

LightBase.onCompute

#### Defined in

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

___

### onParentChange

▸ `Optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

LightBase.onParentChange

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

clone component data to target object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | target object3D |

#### Returns

`void`

#### Inherited from

LightBase.cloneTo

#### Defined in

[src/components/ComponentBase.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L129)

___

### copyComponent

▸ **copyComponent**(`from`): [`SpotLight`](SpotLight.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`SpotLight`](SpotLight.md) |

#### Returns

[`SpotLight`](SpotLight.md)

#### Inherited from

LightBase.copyComponent

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

before release this component, object refrences are not be set null now.

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

LightBase.beforeDestroy

#### Defined in

[src/components/ComponentBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L198)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

LightBase.onEnable

#### Defined in

[src/components/lights/LightBase.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L106)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

LightBase.onDisable

#### Defined in

[src/components/lights/LightBase.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L111)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

LightBase.destroy

#### Defined in

[src/components/lights/LightBase.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L254)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

LightBase.init

#### Defined in

[src/components/lights/SpotLight.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L20)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

LightBase.start

#### Defined in

[src/components/lights/SpotLight.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L115)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

LightBase.onUpdate

#### Defined in

[src/components/lights/SpotLight.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L120)

___

### onGraphic

▸ **onGraphic**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

LightBase.onGraphic

#### Defined in

[src/components/lights/SpotLight.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L124)

___

### debug

▸ **debug**(): `void`

enable GUI debug

#### Returns

`void`

#### Defined in

[src/components/lights/SpotLight.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L153)

___

### debugDraw

▸ **debugDraw**(`show`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `show` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/lights/SpotLight.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/SpotLight.ts#L156)
