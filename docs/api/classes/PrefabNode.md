[**@orillusion/core**](../README.md)

***

# Class: PrefabNode

Defined in: [src/loader/parser/prefab/prefabData/PrefabNode.ts:27](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L27)

## Constructors

### Constructor

> **new PrefabNode**(): `PrefabNode`

#### Returns

`PrefabNode`

## Properties

### name

> **name**: `string`

Defined in: [src/loader/parser/prefab/prefabData/PrefabNode.ts:28](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L28)

***

### parentName

> **parentName**: `string`

Defined in: [src/loader/parser/prefab/prefabData/PrefabNode.ts:30](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L30)

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [src/loader/parser/prefab/prefabData/PrefabNode.ts:32](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L32)

***

### rotation

> **rotation**: [`Quaternion`](Quaternion.md)

Defined in: [src/loader/parser/prefab/prefabData/PrefabNode.ts:34](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L34)

***

### scale

> **scale**: [`Vector3`](Vector3.md)

Defined in: [src/loader/parser/prefab/prefabData/PrefabNode.ts:36](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L36)

***

### comDatas

> **comDatas**: [`ComData`](ComData.md)[]

Defined in: [src/loader/parser/prefab/prefabData/PrefabNode.ts:38](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L38)

***

### child

> **child**: `PrefabNode`[]

Defined in: [src/loader/parser/prefab/prefabData/PrefabNode.ts:40](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L40)

## Methods

### parser()

> `static` **parser**(`bytesArray`): `PrefabNode`

Defined in: [src/loader/parser/prefab/prefabData/PrefabNode.ts:42](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/prefab/prefabData/PrefabNode.ts#L42)

#### Parameters

##### bytesArray

`BytesArray`

#### Returns

`PrefabNode`
