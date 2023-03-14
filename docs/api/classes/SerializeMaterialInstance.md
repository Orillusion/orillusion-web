# Class: SerializeMaterialInstance

## Hierarchy

- [`SerializeIndex`](SerializeIndex.md)

  ↳ **`SerializeMaterialInstance`**


### Constructors

- [constructor](SerializeMaterialInstance.md#constructor)

### Properties

- [vsShader](SerializeMaterialInstance.md#vsshader)
- [fsShader](SerializeMaterialInstance.md#fsshader)
- [className](SerializeMaterialInstance.md#classname)
- [textures](SerializeMaterialInstance.md#textures)
- [uniforms](SerializeMaterialInstance.md#uniforms)
- [shaderState](SerializeMaterialInstance.md#shaderstate)
- [defineValue](SerializeMaterialInstance.md#definevalue)
- [constValues](SerializeMaterialInstance.md#constvalues)
- [index](SerializeMaterialInstance.md#index)
- [name](SerializeMaterialInstance.md#name)

## Constructors

### constructor

• **new SerializeMaterialInstance**()

#### Inherited from

[SerializeIndex](SerializeIndex.md).[constructor](SerializeIndex.md#constructor)

## Properties

### vsShader

• **vsShader**: `string`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L14)

___

### fsShader

• **fsShader**: `string`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L15)

___

### className

• **className**: [`MaterialClassName`](../types/MaterialClassName.md)

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L16)

___

### textures

• **textures**: `Object`

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L17)

___

### uniforms

• **uniforms**: `Object`

#### Index signature

▪ [key: `string`]: [`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L18)

___

### shaderState

• **shaderState**: `any`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L19)

___

### defineValue

• **defineValue**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L20)

___

### constValues

• **constValues**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[src/engine/util/serialize/SerializeAssetInstance.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeAssetInstance.ts#L21)

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
