[**@orillusion/physics**](../../../../README.md)

***

# Class: DebugDrawer

Defined in: [packages/ammo/ammo.d.ts:34](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L34)

## Constructors

### Constructor

> **new DebugDrawer**(): `DebugDrawer`

Defined in: [packages/ammo/ammo.d.ts:35](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L35)

#### Returns

`DebugDrawer`

## Methods

### drawLine()

> **drawLine**(`from`, `to`, `color`): `void`

Defined in: [packages/ammo/ammo.d.ts:36](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L36)

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

Defined in: [packages/ammo/ammo.d.ts:37](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L37)

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

Defined in: [packages/ammo/ammo.d.ts:38](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L38)

#### Parameters

##### warningString

`string`

#### Returns

`void`

***

### draw3dText()

> **draw3dText**(`location`, `textString`): `void`

Defined in: [packages/ammo/ammo.d.ts:39](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L39)

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

Defined in: [packages/ammo/ammo.d.ts:40](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L40)

#### Parameters

##### debugMode

`number`

#### Returns

`void`

***

### getDebugMode()

> **getDebugMode**(): `number`

Defined in: [packages/ammo/ammo.d.ts:41](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L41)

#### Returns

`number`
