[**@orillusion/graphic**](../README.md)

***

# Class: Shape3DStruct

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:4](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L4)

## Extends

- [`DynamicDrawStruct`](DynamicDrawStruct.md)

## Constructors

### Constructor

> **new Shape3DStruct**(): `Shape3DStruct`

#### Returns

`Shape3DStruct`

#### Inherited from

[`DynamicDrawStruct`](DynamicDrawStruct.md).[`constructor`](DynamicDrawStruct.md#constructor)

## Properties

### shapeType

> **shapeType**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:5](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L5)

***

### shapeOrder

> **shapeOrder**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:6](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L6)

***

### destPointStart

> **destPointStart**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:7](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L7)

***

### destPointCount

> **destPointCount**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L8)

***

### srcPointStart

> **srcPointStart**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L10)

***

### srcPointCount

> **srcPointCount**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L11)

***

### srcIndexStart

> **srcIndexStart**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L12)

***

### srcIndexCount

> **srcIndexCount**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L13)

***

### isClosed

> **isClosed**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L15)

***

### fill

> **fill**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L16)

***

### line

> **line**: `number` = `0`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L17)

***

### lineWidth

> **lineWidth**: `number` = `10`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:18](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L18)

***

### xa

> **xa**: `number` = `5`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L20)

***

### xb

> **xb**: `number` = `4`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L21)

***

### xc

> **xc**: `number` = `4`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L22)

***

### xd

> **xd**: `number` = `2`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:23](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L23)

***

### xe

> **xe**: `number` = `5`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:25](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L25)

***

### xf

> **xf**: `number` = `4`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:26](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L26)

***

### xg

> **xg**: `number` = `4`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:27](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L27)

***

### xh

> **xh**: `number` = `2`

Defined in: [packages/graphic/renderer/shape3d/Shape3D.ts:28](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L28)

## Methods

### getValueType()

> **getValueType**(): `object`[]

Defined in: [src/util/struct/Struct.ts:25](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L25)

get reflection name

#### Returns

`object`[]

#### Inherited from

[`DynamicDrawStruct`](DynamicDrawStruct.md).[`getValueType`](DynamicDrawStruct.md#getvaluetype)

***

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

[`DynamicDrawStruct`](DynamicDrawStruct.md).[`getValueSize`](DynamicDrawStruct.md#getvaluesize)

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

[`DynamicDrawStruct`](DynamicDrawStruct.md).[`Ref`](DynamicDrawStruct.md#ref)

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

[`DynamicDrawStruct`](DynamicDrawStruct.md).[`Get`](DynamicDrawStruct.md#get)

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

[`DynamicDrawStruct`](DynamicDrawStruct.md).[`GetSize`](DynamicDrawStruct.md#getsize)
