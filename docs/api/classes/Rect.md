# Class: Rect

矩形区域


### Properties

- [x](Rect.md#x)
- [y](Rect.md#y)
- [w](Rect.md#w)
- [h](Rect.md#h)

### Constructors

- [constructor](Rect.md#constructor)

### Accessors

- [width](Rect.md#width)
- [height](Rect.md#height)

### Methods

- [clone](Rect.md#clone)
- [copyFrom](Rect.md#copyfrom)
- [copyTo](Rect.md#copyto)
- [inner](Rect.md#inner)
- [pointInRect](Rect.md#pointinrect)
- [equal](Rect.md#equal)
- [equalArea](Rect.md#equalarea)
- [equalInnerArea](Rect.md#equalinnerarea)
- [innerArea](Rect.md#innerarea)
- [setTo](Rect.md#setto)

## Properties

### x

• **x**: `number`

矩形的x坐标

#### Defined in

[src/engine/math/Rect.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L10)

___

### y

• **y**: `number`

矩形的y坐标

#### Defined in

[src/engine/math/Rect.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L14)

___

### w

• **w**: `number`

矩形的宽度

#### Defined in

[src/engine/math/Rect.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L18)

___

### h

• **h**: `number`

矩形的高度

#### Defined in

[src/engine/math/Rect.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L22)

## Constructors

### constructor

• **new Rect**(`x?`, `y?`, `width?`, `height?`)

创建一个新的矩形区域对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 矩形的x坐标 |
| `y` | `number` | `0` | 矩形的y坐标 |
| `width` | `number` | `0` | 矩形的宽度 |
| `height` | `number` | `0` | 矩形的高度 |

#### Defined in

[src/engine/math/Rect.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L30)

## Accessors

### width

• `get` **width**(): `number`

矩形的宽度

#### Returns

`number`

#### Defined in

[src/engine/math/Rect.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L42)

• `set` **width**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/math/Rect.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L36)

___

### height

• `get` **height**(): `number`

矩形的高度

#### Returns

`number`

#### Defined in

[src/engine/math/Rect.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L51)

• `set` **height**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/math/Rect.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L45)

## Methods

### clone

▸ **clone**(): [`Rect`](Rect.md)

返回一个新的矩形区域对象，其具有和当前这个矩形区域相同属性

#### Returns

[`Rect`](Rect.md)

#### Defined in

[src/engine/math/Rect.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L58)

___

### copyFrom

▸ **copyFrom**(`rect`): `void`

将源对象的属性复制给此对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | [`Rect`](Rect.md) |

#### Returns

`void`

#### Defined in

[src/engine/math/Rect.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L66)

___

### copyTo

▸ **copyTo**(`rect`): `void`

将此对象的属性复制给目标对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | [`Rect`](Rect.md) |

#### Returns

`void`

#### Defined in

[src/engine/math/Rect.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L77)

___

### inner

▸ **inner**(`x`, `y`): `boolean`

点是否在此区域内

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 点的x值 |
| `y` | `number` | 点的y值 |

#### Returns

`boolean`

#### Defined in

[src/engine/math/Rect.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L86)

___

### pointInRect

▸ `Static` **pointInRect**(`x`, `y`, `lt_x`, `lt_y`, `rb_x`, `rb_y`): `boolean`

点是否在指定的区域内

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 点的x值 |
| `y` | `number` | 点的y值 |
| `lt_x` | `number` | 左上角的x值 |
| `lt_y` | `number` | 左上角的y值 |
| `rb_x` | `number` | 右下角的x值 |
| `rb_y` | `number` | 右下角的y值 |

#### Returns

`boolean`

#### Defined in

[src/engine/math/Rect.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L102)

___

### equal

▸ **equal**(`rectangle`): `boolean`

当前矩形与目标矩形是否相等

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rectangle` | [`Rect`](Rect.md) | 目标矩形 |

#### Returns

`boolean`

#### Defined in

[src/engine/math/Rect.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L114)

___

### equalArea

▸ **equalArea**(`x`, `y`, `width`, `height`): `boolean`

当前矩形与目标矩形是否相等

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 矩形的x值 |
| `y` | `number` | 矩形的y值 |
| `width` | `number` | 矩形宽度 |
| `height` | `number` | 矩形高度 |

#### Returns

`boolean`

#### Defined in

[src/engine/math/Rect.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L125)

___

### equalInnerArea

▸ **equalInnerArea**(`source`): `boolean`

此矩形与目标对象是否有重叠的部分

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Rect`](Rect.md) | 源对象 |

#### Returns

`boolean`

#### Defined in

[src/engine/math/Rect.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L133)

___

### innerArea

▸ **innerArea**(`source`, `target`): [`Rect`](Rect.md)

返回两个矩形重叠的部分

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Rect`](Rect.md) | 源对象 |
| `target` | [`Rect`](Rect.md) | 目标对象 |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[src/engine/math/Rect.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L157)

___

### setTo

▸ **setTo**(`x`, `y`, `width`, `height`): `void`

设置矩形的属性

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x的值 |
| `y` | `number` | y的值 |
| `width` | `number` | 矩形宽度 |
| `height` | `number` | 矩形高度 |

#### Returns

`void`

#### Defined in

[src/engine/math/Rect.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rect.ts#L197)
