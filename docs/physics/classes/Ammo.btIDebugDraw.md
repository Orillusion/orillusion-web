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

• **new btIDebugDraw**()

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

[packages/ammo/ammo.d.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L22)

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

[packages/ammo/ammo.d.ts:23](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L23)

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

[packages/ammo/ammo.d.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L24)

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

[packages/ammo/ammo.d.ts:25](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L25)

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

[packages/ammo/ammo.d.ts:26](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L26)

___

### getDebugMode

▸ **getDebugMode**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:27](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L27)
