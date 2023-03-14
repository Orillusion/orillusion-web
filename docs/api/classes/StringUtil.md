# Class: StringUtil

字符串处理工具类


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

### Constructors

- [constructor](StringUtil.md#constructor)

## Methods

### hasString

▸ `Static` **hasString**(`fields`, `str`): `number`

是否存在此字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | `string`[] | 被检测的列表 |
| `str` | `string` | 比较字符串 |

#### Returns

`number`

返回所在的索引位置，若不存在返回-1

#### Defined in

[src/engine/util/StringUtil.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L15)

___

### getEllipsis

▸ `Static` **getEllipsis**(`str`, `len?`): `string`

获取超出范围的以省略号结尾字符串表示

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `any` | `undefined` | 需处理字符串 |
| `len` | `number` | `4` | 长度范围 |

#### Returns

`string`

处理结果

#### Defined in

[src/engine/util/StringUtil.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L31)

___

### getURLName

▸ `Static` **getURLName**(`url`): `string`

获取url命名

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 原始url字符串 |

#### Returns

`string`

url命名

#### Defined in

[src/engine/util/StringUtil.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L43)

___

### getFileFormat

▸ `Static` **getFileFormat**(`url`): `string`

获取url文件格式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 原始url字符串 |

#### Returns

`string`

url文件格式字符串

#### Defined in

[src/engine/util/StringUtil.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L57)

___

### readLineProperty

▸ `Static` **readLineProperty**(`line`, `data`): `void`

获取字符串存储的数据信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | `string` | 字符串 |
| `data` | `any` | 要传入的存储信息对象 |

#### Returns

`void`

#### Defined in

[src/engine/util/StringUtil.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L74)

___

### getPath

▸ `Static` **getPath**(`url`): `string`

获取url路径

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 原始url字符串 |

#### Returns

`string`

url路径

#### Defined in

[src/engine/util/StringUtil.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L98)

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

[src/engine/util/StringUtil.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L104)

___

### getStringList

▸ `Static` **getStringList**(`str`, `char?`): `string`[]

用来切割指定字符

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 字符串 |
| `char` | `string` | `';'` | 切割符 |

#### Returns

`string`[]

结果数组

#### Defined in

[src/engine/util/StringUtil.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L140)

___

### formatTime

▸ `Static` **formatTime**(`time`): `string`[]

格式化时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | 时间戳 |

#### Returns

`string`[]

格式化后的字符串数组

#### Defined in

[src/engine/util/StringUtil.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L149)

___

### trim

▸ `Static` **trim**(`str`): `any`

去除左右空空格

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `any` | 字符串 |

#### Returns

`any`

去除左右空格后的结果

#### Defined in

[src/engine/util/StringUtil.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L163)

___

### isEmpty

▸ `Static` **isEmpty**(`obj`): `boolean`

判断字符串是否为空

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | 输入对象 |

#### Returns

`boolean`

返回一个布尔值

#### Defined in

[src/engine/util/StringUtil.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L172)

___

### strCut

▸ `Static` **strCut**(`str`, `len`): `any`

处理超出长度范围的字符串，如超出范围添加...

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `any` | 要处理字符串 |
| `len` | `any` | 长度范围 |

#### Returns

`any`

处理结果

#### Defined in

[src/engine/util/StringUtil.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L182)

___

### toQueryPair

▸ `Static` **toQueryPair**(`key`, `value`, `isEncode?`): `string`

根据参拼接请求参数对

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `any` | `undefined` | key值 |
| `value` | `any` | `undefined` | value值 |
| `isEncode` | `boolean` | `false` | 是否编码 |

#### Returns

`string`

返回拼接后的字符串结果

#### Defined in

[src/engine/util/StringUtil.ts:214](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L214)

___

### stringFormat

▸ `Static` **stringFormat**(`str`, `...params`): `string`

格式化字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需格式化的字符串 |
| `...params` | `any`[] | 传入正则处理参数数组 |

#### Returns

`string`

返回经过正则处理后的字符串

#### Defined in

[src/engine/util/StringUtil.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L224)

___

### parseJson2String

▸ `Static` **parseJson2String**(`json`, `options?`): `string`

JSON对象转换为字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `any` | json对象 |
| `options?` | `any` | 可选项 |

#### Returns

`string`

转换后的字符串结果

#### Defined in

[src/engine/util/StringUtil.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L251)

___

### compareVersion

▸ `Static` **compareVersion**(`v1`, `v2`): ``1`` \| ``0`` \| ``-1``

兼容方式 - 版本比较

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | `any` | 版本1 |
| `v2` | `any` | 版本2 |

#### Returns

``1`` \| ``0`` \| ``-1``

返回1，-1 或0，分别表示版本号大于，小于，或等于

#### Defined in

[src/engine/util/StringUtil.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L317)

___

### buildRandomCode

▸ `Static` **buildRandomCode**(): `string`

生成不重复的随机字符串码

#### Returns

`string`

不重复的随机字符串码

#### Defined in

[src/engine/util/StringUtil.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L347)

___

### UUID

▸ `Static` **UUID**(): `string`

生成唯一标识符

#### Returns

`string`

唯一标识符

#### Defined in

[src/engine/util/StringUtil.ts:363](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L363)

___

### stringToHash

▸ `Static` **stringToHash**(`str`): `number`

生成对应hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `any` | 输入字符串 |

#### Returns

`number`

hash码

#### Defined in

[src/engine/util/StringUtil.ts:376](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L376)

___

### parseUrl

▸ `Static` **parseUrl**(`base`, `url`): `string`

转换 GLTF URL 地址

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base` | `string` | baseURL |
| `url` | `string` | GLTF 原始URL |

#### Returns

`string`

转换后URL

#### Defined in

[src/engine/util/StringUtil.ts:393](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/StringUtil.ts#L393)

## Constructors

### constructor

• **new StringUtil**()
