[**@orillusion/core**](../README.md)

***

# Class: CameraUtil

Defined in: [src/util/CameraUtil.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/util/CameraUtil.ts#L19)

Camera3D tool class

## Constructors

### Constructor

> **new CameraUtil**(): `CameraUtil`

#### Returns

`CameraUtil`

## Methods

### createCamera3DObject()

> `static` **createCamera3DObject**(`parent?`, `name?`): [`Camera3D`](Camera3D.md)

Defined in: [src/util/CameraUtil.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/util/CameraUtil.ts#L26)

create a Camera3D component

#### Parameters

##### parent?

[`Object3D`](Object3D.md)

parent object3D

##### name?

`string`

set name to the owner of this camera3D

#### Returns

[`Camera3D`](Camera3D.md)

***

### UnProjectionNDC()

> `static` **UnProjectionNDC**(`ndcX`, `ndcY`, `sZ`, `camera`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/util/CameraUtil.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/util/CameraUtil.ts#L71)

Unproject a normalized-device-coordinate point (x, y in [-1, 1], y up)
at depth `sZ` to world space.

#### Parameters

##### ndcX

`number`

NDC x

##### ndcY

`number`

NDC y

##### sZ

`number`

NDC depth

##### camera

[`Camera3D`](Camera3D.md)

camera to unproject through

##### target?

[`Vector3`](Vector3.md)

optional output

#### Returns

[`Vector3`](Vector3.md)
