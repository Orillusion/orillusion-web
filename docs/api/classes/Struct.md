[**@orillusion/core**](../README.md)

***

# Class: Struct

Defined in: [src/util/struct/Struct.ts:11](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L11)

## Constructors

### Constructor

> **new Struct**(): `Struct`

#### Returns

`Struct`

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

***

### Ref()

> `static` **Ref**\<`T`\>(`c`): `object`[]

Defined in: [src/util/struct/Struct.ts:93](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L93)

#### Type Parameters

##### T

`T` *extends* `Struct`

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

#### Returns

`object`[]

***

### Get()

> `static` **Get**\<`T`\>(`c`): `Struct`

Defined in: [src/util/struct/Struct.ts:99](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L99)

#### Type Parameters

##### T

`T` *extends* `Struct`

#### Parameters

##### c

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

#### Returns

`Struct`

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

[`Ctor`](../type-aliases/Ctor.md)\<`T`\>

#### Returns

`number`

***

### getValueType()

> **getValueType**(): `object`[]

Defined in: [src/util/struct/Struct.ts:25](https://github.com/orillusion/orillusion/blob/main/src/util/struct/Struct.ts#L25)

get reflection name

#### Returns

`object`[]
