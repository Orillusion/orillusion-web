# Class: RibbonStruct

## Hierarchy

- [`Struct`](Struct.md)

  ↳ **`RibbonStruct`**

### Constructors

- [constructor](RibbonStruct.md#constructor)

### Properties

- [index](RibbonStruct.md#index)
- [segment](RibbonStruct.md#segment)
- [visible](RibbonStruct.md#visible)
- [width](RibbonStruct.md#width)
- [uv](RibbonStruct.md#uv)
- [uvSpeed](RibbonStruct.md#uvspeed)
- [smooth](RibbonStruct.md#smooth)
- [faceMode](RibbonStruct.md#facemode)
- [up](RibbonStruct.md#up)
- [ids](RibbonStruct.md#ids)
- [ribbonPoint](RibbonStruct.md#ribbonpoint)

### Methods

- [getValueSize](RibbonStruct.md#getvaluesize)
- [Ref](RibbonStruct.md#ref)
- [Get](RibbonStruct.md#get)
- [GetSize](RibbonStruct.md#getsize)
- [getValueType](RibbonStruct.md#getvaluetype)

## Constructors

### constructor

• **new RibbonStruct**(): [`RibbonStruct`](RibbonStruct.md)

#### Returns

[`RibbonStruct`](RibbonStruct.md)

#### Inherited from

[Struct](Struct.md).[constructor](Struct.md#constructor)

## Properties

### index

• **index**: `number` = `1`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L27)

___

### segment

• **segment**: `number` = `5`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L28)

___

### visible

• **visible**: `number` = `1`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L29)

___

### width

• **width**: `number` = `0.25`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L30)

___

### uv

• **uv**: `Vector4`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L31)

___

### uvSpeed

• **uvSpeed**: [`Vector2`](Vector2.md)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L32)

___

### smooth

• **smooth**: `number` = `0`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L33)

___

### faceMode

• **faceMode**: `number` = `FaceMode.FaceToCamera`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L34)

___

### up

• **up**: `Vector4`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L35)

___

### ids

• **ids**: `Float32Array`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L36)

___

### ribbonPoint

• **ribbonPoint**: [`Object3D`](Object3D.md)[] = `[]`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DRibbonRenderer.ts#L39)

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
