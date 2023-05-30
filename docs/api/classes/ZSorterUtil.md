# Class: ZSorterUtil

Sort a data with world coordinates based on the camera's camera by z

### Constructors

- [constructor](ZSorterUtil.md#constructor)

### Methods

- [sort](ZSorterUtil.md#sort)
- [worldToCameraDepth](ZSorterUtil.md#worldtocameradepth)

## Constructors

### constructor

• **new ZSorterUtil**()

## Methods

### sort

▸ **sort**(`camera3D`, `userDataList`, `getObject3D`, `result?`): `any`[]

Sort userDataList by z based on the view coordinates of camera3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `camera3D` | [`Camera3D`](Camera3D.md) | camera3D |
| `userDataList` | `any`[] | List of objects that users need to sort |
| `getObject3D` | (`userData`: `any`) => [`Object3D`](Object3D.md) | Obtain the function of the Object 3D reference based on userData |
| `result?` | `any`[] | Returns a list of userData, and if passed in as null, instantiates one |

#### Returns

`any`[]

#### Defined in

[src/util/ZSorterUtil.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/util/ZSorterUtil.ts#L39)

___

### worldToCameraDepth

▸ **worldToCameraDepth**(`obj3d`, `camera?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj3d` | [`Object3D`](Object3D.md) |
| `camera?` | [`Camera3D`](Camera3D.md) |

#### Returns

`number`

#### Defined in

[src/util/ZSorterUtil.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/util/ZSorterUtil.ts#L61)
