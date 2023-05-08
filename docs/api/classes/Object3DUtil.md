# Class: Object3DUtil


### Methods

- [genMeshBounds](Object3DUtil.md#genmeshbounds)
- [GetCube](Object3DUtil.md#getcube)
- [GetSingleCube](Object3DUtil.md#getsinglecube)
- [GetSingleSphere](Object3DUtil.md#getsinglesphere)
- [getSinglepCube](Object3DUtil.md#getsinglepcube)

### Accessors

- [CubeMesh](Object3DUtil.md#cubemesh)
- [SphereMesh](Object3DUtil.md#spheremesh)
- [Sphere](Object3DUtil.md#sphere)

### Constructors

- [constructor](Object3DUtil.md#constructor)

## Methods

### genMeshBounds

▸ `Static` **genMeshBounds**(`obj`): `BoundingBox`

Merge the bounding boxes that have been added to the world matrix based on the mesh of the children node

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`BoundingBox`

#### Defined in

[src/util/Object3DUtil.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L18)

___

### GetCube

▸ `Static` **GetCube**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L75)

___

### GetSingleCube

▸ `Static` **GetSingleCube**(`sizeX`, `sizeY`, `sizeZ`, `r`, `g`, `b`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sizeX` | `number` |
| `sizeY` | `number` |
| `sizeZ` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L86)

___

### GetSingleSphere

▸ `Static` **GetSingleSphere**(`radius`, `r`, `g`, `b`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L100)

___

### getSinglepCube

▸ `Static` **getSinglepCube**(`mat`, `size?`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mat` | `MaterialBase` | `undefined` |
| `size` | `number` | `10` |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L124)

## Accessors

### CubeMesh

• `Static` `get` **CubeMesh**(): [`BoxGeometry`](BoxGeometry.md)

#### Returns

[`BoxGeometry`](BoxGeometry.md)

#### Defined in

[src/util/Object3DUtil.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L65)

___

### SphereMesh

• `Static` `get` **SphereMesh**(): [`SphereGeometry`](SphereGeometry.md)

#### Returns

[`SphereGeometry`](SphereGeometry.md)

#### Defined in

[src/util/Object3DUtil.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L70)

___

### Sphere

• `Static` `get` **Sphere**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L114)

## Constructors

### constructor

• **new Object3DUtil**()
