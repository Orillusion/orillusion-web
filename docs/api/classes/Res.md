[**@orillusion/core**](../README.md)

***

# Class: Res

Defined in: [src/assets/Res.ts:33](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L33)

Resource management classes for textures, materials, models, and preset bodies.

## Constructors

### Constructor

> **new Res**(`ctx?`): `Res`

Defined in: [src/assets/Res.ts:50](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L50)

#### Parameters

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`Res`

## Properties

### \_ctx

> `readonly` **\_ctx**: [`Context3D`](Context3D.md)

Defined in: [src/assets/Res.ts:45](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L45)

Context this Res instance is bound to. Parsers launched via this Res
 thread this ctx through so their default-texture lookups resolve
 against the same device.

***

### normalTexture

> **normalTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:431](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L431)

Default flat normal-map texture.

***

### maskTexture

> **maskTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:433](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L433)

Default mask texture.

***

### whiteTexture

> **whiteTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:435](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L435)

Default solid white texture.

***

### blackTexture

> **blackTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:437](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L437)

Default solid black texture.

***

### redTexture

> **redTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:439](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L439)

Default solid red texture.

***

### blueTexture

> **blueTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:441](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L441)

Default solid blue texture.

***

### greenTexture

> **greenTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:443](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L443)

Default solid green texture.

***

### yellowTexture

> **yellowTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:445](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L445)

Default solid yellow texture.

***

### grayTexture

> **grayTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:447](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L447)

Default solid gray texture.

***

### defaultSky

> **defaultSky**: [`HDRTextureCube`](HDRTextureCube.md)

Defined in: [src/assets/Res.ts:450](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L450)

Default sky cube texture.

***

### defaultMaterial

> **defaultMaterial**: [`LitMaterial`](LitMaterial.md)

Defined in: [src/assets/Res.ts:453](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L453)

Default lit material.

## Methods

### getGltf()

> **getGltf**(`url`): `GLTF_Info`

Defined in: [src/assets/Res.ts:67](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L67)

get a parsed glTF info object by url

#### Parameters

##### url

`string`

file path

#### Returns

`GLTF_Info`

the cached GLTF_Info, or undefined if not loaded

***

### addObj()

> **addObj**(`url`, `obj`): `void`

Defined in: [src/assets/Res.ts:76](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L76)

add a obj with reference of url

#### Parameters

##### url

`string`

file path

##### obj

`any`

#### Returns

`void`

***

### getObj()

> **getObj**(`url`): `any`

Defined in: [src/assets/Res.ts:85](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L85)

get obj by url

#### Parameters

##### url

`string`

file path

#### Returns

`any`

***

### addTexture()

> **addTexture**(`url`, `texture`): `void`

Defined in: [src/assets/Res.ts:94](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L94)

add a texture with reference of url

#### Parameters

##### url

`string`

file path

##### texture

[`Texture`](Texture.md)

source texture

#### Returns

`void`

***

### getTexture()

> **getTexture**(`url`): [`Texture`](Texture.md)

Defined in: [src/assets/Res.ts:103](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L103)

get texture by url

#### Parameters

##### url

`string`

file path

#### Returns

[`Texture`](Texture.md)

***

### addGeometry()

> **addGeometry**(`url`, `geo`): `void`

Defined in: [src/assets/Res.ts:107](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L107)

#### Parameters

##### url

`string`

##### geo

[`GeometryBase`](GeometryBase.md)

#### Returns

`void`

***

### getGeometry()

> **getGeometry**(`url`): [`GeometryBase`](GeometryBase.md)

Defined in: [src/assets/Res.ts:111](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L111)

#### Parameters

##### url

`string`

#### Returns

[`GeometryBase`](GeometryBase.md)

***

### addMat()

> **addMat**(`name`, `mat`): `Map`\<`string`, [`Material`](Material.md)\>

Defined in: [src/assets/Res.ts:120](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L120)

add a material with reference of name

#### Parameters

##### name

`string`

material name

##### mat

[`Material`](Material.md)

target material

#### Returns

`Map`\<`string`, [`Material`](Material.md)\>

***

### getMat()

