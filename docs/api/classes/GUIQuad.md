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
- [cacheTextureId](GUIQuad.md#cachetextureid)

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

• **new GUIQuad**(): [`GUIQuad`](GUIQuad.md)

#### Returns

[`GUIQuad`](GUIQuad.md)

## Properties

### x

• **x**: `number` = `0`

#### Defined in

[src/components/gui/core/GUIQuad.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L19)

___

### y

• **y**: `number` = `0`

#### Defined in

[src/components/gui/core/GUIQuad.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L20)

___

### z

• **z**: `number` = `0`

#### Defined in

[src/components/gui/core/GUIQuad.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L21)

___

### width

• **width**: `number` = `1`

#### Defined in

[src/components/gui/core/GUIQuad.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L22)

___

### height

• **height**: `number` = `1`

#### Defined in

[src/components/gui/core/GUIQuad.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L23)

___

### dirtyAttributes

• **dirtyAttributes**: `GUIQuadAttrEnum` = `GUIQuadAttrEnum.MAX`

#### Defined in

[src/components/gui/core/GUIQuad.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L36)

___

### cacheTextureId

• **cacheTextureId**: `number` = `-1`

#### Defined in

[src/components/gui/core/GUIQuad.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L38)

## Accessors

### quadPool

• `get` **quadPool**(): [`PoolNode`](PoolNode.md)\<[`GUIQuad`](GUIQuad.md)\>

#### Returns

[`PoolNode`](PoolNode.md)\<[`GUIQuad`](GUIQuad.md)\>

#### Defined in

[src/components/gui/core/GUIQuad.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L41)

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L61)

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L65)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L70)

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L74)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/core/GUIQuad.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L80)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L84)

___

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L91)

• `set` **sprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L95)

___

### left

• `get` **left**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L102)

___

### right

• `get` **right**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L106)

___

### top

• `get` **top**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L110)

___

### bottom

• `get` **bottom**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/core/GUIQuad.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L114)

## Methods

### recycleQuad

▸ **recycleQuad**(`quad`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [`GUIQuad`](GUIQuad.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIQuad.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L46)

___

### spawnQuad

▸ **spawnQuad**(): [`GUIQuad`](GUIQuad.md)

#### Returns

[`GUIQuad`](GUIQuad.md)

#### Defined in

[src/components/gui/core/GUIQuad.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L56)

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

[src/components/gui/core/GUIQuad.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L118)

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

[src/components/gui/core/GUIQuad.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L124)

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

[src/components/gui/core/GUIQuad.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L130)

___

### applyTransform

▸ **applyTransform**(`transform`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`this`

#### Defined in

[src/components/gui/core/GUIQuad.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L133)

___

### writeToGeometry

▸ **writeToGeometry**(`guiGeometry`, `transform`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guiGeometry` | [`GUIGeometry`](GUIGeometry.md) |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`this`

#### Defined in

[src/components/gui/core/GUIQuad.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIQuad.ts#L178)
