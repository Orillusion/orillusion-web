# Class: Object3DUtil

### Constructors

- [constructor](Object3DUtil.md#constructor)

### Accessors

- [CubeMesh](Object3DUtil.md#cubemesh)
- [SphereMesh](Object3DUtil.md#spheremesh)
- [Sphere](Object3DUtil.md#sphere)

### Methods

- [GetCube](Object3DUtil.md#getcube)
- [GetSingleCube](Object3DUtil.md#getsinglecube)
- [GetSingleSphere](Object3DUtil.md#getsinglesphere)
- [GetSingleCube2](Object3DUtil.md#getsinglecube2)

## Constructors

### constructor

• **new Object3DUtil**()

## Accessors

### CubeMesh

• `Static` `get` **CubeMesh**(): [`BoxGeometry`](BoxGeometry.md)

#### Returns

[`BoxGeometry`](BoxGeometry.md)

#### Defined in

[src/util/Object3DUtil.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L24)

___

### SphereMesh

• `Static` `get` **SphereMesh**(): [`SphereGeometry`](SphereGeometry.md)

#### Returns

[`SphereGeometry`](SphereGeometry.md)

#### Defined in

[src/util/Object3DUtil.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L29)

___

### Sphere

• `Static` `get` **Sphere**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L73)

## Methods

### GetCube

▸ `Static` **GetCube**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L34)

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

[src/util/Object3DUtil.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L45)

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

[src/util/Object3DUtil.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L59)

___

### GetSingleCube2

▸ `Static` **GetSingleCube2**(`mat`, `size?`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mat` | `MaterialBase` | `undefined` |
| `size` | `number` | `10` |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L83)
