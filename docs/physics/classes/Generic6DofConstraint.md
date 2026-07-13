[**@orillusion/physics**](../README.md)

***

# Class: Generic6DofConstraint

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L9)

Generic six-degree-of-freedom constraint

## Extends

- `ConstraintBase`\<[`btGeneric6DofConstraint`](../@orillusion/namespaces/Ammo/classes/btGeneric6DofConstraint.md)\>

## Constructors

### Constructor

> **new Generic6DofConstraint**(): `Generic6DofConstraint`

#### Returns

`Generic6DofConstraint`

#### Inherited from

`ConstraintBase<Ammo.btGeneric6DofConstraint>.constructor`

## Properties

### object3D

> **object3D**: `Object3D` = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

`ConstraintBase.object3D`

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

`ConstraintBase.isDestroyed`

***

### pivotSelf

> **pivotSelf**: `Vector3`

Defined in: [packages/physics/constraint/ConstraintBase.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L19)

The pivot point for the self body
`FrameInA Origin`

#### Inherited from

`ConstraintBase.pivotSelf`

***

### pivotTarget

> **pivotTarget**: `Vector3`

Defined in: [packages/physics/constraint/ConstraintBase.ts:24](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L24)

The pivot point for the target body
`FrameInB Origin`

#### Inherited from

`ConstraintBase.pivotTarget`

***

### rotationSelf

> **rotationSelf**: `Quaternion`

Defined in: [packages/physics/constraint/ConstraintBase.ts:29](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L29)

The rotation for the self body
`FrameInA Rotation`

#### Inherited from

`ConstraintBase.rotationSelf`

***

### rotationTarget

> **rotationTarget**: `Quaternion`

Defined in: [packages/physics/constraint/ConstraintBase.ts:34](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L34)

The rotation for the target body
`FrameInB Rotation`

#### Inherited from

`ConstraintBase.rotationTarget`

***

### disableCollisionsBetweenLinkedBodies

> **disableCollisionsBetweenLinkedBodies**: `boolean` = `true`

Defined in: [packages/physics/constraint/ConstraintBase.ts:36](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L36)

#### Inherited from

`ConstraintBase.disableCollisionsBetweenLinkedBodies`

***

### useLinearFrameReferenceFrame

> **useLinearFrameReferenceFrame**: `boolean` = `true`

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:63](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L63)

Whether to use the linear reference frame.
Default: `true`

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

`ConstraintBase.visibleLayer`

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

`ConstraintBase.eventDispatcher`

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

`ConstraintBase.isStart`

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

`ConstraintBase.transform`

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

`ConstraintBase.enable`

***

### breakingThreshold

#### Get Signature

> **get** **breakingThreshold**(): `number`

Defined in: [packages/physics/constraint/ConstraintBase.ts:41](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L41)

Breaking impulse threshold. The larger the value, the harder the constraint is to break.

##### Returns

`number`

#### Set Signature

> **set** **breakingThreshold**(`value`): `void`

Defined in: [packages/physics/constraint/ConstraintBase.ts:45](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L45)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`ConstraintBase.breakingThreshold`

***

### constraint

#### Get Signature

> **get** **constraint**(): `T`

Defined in: [packages/physics/constraint/ConstraintBase.ts:87](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L87)

Get the constraint instance

##### Returns

`T`

#### Inherited from

`ConstraintBase.constraint`

***

### targetRigidbody

#### Get Signature

> **get** **targetRigidbody**(): [`Rigidbody`](Rigidbody.md)

Defined in: [packages/physics/constraint/ConstraintBase.ts:119](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L119)

Target rigid body component

##### Returns

[`Rigidbody`](Rigidbody.md)

#### Set Signature

> **set** **targetRigidbody**(`value`): `void`

Defined in: [packages/physics/constraint/ConstraintBase.ts:123](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L123)

##### Parameters

###### value

[`Rigidbody`](Rigidbody.md)

