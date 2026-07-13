[**@orillusion/physics**](../README.md)

***

# Class: ContactProcessedUtil

Defined in: [packages/physics/utils/ContactProcessedUtil.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L8)

Collision processing utility

## Constructors

### Constructor

> **new ContactProcessedUtil**(): `ContactProcessedUtil`

#### Returns

`ContactProcessedUtil`

## Methods

### registerCollisionCallback()

> `static` **registerCollisionCallback**(`pointer`, `callback`): `void`

Defined in: [packages/physics/utils/ContactProcessedUtil.ts:18](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L18)

Register a collision event.

#### Parameters

##### pointer

`number`

Pointer to the physics object

##### callback

`Callback`

Event callback

#### Returns

`void`

***

### unregisterCollisionCallback()

> `static` **unregisterCollisionCallback**(`pointer`): `void`

Defined in: [packages/physics/utils/ContactProcessedUtil.ts:32](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L32)

Unregister a collision event.

#### Parameters

##### pointer

`number`

Pointer to the physics object

#### Returns

`void`

***

### addIgnoredPointer()

> `static` **addIgnoredPointer**(`pointer`): `void`

Defined in: [packages/physics/utils/ContactProcessedUtil.ts:64](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L64)

Add a pointer to the ignored set. Once added, no collision event will be triggered when any object collides with the object referenced by this pointer.

#### Parameters

##### pointer

`number`

Pointer to the physics object

#### Returns

`void`

***

### removeIgnoredPointer()

> `static` **removeIgnoredPointer**(`pointer`): `void`

Defined in: [packages/physics/utils/ContactProcessedUtil.ts:74](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L74)

Remove a pointer from the ignored set.

#### Parameters

##### pointer

`number`

Pointer to the physics object

#### Returns

`void`

***

### isIgnored()

> `static` **isIgnored**(`pointer`): `boolean`

Defined in: [packages/physics/utils/ContactProcessedUtil.ts:82](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L82)

Check whether the pointer is in the ignored set.

#### Parameters

##### pointer

`number`

Pointer to the physics object

#### Returns

`boolean`

***

### isCollision()

> `static` **isCollision**(`pointer`): `boolean`

Defined in: [packages/physics/utils/ContactProcessedUtil.ts:90](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L90)

Check whether the pointer has a registered collision event.

#### Parameters

##### pointer

`number`

Pointer to the physics object

#### Returns

`boolean`

***

### performCollisionTest()

> `static` **performCollisionTest**(`bodyA`, `bodyB?`): `object`

Defined in: [packages/physics/utils/ContactProcessedUtil.ts:129](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L129)

Perform a one-shot collision test.
If bodyB is provided, tests whether bodyA collides with bodyB.
Otherwise, tests whether bodyA collides with any other rigid body.

#### Parameters

##### bodyA

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

The first rigid body.

##### bodyB?

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

(Optional) The second rigid body.

#### Returns

`object`

An object with collision information if a collision occurred; otherwise null.

##### cpPtr

> **cpPtr**: `number`

##### colObj0Wrap

> **colObj0Wrap**: [`btCollisionObjectWrapper`](../@orillusion/namespaces/Ammo/classes/btCollisionObjectWrapper.md)

##### colObj1Wrap

> **colObj1Wrap**: [`btCollisionObjectWrapper`](../@orillusion/namespaces/Ammo/classes/btCollisionObjectWrapper.md)

##### partId0

> **partId0**: `number`

##### index0

> **index0**: `number`

##### partId1

> **partId1**: `number`

##### index1

> **index1**: `number`

***

### checkCollision()

> `static` **checkCollision**(`bodyA`, `bodyB`): `boolean`

Defined in: [packages/physics/utils/ContactProcessedUtil.ts:174](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/ContactProcessedUtil.ts#L174)

Collision check: determines whether two rigid bodies are currently colliding.

#### Parameters

##### bodyA

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

##### bodyB

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

#### Returns

`boolean`

boolean
