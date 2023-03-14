# Class: Matrix3

3*3 的矩阵


### Properties

- [help\_matrix3](Matrix3.md#help_matrix3)
- [a](Matrix3.md#a)
- [b](Matrix3.md#b)
- [c](Matrix3.md#c)
- [d](Matrix3.md#d)
- [tx](Matrix3.md#tx)
- [ty](Matrix3.md#ty)

### Constructors

- [constructor](Matrix3.md#constructor)

### Methods

- [clone](Matrix3.md#clone)
- [concat](Matrix3.md#concat)
- [copyFrom](Matrix3.md#copyfrom)
- [identity](Matrix3.md#identity)
- [invert](Matrix3.md#invert)
- [$invertInto](Matrix3.md#$invertinto)
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

## Properties

### help\_matrix3

▪ `Static` **help\_matrix3**: [`Matrix3`](Matrix3.md)

#### Defined in

[src/engine/math/Matrix3.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L26)

___

### a

• **a**: `number`

x 的宽度

#### Defined in

[src/engine/math/Matrix3.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L31)

___

### b

• **b**: `number`

y 的倾斜

#### Defined in

[src/engine/math/Matrix3.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L36)

___

### c

• **c**: `number`

x 的倾斜

#### Defined in

[src/engine/math/Matrix3.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L41)

___

### d

• **d**: `number`

y 的高度

#### Defined in

[src/engine/math/Matrix3.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L46)

___

### tx

• **tx**: `number`

x 坐标的位置

#### Defined in

[src/engine/math/Matrix3.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L51)

___

### ty

• **ty**: `number`

y 坐标的位置

#### Defined in

[src/engine/math/Matrix3.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L56)

## Constructors

### constructor

• **new Matrix3**(`a?`, `b?`, `c?`, `d?`, `tx?`, `ty?`)

创建一个对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | `number` | `1` | x 的宽度 |
| `b` | `number` | `0` | y 的倾斜 |
| `c` | `number` | `0` | x 的倾斜 |
| `d` | `number` | `1` | y 的高度 |
| `tx` | `number` | `0` | x 坐标的位置 |
| `ty` | `number` | `0` | y 坐标的位置 |

#### Defined in

[src/engine/math/Matrix3.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L67)

## Methods

### clone

▸ **clone**(): [`Matrix3`](Matrix3.md)

复制对象

#### Returns

[`Matrix3`](Matrix3.md)

复制的对象

#### Defined in

[src/engine/math/Matrix3.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L80)

___

### concat

▸ **concat**(`matrix`): `void`

将当前矩阵与目标矩阵合并

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix3`](Matrix3.md) | 目标矩阵 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L88)

___

### copyFrom

▸ **copyFrom**(`other`): [`Matrix3`](Matrix3.md)

向当前矩阵值由目标矩阵值覆盖

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3`](Matrix3.md) | 目标矩阵 |

#### Returns

[`Matrix3`](Matrix3.md)

当前矩阵

#### Defined in

[src/engine/math/Matrix3.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L105)

___

### identity

▸ **identity**(): [`Matrix3`](Matrix3.md)

重置为单位矩阵

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/engine/math/Matrix3.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L118)

___

### invert

▸ **invert**(): `void`

倒置本矩阵

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L127)

___

### $invertInto

▸ **$invertInto**(`target`): `void`

将给定的矩阵倒置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Matrix3`](Matrix3.md) | 需要倒置的矩阵 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L136)

___

### rotate

▸ **rotate**(`angle`): `void`

根据角度旋转

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | 旋转角度 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L174)

___

### scale

▸ **scale**(`sx`, `sy`): `void`

根据偏移量缩放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sx` | `number` | x 轴缩放 |
| `sy` | `number` | y 轴缩放 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L200)

___

### setTo

▸ **setTo**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix3`](Matrix3.md)

重新设置矩阵值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 矩阵元素a |
| `b` | `number` | 矩阵元素b |
| `c` | `number` | 矩阵元素c |
| `d` | `number` | 矩阵元素d |
| `tx` | `number` | 矩阵元素tx |
| `ty` | `number` | 矩阵元素ty |

#### Returns

[`Matrix3`](Matrix3.md)

修改后的矩阵

#### Defined in

[src/engine/math/Matrix3.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L223)

___

### transformPoint

▸ **transformPoint**(`pointX`, `pointY`, `resultPoint?`): [`Vector3`](Vector3.md)

坐标变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointX` | `number` | x 坐标 |
| `pointY` | `number` | y 坐标 |
| `resultPoint?` | [`Vector3`](Vector3.md) | 结果向量 |

#### Returns

[`Vector3`](Vector3.md)

如果没有结果向量则新创建向量

#### Defined in

[src/engine/math/Matrix3.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L240)

___

### setTranslate

▸ **setTranslate**(`x`, `y`): `void`

平移

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x 坐标 |
| `y` | `number` | y 坐标 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:255](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L255)

___

### translate

▸ **translate**(`dx`, `dy`): `void`

偏移

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dx` | `number` | x 坐标偏移量 |
| `dy` | `number` | y 坐标偏移量 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:265](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L265)

___

### mul

▸ **mul**(`t`): `void`

相乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Matrix3`](Matrix3.md) | 因数 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L274)

___

### equals

▸ **equals**(`other`): `boolean`

与给定矩阵计算是否相等

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3`](Matrix3.md) | 给定矩阵 |

#### Returns

`boolean`

#### Defined in

[src/engine/math/Matrix3.ts:311](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L311)

___

### prepend

▸ **prepend**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix3`](Matrix3.md)

通过相乘获得一个前置矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 相乘a值 |
| `b` | `number` | 相乘b值 |
| `c` | `number` | 相乘c值 |
| `d` | `number` | 相乘d值 |
| `tx` | `number` | 相乘tx值 |
| `ty` | `number` | 相乘ty值 |

#### Returns

[`Matrix3`](Matrix3.md)

前置矩阵

#### Defined in

[src/engine/math/Matrix3.ts:325](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L325)

___

### append

▸ **append**(`mat`): [`Matrix3`](Matrix3.md)

通过相乘获得一个后置矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix3`](Matrix3.md) | 相乘因数 |

#### Returns

[`Matrix3`](Matrix3.md)

后置矩阵

#### Defined in

[src/engine/math/Matrix3.ts:345](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L345)

___

### deltaTransformPoint

▸ **deltaTransformPoint**(`point`): [`Vector3`](Vector3.md)

使用给定的点进行转换，忽略x，y坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Vector3`](Vector3.md) | 给定的点 |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Matrix3.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L367)

___

### toString

▸ **toString**(): `string`

格式化矩阵值

#### Returns

`string`

#### Defined in

[src/engine/math/Matrix3.ts:378](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L378)

___

### createBox

▸ **createBox**(`scaleX`, `scaleY`, `rotation?`, `tx?`, `ty?`): `void`

设置矩阵的缩放、旋转、转换参数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `scaleX` | `number` | `undefined` | x轴缩放 |
| `scaleY` | `number` | `undefined` | y轴缩放 |
| `rotation` | `number` | `0` | 旋转 |
| `tx` | `number` | `0` | x坐标 |
| `ty` | `number` | `0` | y坐标 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:390](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L390)

___

### createGradientBox

▸ **createGradientBox**(`width`, `height`, `rotation?`, `tx?`, `ty?`): `void`

创建渐变框

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `undefined` | 宽度 |
| `height` | `number` | `undefined` | 高度 |
| `rotation` | `number` | `0` | 旋转 |
| `tx` | `number` | `0` | x坐标 |
| `ty` | `number` | `0` | y坐标 |

#### Returns

`void`

#### Defined in

[src/engine/math/Matrix3.ts:418](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Matrix3.ts#L418)
