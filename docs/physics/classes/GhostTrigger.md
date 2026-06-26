[**@orillusion/physics**](../README.md)

***

# Class: GhostTrigger

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L11)

The GhostTrigger Component represents a non-physical trigger in the physics world.
It uses a ghost object to detect overlapping collisions without producing physical responses.

## Extends

- `ComponentBase`

## Constructors

### Constructor

> **new GhostTrigger**(): `GhostTrigger`

#### Returns

`GhostTrigger`

#### Inherited from

`ComponentBase.constructor`

## Properties

### object3D

> **object3D**: `Object3D` = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

`ComponentBase.object3D`

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

`ComponentBase.isDestroyed`

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

`ComponentBase.visibleLayer`

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

`ComponentBase.eventDispatcher`

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

`ComponentBase.isStart`

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

`ComponentBase.transform`

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

`ComponentBase.enable`

***

### shape

#### Get Signature

> **get** **shape**(): [`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L19)

##### Returns

[`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

#### Set Signature

> **set** **shape**(`value`): `void`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L22)

##### Parameters

###### value

[`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

##### Returns

`void`

***

### userIndex

#### Get Signature

> **get** **userIndex**(): `number`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:31](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L31)

##### Returns

`number`

#### Set Signature

> **set** **userIndex**(`value`): `void`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:35](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L35)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### collisionFlags

#### Get Signature

> **get** **collisionFlags**(): `number`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:45](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L45)

Gets the collision flags

##### Returns

`number`

***

### ghostObject

#### Get Signature

> **get** **ghostObject**(): [`btPairCachingGhostObject`](../@orillusion/namespaces/Ammo/classes/btPairCachingGhostObject.md)

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:129](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L129)

Gets the ghost object

##### Returns

[`btPairCachingGhostObject`](../@orillusion/namespaces/Ammo/classes/btPairCachingGhostObject.md)

***

### enableCollisionEvent

#### Get Signature

> **get** **enableCollisionEvent**(): `boolean`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:144](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L144)

Enable/disable collision callbacks

##### Returns

`boolean`

#### Set Signature

> **set** **enableCollisionEvent**(`value`): `void`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:147](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L147)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### collisionEvent

#### Get Signature

> **get** **collisionEvent**(): (`contactPoint`, `selfBody`, `otherBody`) => `void`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:155](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L155)

Collision event callback

##### Returns

(`contactPoint`, `selfBody`, `otherBody`) => `void`

#### Set Signature

> **set** **collisionEvent**(`callback`): `void`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:158](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L158)

##### Parameters

###### callback

(`contactPoint`, `selfBody`, `otherBody`) => `void`

##### Returns

`void`

## Methods

### createAndAddGhostObject()

> `static` **createAndAddGhostObject**(`shape`, `position`, `rotation`, `collisionFlags?`, `userIndex?`): [`btPairCachingGhostObject`](../@orillusion/namespaces/Ammo/classes/btPairCachingGhostObject.md)

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:103](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L103)

Creates a ghost object and adds it to the physics world.

#### Parameters

##### shape

[`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

The collision shape.

##### position

`Vector3`

The position of the ghost object.

##### rotation

`Vector3`

The rotation of the ghost object.

##### collisionFlags?

`number`

Optional parameter, collision flags; defaults to 4 `NO_CONTACT_RESPONSE`, meaning the object does not participate in collision response but still triggers collision events.

##### userIndex?

`number`

Optional parameter, user index that can serve as an identifier for the physics object.

#### Returns

[`btPairCachingGhostObject`](../@orillusion/namespaces/Ammo/classes/btPairCachingGhostObject.md)

The newly created Ammo.btPairCachingGhostObject.

***

### init()

> **init**(`param?`): `void`

Defined in: [src/components/ComponentBase.ts:161](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L161)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Inherited from

`ComponentBase.init`

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

`ComponentBase.stop`

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

`ComponentBase.onEnable`

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

`ComponentBase.onDisable`

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

`ComponentBase.onUpdate`

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

`ComponentBase.onLateUpdate`

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

`ComponentBase.onBeforeUpdate`

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

`ComponentBase.onCompute`

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

`ComponentBase.onGraphic`

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

`ComponentBase.onParentChange`

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

`ComponentBase.onAddChild`

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

`ComponentBase.onRemoveChild`

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

`ComponentBase.cloneTo`

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

`ComponentBase.copyComponent`

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

`ComponentBase.beforeDestroy`

***

### addCollisionFlag()

> **addCollisionFlag**(`value`): `void`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:52](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L52)

Adds a single collision flag

#### Parameters

##### value

[`CollisionFlags`](../enumerations/CollisionFlags.md)

#### Returns

`void`

***

### removeCollisionFlag()

> **removeCollisionFlag**(`value`): `void`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:59](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L59)

Removes a single collision flag

#### Parameters

##### value

[`CollisionFlags`](../enumerations/CollisionFlags.md)

#### Returns

`void`

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:64](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L64)

#### Returns

`Promise`\<`void`\>

#### Overrides

`ComponentBase.start`

***

### wait()

> **wait**(): `Promise`\<[`btPairCachingGhostObject`](../@orillusion/namespaces/Ammo/classes/btPairCachingGhostObject.md)\>

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:136](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L136)

Asynchronously retrieves the fully initialized ghost object

#### Returns

`Promise`\<[`btPairCachingGhostObject`](../@orillusion/namespaces/Ammo/classes/btPairCachingGhostObject.md)\>

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/physics/rigidbody/GhostTrigger.ts:162](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/GhostTrigger.ts#L162)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

`ComponentBase.destroy`