##### Returns

`void`

#### Inherited from

`ConstraintBase.targetRigidbody`

***

### linearLowerLimit

#### Get Signature

> **get** **linearLowerLimit**(): `Vector3`

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:18](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L18)

default: `-1e30, -1e30, -1e30`

##### Returns

`Vector3`

#### Set Signature

> **set** **linearLowerLimit**(`value`): `void`

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L21)

##### Parameters

###### value

`Vector3`

##### Returns

`void`

***

### linearUpperLimit

#### Get Signature

> **get** **linearUpperLimit**(): `Vector3`

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:29](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L29)

default: `1e30, 1e30, 1e30`

##### Returns

`Vector3`

#### Set Signature

> **set** **linearUpperLimit**(`value`): `void`

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:32](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L32)

##### Parameters

###### value

`Vector3`

##### Returns

`void`

***

### angularLowerLimit

#### Get Signature

> **get** **angularLowerLimit**(): `Vector3`

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:40](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L40)

default: `-Math.PI, -Math.PI, -Math.PI`

##### Returns

`Vector3`

#### Set Signature

> **set** **angularLowerLimit**(`value`): `void`

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:43](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L43)

##### Parameters

###### value

`Vector3`

##### Returns

`void`

***

### angularUpperLimit

#### Get Signature

> **get** **angularUpperLimit**(): `Vector3`

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:51](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L51)

default: `Math.PI, Math.PI, Math.PI`

##### Returns

`Vector3`

#### Set Signature

> **set** **angularUpperLimit**(`value`): `void`

Defined in: [packages/physics/constraint/Generic6DofConstraint.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/Generic6DofConstraint.ts#L54)

##### Parameters

###### value

`Vector3`

##### Returns

`void`

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

`ConstraintBase.init`

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

`ConstraintBase.stop`

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

`ConstraintBase.onEnable`

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

`ConstraintBase.onDisable`

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

`ConstraintBase.onUpdate`

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

`ConstraintBase.onLateUpdate`

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

`ConstraintBase.onBeforeUpdate`

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

`ConstraintBase.onCompute`

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

`ConstraintBase.onGraphic`

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

`ConstraintBase.onParentChange`

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

`ConstraintBase.onAddChild`

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

`ConstraintBase.onRemoveChild`

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

`ConstraintBase.cloneTo`

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

`ConstraintBase.copyComponent`

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

`ConstraintBase.beforeDestroy`

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/physics/constraint/ConstraintBase.ts:50](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L50)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`ConstraintBase.start`

***

### wait()

> **wait**(): `Promise`\<[`btGeneric6DofConstraint`](../@orillusion/namespaces/Ammo/classes/btGeneric6DofConstraint.md)\>

Defined in: [packages/physics/constraint/ConstraintBase.ts:97](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L97)

Asynchronously retrieve the fully initialized constraint instance

#### Returns

`Promise`\<[`btGeneric6DofConstraint`](../@orillusion/namespaces/Ammo/classes/btGeneric6DofConstraint.md)\>

#### Inherited from

`ConstraintBase.wait`

***

### resetConstraint()

> **resetConstraint**(): `Promise`\<[`btGeneric6DofConstraint`](../@orillusion/namespaces/Ammo/classes/btGeneric6DofConstraint.md)\>

Defined in: [packages/physics/constraint/ConstraintBase.ts:105](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L105)

Reset the constraint: destroy the current constraint instance, recreate it, and return the new constraint instance

#### Returns

`Promise`\<[`btGeneric6DofConstraint`](../@orillusion/namespaces/Ammo/classes/btGeneric6DofConstraint.md)\>

#### Inherited from

`ConstraintBase.resetConstraint`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/physics/constraint/ConstraintBase.ts:127](https://github.com/orillusion/orillusion/blob/main/packages/physics/constraint/ConstraintBase.ts#L127)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`ConstraintBase.destroy`
