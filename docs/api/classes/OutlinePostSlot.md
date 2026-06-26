[**@orillusion/core**](../README.md)

***

# Class: OutlinePostSlot

Defined in: [src/io/OutlinePostData.ts:8](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L8)

One outline color slot: the list of entity indices it applies to and the
outline color shared by them.

## Constructors

### Constructor

> **new OutlinePostSlot**(): `OutlinePostSlot`

#### Returns

`OutlinePostSlot`

## Properties

### indexList

> **indexList**: `Float32Array`

Defined in: [src/io/OutlinePostData.ts:10](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L10)

Entity indices included in this slot, padded with -1.

***

### color

> **color**: [`Color`](Color.md)

Defined in: [src/io/OutlinePostData.ts:12](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L12)

Outline color applied to every entity in this slot.

***

### count

> **count**: `number`

Defined in: [src/io/OutlinePostData.ts:14](https://github.com/orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L14)

Number of valid entries in indexList.
