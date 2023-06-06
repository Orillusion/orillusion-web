# Class: StringUtil

String processing tool class

### Constructors

- [constructor](StringUtil.md#constructor)

### Methods

- [hasString](StringUtil.md#hasstring)
- [getEllipsis](StringUtil.md#getellipsis)
- [getURLName](StringUtil.md#geturlname)
- [getFileFormat](StringUtil.md#getfileformat)
- [readLineProperty](StringUtil.md#readlineproperty)
- [getPath](StringUtil.md#getpath)
- [normalizePath](StringUtil.md#normalizepath)
- [getStringList](StringUtil.md#getstringlist)
- [formatTime](StringUtil.md#formattime)
- [trim](StringUtil.md#trim)
- [isEmpty](StringUtil.md#isempty)
- [strCut](StringUtil.md#strcut)
- [toQueryPair](StringUtil.md#toquerypair)
- [stringFormat](StringUtil.md#stringformat)
- [parseJson2String](StringUtil.md#parsejson2string)
- [compareVersion](StringUtil.md#compareversion)
- [buildRandomCode](StringUtil.md#buildrandomcode)
- [UUID](StringUtil.md#uuid)
- [stringToHash](StringUtil.md#stringtohash)
- [parseUrl](StringUtil.md#parseurl)

## Constructors

### constructor

• **new StringUtil**()

## Methods

### hasString

▸ `Static` **hasString**(`fields`, `str`): `number`

Does the string exist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | `string`[] | List of detected string |
| `str` | `string` | source string |

#### Returns

`number`

Return the index position where it is located. If it does not exist, return -1

#### Defined in

[src/util/StringUtil.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L15)

___

### getEllipsis

▸ `Static` **getEllipsis**(`str`, `len?`): `string`

Gets an ellipsis terminated string representation that exceeds the range

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `any` | `undefined` | source string |
| `len` | `number` | `4` | range of string |

#### Returns

`string`

result string

#### Defined in

[src/util/StringUtil.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L31)

___

### getURLName

▸ `Static` **getURLName**(`url`): `string`

get name based on URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | source url |

#### Returns

`string`

name

#### Defined in

[src/util/StringUtil.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L43)

___

### getFileFormat

▸ `Static` **getFileFormat**(`url`): `string`

get suffix of file name from url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | source url |

#### Returns

`string`

suffix

#### Defined in

[src/util/StringUtil.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L57)

___

### readLineProperty

▸ `Static` **readLineProperty**(`line`, `data`): `void`

get information stored in a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | `string` | source string |
| `data` | `any` | result data reference |

#### Returns

`void`

#### Defined in

[src/util/StringUtil.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L74)

___

### getPath

▸ `Static` **getPath**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[src/util/StringUtil.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L93)

___

### normalizePath

▸ `Static` **normalizePath**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[src/util/StringUtil.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L99)

___

### getStringList

▸ `Static` **getStringList**(`str`, `char?`): `string`[]

Used to cut specified characters

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | source string |
| `char` | `string` | `';'` | cut string |

#### Returns

`string`[]

result string array

#### Defined in

[src/util/StringUtil.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L135)

___

### formatTime

▸ `Static` **formatTime**(`time`): `string`[]

Format timestamp data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | timestamp |

#### Returns

`string`[]

#### Defined in

[src/util/StringUtil.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L144)

___

### trim

▸ `Static` **trim**(`str`): `any`

trim

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `any` | source string |

#### Returns

`any`

result string

#### Defined in

[src/util/StringUtil.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L158)

___

### isEmpty

▸ `Static` **isEmpty**(`value`): `boolean`

Determine if the string is empty, null, '' or 'null'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | source string |

#### Returns

`boolean`

boolean

#### Defined in

[src/util/StringUtil.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L167)

___

### strCut

▸ `Static` **strCut**(`str`, `len`): `string`

Handle strings that exceed the length range, such as adding strings that exceed the range

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `any` | source string |
| `len` | `any` | length |

#### Returns

`string`

result string

#### Defined in

[src/util/StringUtil.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L177)

___

### toQueryPair

▸ `Static` **toQueryPair**(`key`, `value`, `isEncodeURI?`): `string`

According to the splicing request parameters

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `any` | `undefined` | key string |
| `value` | `any` | `undefined` | value string |
| `isEncodeURI` | `boolean` | `false` | isEncodeURI |

#### Returns

`string`

result string

#### Defined in

[src/util/StringUtil.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L207)

___

### stringFormat

▸ `Static` **stringFormat**(`str`, `...params`): `string`

format a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | source string |
| `...params` | `any`[] | Pass in a regular processing parameter array |

#### Returns

`string`

result string

#### Defined in

[src/util/StringUtil.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L217)

___

### parseJson2String

▸ `Static` **parseJson2String**(`json`, `options?`): `string`

Convert JSON objects to strings

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `any` | object of json |
| `options?` | `any` |  |

#### Returns

`string`

result string

#### Defined in

[src/util/StringUtil.ts:244](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L244)

___

### compareVersion

▸ `Static` **compareVersion**(`v1`, `v2`): ``1`` \| ``0`` \| ``-1``

Compatibility mode - version comparison

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | `any` | Version 1 |
| `v2` | `any` | Version 2 |

#### Returns

``1`` \| ``0`` \| ``-1``

Returns 1, -1, or 0, indicating that the version number is greater, less, or equal, respectively

#### Defined in

[src/util/StringUtil.ts:310](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L310)

___

### buildRandomCode

▸ `Static` **buildRandomCode**(): `string`

Generate non repeating random string codes

#### Returns

`string`

result

#### Defined in

[src/util/StringUtil.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L340)

___

### UUID

▸ `Static` **UUID**(): `string`

UUID

#### Returns

`string`

UUID

#### Defined in

[src/util/StringUtil.ts:356](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L356)

___

### stringToHash

▸ `Static` **stringToHash**(`str`): `number`

make hash code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `any` | source value |

#### Returns

`number`

hash code

#### Defined in

[src/util/StringUtil.ts:369](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L369)

___

### parseUrl

▸ `Static` **parseUrl**(`base`, `url`): `string`

Convert GLTF URL Address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base` | `string` | baseURL |
| `url` | `string` | source url |

#### Returns

`string`

result url

#### Defined in

[src/util/StringUtil.ts:386](https://github.com/Orillusion/orillusion/blob/main/src/util/StringUtil.ts#L386)
