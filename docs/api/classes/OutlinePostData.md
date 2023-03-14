# Class: OutlinePostData


### Properties

- [SlotCount](OutlinePostData.md#slotcount)
- [MaxEntities](OutlinePostData.md#maxentities)
- [defaultColor](OutlinePostData.md#defaultcolor)

### Constructors

- [constructor](OutlinePostData.md#constructor)

### Methods

- [clear](OutlinePostData.md#clear)
- [clearAt](OutlinePostData.md#clearat)
- [fillDataAt](OutlinePostData.md#filldataat)
- [fetchData](OutlinePostData.md#fetchdata)

## Properties

### SlotCount

• `Readonly` **SlotCount**: `number` = `8`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L32)

___

### MaxEntities

• `Readonly` **MaxEntities**: `number` = `16`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L33)

___

### defaultColor

• `Readonly` **defaultColor**: [`Color`](Color.md)

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L34)

## Constructors

### constructor

• **new OutlinePostData**()

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L39)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L50)

___

### clearAt

▸ **clearAt**(`slotIndex`): [`OutlinePostData`](OutlinePostData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `slotIndex` | `number` |

#### Returns

[`OutlinePostData`](OutlinePostData.md)

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L56)

___

### fillDataAt

▸ **fillDataAt**(`slot`, `indexList`, `color`): [`OutlinePostData`](OutlinePostData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `slot` | `number` |
| `indexList` | `number`[] |
| `color` | [`Color`](Color.md) |

#### Returns

[`OutlinePostData`](OutlinePostData.md)

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L65)

___

### fetchData

▸ **fetchData**(`target`): [`OutlinePostData`](OutlinePostData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `target.dirty` | `boolean` |
| `target.slots` | [`OutlinePostSlot`](OutlinePostSlot.md)[] |

#### Returns

[`OutlinePostData`](OutlinePostData.md)

#### Defined in

[src/engine/gfx/renderJob/post/OutlinePost.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/OutlinePost.ts#L79)
