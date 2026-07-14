[**@orillusion/physics**](../../../../README.md)

***

# Class: btTriangleMesh

Defined in: [packages/ammo/ammo.d.ts:400](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L400)

## Extends

- [`btStridingMeshInterface`](btStridingMeshInterface.md)

## Constructors

### Constructor

> **new btTriangleMesh**(`use32bitIndices?`, `use4componentVertices?`): `btTriangleMesh`

Defined in: [packages/ammo/ammo.d.ts:401](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L401)

#### Parameters

##### use32bitIndices?

`boolean`

##### use4componentVertices?

`boolean`

#### Returns

`btTriangleMesh`

#### Overrides

[`btStridingMeshInterface`](btStridingMeshInterface.md).[`constructor`](btStridingMeshInterface.md#constructor)

## Methods

### setScaling()

> **setScaling**(`scaling`): `void`

Defined in: [packages/ammo/ammo.d.ts:390](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L390)

#### Parameters

##### scaling

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btStridingMeshInterface`](btStridingMeshInterface.md).[`setScaling`](btStridingMeshInterface.md#setscaling)

***

### addTriangle()

> **addTriangle**(`vertex0`, `vertex1`, `vertex2`, `removeDuplicateVertices?`): `void`

Defined in: [packages/ammo/ammo.d.ts:402](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L402)

#### Parameters

##### vertex0

[`btVector3`](btVector3.md)

##### vertex1

[`btVector3`](btVector3.md)

##### vertex2

[`btVector3`](btVector3.md)

##### removeDuplicateVertices?

`boolean`

#### Returns

`void`

***

### findOrAddVertex()

> **findOrAddVertex**(`vertex`, `removeDuplicateVertices`): `number`

Defined in: [packages/ammo/ammo.d.ts:403](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L403)

#### Parameters

##### vertex

[`btVector3`](btVector3.md)

##### removeDuplicateVertices

`boolean`

#### Returns

`number`

***

### addIndex()

> **addIndex**(`index`): `void`

Defined in: [packages/ammo/ammo.d.ts:404](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L404)

#### Parameters

##### index

`number`

#### Returns

`void`

***

### getIndexedMeshArray()

> **getIndexedMeshArray**(): [`btIndexedMeshArray`](btIndexedMeshArray.md)

Defined in: [packages/ammo/ammo.d.ts:405](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L405)

#### Returns

[`btIndexedMeshArray`](btIndexedMeshArray.md)
