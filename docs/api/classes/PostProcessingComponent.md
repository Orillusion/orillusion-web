[**@orillusion/core**](../README.md)

***

# Class: PostProcessingComponent

Defined in: [src/components/post/PostProcessingComponent.ts:11](https://github.com/orillusion/orillusion/blob/main/src/components/post/PostProcessingComponent.ts#L11)

Manages the post-processing effect stack for a [View3D](View3D.md). Effects
are added by type and forwarded to the view's render job; enabling or
disabling the component activates or deactivates all registered effects.

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new PostProcessingComponent**(): `PostProcessingComponent`

#### Returns

`PostProcessingComponent`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`constructor`](ComponentBase.md#constructor)

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`object3D`](ComponentBase.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`isDestroyed`](ComponentBase.md#isdestroyed)

## Accessors

### visibleLayer

#### Get Signature

> **get** **visibleLayer**(): `number`

Defined in: [src/components/ComponentBase.ts:46](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L46)

Composition-layer membership bitmask. The pass / camera /
collector filters via

    (component.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

Defaults to [VisibleLayer.Default](../@orillusion/namespaces/VisibleLayer/variables/Default.md) (bit 0) so a fresh
subclass is visible to passes whose `layerMask` is
[VisibleLayer.All](../@orillusion/namespaces/VisibleLayer/variables/All.md) (which includes bit 0). Application code
can assign project-specific bits (1..31) to organise the scene
into composition layers.

##### Returns

`number`

#### Set Signature

> **set** **visibleLayer**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:50](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L50)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`visibleLayer`](ComponentBase.md#visiblelayer)

***

### eventDispatcher

#### Get Signature

> **get** **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

Defined in: [src/components/ComponentBase.ts:63](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L63)

##### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Set Signature

> **set** **eventDispatcher**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:68](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

##### Parameters

###### value

[`CEventDispatcher`](CEventDispatcher.md)

##### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`eventDispatcher`](ComponentBase.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`isStart`](ComponentBase.md#isstart)

***

### transform

#### Get Signature

> **get** **transform**(): [`Transform`](Transform.md)

Defined in: [src/components/ComponentBase.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L89)

Return the Transform component attached to the Object3D.
Null before the component is attached — `addComponent` assigns
`object3D` only after construction — so constructor-time callers
can probe safely via `this.transform?.`.

##### Returns

[`Transform`](Transform.md)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`transform`](ComponentBase.md#transform)

***

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [src/components/ComponentBase.ts:113](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:96](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L96)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`enable`](ComponentBase.md#enable)

## Methods

### onUpdate()?

> `optional` **onUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:166](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L166)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onUpdate`](ComponentBase.md#onupdate)

***

### onLateUpdate()?

> `optional` **onLateUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L167)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onLateUpdate`](ComponentBase.md#onlateupdate)

***

### onBeforeUpdate()?

> `optional` **onBeforeUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:168](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L168)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onBeforeUpdate`](ComponentBase.md#onbeforeupdate)

***

### onCompute()?

> `optional` **onCompute**(`view?`, `command?`): `any`

Defined in: [src/components/ComponentBase.ts:169](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L169)

#### Parameters

##### view?

[`View3D`](View3D.md)

##### command?

`GPUCommandEncoder`

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onCompute`](ComponentBase.md#oncompute)

***

### onGraphic()?

> `optional` **onGraphic**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L170)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onGraphic`](ComponentBase.md#ongraphic)

***

### onParentChange()?

> `optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

Defined in: [src/components/ComponentBase.ts:171](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L171)

#### Parameters

##### lastParent?

[`Object3D`](Object3D.md)

##### currentParent?

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onParentChange`](ComponentBase.md#onparentchange)

***

### onAddChild()?

> `optional` **onAddChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:172](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L172)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onAddChild`](ComponentBase.md#onaddchild)

***

### onRemoveChild()?

> `optional` **onRemoveChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L173)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onRemoveChild`](ComponentBase.md#onremovechild)

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/ComponentBase.ts:180](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L180)

clone component data to target object3D

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object3D

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`cloneTo`](ComponentBase.md#cloneto)

***

### copyComponent()

> **copyComponent**(`from`): `this`

Defined in: [src/components/ComponentBase.ts:182](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L182)

#### Parameters

##### from

`this`

#### Returns

`this`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`copyComponent`](ComponentBase.md#copycomponent)

***

### beforeDestroy()

> **beforeDestroy**(`force?`): `void`

Defined in: [src/components/ComponentBase.ts:249](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L249)

before release this component, object refrences are not be set null now.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`beforeDestroy`](ComponentBase.md#beforedestroy)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/ComponentBase.ts:256](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L256)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`destroy`](ComponentBase.md#destroy)

***

### init()

> **init**(`param?`): `void`

Defined in: [src/components/post/PostProcessingComponent.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/post/PostProcessingComponent.ts#L16)

Initialize the internal effect registry.

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`init`](ComponentBase.md#init)

***

### start()

> **start**(): `void`

Defined in: [src/components/post/PostProcessingComponent.ts:21](https://github.com/orillusion/orillusion/blob/main/src/components/post/PostProcessingComponent.ts#L21)

Lifecycle hook invoked when the component starts.

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`start`](ComponentBase.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/post/PostProcessingComponent.ts:26](https://github.com/orillusion/orillusion/blob/main/src/components/post/PostProcessingComponent.ts#L26)

Lifecycle hook invoked when the component stops.

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`stop`](ComponentBase.md#stop)

***

### onEnable()

> **onEnable**(): `void`

Defined in: [src/components/post/PostProcessingComponent.ts:31](https://github.com/orillusion/orillusion/blob/main/src/components/post/PostProcessingComponent.ts#L31)

Activate all registered post effects when the component is enabled.

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onEnable`](ComponentBase.md#onenable)

***

### onDisable()

> **onDisable**(): `void`

Defined in: [src/components/post/PostProcessingComponent.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/post/PostProcessingComponent.ts#L36)

Deactivate all registered post effects when the component is disabled.

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onDisable`](ComponentBase.md#ondisable)

***

### addPost()

> **addPost**\<`T`\>(`c`): `T`

Defined in: [src/components/post/PostProcessingComponent.ts:61](https://github.com/orillusion/orillusion/blob/main/src/components/post/PostProcessingComponent.ts#L61)

Add a post-processing effect by its class. Returns the created
instance, or undefined if an effect of that type already exists.

#### Type Parameters

##### T

`T` *extends* `PostBase`

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

the post effect class to instantiate

#### Returns

`T`

***

### removePost()

> **removePost**\<`T`\>(`c`): `void`

Defined in: [src/components/post/PostProcessingComponent.ts:74](https://github.com/orillusion/orillusion/blob/main/src/components/post/PostProcessingComponent.ts#L74)

Remove a previously added post-processing effect by its class.

#### Type Parameters

##### T

`T` *extends* `PostBase`

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

the post effect class to remove

#### Returns

`void`

***

### getPost()

> **getPost**\<`T`\>(`c`): `T`

Defined in: [src/components/post/PostProcessingComponent.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/post/PostProcessingComponent.ts#L89)

Get a registered post-processing effect by its class.

#### Type Parameters

##### T

`T` *extends* `PostBase`

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

the post effect class to look up

#### Returns

`T`

the effect instance, or null if not registered
