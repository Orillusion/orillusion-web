[**@orillusion/core**](../README.md)

***

# Class: KelvinUtil

Defined in: [src/util/KelvinUtil.ts:7](https://github.com/orillusion/orillusion/blob/main/src/util/KelvinUtil.ts#L7)

Temperature Color Converter

## Constructors

### Constructor

> **new KelvinUtil**(): `KelvinUtil`

#### Returns

`KelvinUtil`

## Methods

### color\_temperature\_to\_rgb()

> `static` **color\_temperature\_to\_rgb**(`color_temperature_Kelvin`): [`Color`](Color.md)

Defined in: [src/util/KelvinUtil.ts:13](https://github.com/orillusion/orillusion/blob/main/src/util/KelvinUtil.ts#L13)

Convert color temperature to color object

#### Parameters

##### color\_temperature\_Kelvin

`number`

Color temperature value

#### Returns

[`Color`](Color.md)

***

### get\_red()

> `static` **get\_red**(`temperature`): `number`

Defined in: [src/util/KelvinUtil.ts:32](https://github.com/orillusion/orillusion/blob/main/src/util/KelvinUtil.ts#L32)

Return red component [0-255]

#### Parameters

##### temperature

`number`

#### Returns

`number`

***

### get\_green()

> `static` **get\_green**(`temperature`): `number`

Defined in: [src/util/KelvinUtil.ts:42](https://github.com/orillusion/orillusion/blob/main/src/util/KelvinUtil.ts#L42)

Return green component [0-255]

#### Parameters

##### temperature

`number`

#### Returns

`number`

***

### get\_blue()

> `static` **get\_blue**(`temperature`): `number`

Defined in: [src/util/KelvinUtil.ts:56](https://github.com/orillusion/orillusion/blob/main/src/util/KelvinUtil.ts#L56)

Return blue component [0-255]

#### Parameters

##### temperature

`number`

#### Returns

`number`
