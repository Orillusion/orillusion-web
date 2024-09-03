# Class: btDefaultMotionState

[Ammo](../modules/Ammo.md).btDefaultMotionState

## Hierarchy

- [`btMotionState`](Ammo.btMotionState.md)

  ↳ **`btDefaultMotionState`**

### Constructors

- [constructor](Ammo.btDefaultMotionState.md#constructor)

### Methods

- [getWorldTransform](Ammo.btDefaultMotionState.md#getworldtransform)
- [setWorldTransform](Ammo.btDefaultMotionState.md#setworldtransform)
- [get\_m\_graphicsWorldTrans](Ammo.btDefaultMotionState.md#get_m_graphicsworldtrans)
- [set\_m\_graphicsWorldTrans](Ammo.btDefaultMotionState.md#set_m_graphicsworldtrans)

## Constructors

### constructor

• **new btDefaultMotionState**(`startTrans?`, `centerOfMassOffset?`): [`btDefaultMotionState`](Ammo.btDefaultMotionState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startTrans?` | [`btTransform`](Ammo.btTransform.md) |
| `centerOfMassOffset?` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

[`btDefaultMotionState`](Ammo.btDefaultMotionState.md)

#### Overrides

[btMotionState](Ammo.btMotionState.md).[constructor](Ammo.btMotionState.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L123)

## Methods

### getWorldTransform

▸ **getWorldTransform**(`worldTrans`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTrans` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

`void`

#### Inherited from

[btMotionState](Ammo.btMotionState.md).[getWorldTransform](Ammo.btMotionState.md#getworldtransform)

#### Defined in

[packages/ammo/ammo.d.ts:119](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L119)

___

### setWorldTransform

▸ **setWorldTransform**(`worldTrans`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTrans` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

`void`

#### Inherited from

[btMotionState](Ammo.btMotionState.md).[setWorldTransform](Ammo.btMotionState.md#setworldtransform)

#### Defined in

[packages/ammo/ammo.d.ts:120](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L120)

___

### get\_m\_graphicsWorldTrans

▸ **get_m_graphicsWorldTrans**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:124](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L124)

___

### set\_m\_graphicsWorldTrans

▸ **set_m_graphicsWorldTrans**(`m_graphicsWorldTrans`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_graphicsWorldTrans` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:125](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L125)