> **getMat**(`name`): [`Material`](Material.md)

Defined in: [src/assets/Res.ts:129](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L129)

get material by name

#### Parameters

##### name

`string`

material name

#### Returns

[`Material`](Material.md)

***

### addPrefab()

> **addPrefab**(`name`, `rootScene`): `void`

Defined in: [src/assets/Res.ts:138](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L138)

add prefab with reference name

#### Parameters

##### name

`string`

prefab name

##### rootScene

[`Object3D`](Object3D.md)

root object of prefab

#### Returns

`void`

***

### getPrefab()

> **getPrefab**(`name`): [`Object3D`](Object3D.md)

Defined in: [src/assets/Res.ts:147](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L147)

get prefab by name

#### Parameters

##### name

`string`

prefab name

#### Returns

[`Object3D`](Object3D.md)

***

### load()

> **load**\<`T`\>(`url`, `c`, `loaderFunctions?`): `Promise`\<`T`\[`"data"`\]\>

Defined in: [src/assets/Res.ts:159](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L159)

load a file with a custom parser and return its parsed data

#### Type Parameters

##### T

`T` *extends* `ParserBase`

#### Parameters

##### url

`string`

the url of file

##### c

[`Parser`](../type-aliases/Parser.md)\<`T`\>

the parser class to use

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

optional load callbacks

#### Returns

`Promise`\<`T`\[`"data"`\]\>

the parser's data

***

### loadGltf()

> **loadGltf**(`url`, `loaderFunctions?`): `Promise`\<[`Object3D`](Object3D.md)\>

Defined in: [src/assets/Res.ts:172](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L172)

load a gltf file

#### Parameters

##### url

`string`

the url of file

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

callback

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

***

### loadObj()

> **loadObj**(`url`, `loaderFunctions?`): `Promise`\<[`Object3D`](Object3D.md)\>

Defined in: [src/assets/Res.ts:199](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L199)

load obj file

#### Parameters

##### url

`string`

obj file path

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

callback

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

***

### loadB3DM()

> **loadB3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`\<[`Object3D`](Object3D.md)\>

Defined in: [src/assets/Res.ts:222](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L222)

load b3dm file by url

#### Parameters

##### url

`string`

path of file

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

callback

##### userData?

`any`

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

***

### loadI3DM()

> **loadI3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`\<[`Object3D`](Object3D.md)\>

Defined in: [src/assets/Res.ts:239](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L239)

load i3dm file by url

#### Parameters

##### url

`string`

path of i3dm file

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

callback

##### userData?

`any`

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

***

### loadTexture()

> **loadTexture**(`url`, `loaderFunctions?`, `flipY?`, `colorSpace?`): `Promise`\<[`Texture`](Texture.md)\>

Defined in: [src/assets/Res.ts:267](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L267)

load texture by url

#### Parameters

##### url

`string`

texture path

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

callback

##### flipY?

`boolean`

use flip y or not

##### colorSpace?

[`TextureColorSpace`](../type-aliases/TextureColorSpace.md) = `'linear'`

`'srgb'` to load as `rgba8unorm-srgb` (use
              for baseColor / emissive / decal maps that store
              sRGB-encoded color); `'linear'` (default) keeps
              legacy `rgba8unorm` behavior — required for
              normal maps, metallic-roughness packs, AO,
              masks, height / displacement, and any other
              non-color buffer. The default stays `'linear'`
              for back-compat until the sRGB pipeline
              migration is complete; pass `'srgb'` explicitly
              from glTF / sample call sites that load color.

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

***

### loadBitmapTextures()

> **loadBitmapTextures**(`urls`, `count?`, `loaderFunctions?`, `flipY?`): `Promise`\<[`BitmapTexture2D`](BitmapTexture2D.md)[]\>

Defined in: [src/assets/Res.ts:309](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L309)

#### Parameters

##### urls

`string`[]

##### count?

`number` = `5`

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

##### flipY?

`boolean`

#### Returns

`Promise`\<[`BitmapTexture2D`](BitmapTexture2D.md)[]\>

***

### loadHDRTexture()

> **loadHDRTexture**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

Defined in: [src/assets/Res.ts:326](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L326)

