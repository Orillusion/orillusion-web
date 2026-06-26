[**@orillusion/core**](../README.md)

***

# Class: Reference

Defined in: [src/util/Reference.ts:12](https://github.com/orillusion/orillusion/blob/main/src/util/Reference.ts#L12)

instance reference statistics module
apply any instance , used full destroy

Outer map is a WeakMap so a resource (ref) doesn't stay alive merely
because Reference knows about it — its `_boundCtx` back-ref would
otherwise pin the owning Context3D forever across engine reinits.
Inner map retains parents strongly (that's the whole point of the
tracker), but it evaporates with the ref once nothing else holds it.

## Constructors

### Constructor

> **new Reference**(): `Reference`

#### Returns

`Reference`

## Methods

### getInstance()

> `static` **getInstance**(): `Reference`

Defined in: [src/util/Reference.ts:18](https://github.com/orillusion/orillusion/blob/main/src/util/Reference.ts#L18)

Get the shared Reference singleton, creating it on first use.

#### Returns

`Reference`

***

### attached()

> **attached**(`ref`, `target`): `void`

Defined in: [src/util/Reference.ts:28](https://github.com/orillusion/orillusion/blob/main/src/util/Reference.ts#L28)

current instance attached from parent instance

#### Parameters

##### ref

`any`

reference current

##### target

`any`

reference parent

#### Returns

`void`

***

### detached()

> **detached**(`ref`, `target`): `void`

Defined in: [src/util/Reference.ts:43](https://github.com/orillusion/orillusion/blob/main/src/util/Reference.ts#L43)

current instance detached from parent instance

#### Parameters

##### ref

`any`

reference current

##### target

`any`

reference parent

#### Returns

`void`

***

### hasReference()

> **hasReference**(`ref`): `boolean`

Defined in: [src/util/Reference.ts:59](https://github.com/orillusion/orillusion/blob/main/src/util/Reference.ts#L59)

current instance has reference

#### Parameters

##### ref

`any`

#### Returns

`boolean`

***

### getReferenceCount()

> **getReferenceCount**(`ref`): `number`

Defined in: [src/util/Reference.ts:72](https://github.com/orillusion/orillusion/blob/main/src/util/Reference.ts#L72)

get current instance reference count

#### Parameters

##### ref

`any`

#### Returns

`number`

***

### getReference()

> **getReference**(`ref`): `Map`\<`any`, `any`\>

Defined in: [src/util/Reference.ts:85](https://github.com/orillusion/orillusion/blob/main/src/util/Reference.ts#L85)

get current instance reference from where

#### Parameters

##### ref

`any`

#### Returns

`Map`\<`any`, `any`\>
