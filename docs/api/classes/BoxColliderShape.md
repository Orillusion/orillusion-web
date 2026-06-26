[**@orillusion/core**](../README.md)

***

# Class: BoxColliderShape

Defined in: [src/components/shape/BoxColliderShape.ts:13](https://github.com/orillusion/orillusion/blob/main/src/components/shape/BoxColliderShape.ts#L13)

Box shaped collision body.
It is a basic box shaped primitive collision body.

## Extends

- [`ColliderShape`](ColliderShape.md)

## Constructors

### Constructor

> **new BoxColliderShape**(): `BoxColliderShape`

Defined in: [src/components/shape/BoxColliderShape.ts:20](https://github.com/orillusion/orillusion/blob/main/src/components/shape/BoxColliderShape.ts#L20)

#### Returns

`BoxColliderShape`

#### Overrides

[`ColliderShape`](ColliderShape.md).[`constructor`](ColliderShape.md#constructor)

## Accessors

### shapeType

#### Get Signature

> **get** **shapeType**(): [`ColliderShapeType`](../enumerations/ColliderShapeType.md)

Defined in: [src/components/shape/ColliderShape.ts:41](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L41)

##### Returns

[`ColliderShapeType`](../enumerations/ColliderShapeType.md)

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`shapeType`](ColliderShape.md#shapetype)

***

### center

#### Get Signature

> **get** **center**(): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:60](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L60)

The position of the collision object in the local space of the object.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **center**(`value`): `void`

Defined in: [src/components/shape/ColliderShape.ts:64](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L64)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`center`](ColliderShape.md#center)

***

### size

#### Get Signature

> **get** **size**(): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:73](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L73)

The size of the collision body in the X, Y, and Z directions.

##### Returns

[`Vector3`](Vector3.md)

Vector3

#### Set Signature

> **set** **size**(`value`): `void`

Defined in: [src/components/shape/ColliderShape.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L77)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`size`](ColliderShape.md#size)

***

### halfSize

#### Get Signature

> **get** **halfSize**(): [`Vector3`](Vector3.md)

Defined in: [src/components/shape/ColliderShape.ts:85](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L85)

Half the size of the collision body.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`halfSize`](ColliderShape.md#halfsize)

## Methods

### setFromCenterAndSize()

> **setFromCenterAndSize**(`ct?`, `sz?`): `this`

Defined in: [src/components/shape/ColliderShape.ts:51](https://github.com/orillusion/orillusion/blob/main/src/components/shape/ColliderShape.ts#L51)

Set the position and size of collision objects

#### Parameters

##### ct?

[`Vector3`](Vector3.md)

The position of the collision object in the local space of the object.

##### sz?

[`Vector3`](Vector3.md)

The size of the collision body in the X, Y, and Z directions.

#### Returns

`this`

#### Inherited from

[`ColliderShape`](ColliderShape.md).[`setFromCenterAndSize`](ColliderShape.md#setfromcenterandsize)
