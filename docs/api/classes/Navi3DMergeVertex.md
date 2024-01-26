# Class: Navi3DMergeVertex

### Constructors

- [constructor](Navi3DMergeVertex.md#constructor)

### Properties

- [vertex](Navi3DMergeVertex.md#vertex)
- [indices](Navi3DMergeVertex.md#indices)

### Methods

- [merge](Navi3DMergeVertex.md#merge)
- [parse](Navi3DMergeVertex.md#parse)

## Constructors

### constructor

• **new Navi3DMergeVertex**(): [`Navi3DMergeVertex`](Navi3DMergeVertex.md)

#### Returns

[`Navi3DMergeVertex`](Navi3DMergeVertex.md)

## Properties

### vertex

• **vertex**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/math/navigation/Navi3DMergeVertex.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMergeVertex.ts#L6)

___

### indices

• **indices**: `number`[]

#### Defined in

[src/math/navigation/Navi3DMergeVertex.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMergeVertex.ts#L7)

## Methods

### merge

▸ **merge**(`geometry`, `threshould?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) | `undefined` |
| `threshould` | `number` | `0.1` |

#### Returns

`this`

#### Defined in

[src/math/navigation/Navi3DMergeVertex.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMergeVertex.ts#L9)

___

### parse

▸ **parse**(`geometry`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`this`

#### Defined in

[src/math/navigation/Navi3DMergeVertex.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMergeVertex.ts#L45)
