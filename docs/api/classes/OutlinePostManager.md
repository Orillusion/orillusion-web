# Class: OutlinePostManager

manager of outline effect

### Constructors

- [constructor](OutlinePostManager.md#constructor)

### Methods

- [setOutline](OutlinePostManager.md#setoutline)
- [setOutlineList](OutlinePostManager.md#setoutlinelist)
- [clearOutline](OutlinePostManager.md#clearoutline)

## Constructors

### constructor

• **new OutlinePostManager**()

## Methods

### setOutline

▸ **setOutline**(`objectList`, `color?`): `void`

config outline manager.
Specify specific 3D objects to use the specified color for display outline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectList` | [`Object3D`](Object3D.md)[] | A set of 3D objects |
| `color?` | [`Color`](Color.md) | Specified color for outline |

#### Returns

`void`

#### Defined in

[src/io/OutlineManager.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlineManager.ts#L20)

___

### setOutlineList

▸ **setOutlineList**(`groupList`, `colorList?`): `void`

config outline manager.
The first set of objects uses the first color to display outline, and so on

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupList` | [`Object3D`](Object3D.md)[][] | A group of 3D objects set |
| `colorList?` | [`Color`](Color.md)[] | Specified color list for outline |

#### Returns

`void`

#### Defined in

[src/io/OutlineManager.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlineManager.ts#L30)

___

### clearOutline

▸ **clearOutline**(): [`OutlinePostManager`](OutlinePostManager.md)

clear outline effect

#### Returns

[`OutlinePostManager`](OutlinePostManager.md)

#### Defined in

[src/io/OutlineManager.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/io/OutlineManager.ts#L50)
