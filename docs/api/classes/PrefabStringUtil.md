[**@orillusion/core**](../README.md)

***

# Class: PrefabStringUtil

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:8](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L8)

String parsing helpers for the prefab text format. Converts raw string
fields into numbers, booleans and numeric/string arrays.

## Constructors

### Constructor

> **new PrefabStringUtil**(): `PrefabStringUtil`

#### Returns

`PrefabStringUtil`

## Methods

### getNumber()

> `static` **getNumber**(`st`): `number`

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:14](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L14)

Parse a string as a floating-point number.

#### Parameters

##### st

`string`

the source string.

#### Returns

`number`

***

### getInt()

> `static` **getInt**(`st`): `number`

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:23](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L23)

Parse a string as an integer.

#### Parameters

##### st

`string`

the source string.

#### Returns

`number`

***

### getBoolean()

> `static` **getBoolean**(`st`): `boolean`

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:32](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L32)

Parse a string as a boolean (`"true"` maps to true, anything else false).

#### Parameters

##### st

`string`

the source string.

#### Returns

`boolean`

***

### getNumberArray()

> `static` **getNumberArray**(`st`): `string`

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:41](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L41)

Parse a bracketed, comma-separated string into a list of numbers.

#### Parameters

##### st

`string`

the source string, e.g. `"[1,2,3]"`.

#### Returns

`string`

***

### getStringArray()

> `static` **getStringArray**(`st`): `string`[]

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:57](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L57)

Parse a bracketed, comma-separated string into a list of strings.

#### Parameters

##### st

`string`

the source string, e.g. `"[a,b,c]"`.

#### Returns

`string`[]

***

### getVector2()

> `static` **getVector2**(`st`): `void`

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:73](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L73)

Parse a string into a [Vector2](Vector2.md). (Reserved; not yet implemented.)

#### Parameters

##### st

`string`

the source string.

#### Returns

`void`

***

### getVector3()

> `static` **getVector3**(`st`): `void`

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:81](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L81)

Parse a string into a [Vector3](Vector3.md). (Reserved; not yet implemented.)

#### Parameters

##### st

`string`

the source string.

#### Returns

`void`

***

### getVector4()

> `static` **getVector4**(`st`): `void`

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:89](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L89)

Parse a string into a Vector4. (Reserved; not yet implemented.)

#### Parameters

##### st

`string`

the source string.

#### Returns

`void`

***

### getQuaternion()

> `static` **getQuaternion**(`st`): `void`

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:97](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L97)

Parse a string into a [Quaternion](Quaternion.md). (Reserved; not yet implemented.)

#### Parameters

##### st

`string`

the source string.

#### Returns

`void`

***

### getColor()

> `static` **getColor**(`st`): `void`

Defined in: [src/loader/parser/prefab/PrefabStringUtil.ts:105](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabStringUtil.ts#L105)

Parse a string into a [Color](Color.md). (Reserved; not yet implemented.)

#### Parameters

##### st

`string`

the source string.

#### Returns

`void`
