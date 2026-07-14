[**@orillusion/core**](../README.md)

***

# Class: ZSorterUtil

Defined in: [src/util/ZSorterUtil.ts:11](https://github.com/orillusion/orillusion/blob/main/src/util/ZSorterUtil.ts#L11)

Sort a data with world coordinates based on the camera's camera by z

## Constructors

### Constructor

> **new ZSorterUtil**(): `ZSorterUtil`

#### Returns

`ZSorterUtil`

## Methods

### sort()

> **sort**(`camera3D`, `userDataList`, `getObject3D`, `result?`): `any`[]

Defined in: [src/util/ZSorterUtil.ts:39](https://github.com/orillusion/orillusion/blob/main/src/util/ZSorterUtil.ts#L39)

Sort userDataList by z based on the view coordinates of camera3D

#### Parameters

##### camera3D

[`Camera3D`](Camera3D.md)

camera3D

##### userDataList

`any`[]

List of objects that users need to sort

##### getObject3D

(`userData`) => [`Object3D`](Object3D.md)

Obtain the function of the Object 3D reference based on userData

##### result?

`any`[]

Returns a list of userData, and if passed in as null, instantiates one

#### Returns

`any`[]

***

### worldToCameraDepth()

> **worldToCameraDepth**(`obj3d`, `camera?`): `number`

Defined in: [src/util/ZSorterUtil.ts:61](https://github.com/orillusion/orillusion/blob/main/src/util/ZSorterUtil.ts#L61)

#### Parameters

##### obj3d

[`Object3D`](Object3D.md)

##### camera?

[`Camera3D`](Camera3D.md)

#### Returns

`number`
