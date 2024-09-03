# Class: GeometryInfo

## Hierarchy

- `Struct`

  ↳ **`GeometryInfo`**

### Constructors

- [constructor](GeometryInfo.md#constructor)

### Properties

- [index](GeometryInfo.md#index)
- [faceStart](GeometryInfo.md#facestart)
- [faceEnd](GeometryInfo.md#faceend)
- [faceCount](GeometryInfo.md#facecount)

### Methods

- [getValueSize](GeometryInfo.md#getvaluesize)
- [Ref](GeometryInfo.md#ref)
- [Get](GeometryInfo.md#get)
- [GetSize](GeometryInfo.md#getsize)
- [getValueType](GeometryInfo.md#getvaluetype)

## Constructors

### constructor

• **new GeometryInfo**(): [`GeometryInfo`](GeometryInfo.md)

#### Returns

[`GeometryInfo`](GeometryInfo.md)

#### Inherited from

Struct.constructor

## Properties

### index

• **index**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L26)

___

### faceStart

• **faceStart**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:27](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L27)

___

### faceEnd

• **faceEnd**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:28](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L28)

___

### faceCount

• **faceCount**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L29)

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
