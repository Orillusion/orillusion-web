# Class: HingeConstraint

铰链约束

## Hierarchy

- `ConstraintBase`\<[`btHingeConstraint`](Ammo.btHingeConstraint.md)\>

  ↳ **`HingeConstraint`**

### Constructors

- [constructor](HingeConstraint.md#constructor)

### Properties

- [pivotSelf](HingeConstraint.md#pivotself)
- [pivotTarget](HingeConstraint.md#pivottarget)
- [rotationSelf](HingeConstraint.md#rotationself)
- [rotationTarget](HingeConstraint.md#rotationtarget)
- [disableCollisionsBetweenLinkedBodies](HingeConstraint.md#disablecollisionsbetweenlinkedbodies)
- [axisSelf](HingeConstraint.md#axisself)
- [axisTarget](HingeConstraint.md#axistarget)
- [useReferenceFrameA](HingeConstraint.md#usereferenceframea)
- [useTwoBodiesTransformOverload](HingeConstraint.md#usetwobodiestransformoverload)
- [object3D](HingeConstraint.md#object3d)
- [isDestroyed](HingeConstraint.md#isdestroyed)

### Accessors

- [breakingThreshold](HingeConstraint.md#breakingthreshold)
- [constraint](HingeConstraint.md#constraint)
- [targetRigidbody](HingeConstraint.md#targetrigidbody)
- [limitInfo](HingeConstraint.md#limitinfo)
- [motorConfigInfo](HingeConstraint.md#motorconfiginfo)
- [eventDispatcher](HingeConstraint.md#eventdispatcher)
- [isStart](HingeConstraint.md#isstart)
- [transform](HingeConstraint.md#transform)
- [enable](HingeConstraint.md#enable)

### Methods

- [start](HingeConstraint.md#start)
- [wait](HingeConstraint.md#wait)
- [resetConstraint](HingeConstraint.md#resetconstraint)
- [destroy](HingeConstraint.md#destroy)
- [setLimit](HingeConstraint.md#setlimit)
- [enableAngularMotor](HingeConstraint.md#enableangularmotor)
- [init](HingeConstraint.md#init)
- [stop](HingeConstraint.md#stop)
- [onEnable](HingeConstraint.md#onenable)
- [onDisable](HingeConstraint.md#ondisable)
- [onUpdate](HingeConstraint.md#onupdate)
- [onLateUpdate](HingeConstraint.md#onlateupdate)
- [onBeforeUpdate](HingeConstraint.md#onbeforeupdate)
- [onCompute](HingeConstraint.md#oncompute)
- [onGraphic](HingeConstraint.md#ongraphic)
- [onParentChange](HingeConstraint.md#onparentchange)
- [onAddChild](HingeConstraint.md#onaddchild)
- [onRemoveChild](HingeConstraint.md#onremovechild)
- [cloneTo](HingeConstraint.md#cloneto)
- [copyComponent](HingeConstraint.md#copycomponent)
- [beforeDestroy](HingeConstraint.md#beforedestroy)

## Constructors

### constructor

• **new HingeConstraint**(): [`HingeConstraint`](HingeConstraint.md)

#### Returns

[`HingeConstraint`](HingeConstraint.md)

#### Inherited from

ConstraintBase\<Ammo.btHingeConstraint\>.constructor

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

### axisSelf

• **axisSelf**: `Vector3` = `Vector3.UP`

自身刚体上的铰链轴方向。
默认值 `Vector3.UP`

#### Defined in

[packages/physics/constraint/HingeConstraint.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/HingeConstraint.ts#L14)

___

### axisTarget

• **axisTarget**: `Vector3` = `Vector3.UP`

目标刚体上的铰链轴方向。
默认值 `Vector3.UP`

#### Defined in

[packages/physics/constraint/HingeConstraint.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/HingeConstraint.ts#L19)

___

### useReferenceFrameA

• **useReferenceFrameA**: `boolean` = `true`

是否使用自身刚体的参考框架。
默认值 `true`

#### Defined in

[packages/physics/constraint/HingeConstraint.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/HingeConstraint.ts#L24)

___

### useTwoBodiesTransformOverload

• **useTwoBodiesTransformOverload**: `boolean` = `false`

是否使用两个刚体的变换重载方式。
如果为 true，则使用两个刚体的变换作为约束的参考框架。
默认值 `false`

#### Defined in

[packages/physics/constraint/HingeConstraint.ts:30](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/HingeConstraint.ts#L30)

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

### limitInfo

• `get` **limitInfo**(): [`number`, `number`, `number`, `number`, number?]

获取当前的限制参数。

#### Returns

[`number`, `number`, `number`, `number`, number?]

#### Defined in

[packages/physics/constraint/HingeConstraint.ts:38](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/HingeConstraint.ts#L38)

___

### motorConfigInfo

• `get` **motorConfigInfo**(): [`boolean`, `number`, `number`]

获取当前的马达配置参数。

#### Returns

[`boolean`, `number`, `number`]

#### Defined in

[packages/physics/constraint/HingeConstraint.ts:42](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/HingeConstraint.ts#L42)

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

▸ **wait**(): `Promise`\<[`btHingeConstraint`](Ammo.btHingeConstraint.md)\>

异步获取完成初始化的约束实例

#### Returns

`Promise`\<[`btHingeConstraint`](Ammo.btHingeConstraint.md)\>

#### Inherited from

ConstraintBase.wait

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:97](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L97)

___

### resetConstraint

▸ **resetConstraint**(): `Promise`\<[`btHingeConstraint`](Ammo.btHingeConstraint.md)\>

重置约束，销毁当前约束实例后重新创建并返回新的约束实例

#### Returns

`Promise`\<[`btHingeConstraint`](Ammo.btHingeConstraint.md)\>

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

### setLimit

▸ **setLimit**(`low`, `high`, `softness`, `biasFactor`, `relaxationFactor?`): `void`

设置铰链约束的旋转限制。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `low` | `number` | 铰链旋转的最小角度（下限）。 |
| `high` | `number` | 铰链旋转的最大角度（上限）。 |
| `softness` | `number` | 软限制系数，表示限制的柔软程度。值在0到1之间，1表示完全刚性。 |
| `biasFactor` | `number` | 偏置因子，用于控制限制恢复力的力度。值通常在0到1之间。 |
| `relaxationFactor?` | `number` | （可选）松弛因子，控制限制恢复的速度。值越大，恢复越快。 |

#### Returns

`void`

#### Defined in

[packages/physics/constraint/HingeConstraint.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/HingeConstraint.ts#L52)

___

### enableAngularMotor

▸ **enableAngularMotor**(`enableMotor`, `targetVelocity`, `maxMotorImpulse`): `void`

启用或禁用角度马达。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enableMotor` | `boolean` | 是否启用马达。 |
| `targetVelocity` | `number` | 马达的目标速度。 |
| `maxMotorImpulse` | `number` | 马达的最大推力。 |

#### Returns

`void`

#### Defined in

[packages/physics/constraint/HingeConstraint.ts:63](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/HingeConstraint.ts#L63)

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
