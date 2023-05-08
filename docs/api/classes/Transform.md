# Class: Transform

The Transform component contains the position, rotation, and scaling of an object in 3D space.
Each object (Object 3D) has a Transform component

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`Transform`**


### Properties

- [object3D](Transform.md#object3d)
- [\_worldMatrix](Transform.md#_worldmatrix)

### Accessors

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
- [awake](Transform.md#awake)
- [start](Transform.md#start)
- [stop](Transform.md#stop)
- [updateWorldMatrix](Transform.md#updateworldmatrix)
- [lookTarget](Transform.md#looktarget)
- [lookAt](Transform.md#lookat)
- [destroy](Transform.md#destroy)
- [decomposeFromMatrix](Transform.md#decomposefrommatrix)
- [cloneTo](Transform.md#cloneto)

### Constructors

- [constructor](Transform.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### \_worldMatrix

• `Readonly` **\_worldMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/components/Transform.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L97)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### targetPos

• `get` **targetPos**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L102)

• `set` **targetPos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L105)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/components/Transform.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L109)

• `set` **parent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L113)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Overrides

ComponentBase.enable

#### Defined in

[src/components/Transform.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L142)

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

[src/components/Transform.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L132)

___

### scene3D

• `get` **scene3D**(): [`Scene3D`](Scene3D.md)

#### Returns

[`Scene3D`](Scene3D.md)

#### Defined in

[src/components/Transform.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L146)

• `set` **scene3D**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L150)

___

### view3D

• `get` **view3D**(): [`View3D`](View3D.md)

#### Returns

[`View3D`](View3D.md)

#### Defined in

[src/components/Transform.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L154)

___

### up

• `get` **up**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:192](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L192)

• `set` **up**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L197)

___

### down

• `get` **down**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:210](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L210)

• `set` **down**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L215)

___

### forward

• `get` **forward**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L228)

• `set` **forward**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L233)

___

### back

• `get` **back**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L248)

• `set` **back**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:253](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L253)

___

### left

• `get` **left**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L268)

• `set` **left**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:273](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L273)

___

### right

• `get` **right**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:286](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L286)

• `set` **right**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:291](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L291)

___

### localRotQuat

• `get` **localRotQuat**(): [`Quaternion`](Quaternion.md)

The transformation property of the object relative to the parent, stored in the form of a quaternion

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/components/Transform.ts:308](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L308)

• `set` **localRotQuat**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:312](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L312)

___

### x

• `get` **x**(): `number`

The position of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:476](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L476)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:458](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L458)

___

### y

• `get` **y**(): `number`

The position of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:498](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L498)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:480](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L480)

___

### z

• `get` **z**(): `number`

The position of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:520](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L520)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:502](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L502)

___

### scaleX

• `get` **scaleX**(): `number`

The scale of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:538](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L538)

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:524](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L524)

___

### scaleY

• `get` **scaleY**(): `number`

The scale of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:556](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L556)

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:542](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L542)

___

### scaleZ

• `get` **scaleZ**(): `number`

The scale of the object relative to its parent Z-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:575](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L575)

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:560](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L560)

___

### rotationX

• `get` **rotationX**(): `number`

The rotation of the object relative to its parent X-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:597](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L597)

• `set` **rotationX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:579](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L579)

___

### rotationY

• `get` **rotationY**(): `number`

The rotation of the object relative to its parent Y-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:619](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L619)

• `set` **rotationY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:601](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L601)

___

### rotationZ

• `get` **rotationZ**(): `number`

The rotation of the object relative to its parent Z-axis

#### Returns

`number`

#### Defined in

[src/components/Transform.ts:641](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L641)

• `set` **rotationZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:623](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L623)

___

### worldPosition

• `get` **worldPosition**(): [`Vector3`](Vector3.md)

world position

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:648](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L648)

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

The position of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:673](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L673)

• `set` **localPosition**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:655](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L655)

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

The rotaion vector of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:696](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L696)

• `set` **localRotation**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:677](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L677)

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

The scale of an object relative to its parent

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/Transform.ts:714](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L714)

• `set` **localScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:700](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L700)

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

[src/components/ComponentBase.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L106)

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

[src/components/ComponentBase.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L109)

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

[src/components/ComponentBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L110)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

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

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

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

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### awake

▸ **awake**(): `void`

#### Returns

`void`

#### Defined in

[src/components/Transform.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L170)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/Transform.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L172)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/Transform.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L174)

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

[src/components/Transform.ts:359](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L359)

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

[src/components/Transform.ts:375](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L375)

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

[src/components/Transform.ts:386](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L386)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/components/Transform.ts:417](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L417)

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

[src/components/Transform.ts:430](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L430)

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

[src/components/Transform.ts:452](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L452)

## Constructors

### constructor

• **new Transform**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/Transform.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/components/Transform.ts#L161)
