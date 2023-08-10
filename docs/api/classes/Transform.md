# Class: Transform

The Transform component contains the position, rotation, and scaling of an object in 3D space.
Each object (Object 3D) has a Transform component

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`Transform`**

### Constructors

- [constructor](Transform.md#constructor)

### Properties

- [object3D](Transform.md#object3d)
- [isDestroyed](Transform.md#isdestroyed)
- [\_localRot](Transform.md#_localrot)
- [\_localChange](Transform.md#_localchange)
- [\_worldMatrix](Transform.md#_worldmatrix)
- [static](Transform.md#static)

### Accessors

- [eventDispatcher](Transform.md#eventdispatcher)
- [isStart](Transform.md#isstart)
- [transform](Transform.md#transform)
- [targetPos](Transform.md#targetpos)
- [parent](Transform.md#parent)
- [enable](Transform.md#enable)
- [scene3D](Transform.md#scene3d)
- [view3D](Transform.md#view3d)
- [up](Transform.md#up)
- [down](Transform.md#down)
- [forward](Transform.md#forward)
- [back](Transform.md#back)
- [left](Transform.md#left)
- [right](Transform.md#right)
- [localRotQuat](Transform.md#localrotquat)
- [x](Transform.md#x)
- [y](Transform.md#y)
- [z](Transform.md#z)
- [scaleX](Transform.md#scalex)
- [scaleY](Transform.md#scaley)
- [scaleZ](Transform.md#scalez)
- [rotationX](Transform.md#rotationx)
- [rotationY](Transform.md#rotationy)
- [rotationZ](Transform.md#rotationz)
- [worldPosition](Transform.md#worldposition)
- [localPosition](Transform.md#localposition)
- [localRotation](Transform.md#localrotation)
- [localScale](Transform.md#localscale)

### Methods

- [init](Transform.md#init)
- [onEnable](Transform.md#onenable)
- [onDisable](Transform.md#ondisable)
- [onUpdate](Transform.md#onupdate)
- [onLateUpdate](Transform.md#onlateupdate)
- [onBeforeUpdate](Transform.md#onbeforeupdate)
- [onCompute](Transform.md#oncompute)
- [onGraphic](Transform.md#ongraphic)
- [onParentChange](Transform.md#onparentchange)
- [copyComponent](Transform.md#copycomponent)
- [awake](Transform.md#awake)
- [start](Transform.md#start)
- [stop](Transform.md#stop)
- [updateWorldMatrix](Transform.md#updateworldmatrix)
- [updateChildTransform](Transform.md#updatechildtransform)
- [lookTarget](Transform.md#looktarget)
- [lookAt](Transform.md#lookat)
- [decomposeFromMatrix](Transform.md#decomposefrommatrix)
- [cloneTo](Transform.md#cloneto)
- [beforeDestroy](Transform.md#beforedestroy)
- [destroy](Transform.md#destroy)

## Constructors

### constructor

• **new Transform**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/Transform.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L184)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### \_localRot

• **\_localRot**: [`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L95)

___

### \_localChange

• **\_localChange**: `boolean` = `true`

#### Defined in

[src/components/Transform.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L99)

___

### \_worldMatrix

• `Readonly` **\_worldMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/components/Transform.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L107)

___

### static

• **static**: `boolean` = `false`

#### Defined in

[src/components/Transform.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L110)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

ComponentBase.eventDispatcher

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

ComponentBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### targetPos

• `get` **targetPos**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L112)

• `set` **targetPos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L115)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/components/Transform.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L119)

• `set` **parent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L123)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Overrides

ComponentBase.enable

#### Defined in

[src/components/Transform.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L165)

• `set` **enable**(`value`): `void`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

ComponentBase.enable

#### Defined in

[src/components/Transform.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L155)

___

### scene3D

• `get` **scene3D**(): [`Scene3D`](Scene3D.md)

#### Returns

[`Scene3D`](Scene3D.md)

#### Defined in

[src/components/Transform.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L169)

• `set` **scene3D**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L173)

___

### view3D

• `get` **view3D**(): [`View3D`](View3D.md)

#### Returns

[`View3D`](View3D.md)

#### Defined in

[src/components/Transform.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L177)

___

### up

• `get` **up**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L213)

• `set` **up**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:218](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L218)

___

### down

• `get` **down**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L225)

• `set` **down**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:230](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L230)

___

### forward

• `get` **forward**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L236)

• `set` **forward**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:241](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L241)

___

### back

• `get` **back**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:247](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L247)

• `set` **back**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L252)

___

### left

• `get` **left**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:258](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L258)

• `set` **left**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:263](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L263)

___

### right

• `get` **right**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:269](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L269)

• `set` **right**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L274)

___

### localRotQuat

• `get` **localRotQuat**(): [`Quaternion`](Quaternion.md)

The transformation property of the object relative to the parent, stored in the from of a quaternion

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/components/Transform.ts:284](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L284)

• `set` **localRotQuat**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:288](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L288)

___

### x

• `get` **x**(): `number`

The position of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:423](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L423)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:408](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L408)

___

### y

• `get` **y**(): `number`

The position of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:442](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L442)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:427](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L427)

___

### z

• `get` **z**(): `number`

The position of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:461](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L461)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:446](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L446)

___

### scaleX

• `get` **scaleX**(): `number`

The scale of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:480](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L480)

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:465](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L465)

___

### scaleY

• `get` **scaleY**(): `number`

The scale of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:499](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L499)

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:484](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L484)

___

### scaleZ

• `get` **scaleZ**(): `number`

The scale of the object relative to its parent Z-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:519](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L519)

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:503](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L503)

___

### rotationX

• `get` **rotationX**(): `number`

The rotation of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:538](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L538)

• `set` **rotationX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:523](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L523)

___

### rotationY

• `get` **rotationY**(): `number`

The rotation of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:557](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L557)

• `set` **rotationY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:542](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L542)

___

### rotationZ

• `get` **rotationZ**(): `number`

The rotation of the object relative to its parent Z-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:576](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L576)

• `set` **rotationZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:561](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L561)

___

### worldPosition

• `get` **worldPosition**(): [`Vector3`](Vector3.md)

world position

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:583](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L583)

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

The position of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:603](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L603)

• `set` **localPosition**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:588](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L588)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

The rotaion vector of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:623](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L623)

• `set` **localRotation**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:607](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L607)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

The scale of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:642](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L642)

• `set` **localScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:627](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L627)

## Methods

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### onEnable

▸ `Optional` **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### onDisable

▸ `Optional` **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

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

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

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

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

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

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### copyComponent

▸ **copyComponent**(`from`): [`Transform`](Transform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`Transform`](Transform.md) |

#### Returns

[`Transform`](Transform.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

___

### awake

▸ **awake**(): `void`

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L193)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/Transform.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L195)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/Transform.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L197)

___

### updateWorldMatrix

▸ **updateWorldMatrix**(`force?`): `void`

Update the matrix4 in world space

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:326](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L326)

___

### updateChildTransform

▸ **updateChildTransform**(): `void`

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:341](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L341)

___

### lookTarget

▸ **lookTarget**(`target`, `up?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | [`Vector3`](Vector3.md) | `undefined` |
| `up` | [`Vector3`](Vector3.md) | `Vector3.UP` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:357](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L357)

___

### lookAt

▸ **lookAt**(`pos`, `target`, `up?`): `void`

Current object's gaze position (global) (modified by its own global transformation)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` | Own position (global) |
| `target` | [`Vector3`](Vector3.md) | `undefined` | Location of the target (global) |
| `up` | [`Vector3`](Vector3.md) | `Vector3.UP` | up direction |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L367)

___

### decomposeFromMatrix

▸ **decomposeFromMatrix**(`matrix`, `orientationStyle?`): [`Transform`](Transform.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | `undefined` |
| `orientationStyle` | `string` | `'eulerAngles'` |

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/components/Transform.ts:380](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L380)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

Create a new component, copy the properties of the current component, and add it to the target object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | source Object3D |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/Transform.ts:402](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L402)

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

#### Overrides

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

[src/components/Transform.ts:646](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L646)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/components/Transform.ts:653](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L653)
