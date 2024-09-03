# Class: DrawInfo

## Hierarchy

- `Struct`

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

Struct.constructor

## Properties

### skipFace

• **skipFace**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L19)

___

### skipFace2

• **skipFace2**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L20)

___

### skipFace3

• **skipFace3**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:21](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L21)

___

### skipFace4

• **skipFace4**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L22)

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
