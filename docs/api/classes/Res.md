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

### Methods

- [getGltf](Res.md#getgltf)
- [addTexture](Res.md#addtexture)
- [getTexture](Res.md#gettexture)
- [addMat](Res.md#addmat)
- [getMat](Res.md#getmat)
- [addPrefab](Res.md#addprefab)
- [getPrefab](Res.md#getprefab)
- [addAtlas](Res.md#addatlas)
- [getAtlas](Res.md#getatlas)
- [getGUISprite](Res.md#getguisprite)
- [loadGltf](Res.md#loadgltf)
- [loadObj](Res.md#loadobj)
- [loadB3DM](Res.md#loadb3dm)
- [loadI3DM](Res.md#loadi3dm)
- [loadTexture](Res.md#loadtexture)
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

## Constructors

### constructor

• **new Res**()

#### Defined in

[src/assets/Res.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L44)

## Properties

### normalTexture

• **normalTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

normal texture

#### Defined in

[src/assets/Res.ts:362](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L362)

___

### maskTexture

• **maskTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:363](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L363)

___

### whiteTexture

• **whiteTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:364](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L364)

___

### blackTexture

• **blackTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:365](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L365)

___

### redTexture

• **redTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L366)

___

### blueTexture

• **blueTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L367)

___

### greenTexture

• **greenTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:368](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L368)

___

### yellowTexture

• **yellowTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:369](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L369)

___

### grayTexture

• **grayTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:370](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L370)

___

### defaultSky

• **defaultSky**: [`HDRTextureCube`](HDRTextureCube.md)

#### Defined in

[src/assets/Res.ts:372](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L372)

___

### defaultGUITexture

• **defaultGUITexture**: `GUITexture`

#### Defined in

[src/assets/Res.ts:374](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L374)

___

### defaultGUISprite

• **defaultGUISprite**: [`GUISprite`](GUISprite.md)

#### Defined in

[src/assets/Res.ts:375](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L375)

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

[src/assets/Res.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L55)

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

[src/assets/Res.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L64)

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

[src/assets/Res.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L73)

___

### addMat

▸ **addMat**(`name`, `mat`): `Map`<`string`, `MaterialBase`\>

add a material with reference of name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | material name |
| `mat` | `MaterialBase` | target material |

#### Returns

`Map`<`string`, `MaterialBase`\>

#### Defined in

[src/assets/Res.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L82)

___

### getMat

▸ **getMat**(`name`): `MaterialBase`

get material by name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | material name |

#### Returns

`MaterialBase`

#### Defined in

[src/assets/Res.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L91)

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

[src/assets/Res.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L100)

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

[src/assets/Res.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L109)

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

[src/assets/Res.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L114)

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

[src/assets/Res.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L119)

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

[src/assets/Res.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L123)

___

### loadGltf

▸ **loadGltf**(`url`, `loaderFunctions?`): `Promise`<[`Object3D`](Object3D.md)\>

load a gltf file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the url of file |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/assets/Res.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L138)

___

### loadObj

▸ **loadObj**(`url`, `loaderFunctions?`): `Promise`<[`Object3D`](Object3D.md)\>

load obj file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | obj file path |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/assets/Res.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L165)

___

### loadB3DM

▸ **loadB3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`<[`Object3D`](Object3D.md)\>

load b3dm file by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | path of file |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |
| `userData?` | `any` | - |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/assets/Res.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L188)

___

### loadI3DM

▸ **loadI3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`<[`Object3D`](Object3D.md)\>

load i3dm file by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | path of i3dm file |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |
| `userData?` | `any` | - |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/assets/Res.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L205)

___

### loadTexture

▸ **loadTexture**(`url`, `loaderFunctions?`, `flipY?`): `Promise`<[`Texture`](Texture.md)\>

load texture by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | texture path |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |
| `flipY?` | `boolean` | use flip y or not |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L223)

___

### loadHDRTexture

▸ **loadHDRTexture**(`url`, `loaderFunctions?`): `Promise`<[`Texture`](Texture.md)\>

load a hdr texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | texture url |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L240)

___

### loadHDRTextureCube

▸ **loadHDRTextureCube**(`url`, `loaderFunctions?`): `Promise`<[`Texture`](Texture.md)\>

load hdr cube texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file url |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:258](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L258)

___

### loadLDRTextureCube

▸ **loadLDRTextureCube**(`url`, `loaderFunctions?`): `Promise`<[`Texture`](Texture.md)\>

load ldr cube texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file path |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L274)

___

### loadTextureCubeMaps

▸ **loadTextureCubeMaps**(`urls`): `Promise`<[`Texture`](Texture.md)\>

load texture data from array of web url.
make sure there are six images in a group,
and the order is: nx, px, py, ny, nz, pz

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:290](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L290)

___

### loadTextureCubeStd

▸ **loadTextureCubeStd**(`url`, `loaderFunctions?`): `Promise`<[`Texture`](Texture.md)\>

load texture data from url.
the image is assembled from six images into cross shaped image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the path of image |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | - |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/assets/Res.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L307)

___

### loadJSON

▸ **loadJSON**(`url`, `loaderFunctions?`): `Promise`<`void` \| `object`\>

load json data from url.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the path of image |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | - |

#### Returns

`Promise`<`void` \| `object`\>

#### Defined in

[src/assets/Res.ts:321](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L321)

___

### loadFont

▸ **loadFont**(`url`, `loaderFunctions?`, `userData?`): `Promise`<[`FontInfo`](FontInfo.md)\>

load font file by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | font file url |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |
| `userData?` | `any` | - |

#### Returns

`Promise`<[`FontInfo`](FontInfo.md)\>

#### Defined in

[src/assets/Res.ts:339](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L339)

___

### loadAtlas

▸ **loadAtlas**(`url`, `loaderFunctions?`): `Promise`<[`FontInfo`](FontInfo.md)\>

load a atlas file by url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | file path |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback |

#### Returns

`Promise`<[`FontInfo`](FontInfo.md)\>

#### Defined in

[src/assets/Res.ts:353](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L353)

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

[src/assets/Res.ts:388](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L388)

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

[src/assets/Res.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L412)
