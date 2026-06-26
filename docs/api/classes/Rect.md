[**@orillusion/core**](../README.md)

***

# Class: Rect

Defined in: [src/math/Rect.ts:6](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L6)

Rectangular region

## Constructors

### Constructor

> **new Rect**(`x?`, `y?`, `width?`, `height?`): `Rect`

Defined in: [src/math/Rect.ts:34](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L34)

Creates a new rectangular area object

#### Parameters

##### x?

`number` = `0`

The x-coordinate of the rectangle

##### y?

`number` = `0`

The y coordinate of the rectangle

##### width?

`number` = `0`

Width of a rectangle

##### height?

`number` = `0`

Height of rectangle

#### Returns

`Rect`

## Properties

### x

> **x**: `number`

Defined in: [src/math/Rect.ts:10](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L10)

The x-coordinate of the rectangle

***

### y

> **y**: `number`

Defined in: [src/math/Rect.ts:15](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L15)

The y-coordinate of the rectangle

***

### w

> **w**: `number`

Defined in: [src/math/Rect.ts:20](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L20)

Width of a rectangle

***

### h

> **h**: `number`

Defined in: [src/math/Rect.ts:25](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L25)

Height of rectangle

## Accessors

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [src/math/Rect.ts:44](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L44)

Width of a rectangle

##### Returns

`number`

#### Set Signature

> **set** **width**(`v`): `void`

Defined in: [src/math/Rect.ts:51](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L51)

Set the width of the rectangle

##### Parameters

###### v

`number`

##### Returns

`void`

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [src/math/Rect.ts:58](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L58)

Height of rectangle

##### Returns

`number`

#### Set Signature

> **set** **height**(`v`): `void`

Defined in: [src/math/Rect.ts:65](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L65)

Set the height of the rectangle

##### Parameters

###### v

`number`

##### Returns

`void`

## Methods

### pointInRect()

> `static` **pointInRect**(`x`, `y`, `lt_x`, `lt_y`, `rb_x`, `rb_y`): `boolean`

Defined in: [src/math/Rect.ts:79](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L79)

Whether the point is within the specified area

#### Parameters

##### x

`number`

x value of point

##### y

`number`

y value of point

##### lt\_x

`number`

The x value in the upper left corner

##### lt\_y

`number`

The y value in the upper left corner

##### rb\_x

`number`

The x value in the lower right corner

##### rb\_y

`number`

The y value in the lower right corner

#### Returns

`boolean`

***

### clone()

> **clone**(): `Rect`

Defined in: [src/math/Rect.ts:91](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L91)

Returns a new rectangular area object with the same properties as the current rectangular area

#### Returns

`Rect`

***

### copy()

> **copy**(`rect`): `void`

Defined in: [src/math/Rect.ts:100](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L100)

Copy the properties of the source object to this object

#### Parameters

##### rect

`Rect`

#### Returns

`void`

***

### copyTo()

> **copyTo**(`rect`): `void`

Defined in: [src/math/Rect.ts:112](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L112)

Copy the properties of this object to the target object

#### Parameters

##### rect

`Rect`

#### Returns

`void`

***

### inner()

> **inner**(`x`, `y`): `boolean`

Defined in: [src/math/Rect.ts:122](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L122)

Whether the point is in this area

#### Parameters

##### x

`number`

x value of point

##### y

`number`

y value of point

#### Returns

`boolean`

***

### equal()

> **equal**(`rectangle`): `boolean`

Defined in: [src/math/Rect.ts:134](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L134)

Whether the current rectangle is equal to the target rectangle

#### Parameters

##### rectangle

`Rect`

Target rectangle

#### Returns

`boolean`

***

### equalArea()

> **equalArea**(`x`, `y`, `width`, `height`): `boolean`

Defined in: [src/math/Rect.ts:146](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L146)

Whether the current rectangle is equal to the target rectangle

#### Parameters

##### x

`number`

The x value of the rectangle

##### y

`number`

The y value of the rectangle

##### width

`number`

Rectangle width

##### height

`number`

Rectangular height

#### Returns

`boolean`

***

### equalInnerArea()

> **equalInnerArea**(`source`): `boolean`

Defined in: [src/math/Rect.ts:155](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L155)

Whether this rectangle overlaps with the target object

#### Parameters

##### source

`Rect`

Source object

#### Returns

`boolean`

***

### innerArea()

> **innerArea**(`source`, `target`): `Rect`

Defined in: [src/math/Rect.ts:180](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L180)

Returns the overlap of two rectangles

#### Parameters

##### source

`Rect`

source object

##### target

`Rect`

target object

#### Returns

`Rect`

***

### setTo()

> **setTo**(`x`, `y`, `width`, `height`): `void`

Defined in: [src/math/Rect.ts:219](https://github.com/orillusion/orillusion/blob/main/src/math/Rect.ts#L219)

Sets the properties of the rectangle

#### Parameters

##### x

`number`

x value

##### y

`number`

y value

##### width

`number`

Rectangle width

##### height

`number`

Rectangular height

#### Returns

`void`
