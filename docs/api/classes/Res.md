# Class: Res

Resource management classes for textures, materials, models, and preset bodies.

### Constructors

- [constructor](Res.md#constructor)

### Properties

- [normalTexture](Res.md#normaltexture)
- [maskTexture](Res.md#masktexture)
- [whiteTexture](Res.md#whitetexture)
- [blackTexture](Res.md#blacktexture)
- [redTexture](Res.md#redtexture)
- [blueTexture](Res.md#bluetexture)
- [greenTexture](Res.md#greentexture)
- [yellowTexture](Res.md#yellowtexture)
- [grayTexture](Res.md#graytexture)
- [defaultSky](Res.md#defaultsky)
- [defaultGUITexture](Res.md#defaultguitexture)
- [defaultGUISprite](Res.md#defaultguisprite)
- [defaultMaterial](Res.md#defaultmaterial)

### Methods

- [getGltf](Res.md#getgltf)
- [addObj](Res.md#addobj)
- [getObj](Res.md#getobj)
- [addTexture](Res.md#addtexture)
- [getTexture](Res.md#gettexture)
- [addGeometry](Res.md#addgeometry)
- [getGeometry](Res.md#getgeometry)
- [addMat](Res.md#addmat)
- [getMat](Res.md#getmat)
- [addPrefab](Res.md#addprefab)
- [getPrefab](Res.md#getprefab)
- [addAtlas](Res.md#addatlas)
- [getAtlas](Res.md#getatlas)
- [getGUISprite](Res.md#getguisprite)
- [load](Res.md#load)
- [loadGltf](Res.md#loadgltf)
- [loadObj](Res.md#loadobj)
- [loadB3DM](Res.md#loadb3dm)
- [loadI3DM](Res.md#loadi3dm)
- [loadTexture](Res.md#loadtexture)
- [loadBitmapTextures](Res.md#loadbitmaptextures)
- [loadHDRTexture](Res.md#loadhdrtexture)
- [loadHDRTextureCube](Res.md#loadhdrtexturecube)
- [loadLDRTextureCube](Res.md#loadldrtexturecube)
- [loadTextureCubeMaps](Res.md#loadtexturecubemaps)
- [loadTextureCubeStd](Res.md#loadtexturecubestd)
- [loadJSON](Res.md#loadjson)
- [loadFont](Res.md#loadfont)
- [loadAtlas](Res.md#loadatlas)
- [createTexture](Res.md#createtexture)
- [fillColor](Res.md#fillcolor)
- [initDefault](Res.md#initdefault)

## Constructors

### constructor

• **new Res**(): [`Res`](Res.md)

#### Returns

[`Res`](Res.md)

#### Defined in

[src/assets/Res.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L50)

## Properties

### normalTexture

• **normalTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

normal texture

#### Defined in

[src/assets/Res.ts:435](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L435)

___

### maskTexture

• **maskTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:436](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L436)

___

### whiteTexture

• **whiteTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:437](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L437)

___

### blackTexture

• **blackTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:438](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L438)

___

### redTexture

• **redTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:439](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L439)

___

### blueTexture

• **blueTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:440](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L440)

___

### greenTexture

• **greenTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:441](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L441)

___

### yellowTexture

• **yellowTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:442](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L442)

___

### grayTexture

• **grayTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:443](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L443)

___

### defaultSky

• **defaultSky**: [`HDRTextureCube`](HDRTextureCube.md)

#### Defined in

[src/assets/Res.ts:445](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L445)

___

### defaultGUITexture

• **defaultGUITexture**: `GUITexture`

#### Defined in

[src/assets/Res.ts:447](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L447)

___

### defaultGUISprite

• **defaultGUISprite**: [`GUISprite`](GUISprite.md)

#### Defined in

[src/assets/Res.ts:448](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L448)

___

### defaultMaterial

• **defaultMaterial**: [`LitMaterial`](LitMaterial.md)

#### Defined in

[src/assets/Res.ts:449](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L449)

## Methods

### getGltf

▸ **getGltf**(`url`): `GLTF_Info`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`GLTF_Info`

#### Defined in

[src/assets/Res.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L62)

___

### addObj

▸ **addObj**(`url`, `obj`): `void`

add a obj with reference of url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file path |
| `obj` | `any` | - |

#### Returns

`void`

#### Defined in

[src/assets/Res.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L71)

___

### getObj

▸ **getObj**(`url`): `any`

get obj by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file path |

#### Returns

`any`

#### Defined in

[src/assets/Res.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L80)

___

### addTexture

▸ **addTexture**(`url`, `texture`): `void`

add a texture with reference of url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file path |
| `texture` | [`Texture`](Texture.md) | source texture |

#### Returns

`void`

#### Defined in

[src/assets/Res.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L89)

___

### getTexture

▸ **getTexture**(`url`): [`Texture`](Texture.md)

get texture by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file path |

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/assets/Res.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L98)

___

### addGeometry

▸ **addGeometry**(`url`, `geo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `geo` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Defined in

[src/assets/Res.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L102)

___

### getGeometry

▸ **getGeometry**(`url`): [`GeometryBase`](GeometryBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Defined in

[src/assets/Res.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L106)

___

### addMat

▸ **addMat**(`name`, `mat`): `Map`\<`string`, [`Material`](Material.md)\>

add a material with reference of name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | material name |
| `mat` | [`Material`](Material.md) | target material |

#### Returns

`Map`\<`string`, [`Material`](Material.md)\>

#### Defined in

[src/assets/Res.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L115)

___

### getMat

▸ **getMat**(`name`): [`Material`](Material.md)

get material by name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | material name |

#### Returns

[`Material`](Material.md)

#### Defined in

[src/assets/Res.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L124)

___

### addPrefab

▸ **addPrefab**(`name`, `rootScene`): `void`

add prefab with reference name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | prefab name |
| `rootScene` | [`Object3D`](Object3D.md) | root object of prefab |

#### Returns

`void`

#### Defined in

[src/assets/Res.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L133)

___

### getPrefab

▸ **getPrefab**(`name`): [`Object3D`](Object3D.md)

get prefab by name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | prefab name |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/assets/Res.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L142)

___

### addAtlas

▸ **addAtlas**(`name`, `atlas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `atlas` | [`GUIAtlasTexture`](GUIAtlasTexture.md) |

#### Returns

`void`

#### Defined in

[src/assets/Res.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L147)

___

### getAtlas

▸ **getAtlas**(`name`): [`GUIAtlasTexture`](GUIAtlasTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GUIAtlasTexture`](GUIAtlasTexture.md)

#### Defined in

[src/assets/Res.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L152)

___

### getGUISprite

▸ **getGUISprite**(`id`): [`GUISprite`](GUISprite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/assets/Res.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L156)

___

### load

▸ **load**\<`T`\>(`url`, `c`, `loaderFunctions?`): `Promise`\<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParserBase` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `c` | [`Parser`](../types/Parser.md)\<`T`\> |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/assets/Res.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L165)

___

### loadGltf

▸ **loadGltf**(`url`, `loaderFunctions?`): `Promise`\<[`Object3D`](Object3D.md)\>

load a gltf file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the url of file |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

[src/assets/Res.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L178)

___

### loadObj

▸ **loadObj**(`url`, `loaderFunctions?`): `Promise`\<[`Object3D`](Object3D.md)\>

load obj file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | obj file path |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

[src/assets/Res.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L205)

___

### loadB3DM

▸ **loadB3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`\<[`Object3D`](Object3D.md)\>

load b3dm file by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | path of file |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |
| `userData?` | `any` | - |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

[src/assets/Res.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L228)

___

### loadI3DM

▸ **loadI3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`\<[`Object3D`](Object3D.md)\>

load i3dm file by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | path of i3dm file |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |
| `userData?` | `any` | - |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

[src/assets/Res.ts:245](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L245)

___

### loadTexture

▸ **loadTexture**(`url`, `loaderFunctions?`, `flipY?`): `Promise`\<[`Texture`](Texture.md)\>

load texture by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | texture path |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |
| `flipY?` | `boolean` | use flip y or not |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:263](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L263)

___

### loadBitmapTextures

▸ **loadBitmapTextures**(`urls`, `count?`, `loaderFunctions?`, `flipY?`): `Promise`\<[`BitmapTexture2D`](BitmapTexture2D.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `urls` | `string`[] | `undefined` |
| `count` | `number` | `5` |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | `undefined` |
| `flipY?` | `boolean` | `undefined` |

#### Returns

`Promise`\<[`BitmapTexture2D`](BitmapTexture2D.md)[]\>

#### Defined in

[src/assets/Res.ts:296](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L296)

___

### loadHDRTexture

▸ **loadHDRTexture**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

load a hdr texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | texture url |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L313)

___

### loadHDRTextureCube

▸ **loadHDRTextureCube**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

load hdr cube texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file url |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:331](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L331)

___

### loadLDRTextureCube

▸ **loadLDRTextureCube**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

load ldr cube texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file path |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L347)

___

### loadTextureCubeMaps

▸ **loadTextureCubeMaps**(`urls`): `Promise`\<[`Texture`](Texture.md)\>

load texture data from array of web url.
make sure there are six images in a group,
and the order is: nx, px, py, ny, nz, pz

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:363](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L363)

___

### loadTextureCubeStd

▸ **loadTextureCubeStd**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

load texture data from url.
the image is assembled from six images into cross shaped image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the path of image |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | - |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:380](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L380)

___

### loadJSON

▸ **loadJSON**(`url`, `loaderFunctions?`): `Promise`\<`void` \| `object`\>

load json data from url.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the path of image |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | - |

#### Returns

`Promise`\<`void` \| `object`\>

#### Defined in

[src/assets/Res.ts:394](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L394)

___

### loadFont

▸ **loadFont**(`url`, `loaderFunctions?`, `userData?`): `Promise`\<[`FontInfo`](FontInfo.md)\>

load font file by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | font file url |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |
| `userData?` | `any` | - |

#### Returns

`Promise`\<[`FontInfo`](FontInfo.md)\>

#### Defined in

[src/assets/Res.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L412)

___

### loadAtlas

▸ **loadAtlas**(`url`, `loaderFunctions?`): `Promise`\<[`FontInfo`](FontInfo.md)\>

load a atlas file by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file path |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`\<[`FontInfo`](FontInfo.md)\>

#### Defined in

[src/assets/Res.ts:426](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L426)

___

### createTexture

▸ **createTexture**(`width`, `height`, `r`, `g`, `b`, `a`, `name?`): [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

create a texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | width of texture |
| `height` | `number` | height of texture |
| `r` | `number` | component-red |
| `g` | `number` | component-green |
| `b` | `number` | component-blue |
| `a` | `number` | component-alpha（0 for transparent，1 for opaque） |
| `name?` | `string` | name string |

#### Returns

[`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:462](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L462)

___

### fillColor

▸ **fillColor**(`array`, `w`, `h`, `r`, `g`, `b`, `a`): `void`

fill slod color to this texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any` | data of texture |
| `w` | `number` | width of texture |
| `h` | `number` | height of texture |
| `r` | `number` | component-red |
| `g` | `number` | component-green |
| `b` | `number` | component-blue |
| `a` | `number` | component-alpha（0 for transparent，1 for opaque） |

#### Returns

`void`

#### Defined in

[src/assets/Res.ts:486](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L486)

___

### initDefault

▸ **initDefault**(): `void`

Initialize a common texture object. Provide a universal solid color texture object.

#### Returns

`void`

#### Defined in

[src/assets/Res.ts:501](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L501)
