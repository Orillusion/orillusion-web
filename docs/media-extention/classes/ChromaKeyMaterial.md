# Class: ChromaKeyMaterial

ChromaKey Material
Do not compute light, only read pixel color from a video source with a background color filter

## Hierarchy

- `Material`

  ↳ **`ChromaKeyMaterial`**

### Constructors

- [constructor](ChromaKeyMaterial.md#constructor)

### Properties

- [name](ChromaKeyMaterial.md#name)
- [instanceID](ChromaKeyMaterial.md#instanceid)
- [enable](ChromaKeyMaterial.md#enable)

### Accessors

- [baseMap](ChromaKeyMaterial.md#basemap)
- [rectClip](ChromaKeyMaterial.md#rectclip)
- [keyColor](ChromaKeyMaterial.md#keycolor)
- [colorCutoff](ChromaKeyMaterial.md#colorcutoff)
- [colorFeathering](ChromaKeyMaterial.md#colorfeathering)
- [maskFeathering](ChromaKeyMaterial.md#maskfeathering)
- [sharpening](ChromaKeyMaterial.md#sharpening)
- [despoil](ChromaKeyMaterial.md#despoil)
- [despoilLuminanceAdd](ChromaKeyMaterial.md#despoilluminanceadd)
- [depthCompare](ChromaKeyMaterial.md#depthcompare)
- [defaultPass](ChromaKeyMaterial.md#defaultpass)
- [doubleSide](ChromaKeyMaterial.md#doubleside)
- [castShadow](ChromaKeyMaterial.md#castshadow)
- [blendMode](ChromaKeyMaterial.md#blendmode)
- [transparent](ChromaKeyMaterial.md#transparent)
- [cullMode](ChromaKeyMaterial.md#cullmode)

### Methods

- [debug](ChromaKeyMaterial.md#debug)
- [hasPass](ChromaKeyMaterial.md#haspass)
- [getPass](ChromaKeyMaterial.md#getpass)
- [getAllPass](ChromaKeyMaterial.md#getallpass)
- [addPass](ChromaKeyMaterial.md#addpass)
- [removePass](ChromaKeyMaterial.md#removepass)
- [clone](ChromaKeyMaterial.md#clone)
- [destroy](ChromaKeyMaterial.md#destroy)

## Constructors

### constructor

• **new ChromaKeyMaterial**()

Create new ChromaKey material

#### Overrides

Material.constructor

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L13)

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

### baseMap

• `get` **baseMap**(): `Texture`

#### Returns

`Texture`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:60](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L60)

• `set` **baseMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:56](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L56)

___

### rectClip

• `get` **rectClip**(): `Vector4`

Get current clip rect area

#### Returns

`Vector4`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:74](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L74)

• `set` **rectClip**(`value`): `void`

Set the clip rect area

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:67](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L67)

___

### keyColor

• `get` **keyColor**(): `Color`

Get the chromakey color

#### Returns

`Color`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:88](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L88)

• `set` **keyColor**(`value`): `void`

Set the chromakey color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Color` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:81](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L81)

___

### colorCutoff

• `get` **colorCutoff**(): `number`

Get the color cutoff factor

#### Returns

`number`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:102](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L102)

• `set` **colorCutoff**(`value`): `void`

Set the color cutoff factor

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:95](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L95)

___

### colorFeathering

• `get` **colorFeathering**(): `number`

Get the color feather factor

#### Returns

`number`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:116](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L116)

• `set` **colorFeathering**(`value`): `void`

Set the color feather factor

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:109](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L109)

___

### maskFeathering

• `get` **maskFeathering**(): `number`

Get the mask feather factor

#### Returns

`number`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:130](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L130)

• `set` **maskFeathering**(`value`): `void`

Set the mask feather factor

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L123)

___

### sharpening

• `get` **sharpening**(): `number`

Get the sharpen factor

#### Returns

`number`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:144](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L144)

• `set` **sharpening**(`value`): `void`

Set the sharpen factor

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:137](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L137)

___

### despoil

• `get` **despoil**(): `number`

Get the despoil factor

#### Returns

`number`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:158](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L158)

• `set` **despoil**(`value`): `void`

Set the despoil factor

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:151](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L151)

___

### despoilLuminanceAdd

• `get` **despoilLuminanceAdd**(): `number`

Get the despoil luminance factor

#### Returns

`number`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:172](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L172)

• `set` **despoilLuminanceAdd**(`value`): `void`

Set the despoil luminance factor

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:165](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L165)

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

Show a debug GUI

#### Returns

`void`

#### Defined in

[packages/media-extention/ChromaKeyMaterial.ts:179](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ChromaKeyMaterial.ts#L179)

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
