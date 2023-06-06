# Class: Matrix3

3*3 Matrix

### Constructors

- [constructor](Matrix3.md#constructor)

### Properties

- [a](Matrix3.md#a)
- [b](Matrix3.md#b)
- [c](Matrix3.md#c)
- [d](Matrix3.md#d)
- [tx](Matrix3.md#tx)
- [ty](Matrix3.md#ty)

### Methods

- [clone](Matrix3.md#clone)
- [concat](Matrix3.md#concat)
- [copyFrom](Matrix3.md#copyfrom)
- [identity](Matrix3.md#identity)
- [invert](Matrix3.md#invert)
- [rotate](Matrix3.md#rotate)
- [scale](Matrix3.md#scale)
- [setTo](Matrix3.md#setto)
- [transformPoint](Matrix3.md#transformpoint)
- [setTranslate](Matrix3.md#settranslate)
- [translate](Matrix3.md#translate)
- [mul](Matrix3.md#mul)
- [equals](Matrix3.md#equals)
- [prepend](Matrix3.md#prepend)
- [append](Matrix3.md#append)
- [deltaTransformPoint](Matrix3.md#deltatransformpoint)
- [toString](Matrix3.md#tostring)
- [createBox](Matrix3.md#createbox)
- [createGradientBox](Matrix3.md#creategradientbox)

## Constructors

### constructor

• **new Matrix3**(`a?`, `b?`, `c?`, `d?`, `tx?`, `ty?`)

Create a Matrix3

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | `number` | `1` | The width of x |
| `b` | `number` | `0` | The slope of y |
| `c` | `number` | `0` | The slope of x |
| `d` | `number` | `1` | The height of y |
| `tx` | `number` | `0` | The position of the x coordinate |
| `ty` | `number` | `0` | The position of the y coordinate |

#### Defined in

[src/math/Matrix3.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L67)

## Properties

### a

• **a**: `number`

The width of x

#### Defined in

[src/math/Matrix3.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L31)

___

### b

• **b**: `number`

The slope of y

#### Defined in

[src/math/Matrix3.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L36)

___

### c

• **c**: `number`

The slope of x

#### Defined in

[src/math/Matrix3.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L41)

___

### d

• **d**: `number`

The height of y

#### Defined in

[src/math/Matrix3.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L46)

___

### tx

• **tx**: `number`

The position of the x coordinate

#### Defined in

[src/math/Matrix3.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L51)

___

### ty

• **ty**: `number`

The position of the y coordinate

#### Defined in

[src/math/Matrix3.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L56)

## Methods

### clone

▸ **clone**(): [`Matrix3`](Matrix3.md)

Clone an Matrix3 object

#### Returns

[`Matrix3`](Matrix3.md)

New Matrix3 object

#### Defined in

[src/math/Matrix3.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L80)

___

### concat

▸ **concat**(`matrix`): `void`

Merges the current matrix with the target matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix3`](Matrix3.md) | target matrix |

#### Returns

`void`

#### Defined in

[src/math/Matrix3.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L88)

___

### copyFrom

▸ **copyFrom**(`other`): [`Matrix3`](Matrix3.md)

The current matrix value is overwritten by the target matrix value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3`](Matrix3.md) | target matrix value |

#### Returns

[`Matrix3`](Matrix3.md)

current matrix

#### Defined in

[src/math/Matrix3.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L105)

___

### identity

▸ **identity**(): [`Matrix3`](Matrix3.md)

Reset to the identity matrix

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/math/Matrix3.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L118)

___

### invert

▸ **invert**(): `void`

Invert this matrix

#### Returns

`void`

#### Defined in

[src/math/Matrix3.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L127)

___

### rotate

▸ **rotate**(`angle`): `void`

Rotate according to Angle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | rotation angle |

#### Returns

`void`

#### Defined in

[src/math/Matrix3.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L135)

___

### scale

▸ **scale**(`sx`, `sy`): `void`

Scale by offset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sx` | `number` | x axis scaling |
| `sy` | `number` | y axis scaling |

#### Returns

`void`

#### Defined in

[src/math/Matrix3.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L161)

___

### setTo

▸ **setTo**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix3`](Matrix3.md)

Reset the matrix value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | Matrix element a |
| `b` | `number` | Matrix element b |
| `c` | `number` | Matrix element c |
| `d` | `number` | Matrix element d |
| `tx` | `number` | Matrix element tx |
| `ty` | `number` | Matrix element ty |

#### Returns

[`Matrix3`](Matrix3.md)

The modified matrix

#### Defined in

[src/math/Matrix3.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L184)

___

### transformPoint

▸ **transformPoint**(`pointX`, `pointY`, `resultPoint?`): [`Vector3`](Vector3.md)

transformation of coordinates

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointX` | `number` | x coordinate |
| `pointY` | `number` | y coordinate |
| `resultPoint?` | [`Vector3`](Vector3.md) | Vector of results |

#### Returns

[`Vector3`](Vector3.md)

Vector of results

#### Defined in

[src/math/Matrix3.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L201)

___

### setTranslate

▸ **setTranslate**(`x`, `y`): `void`

translation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x coordinate |
| `y` | `number` | y coordinate |

#### Returns

`void`

#### Defined in

[src/math/Matrix3.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L216)

___

### translate

▸ **translate**(`dx`, `dy`): `void`

Translates the specified offset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dx` | `number` | The x-coordinate offset |
| `dy` | `number` | The y-coordinate offset |

#### Returns

`void`

#### Defined in

[src/math/Matrix3.ts:226](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L226)

___

### mul

▸ **mul**(`t`): `void`

multiply

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Matrix3`](Matrix3.md) | target matrix |

#### Returns

`void`

#### Defined in

[src/math/Matrix3.ts:235](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L235)

___

### equals

▸ **equals**(`other`): `boolean`

Is equal to the given matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3`](Matrix3.md) | matrix |

#### Returns

`boolean`

#### Defined in

[src/math/Matrix3.ts:273](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L273)

___

### prepend

▸ **prepend**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix3`](Matrix3.md)

get a front matrix by multiplication

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | Multiply by a |
| `b` | `number` | Multiply by b |
| `c` | `number` | Multiply by c |
| `d` | `number` | Multiply by d |
| `tx` | `number` | Multiply by tx |
| `ty` | `number` | Multiply by ty |

#### Returns

[`Matrix3`](Matrix3.md)

prematrix

#### Defined in

[src/math/Matrix3.ts:287](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L287)

___

### append

▸ **append**(`mat`): [`Matrix3`](Matrix3.md)

Obtain a post-multiplication matrix by multiplication.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix3`](Matrix3.md) | Matrix |

#### Returns

[`Matrix3`](Matrix3.md)

result

#### Defined in

[src/math/Matrix3.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L307)

___

### deltaTransformPoint

▸ **deltaTransformPoint**(`point`): [`Vector3`](Vector3.md)

Use the given point for the transformation, ignoring the x, y coordinates

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Vector3`](Vector3.md) | A given point |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Matrix3.ts:329](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L329)

___

### toString

▸ **toString**(): `string`

Converts the current matrix to string form

#### Returns

`string`

#### Defined in

[src/math/Matrix3.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L340)

___

### createBox

▸ **createBox**(`scaleX`, `scaleY`, `rotation?`, `tx?`, `ty?`): `void`

Set the matrix scaling, rotation, and conversion parameters

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `scaleX` | `number` | `undefined` | x axis scaling |
| `scaleY` | `number` | `undefined` | y axis scaling |
| `rotation` | `number` | `0` | rotation |
| `tx` | `number` | `0` | x-coordinate |
| `ty` | `number` | `0` | y-coordinate |

#### Returns

`void`

#### Defined in

[src/math/Matrix3.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L352)

___

### createGradientBox

▸ **createGradientBox**(`width`, `height`, `rotation?`, `tx?`, `ty?`): `void`

Create a gradient box

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `undefined` | width |
| `height` | `number` | `undefined` | height |
| `rotation` | `number` | `0` | rotation |
| `tx` | `number` | `0` | x-coordinate |
| `ty` | `number` | `0` | y-coordinate |

#### Returns

`void`

#### Defined in

[src/math/Matrix3.ts:380](https://github.com/Orillusion/orillusion/blob/main/src/math/Matrix3.ts#L380)
