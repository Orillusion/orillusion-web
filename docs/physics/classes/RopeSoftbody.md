[**@orillusion/physics**](../README.md)

***

# Class: RopeSoftbody

Defined in: [packages/physics/softbody/RopeSoftbody.ts:7](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L7)

## Extends

- `SoftbodyBase`

## Constructors

### Constructor

> **new RopeSoftbody**(): `RopeSoftbody`

#### Returns

`RopeSoftbody`

#### Inherited from

`SoftbodyBase.constructor`

## Properties

### object3D

> **object3D**: `Object3D` = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

`SoftbodyBase.object3D`

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

`SoftbodyBase.isDestroyed`

***

### fixeds

> **fixeds**: `number` = `0`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L13)

Fix options for the two ends of the rope. Default is `0`.

`0`: neither end fixed, `1`: head fixed, `2`: tail fixed, `3`: both ends fixed.

***

### fixNodeIndices

> **fixNodeIndices**: `number`[] = `[]`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:18](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L18)

Indices of fixed nodes. Serves the same purpose as `fixeds`, but allows arbitrary nodes to be pinned individually.

***

### elasticity

> **elasticity**: `number` = `0.5`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:23](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L23)

Rope elasticity. Larger values mean less elasticity. Typically in the range 0 to 1. Default is `0.5`.

***

### anchorRigidbodyHead

> **anchorRigidbodyHead**: [`Rigidbody`](Rigidbody.md)

Defined in: [packages/physics/softbody/RopeSoftbody.ts:28](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L28)

Rigid body anchored at the head of the rope. When set, the head of the rope is placed at the rigid body's position.

***

### anchorRigidbodyTail

> **anchorRigidbodyTail**: [`Rigidbody`](Rigidbody.md)

Defined in: [packages/physics/softbody/RopeSoftbody.ts:33](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L33)

Rigid body anchored at the tail of the rope. When set, the tail of the rope is placed at the rigid body's position.

***

### anchorOffsetHead

> **anchorOffsetHead**: `Vector3`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:38](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L38)

Anchor offset for the head, representing the relative position between the head and its anchored rigid body.

***

### anchorOffsetTail

> **anchorOffsetTail**: `Vector3`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:43](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L43)

Anchor offset for the tail, representing the relative position between the tail and its anchored rigid body.

***

### mass

> **mass**: `number` = `1`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L17)

Total mass of the soft body. Default value is `1`

#### Inherited from

`SoftbodyBase.mass`

***

### margin

> **margin**: `number` = `0.15`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L22)

Collision margin. Default value is `0.15`

#### Inherited from

`SoftbodyBase.margin`

***

### group

> **group**: `number` = `1`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:27](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L27)

Collision group. Default value is `1`

#### Inherited from

`SoftbodyBase.group`

***

### mask

> **mask**: `number` = `-1`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:32](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L32)

Collision mask. Default value is `-1`

#### Inherited from

`SoftbodyBase.mask`

***

### influence

> **influence**: `number` = `1`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:37](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L37)

Anchor influence. The higher the influence, the more closely the soft body node follows the rigid body's motion. Typically this value is between 0 and 1. Default value is `1`.

#### Inherited from

`SoftbodyBase.influence`

***

### disableCollision

> **disableCollision**: `boolean` = `false`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:42](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L42)

Whether to disable collisions with the anchored rigid body. Default value is `false`.

#### Inherited from

`SoftbodyBase.disableCollision`

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

`SoftbodyBase.visibleLayer`

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

`SoftbodyBase.eventDispatcher`

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

`SoftbodyBase.isStart`

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

`SoftbodyBase.transform`

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

`SoftbodyBase.enable`

***

### activationState

#### Set Signature

> **set** **activationState**(`value`): `void`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:47](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L47)

Set the soft body activation state.

##### Parameters

###### value

[`ActivationState`](../enumerations/ActivationState.md)

##### Returns

`void`

#### Inherited from

`SoftbodyBase.activationState`

***

### btBodyInited

#### Get Signature

> **get** **btBodyInited**(): `boolean`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:51](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L51)

##### Returns

`boolean`

#### Inherited from

`SoftbodyBase.btBodyInited`

***

### btSoftBody

#### Get Signature

> **get** **btSoftBody**(): [`btSoftBody`](../@orillusion/namespaces/Ammo/classes/btSoftBody.md)

Defined in: [packages/physics/softbody/SoftbodyBase.ts:55](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L55)

