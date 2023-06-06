# Class: GUIQuad

The smallest unit in the GUI, basic information required for rendering a plane

### Constructors

- [constructor](GUIQuad.md#constructor)

### Properties

- [x](GUIQuad.md#x)
- [y](GUIQuad.md#y)
- [z](GUIQuad.md#z)
- [width](GUIQuad.md#width)
- [height](GUIQuad.md#height)
- [dirtyAttributes](GUIQuad.md#dirtyattributes)

### Accessors

- [quadPool](GUIQuad.md#quadpool)
- [imageType](GUIQuad.md#imagetype)
- [color](GUIQuad.md#color)
- [visible](GUIQuad.md#visible)
- [sprite](GUIQuad.md#sprite)
- [left](GUIQuad.md#left)
- [right](GUIQuad.md#right)
- [top](GUIQuad.md#top)
- [bottom](GUIQuad.md#bottom)

### Methods

- [recycleQuad](GUIQuad.md#recyclequad)
- [spawnQuad](GUIQuad.md#spawnquad)
- [setSize](GUIQuad.md#setsize)
- [setXY](GUIQuad.md#setxy)
- [setAttrChange](GUIQuad.md#setattrchange)
- [applyTransform](GUIQuad.md#applytransform)
- [writeToGeometry](GUIQuad.md#writetogeometry)

## Constructors

### constructor

• **new GUIQuad**()

## Properties

### x

• **x**: `number` = `0`

#### Defined in

[src/components/gui/core/GUIQuad.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L18)

___

### y

• **y**: `number` = `0`

#### Defined in

[src/components/gui/core/GUIQuad.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L19)

___

### z

• **z**: `number` = `0`

#### Defined in

[src/components/gui/core/GUIQuad.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L20)

___

### width

• **width**: `number` = `1`

#### Defined in

[src/components/gui/core/GUIQuad.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L21)

___

### height

• **height**: `number` = `1`

#### Defined in

[src/components/gui/core/GUIQuad.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L22)

___

### dirtyAttributes

• **dirtyAttributes**: `GUIQuadAttrEnum` = `GUIQuadAttrEnum.MAX`

#### Defined in

[src/components/gui/core/GUIQuad.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L35)

## Accessors

### quadPool

• `Static` `get` **quadPool**(): [`PoolNode`](PoolNode.md)<[`GUIQuad`](GUIQuad.md)\>

#### Returns

[`PoolNode`](PoolNode.md)<[`GUIQuad`](GUIQuad.md)\>

#### Defined in

[src/components/gui/core/GUIQuad.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L39)

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L58)

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L62)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L67)

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L71)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/core/GUIQuad.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L77)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L81)

___

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L88)

• `set` **sprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L92)

___

### left

• `get` **left**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L99)

___

### right

• `get` **right**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L103)

___

### top

• `get` **top**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L107)

___

### bottom

• `get` **bottom**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L111)

## Methods

### recycleQuad

▸ `Static` **recycleQuad**(`quad`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [`GUIQuad`](GUIQuad.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L44)

___

### spawnQuad

▸ `Static` **spawnQuad**(): [`GUIQuad`](GUIQuad.md)

#### Returns

[`GUIQuad`](GUIQuad.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L53)

___

### setSize

▸ **setSize**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L115)

___

### setXY

▸ **setXY**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L121)

___

### setAttrChange

▸ **setAttrChange**(`attr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `GUIQuadAttrEnum` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L127)

___

### applyTransform

▸ **applyTransform**(`transform`): [`GUIQuad`](GUIQuad.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

[`GUIQuad`](GUIQuad.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L130)

___

### writeToGeometry

▸ **writeToGeometry**(`guiGeometry`, `transform`): [`GUIQuad`](GUIQuad.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `guiGeometry` | [`GUIGeometry`](GUIGeometry.md) |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

[`GUIQuad`](GUIQuad.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L175)
