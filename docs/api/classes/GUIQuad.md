# Class: GUIQuad


### Constructors

- [constructor](GUIQuad.md#constructor)

### Properties

- [x](GUIQuad.md#x)
- [y](GUIQuad.md#y)
- [z](GUIQuad.md#z)
- [width](GUIQuad.md#width)
- [height](GUIQuad.md#height)
- [\_global\_x](GUIQuad.md#_global_x)
- [\_global\_y](GUIQuad.md#_global_y)
- [\_global\_width](GUIQuad.md#_global_width)
- [\_global\_height](GUIQuad.md#_global_height)
- [color](GUIQuad.md#color)
- [imageType](GUIQuad.md#imagetype)
- [onChange](GUIQuad.md#onchange)
- [\_offset\_x](GUIQuad.md#_offset_x)
- [\_offset\_y](GUIQuad.md#_offset_y)

### Accessors

- [texture](GUIQuad.md#texture)
- [left](GUIQuad.md#left)
- [right](GUIQuad.md#right)
- [top](GUIQuad.md#top)
- [bottom](GUIQuad.md#bottom)

### Methods

- [transformQuad](GUIQuad.md#transformquad)
- [updateGeometryBuffer](GUIQuad.md#updategeometrybuffer)

## Constructors

### constructor

• **new GUIQuad**()

## Properties

### x

• **x**: `number` = `0`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L7)

___

### y

• **y**: `number` = `0`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L8)

___

### z

• **z**: `number`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L9)

___

### width

• **width**: `number` = `1`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L10)

___

### height

• **height**: `number` = `1`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L11)

___

### \_global\_x

• **\_global\_x**: `number` = `0`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L13)

___

### \_global\_y

• **\_global\_y**: `number` = `0`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L14)

___

### \_global\_width

• **\_global\_width**: `number` = `0`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L16)

___

### \_global\_height

• **\_global\_height**: `number` = `0`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L17)

___

### color

• `Readonly` **color**: [`Color`](Color.md)

#### Defined in

[src/engine/gui/core/GUIQuad.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L20)

___

### imageType

• **imageType**: [`ImageType`](../enums/ImageType.md) = `ImageType.Simple`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L21)

___

### onChange

• **onChange**: `boolean` = `true`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L22)

___

### \_offset\_x

• **\_offset\_x**: `number` = `0`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L24)

___

### \_offset\_y

• **\_offset\_y**: `number` = `0`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L25)

## Accessors

### texture

• `get` **texture**(): [`GUISubTexture`](GUISubTexture.md)

#### Returns

[`GUISubTexture`](GUISubTexture.md)

#### Defined in

[src/engine/gui/core/GUIQuad.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L27)

• `set` **texture**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISubTexture`](GUISubTexture.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L31)

___

### left

• `get` **left**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L38)

___

### right

• `get` **right**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L42)

___

### top

• `get` **top**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L46)

___

### bottom

• `get` **bottom**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L50)

## Methods

### transformQuad

▸ **transformQuad**(`transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L54)

___

### updateGeometryBuffer

▸ **updateGeometryBuffer**(`guiGeometry`, `transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guiGeometry` | [`GUIGeometry`](GUIGeometry.md) |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/core/GUIQuad.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIQuad.ts#L97)
