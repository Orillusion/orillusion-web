# Class: OutlinePostData

### Constructors

- [constructor](OutlinePostData.md#constructor)

### Properties

- [SlotCount](OutlinePostData.md#slotcount)
- [MaxEntities](OutlinePostData.md#maxentities)
- [defaultColor](OutlinePostData.md#defaultcolor)

### Methods

- [clear](OutlinePostData.md#clear)
- [clearAt](OutlinePostData.md#clearat)
- [fillDataAt](OutlinePostData.md#filldataat)
- [fetchData](OutlinePostData.md#fetchdata)

## Constructors

### constructor

• **new OutlinePostData**(): [`OutlinePostData`](OutlinePostData.md)

#### Returns

[`OutlinePostData`](OutlinePostData.md)

#### Defined in

[src/io/OutlinePostData.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L19)

## Properties

### SlotCount

• `Readonly` **SlotCount**: `number` = `8`

#### Defined in

[src/io/OutlinePostData.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L12)

___

### MaxEntities

• `Readonly` **MaxEntities**: `number` = `16`

#### Defined in

[src/io/OutlinePostData.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L13)

___

### defaultColor

• `Readonly` **defaultColor**: [`Color`](Color.md)

#### Defined in

[src/io/OutlinePostData.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L14)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/io/OutlinePostData.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L30)

___

### clearAt

▸ **clearAt**(`slotIndex`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slotIndex` | `number` |

#### Returns

`this`

#### Defined in

[src/io/OutlinePostData.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L36)

___

### fillDataAt

▸ **fillDataAt**(`slot`, `indexList`, `color`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slot` | `number` |
| `indexList` | `number`[] |
| `color` | [`Color`](Color.md) |

#### Returns

`this`

#### Defined in

[src/io/OutlinePostData.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L45)

___

### fetchData

▸ **fetchData**(`target`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `target.dirty` | `boolean` |
| `target.slots` | [`OutlinePostSlot`](OutlinePostSlot.md)[] |

#### Returns

`this`

#### Defined in

[src/io/OutlinePostData.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlinePostData.ts#L59)
