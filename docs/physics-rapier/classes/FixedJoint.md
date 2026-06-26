[**@orillusion/physics-rapier**](../README.md)

***

# Class: FixedJoint

Defined in: [packages/physics-rapier/joint/FixedJoint.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/FixedJoint.ts#L10)

Fixed joint — locks all 6 DOFs between two bodies. Mirrors
`@orillusion/physics`'s `FixedConstraint`.

## Extends

- [`ConstraintBase`](ConstraintBase.md)\<`RAPIER.FixedImpulseJoint`\>

## Constructors

### Constructor

> **new FixedJoint**(): `FixedJoint`

#### Returns

`FixedJoint`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`constructor`](ConstraintBase.md#constructor)

## Properties

### object3D

> **object3D**: `Object3D` = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`object3D`](ConstraintBase.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`isDestroyed`](ConstraintBase.md#isdestroyed)

***

### connectedBody

> **connectedBody**: [`Rigidbody`](Rigidbody.md)

Defined in: [packages/physics-rapier/joint/ConstraintBase.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/ConstraintBase.ts#L16)

The other body of the constraint.

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`connectedBody`](ConstraintBase.md#connectedbody)

***

### collisionsEnabled

> **collisionsEnabled**: `boolean` = `false`

Defined in: [packages/physics-rapier/joint/ConstraintBase.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/ConstraintBase.ts#L19)

Whether contacts are computed between the two connected bodies. Default: false.

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`collisionsEnabled`](ConstraintBase.md#collisionsenabled)

***

### wakeUpOnCreate

> **wakeUpOnCreate**: `boolean` = `true`

Defined in: [packages/physics-rapier/joint/ConstraintBase.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/ConstraintBase.ts#L22)

Whether to wake up the bodies when the joint is created. Default: true.

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`wakeUpOnCreate`](ConstraintBase.md#wakeuponcreate)

***

### anchorSelf

> **anchorSelf**: `Vector3`

Defined in: [packages/physics-rapier/joint/FixedJoint.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/FixedJoint.ts#L11)

***

### anchorTarget

> **anchorTarget**: `Vector3`

Defined in: [packages/physics-rapier/joint/FixedJoint.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/FixedJoint.ts#L12)

***

### frameSelf

> **frameSelf**: `Quaternion`

Defined in: [packages/physics-rapier/joint/FixedJoint.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/FixedJoint.ts#L13)

***

### frameTarget

> **frameTarget**: `Quaternion`

Defined in: [packages/physics-rapier/joint/FixedJoint.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/FixedJoint.ts#L14)

## Accessors

### visibleLayer

#### Get Signature

> **get** **visibleLayer**(): `number`

Defined in: [src/components/ComponentBase.ts:46](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L46)

Composition-layer membership bitmask. The pass / camera /
collector filters via

    (component.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

Defaults to VisibleLayer.Default (bit 0) so a fresh
subclass is visible to passes whose `layerMask` is
VisibleLayer.All (which includes bit 0). Application code
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

[`ConstraintBase`](ConstraintBase.md).[`visibleLayer`](ConstraintBase.md#visiblelayer)

***

### eventDispatcher

#### Get Signature

> **get** **eventDispatcher**(): `CEventDispatcher`

Defined in: [src/components/ComponentBase.ts:63](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L63)

##### Returns

`CEventDispatcher`

#### Set Signature

> **set** **eventDispatcher**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:68](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

##### Parameters

###### value

`CEventDispatcher`

##### Returns

`void`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`eventDispatcher`](ConstraintBase.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`isStart`](ConstraintBase.md#isstart)

***

### transform

#### Get Signature

> **get** **transform**(): `Transform`

Defined in: [src/components/ComponentBase.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L89)

Return the Transform component attached to the Object3D.
Null before the component is attached — `addComponent` assigns
`object3D` only after construction — so constructor-time callers
can probe safely via `this.transform?.`.

##### Returns

`Transform`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`transform`](ConstraintBase.md#transform)

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

[`ConstraintBase`](ConstraintBase.md).[`enable`](ConstraintBase.md#enable)

***

### native

#### Get Signature

> **get** **native**(): `T`

Defined in: [packages/physics-rapier/joint/ConstraintBase.ts:53](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/ConstraintBase.ts#L53)

Native impulse joint. Touching this opts out of cross-backend portability.

##### Returns

`T`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`native`](ConstraintBase.md#native)

## Methods

### init()

> **init**(`param?`): `void`

Defined in: [src/components/ComponentBase.ts:161](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L161)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`init`](ConstraintBase.md#init)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`stop`](ConstraintBase.md#stop)

***

### onEnable()?

> `optional` **onEnable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:164](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L164)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onEnable`](ConstraintBase.md#onenable)

***

### onDisable()?

> `optional` **onDisable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:165](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L165)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onDisable`](ConstraintBase.md#ondisable)

***

### onUpdate()?

> `optional` **onUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:166](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L166)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onUpdate`](ConstraintBase.md#onupdate)

***

### onLateUpdate()?

> `optional` **onLateUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L167)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onLateUpdate`](ConstraintBase.md#onlateupdate)

***

### onBeforeUpdate()?

> `optional` **onBeforeUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:168](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L168)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onBeforeUpdate`](ConstraintBase.md#onbeforeupdate)

***

### onCompute()?

> `optional` **onCompute**(`view?`, `command?`): `any`

Defined in: [src/components/ComponentBase.ts:169](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L169)

#### Parameters

##### view?

`View3D`

##### command?

`GPUCommandEncoder`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onCompute`](ConstraintBase.md#oncompute)

***

### onGraphic()?

> `optional` **onGraphic**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L170)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onGraphic`](ConstraintBase.md#ongraphic)

***

### onParentChange()?

> `optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

Defined in: [src/components/ComponentBase.ts:171](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L171)

#### Parameters

##### lastParent?

`Object3D`

##### currentParent?

`Object3D`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onParentChange`](ConstraintBase.md#onparentchange)

***

### onAddChild()?

> `optional` **onAddChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:172](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L172)

#### Parameters

##### child

`Object3D`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onAddChild`](ConstraintBase.md#onaddchild)

***

### onRemoveChild()?

> `optional` **onRemoveChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L173)

#### Parameters

##### child

`Object3D`

#### Returns

`any`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`onRemoveChild`](ConstraintBase.md#onremovechild)

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/ComponentBase.ts:180](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L180)

clone component data to target object3D

#### Parameters

##### obj

`Object3D`

target object3D

#### Returns

`void`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`cloneTo`](ConstraintBase.md#cloneto)

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

[`ConstraintBase`](ConstraintBase.md).[`copyComponent`](ConstraintBase.md#copycomponent)

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

[`ConstraintBase`](ConstraintBase.md).[`beforeDestroy`](ConstraintBase.md#beforedestroy)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/physics-rapier/joint/ConstraintBase.ts:24](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/ConstraintBase.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`start`](ConstraintBase.md#start)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/physics-rapier/joint/ConstraintBase.ts:46](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/joint/ConstraintBase.ts#L46)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`ConstraintBase`](ConstraintBase.md).[`destroy`](ConstraintBase.md#destroy)
