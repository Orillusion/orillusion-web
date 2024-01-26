# Class: ShapeInfo

## Hierarchy

- [`Struct`](Struct.md)

  ↳ **`ShapeInfo`**

### Constructors

- [constructor](ShapeInfo.md#constructor)

### Properties

- [shapeIndex](ShapeInfo.md#shapeindex)
- [shapeType](ShapeInfo.md#shapetype)
- [width](ShapeInfo.md#width)
- [lineCap](ShapeInfo.md#linecap)
- [pathCount](ShapeInfo.md#pathcount)
- [uScale](ShapeInfo.md#uscale)
- [vScale](ShapeInfo.md#vscale)
- [lineJoin](ShapeInfo.md#linejoin)
- [startPath](ShapeInfo.md#startpath)
- [endPath](ShapeInfo.md#endpath)
- [uSpeed](ShapeInfo.md#uspeed)
- [vSpeed](ShapeInfo.md#vspeed)
- [paths](ShapeInfo.md#paths)

### Methods

- [getValueSize](ShapeInfo.md#getvaluesize)
- [Ref](ShapeInfo.md#ref)
- [Get](ShapeInfo.md#get)
- [GetSize](ShapeInfo.md#getsize)
- [getValueType](ShapeInfo.md#getvaluetype)

## Constructors

### constructor

• **new ShapeInfo**(): [`ShapeInfo`](ShapeInfo.md)

#### Returns

[`ShapeInfo`](ShapeInfo.md)

#### Inherited from

[Struct](Struct.md).[constructor](Struct.md#constructor)

## Properties

### shapeIndex

• **shapeIndex**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L6)

___

### shapeType

• **shapeType**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L7)

___

### width

• **width**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L8)

___

### lineCap

• **lineCap**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L9)

___

### pathCount

• **pathCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L10)

___

### uScale

• **uScale**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L11)

___

### vScale

• **vScale**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L12)

___

### lineJoin

• **lineJoin**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L13)

___

### startPath

• **startPath**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L15)

___

### endPath

• **endPath**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L16)

___

### uSpeed

• **uSpeed**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L17)

___

### vSpeed

• **vSpeed**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L18)

___

### paths

• **paths**: `Vector4`[] = `[]`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/ShapeInfo.ts#L21)

## Methods

### getValueSize

▸ **getValueSize**(`value`): `any`

get any type value memory size

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | any type value |

#### Returns

`any`

#### Inherited from

[Struct](Struct.md).[getValueSize](Struct.md#getvaluesize)

#### Defined in

[src/util/struct/Struct.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L48)

___

### Ref

▸ **Ref**\<`T`\>(`c`): \{ `name`: `string` ; `type`: `string`  }[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> |

#### Returns

\{ `name`: `string` ; `type`: `string`  }[]

#### Inherited from

[Struct](Struct.md).[Ref](Struct.md#ref)

#### Defined in

[src/util/struct/Struct.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L93)

___

### Get

▸ **Get**\<`T`\>(`c`): [`Struct`](Struct.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> |

#### Returns

[`Struct`](Struct.md)

#### Inherited from

[Struct](Struct.md).[Get](Struct.md#get)

#### Defined in

[src/util/struct/Struct.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L99)

___

### GetSize

▸ **GetSize**\<`T`\>(`c`): `number`

get any struct memory size

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> |

#### Returns

`number`

#### Inherited from

[Struct](Struct.md).[GetSize](Struct.md#getsize)

#### Defined in

[src/util/struct/Struct.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L112)

___

### getValueType

▸ **getValueType**(): \{ `name`: `string` ; `type`: `string`  }[]

get reflection name

#### Returns

\{ `name`: `string` ; `type`: `string`  }[]

#### Inherited from

[Struct](Struct.md).[getValueType](Struct.md#getvaluetype)

#### Defined in

[src/util/struct/Struct.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L25)
