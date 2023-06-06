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
- [shadowCamera](DirectLight.md#shadowcamera)
- [name](DirectLight.md#name)
- [size](DirectLight.md#size)
- [lightData](DirectLight.md#lightdata)
- [dirFix](DirectLight.md#dirfix)
- [bindOnChange](DirectLight.md#bindonchange)
- [needUpdateShadow](DirectLight.md#needupdateshadow)
- [realTimeShadow](DirectLight.md#realtimeshadow)

### Accessors

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

[src/components/lights/DirectLight.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L14)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

LightBase.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### shadowCamera

• **shadowCamera**: [`Camera3D`](Camera3D.md)

#### Defined in

[src/components/lights/DirectLight.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L12)

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

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

LightBase.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

LightBase.enable

#### Defined in

[src/components/ComponentBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L59)

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

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### radius

• `get` **radius**(): `number`

Get the radius of a directional light source

#### Returns

`number`

#### Defined in

[src/components/lights/DirectLight.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L37)

• `set` **radius**(`value`): `void`

Set the radius of a directional light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/lights/DirectLight.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L44)

___

### indirect

• `get` **indirect**(): `number`

Get the radius of a directional light source

#### Returns

`number`

#### Defined in

[src/components/lights/DirectLight.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L53)

• `set` **indirect**(`value`): `void`

Set the radius of a directional light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/lights/DirectLight.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L60)

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

[src/components/lights/LightBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L115)

___

### iesProfile

• `get` **iesProfile**(): [`IESProfiles`](IESProfiles.md)

#### Returns

[`IESProfiles`](IESProfiles.md)

#### Inherited from

LightBase.iesProfile

#### Defined in

[src/components/lights/LightBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L122)

___

### r

• `get` **r**(): `number`

Get the red component of the lighting color

#### Returns

`number`

#### Inherited from

LightBase.r

#### Defined in

[src/components/lights/LightBase.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L129)

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

[src/components/lights/LightBase.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L136)

___

### g

• `get` **g**(): `number`

Get the green component of the lighting color

#### Returns

`number`

#### Inherited from

LightBase.g

#### Defined in

[src/components/lights/LightBase.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L144)

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

[src/components/lights/LightBase.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L151)

___

### b

• `get` **b**(): `number`

Get the blue component of the lighting color

#### Returns

`number`

#### Inherited from

LightBase.b

#### Defined in

[src/components/lights/LightBase.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L159)

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

[src/components/lights/LightBase.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L165)

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

[src/components/lights/LightBase.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L173)

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

[src/components/lights/LightBase.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L180)

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

[src/components/lights/LightBase.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L188)

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

[src/components/lights/LightBase.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L195)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LightBase.castShadow

#### Defined in

[src/components/lights/LightBase.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L211)

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

[src/components/lights/LightBase.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L204)

___

### shadowIndex

• `get` **shadowIndex**(): `number`

get shadow index at shadow map list

#### Returns

`number`

#### Inherited from

LightBase.shadowIndex

#### Defined in

[src/components/lights/LightBase.ts:218](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L218)

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

[src/components/lights/LightBase.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L227)

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

[src/components/lights/LightBase.ts:234](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L234)

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

[src/components/lights/LightBase.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L248)

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

LightBase.stop

#### Defined in

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

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

[src/components/ComponentBase.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L111)

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

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

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

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

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

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

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

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

LightBase.init

#### Defined in

[src/components/lights/DirectLight.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L18)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

LightBase.start

#### Defined in

[src/components/lights/DirectLight.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L28)

___

### debug

▸ **debug**(): `void`

enable light debug gui

#### Returns

`void`

#### Defined in

[src/components/lights/DirectLight.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/DirectLight.ts#L87)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

LightBase.onEnable

#### Defined in

[src/components/lights/LightBase.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L105)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

LightBase.onDisable

#### Defined in

[src/components/lights/LightBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L110)

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

[src/components/lights/LightBase.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/components/lights/LightBase.ts#L252)
