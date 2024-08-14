# Class: ContactProcessedUtil

碰撞处理工具

### Constructors

- [constructor](ContactProcessedUtil.md#constructor)

### Methods

- [registerCollisionCallback](ContactProcessedUtil.md#registercollisioncallback)
- [unregisterCollisionCallback](ContactProcessedUtil.md#unregistercollisioncallback)
- [addIgnoredPointer](ContactProcessedUtil.md#addignoredpointer)
- [removeIgnoredPointer](ContactProcessedUtil.md#removeignoredpointer)
- [isIgnored](ContactProcessedUtil.md#isignored)
- [isCollision](ContactProcessedUtil.md#iscollision)
- [performCollisionTest](ContactProcessedUtil.md#performcollisiontest)
- [checkCollision](ContactProcessedUtil.md#checkcollision)

## Constructors

### constructor

• **new ContactProcessedUtil**(): [`ContactProcessedUtil`](ContactProcessedUtil.md)

#### Returns

[`ContactProcessedUtil`](ContactProcessedUtil.md)

## Methods

### registerCollisionCallback

▸ **registerCollisionCallback**(`pointer`, `callback`): `void`

注册碰撞事件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer` | `number` | 物理对象指针 |
| `callback` | `Callback` | 事件回调 |

#### Returns

`void`

#### Defined in

[packages/physics/utils/ContactProcessedUtil.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L18)

___

### unregisterCollisionCallback

▸ **unregisterCollisionCallback**(`pointer`): `void`

注销碰撞事件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer` | `number` | 物理对象指针 |

#### Returns

`void`

#### Defined in

[packages/physics/utils/ContactProcessedUtil.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L32)

___

### addIgnoredPointer

▸ **addIgnoredPointer**(`pointer`): `void`

将指针添加到忽略集合中，添加后，任何物体与该指针对象碰撞时都无法触发碰撞事件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer` | `number` | 物理对象指针 |

#### Returns

`void`

#### Defined in

[packages/physics/utils/ContactProcessedUtil.ts:64](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L64)

___

### removeIgnoredPointer

▸ **removeIgnoredPointer**(`pointer`): `void`

从忽略集合中移除指针

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer` | `number` | 物理对象指针 |

#### Returns

`void`

#### Defined in

[packages/physics/utils/ContactProcessedUtil.ts:74](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L74)

___

### isIgnored

▸ **isIgnored**(`pointer`): `boolean`

检查指针是否在忽略集合中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer` | `number` | 物理对象指针 |

#### Returns

`boolean`

#### Defined in

[packages/physics/utils/ContactProcessedUtil.ts:82](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L82)

___

### isCollision

▸ **isCollision**(`pointer`): `boolean`

检查指针是否注册了碰撞事件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer` | `number` | 物理对象指针 |

#### Returns

`boolean`

#### Defined in

[packages/physics/utils/ContactProcessedUtil.ts:90](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L90)

___

### performCollisionTest

▸ **performCollisionTest**(`bodyA`, `bodyB?`): `Object`

执行一次性的碰撞测试。
如果提供了 bodyB，则检测 bodyA 与 bodyB 是否碰撞。
否则，检测 bodyA 是否与其他所有刚体碰撞。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bodyA` | [`btRigidBody`](Ammo.btRigidBody.md) | 第一个刚体。 |
| `bodyB?` | [`btRigidBody`](Ammo.btRigidBody.md) | （可选）第二个刚体。 |

#### Returns

`Object`

如果发生碰撞，返回包含碰撞信息的对象；否则返回 null。

| Name | Type |
| :------ | :------ |
| `cpPtr` | `number` |
| `colObj0Wrap` | [`btCollisionObjectWrapper`](Ammo.btCollisionObjectWrapper.md) |
| `colObj1Wrap` | [`btCollisionObjectWrapper`](Ammo.btCollisionObjectWrapper.md) |
| `partId0` | `number` |
| `index0` | `number` |
| `partId1` | `number` |
| `index1` | `number` |

#### Defined in

[packages/physics/utils/ContactProcessedUtil.ts:129](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L129)

___

### checkCollision

▸ **checkCollision**(`bodyA`, `bodyB`): `boolean`

碰撞检测，判断两个刚体是否正在发生碰撞

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `bodyB` | [`btRigidBody`](Ammo.btRigidBody.md) |

#### Returns

`boolean`

boolean

#### Defined in

[packages/physics/utils/ContactProcessedUtil.ts:174](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L174)
