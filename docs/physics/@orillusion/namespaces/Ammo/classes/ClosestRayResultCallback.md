[**@orillusion/physics**](../../../../README.md)

***

# Class: ClosestRayResultCallback

Defined in: [packages/ammo/ammo.d.ts:174](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L174)

## Extends

- [`RayResultCallback`](RayResultCallback.md)

## Constructors

### Constructor

> **new ClosestRayResultCallback**(`from`, `to`): `ClosestRayResultCallback`

Defined in: [packages/ammo/ammo.d.ts:175](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L175)

#### Parameters

##### from

[`btVector3`](btVector3.md)

##### to

[`btVector3`](btVector3.md)

#### Returns

`ClosestRayResultCallback`

#### Overrides

[`RayResultCallback`](RayResultCallback.md).[`constructor`](RayResultCallback.md#constructor)

## Methods

### hasHit()

> **hasHit**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:164](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L164)

#### Returns

`boolean`

#### Inherited from

[`RayResultCallback`](RayResultCallback.md).[`hasHit`](RayResultCallback.md#hashit)

***

### get\_m\_collisionFilterGroup()

> **get\_m\_collisionFilterGroup**(): `number`

Defined in: [packages/ammo/ammo.d.ts:165](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L165)

#### Returns

`number`

#### Inherited from

[`RayResultCallback`](RayResultCallback.md).[`get_m_collisionFilterGroup`](RayResultCallback.md#get_m_collisionfiltergroup)

***

### set\_m\_collisionFilterGroup()

> **set\_m\_collisionFilterGroup**(`m_collisionFilterGroup`): `void`

Defined in: [packages/ammo/ammo.d.ts:166](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L166)

#### Parameters

##### m\_collisionFilterGroup

`number`

#### Returns

`void`

#### Inherited from

[`RayResultCallback`](RayResultCallback.md).[`set_m_collisionFilterGroup`](RayResultCallback.md#set_m_collisionfiltergroup)

***

### get\_m\_collisionFilterMask()

> **get\_m\_collisionFilterMask**(): `number`

Defined in: [packages/ammo/ammo.d.ts:167](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L167)

#### Returns

`number`

#### Inherited from

[`RayResultCallback`](RayResultCallback.md).[`get_m_collisionFilterMask`](RayResultCallback.md#get_m_collisionfiltermask)

***

### set\_m\_collisionFilterMask()

> **set\_m\_collisionFilterMask**(`m_collisionFilterMask`): `void`

Defined in: [packages/ammo/ammo.d.ts:168](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L168)

#### Parameters

##### m\_collisionFilterMask

`number`

#### Returns

`void`

#### Inherited from

[`RayResultCallback`](RayResultCallback.md).[`set_m_collisionFilterMask`](RayResultCallback.md#set_m_collisionfiltermask)

***

### get\_m\_closestHitFraction()

> **get\_m\_closestHitFraction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:169](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L169)

#### Returns

`number`

#### Inherited from

[`RayResultCallback`](RayResultCallback.md).[`get_m_closestHitFraction`](RayResultCallback.md#get_m_closesthitfraction)

***

### set\_m\_closestHitFraction()

> **set\_m\_closestHitFraction**(`m_closestHitFraction`): `void`

Defined in: [packages/ammo/ammo.d.ts:170](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L170)

#### Parameters

##### m\_closestHitFraction

`number`

#### Returns

`void`

#### Inherited from

[`RayResultCallback`](RayResultCallback.md).[`set_m_closestHitFraction`](RayResultCallback.md#set_m_closesthitfraction)

***

### get\_m\_collisionObject()

> **get\_m\_collisionObject**(): [`btCollisionObject`](btCollisionObject.md)

Defined in: [packages/ammo/ammo.d.ts:171](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L171)

#### Returns

[`btCollisionObject`](btCollisionObject.md)

#### Inherited from

[`RayResultCallback`](RayResultCallback.md).[`get_m_collisionObject`](RayResultCallback.md#get_m_collisionobject)

***

### set\_m\_collisionObject()

> **set\_m\_collisionObject**(`m_collisionObject`): `void`

Defined in: [packages/ammo/ammo.d.ts:172](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L172)

#### Parameters

##### m\_collisionObject

[`btCollisionObject`](btCollisionObject.md)

#### Returns

`void`

#### Inherited from

[`RayResultCallback`](RayResultCallback.md).[`set_m_collisionObject`](RayResultCallback.md#set_m_collisionobject)

***

### get\_m\_rayFromWorld()

> **get\_m\_rayFromWorld**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:176](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L176)

#### Returns

[`btVector3`](btVector3.md)

***

### set\_m\_rayFromWorld()

> **set\_m\_rayFromWorld**(`m_rayFromWorld`): `void`

Defined in: [packages/ammo/ammo.d.ts:177](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L177)

#### Parameters

##### m\_rayFromWorld

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### get\_m\_rayToWorld()

> **get\_m\_rayToWorld**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:178](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L178)

#### Returns

[`btVector3`](btVector3.md)

***

### set\_m\_rayToWorld()

> **set\_m\_rayToWorld**(`m_rayToWorld`): `void`

Defined in: [packages/ammo/ammo.d.ts:179](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L179)

#### Parameters

##### m\_rayToWorld

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### get\_m\_hitNormalWorld()

> **get\_m\_hitNormalWorld**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:180](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L180)

#### Returns

[`btVector3`](btVector3.md)

***

### set\_m\_hitNormalWorld()

> **set\_m\_hitNormalWorld**(`m_hitNormalWorld`): `void`

Defined in: [packages/ammo/ammo.d.ts:181](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L181)

#### Parameters

##### m\_hitNormalWorld

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### get\_m\_hitPointWorld()

> **get\_m\_hitPointWorld**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:182](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L182)

#### Returns

[`btVector3`](btVector3.md)

***

### set\_m\_hitPointWorld()

> **set\_m\_hitPointWorld**(`m_hitPointWorld`): `void`

Defined in: [packages/ammo/ammo.d.ts:183](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L183)

#### Parameters

##### m\_hitPointWorld

[`btVector3`](btVector3.md)

#### Returns

`void`
