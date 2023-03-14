# Class: \_Physics

物理引擎

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

[libs/physics/Physics.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L38)

## Constructors

### constructor

• **new _Physics**()

#### Defined in

[libs/physics/Physics.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L40)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

初始化物理引擎

#### Returns

`Promise`<`void`\>

#### Defined in

[libs/physics/Physics.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L45)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[libs/physics/Physics.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L137)

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

[libs/physics/Physics.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L149)

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

[libs/physics/Physics.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L153)

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

[libs/physics/Physics.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L157)

## Accessors

### maxSubSteps

• `get` **maxSubSteps**(): `number`

#### Returns

`number`

#### Defined in

[libs/physics/Physics.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L63)

• `set` **maxSubSteps**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[libs/physics/Physics.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L66)

___

### fixedTimeStep

• `get` **fixedTimeStep**(): `number`

#### Returns

`number`

#### Defined in

[libs/physics/Physics.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L70)

• `set` **fixedTimeStep**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[libs/physics/Physics.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L73)

___

### isStop

• `get` **isStop**(): `boolean`

#### Returns

`boolean`

#### Defined in

[libs/physics/Physics.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L77)

• `set` **isStop**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[libs/physics/Physics.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L81)

___

### gravity

• `get` **gravity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[libs/physics/Physics.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L89)

• `set` **gravity**(`gravity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gravity` | `Vector3` |

#### Returns

`void`

#### Defined in

[libs/physics/Physics.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L85)

___

### world

• `get` **world**(): [`btDiscreteDynamicsWorld`](Ammo.btDiscreteDynamicsWorld.md)

#### Returns

[`btDiscreteDynamicsWorld`](Ammo.btDiscreteDynamicsWorld.md)

#### Defined in

[libs/physics/Physics.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L93)

___

### isInited

• `get` **isInited**(): `boolean`

#### Returns

`boolean`

#### Defined in

[libs/physics/Physics.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/libs/physics/Physics.ts#L120)
