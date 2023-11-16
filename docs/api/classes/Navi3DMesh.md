# Class: Navi3DMesh

### Constructors

- [constructor](Navi3DMesh.md#constructor)

### Accessors

- [edges](Navi3DMesh.md#edges)
- [points](Navi3DMesh.md#points)
- [path](Navi3DMesh.md#path)
- [triangles](Navi3DMesh.md#triangles)

### Methods

- [getTriangleAtPoint](Navi3DMesh.md#gettriangleatpoint)
- [findPath](Navi3DMesh.md#findpath)

## Constructors

### constructor

• **new Navi3DMesh**(`pointList`, `triangleIndexList`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointList` | [`Vector3`](Vector3.md)[] |
| `triangleIndexList` | `number`[][] |

#### Defined in

[src/math/navigation/Navi3DMesh.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L43)

## Accessors

### edges

• `get` **edges**(): [`Navi3DEdge`](Navi3DEdge.md)[]

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)[]

#### Defined in

[src/math/navigation/Navi3DMesh.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L27)

___

### points

• `get` **points**(): [`Navi3DPoint`](Navi3DPoint.md)[]

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)[]

#### Defined in

[src/math/navigation/Navi3DMesh.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L31)

___

### path

• `get` **path**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

[src/math/navigation/Navi3DMesh.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L35)

___

### triangles

• `get` **triangles**(): [`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Defined in

[src/math/navigation/Navi3DMesh.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L39)

## Methods

### getTriangleAtPoint

▸ **getTriangleAtPoint**(`point`, `threshold?`): [`IQuadNode`](../interfaces/IQuadNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `point` | [`Vector3`](Vector3.md) | `undefined` |
| `threshold` | `number` | `5` |

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)

#### Defined in

[src/math/navigation/Navi3DMesh.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L63)

___

### findPath

▸ **findPath**(`startPt`, `endPt`, `aiRadius?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startPt` | [`Vector3`](Vector3.md) | `undefined` |
| `endPt` | [`Vector3`](Vector3.md) | `undefined` |
| `aiRadius` | `number` | `5` |

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DMesh.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L67)
