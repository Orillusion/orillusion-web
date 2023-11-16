# Class: Navi3DFunnel

### Constructors

- [constructor](Navi3DFunnel.md#constructor)

### Accessors

- [path](Navi3DFunnel.md#path)

### Methods

- [searchPath](Navi3DFunnel.md#searchpath)

## Constructors

### constructor

• **new Navi3DFunnel**()

#### Defined in

[src/math/navigation/Navi3DFunnel.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DFunnel.ts#L25)

## Accessors

### path

• `get` **path**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

[src/math/navigation/Navi3DFunnel.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DFunnel.ts#L42)

## Methods

### searchPath

▸ **searchPath**(`startPt`, `endPt`, `triangleList`, `radius?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startPt` | [`Vector3`](Vector3.md) | `undefined` |
| `endPt` | [`Vector3`](Vector3.md) | `undefined` |
| `triangleList` | [`Navi3DTriangle`](Navi3DTriangle.md)[] | `undefined` |
| `radius` | `number` | `0` |

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DFunnel.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DFunnel.ts#L29)
