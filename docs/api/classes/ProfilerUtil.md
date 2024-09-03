# Class: ProfilerUtil

### Constructors

- [constructor](ProfilerUtil.md#constructor)

### Properties

- [viewMap](ProfilerUtil.md#viewmap)
- [testObj](ProfilerUtil.md#testobj)

### Methods

- [startView](ProfilerUtil.md#startview)
- [viewCount](ProfilerUtil.md#viewcount)
- [viewCount\_vertex](ProfilerUtil.md#viewcount_vertex)
- [viewCount\_indices](ProfilerUtil.md#viewcount_indices)
- [viewCount\_tri](ProfilerUtil.md#viewcount_tri)
- [viewCount\_instance](ProfilerUtil.md#viewcount_instance)
- [viewCount\_draw](ProfilerUtil.md#viewcount_draw)
- [viewCount\_pipeline](ProfilerUtil.md#viewcount_pipeline)
- [start](ProfilerUtil.md#start)
- [end](ProfilerUtil.md#end)
- [countStart](ProfilerUtil.md#countstart)
- [countEnd](ProfilerUtil.md#countend)
- [print](ProfilerUtil.md#print)

## Constructors

### constructor

• **new ProfilerUtil**(): [`ProfilerUtil`](ProfilerUtil.md)

#### Returns

[`ProfilerUtil`](ProfilerUtil.md)

## Properties

### viewMap

▪ `Static` **viewMap**: `Map`\<[`View3D`](View3D.md), [`ProfilerDraw`](../types/ProfilerDraw.md)\>

#### Defined in

[src/util/ProfilerUtil.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L37)

___

### testObj

▪ `Static` **testObj**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `testValue1` | `number` |
| `testValue2` | `number` |
| `testValue3` | `number` |
| `testValue4` | `number` |

#### Defined in

[src/util/ProfilerUtil.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L39)

## Methods

### startView

▸ **startView**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L46)

___

### viewCount

▸ **viewCount**(`view`): [`ProfilerDraw`](../types/ProfilerDraw.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`ProfilerDraw`](../types/ProfilerDraw.md)

#### Defined in

[src/util/ProfilerUtil.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L81)

___

### viewCount\_vertex

▸ **viewCount_vertex**(`view`, `pass`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L86)

___

### viewCount\_indices

▸ **viewCount_indices**(`view`, `pass`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L90)

___

### viewCount\_tri

▸ **viewCount_tri**(`view`, `pass`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L94)

___

### viewCount\_instance

▸ **viewCount_instance**(`view`, `pass`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L98)

___

### viewCount\_draw

▸ **viewCount_draw**(`view`, `pass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L102)

___

### viewCount\_pipeline

▸ **viewCount_pipeline**(`view`, `pass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L106)

___

### start

▸ **start**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L110)

___

### end

▸ **end**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L129)

___

### countStart

▸ **countStart**(`id`, `id2?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `id2` | `string` | `""` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L137)

___

### countEnd

▸ **countEnd**(`id`, `id2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `id2` | `string` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L160)

___

### print

▸ **print**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/util/ProfilerUtil.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/util/ProfilerUtil.ts#L181)
