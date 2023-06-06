# Class: Reference

instance reference statistics module
apply any instance , used full destroy

### Constructors

- [constructor](Reference.md#constructor)

### Methods

- [getInstance](Reference.md#getinstance)
- [attached](Reference.md#attached)
- [detached](Reference.md#detached)
- [hasReference](Reference.md#hasreference)
- [getReferenceCount](Reference.md#getreferencecount)
- [getReference](Reference.md#getreference)

## Constructors

### constructor

• **new Reference**()

## Methods

### getInstance

▸ `Static` **getInstance**(): [`Reference`](Reference.md)

#### Returns

[`Reference`](Reference.md)

#### Defined in

[src/util/Reference.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/util/Reference.ts#L10)

___

### attached

▸ **attached**(`ref`, `target`): `void`

current instance attached from parent instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `any` | reference current |
| `target` | `any` | reference parent |

#### Returns

`void`

#### Defined in

[src/util/Reference.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/util/Reference.ts#L20)

___

### detached

▸ **detached**(`ref`, `target`): `void`

current instance detached from parent instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `any` | reference current |
| `target` | `any` | reference parent |

#### Returns

`void`

#### Defined in

[src/util/Reference.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/util/Reference.ts#L35)

___

### hasReference

▸ **hasReference**(`ref`): `boolean`

current instance has reference

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`boolean`

#### Defined in

[src/util/Reference.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/util/Reference.ts#L45)

___

### getReferenceCount

▸ **getReferenceCount**(`ref`): `number`

get current instance reference count

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`number`

#### Defined in

[src/util/Reference.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/util/Reference.ts#L58)

___

### getReference

▸ **getReference**(`ref`): `Map`<`any`, `any`\>

get current instance reference from where

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`Map`<`any`, `any`\>

#### Defined in

[src/util/Reference.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/util/Reference.ts#L71)
