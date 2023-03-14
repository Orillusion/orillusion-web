# Class: Res

纹理，材质，模型，预设体的资源管理类。


### Constructors

- [constructor](Res.md#constructor)

### Methods

- [getGltf](Res.md#getgltf)
- [getPrefabLoader](Res.md#getprefabloader)
- [addAtlas](Res.md#addatlas)
- [getAtlas](Res.md#getatlas)
- [getSubTexture](Res.md#getsubtexture)
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
- [loadFont](Res.md#loadfont)
- [loadAtlas](Res.md#loadatlas)
- [loadTexture](Res.md#loadtexture)
- [loadHDRTexture](Res.md#loadhdrtexture)
- [loadHDRTextureCube](Res.md#loadhdrtexturecube)
- [loadLDRTextureCube](Res.md#loadldrtexturecube)
- [loadTextureCubeMaps](Res.md#loadtexturecubemaps)
- [loadTextureCubeStd](Res.md#loadtexturecubestd)
- [loadPrefab](Res.md#loadprefab)
- [loadJSON](Res.md#loadjson)

## Constructors

### constructor

• **new Res**()

创建一个资源管理类对象

#### Defined in

[src/engine/assets/Res.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L41)

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

[src/engine/assets/Res.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L50)

___

### getPrefabLoader

▸ **getPrefabLoader**(`url`): [`PrefabLoader`](PrefabLoader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`PrefabLoader`](PrefabLoader.md)

#### Defined in

[src/engine/assets/Res.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L54)

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

[src/engine/assets/Res.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L58)

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

[src/engine/assets/Res.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L63)

___

### getSubTexture

▸ **getSubTexture**(`id`): [`GUISubTexture`](GUISubTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`GUISubTexture`](GUISubTexture.md)

#### Defined in

[src/engine/assets/Res.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L67)

___

### addTexture

▸ **addTexture**(`url`, `texture`): `void`

添加纹理对象到资源池

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 资源路径 |
| `texture` | [`Texture`](Texture.md) | 纹理数据 |

#### Returns

`void`

#### Defined in

[src/engine/assets/Res.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L80)

___

### getTexture

▸ **getTexture**(`url`): [`Texture`](Texture.md)

获取纹理对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 资源路径 |

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/engine/assets/Res.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L89)

___

### addMat

▸ **addMat**(`name`, `mat`): `Map`<`string`, `MaterialBase`\>

添加材质对象到资源池

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 材质对象名称 |
| `mat` | `MaterialBase` | 材质对象 |

#### Returns

`Map`<`string`, `MaterialBase`\>

#### Defined in

[src/engine/assets/Res.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L98)

___

### getMat

▸ **getMat**(`name`): `MaterialBase`

获取材质对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 材质对象名称 |

#### Returns

`MaterialBase`

#### Defined in

[src/engine/assets/Res.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L107)

___

### addPrefab

▸ **addPrefab**(`name`, `rootScene`): `void`

添加预设体到资源池

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 预设体名称 |
| `rootScene` | [`Object3D`](Object3D.md) |  |

#### Returns

`void`

#### Defined in

[src/engine/assets/Res.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L116)

___

### getPrefab

▸ **getPrefab**(`name`): [`Object3D`](Object3D.md)

获取预设体

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 预设体名称 |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/engine/assets/Res.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L125)

___

### loadGltf

▸ **loadGltf**(`url`, `loaderFunctions?`): `Promise`<[`Object3D`](Object3D.md)\>

加载模型文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 模型路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/engine/assets/Res.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L135)

___

### loadObj

▸ **loadObj**(`url`, `loaderFunctions?`): `Promise`<[`Object3D`](Object3D.md)\>

加载模型文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 模型路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/engine/assets/Res.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L162)

___

### loadB3DM

▸ **loadB3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`<[`Object3D`](Object3D.md)\>

加载b3dm文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 模型路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |
| `userData?` | `any` | - |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/engine/assets/Res.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L185)

___

### loadI3DM

▸ **loadI3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`<[`Object3D`](Object3D.md)\>

加载i3dm文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 模型路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |
| `userData?` | `any` | - |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/engine/assets/Res.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L202)

___

### loadFont

▸ **loadFont**(`url`, `loaderFunctions?`, `userData?`): `Promise`<[`FontInfo`](FontInfo.md)\>

加载字体文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 字体路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |
| `userData?` | `any` | - |

#### Returns

`Promise`<[`FontInfo`](FontInfo.md)\>

#### Defined in

[src/engine/assets/Res.ts:219](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L219)

___

### loadAtlas

▸ **loadAtlas**(`url`, `loaderFunctions?`): `Promise`<[`FontInfo`](FontInfo.md)\>

加载图集

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 图集路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |

#### Returns

`Promise`<[`FontInfo`](FontInfo.md)\>

#### Defined in

[src/engine/assets/Res.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L233)

___

### loadTexture

▸ **loadTexture**(`url`, `loaderFunctions?`, `flipY?`): `Promise`<[`Texture`](Texture.md)\>

加载贴图

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |
| `flipY?` | `boolean` | 是否颠倒y轴 |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/engine/assets/Res.ts:246](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L246)

___

### loadHDRTexture

▸ **loadHDRTexture**(`url`, `loaderFunctions?`): `Promise`<[`Texture`](Texture.md)\>

加载HDR单张纹理

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/engine/assets/Res.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L264)

___

### loadHDRTextureCube

▸ **loadHDRTextureCube**(`url`, `loaderFunctions?`): `Promise`<[`Texture`](Texture.md)\>

加载HDR立方体纹理

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/engine/assets/Res.ts:283](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L283)

___

### loadLDRTextureCube

▸ **loadLDRTextureCube**(`url`, `loaderFunctions?`): `Promise`<[`Texture`](Texture.md)\>

加载LDR立方体纹理

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | 加载回调函数 |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/engine/assets/Res.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L300)

___

### loadTextureCubeMaps

▸ **loadTextureCubeMaps**(`urls`): `Promise`<[`Texture`](Texture.md)\>

加载立方体纹理

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urls` | `string`[] | 6 张 2D 纹理按顺序排列组合成一个立方盒子 |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/engine/assets/Res.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L316)

___

### loadTextureCubeStd

▸ **loadTextureCubeStd**(`url`, `loaderFunctions?`): `Promise`<[`Texture`](Texture.md)\>

加载立方体纹理(十字型)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | - |

#### Returns

`Promise`<[`Texture`](Texture.md)\>

#### Defined in

[src/engine/assets/Res.ts:334](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L334)

___

### loadPrefab

▸ **loadPrefab**(`url`, `loaderFunctions?`): `Promise`<[`Object3D`](Object3D.md)\>

加载Prefab文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件路径 |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | - |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/engine/assets/Res.ts:350](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L350)

___

### loadJSON

▸ **loadJSON**(`url`, `loaderFunctions?`): `Promise`<`void` \| `object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) |

#### Returns

`Promise`<`void` \| `object`\>

#### Defined in

[src/engine/assets/Res.ts:362](https://github.com/Orillusion/orillusion/blob/main/src/engine/assets/Res.ts#L362)
