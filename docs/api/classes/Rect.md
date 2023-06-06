# Class: Rect

Rectangular region

### Constructors

- [constructor](Rect.md#constructor)

### Properties

- [x](Rect.md#x)
- [y](Rect.md#y)
- [w](Rect.md#w)
- [h](Rect.md#h)

### Accessors

- [width](Rect.md#width)
- [height](Rect.md#height)

### Methods

- [pointInRect](Rect.md#pointinrect)
- [clone](Rect.md#clone)
- [copyFrom](Rect.md#copyfrom)
- [copyTo](Rect.md#copyto)
- [inner](Rect.md#inner)
- [equal](Rect.md#equal)
- [equalArea](Rect.md#equalarea)
- [equalInnerArea](Rect.md#equalinnerarea)
- [innerArea](Rect.md#innerarea)
- [setTo](Rect.md#setto)

## Constructors

### constructor

• **new Rect**(`x?`, `y?`, `width?`, `height?`)

Creates a new rectangular area object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The x-coordinate of the rectangle |
| `y` | `number` | `0` | The y coordinate of the rectangle |
| `width` | `number` | `0` | Width of a rectangle |
| `height` | `number` | `0` | Height of rectangle |

#### Defined in

[src/math/Rect.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L34)

## Properties

### x

• **x**: `number`

The x-coordinate of the rectangle

#### Defined in

[src/math/Rect.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L10)

___

### y

• **y**: `number`

The y-coordinate of the rectangle

#### Defined in

[src/math/Rect.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L15)

___

### w

• **w**: `number`

Width of a rectangle

#### Defined in

[src/math/Rect.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L20)

___

### h

• **h**: `number`

Height of rectangle

#### Defined in

[src/math/Rect.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L25)

## Accessors

### width

• `get` **width**(): `number`

Width of a rectangle

#### Returns

`number`

#### Defined in

[src/math/Rect.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L44)

• `set` **width**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Rect.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L48)

___

### height

• `get` **height**(): `number`

Height of rectangle

#### Returns

`number`

#### Defined in

[src/math/Rect.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L55)

• `set` **height**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Rect.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L59)

## Methods

### pointInRect

▸ `Static` **pointInRect**(`x`, `y`, `lt_x`, `lt_y`, `rb_x`, `rb_y`): `boolean`

Whether the point is within the specified area

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x value of point |
| `y` | `number` | y value of point |
| `lt_x` | `number` | The x value in the upper left corner |
| `lt_y` | `number` | The y value in the upper left corner |
| `rb_x` | `number` | The x value in the lower right corner |
| `rb_y` | `number` | The y value in the lower right corner |

#### Returns

`boolean`

#### Defined in

[src/math/Rect.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L73)

___

### clone

▸ **clone**(): [`Rect`](Rect.md)

Returns a new rectangular area object with the same properties as the current rectangular area

#### Returns

[`Rect`](Rect.md)

#### Defined in

[src/math/Rect.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L85)

___

### copyFrom

▸ **copyFrom**(`rect`): `void`

Copy the properties of the source object to this object

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | [`Rect`](Rect.md) |

#### Returns

`void`

#### Defined in

[src/math/Rect.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L94)

___

### copyTo

▸ **copyTo**(`rect`): `void`

Copy the properties of this object to the target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | [`Rect`](Rect.md) |

#### Returns

`void`

#### Defined in

[src/math/Rect.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L106)

___

### inner

▸ **inner**(`x`, `y`): `boolean`

Whether the point is in this area

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x value of point |
| `y` | `number` | y value of point |

#### Returns

`boolean`

#### Defined in

[src/math/Rect.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L116)

___

### equal

▸ **equal**(`rectangle`): `boolean`

Whether the current rectangle is equal to the target rectangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rectangle` | [`Rect`](Rect.md) | Target rectangle |

#### Returns

`boolean`

#### Defined in

[src/math/Rect.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L128)

___

### equalArea

▸ **equalArea**(`x`, `y`, `width`, `height`): `boolean`

Whether the current rectangle is equal to the target rectangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x value of the rectangle |
| `y` | `number` | The y value of the rectangle |
| `width` | `number` | Rectangle width |
| `height` | `number` | Rectangular height |

#### Returns

`boolean`

#### Defined in

[src/math/Rect.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L140)

___

### equalInnerArea

▸ **equalInnerArea**(`source`): `boolean`

Whether this rectangle overlaps with the target object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Rect`](Rect.md) | Source object |

#### Returns

`boolean`

#### Defined in

[src/math/Rect.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L149)

___

### innerArea

▸ **innerArea**(`source`, `target`): [`Rect`](Rect.md)

Returns the overlap of two rectangles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Rect`](Rect.md) | source object |
| `target` | [`Rect`](Rect.md) | target object |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[src/math/Rect.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L174)

___

### setTo

▸ **setTo**(`x`, `y`, `width`, `height`): `void`

Sets the properties of the rectangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x value |
| `y` | `number` | y value |
| `width` | `number` | Rectangle width |
| `height` | `number` | Rectangular height |

#### Returns

`void`

#### Defined in

[src/math/Rect.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/math/Rect.ts#L213)