##### Returns

[`btSoftBody`](../@orillusion/namespaces/Ammo/classes/btSoftBody.md)

#### Inherited from

`SoftbodyBase.btSoftBody`

## Methods

### buildRopeGeometry()

> `static` **buildRopeGeometry**(`segmentCount`, `startPos`, `endPos`): `GeometryBase`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:163](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L163)

Build a rope (line) geometry. Note: when attaching a material, the `topology` must be set to `'line-list'`.

#### Parameters

##### segmentCount

`number`

Number of segments

##### startPos

`Vector3`

Start position

##### endPos

`Vector3`

End position

#### Returns

`GeometryBase`

GeometryBase

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

`SoftbodyBase.stop`

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

`SoftbodyBase.onEnable`

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

`SoftbodyBase.onDisable`

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

`SoftbodyBase.onLateUpdate`

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

`SoftbodyBase.onBeforeUpdate`

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

`SoftbodyBase.onCompute`

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

`SoftbodyBase.onGraphic`

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

`SoftbodyBase.onParentChange`

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

`SoftbodyBase.onAddChild`

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

`SoftbodyBase.onRemoveChild`

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

`SoftbodyBase.cloneTo`

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

`SoftbodyBase.copyComponent`

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

`SoftbodyBase.beforeDestroy`

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/physics/softbody/RopeSoftbody.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L48)

#### Returns

`Promise`\<`void`\>

#### Overrides

`SoftbodyBase.start`

***

### setElasticity()

> **setElasticity**(`value`): `void`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:110](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L110)

set rope elasticity to 0~1

#### Parameters

##### value

`number`

#### Returns

`void`

***

### clearAnchors()

> **clearAnchors**(`isPopBack?`): `void`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:123](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L123)

Clear anchors. The soft body will detach from the rigid bodies it was attached to.

#### Parameters

##### isPopBack?

`boolean`

If true, removes only one anchor. When both head and tail anchors exist, the tail anchor is removed.

#### Returns

`void`

***

### onUpdate()

> **onUpdate**(): `void`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:131](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L131)

#### Returns

`void`

#### Overrides

`SoftbodyBase.onUpdate`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/physics/softbody/RopeSoftbody.ts:150](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/RopeSoftbody.ts#L150)

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

`SoftbodyBase.destroy`

***

### init()

> **init**(): `void`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:59](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L59)

#### Returns

`void`

#### Inherited from

`SoftbodyBase.init`

***

### wait()

> **wait**(): `Promise`\<[`btSoftBody`](../@orillusion/namespaces/Ammo/classes/btSoftBody.md)\>

Defined in: [packages/physics/softbody/SoftbodyBase.ts:95](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L95)

Asynchronously retrieves the fully initialized soft body instance.

#### Returns

`Promise`\<[`btSoftBody`](../@orillusion/namespaces/Ammo/classes/btSoftBody.md)\>

#### Inherited from

`SoftbodyBase.wait`

***

### appendAnchor()

> **appendAnchor**(`nodeIndex`, `targetRigidbody`, `disCollision?`, `influence?`): `void`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:107](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L107)

Wraps the native soft body's `appendAnchor` method to anchor a node to a rigid body.

#### Parameters

##### nodeIndex

`number`

Index of the node to anchor.

##### targetRigidbody

[`Rigidbody`](Rigidbody.md)

The rigid body to anchor to.

##### disCollision?

`boolean`

Optional. Disable collisions if true.

##### influence?

`number`

Optional. Anchor's influence.

#### Returns

`void`

#### Inherited from

`SoftbodyBase.appendAnchor`

***

### applyFixedNodes()

> **applyFixedNodes**(`fixedNodeIndices`): `void`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:121](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L121)

Fix soft body nodes.

#### Parameters

##### fixedNodeIndices

`number`[]

Indices of the nodes to fix.

#### Returns

`void`

#### Inherited from

`SoftbodyBase.applyFixedNodes`

***

### clearFixedNodes()

> **clearFixedNodes**(`index?`): `void`

Defined in: [packages/physics/softbody/SoftbodyBase.ts:140](https://github.com/orillusion/orillusion/blob/main/packages/physics/softbody/SoftbodyBase.ts#L140)

Clear fixed nodes

#### Parameters

##### index?

`number`

Index of the node to clear. If not provided, clears all nodes.

#### Returns

`void`

#### Inherited from

`SoftbodyBase.clearFixedNodes`
