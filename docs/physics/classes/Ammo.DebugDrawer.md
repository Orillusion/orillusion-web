# Class: DebugDrawer

[Ammo](../modules/Ammo.md).DebugDrawer


### Constructors

- [constructor](Ammo.DebugDrawer.md#constructor)

### Methods

- [drawLine](Ammo.DebugDrawer.md#drawline)
- [drawContactPoint](Ammo.DebugDrawer.md#drawcontactpoint)
- [reportErrorWarning](Ammo.DebugDrawer.md#reporterrorwarning)
- [draw3dText](Ammo.DebugDrawer.md#draw3dtext)
- [setDebugMode](Ammo.DebugDrawer.md#setdebugmode)
- [getDebugMode](Ammo.DebugDrawer.md#getdebugmode)

## Constructors

### constructor

• **new DebugDrawer**()

#### Defined in

[packages/ammo/ammo.d.ts:30](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L30)

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

[packages/ammo/ammo.d.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L31)

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

[packages/ammo/ammo.d.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L32)

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

[packages/ammo/ammo.d.ts:33](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L33)

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

[packages/ammo/ammo.d.ts:34](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L34)

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

[packages/ammo/ammo.d.ts:35](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L35)

___

### getDebugMode

▸ **getDebugMode**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:36](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L36)
