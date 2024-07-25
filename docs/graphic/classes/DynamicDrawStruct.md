# Class: DynamicDrawStruct

## Hierarchy

- `Struct`

  ↳ **`DynamicDrawStruct`**

  ↳↳ [`GrassNodeStruct`](GrassNodeStruct.md)

  ↳↳ [`Shape3DStruct`](Shape3DStruct.md)

### Constructors

- [constructor](DynamicDrawStruct.md#constructor)

### Methods

- [getValueSize](DynamicDrawStruct.md#getvaluesize)
- [Ref](DynamicDrawStruct.md#ref)
- [Get](DynamicDrawStruct.md#get)
- [GetSize](DynamicDrawStruct.md#getsize)
- [getValueType](DynamicDrawStruct.md#getvaluetype)

## Constructors

### constructor

• **new DynamicDrawStruct**(): [`DynamicDrawStruct`](DynamicDrawStruct.md)

#### Returns

[`DynamicDrawStruct`](DynamicDrawStruct.md)

#### Inherited from

Struct.constructor

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
