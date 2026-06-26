[**@orillusion/graphic**](../README.md)

***

# Class: RibbonStruct

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L10)

## Extends

- `Struct`

## Constructors

### Constructor

> **new RibbonStruct**(): `RibbonStruct`

#### Returns

`RibbonStruct`

#### Inherited from

`Struct.constructor`

## Properties

### index

> **index**: `number` = `1`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L11)

***

### segment

> **segment**: `number` = `5`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L12)

***

### visible

> **visible**: `number` = `1`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L13)

***

### width

> **width**: `number` = `0.25`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L14)

***

### uv

> **uv**: `Vector4`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L15)

***

### uvSpeed

> **uvSpeed**: `Vector2`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L16)

***

### smooth

> **smooth**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L17)

***

### faceMode

> **faceMode**: `number` = `FaceMode.FaceToCamera`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:18](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L18)

***

### up

> **up**: `Vector4`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L19)

***

### ids

> **ids**: `Float32Array`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L20)

***

### ribbonPoint

> **ribbonPoint**: `Object3D`[] = `[]`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DRibbonRenderer.ts#L21)

## Methods

### getValueSize()

> `static` **getValueSize**(`value`): `any`

Defined in: [src/util/struct/Struct.ts:48](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L48)

get any type value memory size

#### Parameters

##### value

`any`

any type value

#### Returns

`any`

#### Inherited from

`Struct.getValueSize`

***

### Ref()

> `static` **Ref**\<`T`\>(`c`): `object`[]

Defined in: [src/util/struct/Struct.ts:93](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L93)

#### Type Parameters

##### T

`T` *extends* `Struct`

#### Parameters

##### c

`Ctor`\<`T`\>

#### Returns

`object`[]

#### Inherited from

`Struct.Ref`

***

### Get()

> `static` **Get**\<`T`\>(`c`): `Struct`

Defined in: [src/util/struct/Struct.ts:99](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L99)

#### Type Parameters

##### T

`T` *extends* `Struct`

#### Parameters

##### c

`Ctor`\<`T`\>

#### Returns

`Struct`

#### Inherited from

`Struct.Get`

***

### GetSize()

> `static` **GetSize**\<`T`\>(`c`): `number`

Defined in: [src/util/struct/Struct.ts:112](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L112)

get any struct memory size

#### Type Parameters

##### T

`T` *extends* `Struct`

#### Parameters

##### c

`Ctor`\<`T`\>

#### Returns

`number`

#### Inherited from

`Struct.GetSize`

***

### getValueType()

> **getValueType**(): `object`[]

Defined in: [src/util/struct/Struct.ts:25](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L25)

get reflection name

#### Returns

`object`[]

#### Inherited from

`Struct.getValueType`
