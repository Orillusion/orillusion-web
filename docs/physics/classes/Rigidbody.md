# Class: Rigidbody

Rigidbody(刚体)组件。
刚体可以为游戏对象赋予物理属性,使游戏对象在物理系统的控制下接受推力与扭力,从而实现现实世界中的运动效果。

## Hierarchy

- `ComponentBase`

  ↳ **`Rigidbody`**


### Properties

- [object3D](Rigidbody.md#object3d)
- [serializeTag](Rigidbody.md#serializetag)

### Constructors

- [constructor](Rigidbody.md#constructor)

### Accessors

- [transform](Rigidbody.md#transform)
- [enable](Rigidbody.md#enable)
- [friction](Rigidbody.md#friction)
- [rollingFriction](Rigidbody.md#rollingfriction)
- [restitution](Rigidbody.md#restitution)
- [btRigidbodyInited](Rigidbody.md#btrigidbodyinited)
- [btRigidbody](Rigidbody.md#btrigidbody)
- [mass](Rigidbody.md#mass)
- [velocity](Rigidbody.md#velocity)
- [angularVelocity](Rigidbody.md#angularvelocity)
- [isKinematic](Rigidbody.md#iskinematic)
- [isTrigger](Rigidbody.md#istrigger)

### Methods

- [onVisible](Rigidbody.md#onvisible)
- [cloneTo](Rigidbody.md#cloneto)
- [onUpdate](Rigidbody.md#onupdate)
- [onLateUpdate](Rigidbody.md#onlateupdate)
- [onBeforeUpdate](Rigidbody.md#onbeforeupdate)
- [serialization](Rigidbody.md#serialization)
- [unSerialization](Rigidbody.md#unserialization)
- [init](Rigidbody.md#init)
- [start](Rigidbody.md#start)
- [addInitedFunction](Rigidbody.md#addinitedfunction)
- [removeInitedFunction](Rigidbody.md#removeinitedfunction)
- [update](Rigidbody.md#update)
- [destroy](Rigidbody.md#destroy)

## Properties

### object3D

• **object3D**: `Object3D` = `null`

此组件附加到的Object3D对象。

#### Inherited from

ComponentBase.object3D

#### Defined in

[engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: `SerializeTag`

#### Inherited from

ComponentBase.serializeTag

#### Defined in

[engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

## Constructors

### constructor

• **new Rigidbody**()

#### Inherited from

ComponentBase.constructor

#### Defined in

[engine/components/ComponentBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L32)

## Accessors

### transform

• `get` **transform**(): `Transform`

附加到此 Object3D对象 的 Transform组件。

#### Returns

`Transform`

#### Inherited from

ComponentBase.transform

#### Defined in

[engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[engine/components/ComponentBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L62)

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.enable

#### Defined in

[engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### friction

• `get` **friction**(): `number`

#### Returns

`number`

#### Defined in

[libs/physics/Rigidbody.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L65)

• `set` **friction**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L69)

___

### rollingFriction

• `get` **rollingFriction**(): `number`

#### Returns

`number`

#### Defined in

[libs/physics/Rigidbody.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L73)

• `set` **rollingFriction**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L77)

___

### restitution

• `get` **restitution**(): `number`

#### Returns

`number`

#### Defined in

[libs/physics/Rigidbody.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L82)

• `set` **restitution**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L85)

___

### btRigidbodyInited

• `get` **btRigidbodyInited**(): `boolean`

组件是否初始化

#### Returns

`boolean`

#### Defined in

[libs/physics/Rigidbody.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L93)

___

### btRigidbody

• `get` **btRigidbody**(): [`btRigidBody`](Ammo.btRigidBody.md)

获取Ammo刚体

#### Returns

[`btRigidBody`](Ammo.btRigidBody.md)

#### Defined in

[libs/physics/Rigidbody.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L175)

___

### mass

• `get` **mass**(): `number`

刚体的质量。

#### Returns

`number`

#### Defined in

[libs/physics/Rigidbody.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L204)

• `set` **mass**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L208)

___

### velocity

• `get` **velocity**(): `Vector3`

刚体的速度矢量。它表示刚体位置的变化率。

#### Returns

`Vector3`

#### Defined in

[libs/physics/Rigidbody.ts:226](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L226)

• `set` **velocity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:230](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L230)

___

### angularVelocity

• `get` **angularVelocity**(): `Vector3`

刚体的角速度矢量。

#### Returns

`Vector3`

#### Defined in

[libs/physics/Rigidbody.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L240)

• `set` **angularVelocity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:244](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L244)

___

### isKinematic

• `get` **isKinematic**(): `boolean`

控制物理是否影响刚体。

#### Returns

`boolean`

#### Defined in

[libs/physics/Rigidbody.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L250)

• `set` **isKinematic**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L254)

___

### isTrigger

• `get` **isTrigger**(): `boolean`

#### Returns

`boolean`

#### Defined in

[libs/physics/Rigidbody.ts:258](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L258)

• `set` **isTrigger**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:262](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L262)

## Methods

### onVisible

▸ **onVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.onVisible

#### Defined in

[engine/components/ComponentBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L66)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

创建新的组件，复制当前组件的属性，并添加到目标对象上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Object3D` | 源对象 |

#### Returns

`void`

#### Inherited from

ComponentBase.cloneTo

#### Defined in

[engine/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L114)

___

### onUpdate

▸ **onUpdate**(`call`): `void`

添加更新函数。会在每帧更新时执行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

ComponentBase.onUpdate

#### Defined in

[engine/components/ComponentBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L135)

___

### onLateUpdate

▸ **onLateUpdate**(`call`): `void`

添加延迟更新函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

ComponentBase.onLateUpdate

#### Defined in

[engine/components/ComponentBase.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L148)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`call`): `void`

添加帧更新前执行的函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

ComponentBase.onBeforeUpdate

#### Defined in

[engine/components/ComponentBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L161)

___

### serialization

▸ **serialization**(`assets`): `SerializeComponentBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | `ISerializeAssetsCollect` |

#### Returns

`SerializeComponentBase`

#### Inherited from

ComponentBase.serialization

#### Defined in

[engine/components/ComponentBase.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L170)

___

### unSerialization

▸ **unSerialization**(`componentData`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentData` | `SerializeComponentBase` |
| `data` | `UnSerializeData` |

#### Returns

`void`

#### Inherited from

ComponentBase.unSerialization

#### Defined in

[engine/components/ComponentBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L175)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.init

#### Defined in

[libs/physics/Rigidbody.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L51)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.start

#### Defined in

[libs/physics/Rigidbody.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L55)

___

### addInitedFunction

▸ **addInitedFunction**(`fun`, `thisObj`): `void`

组件初始化函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fun` | `Function` | 回调函数 |
| `thisObj` | `Object` | 引用对象 |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L136)

___

### removeInitedFunction

▸ **removeInitedFunction**(`fun`, `thisObj`): `void`

移除组件初始化函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fun` | `Function` | 回调函数 |
| `thisObj` | `Object` | 引用对象 |

#### Returns

`void`

#### Defined in

[libs/physics/Rigidbody.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L144)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.update

#### Defined in

[libs/physics/Rigidbody.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L179)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.destroy

#### Defined in

[libs/physics/Rigidbody.ts:196](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Rigidbody.ts#L196)
