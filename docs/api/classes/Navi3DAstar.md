# Class: Navi3DAstar

### Constructors

- [constructor](Navi3DAstar.md#constructor)

### Accessors

- [channel](Navi3DAstar.md#channel)

### Methods

- [findPath](Navi3DAstar.md#findpath)

## Constructors

### constructor

• **new Navi3DAstar**()

#### Defined in

[src/math/navigation/Navi3DAstar.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DAstar.ts#L16)

## Accessors

### channel

• `get` **channel**(): [`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Defined in

[src/math/navigation/Navi3DAstar.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DAstar.ts#L97)

## Methods

### findPath

▸ **findPath**(`navMesh`, `startTriangle`, `endTriangle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `navMesh` | [`Navi3DMesh`](Navi3DMesh.md) |
| `startTriangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |
| `endTriangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DAstar.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DAstar.ts#L21)
