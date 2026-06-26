[**@orillusion/physics**](../../../../README.md)

***

# Class: btKinematicCharacterController

Defined in: [packages/ammo/ammo.d.ts:820](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L820)

## Extends

- [`btActionInterface`](btActionInterface.md)

## Constructors

### Constructor

> **new btKinematicCharacterController**(`ghostObject`, `convexShape`, `stepHeight`, `upAxis?`): `btKinematicCharacterController`

Defined in: [packages/ammo/ammo.d.ts:821](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L821)

#### Parameters

##### ghostObject

[`btPairCachingGhostObject`](btPairCachingGhostObject.md)

##### convexShape

[`btConvexShape`](btConvexShape.md)

##### stepHeight

`number`

##### upAxis?

`number`

#### Returns

`btKinematicCharacterController`

#### Overrides

[`btActionInterface`](btActionInterface.md).[`constructor`](btActionInterface.md#constructor)

## Methods

### updateAction()

> **updateAction**(`collisionWorld`, `deltaTimeStep`): `void`

Defined in: [packages/ammo/ammo.d.ts:818](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L818)

#### Parameters

##### collisionWorld

[`btCollisionWorld`](btCollisionWorld.md)

##### deltaTimeStep

`number`

#### Returns

`void`

#### Inherited from

[`btActionInterface`](btActionInterface.md).[`updateAction`](btActionInterface.md#updateaction)

***

### setUpAxis()

> **setUpAxis**(`axis`): `void`

Defined in: [packages/ammo/ammo.d.ts:822](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L822)

#### Parameters

##### axis

`number`

#### Returns

`void`

***

### setWalkDirection()

> **setWalkDirection**(`walkDirection`): `void`

Defined in: [packages/ammo/ammo.d.ts:823](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L823)

#### Parameters

##### walkDirection

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### setVelocityForTimeInterval()

> **setVelocityForTimeInterval**(`velocity`, `timeInterval`): `void`

Defined in: [packages/ammo/ammo.d.ts:824](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L824)

#### Parameters

##### velocity

[`btVector3`](btVector3.md)

##### timeInterval

`number`

#### Returns

`void`

***

### warp()

> **warp**(`origin`): `void`

Defined in: [packages/ammo/ammo.d.ts:825](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L825)

#### Parameters

##### origin

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### preStep()

> **preStep**(`collisionWorld`): `void`

Defined in: [packages/ammo/ammo.d.ts:826](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L826)

#### Parameters

##### collisionWorld

[`btCollisionWorld`](btCollisionWorld.md)

#### Returns

`void`

***

### playerStep()

> **playerStep**(`collisionWorld`, `dt`): `void`

Defined in: [packages/ammo/ammo.d.ts:827](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L827)

#### Parameters

##### collisionWorld

[`btCollisionWorld`](btCollisionWorld.md)

##### dt

`number`

#### Returns

`void`

***

### setFallSpeed()

> **setFallSpeed**(`fallSpeed`): `void`

Defined in: [packages/ammo/ammo.d.ts:828](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L828)

#### Parameters

##### fallSpeed

`number`

#### Returns

`void`

***

### setJumpSpeed()

> **setJumpSpeed**(`jumpSpeed`): `void`

Defined in: [packages/ammo/ammo.d.ts:829](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L829)

#### Parameters

##### jumpSpeed

`number`

#### Returns

`void`

***

### setMaxJumpHeight()

> **setMaxJumpHeight**(`maxJumpHeight`): `void`

Defined in: [packages/ammo/ammo.d.ts:830](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L830)

#### Parameters

##### maxJumpHeight

`number`

#### Returns

`void`

***

### canJump()

> **canJump**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:831](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L831)

#### Returns

`boolean`

***

### jump()

> **jump**(): `void`

Defined in: [packages/ammo/ammo.d.ts:832](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L832)

#### Returns

`void`

***

### setGravity()

> **setGravity**(`gravity`): `void`

Defined in: [packages/ammo/ammo.d.ts:833](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L833)

#### Parameters

##### gravity

`number`

#### Returns

`void`

***

### getGravity()

> **getGravity**(): `number`

Defined in: [packages/ammo/ammo.d.ts:834](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L834)

#### Returns

`number`

***

### setMaxSlope()

> **setMaxSlope**(`slopeRadians`): `void`

Defined in: [packages/ammo/ammo.d.ts:835](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L835)

#### Parameters

##### slopeRadians

`number`

#### Returns

`void`

***

### getMaxSlope()

> **getMaxSlope**(): `number`

Defined in: [packages/ammo/ammo.d.ts:836](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L836)

#### Returns

`number`

***

### getGhostObject()

> **getGhostObject**(): [`btPairCachingGhostObject`](btPairCachingGhostObject.md)

Defined in: [packages/ammo/ammo.d.ts:837](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L837)

#### Returns

[`btPairCachingGhostObject`](btPairCachingGhostObject.md)

***

### setUseGhostSweepTest()

> **setUseGhostSweepTest**(`useGhostObjectSweepTest`): `void`

Defined in: [packages/ammo/ammo.d.ts:838](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L838)

#### Parameters

##### useGhostObjectSweepTest

`boolean`

#### Returns

`void`

***

### onGround()

> **onGround**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:839](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L839)

#### Returns

`boolean`

***

### setUpInterpolate()

> **setUpInterpolate**(`value`): `void`

Defined in: [packages/ammo/ammo.d.ts:840](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L840)

#### Parameters

##### value

`boolean`

#### Returns

`void`
