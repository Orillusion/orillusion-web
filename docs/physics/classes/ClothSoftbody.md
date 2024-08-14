# Class: ClothSoftbody

## Hierarchy

- `ComponentBase`

  ↳ **`ClothSoftbody`**

### Constructors

- [constructor](ClothSoftbody.md#constructor)

### Properties

- [clothCorners](ClothSoftbody.md#clothcorners)
- [mass](ClothSoftbody.md#mass)
- [margin](ClothSoftbody.md#margin)
- [fixNodeIndices](ClothSoftbody.md#fixnodeindices)
- [anchorIndices](ClothSoftbody.md#anchorindices)
- [influence](ClothSoftbody.md#influence)
- [disableCollision](ClothSoftbody.md#disablecollision)
- [applyPosition](ClothSoftbody.md#applyposition)
- [applyRotation](ClothSoftbody.md#applyrotation)
- [group](ClothSoftbody.md#group)
- [mask](ClothSoftbody.md#mask)
- [object3D](ClothSoftbody.md#object3d)
- [isDestroyed](ClothSoftbody.md#isdestroyed)

### Accessors

- [anchorRigidbody](ClothSoftbody.md#anchorrigidbody)
- [btBodyInited](ClothSoftbody.md#btbodyinited)
- [btSoftbody](ClothSoftbody.md#btsoftbody)
- [eventDispatcher](ClothSoftbody.md#eventdispatcher)
- [isStart](ClothSoftbody.md#isstart)
- [transform](ClothSoftbody.md#transform)
- [enable](ClothSoftbody.md#enable)

### Methods

- [wait](ClothSoftbody.md#wait)
- [stopSoftBodyMovement](ClothSoftbody.md#stopsoftbodymovement)
- [init](ClothSoftbody.md#init)
- [start](ClothSoftbody.md#start)
- [onUpdate](ClothSoftbody.md#onupdate)
- [applyFixedNodes](ClothSoftbody.md#applyfixednodes)
- [clearAnchors](ClothSoftbody.md#clearanchors)
- [destroy](ClothSoftbody.md#destroy)
- [stop](ClothSoftbody.md#stop)
- [onEnable](ClothSoftbody.md#onenable)
- [onDisable](ClothSoftbody.md#ondisable)
- [onLateUpdate](ClothSoftbody.md#onlateupdate)
- [onBeforeUpdate](ClothSoftbody.md#onbeforeupdate)
- [onCompute](ClothSoftbody.md#oncompute)
- [onGraphic](ClothSoftbody.md#ongraphic)
- [onParentChange](ClothSoftbody.md#onparentchange)
- [onAddChild](ClothSoftbody.md#onaddchild)
- [onRemoveChild](ClothSoftbody.md#onremovechild)
- [cloneTo](ClothSoftbody.md#cloneto)
- [copyComponent](ClothSoftbody.md#copycomponent)
- [beforeDestroy](ClothSoftbody.md#beforedestroy)

## Constructors

### constructor

• **new ClothSoftbody**(): [`ClothSoftbody`](ClothSoftbody.md)

#### Returns

[`ClothSoftbody`](ClothSoftbody.md)

#### Inherited from

ComponentBase.constructor

## Properties

### clothCorners

• **clothCorners**: [`Vector3`, `Vector3`, `Vector3`, `Vector3`]

布料四个角的位置 (00,01,10,11)

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:28](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L28)

___

### mass

• **mass**: `number` = `1`

软体的总质量

**`Default`**

```ts
1
```

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:34](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L34)

___

### margin

• **margin**: `number` = `0.05`

软体的碰撞边距

**`Default`**

```ts
0.05
```

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L40)

___

### fixNodeIndices

• **fixNodeIndices**: `number`[] \| [`CornerType`](../types/CornerType.md)[] = `[]`

固定布料的节点

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:45](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L45)

___

### anchorIndices

• **anchorIndices**: `number`[] \| [`CornerType`](../types/CornerType.md)[] = `[]`

布料的锚点

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:50](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L50)

___

### influence

• **influence**: `number` \| `number`[] = `0.5`

锚定的影响力。影响力值越大，软体节点越紧密地跟随刚体的运动。通常，这个值在0到1之间

**`Default`**

```ts
0.5
```

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:56](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L56)

___

### disableCollision

• **disableCollision**: `boolean` \| `boolean`[] = `false`

是否禁用锚定节点与刚体之间的碰撞，将其设置为true可以防止锚定节点和刚体之间发生物理碰撞

**`Default`**

```ts
false
```

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:62](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L62)

___

### applyPosition

• **applyPosition**: `Vector3`

当没有附加（锚定）到刚体时，应用绝对位置，否则是基于刚体的相对位置

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:67](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L67)

___

### applyRotation

• **applyRotation**: `Vector3`

当没有附加（锚定）到刚体时，应用绝对旋转，否则是基于刚体的相对旋转

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:72](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L72)

___

### group

• **group**: `number` = `1`

碰撞组

**`Default`**

```ts
1
```

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:78](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L78)

___

### mask

• **mask**: `number` = `-1`

碰撞掩码

**`Default`**

```ts
-1
```

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:84](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L84)

___

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

### anchorRigidbody

• `get` **anchorRigidbody**(): [`Rigidbody`](Rigidbody.md)

添加锚点时需要的刚体

#### Returns

[`Rigidbody`](Rigidbody.md)

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:89](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L89)

• `set` **anchorRigidbody**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Rigidbody`](Rigidbody.md) |

#### Returns

`void`

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:93](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L93)

___

### btBodyInited

• `get` **btBodyInited**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:98](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L98)

___

### btSoftbody

• `get` **btSoftbody**(): [`btSoftBody`](Ammo.btSoftBody.md)

return the soft body instance

#### Returns

[`btSoftBody`](Ammo.btSoftBody.md)

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:105](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L105)

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

### wait

▸ **wait**(): `Promise`\<[`btSoftBody`](Ammo.btSoftBody.md)\>

Asynchronously retrieves the fully initialized soft body instance.

#### Returns

`Promise`\<[`btSoftBody`](Ammo.btSoftBody.md)\>

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:112](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L112)

___

### stopSoftBodyMovement

▸ **stopSoftBodyMovement**(): `void`

停止软体运动

#### Returns

`void`

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:120](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L120)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.init

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:129](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L129)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

ComponentBase.start

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:142](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L142)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.onUpdate

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:253](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L253)

___

### applyFixedNodes

▸ **applyFixedNodes**(`fixedNodeIndices`): `void`

固定软体节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fixedNodeIndices` | `number`[] \| [`CornerType`](../types/CornerType.md)[] | 表示需要固定的节点索引或 CornerType 数组。 |

#### Returns

`void`

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:360](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L360)

___

### clearAnchors

▸ **clearAnchors**(): `void`

清除所有锚点，软体将会从附加的刚体上脱落

#### Returns

`void`

#### Defined in

[packages/physics/softbody/ClothSoftbody.ts:381](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L381)

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

[packages/physics/softbody/ClothSoftbody.ts:386](https://github.com/Orillusion/orillusion/blob/main/packages/physics/softbody/ClothSoftbody.ts#L386)

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
