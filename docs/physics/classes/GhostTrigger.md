# Class: GhostTrigger

The GhostTrigger Component represents a non-physical trigger in the physics world.
It uses a ghost object to detect overlapping collisions without producing physical responses.

## Hierarchy

- `ComponentBase`

  ↳ **`GhostTrigger`**

### Constructors

- [constructor](GhostTrigger.md#constructor)

### Properties

- [object3D](GhostTrigger.md#object3d)
- [isDestroyed](GhostTrigger.md#isdestroyed)

### Accessors

- [shape](GhostTrigger.md#shape)
- [userIndex](GhostTrigger.md#userindex)
- [collisionFlags](GhostTrigger.md#collisionflags)
- [ghostObject](GhostTrigger.md#ghostobject)
- [enableCollisionEvent](GhostTrigger.md#enablecollisionevent)
- [collisionEvent](GhostTrigger.md#collisionevent)
- [eventDispatcher](GhostTrigger.md#eventdispatcher)
- [isStart](GhostTrigger.md#isstart)
- [transform](GhostTrigger.md#transform)
- [enable](GhostTrigger.md#enable)

### Methods

- [createAndAddGhostObject](GhostTrigger.md#createandaddghostobject)
- [addCollisionFlag](GhostTrigger.md#addcollisionflag)
- [removeCollisionFlag](GhostTrigger.md#removecollisionflag)
- [start](GhostTrigger.md#start)
- [wait](GhostTrigger.md#wait)
- [destroy](GhostTrigger.md#destroy)
- [init](GhostTrigger.md#init)
- [stop](GhostTrigger.md#stop)
- [onEnable](GhostTrigger.md#onenable)
- [onDisable](GhostTrigger.md#ondisable)
- [onUpdate](GhostTrigger.md#onupdate)
- [onLateUpdate](GhostTrigger.md#onlateupdate)
- [onBeforeUpdate](GhostTrigger.md#onbeforeupdate)
- [onCompute](GhostTrigger.md#oncompute)
- [onGraphic](GhostTrigger.md#ongraphic)
- [onParentChange](GhostTrigger.md#onparentchange)
- [onAddChild](GhostTrigger.md#onaddchild)
- [onRemoveChild](GhostTrigger.md#onremovechild)
- [cloneTo](GhostTrigger.md#cloneto)
- [copyComponent](GhostTrigger.md#copycomponent)
- [beforeDestroy](GhostTrigger.md#beforedestroy)

## Constructors

### constructor

• **new GhostTrigger**(): [`GhostTrigger`](GhostTrigger.md)

#### Returns

[`GhostTrigger`](GhostTrigger.md)

#### Inherited from

ComponentBase.constructor

## Properties

### object3D

• **object3D**: `Object3D` = `null`

owner object3D

#### Inherited from

ComponentBase.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

ComponentBase.isDestroyed

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

## Accessors

### shape

• `get` **shape**(): [`btCollisionShape`](Ammo.btCollisionShape.md)

#### Returns

[`btCollisionShape`](Ammo.btCollisionShape.md)

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L19)

• `set` **shape**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`btCollisionShape`](Ammo.btCollisionShape.md) |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L22)

___

### userIndex

• `get` **userIndex**(): `number`

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L31)

• `set` **userIndex**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:35](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L35)

___

### collisionFlags

• `get` **collisionFlags**(): `number`

获取碰撞标志

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:45](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L45)

___

### ghostObject

• `get` **ghostObject**(): [`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md)

获取幽灵对象

#### Returns

[`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md)

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:129](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L129)

___

### enableCollisionEvent

• `get` **enableCollisionEvent**(): `boolean`

启用/禁用碰撞回调

#### Returns

`boolean`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:144](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L144)

• `set` **enableCollisionEvent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:147](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L147)

___

### collisionEvent

• `get` **collisionEvent**(): (`contactPoint`: [`btManifoldPoint`](Ammo.btManifoldPoint.md), `selfBody`: [`btRigidBody`](Ammo.btRigidBody.md), `otherBody`: [`btRigidBody`](Ammo.btRigidBody.md)) => `void`

碰撞事件回调

#### Returns

`fn`

▸ (`contactPoint`, `selfBody`, `otherBody`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `contactPoint` | [`btManifoldPoint`](Ammo.btManifoldPoint.md) |
| `selfBody` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `otherBody` | [`btRigidBody`](Ammo.btRigidBody.md) |

##### Returns

`void`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:155](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L155)

• `set` **collisionEvent**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`contactPoint`: [`btManifoldPoint`](Ammo.btManifoldPoint.md), `selfBody`: [`btRigidBody`](Ammo.btRigidBody.md), `otherBody`: [`btRigidBody`](Ammo.btRigidBody.md)) => `void` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:158](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L158)

___

### eventDispatcher

• `get` **eventDispatcher**(): `CEventDispatcher`

#### Returns

`CEventDispatcher`

#### Inherited from

ComponentBase.eventDispatcher

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

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

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

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

## Methods

### createAndAddGhostObject

▸ **createAndAddGhostObject**(`shape`, `position`, `rotation`, `collisionFlags?`, `userIndex?`): [`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md)

创建幽灵对象并添加到物理世界。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`btCollisionShape`](Ammo.btCollisionShape.md) | 碰撞形状。 |
| `position` | `Vector3` | 幽灵对象的位置。 |
| `rotation` | `Vector3` | 幽灵对象的旋转。 |
| `collisionFlags?` | `number` | 可选参数，碰撞标志，默认值为 4 `NO_CONTACT_RESPONSE` 表示对象不参与碰撞响应，但仍会触发碰撞事件。 |
| `userIndex?` | `number` | 可选参数，用户索引，可作为物理对象标识。 |

#### Returns

[`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md)

新创建的 Ammo.btPairCachingGhostObject 对象。

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:103](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L103)

___

### addCollisionFlag

▸ **addCollisionFlag**(`value`): `void`

添加单个碰撞标志

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CollisionFlags`](../enums/CollisionFlags.md) |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L52)

___

### removeCollisionFlag

▸ **removeCollisionFlag**(`value`): `void`

删除单个碰撞标志

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CollisionFlags`](../enums/CollisionFlags.md) |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:59](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L59)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

ComponentBase.start

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:64](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L64)

___

### wait

▸ **wait**(): `Promise`\<[`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md)\>

异步获取完成初始化的幽灵对象

#### Returns

`Promise`\<[`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md)\>

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:136](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L136)

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

ComponentBase.destroy

#### Defined in

[packages/physics/rigidbody/GhostTrigger.ts:162](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L162)

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

ComponentBase.init

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

ComponentBase.stop

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

ComponentBase.onEnable

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

ComponentBase.onDisable

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

ComponentBase.onUpdate

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

ComponentBase.onLateUpdate

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

ComponentBase.onBeforeUpdate

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

ComponentBase.onCompute

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

ComponentBase.onGraphic

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

ComponentBase.onParentChange

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

ComponentBase.onAddChild

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

ComponentBase.onRemoveChild

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

ComponentBase.cloneTo

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

ComponentBase.copyComponent

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

ComponentBase.beforeDestroy

#### Defined in

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)
