# Class: ShapeInfo

## Hierarchy

- `Struct`

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

Struct.constructor

## Properties

### shapeIndex

• **shapeIndex**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:4](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L4)

___

### shapeType

• **shapeType**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:5](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L5)

___

### width

• **width**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:6](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L6)

___

### lineCap

• **lineCap**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:7](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L7)

___

### pathCount

• **pathCount**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:8](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L8)

___

### uScale

• **uScale**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L9)

___

### vScale

• **vScale**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:10](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L10)

___

### lineJoin

• **lineJoin**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L11)

___

### startPath

• **startPath**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L13)

___

### endPath

• **endPath**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L14)

___

### uSpeed

• **uSpeed**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L15)

___

### vSpeed

• **vSpeed**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:16](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L16)

___

### paths

• **paths**: `Vector4`[] = `[]`

#### Defined in

[packages/graphic/renderer/graphic3d/ShapeInfo.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L17)

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

Struct.getValueSize

#### Defined in

[src/util/struct/Struct.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L48)

___

### Ref

▸ **Ref**\<`T`\>(`c`): \{ `name`: `string` ; `type`: `string`  }[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `Ctor`\<`T`\> |

#### Returns

\{ `name`: `string` ; `type`: `string`  }[]

#### Inherited from

Struct.Ref

#### Defined in

[src/util/struct/Struct.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L93)

___

### Get

▸ **Get**\<`T`\>(`c`): `Struct`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `Ctor`\<`T`\> |

#### Returns

`Struct`

#### Inherited from

Struct.Get

#### Defined in

[src/util/struct/Struct.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L99)

___

### GetSize

▸ **GetSize**\<`T`\>(`c`): `number`

get any struct memory size

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `Ctor`\<`T`\> |

#### Returns

`number`

#### Inherited from

Struct.GetSize

#### Defined in

[src/util/struct/Struct.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L112)

___

### getValueType

▸ **getValueType**(): \{ `name`: `string` ; `type`: `string`  }[]

get reflection name

#### Returns

\{ `name`: `string` ; `type`: `string`  }[]

#### Inherited from

Struct.getValueType

#### Defined in

[src/util/struct/Struct.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L25)
