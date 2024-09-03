# Class: View3D

## Hierarchy

- `CEventListener`

  ↳ **`View3D`**

### Constructors

- [constructor](View3D.md#constructor)

### Properties

- [pickFire](View3D.md#pickfire)
- [guiPick](View3D.md#guipick)
- [canvasList](View3D.md#canvaslist)
- [id](View3D.md#id)
- [current](View3D.md#current)
- [type](View3D.md#type)
- [thisObject](View3D.md#thisobject)
- [handler](View3D.md#handler)
- [param](View3D.md#param)
- [priority](View3D.md#priority)

### Accessors

- [enable](View3D.md#enable)
- [enablePick](View3D.md#enablepick)
- [scene](View3D.md#scene)
- [camera](View3D.md#camera)
- [viewPort](View3D.md#viewport)

### Methods

- [enableUICanvas](View3D.md#enableuicanvas)
- [disableUICanvas](View3D.md#disableuicanvas)
- [equalCurrentListener](View3D.md#equalcurrentlistener)
- [dispose](View3D.md#dispose)

## Constructors

### constructor

• **new View3D**(`x?`, `y?`, `width?`, `height?`): [`View3D`](View3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `width` | `number` | `0` |
| `height` | `number` | `0` |

#### Returns

[`View3D`](View3D.md)

#### Overrides

CEventListener.constructor

#### Defined in

[src/core/View3D.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L21)

## Properties

### pickFire

• **pickFire**: [`PickFire`](PickFire.md)

#### Defined in

[src/core/View3D.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L17)

___

### guiPick

• **guiPick**: [`GUIPick`](GUIPick.md)

#### Defined in

[src/core/View3D.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L18)

___

### canvasList

• `Readonly` **canvasList**: [`GUICanvas`](GUICanvas.md)[]

#### Defined in

[src/core/View3D.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L19)

___

### id

• **id**: `number` = `0`

Record a id. When registering a listening event, the value will increase automatically

#### Inherited from

CEventListener.id

#### Defined in

[src/event/CEventListener.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventListener.ts#L16)

___

### current

• **current**: `any`

Returns current event dispatcher

#### Inherited from

CEventListener.current

#### Defined in

[src/event/CEventListener.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventListener.ts#L22)

___

### type

• **type**: `string` \| `number` = `null`

{string} event type

#### Inherited from

CEventListener.type

#### Defined in

[src/event/CEventListener.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventListener.ts#L32)

___

### thisObject

• **thisObject**: `any` = `null`

{any} the object is registerd

#### Inherited from

CEventListener.thisObject

#### Defined in

[src/event/CEventListener.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventListener.ts#L32)

___

### handler

• **handler**: `Function` = `null`

{Function} The callback function that handles events.

#### Inherited from

CEventListener.handler

#### Defined in

[src/event/CEventListener.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventListener.ts#L32)

___

### param

• **param**: `any` = `null`

{any} Parameters bound when registering events

#### Inherited from

CEventListener.param

#### Defined in

[src/event/CEventListener.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventListener.ts#L32)

___

### priority

• **priority**: `number` = `0`

{number} The priority of callback function execution, with a larger set value having priority to call

#### Inherited from

CEventListener.priority

#### Defined in

[src/event/CEventListener.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventListener.ts#L32)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/View3D.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L27)

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/View3D.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L31)

___

### enablePick

• `get` **enablePick**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/View3D.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L35)

• `set` **enablePick**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/View3D.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L39)

___

### scene

• `get` **scene**(): [`Scene3D`](Scene3D.md)

#### Returns

[`Scene3D`](Scene3D.md)

#### Defined in

[src/core/View3D.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L47)

• `set` **scene**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

[src/core/View3D.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L51)

___

### camera

• `get` **camera**(): [`Camera3D`](Camera3D.md)

#### Returns

[`Camera3D`](Camera3D.md)

#### Defined in

[src/core/View3D.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L64)

• `set` **camera**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Camera3D`](Camera3D.md) |

#### Returns

`void`

#### Defined in

[src/core/View3D.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L68)

___

### viewPort

• `get` **viewPort**(): `Vector4`

#### Returns

`Vector4`

#### Defined in

[src/core/View3D.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L72)

• `set` **viewPort**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Defined in

[src/core/View3D.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L76)

## Methods

### enableUICanvas

▸ **enableUICanvas**(`index?`): [`GUICanvas`](GUICanvas.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

[`GUICanvas`](GUICanvas.md)

#### Defined in

[src/core/View3D.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L80)

___

### disableUICanvas

▸ **disableUICanvas**(`index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/core/View3D.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/core/View3D.ts#L100)

___

### equalCurrentListener

▸ **equalCurrentListener**(`type`, `handler`, `thisObject`, `param`): `boolean`

Compare whether two events are the same

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | {string} event type |
| `handler` | `Function` | {Function} The callback function that handles events. |
| `thisObject` | `any` | {any} the object is registerd |
| `param` | `any` | {any} Parameters bound when registering events |

#### Returns

`boolean`

Returns a boolean

#### Inherited from

CEventListener.equalCurrentListener

#### Defined in

[src/event/CEventListener.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventListener.ts#L43)

___

### dispose

▸ **dispose**(): `void`

release all registered event.

#### Returns

`void`

#### Inherited from

CEventListener.dispose

#### Defined in

[src/event/CEventListener.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventListener.ts#L55)
