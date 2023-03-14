# Class: SerializeTextureSource


### Constructors

- [constructor](SerializeTextureSource.md#constructor)

### Properties

- [type](SerializeTextureSource.md#type)
- [url](SerializeTextureSource.md#url)
- [index](SerializeTextureSource.md#index)
- [srcGLTF](SerializeTextureSource.md#srcgltf)
- [srcGLB](SerializeTextureSource.md#srcglb)
- [base64](SerializeTextureSource.md#base64)
- [name](SerializeTextureSource.md#name)

### Methods

- [setInternalImage](SerializeTextureSource.md#setinternalimage)
- [setNetImage](SerializeTextureSource.md#setnetimage)
- [setHDRNetImage](SerializeTextureSource.md#sethdrnetimage)
- [setNetImageBase64](SerializeTextureSource.md#setnetimagebase64)
- [setImageBase64](SerializeTextureSource.md#setimagebase64)
- [setGLTFImage](SerializeTextureSource.md#setgltfimage)
- [setGLBImage](SerializeTextureSource.md#setglbimage)
- [setCubeStd](SerializeTextureSource.md#setcubestd)
- [setCubeLDR](SerializeTextureSource.md#setcubeldr)
- [setCubeHDR](SerializeTextureSource.md#setcubehdr)
- [setCubeFace6](SerializeTextureSource.md#setcubeface6)
- [setCubeAtmosphericScattering](SerializeTextureSource.md#setcubeatmosphericscattering)
- [setCubeSolidColor](SerializeTextureSource.md#setcubesolidcolor)
- [setVideo](SerializeTextureSource.md#setvideo)

## Constructors

### constructor

• **new SerializeTextureSource**()

## Properties

### type

• **type**: [`TextureAssetType`](../types/TextureAssetType.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L11)

___

### url

• `Optional` **url**: `string` \| `string`[]

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L12)

___

### index

• `Optional` **index**: `number` \| `number`[]

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L13)

___

### srcGLTF

• `Optional` **srcGLTF**: `string`

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L14)

___

### srcGLB

• `Optional` **srcGLB**: `string`

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L15)

___

### base64

• `Optional` **base64**: `string`

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L16)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L17)

## Methods

### setInternalImage

▸ **setInternalImage**(`name`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L19)

___

### setNetImage

▸ **setNetImage**(`url`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L25)

___

### setHDRNetImage

▸ **setHDRNetImage**(`url`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L31)

___

### setNetImageBase64

▸ **setNetImageBase64**(`url`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L37)

___

### setImageBase64

▸ **setImageBase64**(`base64`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base64` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L43)

___

### setGLTFImage

▸ **setGLTFImage**(`gltf`, `index`, `url`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gltf` | `string` |
| `index` | `number` |
| `url` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L49)

___

### setGLBImage

▸ **setGLBImage**(`glb`, `index`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `glb` | `string` |
| `index` | `number` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L57)

___

### setCubeStd

▸ **setCubeStd**(`url`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L64)

___

### setCubeLDR

▸ **setCubeLDR**(`url`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L70)

___

### setCubeHDR

▸ **setCubeHDR**(`url`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L76)

___

### setCubeFace6

▸ **setCubeFace6**(`url`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string`[] |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L82)

___

### setCubeAtmosphericScattering

▸ **setCubeAtmosphericScattering**(): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L88)

___

### setCubeSolidColor

▸ **setCubeSolidColor**(): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L93)

___

### setVideo

▸ **setVideo**(`url`): [`SerializeTextureSource`](SerializeTextureSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeTextureSource.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeTextureSource.ts#L98)
