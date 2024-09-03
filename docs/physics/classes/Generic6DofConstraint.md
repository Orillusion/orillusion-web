# Class: Generic6DofConstraint

通用六自由度约束

## Hierarchy

- `ConstraintBase`\<[`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)\>

  ↳ **`Generic6DofConstraint`**

### Constructors

- [constructor](Generic6DofConstraint.md#constructor)

### Properties

- [pivotSelf](Generic6DofConstraint.md#pivotself)
- [pivotTarget](Generic6DofConstraint.md#pivottarget)
- [rotationSelf](Generic6DofConstraint.md#rotationself)
- [rotationTarget](Generic6DofConstraint.md#rotationtarget)
- [disableCollisionsBetweenLinkedBodies](Generic6DofConstraint.md#disablecollisionsbetweenlinkedbodies)
- [useLinearFrameReferenceFrame](Generic6DofConstraint.md#uselinearframereferenceframe)
- [object3D](Generic6DofConstraint.md#object3d)
- [isDestroyed](Generic6DofConstraint.md#isdestroyed)

### Accessors

- [breakingThreshold](Generic6DofConstraint.md#breakingthreshold)
- [constraint](Generic6DofConstraint.md#constraint)
- [targetRigidbody](Generic6DofConstraint.md#targetrigidbody)
- [linearLowerLimit](Generic6DofConstraint.md#linearlowerlimit)
- [linearUpperLimit](Generic6DofConstraint.md#linearupperlimit)
- [angularLowerLimit](Generic6DofConstraint.md#angularlowerlimit)
- [angularUpperLimit](Generic6DofConstraint.md#angularupperlimit)
- [eventDispatcher](Generic6DofConstraint.md#eventdispatcher)
- [isStart](Generic6DofConstraint.md#isstart)
- [transform](Generic6DofConstraint.md#transform)
- [enable](Generic6DofConstraint.md#enable)

### Methods

- [start](Generic6DofConstraint.md#start)
- [wait](Generic6DofConstraint.md#wait)
- [resetConstraint](Generic6DofConstraint.md#resetconstraint)
- [destroy](Generic6DofConstraint.md#destroy)
- [init](Generic6DofConstraint.md#init)
- [stop](Generic6DofConstraint.md#stop)
- [onEnable](Generic6DofConstraint.md#onenable)
- [onDisable](Generic6DofConstraint.md#ondisable)
- [onUpdate](Generic6DofConstraint.md#onupdate)
- [onLateUpdate](Generic6DofConstraint.md#onlateupdate)
- [onBeforeUpdate](Generic6DofConstraint.md#onbeforeupdate)
- [onCompute](Generic6DofConstraint.md#oncompute)
- [onGraphic](Generic6DofConstraint.md#ongraphic)
- [onParentChange](Generic6DofConstraint.md#onparentchange)
- [onAddChild](Generic6DofConstraint.md#onaddchild)
- [onRemoveChild](Generic6DofConstraint.md#onremovechild)
- [cloneTo](Generic6DofConstraint.md#cloneto)
- [copyComponent](Generic6DofConstraint.md#copycomponent)
- [beforeDestroy](Generic6DofConstraint.md#beforedestroy)

## Constructors

### constructor

• **new Generic6DofConstraint**(): [`Generic6DofConstraint`](Generic6DofConstraint.md)

#### Returns

[`Generic6DofConstraint`](Generic6DofConstraint.md)

#### Inherited from

ConstraintBase\<Ammo.btGeneric6DofConstraint\>.constructor

## Properties

### pivotSelf

• **pivotSelf**: `Vector3`

The pivot point for the self body
`FrameInA Origin`

#### Inherited from

ConstraintBase.pivotSelf

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L19)

___

### pivotTarget

• **pivotTarget**: `Vector3`

The pivot point for the target body
`FrameInB Origin`

#### Inherited from

ConstraintBase.pivotTarget

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L24)

___

### rotationSelf

• **rotationSelf**: `Quaternion`

The rotation for the self body
`FrameInA Rotation`

#### Inherited from

ConstraintBase.rotationSelf

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L29)

___

### rotationTarget

• **rotationTarget**: `Quaternion`

The rotation for the target body
`FrameInB Rotation`

#### Inherited from

ConstraintBase.rotationTarget

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:34](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L34)

___

### disableCollisionsBetweenLinkedBodies

• **disableCollisionsBetweenLinkedBodies**: `boolean` = `true`

#### Inherited from

ConstraintBase.disableCollisionsBetweenLinkedBodies

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:36](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L36)

___

### useLinearFrameReferenceFrame

• **useLinearFrameReferenceFrame**: `boolean` = `true`

是否使用线性参考坐标系。
默认值: `true`

#### Defined in

[packages/physics/constraint/Generic6DofConstraint.ts:63](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L63)

___

### object3D

• **object3D**: `Object3D` = `null`

owner object3D

#### Inherited from

ConstraintBase.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

ConstraintBase.isDestroyed

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

## Accessors

### breakingThreshold

• `get` **breakingThreshold**(): `number`

断裂脉冲阈值，值越大，约束越不易断裂。

#### Returns

`number`

#### Inherited from

ConstraintBase.breakingThreshold

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L41)

• `set` **breakingThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

ConstraintBase.breakingThreshold

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L45)

___

### constraint

• `get` **constraint**(): `T`

获取约束实例

#### Returns

`T`

#### Inherited from

ConstraintBase.constraint

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:87](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L87)

___

### targetRigidbody

• `get` **targetRigidbody**(): [`Rigidbody`](Rigidbody.md)

目标刚体组件

#### Returns

[`Rigidbody`](Rigidbody.md)

#### Inherited from

ConstraintBase.targetRigidbody

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L119)

• `set` **targetRigidbody**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Rigidbody`](Rigidbody.md) |

