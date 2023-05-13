# Class: btCompoundShape

[Ammo](../modules/Ammo.md).btCompoundShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btCompoundShape`**


### Methods

- [setLocalScaling](Ammo.btCompoundShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btCompoundShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btCompoundShape.md#calculatelocalinertia)
- [addChildShape](Ammo.btCompoundShape.md#addchildshape)
- [removeChildShape](Ammo.btCompoundShape.md#removechildshape)
- [removeChildShapeByIndex](Ammo.btCompoundShape.md#removechildshapebyindex)
- [getNumChildShapes](Ammo.btCompoundShape.md#getnumchildshapes)
- [getChildShape](Ammo.btCompoundShape.md#getchildshape)
- [updateChildTransform](Ammo.btCompoundShape.md#updatechildtransform)
- [setMargin](Ammo.btCompoundShape.md#setmargin)
- [getMargin](Ammo.btCompoundShape.md#getmargin)

### Constructors

- [constructor](Ammo.btCompoundShape.md#constructor)

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

[packages/ammo/ammo.d.ts:267](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L267)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[getLocalScaling](Ammo.btCollisionShape.md#getlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:268](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L268)

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

[packages/ammo/ammo.d.ts:269](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L269)

___

### addChildShape

▸ **addChildShape**(`localTransform`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localTransform` | [`btTransform`](Ammo.btTransform.md) |
| `shape` | [`btCollisionShape`](Ammo.btCollisionShape.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:374](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L374)

___

### removeChildShape

▸ **removeChildShape**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`btCollisionShape`](Ammo.btCollisionShape.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:375](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L375)

___

### removeChildShapeByIndex

▸ **removeChildShapeByIndex**(`childShapeindex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `childShapeindex` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:376](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L376)

___

### getNumChildShapes

▸ **getNumChildShapes**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:377](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L377)

___

### getChildShape

▸ **getChildShape**(`index`): [`btCollisionShape`](Ammo.btCollisionShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`btCollisionShape`](Ammo.btCollisionShape.md)

#### Defined in

[packages/ammo/ammo.d.ts:378](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L378)

___

### updateChildTransform

▸ **updateChildTransform**(`childIndex`, `newChildTransform`, `shouldRecalculateLocalAabb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `childIndex` | `number` |
| `newChildTransform` | [`btTransform`](Ammo.btTransform.md) |
| `shouldRecalculateLocalAabb?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:379](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L379)

___

### setMargin

▸ **setMargin**(`margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `number` |

#### Returns

`void`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[setMargin](Ammo.btCollisionShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:380](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L380)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:381](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L381)

## Constructors

### constructor

• **new btCompoundShape**(`enableDynamicAabbTree?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enableDynamicAabbTree?` | `boolean` |

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:373](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L373)
