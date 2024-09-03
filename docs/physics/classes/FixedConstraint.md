# Class: FixedConstraint

固定约束

## Hierarchy

- `ConstraintBase`\<[`btFixedConstraint`](Ammo.btFixedConstraint.md)\>

  ↳ **`FixedConstraint`**

### Constructors

- [constructor](FixedConstraint.md#constructor)

### Properties

- [pivotSelf](FixedConstraint.md#pivotself)
- [pivotTarget](FixedConstraint.md#pivottarget)
- [rotationSelf](FixedConstraint.md#rotationself)
- [rotationTarget](FixedConstraint.md#rotationtarget)
- [disableCollisionsBetweenLinkedBodies](FixedConstraint.md#disablecollisionsbetweenlinkedbodies)
- [object3D](FixedConstraint.md#object3d)
- [isDestroyed](FixedConstraint.md#isdestroyed)

### Accessors

- [breakingThreshold](FixedConstraint.md#breakingthreshold)
- [constraint](FixedConstraint.md#constraint)
- [targetRigidbody](FixedConstraint.md#targetrigidbody)
- [eventDispatcher](FixedConstraint.md#eventdispatcher)
- [isStart](FixedConstraint.md#isstart)
- [transform](FixedConstraint.md#transform)
- [enable](FixedConstraint.md#enable)

### Methods

- [start](FixedConstraint.md#start)
- [wait](FixedConstraint.md#wait)
- [resetConstraint](FixedConstraint.md#resetconstraint)
- [destroy](FixedConstraint.md#destroy)
- [init](FixedConstraint.md#init)
- [stop](FixedConstraint.md#stop)
- [onEnable](FixedConstraint.md#onenable)
- [onDisable](FixedConstraint.md#ondisable)
- [onUpdate](FixedConstraint.md#onupdate)
- [onLateUpdate](FixedConstraint.md#onlateupdate)
- [onBeforeUpdate](FixedConstraint.md#onbeforeupdate)
- [onCompute](FixedConstraint.md#oncompute)
- [onGraphic](FixedConstraint.md#ongraphic)
- [onParentChange](FixedConstraint.md#onparentchange)
- [onAddChild](FixedConstraint.md#onaddchild)
- [onRemoveChild](FixedConstraint.md#onremovechild)
- [cloneTo](FixedConstraint.md#cloneto)
- [copyComponent](FixedConstraint.md#copycomponent)
- [beforeDestroy](FixedConstraint.md#beforedestroy)

## Constructors

### constructor

• **new FixedConstraint**(): [`FixedConstraint`](FixedConstraint.md)

#### Returns

[`FixedConstraint`](FixedConstraint.md)

#### Inherited from

ConstraintBase\<Ammo.btFixedConstraint\>.constructor

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

▸ **wait**(): `Promise`\<[`btFixedConstraint`](Ammo.btFixedConstraint.md)\>

异步获取完成初始化的约束实例

#### Returns

`Promise`\<[`btFixedConstraint`](Ammo.btFixedConstraint.md)\>

#### Inherited from

ConstraintBase.wait

#### Defined in

[packages/physics/constraint/ConstraintBase.ts:97](https://github.com/Orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L97)

___

### resetConstraint

▸ **resetConstraint**(): `Promise`\<[`btFixedConstraint`](Ammo.btFixedConstraint.md)\>

重置约束，销毁当前约束实例后重新创建并返回新的约束实例

#### Returns

`Promise`\<[`btFixedConstraint`](Ammo.btFixedConstraint.md)\>

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
