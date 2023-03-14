# Class: KelvinUtil

色温颜色转换器


### Methods

- [color\_temperature\_to\_rgb](KelvinUtil.md#color_temperature_to_rgb)
- [get\_red](KelvinUtil.md#get_red)
- [get\_green](KelvinUtil.md#get_green)
- [get\_blue](KelvinUtil.md#get_blue)

### Constructors

- [constructor](KelvinUtil.md#constructor)

## Methods

### color\_temperature\_to\_rgb

▸ `Static` **color_temperature_to_rgb**(`color_temperature_Kelvin`): [`Color`](Color.md)

将色温转换为颜色对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color_temperature_Kelvin` | `number` | 色温值 |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/engine/util/KelvinUtil.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/KelvinUtil.ts#L13)

___

### get\_red

▸ `Static` **get_red**(`temperature`): `number`

颜色的红色分量。

#### Parameters

| Name | Type |
| :------ | :------ |
| `temperature` | `number` |

#### Returns

`number`

#### Defined in

[src/engine/util/KelvinUtil.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/KelvinUtil.ts#L32)

___

### get\_green

▸ `Static` **get_green**(`temperature`): `number`

颜色的绿色分量。

#### Parameters

| Name | Type |
| :------ | :------ |
| `temperature` | `number` |

#### Returns

`number`

#### Defined in

[src/engine/util/KelvinUtil.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/KelvinUtil.ts#L42)

___

### get\_blue

▸ `Static` **get_blue**(`temperature`): `number`

颜色的蓝色分量。

#### Parameters

| Name | Type |
| :------ | :------ |
| `temperature` | `number` |

#### Returns

`number`

#### Defined in

[src/engine/util/KelvinUtil.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/KelvinUtil.ts#L56)

## Constructors

### constructor

• **new KelvinUtil**()
