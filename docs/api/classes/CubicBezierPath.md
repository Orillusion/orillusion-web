# Class: CubicBezierPath

### Constructors

- [constructor](CubicBezierPath.md#constructor)

### Methods

- [getPathType](CubicBezierPath.md#getpathtype)
- [isClosed](CubicBezierPath.md#isclosed)
- [isValid](CubicBezierPath.md#isvalid)
- [clear](CubicBezierPath.md#clear)
- [computeApproxLength](CubicBezierPath.md#computeapproxlength)
- [computeApproxParamPerUnitLength](CubicBezierPath.md#computeapproxparamperunitlength)
- [computeApproxNormParamPerUnitLength](CubicBezierPath.md#computeapproxnormparamperunitlength)
- [interpolatePoints](CubicBezierPath.md#interpolatepoints)
- [setControlVertices](CubicBezierPath.md#setcontrolvertices)
- [getPoint](CubicBezierPath.md#getpoint)
- [getPointNorm](CubicBezierPath.md#getpointnorm)
- [getTangent](CubicBezierPath.md#gettangent)
- [getTangentNorm](CubicBezierPath.md#gettangentnorm)
- [computeClosestParam](CubicBezierPath.md#computeclosestparam)
- [computeClosestNormParam](CubicBezierPath.md#computeclosestnormparam)

## Constructors

### constructor

• **new CubicBezierPath**(`controlVertices`, `t?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `controlVertices` | [`Vector3`](Vector3.md)[] | `undefined` |
| `t` | [`CubicBezierType`](../enums/CubicBezierType.md) | `CubicBezierType.Open` |

#### Defined in

[src/math/CubicBezierPath.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L26)

## Methods

### getPathType

▸ **getPathType**(): [`CubicBezierType`](../enums/CubicBezierType.md)

#### Returns

[`CubicBezierType`](../enums/CubicBezierType.md)

#### Defined in

[src/math/CubicBezierPath.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L30)

___

### isClosed

▸ **isClosed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/math/CubicBezierPath.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L34)

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/math/CubicBezierPath.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L41)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/math/CubicBezierPath.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L45)

___

### computeApproxLength

▸ **computeApproxLength**(): `number`

#### Returns

`number`

#### Defined in

[src/math/CubicBezierPath.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L52)

___

### computeApproxParamPerUnitLength

▸ **computeApproxParamPerUnitLength**(): `number`

#### Returns

`number`

#### Defined in

[src/math/CubicBezierPath.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L73)

___

### computeApproxNormParamPerUnitLength

▸ **computeApproxNormParamPerUnitLength**(): `number`

#### Returns

`number`

#### Defined in

[src/math/CubicBezierPath.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L78)

___

### interpolatePoints

▸ **interpolatePoints**(`knots`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `knots` | [`Vector3`](Vector3.md)[] |
| `t` | [`CubicBezierType`](../enums/CubicBezierType.md) |

#### Returns

`void`

#### Defined in

[src/math/CubicBezierPath.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L83)

___

### setControlVertices

▸ **setControlVertices**(`cvs`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cvs` | [`Vector3`](Vector3.md)[] |
| `t` | [`CubicBezierType`](../enums/CubicBezierType.md) |

#### Returns

`void`

#### Defined in

[src/math/CubicBezierPath.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L179)

___

### getPoint

▸ **getPoint**(`t`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/CubicBezierPath.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L194)

___

### getPointNorm

▸ **getPointNorm**(`t`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/CubicBezierPath.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L224)

___

### getTangent

▸ **getTangent**(`t`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/CubicBezierPath.ts:230](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L230)

___

### getTangentNorm

▸ **getTangentNorm**(`t`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/CubicBezierPath.ts:258](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L258)

___

### computeClosestParam

▸ **computeClosestParam**(`pos`, `paramThreshold`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |
| `paramThreshold` | `number` |

#### Returns

`number`

#### Defined in

[src/math/CubicBezierPath.ts:265](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L265)

___

### computeClosestNormParam

▸ **computeClosestNormParam**(`pos`, `paramThreshold`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |
| `paramThreshold` | `number` |

#### Returns

`number`

#### Defined in

[src/math/CubicBezierPath.ts:290](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L290)
