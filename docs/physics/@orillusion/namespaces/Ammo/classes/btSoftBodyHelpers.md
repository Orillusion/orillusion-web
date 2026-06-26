[**@orillusion/physics**](../../../../README.md)

***

# Class: btSoftBodyHelpers

Defined in: [packages/ammo/ammo.d.ts:1077](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1077)

## Constructors

### Constructor

> **new btSoftBodyHelpers**(): `btSoftBodyHelpers`

Defined in: [packages/ammo/ammo.d.ts:1078](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1078)

#### Returns

`btSoftBodyHelpers`

## Methods

### CreateRope()

> **CreateRope**(`worldInfo`, `from`, `to`, `res`, `fixeds`): [`btSoftBody`](btSoftBody.md)

Defined in: [packages/ammo/ammo.d.ts:1079](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1079)

#### Parameters

##### worldInfo

[`btSoftBodyWorldInfo`](btSoftBodyWorldInfo.md)

##### from

[`btVector3`](btVector3.md)

##### to

[`btVector3`](btVector3.md)

##### res

`number`

##### fixeds

`number`

#### Returns

[`btSoftBody`](btSoftBody.md)

***

### CreatePatch()

> **CreatePatch**(`worldInfo`, `corner00`, `corner10`, `corner01`, `corner11`, `resx`, `resy`, `fixeds`, `gendiags`): [`btSoftBody`](btSoftBody.md)

Defined in: [packages/ammo/ammo.d.ts:1080](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1080)

#### Parameters

##### worldInfo

[`btSoftBodyWorldInfo`](btSoftBodyWorldInfo.md)

##### corner00

[`btVector3`](btVector3.md)

##### corner10

[`btVector3`](btVector3.md)

##### corner01

[`btVector3`](btVector3.md)

##### corner11

[`btVector3`](btVector3.md)

##### resx

`number`

##### resy

`number`

##### fixeds

`number`

##### gendiags

`boolean`

#### Returns

[`btSoftBody`](btSoftBody.md)

***

### CreatePatchUV()

> **CreatePatchUV**(`worldInfo`, `corner00`, `corner10`, `corner01`, `corner11`, `resx`, `resy`, `fixeds`, `gendiags`, `tex_coords`): [`btSoftBody`](btSoftBody.md)

Defined in: [packages/ammo/ammo.d.ts:1081](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1081)

#### Parameters

##### worldInfo

[`btSoftBodyWorldInfo`](btSoftBodyWorldInfo.md)

##### corner00

[`btVector3`](btVector3.md)

##### corner10

[`btVector3`](btVector3.md)

##### corner01

[`btVector3`](btVector3.md)

##### corner11

[`btVector3`](btVector3.md)

##### resx

`number`

##### resy

`number`

##### fixeds

`number`

##### gendiags

`boolean`

##### tex\_coords

readonly `number`[]

#### Returns

[`btSoftBody`](btSoftBody.md)

***

### CreateEllipsoid()

> **CreateEllipsoid**(`worldInfo`, `center`, `radius`, `res`): [`btSoftBody`](btSoftBody.md)

Defined in: [packages/ammo/ammo.d.ts:1082](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1082)

#### Parameters

##### worldInfo

[`btSoftBodyWorldInfo`](btSoftBodyWorldInfo.md)

##### center

[`btVector3`](btVector3.md)

##### radius

[`btVector3`](btVector3.md)

##### res

`number`

#### Returns

[`btSoftBody`](btSoftBody.md)

***

### CreateFromTriMesh()

> **CreateFromTriMesh**(`worldInfo`, `vertices`, `triangles`, `ntriangles`, `randomizeConstraints`): [`btSoftBody`](btSoftBody.md)

Defined in: [packages/ammo/ammo.d.ts:1083](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1083)

#### Parameters

##### worldInfo

[`btSoftBodyWorldInfo`](btSoftBodyWorldInfo.md)

##### vertices

readonly `number`[]

##### triangles

readonly `number`[]

##### ntriangles

`number`

##### randomizeConstraints

`boolean`

#### Returns

[`btSoftBody`](btSoftBody.md)

***

### CreateFromConvexHull()

> **CreateFromConvexHull**(`worldInfo`, `vertices`, `nvertices`, `randomizeConstraints`): [`btSoftBody`](btSoftBody.md)

Defined in: [packages/ammo/ammo.d.ts:1084](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1084)

#### Parameters

##### worldInfo

[`btSoftBodyWorldInfo`](btSoftBodyWorldInfo.md)

##### vertices

[`btVector3`](btVector3.md)

##### nvertices

`number`

##### randomizeConstraints

`boolean`

#### Returns

[`btSoftBody`](btSoftBody.md)
