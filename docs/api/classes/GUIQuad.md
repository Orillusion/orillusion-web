# Class: GUIQuad

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

### Constructors

- [constructor](GUIQuad.md#constructor)

### Properties

- [x](GUIQuad.md#x)
- [y](GUIQuad.md#y)
- [z](GUIQuad.md#z)
- [width](GUIQuad.md#width)
- [height](GUIQuad.md#height)
- [dirtyAttributes](GUIQuad.md#dirtyattributes)

## Accessors

### quadPool

• `Static` `get` **quadPool**(): [`PoolNode`](PoolNode.md)<[`GUIQuad`](GUIQuad.md)\>

#### Returns

[`PoolNode`](PoolNode.md)<[`GUIQuad`](GUIQuad.md)\>

#### Defined in

[src/components/gui/core/GUIQuad.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L35)

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L54)

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L58)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L63)

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L67)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/core/GUIQuad.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L73)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L77)

___

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L84)

• `set` **sprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L88)

___

### left

• `get` **left**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L95)

___

### right

• `get` **right**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L99)

___

### top

• `get` **top**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L103)

___

### bottom

• `get` **bottom**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L107)

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

[src/components/gui/core/GUIQuad.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L40)

___

### spawnQuad

▸ `Static` **spawnQuad**(): [`GUIQuad`](GUIQuad.md)

#### Returns

[`GUIQuad`](GUIQuad.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L49)

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

[src/components/gui/core/GUIQuad.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L111)

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

[src/components/gui/core/GUIQuad.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L117)

___

### setAttrChange

▸ **setAttrChange**(`attr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`GUIQuadAttrEnum`](../enums/GUIQuadAttrEnum.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L123)

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

[src/components/gui/core/GUIQuad.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L126)

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

[src/components/gui/core/GUIQuad.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L171)

## Constructors

### constructor

• **new GUIQuad**()

## Properties

### x

• **x**: `number` = `0`

#### Defined in

[src/components/gui/core/GUIQuad.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L14)

___

### y

• **y**: `number` = `0`

#### Defined in

[src/components/gui/core/GUIQuad.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L15)

___

### z

• **z**: `number` = `0`

#### Defined in

[src/components/gui/core/GUIQuad.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L16)

___

### width

• **width**: `number` = `1`

#### Defined in

[src/components/gui/core/GUIQuad.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L17)

___

### height

• **height**: `number` = `1`

#### Defined in

[src/components/gui/core/GUIQuad.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L18)

___

### dirtyAttributes

• **dirtyAttributes**: [`GUIQuadAttrEnum`](../enums/GUIQuadAttrEnum.md) = `GUIQuadAttrEnum.MAX`

#### Defined in

[src/components/gui/core/GUIQuad.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L31)
