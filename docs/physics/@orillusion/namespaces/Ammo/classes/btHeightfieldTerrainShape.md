[**@orillusion/physics**](../../../../README.md)

***

# Class: btHeightfieldTerrainShape

Defined in: [packages/ammo/ammo.d.ts:423](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L423)

## Extends

- [`btConcaveShape`](btConcaveShape.md)

## Constructors

### Constructor

> **new btHeightfieldTerrainShape**(`heightStickWidth`, `heightStickLength`, `heightfieldData`, `heightScale`, `minHeight`, `maxHeight`, `upAxis`, `hdt`, `flipQuadEdges`): `btHeightfieldTerrainShape`

Defined in: [packages/ammo/ammo.d.ts:424](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L424)

#### Parameters

##### heightStickWidth

`number`

##### heightStickLength

`number`

##### heightfieldData

`unknown`

##### heightScale

`number`

##### minHeight

`number`

##### maxHeight

`number`

##### upAxis

`number`

##### hdt

[`PHY_ScalarType`](../type-aliases/PHY_ScalarType.md)

##### flipQuadEdges

`boolean`

#### Returns

`btHeightfieldTerrainShape`

#### Overrides

[`btConcaveShape`](btConcaveShape.md).[`constructor`](btConcaveShape.md#constructor)

## Methods

### setLocalScaling()

> **setLocalScaling**(`scaling`): `void`

Defined in: [packages/ammo/ammo.d.ts:273](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

#### Parameters

##### scaling

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btConcaveShape`](btConcaveShape.md).[`setLocalScaling`](btConcaveShape.md#setlocalscaling)

***

### getLocalScaling()

> **getLocalScaling**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:274](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L274)

#### Returns

[`btVector3`](btVector3.md)

#### Inherited from

[`btConcaveShape`](btConcaveShape.md).[`getLocalScaling`](btConcaveShape.md#getlocalscaling)

***

### calculateLocalInertia()

> **calculateLocalInertia**(`mass`, `inertia`): `void`

Defined in: [packages/ammo/ammo.d.ts:275](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L275)

#### Parameters

##### mass

`number`

##### inertia

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btConcaveShape`](btConcaveShape.md).[`calculateLocalInertia`](btConcaveShape.md#calculatelocalinertia)

***

### setMargin()

> **setMargin**(`margin`): `void`

Defined in: [packages/ammo/ammo.d.ts:425](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L425)

#### Parameters

##### margin

`number`

#### Returns

`void`

#### Overrides

[`btConcaveShape`](btConcaveShape.md).[`setMargin`](btConcaveShape.md#setmargin)

***

### getMargin()

> **getMargin**(): `number`

Defined in: [packages/ammo/ammo.d.ts:426](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L426)

#### Returns

`number`

#### Overrides

[`btConcaveShape`](btConcaveShape.md).[`getMargin`](btConcaveShape.md#getmargin)
