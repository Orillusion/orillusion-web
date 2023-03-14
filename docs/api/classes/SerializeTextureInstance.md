# Class: SerializeTextureInstance

## Hierarchy

- [`SerializeIndex`](SerializeIndex.md)

  ↳ **`SerializeTextureInstance`**


### Constructors

- [constructor](SerializeTextureInstance.md#constructor)

### Properties

- [data](SerializeTextureInstance.md#data)
- [textureSource](SerializeTextureInstance.md#texturesource)
- [compare](SerializeTextureInstance.md#compare)
- [minFilter](SerializeTextureInstance.md#minfilter)
- [magFilter](SerializeTextureInstance.md#magfilter)
- [mipmapFilter](SerializeTextureInstance.md#mipmapfilter)
- [addressModeU](SerializeTextureInstance.md#addressmodeu)
- [addressModeV](SerializeTextureInstance.md#addressmodev)
- [visibility](SerializeTextureInstance.md#visibility)
- [format](SerializeTextureInstance.md#format)
- [lodMinClamp](SerializeTextureInstance.md#lodminclamp)
- [lodMaxClamp](SerializeTextureInstance.md#lodmaxclamp)
- [useMipmap](SerializeTextureInstance.md#usemipmap)
- [flipY](SerializeTextureInstance.md#flipy)
- [index](SerializeTextureInstance.md#index)
- [name](SerializeTextureInstance.md#name)

## Constructors

### constructor

• **new SerializeTextureInstance**()

#### Inherited from

[SerializeIndex](SerializeIndex.md).[constructor](SerializeIndex.md#constructor)

## Properties

### data

• `Optional` **data**: `any`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L25)

___

### textureSource

• **textureSource**: [`SerializeTextureSource`](SerializeTextureSource.md)

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L26)

___

### compare

• **compare**: `GPUCompareFunction`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L27)

___

### minFilter

• **minFilter**: `GPUFilterMode`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L28)

___

### magFilter

• **magFilter**: `GPUFilterMode`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L29)

___

### mipmapFilter

• **mipmapFilter**: `GPUMipmapFilterMode`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L30)

___

### addressModeU

• **addressModeU**: `GPUAddressMode`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L31)

___

### addressModeV

• **addressModeV**: `GPUAddressMode`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L32)

___

### visibility

• **visibility**: `number`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L33)

___

### format

• **format**: `GPUTextureFormat`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L34)

___

### lodMinClamp

• **lodMinClamp**: `number`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L35)

___

### lodMaxClamp

• **lodMaxClamp**: `number`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L36)

___

### useMipmap

• **useMipmap**: `boolean`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L37)

___

### flipY

• **flipY**: `boolean`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L39)

___

### index

• **index**: `number` = `-1`

#### Inherited from

[SerializeIndex](SerializeIndex.md).[index](SerializeIndex.md#index)

#### Defined in

[src/engine/util/serialize/SerializeData.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L26)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[SerializeIndex](SerializeIndex.md).[name](SerializeIndex.md#name)

#### Defined in

[src/engine/util/serialize/SerializeData.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeData.ts#L27)
