[**@orillusion/graphic**](../README.md)

***

# Class: GrassNodeStruct

Defined in: [packages/graphic/renderer/GrassRenderer.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L8)

## Extends

- [`DynamicDrawStruct`](DynamicDrawStruct.md)

## Constructors

### Constructor

> **new GrassNodeStruct**(): `GrassNodeStruct`

#### Returns

`GrassNodeStruct`

#### Inherited from

[`DynamicDrawStruct`](DynamicDrawStruct.md).[`constructor`](DynamicDrawStruct.md#constructor)

## Properties

### grassCount

> **grassCount**: `number` = `1`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L9)

***

### grassHSegment

> **grassHSegment**: `number` = `1`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L10)

***

### grassWight

> **grassWight**: `number` = `2`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L11)

***

### grassHeigh

> **grassHeigh**: `number` = `4`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L12)

***

### grassX

> **grassX**: `number` = `0`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L13)

***

### grassY

> **grassY**: `number` = `0`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L14)

***

### grassZ

> **grassZ**: `number` = `0`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L15)

***

### grassRotation

> **grassRotation**: `number` = `0`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L16)

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
