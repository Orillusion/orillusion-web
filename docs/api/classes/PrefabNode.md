# Class: PrefabNode

### Constructors

- [constructor](PrefabNode.md#constructor)

### Properties

- [name](PrefabNode.md#name)
- [parentName](PrefabNode.md#parentname)
- [position](PrefabNode.md#position)
- [rotation](PrefabNode.md#rotation)
- [scale](PrefabNode.md#scale)
- [comDatas](PrefabNode.md#comdatas)
- [child](PrefabNode.md#child)

### Methods

- [parser](PrefabNode.md#parser)

## Constructors

### constructor

• **new PrefabNode**()

## Properties

### name

• **name**: `string`

#### Defined in

[src/loader/parser/prefab/prefabData/PrefabNode.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L28)

___

### parentName

• **parentName**: `string`

#### Defined in

[src/loader/parser/prefab/prefabData/PrefabNode.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L30)

___

### position

• **position**: [`Vector3`](Vector3.md)

#### Defined in

[src/loader/parser/prefab/prefabData/PrefabNode.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L32)

___

### rotation

• **rotation**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/loader/parser/prefab/prefabData/PrefabNode.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L34)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

#### Defined in

[src/loader/parser/prefab/prefabData/PrefabNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L36)

___

### comDatas

• **comDatas**: [`ComData`](ComData.md)[]

#### Defined in

[src/loader/parser/prefab/prefabData/PrefabNode.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L38)

___

### child

• **child**: [`PrefabNode`](PrefabNode.md)[]

#### Defined in

[src/loader/parser/prefab/prefabData/PrefabNode.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L40)

## Methods

### parser

▸ `Static` **parser**(`bytesArray`): [`PrefabNode`](PrefabNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesArray` | `BytesArray` |

#### Returns

[`PrefabNode`](PrefabNode.md)

#### Defined in

[src/loader/parser/prefab/prefabData/PrefabNode.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L42)
