# Class: ConeTwistConstraint

锥形扭转约束

## Hierarchy

- `ConstraintBase`\<[`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)\>

  ↳ **`ConeTwistConstraint`**

### Constructors

- [constructor](ConeTwistConstraint.md#constructor)

### Properties

- [pivotSelf](ConeTwistConstraint.md#pivotself)
- [pivotTarget](ConeTwistConstraint.md#pivottarget)
- [rotationSelf](ConeTwistConstraint.md#rotationself)
- [rotationTarget](ConeTwistConstraint.md#rotationtarget)
- [disableCollisionsBetweenLinkedBodies](ConeTwistConstraint.md#disablecollisionsbetweenlinkedbodies)
- [object3D](ConeTwistConstraint.md#object3d)
- [isDestroyed](ConeTwistConstraint.md#isdestroyed)

### Accessors

- [twistSpan](ConeTwistConstraint.md#twistspan)
- [swingSpan1](ConeTwistConstraint.md#swingspan1)
- [swingSpan2](ConeTwistConstraint.md#swingspan2)
- [breakingThreshold](ConeTwistConstraint.md#breakingthreshold)
- [constraint](ConeTwistConstraint.md#constraint)
- [targetRigidbody](ConeTwistConstraint.md#targetrigidbody)
- [eventDispatcher](ConeTwistConstraint.md#eventdispatcher)
- [isStart](ConeTwistConstraint.md#isstart)
- [transform](ConeTwistConstraint.md#transform)
- [enable](ConeTwistConstraint.md#enable)

### Methods

- [start](ConeTwistConstraint.md#start)
- [wait](ConeTwistConstraint.md#wait)
- [resetConstraint](ConeTwistConstraint.md#resetconstraint)
- [destroy](ConeTwistConstraint.md#destroy)
- [init](ConeTwistConstraint.md#init)
- [stop](ConeTwistConstraint.md#stop)
- [onEnable](ConeTwistConstraint.md#onenable)
- [onDisable](ConeTwistConstraint.md#ondisable)
- [onUpdate](ConeTwistConstraint.md#onupdate)
- [onLateUpdate](ConeTwistConstraint.md#onlateupdate)
- [onBeforeUpdate](ConeTwistConstraint.md#onbeforeupdate)
- [onCompute](ConeTwistConstraint.md#oncompute)
- [onGraphic](ConeTwistConstraint.md#ongraphic)
- [onParentChange](ConeTwistConstraint.md#onparentchange)
- [onAddChild](ConeTwistConstraint.md#onaddchild)
- [onRemoveChild](ConeTwistConstraint.md#onremovechild)
- [cloneTo](ConeTwistConstraint.md#cloneto)
- [copyComponent](ConeTwistConstraint.md#copycomponent)
- [beforeDestroy](ConeTwistConstraint.md#beforedestroy)

## Constructors

### constructor

• **new ConeTwistConstraint**(): [`ConeTwistConstraint`](ConeTwistConstraint.md)

#### Returns

[`ConeTwistConstraint`](ConeTwistConstraint.md)

#### Inherited from

ConstraintBase\<Ammo.btConeTwistConstraint\>.constructor

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

### twistSpan

• `get` **twistSpan**(): `number`

扭转角度限制，绕 X 轴的扭转范围。
默认值 `Math.PI`

#### Returns

`number`

#### Defined in

[packages/physics/constraint/ConeTwistConstraint.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConeTwistConstraint.ts#L17)

• `set` **twistSpan**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/constraint/ConeTwistConstraint.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConeTwistConstraint.ts#L20)

___

### swingSpan1

• `get` **swingSpan1**(): `number`

摆动角度限制1，绕 Y 轴的摆动范围。
默认值 `Math.PI`

#### Returns

`number`

#### Defined in

[packages/physics/constraint/ConeTwistConstraint.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConeTwistConstraint.ts#L29)

• `set` **swingSpan1**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/constraint/ConeTwistConstraint.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConeTwistConstraint.ts#L32)

___

### swingSpan2

• `get` **swingSpan2**(): `number`

摆动角度限制2，绕 Z 轴的摆动范围。
默认值 `Math.PI`

#### Returns

`number`

#### Defined in

[packages/physics/constraint/ConeTwistConstraint.ts:41](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConeTwistConstraint.ts#L41)

• `set` **swingSpan2**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/constraint/ConeTwistConstraint.ts:44](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConeTwistConstraint.ts#L44)

___

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

▸ **wait**(): `Promise`\<[`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)\>

异步获取完成初始化的约束实例

#### Returns

`Promise`\<[`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)\>

#### Inherited from

ConstraintBase.wait

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:97](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L97)

___

### resetConstraint

▸ **resetConstraint**(): `Promise`\<[`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)\>

重置约束，销毁当前约束实例后重新创建并返回新的约束实例

#### Returns

`Promise`\<[`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)\>

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
