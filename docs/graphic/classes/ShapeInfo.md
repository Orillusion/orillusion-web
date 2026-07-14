[**@orillusion/graphic**](../README.md)

***

# Class: ShapeInfo

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:3](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L3)

## Extends

- `Struct`

## Constructors

### Constructor

> **new ShapeInfo**(): `ShapeInfo`

#### Returns

`ShapeInfo`

#### Inherited from

`Struct.constructor`

## Properties

### shapeIndex

> **shapeIndex**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:4](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L4)

***

### shapeType

> **shapeType**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:5](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L5)

***

### width

> **width**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:6](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L6)

***

### lineCap

> **lineCap**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:7](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L7)

***

### pathCount

> **pathCount**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L8)

***

### uScale

> **uScale**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L9)

***

### vScale

> **vScale**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L10)

***

### lineJoin

> **lineJoin**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L11)

***

### startPath

> **startPath**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L13)

***

### endPath

> **endPath**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L14)

***

### uSpeed

> **uSpeed**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L15)

***

### vSpeed

> **vSpeed**: `number` = `0`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L16)

***

### paths

> **paths**: `Vector4`[] = `[]`

Defined in: [packages/graphic/renderer/graphic3d/ShapeInfo.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/ShapeInfo.ts#L17)

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
