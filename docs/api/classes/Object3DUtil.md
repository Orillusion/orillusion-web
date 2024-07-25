# Class: Object3DUtil

### Constructors

- [constructor](Object3DUtil.md#constructor)

### Accessors

- [CubeMesh](Object3DUtil.md#cubemesh)
- [SphereMesh](Object3DUtil.md#spheremesh)
- [Sphere](Object3DUtil.md#sphere)

### Methods

- [GetCube](Object3DUtil.md#getcube)
- [GetMaterial](Object3DUtil.md#getmaterial)
- [GetPlane](Object3DUtil.md#getplane)
- [GetSingleCube](Object3DUtil.md#getsinglecube)
- [GetSingleSphere](Object3DUtil.md#getsinglesphere)
- [GetSingleCube2](Object3DUtil.md#getsinglecube2)
- [GetPointLight](Object3DUtil.md#getpointlight)

## Constructors

### constructor

• **new Object3DUtil**(): [`Object3DUtil`](Object3DUtil.md)

#### Returns

[`Object3DUtil`](Object3DUtil.md)

## Accessors

### CubeMesh

• `get` **CubeMesh**(): [`BoxGeometry`](BoxGeometry.md)

#### Returns

[`BoxGeometry`](BoxGeometry.md)

#### Defined in

[src/util/Object3DUtil.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L37)

___

### SphereMesh

• `get` **SphereMesh**(): [`SphereGeometry`](SphereGeometry.md)

#### Returns

[`SphereGeometry`](SphereGeometry.md)

#### Defined in

[src/util/Object3DUtil.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L42)

___

### Sphere

• `get` **Sphere**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L111)

## Methods

### GetCube

▸ **GetCube**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L47)

___

### GetMaterial

▸ **GetMaterial**(`tex`): [`Material`](Material.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | [`Texture`](Texture.md) |

#### Returns

[`Material`](Material.md)

#### Defined in

[src/util/Object3DUtil.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L57)

___

### GetPlane

▸ **GetPlane**(`tex`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | [`Texture`](Texture.md) |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L67)

___

### GetSingleCube

▸ **GetSingleCube**(`sizeX`, `sizeY`, `sizeZ`, `r`, `g`, `b`): [`Object3D`](Object3D.md)

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

[src/util/Object3DUtil.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L81)

___

### GetSingleSphere

▸ **GetSingleSphere**(`radius`, `r`, `g`, `b`): [`Object3D`](Object3D.md)

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

[src/util/Object3DUtil.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L97)

___

### GetSingleCube2

▸ **GetSingleCube2**(`mat`, `size?`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mat` | [`Material`](Material.md) | `undefined` |
| `size` | `number` | `10` |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/Object3DUtil.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L121)

___

### GetPointLight

▸ **GetPointLight**(`pos`, `rotation`, `radius`, `r`, `g`, `b`, `intensity?`, `castShadow?`): [`PointLight`](PointLight.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `radius` | `number` | `undefined` |
| `r` | `number` | `undefined` |
| `g` | `number` | `undefined` |
| `b` | `number` | `undefined` |
| `intensity` | `number` | `1` |
| `castShadow` | `boolean` | `true` |

#### Returns

[`PointLight`](PointLight.md)

#### Defined in

[src/util/Object3DUtil.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/util/Object3DUtil.ts#L132)
