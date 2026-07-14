[**@orillusion/physics**](../../../../README.md)

***

# Class: btDefaultMotionState

Defined in: [packages/ammo/ammo.d.ts:122](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L122)

## Extends

- [`btMotionState`](btMotionState.md)

## Constructors

### Constructor

> **new btDefaultMotionState**(`startTrans?`, `centerOfMassOffset?`): `btDefaultMotionState`

Defined in: [packages/ammo/ammo.d.ts:123](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L123)

#### Parameters

##### startTrans?

[`btTransform`](btTransform.md)

##### centerOfMassOffset?

[`btTransform`](btTransform.md)

#### Returns

`btDefaultMotionState`

#### Overrides

[`btMotionState`](btMotionState.md).[`constructor`](btMotionState.md#constructor)

## Methods

### getWorldTransform()

> **getWorldTransform**(`worldTrans`): `void`

Defined in: [packages/ammo/ammo.d.ts:119](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L119)

#### Parameters

##### worldTrans

[`btTransform`](btTransform.md)

#### Returns

`void`

#### Inherited from

[`btMotionState`](btMotionState.md).[`getWorldTransform`](btMotionState.md#getworldtransform)

***

### setWorldTransform()

> **setWorldTransform**(`worldTrans`): `void`

Defined in: [packages/ammo/ammo.d.ts:120](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L120)

#### Parameters

##### worldTrans

[`btTransform`](btTransform.md)

#### Returns

`void`

#### Inherited from

[`btMotionState`](btMotionState.md).[`setWorldTransform`](btMotionState.md#setworldtransform)

***

### get\_m\_graphicsWorldTrans()

> **get\_m\_graphicsWorldTrans**(): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:124](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L124)

#### Returns

[`btTransform`](btTransform.md)

***

### set\_m\_graphicsWorldTrans()

> **set\_m\_graphicsWorldTrans**(`m_graphicsWorldTrans`): `void`

Defined in: [packages/ammo/ammo.d.ts:125](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L125)

#### Parameters

##### m\_graphicsWorldTrans

[`btTransform`](btTransform.md)

#### Returns

`void`
