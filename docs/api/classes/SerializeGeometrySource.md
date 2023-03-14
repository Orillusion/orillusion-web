# Class: SerializeGeometrySource


### Constructors

- [constructor](SerializeGeometrySource.md#constructor)

### Properties

- [type](SerializeGeometrySource.md#type)
- [index](SerializeGeometrySource.md#index)
- [key](SerializeGeometrySource.md#key)
- [srcGLTF](SerializeGeometrySource.md#srcgltf)
- [srcGLB](SerializeGeometrySource.md#srcglb)

### Methods

- [setPrimitive](SerializeGeometrySource.md#setprimitive)
- [setObjGeometry](SerializeGeometrySource.md#setobjgeometry)
- [setGLTFGeometry](SerializeGeometrySource.md#setgltfgeometry)
- [setGLBGeometry](SerializeGeometrySource.md#setglbgeometry)

## Constructors

### constructor

• **new SerializeGeometrySource**()

## Properties

### type

• **type**: [`GeometryType`](../types/GeometryType.md)

#### Defined in

[src/engine/util/serialize/SerializeGeometrySource.ts:4](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeGeometrySource.ts#L4)

___

### index

• `Optional` **index**: `number` \| `number`[]

#### Defined in

[src/engine/util/serialize/SerializeGeometrySource.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeGeometrySource.ts#L5)

___

### key

• `Optional` **key**: `string`

#### Defined in

[src/engine/util/serialize/SerializeGeometrySource.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeGeometrySource.ts#L6)

___

### srcGLTF

• `Optional` **srcGLTF**: `string`

#### Defined in

[src/engine/util/serialize/SerializeGeometrySource.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeGeometrySource.ts#L7)

___

### srcGLB

• `Optional` **srcGLB**: `string`

#### Defined in

[src/engine/util/serialize/SerializeGeometrySource.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeGeometrySource.ts#L8)

## Methods

### setPrimitive

▸ **setPrimitive**(`type`): [`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`GeometryType`](../types/GeometryType.md) |

#### Returns

[`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Defined in

[src/engine/util/serialize/SerializeGeometrySource.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeGeometrySource.ts#L10)

___

### setObjGeometry

▸ **setObjGeometry**(`url`, `key`): [`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `key` | `string` |

#### Returns

[`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Defined in

[src/engine/util/serialize/SerializeGeometrySource.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeGeometrySource.ts#L15)

___

### setGLTFGeometry

▸ **setGLTFGeometry**(`gltf`, `key`): [`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gltf` | `string` |
| `key` | `string` |

#### Returns

[`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Defined in

[src/engine/util/serialize/SerializeGeometrySource.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeGeometrySource.ts#L21)

___

### setGLBGeometry

▸ **setGLBGeometry**(`glb`, `index`): [`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `glb` | `string` |
| `index` | `number` |

#### Returns

[`SerializeGeometrySource`](SerializeGeometrySource.md)

#### Defined in

[src/engine/util/serialize/SerializeGeometrySource.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeGeometrySource.ts#L28)
