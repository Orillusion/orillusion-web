[**@orillusion/graphic**](../README.md)

***

# Class: DynamicDrawStruct

Defined in: [packages/graphic/renderer/graphic3d/DynamicDrawStruct.ts:3](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicDrawStruct.ts#L3)

## Extends

- `Struct`

## Extended by

- [`GrassNodeStruct`](GrassNodeStruct.md)
- [`Shape3DStruct`](Shape3DStruct.md)

## Constructors

### Constructor

> **new DynamicDrawStruct**(): `DynamicDrawStruct`

#### Returns

`DynamicDrawStruct`

#### Inherited from

`Struct.constructor`

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
