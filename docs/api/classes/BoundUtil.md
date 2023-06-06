# Class: BoundUtil

### Constructors

- [constructor](BoundUtil.md#constructor)

### Methods

- [genMeshBounds](BoundUtil.md#genmeshbounds)
- [transformBound](BoundUtil.md#transformbound)

## Constructors

### constructor

• **new BoundUtil**()

## Methods

### genMeshBounds

▸ `Static` **genMeshBounds**(`obj`, `bound?`): `BoundingBox`

Merge the bounding boxes that have been added to the world matrix based on the mesh of the children node

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |
| `bound?` | `BoundingBox` |

#### Returns

`BoundingBox`

#### Defined in

[src/util/BoundUtil.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/util/BoundUtil.ts#L17)

___

### transformBound

▸ `Static` **transformBound**(`matrix`, `source`, `bound?`): `BoundingBox`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) |
| `source` | `BoundingBox` |
| `bound?` | `BoundingBox` |

#### Returns

`BoundingBox`

#### Defined in

[src/util/BoundUtil.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/util/BoundUtil.ts#L57)
