[**@orillusion/core**](../README.md)

***

# Class: ComponentCollect

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L17)

Static registry of live components, keyed by [View3D](View3D.md). Holds the
per-view lifecycle callback lists (update / lateUpdate / beforeUpdate /
compute / pick / graphic) that the engine drives each frame, plus a
type-keyed index used by render passes and other systems to enumerate
every instance of a component class in a view. View entries are evicted
on engine dispose to avoid leaking scene trees and callbacks.

## Constructors

### Constructor

> **new ComponentCollect**(): `ComponentCollect`

#### Returns

`ComponentCollect`

## Methods

### bindUpdate()

> `static` **bindUpdate**(`view`, `component`, `call`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:91](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L91)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

##### call

`Function`

#### Returns

`void`

***

### unBindUpdate()

> `static` **unBindUpdate**(`view`, `component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:101](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L101)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

#### Returns

`void`

***

### bindLateUpdate()

> `static` **bindLateUpdate**(`view`, `component`, `call`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:109](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L109)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

##### call

`Function`

#### Returns

`void`

***

### unBindLateUpdate()

> `static` **unBindLateUpdate**(`view`, `component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:119](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L119)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

#### Returns

`void`

***

### bindBeforeUpdate()

> `static` **bindBeforeUpdate**(`view`, `component`, `call`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:127](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L127)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

##### call

`Function`

#### Returns

`void`

***

### unBindBeforeUpdate()

> `static` **unBindBeforeUpdate**(`view`, `component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:137](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L137)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

#### Returns

`void`

***

### bindCompute()

> `static` **bindCompute**(`view`, `component`, `call`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:145](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L145)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

##### call

`Function`

#### Returns

`void`

***

### unBindCompute()

> `static` **unBindCompute**(`view`, `component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:155](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L155)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

#### Returns

`void`

***

### bindGraphic()

> `static` **bindGraphic**(`view`, `component`, `call`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:163](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L163)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

##### call

`Function`

#### Returns

`void`

***

### unBindGraphic()

> `static` **unBindGraphic**(`view`, `component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:173](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L173)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

#### Returns

`void`

***

### appendWaitStart()

> `static` **appendWaitStart**(`component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:181](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L181)

#### Parameters

##### component

[`IComponent`](../interfaces/IComponent.md)

#### Returns

`void`

***

### removeWaitStart()

> `static` **removeWaitStart**(`obj`, `component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:194](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L194)

#### Parameters

##### obj

[`Object3D`](Object3D.md)

##### component

[`IComponent`](../interfaces/IComponent.md)

#### Returns

`void`

***

### bindEnablePick()

> `static` **bindEnablePick**(`view`, `component`, `call`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:205](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L205)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`ColliderComponent`](ColliderComponent.md)

##### call

`Function`

#### Returns

`void`

***

### unBindEnablePick()

> `static` **unBindEnablePick**(`view`, `component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:215](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L215)

#### Parameters

##### view

[`View3D`](View3D.md)

##### component

[`ColliderComponent`](ColliderComponent.md)

#### Returns

`void`

***

### register()

> `static` **register**(`view`, `ctor`, `component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:233](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L233)

Add `comp` to the type-keyed registry under `(view, ctor)`. Used
by [ComponentBase.onEnable](ComponentBase.md#onenable) to make the instance
discoverable via [collectByTypeLayered](#collectbytypelayered).

`ctor` should be the component's concrete class
(`(this as any).constructor` from the instance). Subclasses are
registered under their own class — a query for the parent class
will not enumerate subclass instances. Idempotent.

#### Parameters

##### view

[`View3D`](View3D.md)

##### ctor

`Function`

##### component

[`IComponent`](../interfaces/IComponent.md)

#### Returns

`void`

***

### unregister()

> `static` **unregister**(`view`, `ctor`, `component`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:253](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L253)

Remove `comp` from the type-keyed registry. Empty inner sets are
left in place so the next register call can reuse them without
a fresh allocation. Idempotent.

#### Parameters

##### view

[`View3D`](View3D.md)

##### ctor

`Function`

##### component

[`IComponent`](../interfaces/IComponent.md)

#### Returns

`void`

***

### collectByTypeLayered()

> `static` **collectByTypeLayered**\<`T`\>(`view`, `ctor`, `layerMask`, `out`): `T`[]

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:286](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L286)

Collect all live components of `ctor` registered against `view`
whose `visibleLayer` intersects `layerMask`. Pass
[VisibleLayer.All](../@orillusion/namespaces/VisibleLayer/variables/All.md) (`0xFFFFFFFF`) to skip layer filtering —
the bitwise AND then matches every bit.

The caller owns `out`: it is cleared (`length = 0`) on entry and
populated in place, so a pass can hold a scratch array as a
member field and reuse it across frames without GC pressure
(mirrors EntityCollect.getLayerLists's buffer-reuse
pattern). The returned reference is the same `out` for chaining.

Callers that want to honour a camera's `cullingMask` should
pre-AND it into `layerMask` themselves; the predicate inside
does not re-read camera state.

#### Type Parameters

##### T

`T` *extends* [`IComponent`](../interfaces/IComponent.md) & `object`

#### Parameters

##### view

[`View3D`](View3D.md)

The View3D this pass executes against. A
                  `null` view returns immediately.

##### ctor

`Function`

Concrete component class to enumerate. Must
                  match what [register](#register) stored — i.e. the
                  subclass, not a base.

##### layerMask

`number`

Already-combined pass × camera mask.

##### out

`T`[]

Scratch array, owned by the caller; mutated.

#### Returns

`T`[]

***

### removeView()

> `static` **removeView**(`view`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:313](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L313)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

***

### removeNullViewEntriesForCtx()

> `static` **removeNullViewEntriesForCtx**(`ctx`): `void`

Defined in: [src/gfx/renderJob/collect/ComponentCollect.ts:329](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L329)

#### Parameters

##### ctx

`unknown`

#### Returns

`void`
