[**@orillusion/physics**](../../../../README.md)

***

# Class: btIDebugDraw

Defined in: [packages/ammo/ammo.d.ts:26](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L26)

## Constructors

### Constructor

> **new btIDebugDraw**(): `btIDebugDraw`

#### Returns

`btIDebugDraw`

## Methods

### drawLine()

> **drawLine**(`from`, `to`, `color`): `void`

Defined in: [packages/ammo/ammo.d.ts:27](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L27)

#### Parameters

##### from

[`btVector3`](btVector3.md)

##### to

[`btVector3`](btVector3.md)

##### color

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### drawContactPoint()

> **drawContactPoint**(`pointOnB`, `normalOnB`, `distance`, `lifeTime`, `color`): `void`

Defined in: [packages/ammo/ammo.d.ts:28](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L28)

#### Parameters

##### pointOnB

[`btVector3`](btVector3.md)

##### normalOnB

[`btVector3`](btVector3.md)

##### distance

`number`

##### lifeTime

`number`

##### color

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### reportErrorWarning()

> **reportErrorWarning**(`warningString`): `void`

Defined in: [packages/ammo/ammo.d.ts:29](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L29)

#### Parameters

##### warningString

`string`

#### Returns

`void`

***

### draw3dText()

> **draw3dText**(`location`, `textString`): `void`

Defined in: [packages/ammo/ammo.d.ts:30](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L30)

#### Parameters

##### location

[`btVector3`](btVector3.md)

##### textString

`string`

#### Returns

`void`

***

### setDebugMode()

> **setDebugMode**(`debugMode`): `void`

Defined in: [packages/ammo/ammo.d.ts:31](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L31)

#### Parameters

##### debugMode

`number`

#### Returns

`void`

***

### getDebugMode()

> **getDebugMode**(): `number`

Defined in: [packages/ammo/ammo.d.ts:32](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L32)

#### Returns

`number`
