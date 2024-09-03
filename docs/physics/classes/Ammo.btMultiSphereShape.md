# Class: btMultiSphereShape

[Ammo](../modules/Ammo.md).btMultiSphereShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btMultiSphereShape`**

### Constructors

- [constructor](Ammo.btMultiSphereShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btMultiSphereShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btMultiSphereShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btMultiSphereShape.md#calculatelocalinertia)
- [setMargin](Ammo.btMultiSphereShape.md#setmargin)
- [getMargin](Ammo.btMultiSphereShape.md#getmargin)

## Constructors

### constructor

• **new btMultiSphereShape**(`positions`, `radii`, `numPoints`): [`btMultiSphereShape`](Ammo.btMultiSphereShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `positions` | [`btVector3`](Ammo.btVector3.md) |
| `radii` | readonly `number`[] |
| `numPoints` | `number` |

#### Returns

[`btMultiSphereShape`](Ammo.btMultiSphereShape.md)

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:327](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L327)

## Methods

### setLocalScaling

▸ **setLocalScaling**(`scaling`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaling` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[setLocalScaling](Ammo.btCollisionShape.md#setlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:273](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[getLocalScaling](Ammo.btCollisionShape.md#getlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:274](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L274)

___

### calculateLocalInertia

▸ **calculateLocalInertia**(`mass`, `inertia`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |
| `inertia` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[calculateLocalInertia](Ammo.btCollisionShape.md#calculatelocalinertia)

#### Defined in

[packages/ammo/ammo.d.ts:275](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L275)

___

### setMargin

▸ **setMargin**(`margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[setMargin](Ammo.btCollisionShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:276](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L276)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:277](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L277)
