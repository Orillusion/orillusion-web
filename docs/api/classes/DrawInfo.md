# Class: DrawInfo

## Hierarchy

- [`Struct`](Struct.md)

  ↳ **`DrawInfo`**

### Constructors

- [constructor](DrawInfo.md#constructor)

### Properties

- [skipFace](DrawInfo.md#skipface)
- [skipFace2](DrawInfo.md#skipface2)
- [skipFace3](DrawInfo.md#skipface3)
- [skipFace4](DrawInfo.md#skipface4)

### Methods

- [getValueSize](DrawInfo.md#getvaluesize)
- [Ref](DrawInfo.md#ref)
- [Get](DrawInfo.md#get)
- [GetSize](DrawInfo.md#getsize)
- [getValueType](DrawInfo.md#getvaluetype)

## Constructors

### constructor

• **new DrawInfo**(): [`DrawInfo`](DrawInfo.md)

#### Returns

[`DrawInfo`](DrawInfo.md)

#### Inherited from

[Struct](Struct.md).[constructor](Struct.md#constructor)

## Properties

### skipFace

• **skipFace**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L34)

___

### skipFace2

• **skipFace2**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L35)

___

### skipFace3

• **skipFace3**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L36)

___

### skipFace4

• **skipFace4**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L37)

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
