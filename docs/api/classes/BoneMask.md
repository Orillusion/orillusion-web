[**@orillusion/core**](../README.md)

***

# Class: BoneMask

Defined in: [src/components/anim/BoneMask.ts:19](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L19)

## Constructors

### Constructor

> **new BoneMask**(): `BoneMask`

#### Returns

`BoneMask`

## Accessors

### bones

#### Get Signature

> **get** **bones**(): `ReadonlySet`\<`string`\>

Defined in: [src/components/anim/BoneMask.ts:22](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L22)

##### Returns

`ReadonlySet`\<`string`\>

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/components/anim/BoneMask.ts:23](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L23)

##### Returns

`number`

## Methods

### has()

> **has**(`boneName`): `boolean`

Defined in: [src/components/anim/BoneMask.ts:25](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L25)

#### Parameters

##### boneName

`string`

#### Returns

`boolean`

***

### add()

> **add**(`boneName`): `this`

Defined in: [src/components/anim/BoneMask.ts:26](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L26)

#### Parameters

##### boneName

`string`

#### Returns

`this`

***

### addAll()

> **addAll**(`boneNames`): `this`

Defined in: [src/components/anim/BoneMask.ts:27](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L27)

#### Parameters

##### boneNames

`Iterable`\<`string`\>

#### Returns

`this`

***

### remove()

> **remove**(`boneName`): `this`

Defined in: [src/components/anim/BoneMask.ts:28](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L28)

#### Parameters

##### boneName

`string`

#### Returns

`this`

***

### clear()

> **clear**(): `this`

Defined in: [src/components/anim/BoneMask.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L29)

#### Returns

`this`

***

### addSubtree()

> **addSubtree**(`avatar`, `rootBone`): `this`

Defined in: [src/components/anim/BoneMask.ts:32](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L32)

Add `rootBone` and every descendant (recursively) to the mask.

#### Parameters

##### avatar

`PrefabAvatarData`

##### rootBone

`string`

#### Returns

`this`

***

### removeSubtree()

> **removeSubtree**(`avatar`, `rootBone`): `this`

Defined in: [src/components/anim/BoneMask.ts:45](https://github.com/orillusion/orillusion/blob/main/src/components/anim/BoneMask.ts#L45)

#### Parameters

##### avatar

`PrefabAvatarData`

##### rootBone

`string`

#### Returns

`this`
