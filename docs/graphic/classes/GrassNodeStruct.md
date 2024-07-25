# Class: GrassNodeStruct

## Hierarchy

- [`DynamicDrawStruct`](DynamicDrawStruct.md)

  ↳ **`GrassNodeStruct`**

### Constructors

- [constructor](GrassNodeStruct.md#constructor)

### Properties

- [grassCount](GrassNodeStruct.md#grasscount)
- [grassHSegment](GrassNodeStruct.md#grasshsegment)
- [grassWight](GrassNodeStruct.md#grasswight)
- [grassHeigh](GrassNodeStruct.md#grassheigh)
- [grassX](GrassNodeStruct.md#grassx)
- [grassY](GrassNodeStruct.md#grassy)
- [grassZ](GrassNodeStruct.md#grassz)
- [grassRotation](GrassNodeStruct.md#grassrotation)

### Methods

- [getValueSize](GrassNodeStruct.md#getvaluesize)
- [Ref](GrassNodeStruct.md#ref)
- [Get](GrassNodeStruct.md#get)
- [GetSize](GrassNodeStruct.md#getsize)
- [getValueType](GrassNodeStruct.md#getvaluetype)

## Constructors

### constructor

• **new GrassNodeStruct**(): [`GrassNodeStruct`](GrassNodeStruct.md)

#### Returns

[`GrassNodeStruct`](GrassNodeStruct.md)

#### Inherited from

[DynamicDrawStruct](DynamicDrawStruct.md).[constructor](DynamicDrawStruct.md#constructor)

## Properties

### grassCount

• **grassCount**: `number` = `1`

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L9)

___

### grassHSegment

• **grassHSegment**: `number` = `1`

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:10](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L10)

___

### grassWight

• **grassWight**: `number` = `2`

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L11)

___

### grassHeigh

• **grassHeigh**: `number` = `4`

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:12](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L12)

___

### grassX

• **grassX**: `number` = `0`

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L13)

___

### grassY

• **grassY**: `number` = `0`

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L14)

___

### grassZ

• **grassZ**: `number` = `0`

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L15)

___

### grassRotation

• **grassRotation**: `number` = `0`

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:16](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L16)

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

[DynamicDrawStruct](DynamicDrawStruct.md).[getValueSize](DynamicDrawStruct.md#getvaluesize)

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

[DynamicDrawStruct](DynamicDrawStruct.md).[Ref](DynamicDrawStruct.md#ref)

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

[DynamicDrawStruct](DynamicDrawStruct.md).[Get](DynamicDrawStruct.md#get)

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

[DynamicDrawStruct](DynamicDrawStruct.md).[GetSize](DynamicDrawStruct.md#getsize)

#### Defined in

[src/util/struct/Struct.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L112)

___

### getValueType

▸ **getValueType**(): \{ `name`: `string` ; `type`: `string`  }[]

get reflection name

#### Returns

\{ `name`: `string` ; `type`: `string`  }[]

#### Inherited from

[DynamicDrawStruct](DynamicDrawStruct.md).[getValueType](DynamicDrawStruct.md#getvaluetype)

#### Defined in

[src/util/struct/Struct.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L25)
