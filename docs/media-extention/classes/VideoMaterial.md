# Class: VideoMaterial

Video Material
Do not compute light, only read pixel color from a Video source

## Hierarchy

- `Material`

  ↳ **`VideoMaterial`**

### Constructors

- [constructor](VideoMaterial.md#constructor)

### Properties

- [name](VideoMaterial.md#name)
- [instanceID](VideoMaterial.md#instanceid)
- [enable](VideoMaterial.md#enable)

### Accessors

- [rectClip](VideoMaterial.md#rectclip)
- [baseMap](VideoMaterial.md#basemap)
- [envMap](VideoMaterial.md#envmap)
- [shadowMap](VideoMaterial.md#shadowmap)
- [depthCompare](VideoMaterial.md#depthcompare)
- [defaultPass](VideoMaterial.md#defaultpass)
- [doubleSide](VideoMaterial.md#doubleside)
- [castShadow](VideoMaterial.md#castshadow)
- [blendMode](VideoMaterial.md#blendmode)
- [transparent](VideoMaterial.md#transparent)
- [cullMode](VideoMaterial.md#cullmode)

### Methods

- [debug](VideoMaterial.md#debug)
- [hasPass](VideoMaterial.md#haspass)
- [getPass](VideoMaterial.md#getpass)
- [getAllPass](VideoMaterial.md#getallpass)
- [addPass](VideoMaterial.md#addpass)
- [removePass](VideoMaterial.md#removepass)
- [clone](VideoMaterial.md#clone)
- [destroy](VideoMaterial.md#destroy)

## Constructors

### constructor

• **new VideoMaterial**()

Create new VideoMaterial

#### Overrides

Material.constructor

#### Defined in

[packages/media-extention/VideoMaterial.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L15)

## Properties

### name

• **name**: `string`

name of this material

#### Inherited from

Material.name

#### Defined in

[src/materials/Material.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L11)

___

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Inherited from

Material.instanceID

#### Defined in

[src/materials/Material.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L17)

___

### enable

• **enable**: `boolean` = `true`

#### Inherited from

Material.enable

#### Defined in

[src/materials/Material.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L19)

## Accessors

### rectClip

• `get` **rectClip**(): `Vector4`

Get the clip rect area

#### Returns

`Vector4`

#### Defined in

[packages/media-extention/VideoMaterial.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L52)

• `set` **rectClip**(`value`): `void`

Set the clip rect area

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Defined in

[packages/media-extention/VideoMaterial.ts:45](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L45)

___

### baseMap

• `get` **baseMap**(): `Texture`

#### Returns

`Texture`

#### Defined in

[packages/media-extention/VideoMaterial.ts:56](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L56)

• `set` **baseMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/media-extention/VideoMaterial.ts:60](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L60)

___

### envMap

• `set` **envMap**(`texture`): `void`

Set no envMap

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/media-extention/VideoMaterial.ts:67](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L67)

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

Set no shadowMap

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/media-extention/VideoMaterial.ts:74](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L74)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Material.depthCompare

#### Defined in

[src/materials/Material.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L31)

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

Material.depthCompare

#### Defined in

[src/materials/Material.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L35)

___

### defaultPass

• `get` **defaultPass**(): `RenderShader`

#### Returns

`RenderShader`

#### Inherited from

Material.defaultPass

#### Defined in

[src/materials/Material.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L40)

• `set` **defaultPass**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `RenderShader` |

#### Returns

`void`

#### Inherited from

Material.defaultPass

#### Defined in

[src/materials/Material.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L44)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.doubleSide

#### Defined in

[src/materials/Material.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L49)

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.doubleSide

#### Defined in

[src/materials/Material.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L53)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.castShadow

#### Defined in

[src/materials/Material.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L57)

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.castShadow

#### Defined in

[src/materials/Material.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L62)

___

### blendMode

• `get` **blendMode**(): `BlendMode`

#### Returns

`BlendMode`

#### Inherited from

Material.blendMode

#### Defined in

[src/materials/Material.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L67)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BlendMode` |

#### Returns

`void`

#### Inherited from

Material.blendMode

#### Defined in

[src/materials/Material.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L72)

___

### transparent

• `get` **transparent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.transparent

#### Defined in

[src/materials/Material.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L78)

• `set` **transparent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.transparent

#### Defined in

[src/materials/Material.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L83)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

Material.cullMode

#### Defined in

[src/materials/Material.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L91)

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

Material.cullMode

#### Defined in

[src/materials/Material.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L96)

## Methods

### debug

▸ **debug**(): `void`

Start debug GUI

#### Returns

`void`

#### Defined in

[packages/media-extention/VideoMaterial.ts:81](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L81)

___

### hasPass

▸ **hasPass**(`passType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `RendererType` |

#### Returns

`boolean`

#### Inherited from

Material.hasPass

#### Defined in

[src/materials/Material.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L105)

___

### getPass

▸ **getPass**(`passType`): `RenderShader`[]

get render pass by renderType

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `RendererType` |

#### Returns

`RenderShader`[]

#### Inherited from

Material.getPass

#### Defined in

[src/materials/Material.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L114)

___

### getAllPass

▸ **getAllPass**(): `RenderShader`[]

get all color render pass

#### Returns

`RenderShader`[]

#### Inherited from

Material.getAllPass

#### Defined in

[src/materials/Material.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L122)

___

### addPass

▸ **addPass**(`passType`, `pass`, `index?`): `RenderShader`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `passType` | `RendererType` | `undefined` |
| `pass` | `RenderShader` | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`RenderShader`[]

#### Inherited from

Material.addPass

#### Defined in

[src/materials/Material.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L126)

___

### removePass

▸ **removePass**(`passType`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `RendererType` |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

Material.removePass

#### Defined in

[src/materials/Material.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L145)

___

### clone

▸ **clone**(): `any`

clone one material

#### Returns

`any`

Material

#### Inherited from

Material.clone

#### Defined in

[src/materials/Material.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L158)

___

### destroy

▸ **destroy**(`force`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.destroy

#### Defined in

[src/materials/Material.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L162)
