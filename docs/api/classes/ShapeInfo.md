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
- [height](ShapeInfo.md#height)
- [pathCount](ShapeInfo.md#pathcount)
- [uSpeed](ShapeInfo.md#uspeed)
- [vSpeed](ShapeInfo.md#vspeed)
- [radiu](ShapeInfo.md#radiu)
- [paths](ShapeInfo.md#paths)

### Methods

- [getValueSize](ShapeInfo.md#getvaluesize)
- [Ref](ShapeInfo.md#ref)
- [Get](ShapeInfo.md#get)
- [GetSize](ShapeInfo.md#getsize)
- [getValueType](ShapeInfo.md#getvaluetype)

## Constructors

### constructor

• **new ShapeInfo**()

#### Inherited from

[Struct](Struct.md).[constructor](Struct.md#constructor)

## Properties

### shapeIndex

• **shapeIndex**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L29)

___

### shapeType

• **shapeType**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L30)

___

### width

• **width**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L31)

___

### height

• **height**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L32)

___

### pathCount

• **pathCount**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L33)

___

### uSpeed

• **uSpeed**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L34)

___

### vSpeed

• **vSpeed**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L35)

___

### radiu

• **radiu**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L36)

___

### paths

• **paths**: `Float32Array`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L37)

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
