[**@orillusion/core**](../README.md)

***

# Class: OutlinePostData

Defined in: [src/io/OutlinePostData.ts:22](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L22)

Holds the per-slot outline data consumed by the outline post-process,
grouping highlighted entities into a fixed set of colored slots.

## Constructors

### Constructor

> **new OutlinePostData**(`groupCount?`): `OutlinePostData`

Defined in: [src/io/OutlinePostData.ts:34](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L34)

#### Parameters

##### groupCount?

`number` = `8`

#### Returns

`OutlinePostData`

## Properties

### SlotCount

> `readonly` **SlotCount**: `number` = `8`

Defined in: [src/io/OutlinePostData.ts:25](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L25)

Number of color slots (capped at 8).

***

### MaxEntities

> `readonly` **MaxEntities**: `number` = `16`

Defined in: [src/io/OutlinePostData.ts:27](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L27)

Maximum entities per slot.

***

### defaultColor

> `readonly` **defaultColor**: [`Color`](Color.md)

Defined in: [src/io/OutlinePostData.ts:29](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L29)

Default outline color used when a slot is cleared.

## Methods

### clear()

> **clear**(): `void`

Defined in: [src/io/OutlinePostData.ts:45](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L45)

Reset every slot to the default color and empty its entity list.

#### Returns

`void`

***

### clearAt()

> **clearAt**(`slotIndex`): `this`

Defined in: [src/io/OutlinePostData.ts:52](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L52)

Reset a single slot to the default color and empty its entity list.

#### Parameters

##### slotIndex

`number`

#### Returns

`this`

***

### fillDataAt()

> **fillDataAt**(`slot`, `indexList`, `color`): `this`

Defined in: [src/io/OutlinePostData.ts:62](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L62)

Populate a slot with the given entity indices and outline color.

#### Parameters

##### slot

`number`

##### indexList

`number`[]

##### color

[`Color`](Color.md)

#### Returns

`this`

***

### fetchData()

> **fetchData**(`target`): `this`

Defined in: [src/io/OutlinePostData.ts:77](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L77)

Copy the dirty flag and slots into the target, then clear the dirty flag.

#### Parameters

##### target

###### dirty

`boolean`

###### slots

[`OutlinePostSlot`](OutlinePostSlot.md)[]

#### Returns

`this`
