# Class: FrustumCSM

### Constructors

- [constructor](FrustumCSM.md#constructor)

### Properties

- [sections](FrustumCSM.md#sections)
- [children](FrustumCSM.md#children)
- [name](FrustumCSM.md#name)

### Methods

- [update](FrustumCSM.md#update)

## Constructors

### constructor

• **new FrustumCSM**(`blockCount`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockCount` | `number` |

#### Defined in

[src/core/csm/FrustumCSM.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L79)

## Properties

### sections

• **sections**: `FrustumSection`[]

#### Defined in

[src/core/csm/FrustumCSM.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L75)

___

### children

• **children**: `FrustumChild`[]

#### Defined in

[src/core/csm/FrustumCSM.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L76)

___

### name

• **name**: `string`

#### Defined in

[src/core/csm/FrustumCSM.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L77)

## Methods

### update

▸ **update**(`p`, `pvInv`, `near`, `far`, `shadowSetting`): [`FrustumCSM`](FrustumCSM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Matrix4`](Matrix4.md) |
| `pvInv` | [`Matrix4`](Matrix4.md) |
| `near` | `number` |
| `far` | `number` |
| `shadowSetting` | [`ShadowSetting`](../types/ShadowSetting.md) |

#### Returns

[`FrustumCSM`](FrustumCSM.md)

#### Defined in

[src/core/csm/FrustumCSM.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/core/csm/FrustumCSM.ts#L92)
