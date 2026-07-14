[**@orillusion/physics**](../../../../README.md)

***

# Class: ClosestConvexResultCallback

Defined in: [packages/ammo/ammo.d.ts:261](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L261)

## Extends

- [`ConvexResultCallback`](ConvexResultCallback.md)

## Constructors

### Constructor

> **new ClosestConvexResultCallback**(`convexFromWorld`, `convexToWorld`): `ClosestConvexResultCallback`

Defined in: [packages/ammo/ammo.d.ts:262](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L262)

#### Parameters

##### convexFromWorld

[`btVector3`](btVector3.md)

##### convexToWorld

[`btVector3`](btVector3.md)

#### Returns

`ClosestConvexResultCallback`

#### Overrides

[`ConvexResultCallback`](ConvexResultCallback.md).[`constructor`](ConvexResultCallback.md#constructor)

## Methods

### hasHit()

> **hasHit**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:253](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L253)

#### Returns

`boolean`

#### Inherited from

[`ConvexResultCallback`](ConvexResultCallback.md).[`hasHit`](ConvexResultCallback.md#hashit)

***

### get\_m\_collisionFilterGroup()

> **get\_m\_collisionFilterGroup**(): `number`

Defined in: [packages/ammo/ammo.d.ts:254](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L254)

#### Returns

`number`

#### Inherited from

[`ConvexResultCallback`](ConvexResultCallback.md).[`get_m_collisionFilterGroup`](ConvexResultCallback.md#get_m_collisionfiltergroup)

***

### set\_m\_collisionFilterGroup()

> **set\_m\_collisionFilterGroup**(`m_collisionFilterGroup`): `void`

Defined in: [packages/ammo/ammo.d.ts:255](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L255)

#### Parameters

##### m\_collisionFilterGroup

`number`

#### Returns

`void`

#### Inherited from

[`ConvexResultCallback`](ConvexResultCallback.md).[`set_m_collisionFilterGroup`](ConvexResultCallback.md#set_m_collisionfiltergroup)

***

### get\_m\_collisionFilterMask()

> **get\_m\_collisionFilterMask**(): `number`

Defined in: [packages/ammo/ammo.d.ts:256](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L256)

#### Returns

`number`

#### Inherited from

[`ConvexResultCallback`](ConvexResultCallback.md).[`get_m_collisionFilterMask`](ConvexResultCallback.md#get_m_collisionfiltermask)

***

### set\_m\_collisionFilterMask()

> **set\_m\_collisionFilterMask**(`m_collisionFilterMask`): `void`

Defined in: [packages/ammo/ammo.d.ts:257](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L257)

#### Parameters

##### m\_collisionFilterMask

`number`

#### Returns

`void`

#### Inherited from

[`ConvexResultCallback`](ConvexResultCallback.md).[`set_m_collisionFilterMask`](ConvexResultCallback.md#set_m_collisionfiltermask)

***

### get\_m\_closestHitFraction()

> **get\_m\_closestHitFraction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:258](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L258)

#### Returns

`number`

#### Inherited from

[`ConvexResultCallback`](ConvexResultCallback.md).[`get_m_closestHitFraction`](ConvexResultCallback.md#get_m_closesthitfraction)

***

### set\_m\_closestHitFraction()

> **set\_m\_closestHitFraction**(`m_closestHitFraction`): `void`

Defined in: [packages/ammo/ammo.d.ts:259](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L259)

#### Parameters

##### m\_closestHitFraction

`number`

#### Returns

`void`

#### Inherited from

[`ConvexResultCallback`](ConvexResultCallback.md).[`set_m_closestHitFraction`](ConvexResultCallback.md#set_m_closesthitfraction)

***

### get\_m\_convexFromWorld()

> **get\_m\_convexFromWorld**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:263](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L263)

#### Returns

[`btVector3`](btVector3.md)

***

### set\_m\_convexFromWorld()

> **set\_m\_convexFromWorld**(`m_convexFromWorld`): `void`

Defined in: [packages/ammo/ammo.d.ts:264](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L264)

#### Parameters

##### m\_convexFromWorld

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### get\_m\_convexToWorld()

> **get\_m\_convexToWorld**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:265](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L265)

#### Returns

[`btVector3`](btVector3.md)

***

### set\_m\_convexToWorld()

> **set\_m\_convexToWorld**(`m_convexToWorld`): `void`

Defined in: [packages/ammo/ammo.d.ts:266](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L266)

#### Parameters

##### m\_convexToWorld

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### get\_m\_hitNormalWorld()

> **get\_m\_hitNormalWorld**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:267](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L267)

#### Returns

[`btVector3`](btVector3.md)

***

### set\_m\_hitNormalWorld()

> **set\_m\_hitNormalWorld**(`m_hitNormalWorld`): `void`

Defined in: [packages/ammo/ammo.d.ts:268](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L268)

#### Parameters

##### m\_hitNormalWorld

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### get\_m\_hitPointWorld()

> **get\_m\_hitPointWorld**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:269](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L269)

#### Returns

[`btVector3`](btVector3.md)

***

### set\_m\_hitPointWorld()

> **set\_m\_hitPointWorld**(`m_hitPointWorld`): `void`

Defined in: [packages/ammo/ammo.d.ts:270](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L270)

#### Parameters

##### m\_hitPointWorld

[`btVector3`](btVector3.md)

#### Returns

`void`