#### Returns

`void`

#### Inherited from

ConstraintBase.targetRigidbody

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L123)

___

### linearLowerLimit

• `get` **linearLowerLimit**(): `Vector3`

default: `-1e30, -1e30, -1e30`

#### Returns

`Vector3`

#### Defined in

[packages/physics/constraint/Generic6DofConstraint.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L18)

• `set` **linearLowerLimit**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/constraint/Generic6DofConstraint.ts:21](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L21)

___

### linearUpperLimit

• `get` **linearUpperLimit**(): `Vector3`

default: `1e30, 1e30, 1e30`

#### Returns

`Vector3`

#### Defined in

[packages/physics/constraint/Generic6DofConstraint.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L29)

• `set` **linearUpperLimit**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/constraint/Generic6DofConstraint.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L32)

___

### angularLowerLimit

• `get` **angularLowerLimit**(): `Vector3`

default: `-Math.PI, -Math.PI, -Math.PI`

#### Returns

`Vector3`

#### Defined in

[packages/physics/constraint/Generic6DofConstraint.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L40)

• `set` **angularLowerLimit**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/constraint/Generic6DofConstraint.ts:43](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L43)

___

### angularUpperLimit

• `get` **angularUpperLimit**(): `Vector3`

default: `Math.PI, Math.PI, Math.PI`

#### Returns

`Vector3`

#### Defined in

[packages/physics/constraint/Generic6DofConstraint.ts:51](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L51)

• `set` **angularUpperLimit**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/constraint/Generic6DofConstraint.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L54)

___

### eventDispatcher

• `get` **eventDispatcher**(): `CEventDispatcher`

#### Returns

`CEventDispatcher`

#### Inherited from

ConstraintBase.eventDispatcher

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

ConstraintBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ConstraintBase.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

#### Inherited from

ConstraintBase.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ConstraintBase.enable

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

ConstraintBase.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

## Methods

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

ConstraintBase.start

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:50](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L50)

___

### wait

▸ **wait**(): `Promise`\<[`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)\>

异步获取完成初始化的约束实例

#### Returns

`Promise`\<[`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)\>

#### Inherited from

ConstraintBase.wait

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:97](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L97)

___

### resetConstraint

▸ **resetConstraint**(): `Promise`\<[`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)\>

重置约束，销毁当前约束实例后重新创建并返回新的约束实例

#### Returns

`Promise`\<[`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)\>

#### Inherited from

ConstraintBase.resetConstraint

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:105](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L105)

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

ConstraintBase.destroy

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:127](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L127)

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

ConstraintBase.init

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

ConstraintBase.stop

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

ConstraintBase.onEnable

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

ConstraintBase.onDisable

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ConstraintBase.onUpdate

#### Defined in

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

ConstraintBase.onLateUpdate

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

ConstraintBase.onBeforeUpdate

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

ConstraintBase.onCompute

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

ConstraintBase.onGraphic

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

ConstraintBase.onParentChange

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

ConstraintBase.onAddChild

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

ConstraintBase.onRemoveChild

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

ConstraintBase.cloneTo

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

ConstraintBase.copyComponent

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

ConstraintBase.beforeDestroy

#### Defined in

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)
