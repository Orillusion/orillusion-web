# Class: btKinematicCharacterController

[Ammo](../modules/Ammo.md).btKinematicCharacterController

## Hierarchy

- [`btActionInterface`](Ammo.btActionInterface.md)

  ↳ **`btKinematicCharacterController`**

### Constructors

- [constructor](Ammo.btKinematicCharacterController.md#constructor)

### Methods

- [updateAction](Ammo.btKinematicCharacterController.md#updateaction)
- [setUpAxis](Ammo.btKinematicCharacterController.md#setupaxis)
- [setWalkDirection](Ammo.btKinematicCharacterController.md#setwalkdirection)
- [setVelocityForTimeInterval](Ammo.btKinematicCharacterController.md#setvelocityfortimeinterval)
- [warp](Ammo.btKinematicCharacterController.md#warp)
- [preStep](Ammo.btKinematicCharacterController.md#prestep)
- [playerStep](Ammo.btKinematicCharacterController.md#playerstep)
- [setFallSpeed](Ammo.btKinematicCharacterController.md#setfallspeed)
- [setJumpSpeed](Ammo.btKinematicCharacterController.md#setjumpspeed)
- [setMaxJumpHeight](Ammo.btKinematicCharacterController.md#setmaxjumpheight)
- [canJump](Ammo.btKinematicCharacterController.md#canjump)
- [jump](Ammo.btKinematicCharacterController.md#jump)
- [setGravity](Ammo.btKinematicCharacterController.md#setgravity)
- [getGravity](Ammo.btKinematicCharacterController.md#getgravity)
- [setMaxSlope](Ammo.btKinematicCharacterController.md#setmaxslope)
- [getMaxSlope](Ammo.btKinematicCharacterController.md#getmaxslope)
- [getGhostObject](Ammo.btKinematicCharacterController.md#getghostobject)
- [setUseGhostSweepTest](Ammo.btKinematicCharacterController.md#setuseghostsweeptest)
- [onGround](Ammo.btKinematicCharacterController.md#onground)
- [setUpInterpolate](Ammo.btKinematicCharacterController.md#setupinterpolate)

## Constructors

### constructor

• **new btKinematicCharacterController**(`ghostObject`, `convexShape`, `stepHeight`, `upAxis?`): [`btKinematicCharacterController`](Ammo.btKinematicCharacterController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ghostObject` | [`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md) |
| `convexShape` | [`btConvexShape`](Ammo.btConvexShape.md) |
| `stepHeight` | `number` |
| `upAxis?` | `number` |

#### Returns

[`btKinematicCharacterController`](Ammo.btKinematicCharacterController.md)

#### Overrides

[btActionInterface](Ammo.btActionInterface.md).[constructor](Ammo.btActionInterface.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:821](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L821)

## Methods

### updateAction

▸ **updateAction**(`collisionWorld`, `deltaTimeStep`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionWorld` | [`btCollisionWorld`](Ammo.btCollisionWorld.md) |
| `deltaTimeStep` | `number` |

#### Returns

`void`

#### Inherited from

[btActionInterface](Ammo.btActionInterface.md).[updateAction](Ammo.btActionInterface.md#updateaction)

#### Defined in

[packages/ammo/ammo.d.ts:818](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L818)

___

### setUpAxis

▸ **setUpAxis**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:822](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L822)

___

### setWalkDirection

▸ **setWalkDirection**(`walkDirection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `walkDirection` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:823](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L823)

___

### setVelocityForTimeInterval

▸ **setVelocityForTimeInterval**(`velocity`, `timeInterval`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `velocity` | [`btVector3`](Ammo.btVector3.md) |
| `timeInterval` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:824](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L824)

___

### warp

▸ **warp**(`origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:825](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L825)

___

### preStep

▸ **preStep**(`collisionWorld`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionWorld` | [`btCollisionWorld`](Ammo.btCollisionWorld.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:826](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L826)

___

### playerStep

▸ **playerStep**(`collisionWorld`, `dt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionWorld` | [`btCollisionWorld`](Ammo.btCollisionWorld.md) |
| `dt` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:827](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L827)

___

### setFallSpeed

▸ **setFallSpeed**(`fallSpeed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallSpeed` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:828](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L828)

___

### setJumpSpeed

▸ **setJumpSpeed**(`jumpSpeed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jumpSpeed` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:829](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L829)

___

### setMaxJumpHeight

▸ **setMaxJumpHeight**(`maxJumpHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxJumpHeight` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:830](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L830)

___

### canJump

▸ **canJump**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:831](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L831)

___

### jump

▸ **jump**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:832](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L832)

___

### setGravity

▸ **setGravity**(`gravity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gravity` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:833](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L833)

___

### getGravity

▸ **getGravity**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:834](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L834)

___

### setMaxSlope

▸ **setMaxSlope**(`slopeRadians`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slopeRadians` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:835](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L835)

___

### getMaxSlope

▸ **getMaxSlope**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:836](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L836)

___

### getGhostObject

▸ **getGhostObject**(): [`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md)

#### Returns

[`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md)

#### Defined in

[packages/ammo/ammo.d.ts:837](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L837)

___

### setUseGhostSweepTest

▸ **setUseGhostSweepTest**(`useGhostObjectSweepTest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `useGhostObjectSweepTest` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:838](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L838)

___

### onGround

▸ **onGround**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:839](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L839)

___

### setUpInterpolate

▸ **setUpInterpolate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:840](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L840)
