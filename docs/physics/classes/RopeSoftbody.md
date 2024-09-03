# Class: RopeSoftbody

## Hierarchy

- `SoftbodyBase`

  ↳ **`RopeSoftbody`**

### Constructors

- [constructor](RopeSoftbody.md#constructor)

### Properties

- [fixeds](RopeSoftbody.md#fixeds)
- [fixNodeIndices](RopeSoftbody.md#fixnodeindices)
- [elasticity](RopeSoftbody.md#elasticity)
- [anchorRigidbodyHead](RopeSoftbody.md#anchorrigidbodyhead)
- [anchorRigidbodyTail](RopeSoftbody.md#anchorrigidbodytail)
- [anchorOffsetHead](RopeSoftbody.md#anchoroffsethead)
- [anchorOffsetTail](RopeSoftbody.md#anchoroffsettail)
- [mass](RopeSoftbody.md#mass)
- [margin](RopeSoftbody.md#margin)
- [group](RopeSoftbody.md#group)
- [mask](RopeSoftbody.md#mask)
- [influence](RopeSoftbody.md#influence)
- [disableCollision](RopeSoftbody.md#disablecollision)
- [object3D](RopeSoftbody.md#object3d)
- [isDestroyed](RopeSoftbody.md#isdestroyed)

### Accessors

- [activationState](RopeSoftbody.md#activationstate)
- [btBodyInited](RopeSoftbody.md#btbodyinited)
- [btSoftBody](RopeSoftbody.md#btsoftbody)
- [eventDispatcher](RopeSoftbody.md#eventdispatcher)
- [isStart](RopeSoftbody.md#isstart)
- [transform](RopeSoftbody.md#transform)
- [enable](RopeSoftbody.md#enable)

### Methods

- [buildRopeGeometry](RopeSoftbody.md#buildropegeometry)
- [start](RopeSoftbody.md#start)
- [setElasticity](RopeSoftbody.md#setelasticity)
- [clearAnchors](RopeSoftbody.md#clearanchors)
- [onUpdate](RopeSoftbody.md#onupdate)
- [destroy](RopeSoftbody.md#destroy)
- [init](RopeSoftbody.md#init)
- [wait](RopeSoftbody.md#wait)
- [appendAnchor](RopeSoftbody.md#appendanchor)
- [applyFixedNodes](RopeSoftbody.md#applyfixednodes)
- [clearFixedNodes](RopeSoftbody.md#clearfixednodes)
- [stop](RopeSoftbody.md#stop)
- [onEnable](RopeSoftbody.md#onenable)
- [onDisable](RopeSoftbody.md#ondisable)
- [onLateUpdate](RopeSoftbody.md#onlateupdate)
- [onBeforeUpdate](RopeSoftbody.md#onbeforeupdate)
- [onCompute](RopeSoftbody.md#oncompute)
- [onGraphic](RopeSoftbody.md#ongraphic)
- [onParentChange](RopeSoftbody.md#onparentchange)
- [onAddChild](RopeSoftbody.md#onaddchild)
- [onRemoveChild](RopeSoftbody.md#onremovechild)
- [cloneTo](RopeSoftbody.md#cloneto)
- [copyComponent](RopeSoftbody.md#copycomponent)
- [beforeDestroy](RopeSoftbody.md#beforedestroy)

## Constructors

### constructor

• **new RopeSoftbody**(): [`RopeSoftbody`](RopeSoftbody.md)

#### Returns

[`RopeSoftbody`](RopeSoftbody.md)

#### Inherited from

SoftbodyBase.constructor

## Properties

### fixeds

• **fixeds**: `number` = `0`

绳索两端的固定选项，默认值为 `0`

`0`：两端不固定，`1`：起点固定，`2`：终点固定，`3`：两端固定

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L13)

___

### fixNodeIndices

• **fixNodeIndices**: `number`[] = `[]`

固定节点索引，与 `fixeds` 属性作用相同，但可以更自由的控制任意节点。

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L18)

___

### elasticity

• **elasticity**: `number` = `0.5`

绳索弹性，值越大弹性越低，通常设置为 0 到 1 之间，默认值为 `0.5`。

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:23](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L23)

___

### anchorRigidbodyHead

• **anchorRigidbodyHead**: [`Rigidbody`](Rigidbody.md)

绳索起点处锚定的刚体，设置此项后绳索的起点将与该刚体的位置相同。

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:28](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L28)

___

### anchorRigidbodyTail

• **anchorRigidbodyTail**: [`Rigidbody`](Rigidbody.md)

绳索终点处锚定的刚体，设置此项后绳索的终点将与该刚体的位置相同。

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:33](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L33)

___

### anchorOffsetHead

• **anchorOffsetHead**: `Vector3`

锚点的起点偏移量，表示起点与锚定的刚体之间的相对位置。

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:38](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L38)

___

### anchorOffsetTail

• **anchorOffsetTail**: `Vector3`

锚点的终点偏移量，表示终点与锚定的刚体之间的相对位置。

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:43](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L43)

___

### mass

• **mass**: `number` = `1`

软体的总质量，默认值为 `1`

#### Inherited from

SoftbodyBase.mass

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L17)

___

### margin

• **margin**: `number` = `0.15`

碰撞边距，默认值为 `0.15`

#### Inherited from

SoftbodyBase.margin

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L22)

___

### group

• **group**: `number` = `1`

碰撞组，默认值为 `1`

#### Inherited from

SoftbodyBase.group

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:27](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L27)

___

### mask

• **mask**: `number` = `-1`

碰撞掩码，默认值为 `-1`

#### Inherited from

SoftbodyBase.mask

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L32)

___

### influence

• **influence**: `number` = `1`

锚点的影响力。影响力值越大，软体节点越紧密地跟随刚体的运动。通常，这个值在0到1之间。默认值为 `1`。

#### Inherited from

SoftbodyBase.influence

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:37](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L37)

___

### disableCollision

• **disableCollision**: `boolean` = `false`

是否禁用与锚定刚体之间的碰撞，默认值为 `false`。

#### Inherited from

SoftbodyBase.disableCollision

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:42](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L42)

___

### object3D

• **object3D**: `Object3D` = `null`

owner object3D

#### Inherited from

SoftbodyBase.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

SoftbodyBase.isDestroyed

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

## Accessors

### activationState

• `set` **activationState**(`value`): `void`

设置软体激活状态。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ActivationState`](../enums/ActivationState.md) |

#### Returns

`void`

#### Inherited from

SoftbodyBase.activationState

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L47)

___

### btBodyInited

• `get` **btBodyInited**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SoftbodyBase.btBodyInited

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:51](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L51)

___

### btSoftBody

• `get` **btSoftBody**(): [`btSoftBody`](Ammo.btSoftBody.md)

#### Returns

[`btSoftBody`](Ammo.btSoftBody.md)

#### Inherited from

SoftbodyBase.btSoftBody

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:55](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L55)

___

### eventDispatcher

• `get` **eventDispatcher**(): `CEventDispatcher`

#### Returns

`CEventDispatcher`

#### Inherited from

SoftbodyBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `CEventDispatcher` |

#### Returns

`void`

#### Inherited from

SoftbodyBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SoftbodyBase.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

#### Inherited from

SoftbodyBase.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

SoftbodyBase.enable

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

SoftbodyBase.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

## Methods

### buildRopeGeometry

▸ **buildRopeGeometry**(`segmentCount`, `startPos`, `endPos`): `GeometryBase`

构建绳索（线条）几何体，注意添加材质时需要将拓扑结构 `topology` 设置为 `'line-list'`。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `segmentCount` | `number` | 分段数 |
| `startPos` | `Vector3` | 起点 |
| `endPos` | `Vector3` | 终点 |

#### Returns

`GeometryBase`

GeometryBase

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:163](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L163)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

SoftbodyBase.start

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L48)

___

### setElasticity

▸ **setElasticity**(`value`): `void`

set rope elasticity to 0~1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:110](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L110)

___

### clearAnchors

▸ **clearAnchors**(`isPopBack?`): `void`

清除锚点，软体将会从附加的刚体上脱落

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isPopBack?` | `boolean` | 是否只删除一个锚点，当存在首尾两个锚点时，删除终点的锚点。 |

#### Returns

`void`

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L123)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

SoftbodyBase.onUpdate

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:131](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L131)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Overrides

SoftbodyBase.destroy

#### Defined in

[packages/physics/softbody/RopeSoftbody.ts:150](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L150)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

SoftbodyBase.init

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L59)

___

### wait

▸ **wait**(): `Promise`\<[`btSoftBody`](Ammo.btSoftBody.md)\>

Asynchronously retrieves the fully initialized soft body instance.

#### Returns

`Promise`\<[`btSoftBody`](Ammo.btSoftBody.md)\>

#### Inherited from

SoftbodyBase.wait

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:95](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L95)

___

### appendAnchor

▸ **appendAnchor**(`nodeIndex`, `targetRigidbody`, `disCollision?`, `influence?`): `void`

Wraps the native soft body's `appendAnchor` method to anchor a node to a rigid body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeIndex` | `number` | Index of the node to anchor. |
| `targetRigidbody` | [`Rigidbody`](Rigidbody.md) | The rigid body to anchor to. |
| `disCollision?` | `boolean` | Optional. Disable collisions if true. |
| `influence?` | `number` | Optional. Anchor's influence. |

#### Returns

`void`

#### Inherited from

SoftbodyBase.appendAnchor

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L107)

___

### applyFixedNodes

▸ **applyFixedNodes**(`fixedNodeIndices`): `void`

固定软体节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fixedNodeIndices` | `number`[] | 需要固定的节点索引。 |

#### Returns

`void`

#### Inherited from

SoftbodyBase.applyFixedNodes

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L121)

___

### clearFixedNodes

▸ **clearFixedNodes**(`index?`): `void`

清除固定节点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index?` | `number` | 需要清除的节点索引，如果未提供，则清除所有节点。 |

#### Returns

`void`

#### Inherited from

SoftbodyBase.clearFixedNodes

#### Defined in

[packages/physics/softbody/SoftbodyBase.ts:140](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L140)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

SoftbodyBase.stop

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

SoftbodyBase.onEnable

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

SoftbodyBase.onDisable

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

SoftbodyBase.onLateUpdate

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

SoftbodyBase.onBeforeUpdate

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

SoftbodyBase.onCompute

#### Defined in

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

SoftbodyBase.onGraphic

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | `Object3D` |
| `currentParent?` | `Object3D` |

#### Returns

`any`

#### Inherited from

SoftbodyBase.onParentChange

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

SoftbodyBase.onAddChild

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

SoftbodyBase.onRemoveChild

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

clone component data to target object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Object3D` | target object3D |

#### Returns

`void`

#### Inherited from

SoftbodyBase.cloneTo

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

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

SoftbodyBase.copyComponent

#### Defined in

[src/components/ComponentBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L133)

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

SoftbodyBase.beforeDestroy

#### Defined in

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)
