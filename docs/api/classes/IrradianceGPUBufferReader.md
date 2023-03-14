# Class: IrradianceGPUBufferReader

EventDispatcher 类是可调度事件的所有类的基类,包含了事件的注册,注销，分发和清理等功能实现。

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`IrradianceGPUBufferReader`**


### Constructors

- [constructor](IrradianceGPUBufferReader.md#constructor)

### Methods

- [dispatchEvent](IrradianceGPUBufferReader.md#dispatchevent)
- [dispose](IrradianceGPUBufferReader.md#dispose)
- [addEventListener](IrradianceGPUBufferReader.md#addeventlistener)
- [removeEventListener](IrradianceGPUBufferReader.md#removeeventlistener)
- [removeEventListenerAt](IrradianceGPUBufferReader.md#removeeventlistenerat)
- [removeAllEventListener](IrradianceGPUBufferReader.md#removealleventlistener)
- [containEventListener](IrradianceGPUBufferReader.md#containeventlistener)
- [hasEventListener](IrradianceGPUBufferReader.md#haseventlistener)
- [initReader](IrradianceGPUBufferReader.md#initreader)

### Properties

- [opColorArray](IrradianceGPUBufferReader.md#opcolorarray)
- [opDepthArray](IrradianceGPUBufferReader.md#opdeptharray)

## Constructors

### constructor

• **new IrradianceGPUBufferReader**()

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

### initReader

▸ **initReader**(`probeRender`, `colorMap`, `depthMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `probeRender` | `ProbeRenderer` |
| `colorMap` | `VirtualTexture` |
| `depthMap` | `VirtualTexture` |

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/passRenderer/probeRenderer/IrradianceGPUBufferReader.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/probeRenderer/IrradianceGPUBufferReader.ts#L15)

## Properties

### opColorArray

• **opColorArray**: `Float32Array`

#### Defined in

[src/engine/gfx/renderJob/passRenderer/probeRenderer/IrradianceGPUBufferReader.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/probeRenderer/IrradianceGPUBufferReader.ts#L7)

___

### opDepthArray

• **opDepthArray**: `Float32Array`

#### Defined in

[src/engine/gfx/renderJob/passRenderer/probeRenderer/IrradianceGPUBufferReader.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/probeRenderer/IrradianceGPUBufferReader.ts#L9)
