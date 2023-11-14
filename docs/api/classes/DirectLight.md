# Class: DirectLight

Directional light source.
The light of this light source is parallel, for example, sunlight. This light source can generate shadows.

## Hierarchy

- `LightBase`

  ↳ **`DirectLight`**

### Constructors

- [constructor](DirectLight.md#constructor)

### Properties

- [object3D](DirectLight.md#object3d)
- [isDestroyed](DirectLight.md#isdestroyed)
- [shadowCamera](DirectLight.md#shadowcamera)
- [name](DirectLight.md#name)
- [size](DirectLight.md#size)
- [lightData](DirectLight.md#lightdata)
- [dirFix](DirectLight.md#dirfix)
- [bindOnChange](DirectLight.md#bindonchange)
- [needUpdateShadow](DirectLight.md#needupdateshadow)
- [realTimeShadow](DirectLight.md#realtimeshadow)

### Accessors

- [eventDispatcher](DirectLight.md#eventdispatcher)
- [isStart](DirectLight.md#isstart)
- [transform](DirectLight.md#transform)
- [enable](DirectLight.md#enable)
- [radius](DirectLight.md#radius)
- [indirect](DirectLight.md#indirect)
- [iesProfiles](DirectLight.md#iesprofiles)
- [iesProfile](DirectLight.md#iesprofile)
- [r](DirectLight.md#r)
- [g](DirectLight.md#g)
- [b](DirectLight.md#b)
- [lightColor](DirectLight.md#lightcolor)
- [color](DirectLight.md#color)
- [intensity](DirectLight.md#intensity)
- [castShadow](DirectLight.md#castshadow)
- [shadowIndex](DirectLight.md#shadowindex)
- [castGI](DirectLight.md#castgi)
- [direction](DirectLight.md#direction)

### Methods

- [stop](DirectLight.md#stop)
- [onUpdate](DirectLight.md#onupdate)
- [onLateUpdate](DirectLight.md#onlateupdate)
- [onBeforeUpdate](DirectLight.md#onbeforeupdate)
- [onCompute](DirectLight.md#oncompute)
- [onGraphic](DirectLight.md#ongraphic)
- [onParentChange](DirectLight.md#onparentchange)
- [cloneTo](DirectLight.md#cloneto)
- [copyComponent](DirectLight.md#copycomponent)
- [beforeDestroy](DirectLight.md#beforedestroy)
- [init](DirectLight.md#init)
- [start](DirectLight.md#start)
- [debug](DirectLight.md#debug)
- [onEnable](DirectLight.md#onenable)
- [onDisable](DirectLight.md#ondisable)
- [destroy](DirectLight.md#destroy)

## Constructors

### constructor

• **new DirectLight**()

#### Overrides

LightBase.constructor

#### Defined in

[src/components/lights/DirectLight.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L16)

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

### shadowCamera

• **shadowCamera**: [`Camera3D`](Camera3D.md)

#### Defined in

[src/components/lights/DirectLight.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L14)

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

### radius

• `get` **radius**(): `number`

Get the radius of a directional light source

#### Returns

`number`

#### Defined in

[src/components/lights/DirectLight.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L40)

• `set` **radius**(`value`): `void`

Set the radius of a directional light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/lights/DirectLight.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L47)

___

### indirect

• `get` **indirect**(): `number`

Get the radius of a directional light source

#### Returns

`number`

#### Defined in

[src/components/lights/DirectLight.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L56)

• `set` **indirect**(`value`): `void`

Set the radius of a directional light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/lights/DirectLight.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L63)

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

### color

• `get` **color**(): [`Color`](Color.md)

Get light source color

#### Returns

[`Color`](Color.md)

Color

#### Inherited from

LightBase.color

#### Defined in

[src/components/lights/LightBase.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L191)

• `set` **color**(`value`): `void`

Set light source color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

LightBase.color

#### Defined in

[src/components/lights/LightBase.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L199)

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

[src/components/lights/LightBase.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L208)

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

[src/components/lights/LightBase.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L216)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LightBase.castShadow

#### Defined in

[src/components/lights/LightBase.ts:232](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L232)

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

[src/components/lights/LightBase.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L225)

___

### shadowIndex

• `get` **shadowIndex**(): `number`

get shadow index at shadow map list

#### Returns

`number`

#### Inherited from

LightBase.shadowIndex

#### Defined in

[src/components/lights/LightBase.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L239)

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

[src/components/lights/LightBase.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L248)

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

[src/components/lights/LightBase.ts:255](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L255)

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

[src/components/lights/LightBase.ts:269](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L269)

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

### onUpdate

▸ `Optional` **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

LightBase.onUpdate

#### Defined in

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

### onGraphic

▸ `Optional` **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

LightBase.onGraphic

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

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

▸ **copyComponent**(`from`): [`DirectLight`](DirectLight.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`DirectLight`](DirectLight.md) |

#### Returns

[`DirectLight`](DirectLight.md)

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

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

LightBase.init

#### Defined in

[src/components/lights/DirectLight.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L20)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

LightBase.start

#### Defined in

[src/components/lights/DirectLight.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L31)

___

### debug

▸ **debug**(): `void`

enable light debug gui

#### Returns

`void`

#### Defined in

[src/components/lights/DirectLight.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L90)

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

[src/components/lights/LightBase.ts:273](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L273)
