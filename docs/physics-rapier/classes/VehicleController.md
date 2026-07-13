[**@orillusion/physics-rapier**](../README.md)

***

# Class: VehicleController

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:39](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L39)

Vehicle controller — Rapier-only. Replaces the bare `btRaycastVehicle`
usage in the ammo plugin's car sample.

This component must be added to the same Object3D as a `Rigidbody`
(the chassis); it auto-discovers the chassis body via `wait()`.

## Extends

- `ComponentBase`

## Constructors

### Constructor

> **new VehicleController**(): `VehicleController`

#### Returns

`VehicleController`

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

***

### indexUpAxis

> **indexUpAxis**: `number` = `1`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L48)

Up axis index (0=X, 1=Y, 2=Z). Default 1 (+Y).

***

### indexForwardAxis

> **indexForwardAxis**: `number` = `2`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:50](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L50)

Forward axis index (0=X, 1=Y, 2=Z). Default 2 (+Z).

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

### native

#### Get Signature

> **get** **native**(): `DynamicRayCastVehicleController`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:144](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L144)

##### Returns

`DynamicRayCastVehicleController`

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

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:52](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L52)

#### Returns

`Promise`\<`void`\>

#### Overrides

`ComponentBase.start`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:73](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L73)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

`ComponentBase.destroy`

***

### addWheel()

> **addWheel**(`opts`): `void`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:86](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L86)

Append a wheel. Can be called pre- or post-start.

#### Parameters

##### opts

[`WheelOptions`](../interfaces/WheelOptions.md)

#### Returns

`void`

***

### setEngineForce()

> **setEngineForce**(`force`, `wheelIdx`): `void`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:112](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L112)

#### Parameters

##### force

`number`

##### wheelIdx

`number`

#### Returns

`void`

***

### setBrake()

> **setBrake**(`brake`, `wheelIdx`): `void`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:116](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L116)

#### Parameters

##### brake

`number`

##### wheelIdx

`number`

#### Returns

`void`

***

### setSteering()

> **setSteering**(`angle`, `wheelIdx`): `void`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:120](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L120)

#### Parameters

##### angle

`number`

##### wheelIdx

`number`

#### Returns

`void`

***

### numWheels()

> **numWheels**(): `number`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:124](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L124)

#### Returns

`number`

***

### wheelInContact()

> **wheelInContact**(`i`): `boolean`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:128](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L128)

#### Parameters

##### i

`number`

#### Returns

`boolean`

***

### wheelChassisConnectionPoint()

> **wheelChassisConnectionPoint**(`i`): `Vector3`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:132](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L132)

#### Parameters

##### i

`number`

#### Returns

`Vector3`

***

### currentSpeedKmHour()

> **currentSpeedKmHour**(): `number`

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:138](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L138)

Current vehicle speed in km/h. Mirrors ammo's `getCurrentSpeedKmHour`.

#### Returns

`number`

***

### wait()

> **wait**(): `Promise`\<`void`\>

Defined in: [packages/physics-rapier/vehicle/VehicleController.ts:142](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/vehicle/VehicleController.ts#L142)

#### Returns

`Promise`\<`void`\>
