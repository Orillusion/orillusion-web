# Class: \_Physics

Physics Engine

**`Not Exported`**


### Properties

- [TEMP\_TRANSFORM](Physics.md#temp_transform)

### Constructors

- [constructor](Physics.md#constructor)

### Methods

- [init](Physics.md#init)
- [update](Physics.md#update)
- [addRigidbody](Physics.md#addrigidbody)
- [removeRigidbody](Physics.md#removerigidbody)
- [checkBound](Physics.md#checkbound)

### Accessors

- [maxSubSteps](Physics.md#maxsubsteps)
- [fixedTimeStep](Physics.md#fixedtimestep)
- [isStop](Physics.md#isstop)
- [gravity](Physics.md#gravity)
- [world](Physics.md#world)
- [isInited](Physics.md#isinited)

## Properties

### TEMP\_TRANSFORM

• **TEMP\_TRANSFORM**: [`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/physics/Physics.ts:38](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L38)

## Constructors

### constructor

• **new _Physics**()

#### Defined in

[packages/physics/Physics.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L40)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

Init Physics Engine

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/physics/Physics.ts:45](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L45)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[packages/physics/Physics.ts:133](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L133)

___

### addRigidbody

▸ **addRigidbody**(`rigidBody`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rigidBody` | [`Rigidbody`](Rigidbody.md) |

#### Returns

`void`

#### Defined in

[packages/physics/Physics.ts:145](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L145)

___

### removeRigidbody

▸ **removeRigidbody**(`rigidBody`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rigidBody` | [`Rigidbody`](Rigidbody.md) |

#### Returns

`void`

#### Defined in

[packages/physics/Physics.ts:149](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L149)

___

### checkBound

▸ **checkBound**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`Rigidbody`](Rigidbody.md) |

#### Returns

`void`

#### Defined in

[packages/physics/Physics.ts:153](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L153)

## Accessors

### maxSubSteps

• `get` **maxSubSteps**(): `number`

#### Returns

`number`

#### Defined in

[packages/physics/Physics.ts:59](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L59)

• `set` **maxSubSteps**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/Physics.ts:62](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L62)

___

### fixedTimeStep

• `get` **fixedTimeStep**(): `number`

#### Returns

`number`

#### Defined in

[packages/physics/Physics.ts:66](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L66)

• `set` **fixedTimeStep**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/Physics.ts:69](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L69)

___

### isStop

• `get` **isStop**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/physics/Physics.ts:73](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L73)

• `set` **isStop**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/physics/Physics.ts:77](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L77)

___

### gravity

• `get` **gravity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[packages/physics/Physics.ts:85](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L85)

• `set` **gravity**(`gravity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gravity` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/Physics.ts:81](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L81)

___

### world

• `get` **world**(): [`btDiscreteDynamicsWorld`](Ammo.btDiscreteDynamicsWorld.md)

#### Returns

[`btDiscreteDynamicsWorld`](Ammo.btDiscreteDynamicsWorld.md)

#### Defined in

[packages/physics/Physics.ts:89](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L89)

___

### isInited

• `get` **isInited**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/physics/Physics.ts:116](https://github.com/Orillusion/orillusion/blob/main/packages/physics/Physics.ts#L116)
