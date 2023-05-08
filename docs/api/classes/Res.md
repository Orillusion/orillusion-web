# Class: Res

Resource management classes for textures, materials, models, and preset bodies.


### Constructors

- [constructor](Res.md#constructor)

### Methods

- [getGltf](Res.md#getgltf)
- [addTexture](Res.md#addtexture)
- [getTexture](Res.md#gettexture)
- [addMat](Res.md#addmat)
- [getMat](Res.md#getmat)
- [addPrefab](Res.md#addprefab)
- [getPrefab](Res.md#getprefab)
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
- [createTexture](Res.md#createtexture)
- [fillColor](Res.md#fillcolor)

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

## Constructors

### constructor

• **new Res**()

#### Defined in

[src/assets/Res.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L35)

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

[src/assets/Res.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L45)

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

[src/assets/Res.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L54)

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

[src/assets/Res.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L63)

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

[src/assets/Res.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L72)

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

[src/assets/Res.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L81)

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

[src/assets/Res.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L90)

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

[src/assets/Res.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L99)

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

[src/assets/Res.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L109)

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

[src/assets/Res.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L136)

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

[src/assets/Res.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L159)

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

[src/assets/Res.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L176)

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

[src/assets/Res.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L194)

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

[src/assets/Res.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L211)

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

[src/assets/Res.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L229)

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

[src/assets/Res.ts:245](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L245)

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

[src/assets/Res.ts:261](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L261)

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

[src/assets/Res.ts:278](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L278)

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

[src/assets/Res.ts:292](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L292)

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

[src/assets/Res.ts:329](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L329)

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

[src/assets/Res.ts:353](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L353)

## Properties

### normalTexture

• **normalTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

normal texture

#### Defined in

[src/assets/Res.ts:306](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L306)

___

### maskTexture

• **maskTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L307)

___

### whiteTexture

• **whiteTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:308](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L308)

___

### blackTexture

• **blackTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:309](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L309)

___

### redTexture

• **redTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:310](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L310)

___

### blueTexture

• **blueTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:311](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L311)

___

### greenTexture

• **greenTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:312](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L312)

___

### yellowTexture

• **yellowTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L313)

___

### grayTexture

• **grayTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/assets/Res.ts:314](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L314)

___

### defaultSky

• **defaultSky**: [`HDRTextureCube`](HDRTextureCube.md)

#### Defined in

[src/assets/Res.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/assets/Res.ts#L316)
