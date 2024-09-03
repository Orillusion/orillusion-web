# Class: ClosestConvexResultCallback

[Ammo](../modules/Ammo.md).ClosestConvexResultCallback

## Hierarchy

- [`ConvexResultCallback`](Ammo.ConvexResultCallback.md)

  ↳ **`ClosestConvexResultCallback`**

### Constructors

- [constructor](Ammo.ClosestConvexResultCallback.md#constructor)

### Methods

- [hasHit](Ammo.ClosestConvexResultCallback.md#hashit)
- [get\_m\_collisionFilterGroup](Ammo.ClosestConvexResultCallback.md#get_m_collisionfiltergroup)
- [set\_m\_collisionFilterGroup](Ammo.ClosestConvexResultCallback.md#set_m_collisionfiltergroup)
- [get\_m\_collisionFilterMask](Ammo.ClosestConvexResultCallback.md#get_m_collisionfiltermask)
- [set\_m\_collisionFilterMask](Ammo.ClosestConvexResultCallback.md#set_m_collisionfiltermask)
- [get\_m\_closestHitFraction](Ammo.ClosestConvexResultCallback.md#get_m_closesthitfraction)
- [set\_m\_closestHitFraction](Ammo.ClosestConvexResultCallback.md#set_m_closesthitfraction)
- [get\_m\_convexFromWorld](Ammo.ClosestConvexResultCallback.md#get_m_convexfromworld)
- [set\_m\_convexFromWorld](Ammo.ClosestConvexResultCallback.md#set_m_convexfromworld)
- [get\_m\_convexToWorld](Ammo.ClosestConvexResultCallback.md#get_m_convextoworld)
- [set\_m\_convexToWorld](Ammo.ClosestConvexResultCallback.md#set_m_convextoworld)
- [get\_m\_hitNormalWorld](Ammo.ClosestConvexResultCallback.md#get_m_hitnormalworld)
- [set\_m\_hitNormalWorld](Ammo.ClosestConvexResultCallback.md#set_m_hitnormalworld)
- [get\_m\_hitPointWorld](Ammo.ClosestConvexResultCallback.md#get_m_hitpointworld)
- [set\_m\_hitPointWorld](Ammo.ClosestConvexResultCallback.md#set_m_hitpointworld)

## Constructors

### constructor

• **new ClosestConvexResultCallback**(`convexFromWorld`, `convexToWorld`): [`ClosestConvexResultCallback`](Ammo.ClosestConvexResultCallback.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `convexFromWorld` | [`btVector3`](Ammo.btVector3.md) |
| `convexToWorld` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`ClosestConvexResultCallback`](Ammo.ClosestConvexResultCallback.md)

#### Overrides

[ConvexResultCallback](Ammo.ConvexResultCallback.md).[constructor](Ammo.ConvexResultCallback.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:262](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L262)

## Methods

### hasHit

▸ **hasHit**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ConvexResultCallback](Ammo.ConvexResultCallback.md).[hasHit](Ammo.ConvexResultCallback.md#hashit)

#### Defined in

[packages/ammo/ammo.d.ts:253](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L253)

___

### get\_m\_collisionFilterGroup

▸ **get_m_collisionFilterGroup**(): `number`

#### Returns

`number`

#### Inherited from

[ConvexResultCallback](Ammo.ConvexResultCallback.md).[get_m_collisionFilterGroup](Ammo.ConvexResultCallback.md#get_m_collisionfiltergroup)

#### Defined in

[packages/ammo/ammo.d.ts:254](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L254)

___

### set\_m\_collisionFilterGroup

▸ **set_m_collisionFilterGroup**(`m_collisionFilterGroup`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_collisionFilterGroup` | `number` |

#### Returns

`void`

#### Inherited from

[ConvexResultCallback](Ammo.ConvexResultCallback.md).[set_m_collisionFilterGroup](Ammo.ConvexResultCallback.md#set_m_collisionfiltergroup)

#### Defined in

[packages/ammo/ammo.d.ts:255](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L255)

___

### get\_m\_collisionFilterMask

▸ **get_m_collisionFilterMask**(): `number`

#### Returns

`number`

#### Inherited from

[ConvexResultCallback](Ammo.ConvexResultCallback.md).[get_m_collisionFilterMask](Ammo.ConvexResultCallback.md#get_m_collisionfiltermask)

#### Defined in

[packages/ammo/ammo.d.ts:256](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L256)

___

### set\_m\_collisionFilterMask

▸ **set_m_collisionFilterMask**(`m_collisionFilterMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_collisionFilterMask` | `number` |

#### Returns

`void`

#### Inherited from

[ConvexResultCallback](Ammo.ConvexResultCallback.md).[set_m_collisionFilterMask](Ammo.ConvexResultCallback.md#set_m_collisionfiltermask)

#### Defined in

[packages/ammo/ammo.d.ts:257](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L257)

___

### get\_m\_closestHitFraction

▸ **get_m_closestHitFraction**(): `number`

#### Returns

`number`

#### Inherited from

[ConvexResultCallback](Ammo.ConvexResultCallback.md).[get_m_closestHitFraction](Ammo.ConvexResultCallback.md#get_m_closesthitfraction)

#### Defined in

[packages/ammo/ammo.d.ts:258](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L258)

___

### set\_m\_closestHitFraction

▸ **set_m_closestHitFraction**(`m_closestHitFraction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_closestHitFraction` | `number` |

#### Returns

`void`

#### Inherited from

[ConvexResultCallback](Ammo.ConvexResultCallback.md).[set_m_closestHitFraction](Ammo.ConvexResultCallback.md#set_m_closesthitfraction)

#### Defined in

[packages/ammo/ammo.d.ts:259](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L259)

___

### get\_m\_convexFromWorld

▸ **get_m_convexFromWorld**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:263](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L263)

___

### set\_m\_convexFromWorld

▸ **set_m_convexFromWorld**(`m_convexFromWorld`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_convexFromWorld` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:264](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L264)

___

### get\_m\_convexToWorld

▸ **get_m_convexToWorld**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:265](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L265)

___

### set\_m\_convexToWorld

▸ **set_m_convexToWorld**(`m_convexToWorld`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_convexToWorld` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:266](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L266)

___

### get\_m\_hitNormalWorld

▸ **get_m_hitNormalWorld**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:267](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L267)

___

### set\_m\_hitNormalWorld

▸ **set_m_hitNormalWorld**(`m_hitNormalWorld`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_hitNormalWorld` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:268](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L268)

___

### get\_m\_hitPointWorld

▸ **get_m_hitPointWorld**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:269](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L269)

___

### set\_m\_hitPointWorld

▸ **set_m_hitPointWorld**(`m_hitPointWorld`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_hitPointWorld` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:270](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L270)
