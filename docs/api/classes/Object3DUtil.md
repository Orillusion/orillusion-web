[**@orillusion/core**](../README.md)

***

# Class: Object3DUtil

Defined in: [src/util/Object3DUtil.ts:29](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L29)

Helper factory for quickly creating common debug/sample Object3D
primitives (cubes, spheres, planes, point lights), backed by a
per-Context3D cache of shared geometries and materials.

## Constructors

### Constructor

> **new Object3DUtil**(): `Object3DUtil`

#### Returns

`Object3DUtil`

## Methods

### CubeMesh()

> `static` **CubeMesh**(`ctx`): [`BoxGeometry`](BoxGeometry.md)

Defined in: [src/util/Object3DUtil.ts:49](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L49)

Shared unit box geometry for the given context.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

[`BoxGeometry`](BoxGeometry.md)

***

### SphereMesh()

> `static` **SphereMesh**(`ctx`): [`SphereGeometry`](SphereGeometry.md)

Defined in: [src/util/Object3DUtil.ts:54](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L54)

Shared unit sphere geometry for the given context.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

[`SphereGeometry`](SphereGeometry.md)

***

### GetCube()

> `static` **GetCube**(`ctx`): [`Object3D`](Object3D.md)

Defined in: [src/util/Object3DUtil.ts:59](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L59)

Create a cube Object3D using the shared box geometry and a cloned default material.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

[`Object3D`](Object3D.md)

***

### GetMaterial()

> `static` **GetMaterial**(`ctx`, `tex`): [`Material`](Material.md)

Defined in: [src/util/Object3DUtil.ts:70](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L70)

Get (and cache per texture) a clone of a LitMaterial whose base map is the given texture.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

##### tex

[`Texture`](Texture.md)

#### Returns

[`Material`](Material.md)

***

### GetPlane()

> `static` **GetPlane**(`ctx`, `tex`): [`Object3D`](Object3D.md)

Defined in: [src/util/Object3DUtil.ts:82](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L82)

Create a textured, additively-blended plane Object3D (no shadow/GI/reflection).

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

##### tex

[`Texture`](Texture.md)

#### Returns

[`Object3D`](Object3D.md)

***

### GetSingleCube()

> `static` **GetSingleCube**(`sizeX`, `sizeY`, `sizeZ`, `r`, `g`, `b`): [`Object3D`](Object3D.md)

Defined in: [src/util/Object3DUtil.ts:97](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L97)

Create a standalone cube with its own box geometry and a colored LitMaterial.

#### Parameters

##### sizeX

`number`

##### sizeY

`number`

##### sizeZ

`number`

##### r

`number`

##### g

`number`

##### b

`number`

#### Returns

[`Object3D`](Object3D.md)

***

### GetSingleSphere()

> `static` **GetSingleSphere**(`radius`, `r`, `g`, `b`): [`Object3D`](Object3D.md)

Defined in: [src/util/Object3DUtil.ts:112](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L112)

Create a standalone sphere with its own geometry and a colored LitMaterial.

#### Parameters

##### radius

`number`

##### r

`number`

##### g

`number`

##### b

`number`

#### Returns

[`Object3D`](Object3D.md)

***

### GetSingleCube2()

> `static` **GetSingleCube2**(`mat`, `size?`): [`Object3D`](Object3D.md)

Defined in: [src/util/Object3DUtil.ts:125](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L125)

Create a standalone cube with the given material and uniform size (no shadow).

#### Parameters

##### mat

[`Material`](Material.md)

##### size?

`number` = `10`

#### Returns

[`Object3D`](Object3D.md)

***

### GetPointLight()

> `static` **GetPointLight**(`pos`, `rotation`, `radius`, `r`, `g`, `b`, `intensity?`, `castShadow?`): [`PointLight`](PointLight.md)

Defined in: [src/util/Object3DUtil.ts:135](https://github.com/orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L135)

Create a point light Object3D with a small visualizer sphere child.

#### Parameters

##### pos

[`Vector3`](Vector3.md)

##### rotation

[`Vector3`](Vector3.md)

##### radius

`number`

##### r

`number`

##### g

`number`

##### b

`number`

##### intensity?

`number` = `1`

##### castShadow?

`boolean` = `true`

#### Returns

[`PointLight`](PointLight.md)
