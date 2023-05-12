# Class: btBvhTriangleMeshShape

[Ammo](../modules/Ammo.md).btBvhTriangleMeshShape

## Hierarchy

- [`btTriangleMeshShape`](Ammo.btTriangleMeshShape.md)

  ↳ **`btBvhTriangleMeshShape`**


### Methods

- [setLocalScaling](Ammo.btBvhTriangleMeshShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btBvhTriangleMeshShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btBvhTriangleMeshShape.md#calculatelocalinertia)
- [setMargin](Ammo.btBvhTriangleMeshShape.md#setmargin)
- [getMargin](Ammo.btBvhTriangleMeshShape.md#getmargin)

### Constructors

- [constructor](Ammo.btBvhTriangleMeshShape.md#constructor)

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

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[setLocalScaling](Ammo.btTriangleMeshShape.md#setlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:267](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L267)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[getLocalScaling](Ammo.btTriangleMeshShape.md#getlocalscaling)

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

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[calculateLocalInertia](Ammo.btTriangleMeshShape.md#calculatelocalinertia)

#### Defined in

[packages/ammo/ammo.d.ts:269](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L269)

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

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[setMargin](Ammo.btTriangleMeshShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:270](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L270)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Inherited from

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[getMargin](Ammo.btTriangleMeshShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:271](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L271)

## Constructors

### constructor

• **new btBvhTriangleMeshShape**(`meshInterface`, `useQuantizedAabbCompression`, `buildBvh?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `meshInterface` | [`btStridingMeshInterface`](Ammo.btStridingMeshInterface.md) |
| `useQuantizedAabbCompression` | `boolean` |
| `buildBvh?` | `boolean` |

#### Overrides

[btTriangleMeshShape](Ammo.btTriangleMeshShape.md).[constructor](Ammo.btTriangleMeshShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:411](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L411)
