[**@orillusion/core**](../README.md)

***

# Class: StringUtil

Defined in: [src/util/StringUtil.ts:5](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L5)

String processing tool class

## Constructors

### Constructor

> **new StringUtil**(): `StringUtil`

#### Returns

`StringUtil`

## Methods

### hasString()

> `static` **hasString**(`fields`, `str`): `number`

Defined in: [src/util/StringUtil.ts:15](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L15)

Does the string exist

#### Parameters

##### fields

`string`[]

List of detected string

##### str

`string`

source string

#### Returns

`number`

Return the index position where it is located. If it does not exist, return -1

***

### getEllipsis()

> `static` **getEllipsis**(`str`, `len?`): `string`

Defined in: [src/util/StringUtil.ts:31](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L31)

Gets an ellipsis terminated string representation that exceeds the range

#### Parameters

##### str

`any`

source string

##### len?

`number` = `4`

range of string

#### Returns

`string`

result string

***

### getURLName()

> `static` **getURLName**(`url`): `string`

Defined in: [src/util/StringUtil.ts:43](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L43)

get name based on URL

#### Parameters

##### url

`string`

source url

#### Returns

`string`

name

***

### getFileFormat()

> `static` **getFileFormat**(`url`): `string`

Defined in: [src/util/StringUtil.ts:57](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L57)

get suffix of file name from url

#### Parameters

##### url

`string`

source url

#### Returns

`string`

suffix

***

### readLineProperty()

> `static` **readLineProperty**(`line`, `data`): `void`

Defined in: [src/util/StringUtil.ts:74](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L74)

get information stored in a string

#### Parameters

##### line

`string`

source string

##### data

`any`

result data reference

#### Returns

`void`

***

### getPath()

> `static` **getPath**(`url`): `string`

Defined in: [src/util/StringUtil.ts:93](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L93)

#### Parameters

##### url

`string`

#### Returns

`string`

***

### normalizePath()

> `static` **normalizePath**(`url`): `string`

Defined in: [src/util/StringUtil.ts:99](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L99)

#### Parameters

##### url

`string`

#### Returns

`string`

***

### getStringList()

> `static` **getStringList**(`str`, `char?`): `string`[]

Defined in: [src/util/StringUtil.ts:135](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L135)

Used to cut specified characters

#### Parameters

##### str

`string`

source string

##### char?

`string` = `';'`

cut string

#### Returns

`string`[]

result string array

***

### formatTime()

> `static` **formatTime**(`time`): `string`[]

Defined in: [src/util/StringUtil.ts:144](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L144)

Format timestamp data

#### Parameters

##### time

`number`

timestamp

#### Returns

`string`[]

***

### trim()

> `static` **trim**(`str`): `any`

Defined in: [src/util/StringUtil.ts:158](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L158)

trim

#### Parameters

##### str

`any`

source string

#### Returns

`any`

result string

***

### isEmpty()

> `static` **isEmpty**(`value`): `boolean`

Defined in: [src/util/StringUtil.ts:167](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L167)

Determine if the string is empty, null, '' or 'null'

#### Parameters

##### value

`any`

source string

#### Returns

`boolean`

boolean

***

### strCut()

> `static` **strCut**(`str`, `len`): `string`

Defined in: [src/util/StringUtil.ts:177](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L177)

Handle strings that exceed the length range, such as adding strings that exceed the range

#### Parameters

##### str

`any`

source string

##### len

`any`

length

#### Returns

`string`

result string

***

### toQueryPair()

> `static` **toQueryPair**(`key`, `value`, `isEncodeURI?`): `string`

Defined in: [src/util/StringUtil.ts:207](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L207)

According to the splicing request parameters

#### Parameters

##### key

`any`

key string

##### value

`any`

value string

##### isEncodeURI?

`boolean` = `false`

isEncodeURI

#### Returns

`string`

result string

***

### stringFormat()

> `static` **stringFormat**(`str`, ...`params`): `string`

Defined in: [src/util/StringUtil.ts:217](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L217)

format a string

#### Parameters

##### str

`string`

source string

##### params

...`any`[]

Pass in a regular processing parameter array

#### Returns

`string`

result string

***

### parseJson2String()

> `static` **parseJson2String**(`json`, `options?`): `string`

Defined in: [src/util/StringUtil.ts:244](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L244)

Convert JSON objects to strings

#### Parameters

##### json

`any`

object of json

##### options?

`any`

#### Returns

`string`

result string

***

### compareVersion()

> `static` **compareVersion**(`v1`, `v2`): `-1` \| `0` \| `1`

Defined in: [src/util/StringUtil.ts:310](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L310)

Compatibility mode - version comparison

#### Parameters

##### v1

`any`

Version 1

##### v2

`any`

Version 2

#### Returns

`-1` \| `0` \| `1`

Returns 1, -1, or 0, indicating that the version number is greater, less, or equal, respectively

***

### buildRandomCode()

> `static` **buildRandomCode**(): `string`

Defined in: [src/util/StringUtil.ts:340](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L340)

Generate non repeating random string codes

#### Returns

`string`

result

***

### UUID()

> `static` **UUID**(): `string`

Defined in: [src/util/StringUtil.ts:356](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L356)

UUID

#### Returns

`string`

UUID

***

### stringToHash()

> `static` **stringToHash**(`str`): `number`

Defined in: [src/util/StringUtil.ts:369](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L369)

make hash code

#### Parameters

##### str

`any`

source value

#### Returns

`number`

hash code

***

### parseUrl()

> `static` **parseUrl**(`base`, `url`): `string`

Defined in: [src/util/StringUtil.ts:386](https://github.com/orillusion/orillusion/blob/main/src/util/StringUtil.ts#L386)

Convert GLTF URL Address

#### Parameters

##### base

`string`

baseURL

##### url

`string`

source url

#### Returns

`string`

result url
