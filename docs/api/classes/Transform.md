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
- [index](Transform.md#index)
- [index2](Transform.md#index2)
- [\_worldMatrix](Transform.md#_worldmatrix)
- [static](Transform.md#static)
- [depthOrder](Transform.md#depthorder)

### Accessors

- [eventDispatcher](Transform.md#eventdispatcher)
- [isStart](Transform.md#isstart)
- [transform](Transform.md#transform)
- [localChange](Transform.md#localchange)
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
- [localDetailScale](Transform.md#localdetailscale)
- [localDetailRot](Transform.md#localdetailrot)
- [localDetailPos](Transform.md#localdetailpos)

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
- [onAddChild](Transform.md#onaddchild)
- [onRemoveChild](Transform.md#onremovechild)
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

• **new Transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/Transform.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L208)

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

[src/components/Transform.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L99)

___

### index

• **index**: `number`

#### Defined in

[src/components/Transform.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L109)

___

### index2

• **index2**: `number`

#### Defined in

[src/components/Transform.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L110)

___

### \_worldMatrix

• `Readonly` **\_worldMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/components/Transform.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L121)

___

### static

• **static**: `boolean` = `false`

#### Defined in

[src/components/Transform.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L124)

___

### depthOrder

• **depthOrder**: `number` = `0`

#### Defined in

[src/components/Transform.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L125)

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

### localChange

• `get` **localChange**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/Transform.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L127)

• `set` **localChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L131)

___

### targetPos

• `get` **targetPos**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L136)

• `set` **targetPos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L139)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/components/Transform.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L143)

• `set` **parent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L147)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Overrides

ComponentBase.enable

#### Defined in

[src/components/Transform.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L189)

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

[src/components/Transform.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L179)

___

### scene3D

• `get` **scene3D**(): [`Scene3D`](Scene3D.md)

#### Returns

[`Scene3D`](Scene3D.md)

#### Defined in

[src/components/Transform.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L193)

• `set` **scene3D**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L197)

___

### view3D

• `get` **view3D**(): [`View3D`](View3D.md)

#### Returns

[`View3D`](View3D.md)

#### Defined in

[src/components/Transform.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L201)

___

### up

• `get` **up**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:246](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L246)

• `set` **up**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L251)

___

### down

• `get` **down**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:258](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L258)

• `set` **down**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:263](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L263)

___

### forward

• `get` **forward**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:277](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L277)

• `set` **forward**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:282](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L282)

___

### back

• `get` **back**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:296](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L296)

• `set` **back**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:301](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L301)

___

### left

• `get` **left**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:308](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L308)

• `set` **left**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L313)

___

### right

• `get` **right**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L320)

• `set` **right**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:325](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L325)

___

### localRotQuat

• `get` **localRotQuat**(): [`Quaternion`](Quaternion.md)

The transformation property of the object relative to the parent, stored in the from of a quaternion

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/components/Transform.ts:343](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L343)

• `set` **localRotQuat**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:350](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L350)

___

### x

• `get` **x**(): `number`

The position of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:493](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L493)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:477](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L477)

___

### y

• `get` **y**(): `number`

The position of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:513](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L513)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:497](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L497)

___

### z

• `get` **z**(): `number`

The position of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:533](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L533)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:517](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L517)

___

### scaleX

• `get` **scaleX**(): `number`

The scale of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:553](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L553)

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:537](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L537)

___

### scaleY

• `get` **scaleY**(): `number`

The scale of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:573](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L573)

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:557](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L557)

___

### scaleZ

• `get` **scaleZ**(): `number`

The scale of the object relative to its parent Z-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:594](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L594)

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:577](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L577)

___

### rotationX

• `get` **rotationX**(): `number`

The rotation of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:614](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L614)

• `set` **rotationX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:598](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L598)

___

### rotationY

• `get` **rotationY**(): `number`

The rotation of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:634](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L634)

• `set` **rotationY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:618](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L618)

___

### rotationZ

• `get` **rotationZ**(): `number`

The rotation of the object relative to its parent Z-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:654](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L654)

• `set` **rotationZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:638](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L638)

___

### worldPosition

• `get` **worldPosition**(): [`Vector3`](Vector3.md)

world position

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:661](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L661)

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

The position of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:689](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L689)

• `set` **localPosition**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:668](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L668)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

The rotaion vector of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:714](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L714)

• `set` **localRotation**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:693](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L693)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

The scale of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:735](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L735)

• `set` **localScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:718](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L718)

___

### localDetailScale

• `get` **localDetailScale**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:740](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L740)

• `set` **localDetailScale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:744](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L744)

___

### localDetailRot

• `get` **localDetailRot**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:749](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L749)

• `set` **localDetailRot**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:753](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L753)

___

### localDetailPos

• `get` **localDetailPos**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:758](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L758)

• `set` **localDetailPos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:761](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L761)

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

▸ **onEnable**(`view?`): `any`

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

▸ **onDisable**(`view?`): `any`

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

▸ **onUpdate**(`view?`): `any`

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

▸ **onLateUpdate**(`view?`): `any`

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

▸ **onBeforeUpdate**(`view?`): `any`

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

▸ **onCompute**(`view?`, `command?`): `any`

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

▸ **onGraphic**(`view?`): `any`

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

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

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

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onAddChild](ComponentBase.md#onaddchild)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onRemoveChild](ComponentBase.md#onremovechild)

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Inherited from

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

[src/components/ComponentBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L133)

___

### awake

▸ **awake**(): `void`

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L223)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/Transform.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L225)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/Transform.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L227)

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

[src/components/Transform.ts:400](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L400)

___

### updateChildTransform

▸ **updateChildTransform**(): `void`

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L412)

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

[src/components/Transform.ts:428](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L428)

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

[src/components/Transform.ts:438](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L438)

___

### decomposeFromMatrix

▸ **decomposeFromMatrix**(`matrix`, `orientationStyle?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | `undefined` |
| `orientationStyle` | `string` | `'eulerAngles'` |

#### Returns

`this`

#### Defined in

[src/components/Transform.ts:454](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L454)

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

[src/components/Transform.ts:471](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L471)

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

[src/components/Transform.ts:767](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L767)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/components/Transform.ts:774](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L774)
