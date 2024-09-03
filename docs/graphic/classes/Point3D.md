# Class: Point3D

Used to describe the key points for drawing a path, where xy refers to the data in the xz direction. H is the data in the y direction
If you want to give this Shape transform attribute, you can control the transformation of the binded Object3D to achieve the goal

**`Export`**

### Constructors

- [constructor](Point3D.md#constructor)

### Properties

- [HELP\_0](Point3D.md#help_0)
- [HELP\_1](Point3D.md#help_1)
- [HELP\_2](Point3D.md#help_2)
- [x](Point3D.md#x)
- [y](Point3D.md#y)
- [h](Point3D.md#h)
- [invalid](Point3D.md#invalid)

### Methods

- [set](Point3D.md#set)
- [copyFrom](Point3D.md#copyfrom)

## Constructors

### constructor

• **new Point3D**(`x?`, `y?`, `h?`, `invalid?`): [`Point3D`](Point3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `h` | `number` | `0` |
| `invalid?` | `boolean` | `undefined` |

#### Returns

[`Point3D`](Point3D.md)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:58](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L58)

## Properties

### HELP\_0

▪ `Static` **HELP\_0**: [`Point3D`](Point3D.md)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L54)

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Point3D`](Point3D.md)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:55](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L55)

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Point3D`](Point3D.md)

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:56](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L56)

___

### x

• **x**: `number`

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:77](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L77)

___

### y

• **y**: `number`

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:78](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L78)

___

### h

• **h**: `number`

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:79](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L79)

___

### invalid

• **invalid**: `boolean`

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:80](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L80)

## Methods

### set

▸ **set**(`x`, `y`, `h?`, `invalid?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `h` | `number` | `0` |
| `invalid?` | `boolean` | `undefined` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:62](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L62)

___

### copyFrom

▸ **copyFrom**(`src`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`Point3D`](Point3D.md) |

#### Returns

`this`

#### Defined in

[packages/graphic/renderer/shape3d/Shape3D.ts:69](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/shape3d/Shape3D.ts#L69)
