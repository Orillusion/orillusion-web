# Class: btIDebugDraw

[Ammo](../modules/Ammo.md).btIDebugDraw

### Constructors

- [constructor](Ammo.btIDebugDraw.md#constructor)

### Methods

- [drawLine](Ammo.btIDebugDraw.md#drawline)
- [drawContactPoint](Ammo.btIDebugDraw.md#drawcontactpoint)
- [reportErrorWarning](Ammo.btIDebugDraw.md#reporterrorwarning)
- [draw3dText](Ammo.btIDebugDraw.md#draw3dtext)
- [setDebugMode](Ammo.btIDebugDraw.md#setdebugmode)
- [getDebugMode](Ammo.btIDebugDraw.md#getdebugmode)

## Constructors

### constructor

• **new btIDebugDraw**(): [`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Returns

[`btIDebugDraw`](Ammo.btIDebugDraw.md)

## Methods

### drawLine

▸ **drawLine**(`from`, `to`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`btVector3`](Ammo.btVector3.md) |
| `to` | [`btVector3`](Ammo.btVector3.md) |
| `color` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:27](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L27)

___

### drawContactPoint

▸ **drawContactPoint**(`pointOnB`, `normalOnB`, `distance`, `lifeTime`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointOnB` | [`btVector3`](Ammo.btVector3.md) |
| `normalOnB` | [`btVector3`](Ammo.btVector3.md) |
| `distance` | `number` |
| `lifeTime` | `number` |
| `color` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:28](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L28)

___

### reportErrorWarning

▸ **reportErrorWarning**(`warningString`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `warningString` | `string` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L29)

___

### draw3dText

▸ **draw3dText**(`location`, `textString`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | [`btVector3`](Ammo.btVector3.md) |
| `textString` | `string` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:30](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L30)

___

### setDebugMode

▸ **setDebugMode**(`debugMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `debugMode` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L31)

___

### getDebugMode

▸ **getDebugMode**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L32)
