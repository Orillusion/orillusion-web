# Class: RibbonStruct

## Hierarchy

- `Struct`

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

Struct.constructor

## Properties

### index

• **index**: `number` = `1`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L11)

___

### segment

• **segment**: `number` = `5`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:12](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L12)

___

### visible

• **visible**: `number` = `1`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L13)

___

### width

• **width**: `number` = `0.25`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L14)

___

### uv

• **uv**: `Vector4`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L15)

___

### uvSpeed

• **uvSpeed**: `Vector2`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:16](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L16)

___

### smooth

• **smooth**: `number` = `0`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L17)

___

### faceMode

• **faceMode**: `number` = `FaceMode.FaceToCamera`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L18)

___

### up

• **up**: `Vector4`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L19)

___

### ids

• **ids**: `Float32Array`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L20)

___

### ribbonPoint

• **ribbonPoint**: `Object3D`[] = `[]`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:21](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L21)

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
