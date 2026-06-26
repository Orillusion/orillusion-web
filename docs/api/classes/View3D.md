[**@orillusion/core**](../README.md)

***

# Class: View3D

Defined in: [src/core/View3D.ts:15](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L15)

A render view that pairs a [Camera3D](Camera3D.md) with a [Scene3D](Scene3D.md) and a
viewport, and drives the rendering of that scene through the camera.

## Constructors

### Constructor

> **new View3D**(`x?`, `y?`, `width?`, `height?`): `View3D`

Defined in: [src/core/View3D.ts:30](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L30)

#### Parameters

##### x?

`number` = `0`

##### y?

`number` = `0`

##### width?

`number` = `0`

##### height?

`number` = `0`

#### Returns

`View3D`

#### Overrides

`CEventListener.constructor`

## Properties

### pickFire

> **pickFire**: [`PickFire`](PickFire.md)

Defined in: [src/core/View3D.ts:21](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L21)

***

### engine3D

> **engine3D**: [`Engine3D`](Engine3D.md)

Defined in: [src/core/View3D.ts:28](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L28)

Reference to the Engine3D instance that owns this view. Set by
`engine.startRenderView(view)`. Components that need per-instance state
(input system, context, etc.) read it via this back-pointer so
they work under multi-instance setups.

***

### id

> **id**: `number` = `0`

Defined in: [src/event/CEventListener.ts:15](https://github.com/orillusion/orillusion/blob/main/src/event/CEventListener.ts#L15)

Record a id. When registering a listening event, the value will increase automatically

#### Inherited from

`CEventListener.id`

***

### current

> **current**: `any`

Defined in: [src/event/CEventListener.ts:21](https://github.com/orillusion/orillusion/blob/main/src/event/CEventListener.ts#L21)

Returns current event dispatcher

#### Inherited from

`CEventListener.current`

***

### type

> **type**: `string` \| `number` = `null`

Defined in: [src/event/CEventListener.ts:31](https://github.com/orillusion/orillusion/blob/main/src/event/CEventListener.ts#L31)

{string} event type

#### Inherited from

`CEventListener.type`

***

### thisObject

> **thisObject**: `any` = `null`

Defined in: [src/event/CEventListener.ts:31](https://github.com/orillusion/orillusion/blob/main/src/event/CEventListener.ts#L31)

{any} the object is registerd

#### Inherited from

`CEventListener.thisObject`

***

### handler

> **handler**: `Function` = `null`

Defined in: [src/event/CEventListener.ts:31](https://github.com/orillusion/orillusion/blob/main/src/event/CEventListener.ts#L31)

{Function} The callback function that handles events.

#### Inherited from

`CEventListener.handler`

***

### param

> **param**: `any` = `null`

Defined in: [src/event/CEventListener.ts:31](https://github.com/orillusion/orillusion/blob/main/src/event/CEventListener.ts#L31)

{any} Parameters bound when registering events

#### Inherited from

`CEventListener.param`

***

### priority

> **priority**: `number` = `0`

Defined in: [src/event/CEventListener.ts:31](https://github.com/orillusion/orillusion/blob/main/src/event/CEventListener.ts#L31)

{number} The priority of callback function execution, with a larger set value having priority to call

#### Inherited from

`CEventListener.priority`

## Accessors

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [src/core/View3D.ts:35](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L35)

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [src/core/View3D.ts:39](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L39)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### enablePick

#### Get Signature

> **get** **enablePick**(): `boolean`

Defined in: [src/core/View3D.ts:43](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L43)

##### Returns

`boolean`

#### Set Signature

> **set** **enablePick**(`value`): `void`

Defined in: [src/core/View3D.ts:47](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L47)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene3D`](Scene3D.md)

Defined in: [src/core/View3D.ts:55](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L55)

##### Returns

[`Scene3D`](Scene3D.md)

#### Set Signature

> **set** **scene**(`value`): `void`

Defined in: [src/core/View3D.ts:59](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L59)

##### Parameters

###### value

[`Scene3D`](Scene3D.md)

##### Returns

`void`

***

### camera

#### Get Signature

> **get** **camera**(): [`Camera3D`](Camera3D.md)

Defined in: [src/core/View3D.ts:66](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L66)

##### Returns

[`Camera3D`](Camera3D.md)

#### Set Signature

> **set** **camera**(`value`): `void`

Defined in: [src/core/View3D.ts:70](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L70)

##### Parameters

###### value

[`Camera3D`](Camera3D.md)

##### Returns

`void`

***

### viewPort

#### Get Signature

> **get** **viewPort**(): `Vector4`

Defined in: [src/core/View3D.ts:74](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L74)

##### Returns

`Vector4`

#### Set Signature

> **set** **viewPort**(`value`): `void`

Defined in: [src/core/View3D.ts:78](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L78)

##### Parameters

###### value

`Vector4`

##### Returns

`void`

***

### renderGraph

#### Get Signature

> **get** **renderGraph**(): [`RenderGraph`](RenderGraph.md)

Defined in: [src/core/View3D.ts:86](https://github.com/orillusion/orillusion/blob/main/src/core/View3D.ts#L86)

Frame Graph bound to this view's engine. The view's render
 job owns it (constructed during `engine.startRenderView`).
 Returns null only when the engine has not yet started a
 render job for this view.

##### Returns

[`RenderGraph`](RenderGraph.md)

## Methods

### equalCurrentListener()

> **equalCurrentListener**(`type`, `handler`, `thisObject`, `param`): `boolean`

Defined in: [src/event/CEventListener.ts:42](https://github.com/orillusion/orillusion/blob/main/src/event/CEventListener.ts#L42)

Compare whether two events are the same

#### Parameters

##### type

`string` \| `number`

{string} event type

##### handler

`Function`

{Function} The callback function that handles events.

##### thisObject

`any`

{any} the object is registerd

##### param

`any`

{any} Parameters bound when registering events

#### Returns

`boolean`

Returns a boolean

#### Inherited from

`CEventListener.equalCurrentListener`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/event/CEventListener.ts:54](https://github.com/orillusion/orillusion/blob/main/src/event/CEventListener.ts#L54)

release all registered event.

#### Returns

`void`

#### Inherited from

`CEventListener.dispose`
