[**@orillusion/core**](../README.md)

***

# Class: OutlinePostManager

Defined in: [src/io/OutlineManager.ts:10](https://github.com/orillusion/orillusion/blob/main/src/io/OutlineManager.ts#L10)

manager of outline effect

## Constructors

### Constructor

> **new OutlinePostManager**(): `OutlinePostManager`

#### Returns

`OutlinePostManager`

## Methods

### setOutline()

> **setOutline**(`objectList`, `color?`): `void`

Defined in: [src/io/OutlineManager.ts:20](https://github.com/orillusion/orillusion/blob/main/src/io/OutlineManager.ts#L20)

config outline manager.
Specify specific 3D objects to use the specified color for display outline

#### Parameters

##### objectList

[`Object3D`](Object3D.md)[]

A set of 3D objects

##### color?

[`Color`](Color.md)

Specified color for outline

#### Returns

`void`

***

### setOutlineList()

> **setOutlineList**(`groupList`, `colorList?`): `void`

Defined in: [src/io/OutlineManager.ts:30](https://github.com/orillusion/orillusion/blob/main/src/io/OutlineManager.ts#L30)

config outline manager.
The first set of objects uses the first color to display outline, and so on

#### Parameters

##### groupList

[`Object3D`](Object3D.md)[][]

A group of 3D objects set

##### colorList?

[`Color`](Color.md)[]

Specified color list for outline

#### Returns

`void`

***

### clearOutline()

> **clearOutline**(): `this`

Defined in: [src/io/OutlineManager.ts:50](https://github.com/orillusion/orillusion/blob/main/src/io/OutlineManager.ts#L50)

clear outline effect

#### Returns

`this`
