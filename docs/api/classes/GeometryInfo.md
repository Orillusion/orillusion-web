# Class: GeometryInfo

## Hierarchy

- [`Struct`](Struct.md)

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

• **new GeometryInfo**()

#### Inherited from

[Struct](Struct.md).[constructor](Struct.md#constructor)

## Properties

### index

• **index**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L22)

___

### faceStart

• **faceStart**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L23)

___

### faceEnd

• **faceEnd**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L24)

___

### faceCount

• **faceCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L25)

## Methods

### getValueSize

▸ `Static` **getValueSize**(`value`): `any`

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

▸ `Static` **Ref**<`T`\>(`c`): { `name`: `string` ; `type`: `string`  }[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> |

#### Returns

{ `name`: `string` ; `type`: `string`  }[]

#### Inherited from

[Struct](Struct.md).[Ref](Struct.md#ref)

#### Defined in

[src/util/struct/Struct.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L93)

___

### Get

▸ `Static` **Get**<`T`\>(`c`): [`Struct`](Struct.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> |

#### Returns

[`Struct`](Struct.md)

#### Inherited from

[Struct](Struct.md).[Get](Struct.md#get)

#### Defined in

[src/util/struct/Struct.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L99)

___

### GetSize

▸ `Static` **GetSize**<`T`\>(`c`): `number`

get any struct memory size

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> |

#### Returns

`number`

#### Inherited from

[Struct](Struct.md).[GetSize](Struct.md#getsize)

#### Defined in

[src/util/struct/Struct.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L112)

___

### getValueType

▸ **getValueType**(): { `name`: `string` ; `type`: `string`  }[]

get reflection name

#### Returns

{ `name`: `string` ; `type`: `string`  }[]

#### Inherited from

[Struct](Struct.md).[getValueType](Struct.md#getvaluetype)

#### Defined in

[src/util/struct/Struct.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L25)
