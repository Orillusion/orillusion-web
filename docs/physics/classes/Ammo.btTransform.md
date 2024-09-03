# Class: btTransform

[Ammo](../modules/Ammo.md).btTransform

### Constructors

- [constructor](Ammo.btTransform.md#constructor)

### Methods

- [setIdentity](Ammo.btTransform.md#setidentity)
- [setOrigin](Ammo.btTransform.md#setorigin)
- [setRotation](Ammo.btTransform.md#setrotation)
- [getOrigin](Ammo.btTransform.md#getorigin)
- [getRotation](Ammo.btTransform.md#getrotation)
- [getBasis](Ammo.btTransform.md#getbasis)
- [setFromOpenGLMatrix](Ammo.btTransform.md#setfromopenglmatrix)
- [inverse](Ammo.btTransform.md#inverse)
- [op\_mul](Ammo.btTransform.md#op_mul)

## Constructors

### constructor

• **new btTransform**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:106](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L106)

• **new btTransform**(`q`, `v`): [`btTransform`](Ammo.btTransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`btQuaternion`](Ammo.btQuaternion.md) |
| `v` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:107](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L107)

## Methods

### setIdentity

▸ **setIdentity**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:108](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L108)

___

### setOrigin

▸ **setOrigin**(`origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:109](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L109)

___

### setRotation

▸ **setRotation**(`rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:110](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L110)

___

### getOrigin

▸ **getOrigin**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:111](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L111)

___

### getRotation

▸ **getRotation**(): [`btQuaternion`](Ammo.btQuaternion.md)

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/ammo/ammo.d.ts:112](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L112)

___

### getBasis

▸ **getBasis**(): [`btMatrix3x3`](Ammo.btMatrix3x3.md)

#### Returns

[`btMatrix3x3`](Ammo.btMatrix3x3.md)

#### Defined in

[packages/ammo/ammo.d.ts:113](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L113)

___

### setFromOpenGLMatrix

▸ **setFromOpenGLMatrix**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | readonly `number`[] |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:114](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L114)

___

### inverse

▸ **inverse**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:115](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L115)

___

### op\_mul

▸ **op_mul**(`t`): [`btTransform`](Ammo.btTransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:116](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L116)