load a hdr texture

#### Parameters

##### url

`string`

texture url

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

callback

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

***

### loadHDRTextureCube()

> **loadHDRTextureCube**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

Defined in: [src/assets/Res.ts:344](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L344)

load hdr cube texture

#### Parameters

##### url

`string`

file url

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

callback

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

***

### loadLDRTextureCube()

> **loadLDRTextureCube**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

Defined in: [src/assets/Res.ts:360](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L360)

load ldr cube texture

#### Parameters

##### url

`string`

file path

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

callback

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

***

### loadTextureCubeMaps()

> **loadTextureCubeMaps**(`urls`): `Promise`\<[`Texture`](Texture.md)\>

Defined in: [src/assets/Res.ts:376](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L376)

load texture data from array of web url.
make sure there are six images in a group,
and the order is: [+X, -X, +Y, -Y, +Z, -Z]

#### Parameters

##### urls

`string`[]

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

***

### loadTextureCubeStd()

> **loadTextureCubeStd**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

Defined in: [src/assets/Res.ts:393](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L393)

load texture data from url.
the image is assembled from six images into cross shaped image.

#### Parameters

##### url

`string`

the path of image

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

***

### loadJSON()

> **loadJSON**(`url`, `loaderFunctions?`): `Promise`\<`void` \| `object`\>

Defined in: [src/assets/Res.ts:407](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L407)

load json data from url.

#### Parameters

##### url

`string`

the path of image

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

#### Returns

`Promise`\<`void` \| `object`\>

***

### loadAtlas()

> **loadAtlas**(`url`, `loaderFunctions?`): `Promise`\<[`TextureAtlas`](TextureAtlas.md)\>

Defined in: [src/assets/Res.ts:424](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L424)

Load a texture atlas (PNG + JSON) by URL. Returns a [TextureAtlas](TextureAtlas.md)
whose `get(id)` yields `TextureAtlasRegion` instances — feed those
directly into `Sprite.texture = region` to render a sub-image.

#### Parameters

##### url

`string`

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

#### Returns

`Promise`\<[`TextureAtlas`](TextureAtlas.md)\>

***

### createTexture()

> **createTexture**(`width`, `height`, `r`, `g`, `b`, `a`, `name?`): [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

Defined in: [src/assets/Res.ts:466](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L466)

create a texture

#### Parameters

##### width

`number`

width of texture

##### height

`number`

height of texture

##### r

`number`

component-red

##### g

`number`

component-green

##### b

`number`

component-blue

##### a

`number`

component-alpha（0 for transparent，1 for opaque）

##### name?

`string`

name string

#### Returns

[`Uint8ArrayTexture`](Uint8ArrayTexture.md)

***

### fillColor()

> **fillColor**(`array`, `w`, `h`, `r`, `g`, `b`, `a`): `void`

Defined in: [src/assets/Res.ts:490](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L490)

fill slod color to this texture

#### Parameters

##### array

`any`

data of texture

##### w

`number`

width of texture

##### h

`number`

height of texture

##### r

`number`

component-red

##### g

`number`

component-green

##### b

`number`

component-blue

##### a

`number`

component-alpha（0 for transparent，1 for opaque）

#### Returns

`void`

***

### fillColor()

> `static` **fillColor**(`array`, `w`, `h`, `r`, `g`, `b`, `a`): `void`

Defined in: [src/assets/Res.ts:495](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L495)

Pure data fill — no GPU state, safe to call without a Res instance.

#### Parameters

##### array

`any`

##### w

`number`

##### h

`number`

##### r

`number`

##### g

`number`

##### b

`number`

##### a

`number`

#### Returns

`void`

***

### initDefault()

> **initDefault**(`ctx?`): `void`

Defined in: [src/assets/Res.ts:512](https://github.com/orillusion/orillusion/blob/main/src/assets/Res.ts#L512)

Initialize a common texture object. Provide a universal solid color texture object.

#### Parameters

##### ctx?

[`Context3D`](Context3D.md)

Optional Context3D — when provided, default materials bind to it
           so the caller doesn't need `engine.use()`.

#### Returns

`void`
