# Class: Entity

实体类为所有被视为在场景中具有“存在”的场景对象提供了一个抽象基类，它可以被视为具有位置和大小的实际对象。
实体类是一个抽象类，不能被实例化，如果要实例化，请使用Object3D类。

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`Entity`**

  ↳↳ [`Object3D`](Object3D.md)


### Properties

- [name](Entity.md#name)
- [transform](Entity.md#transform)
- [renderNode](Entity.md#rendernode)
- [entityChildren](Entity.md#entitychildren)
- [components](Entity.md#components)
- [bound](Entity.md#bound)

### Accessors

- [uuid](Entity.md#uuid)
- [renderLayer](Entity.md#renderlayer)
- [visible](Entity.md#visible)
- [numChildren](Entity.md#numchildren)

### Methods

- [getObjectByName](Entity.md#getobjectbyname)
- [addChild](Entity.md#addchild)
- [removeChild](Entity.md#removechild)
- [removeAllChild](Entity.md#removeallchild)
- [removeChildByIndex](Entity.md#removechildbyindex)
- [hasChild](Entity.md#haschild)
- [removeFromParent](Entity.md#removefromparent)
- [getChildByIndex](Entity.md#getchildbyindex)
- [getChildByName](Entity.md#getchildbyname)
- [genBounds](Entity.md#genbounds)
- [dispatchEvent](Entity.md#dispatchevent)
- [addEventListener](Entity.md#addeventlistener)
- [removeEventListener](Entity.md#removeeventlistener)
- [removeEventListenerAt](Entity.md#removeeventlistenerat)
- [removeAllEventListener](Entity.md#removealleventlistener)
- [containEventListener](Entity.md#containeventlistener)
- [hasEventListener](Entity.md#haseventlistener)

### Constructors

- [constructor](Entity.md#constructor)

## Properties

### name

• **name**: `string` = `''`

对象的名称。默认值是一个空字符串。

#### Defined in

[src/engine/core/entities/Entity.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L24)

___

### transform

• **transform**: [`Transform`](Transform.md)

附加到此对象的Transform。

#### Defined in

[src/engine/core/entities/Entity.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L58)

___

### renderNode

• **renderNode**: `RenderNode`

渲染器组件

#### Defined in

[src/engine/core/entities/Entity.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L63)

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

包含对象子对象的数组

#### Defined in

[src/engine/core/entities/Entity.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L68)

___

### components

• **components**: `Map`<`any`, [`ComponentBase`](ComponentBase.md)\>

对象所附加的组件列表

#### Defined in

[src/engine/core/entities/Entity.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L73)

___

### bound

• **bound**: `IBound`

对象的的包围体

#### Defined in

[src/engine/core/entities/Entity.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L78)

## Accessors

### uuid

• `get` **uuid**(): `string`

该对象的唯一标识符。

#### Returns

`string`

#### Defined in

[src/engine/core/entities/Entity.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L31)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Defined in

[src/engine/core/entities/Entity.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L42)

• `set` **renderLayer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `RenderLayer` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Entity.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L46)

___

### visible

• `get` **visible**(): `boolean`

对象是否可见

#### Returns

`boolean`

#### Defined in

[src/engine/core/entities/Entity.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L116)

• `set` **visible**(`value`): `void`

设置对象是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Entity.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L123)

___

### numChildren

• `get` **numChildren**(): `number`

返回对象子对象的数量

#### Returns

`number`

#### Defined in

[src/engine/core/entities/Entity.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L154)

## Methods

### getObjectByName

▸ **getObjectByName**(`name`): [`Entity`](Entity.md)

从对象本身开始搜索对象及其子对象，并返回第一个具有匹配名称的子对象。
对于大多数对象，默认情况下名称为空字符串。您必须手动设置才能使用此方法。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 对象名称 |

#### Returns

[`Entity`](Entity.md)

子对象

#### Defined in

[src/engine/core/entities/Entity.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L95)

___

### addChild

▸ **addChild**(`child`): [`Entity`](Entity.md)

将对象添加为此对象的子对象。可以添加任意数量的对象。
传递到此处的对象上的任何当前父对象都将被删除，因为一个对象最多只能有一个父对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | 待添加的对象 |

#### Returns

[`Entity`](Entity.md)

#### Defined in

[src/engine/core/entities/Entity.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L213)

___

### removeChild

▸ **removeChild**(`child`): `any`

移除对象的子对象。可以移除任意数量的对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | 移除的对象 |

#### Returns

`any`

#### Defined in

[src/engine/core/entities/Entity.ts:234](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L234)

___

### removeAllChild

▸ **removeAllChild**(): `void`

移除当前对象的所有子对象

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Entity.ts:249](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L249)

___

### removeChildByIndex

▸ **removeChildByIndex**(`index`): `void`

搜索对象子级，移除带有匹配索引的子对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 标识该对象实例的索引 |

#### Returns

`void`

#### Defined in

[src/engine/core/entities/Entity.ts:261](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L261)

___

### hasChild

▸ **hasChild**(`child`): `boolean`

当前对象的子对象中是否包含某一对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | 指定对象 |

#### Returns

`boolean`

是否包含该对象

#### Defined in

[src/engine/core/entities/Entity.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L275)

___

### removeFromParent

▸ **removeFromParent**(): [`Entity`](Entity.md)

将此对象从其当前父对象中删除。

#### Returns

[`Entity`](Entity.md)

当前对象

#### Defined in

[src/engine/core/entities/Entity.ts:285](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L285)

___

### getChildByIndex

▸ **getChildByIndex**(`index`): [`Entity`](Entity.md)

搜索对象子级，返回第一个带有匹配索引的子对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 标识该对象实例的索引 |

#### Returns

[`Entity`](Entity.md)

子对象

#### Defined in

[src/engine/core/entities/Entity.ts:299](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L299)

___

### getChildByName

▸ **getChildByName**(`name`, `loopChild?`): `any`

搜索对象子级，返回一个带有匹配名称的子对象。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | 对象名称 |
| `loopChild` | `boolean` | `true` | 是否遍历子对象的子级。默认值为true |

#### Returns

`any`

子对象

#### Defined in

[src/engine/core/entities/Entity.ts:314](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L314)

___

### genBounds

▸ **genBounds**(): `IBound`

返回一个矩形，该矩形定义指定层的显示区域。

#### Returns

`IBound`

#### Defined in

[src/engine/core/entities/Entity.ts:406](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L406)

___

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

## Constructors

### constructor

• **new Entity**()

创建一个新的实体类对象

#### Overrides

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

#### Defined in

[src/engine/core/entities/Entity.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/engine/core/entities/Entity.ts#L140)
