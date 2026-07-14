[**@orillusion/core**](../README.md)

***

# Class: TranslationControlComponents

Defined in: [src/util/transformUtil/TranslationControlComponents.ts:21](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TranslationControlComponents.ts#L21)

Translation gizmo controller. Builds the axis arrows and the planar
(XY/XZ/YZ) drag handles and moves the target in local or global space.

## Extends

- [`TransformControllerBaseComponent`](TransformControllerBaseComponent.md)

## Constructors

### Constructor

> **new TranslationControlComponents**(): `TranslationControlComponents`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:35](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L35)

#### Returns

`TranslationControlComponents`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`constructor`](TransformControllerBaseComponent.md#constructor)

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`object3D`](TransformControllerBaseComponent.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`isDestroyed`](TransformControllerBaseComponent.md#isdestroyed)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`visibleLayer`](TransformControllerBaseComponent.md#visiblelayer)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`eventDispatcher`](TransformControllerBaseComponent.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`isStart`](TransformControllerBaseComponent.md#isstart)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`transform`](TransformControllerBaseComponent.md#transform)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`enable`](TransformControllerBaseComponent.md#enable)

***

### target

#### Get Signature

> **get** **target**(): [`Object3D`](Object3D.md)

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:47](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L47)

The object currently controlled by the owning gizmo.

##### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`target`](TransformControllerBaseComponent.md#target)

***

### mX

#### Get Signature

> **get** **mX**(): [`Object3D`](Object3D.md)

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:52](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L52)

The gizmo's X-axis root object.

##### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`mX`](TransformControllerBaseComponent.md#mx)

***

### mY

#### Get Signature

> **get** **mY**(): [`Object3D`](Object3D.md)

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:57](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L57)

The gizmo's Y-axis object.

##### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`mY`](TransformControllerBaseComponent.md#my)

***

### mZ

#### Get Signature

> **get** **mZ**(): [`Object3D`](Object3D.md)

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:62](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L62)

The gizmo's Z-axis object.

##### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`mZ`](TransformControllerBaseComponent.md#mz)

***

### transformSpaceMode

#### Get Signature

> **get** **transformSpaceMode**(): `TransformSpaceMode`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:67](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L67)

The active transform space (local or global) from the owning gizmo.

##### Returns

`TransformSpaceMode`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`transformSpaceMode`](TransformControllerBaseComponent.md#transformspacemode)

## Methods

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`stop`](TransformControllerBaseComponent.md#stop)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onLateUpdate`](TransformControllerBaseComponent.md#onlateupdate)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onBeforeUpdate`](TransformControllerBaseComponent.md#onbeforeupdate)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onCompute`](TransformControllerBaseComponent.md#oncompute)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onGraphic`](TransformControllerBaseComponent.md#ongraphic)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onParentChange`](TransformControllerBaseComponent.md#onparentchange)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onAddChild`](TransformControllerBaseComponent.md#onaddchild)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onRemoveChild`](TransformControllerBaseComponent.md#onremovechild)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`cloneTo`](TransformControllerBaseComponent.md#cloneto)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`copyComponent`](TransformControllerBaseComponent.md#copycomponent)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`beforeDestroy`](TransformControllerBaseComponent.md#beforedestroy)

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

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`destroy`](TransformControllerBaseComponent.md#destroy)

***

### start()

> **start**(): `void`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:107](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L107)

Component lifecycle start hook.

#### Returns

`void`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`start`](TransformControllerBaseComponent.md#start)

***

### onEnable()

> **onEnable**(`view?`): `void`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:112](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L112)

Attach the handle container and align the gizmo when enabled.

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onEnable`](TransformControllerBaseComponent.md#onenable)

***

### onDisable()

> **onDisable**(`view?`): `void`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:118](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L118)

Detach the handle container when disabled.

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onDisable`](TransformControllerBaseComponent.md#ondisable)

***

### reset()

> **reset**(): `void`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:123](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L123)

Re-align the gizmo to the target according to the current transform space.

#### Returns

`void`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`reset`](TransformControllerBaseComponent.md#reset)

***

### onMouseDown()

> **onMouseDown**(`e`): `void`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:215](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L215)

Begin a drag: pick an axis and record the start point.

#### Parameters

##### e

[`PointerEvent3D`](PointerEvent3D.md)

#### Returns

`void`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onMouseDown`](TransformControllerBaseComponent.md#onmousedown)

***

### onMouseMove()

> **onMouseMove**(`e`): `void`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:239](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L239)

Highlight handles on hover, or apply the transform while dragging.

#### Parameters

##### e

[`PointerEvent3D`](PointerEvent3D.md)

#### Returns

`void`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onMouseMove`](TransformControllerBaseComponent.md#onmousemove)

***

### onMouseUp()

> **onMouseUp**(`e`): `void`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:295](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L295)

End a drag and clear the active axis.

#### Parameters

##### e

[`PointerEvent3D`](PointerEvent3D.md)

#### Returns

`void`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onMouseUp`](TransformControllerBaseComponent.md#onmouseup)

***

### onUpdate()

> **onUpdate**(`view?`): `void`

Defined in: [src/util/transformUtil/TransformControllerBaseComponent.ts:304](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L304)

Keep the gizmo at a constant screen size and pinned to the target each frame.

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Inherited from

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`onUpdate`](TransformControllerBaseComponent.md#onupdate)

***

### init()

> **init**(`param?`): `void`

Defined in: [src/util/transformUtil/TranslationControlComponents.ts:24](https://github.com/orillusion/orillusion/blob/main/src/util/transformUtil/TranslationControlComponents.ts#L24)

Build the translation handles, including the three drag planes.

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Overrides

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md).[`init`](TransformControllerBaseComponent.md#init)
