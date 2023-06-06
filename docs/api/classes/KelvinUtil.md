# Class: KelvinUtil

Temperature Color Converter

### Constructors

- [constructor](KelvinUtil.md#constructor)

### Methods

- [color\_temperature\_to\_rgb](KelvinUtil.md#color_temperature_to_rgb)
- [get\_red](KelvinUtil.md#get_red)
- [get\_green](KelvinUtil.md#get_green)
- [get\_blue](KelvinUtil.md#get_blue)

## Constructors

### constructor

• **new KelvinUtil**()

## Methods

### color\_temperature\_to\_rgb

▸ `Static` **color_temperature_to_rgb**(`color_temperature_Kelvin`): [`Color`](Color.md)

Convert color temperature to color object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color_temperature_Kelvin` | `number` | Color temperature value |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/util/KelvinUtil.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/util/KelvinUtil.ts#L13)

___

### get\_red

▸ `Static` **get_red**(`temperature`): `number`

Return red component [0-255]

#### Parameters

| Name | Type |
| :------ | :------ |
| `temperature` | `number` |

#### Returns

`number`

#### Defined in

[src/util/KelvinUtil.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/util/KelvinUtil.ts#L32)

___

### get\_green

▸ `Static` **get_green**(`temperature`): `number`

Return green component [0-255]

#### Parameters

| Name | Type |
| :------ | :------ |
| `temperature` | `number` |

#### Returns

`number`

#### Defined in

[src/util/KelvinUtil.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/util/KelvinUtil.ts#L42)

___

### get\_blue

▸ `Static` **get_blue**(`temperature`): `number`

Return blue component [0-255]

#### Parameters

| Name | Type |
| :------ | :------ |
| `temperature` | `number` |

#### Returns

`number`

#### Defined in

[src/util/KelvinUtil.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/util/KelvinUtil.ts#L56)
