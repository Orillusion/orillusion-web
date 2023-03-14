# Class: PickFire

拾取启动器

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`PickFire`**


### Constructors

- [constructor](PickFire.md#constructor)

### Methods

- [dispatchEvent](PickFire.md#dispatchevent)
- [dispose](PickFire.md#dispose)
- [addEventListener](PickFire.md#addeventlistener)
- [removeEventListener](PickFire.md#removeeventlistener)
- [removeEventListenerAt](PickFire.md#removeeventlistenerat)
- [removeAllEventListener](PickFire.md#removealleventlistener)
- [containEventListener](PickFire.md#containeventlistener)
- [hasEventListener](PickFire.md#haseventlistener)
- [init](PickFire.md#init)

### Properties

- [ray](PickFire.md#ray)
- [isTouching](PickFire.md#istouching)
- [mouseEnableMap](PickFire.md#mouseenablemap)

## Constructors

### constructor

• **new PickFire**()

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

## Methods

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

派发一个 Event3D 事件到所有注册了特定类型侦听器的对象中。

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CEvent`](CEvent.md) |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[dispatchEvent](CEventDispatcher.md#dispatchevent)

#### Defined in

[src/engine/event/CEventDispatcher.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L22)

___

### dispose

▸ **dispose**(): `void`

释放所有数据。

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[dispose](CEventDispatcher.md#dispose)

#### Defined in

[src/engine/event/CEventDispatcher.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L53)

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件和优先级注册事件侦听器。成功注册一个事件侦听器后，无法通过额外调用 addCEventListener() 来更改其优先级。要更改侦听器的优先级，必须首先调用 removeCEventListener()。然后，可以使用新的优先级再次注册该侦听器。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} 事件的类型标识符。 |
| `callback` | `Function` | `undefined` | {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果， 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。 |
| `thisObject` | `any` | `undefined` | {any} 当前注册对象。 |
| `param` | `any` | `null` | {any} 事件携带参数，默认为空。 |
| `priority` | `number` | `0` | {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。 |

#### Returns

`number`

注册事件位置标识id

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[addEventListener](CEventDispatcher.md#addeventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L77)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `thisObject`): `void`

移除事件侦听器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | {string} 事件名。 |
| `callback` | `Function` | {Function} 侦听函数。 |
| `thisObject` | `any` | {any} 当前注册对象。 |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListener](CEventDispatcher.md#removeeventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L111)

___

### removeEventListenerAt

▸ **removeEventListenerAt**(`id`): `void`

移除事件侦听器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | 事件id,调用addCEventListener的返回值即为事件id. |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListenerAt](CEventDispatcher.md#removeeventlistenerat)

#### Defined in

[src/engine/event/CEventDispatcher.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L130)

___

### removeAllEventListener

▸ **removeAllEventListener**(`eventType?`): `void`

移除指定类型的事件侦听器。
eventType 不指定类型 则移除所有的事件

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` \| `number` | `null` |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeAllEventListener](CEventDispatcher.md#removealleventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L149)

___

### containEventListener

▸ **containEventListener**(`type`): `boolean`

检测是否存在监听器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | {string} 事件类型标识符 |

#### Returns

`boolean`

是否存在该类型监视器，true为存在，反之不存在。

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[containEventListener](CEventDispatcher.md#containeventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L181)

___

### hasEventListener

▸ **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

检测是否存在监听器。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} 事件名 |
| `callback` | `Function` | `null` | {Function} 处理事件的侦听器函数 |
| `thisObject` | `any` | `null` | {any} 注册对象。 |

#### Returns

`boolean`

是否存在该事件，true为存在，反之不存在。

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[hasEventListener](CEventDispatcher.md#haseventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L194)

___

### init

▸ **init**(): `void`

初始化拾取启动器，在引擎初始化时内部调用

#### Returns

`void`

#### Defined in

[src/engine/io/PickFire.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/PickFire.ts#L45)

## Properties

### ray

• **ray**: [`Ray`](Ray.md)

包围盒拾取所使用的射线

#### Defined in

[src/engine/io/PickFire.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/PickFire.ts#L18)

___

### isTouching

• **isTouching**: `boolean` = `false`

是否按下

#### Defined in

[src/engine/io/PickFire.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/PickFire.ts#L23)

___

### mouseEnableMap

• **mouseEnableMap**: `Map`<`number`, [`Collider`](Collider.md)\>

矩阵与碰撞体关联字典

#### Defined in

[src/engine/io/PickFire.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/PickFire.ts#L40)
