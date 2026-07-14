[**@orillusion/core**](../README.md)

***

# Class: MaterialUtilities

Defined in: [src/loader/parser/prefab/mats/MaterialUtilities.ts:15](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/MaterialUtilities.ts#L15)

Helper utilities used while parsing prefab materials. Resolves a shader by
name into a [Material](Material.md), and applies decoded textures and uniform
properties onto a material.

## Constructors

### Constructor

> **new MaterialUtilities**(): `MaterialUtilities`

#### Returns

`MaterialUtilities`

## Methods

### GetMaterial()

> `static` **GetMaterial**(`shaderName`, `ctx?`): [`Material`](Material.md)

Defined in: [src/loader/parser/prefab/mats/MaterialUtilities.ts:24](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/MaterialUtilities.ts#L24)

Resolve a shader by its (possibly path-qualified) name and build a
[Material](Material.md) using it.

#### Parameters

##### shaderName

`string`

the shader name, optionally with a path/dotted prefix.

##### ctx?

[`Context3D`](Context3D.md)

optional rendering context passed to the shader constructor.

#### Returns

[`Material`](Material.md)

the constructed material.

***

### applyMaterialTexture()

> `static` **applyMaterialTexture**(`mat`, `textures`): `void`

Defined in: [src/loader/parser/prefab/mats/MaterialUtilities.ts:49](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/MaterialUtilities.ts#L49)

Apply decoded textures onto a material, binding each to the matching
material/shader property or falling back to [Material.setTexture](Material.md#settexture).

#### Parameters

##### mat

[`Material`](Material.md)

the target material.

##### textures

`PrefabTextureData`[]

the decoded texture entries to apply.

#### Returns

`void`

***

### applyMaterialProperties()

> `static` **applyMaterialProperties**(`mat`, `properties`): `void`

Defined in: [src/loader/parser/prefab/mats/MaterialUtilities.ts:68](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/MaterialUtilities.ts#L68)

Apply decoded key/value uniform properties onto a material, dispatching
by value type to the matching material/shader property or uniform setter.

#### Parameters

##### mat

[`Material`](Material.md)

the target material.

##### properties

`KV`[]

the decoded property entries to apply.

#### Returns

`void`
