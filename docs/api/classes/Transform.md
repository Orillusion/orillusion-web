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

[src/components/Transform.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L205)

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

[src/components/Transform.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L96)

___

### index

• **index**: `number`

#### Defined in

[src/components/Transform.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L106)

___

### index2

• **index2**: `number`

#### Defined in

[src/components/Transform.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L107)

___

### \_worldMatrix

• `Readonly` **\_worldMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/components/Transform.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L118)

___

### static

• **static**: `boolean` = `false`

#### Defined in

[src/components/Transform.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L121)

___

### depthOrder

• **depthOrder**: `number` = `0`

#### Defined in

[src/components/Transform.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L122)

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

[src/components/Transform.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L124)

• `set` **localChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L128)

___

### targetPos

• `get` **targetPos**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L133)

• `set` **targetPos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L136)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/components/Transform.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L140)

• `set` **parent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L144)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Overrides

ComponentBase.enable

#### Defined in

[src/components/Transform.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L186)

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

[src/components/Transform.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L176)

___

### scene3D

• `get` **scene3D**(): [`Scene3D`](Scene3D.md)

#### Returns

[`Scene3D`](Scene3D.md)

#### Defined in

[src/components/Transform.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L190)

• `set` **scene3D**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L194)

___

### view3D

• `get` **view3D**(): [`View3D`](View3D.md)

#### Returns

[`View3D`](View3D.md)

#### Defined in

[src/components/Transform.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L198)

___

### up

• `get` **up**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:243](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L243)

• `set` **up**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L248)

___

### down

• `get` **down**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:255](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L255)

• `set` **down**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L260)

___

### forward

• `get` **forward**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L274)

• `set` **forward**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:279](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L279)

___

### back

• `get` **back**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:293](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L293)

• `set` **back**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:298](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L298)

___

### left

• `get` **left**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:305](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L305)

• `set` **left**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:310](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L310)

___

### right

• `get` **right**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L317)

• `set` **right**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:322](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L322)

___

### localRotQuat

• `get` **localRotQuat**(): [`Quaternion`](Quaternion.md)

The transformation property of the object relative to the parent, stored in the from of a quaternion

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/components/Transform.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L340)

• `set` **localRotQuat**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:344](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L344)

___

### x

• `get` **x**(): `number`

The position of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:487](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L487)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:471](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L471)

___

### y

• `get` **y**(): `number`

The position of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:507](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L507)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:491](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L491)

___

### z

• `get` **z**(): `number`

The position of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:527](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L527)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:511](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L511)

___

### scaleX

• `get` **scaleX**(): `number`

The scale of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:547](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L547)

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:531](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L531)

___

### scaleY

• `get` **scaleY**(): `number`

The scale of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:567](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L567)

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:551](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L551)

___

### scaleZ

• `get` **scaleZ**(): `number`

The scale of the object relative to its parent Z-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:588](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L588)

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:571](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L571)

___

### rotationX

• `get` **rotationX**(): `number`

The rotation of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:608](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L608)

• `set` **rotationX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:592](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L592)

___

### rotationY

• `get` **rotationY**(): `number`

The rotation of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:628](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L628)

• `set` **rotationY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:612](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L612)

___

### rotationZ

• `get` **rotationZ**(): `number`

The rotation of the object relative to its parent Z-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:648](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L648)

• `set` **rotationZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:632](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L632)

___

### worldPosition

• `get` **worldPosition**(): [`Vector3`](Vector3.md)

world position

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:655](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L655)

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

The position of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:678](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L678)

• `set` **localPosition**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:662](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L662)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

The rotaion vector of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:699](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L699)

• `set` **localRotation**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:682](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L682)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

The scale of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:720](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L720)

• `set` **localScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:703](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L703)

___

### localDetailScale

• `get` **localDetailScale**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:725](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L725)

• `set` **localDetailScale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:729](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L729)

___

### localDetailRot

• `get` **localDetailRot**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:734](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L734)

• `set` **localDetailRot**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:738](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L738)

___

### localDetailPos

• `get` **localDetailPos**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:743](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L743)

• `set` **localDetailPos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:746](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L746)

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

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

___

### awake

▸ **awake**(): `void`

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:220](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L220)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/Transform.ts:222](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L222)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/Transform.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L224)

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

[src/components/Transform.ts:394](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L394)

___

### updateChildTransform

▸ **updateChildTransform**(): `void`

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:406](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L406)

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

[src/components/Transform.ts:422](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L422)

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

[src/components/Transform.ts:432](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L432)

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

[src/components/Transform.ts:448](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L448)

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

[src/components/Transform.ts:465](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L465)

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

[src/components/Transform.ts:752](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L752)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/components/Transform.ts:759](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L759)
