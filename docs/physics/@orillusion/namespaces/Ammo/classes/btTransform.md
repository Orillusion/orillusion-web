[**@orillusion/physics**](../../../../README.md)

***

# Class: btTransform

Defined in: [packages/ammo/ammo.d.ts:105](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L105)

## Constructors

### Constructor

> **new btTransform**(): `btTransform`

Defined in: [packages/ammo/ammo.d.ts:106](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L106)

#### Returns

`btTransform`

### Constructor

> **new btTransform**(`q`, `v`): `btTransform`

Defined in: [packages/ammo/ammo.d.ts:107](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L107)

#### Parameters

##### q

[`btQuaternion`](btQuaternion.md)

##### v

[`btVector3`](btVector3.md)

#### Returns

`btTransform`

## Methods

### setIdentity()

> **setIdentity**(): `void`

Defined in: [packages/ammo/ammo.d.ts:108](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L108)

#### Returns

`void`

***

### setOrigin()

> **setOrigin**(`origin`): `void`

Defined in: [packages/ammo/ammo.d.ts:109](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L109)

#### Parameters

##### origin

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### setRotation()

> **setRotation**(`rotation`): `void`

Defined in: [packages/ammo/ammo.d.ts:110](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L110)

#### Parameters

##### rotation

[`btQuaternion`](btQuaternion.md)

#### Returns

`void`

***

### getOrigin()

> **getOrigin**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:111](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L111)

#### Returns

[`btVector3`](btVector3.md)

***

### getRotation()

> **getRotation**(): [`btQuaternion`](btQuaternion.md)

Defined in: [packages/ammo/ammo.d.ts:112](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L112)

#### Returns

[`btQuaternion`](btQuaternion.md)

***

### getBasis()

> **getBasis**(): [`btMatrix3x3`](btMatrix3x3.md)

Defined in: [packages/ammo/ammo.d.ts:113](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L113)

#### Returns

[`btMatrix3x3`](btMatrix3x3.md)

***

### setFromOpenGLMatrix()

> **setFromOpenGLMatrix**(`m`): `void`

Defined in: [packages/ammo/ammo.d.ts:114](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L114)

#### Parameters

##### m

readonly `number`[]

#### Returns

`void`

***

### inverse()

> **inverse**(): `btTransform`

Defined in: [packages/ammo/ammo.d.ts:115](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L115)

#### Returns

`btTransform`

***

### op\_mul()

> **op\_mul**(`t`): `btTransform`

Defined in: [packages/ammo/ammo.d.ts:116](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L116)

#### Parameters

##### t

`btTransform`

#### Returns

`btTransform`
